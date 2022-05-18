const getURLWithQueryParams = (base, params) => {
    const query = Object
      .entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
      
    return `${base}?${query}`
  };

const LINKEDIN_STATE = 'random_string'
const LINKEDIN_SCOPE = 'r_liteprofile r_emailaddress'
const LINKEDIN_RIDERECT = 'https://www.linkedin.com/developers/tools/oauth/redirect'
const LINKEDIN_CLIENT_ID = '774q7vgdr8f0dl'

export const LINKEDIN_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization', {
  response_type: "code",
  client_id: LINKEDIN_CLIENT_ID,
  redirect_uri: LINKEDIN_RIDERECT,
  state: LINKEDIN_STATE,
  scope: LINKEDIN_SCOPE
})