import mailjet from "node-mailjet";
import dotenv from "dotenv";

dotenv.config();

const mailjetClient = mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

export const sendEmail = async (profile, senderEmail, receiverEmail) => {
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: senderEmail,
          Name: "Your Name",
        },
        To: [
          {
            Email: receiverEmail,
            Name: "Recipient",
          },
        ],
        Subject: profile.subject,
        TextPart: profile.message,
        HTMLPart: `<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!`,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  return request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};
