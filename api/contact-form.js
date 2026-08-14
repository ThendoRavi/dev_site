import nodemailer from "nodemailer";

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
  });
}

async function sendEmail({ name, email, budget, message }) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error("SMTP configuration is missing");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Budget:</strong> ${escapeHtml(budget)}</p><p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

  return transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `New contact from ${name}`,
    html,
    replyTo: email,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, budget, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await sendEmail({ name, email, budget, message });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Email send error", error?.message || error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
