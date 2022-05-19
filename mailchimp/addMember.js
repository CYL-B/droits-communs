const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5")
var API_CHIMP = process.env.API_CHIMP

mailchimp.setConfig({
  apiKey: API_CHIMP,
  server: "us14",
});


async function addMember(email) {
  

  const hash = md5(email)
    const response = await mailchimp.lists.setListMember(
        "6dd203188e",
        hash,
        { email_address: email, status: "subscribed" }
      );
      console.log("okay")
}


module.exports = addMember;
