import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    const result = contactSchema.safeParse(payload);
    if (!result.success)
      return NextResponse.json(
        {
          message: "Please check the form fields.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );

    // Provider-neutral integration point. Add RESEND_API_KEY / SMTP settings and send here.
    console.info("[VEYLO contact]", {
      ...result.data,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true, message: "Message received." });
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
