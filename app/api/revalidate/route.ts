import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const tt = await req.json();
    console.log(req.method);
    const secret = searchParams.get("secret");

    if (secret === process.env.REVALIDATE_SECRET) {
      revalidatePath("/");
      return NextResponse.json({ revalidate: true, tt });
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
