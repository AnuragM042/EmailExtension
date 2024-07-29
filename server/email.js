import mailjet from "node-mailjet";

const sendEmail = async (profile, senderEmail, receiverEmail) => {
  const mailjetClient = mailjet.connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
  );

  const emailData = {
    Messages: [
      {
        From: {
          Email: senderEmail,
          Name: "Your Name", // This can be dynamic if needed
        },
        To: [
          {
            Email: receiverEmail,
            Name: "Receiver Name", // This can be dynamic if needed
          },
        ],
        Subject: profile.subject,
        TextPart: profile.info,
        HTMLPart: profile.info,
        Attachments: profile.attachments || [], // Handle attachments if any
      },
    ],
  };

  try {
    const result = await mailjetClient
      .post("send", { version: "v3.1" })
      .request(emailData);
    console.log("Email sent:", result.body);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendEmail };
