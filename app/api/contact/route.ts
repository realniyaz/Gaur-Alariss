import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, planType } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Gaur Alaris Leads <sales@gauralariss.in>",
      to: ["realtyfmleads@gmail.com"],
      subject: `New Lead: ${planType || "Cost Sheet / Enquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fbf9f5; color: #0b231e;">
          <h2 style="color: #c5a059;">New Website Lead Received</h2>
          <p><strong>Enquiry Type / Plan:</strong> ${planType || "General Enquiry"}</p>
          <hr style="border: 1px solid #c5a059; opacity: 0.3;" />
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> ${email || "Not provided"}</p>
          <p style="font-size: 11px; color: #666; margin-top: 20px;">Submitted from Gaur Alaris Official Landing Page.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}