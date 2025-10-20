import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(2),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = contactSchema.parse(json);
    await sendEmail(payload);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid submission" }, { status: 400 });
    }

    console.error(error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
