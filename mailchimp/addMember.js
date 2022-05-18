const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5")

mailchimp.setConfig({
  apiKey: "9b18f9a41e6c939d76f5b3abd496927f-us14",
  server: "us14",
});


async function addMember(email) {
  console.log(mailchimp)

  const hash = md5(email)
    const response = await mailchimp.lists.setListMember(
        "6dd203188e",
        hash,
        { email_address: email, status: "subscribed" }
      );
      console.log("okay")
}


module.exports = addMember;
