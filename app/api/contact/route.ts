import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, mensaje } = body;

    if (!nombre || !email || !telefono) {
      return NextResponse.json(
        { error: "Nombre, email y teléfono son obligatorios." },
        { status: 400 }
      );
    }

    // TODO: Configure your email service here (Resend, SendGrid, Nodemailer, etc.)
    // For now, we log the lead and return success.
    console.log("--- Nuevo Lead ---");
    console.log({ nombre, email, telefono, empresa, mensaje });
    console.log("------------------");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
