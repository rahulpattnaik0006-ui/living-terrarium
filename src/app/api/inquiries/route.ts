import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, vesselType, lighting, figurine, budget, notes } = body;

    // Basic validation
    if (!name || !phone || !vesselType) {
      return NextResponse.json(
        { error: "Name, phone number, and vessel choice are required." },
        { status: 400 }
      );
    }

    const commissionId = `LT-${Date.now().toString().slice(-5)}`;

    const inquiryRecord = {
      id: commissionId,
      name,
      phone,
      vesselType,
      lighting: lighting || "Natural Ambient",
      figurine: figurine || "None",
      budget: budget || "₹3,000 - ₹5,000",
      notes: notes || "No special requests",
      status: "NEW",
      createdAt: new Date().toISOString(),
    };

    // Server-side log (Replace with supabase.from('inquiries').insert(inquiryRecord))
    console.log("[NEW COMMISSION RECEIVED]:", inquiryRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Commission inquiry logged successfully.",
        data: inquiryRecord,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error processing commission." },
      { status: 500 }
    );
  }
}