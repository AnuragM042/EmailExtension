// server/email.js
import mailjet from "node-mailjet";

const mj = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

export const sendEmail = async (profile, senderEmail, receiverEmail) => {
  try {
    await mj.post("send").request({
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: "Your Name",
          },
          To: [
            {
              Email: receiverEmail,
            },
          ],
          Subject: profile.subject,
          TextPart: profile.info,
        },
      ],
    });
  } catch (error) {
    throw new Error("Failed to send email: " + error.message);
  }
};
