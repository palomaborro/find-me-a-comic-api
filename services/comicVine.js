const axios = require('axios');

const http = axios.create({
    baseURL: 'https://comicvine.gamespot.com/api/'
})

http.interceptors.response.use(
    (response) => response.data,
    (err) => console.error(err)
)

http.interceptors.request.use(config => {
    config.params = {
     ...config.params,
     format: 'json',
     api_key: process.env.COMICVINE_API_KEY || "te falta la key paiaso"
    };
   return config;
  });

  // /issues
module.exports.getNewComics = (filterValue = '', offset = 0) => {
    return http.get('/issues', { params: { filter: `name:${filterValue}`, sort:'cover_date:desc', limit:'20', offset } })
}

module.exports.getComics = (filterValue = '') => {
    return http.get('/issues', { params: { filter: `name:${filterValue}`, limit:'20' } })
}


// /issue
module.exports.getComic = (id) => {
    return http.get(`/issue/4000-${id}`)
}