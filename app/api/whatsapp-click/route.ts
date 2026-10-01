import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = "VIP Client Inquiry",
      city = "Hyderabad",
      actionType = "WhatsApp",
      targetNumber = "+918294107610",
      site = "calgirlriya",
      pageUrl = "",
      timestamp = new Date().toISOString(),
    } = body;

    const emailUser = process.env.EMAIL_USER || "homelander62056@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "pntjwfycbxsblupn";

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const formattedTime = new Date(timestamp).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      });

      const isCall = actionType === "Call";
      const icon = isCall ? "📞" : "💬";
      const actionTitle = isCall ? "Direct Phone Call Click" : "WhatsApp Chat Click";
      const themeColor = isCall ? "#ff2b54" : "#25D366";

      const mailOptions = {
        from: `"calgirlriya Alert" <${emailUser}>`,
        to: emailUser,
        subject: `${icon} [${actionType.toUpperCase()}] New Lead: ${name} (${city}) - calgirlriya`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0c0a09; color: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #27272a;">
            <div style="text-align: center; border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: ${themeColor}; margin: 0; font-size: 24px;">${icon} ${actionTitle}</h2>
              <p style="color: #a1a1aa; font-size: 14px; margin-top: 4px;">A customer just clicked to connect on <strong>calgirlriya.in</strong></p>
            </div>

            <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #f4f4f5;">
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa; width: 40%;">Action Type:</td>
                  <td style="padding: 10px 0; color: ${themeColor}; font-weight: bold; font-size: 15px;">${icon} ${actionType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Target Companion:</td>
                  <td style="padding: 10px 0; font-size: 16px; font-weight: bold; color: #ffffff;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Location / City:</td>
                  <td style="padding: 10px 0; font-weight: bold; color: #fb7185;">${city}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Contact Number:</td>
                  <td style="padding: 10px 0; font-weight: bold; color: #38bdf8;">${targetNumber}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Time (IST):</td>
                  <td style="padding: 10px 0; color: #e4e4e7;">${formattedTime}</td>
                </tr>
                ${
                  pageUrl
                    ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Page URL:</td>
                  <td style="padding: 10px 0; word-break: break-all; color: #a1a1aa; font-size: 12px;">${pageUrl}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>

            <div style="text-align: center; color: #71717a; font-size: 12px;">
              <p style="margin: 0;">Automated lead alert generated for <strong>${site}</strong></p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(
        `[Email Alert] Successfully sent ${actionType} lead alert for ${name} (${city}) to ${emailUser}`
      );
    }

    return NextResponse.json({ success: true, received: body }, { status: 200 });
  } catch (error: any) {
    console.error("[Email Alert Error]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead alert" },
      { status: 500 }
    );
  }
}
