import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, planType } = body;

    // 1. Validation Guard
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    // 2. Format Mobile and Timestamps
    const cleanedMobile = phone.replace(/\D/g, "").slice(-10);

    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const submittedDate = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${String(now.getFullYear()).slice(-2)}`;
    const submittedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    // 3. PUSH LEAD TO LEADRAT CRM (Array Payload Format)
    try {
      await fetch("https://connect.leadrat.com/api/v1/integration/Website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": "YTBlMzgxODItZWU0NC00M2I1LThhNDQtZWVlOTg3M2I0ZmFl",
        },
        body: JSON.stringify([
          {
            name: name,
            mobile: cleanedMobile,
            email: email || "",
            countryCode: "91",
            project: "Gaur Alaris",
            property: "Apartment",
            propertyType: planType || "3 & 4 BHK Luxury Residences",
            notes: `Lead Source: Gaur Alaris Landing Page. Typology / Plan: ${planType || "General Enquiry"}`,
            submittedDate: submittedDate,
            submittedTime: submittedTime,
            subsource: "Google",
            leadStatus: "New",
          },
        ]),
      });
    } catch (crmError) {
      console.error("LeadRat CRM Integration Error:", crmError);
    }

    // 4. DISPATCH RESEND EMAIL NOTIFICATION
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || "realtyfmleads@gmail.com";

    const data = await resend.emails.send({
      from: "Gaur Alaris Leads <sales@gauralariss.in>",
      to: [recipientEmail],
      subject: `New Lead: ${planType || "Cost Sheet / Enquiry"} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fbf9f5; color: #0b231e;">
          <h2 style="color: #c5a059;">New Website Lead Received</h2>
          <p><strong>Enquiry Type / Plan:</strong> ${planType || "General Enquiry"}</p>
          <hr style="border: 1px solid #c5a059; opacity: 0.3;" />
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> <a href="tel:${phone}" style="color: #0b231e;">${phone}</a></p>
          <p><strong>Email Address:</strong> ${email || "Not provided"}</p>
          <p style="font-size: 11px; color: #666; margin-top: 20px;">
            Submitted from Gaur Alaris Official Landing Page. Dispatched to LeadRat CRM & Email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Resend / Server error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}