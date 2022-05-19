const dotenv = require("dotenv");
dotenv.config();
const REACT_APP_API_CHIMP = process.env.REACT_APP_API_CHIMP;

const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5")

mailchimp.setConfig({
  apiKey: REACT_APP_API_CHIMP,
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
