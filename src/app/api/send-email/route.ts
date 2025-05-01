import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error.errors[0].message,
          field: result.error.errors[0].path[0],
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    const emailResult = await sendEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        {
          error: "Erro ao enviar email. Por favor, tente novamente mais tarde.",
          field: "email",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    });
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      {
        error:
          "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
        field: "server",
      },
      { status: 500 }
    );
  }
}
