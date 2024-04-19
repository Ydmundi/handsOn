/* eslint-disable no-undef */
export default ({ $axios }, inject) => {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
        },
      },
    })
  
    // Set baseURL to something different
    api.setBaseURL(process.env.STRAPI_URL)
    // Inject to context as $strapi
    inject('strapi', api)
  
    const api2 = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
        },
        Authorization: 'Bearer ' + process.env.STRAPI_READ,
      },
    })
  
    // Set baseURL to something different
    api2.setBaseURL(process.env.STRAPI_URL)
    // Inject to context as $strapi
    inject('strapi_read', api2)
  
  }
  