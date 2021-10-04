<!-- https://imgur.com/VkxeKyL -->
<!-- https://imgur.com/CXFvpBK -->
<!-- https://imgur.com/U2B8Cgu -->
<!-- https://imgur.com/u4Y5KM9 -->
<!-- https://imgur.com/j81ILtw -->

# How to do instagram api

- Follow this one:

- https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#next-steps
- Make sure to look at the insta key not the facebook key
- https://www.instagram.com/oauth/authorize?client_id=1295820504119252&redirect_uri=https://www.christinastamosdesigns.com.au/&scope=user_profile,user_media&response_type=code
- This opens the authorize window and redirects with code in the url

Step 1:
- This is where to get the insta app: https://developers.facebook.com/apps/754561475152944/instagram-basic-display/basic-display/

Step 2:
```
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=1295820504119252 \
  -F client_secret=359e7ea0d538c500596d113cc3b952a3 \
  -F grant_type=authorization_code \
  -F redirect_uri=https://www.christinastamosdesigns.com.au/ \
  -F code=AQDTVZbphuqxY8iqnr5d-g3FA5mOnu_QkdJFnzd5nckP19BDN9fl9Xybz-ip6IpwXrBqKwBuSh6jL3LuoX9-0FP8unOKww-WAOkvytubIlm5q_XwPmHWC-5jukRT1nOaSnbqIviI-nfhgGoz_vZ80Dfg25r6yEgiKpHGqKPcL3_LBbOAFoDTCRtjaWj9zC4MFH4UF1d1IVYZ3YpI0EjNibMbHBMPuL3TELZ8mHkjlFSlxg#_
```

Step 3:
```
curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=359e7ea0d538c500596d113cc3b952a3&access_token=IGQVJVcmVGbng4VHJ3dzJLZAldSYnpFRFFQS1BhY1lrbndPUTg2X0kwNUdzbm12UVFxOEIzd3AtSEd3emhwVG1kZAGFkVDdqS045bDN3TmxPejVXQUhGdVlvVkRuWVZAUUGhIMUdnUmVnUGJja00wN0hfOW9oTUVHdXBNYmZAz"
```
