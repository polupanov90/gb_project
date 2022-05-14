export function service(url) {
  return fetch(url)
  .then((res) => res.json())
}

export function servicePost(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

// function serviceDelete(url, id) {
//   return fetch(`${url}/${id}`, {
//     method: 'DELETE',
//   })
// }