import { NextResponse } from "next/server";
import swell from "../../../lib/swell/client";

export async function GET() {
  const data = await swell.products.get("modern-shoes-for-athlete");
  return NextResponse.json(data);
}
