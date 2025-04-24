import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Handle GET requests to fetch all blog posts
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany();
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog posts" }), {
      status: 500,
    });
  }
}

// Handle POST requests to create new blog posts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body) {
      return new Response(
        JSON.stringify({ error: "Request body is missing or invalid" }),
        { status: 400 }
      );
    }

    const {
      title,
      slug,
      url,
      categories,
      author,
      published_date,
      comment_count,
      reading_time,
      main_image_url,
      content,
      css_links,
    } = body;

    // Check for required fields
    if (!title || !url || !author || !published_date || !slug) {
      return new Response(
        JSON.stringify({ error: "Missing required fields in request body" }),
        { status: 400 }
      );
    }

    const taskCategories = categories || [];
    const taskCommentCount = parseInt(comment_count, 10) || 0;
    const taskReadingTime = parseInt(reading_time, 10) || 0;

    if (
      isNaN(taskCommentCount) ||
      isNaN(taskReadingTime) ||
      taskCommentCount < 0 ||
      taskReadingTime < 0
    ) {
      return new Response(
        JSON.stringify({
          error: "Invalid or negative comment_count or reading_time value",
        }),
        { status: 400 }
      );
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        url,
        categories: taskCategories,
        author,
        publishedDate: new Date(published_date),
        commentCount: String(taskCommentCount),
        readingTime: String(taskReadingTime),
        mainImageUrl: main_image_url,
        content,
        cssLinks: css_links,
      },
    });

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return new Response(JSON.stringify({ error: "Failed to create blog post" }), {
      status: 500,
    });
  }
}
