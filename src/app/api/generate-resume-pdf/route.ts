import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { formatFileName } from "@/lib/helper";

export async function POST(request: NextRequest) {
  // Enable CORS if needed
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Parse the request body
    const requestBody = await request.json();
    const { htmlContent, title } = requestBody;

    // Validate input
    if (!htmlContent) {
      return NextResponse.json(
        { message: "HTML content is required" },
        { status: 400 },
      );
    }

    // Launch browser
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    try {
      // Create a new page
      const page = await browser.newPage();

      // Set viewport to A4 paper size
      await page.setViewport({ width: 794, height: 1123 });

      await page.addScriptTag({ path: "./ej2.min.js" });

      // Set content with extended timeout
      await page.setContent(htmlContent, {
        waitUntil: "load",
        timeout: 15000,
      });

      // Optional: Add a delay to ensure rendering
      await page.evaluate(() => {
        return new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 2000);
        });
      });

      // Generate PDF
      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "10mm",
          right: "10mm",
          bottom: "10mm",
          left: "10mm",
        },
        preferCSSPageSize: true,
      });

      // Close the browser
      await browser.close();

      // Return PDF response
      return new NextResponse(pdf, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${formatFileName(title)}.pdf"`,
          ...corsHeaders,
        },
      });
    } finally {
      // Ensure browser is closed
      if (browser) {
        await browser.close();
      }
    }
  } catch (error) {
    console.error("PDF Generation Error:", error);

    // Return error response
    return NextResponse.json(
      {
        message: "Error generating PDF",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// Optional: Add OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
