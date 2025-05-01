import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = data;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Novo contato do portfólio: ${subject}`,
    html: `
      <h3>Novo contato do portfólio</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
      )}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error };
  }
}
