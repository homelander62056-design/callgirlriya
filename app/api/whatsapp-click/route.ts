import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = "VIP Escort Model",
      city = "Hyderabad",
      whatsappNumber = "+918294107610",
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

      const mailOptions = {
        from: `"calgirlriya" <${emailUser}>`,
        to: emailUser,
        subject: `🔥 calgirlriya: ${name} (${city})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0c0a09; color: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #27272a;">
            <div style="text-align: center; border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #ff2d55; margin: 0; font-size: 24px;">calgirlriya</h2>
              <p style="color: #a1a1aa; font-size: 14px; margin-top: 4px;">A client just clicked to connect on WhatsApp!</p>
            </div>

            <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #f4f4f5;">
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa; width: 40%;">Website / Brand:</td>
                  <td style="padding: 10px 0; color: #ff2d55; font-weight: bold;">${site}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Model Name:</td>
                  <td style="padding: 10px 0; font-size: 16px; font-weight: bold; color: #34d399;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Locality / City:</td>
                  <td style="padding: 10px 0; font-weight: bold;">${city}, Hyderabad</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Target WhatsApp:</td>
                  <td style="padding: 10px 0; font-weight: bold; color: #38bdf8;">${whatsappNumber}</td>
                </tr>
                <tr style="border-bottom: 1px solid #27272a;">
                  <td style="padding: 10px 0; font-weight: bold; color: #a1a1aa;">Time (IST):</td>
                  <td style="padding: 10px 0;">${formattedTime}</td>
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
        `[Email Alert] Successfully sent WhatsApp lead alert for ${name} (${city}) to ${emailUser}`
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
