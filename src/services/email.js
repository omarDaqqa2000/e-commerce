import nodemailer from "nodemailer";

export async  function sendEmail(to,subject,html) {
const transporter = nodemailer.createTransport({
   service:'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "anasdaqqa3@gmail.com",
    pass: "wtcd qyfl kgkt ionh",
  },
});

// async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <anasdaqqa3@gmail.com>', // sender address
    to, 
    subject,
    html,
  });
    return info;
}