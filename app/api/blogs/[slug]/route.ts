import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ message: "Slug not provided" }, { status: 400 });
    }
    // Fetch the blog by slug using Prisma
    const blog = await prisma.blog.findUnique({
      where: { slug }, // Now using `slug` instead of `title`
    });
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Failed to fetch blog" }, { status: 500 });
  }
}
