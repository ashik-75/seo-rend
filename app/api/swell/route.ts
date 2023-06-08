import { NextResponse } from "next/server";
import swell from "../../../lib/swell/client";

export async function GET() {
  const data = await swell.products.list({
    page: 1,
    limit: 2,
  });
  return NextResponse.json(data);
}
