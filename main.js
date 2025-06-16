const q = 'comdey'
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux&q'
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

const promise1 = fetch(path)
const promise2 = promise.then(function(response) {
    return response.json()
})

promise2.then(function(json) {
    console.log(json)
})