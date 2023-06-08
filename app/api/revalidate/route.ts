import swell from "@/lib/swell/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const payload = await req.json();
    const product = await swell.products.get(payload?.data?.id);
    console.log({ method: req.method, payload, name: product?.name });

    const secret = searchParams.get("secret");

    if (secret === process.env.REVALIDATE_SECRET) {
      revalidatePath("/");
      revalidatePath(`/${product?.slug}`);
      return NextResponse.json({ revalidate: true });
    } else {
      return new NextResponse(null, {
        status: 401,
        statusText: "Restricted path",
      });
    }
  } catch (error) {
    return new NextResponse(null, {
      status: 400,
      statusText: "something went wrong!",
    });
  }
}
