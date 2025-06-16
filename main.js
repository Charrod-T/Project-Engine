const q = 'comdey'
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux&q'
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

fetch(path)
.then( function (response) {
    return response.json()
})
.then( function (json) {
    console.log(json.data[0].images.fixed_width.url)
        json.data.forEach(function(object) {
        console.log(object.images.fixed_width.url)
    })
})
.catch(function(error) {
console.log(error.message)
})