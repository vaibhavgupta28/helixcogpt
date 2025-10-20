export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
};

export async function sendEmail(payload: ContactPayload) {
  if (process.env.EMAIL_PROVIDER === "resend") {
    // Example Resend usage:
    // const resend = new Resend(process.env.RESEND_API_KEY ?? "");
    // await resend.emails.send({
    //   from: process.env.CONTACT_FROM ?? "website@helix.example",
    //   to: process.env.CONTACT_TO ?? "sales@helix.example",
    //   subject: `New inquiry from ${payload.name}`,
    //   text: JSON.stringify(payload, null, 2)
    // });
  }

  console.info("sendEmail invoked", payload);
  return { success: true };
}
