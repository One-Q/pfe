export default function callApi(endpoint, method = 'get', body) {
  const url = ENV === 'production' ? 'https://ipl-resolver.herokuapp.com/api' : 'http://localhost:3000/api'

  let headers = {}

  headers["content-type"] = 'application/json'

  return fetch(`${url}/${endpoint}`, {
    headers,
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );

  
}