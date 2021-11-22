export const getApi = (link) => {
  return fetch(`${link}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((res) => {
      return res
    })
}
