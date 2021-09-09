require('dotenv').config();

module.exports = {
  env: {
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_JS_USER_ID: process.env.EMAIL_JS_USER_ID,
    INSTA_ACCESS_TOKEN: process.env.INSTA_ACCESS_TOKEN,
    INSTA_API_URL: process.env.INSTA_API_URL,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};
