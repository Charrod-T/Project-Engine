const q = 'comdey'
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux&q'
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`
const 
fetch(path)
.then( function (response) {
    return response.json()
})
.then( function (json) {
    console.log(json.data[0].images.fixed_width.url)
    const resultsElement = document.getElementById("search-results")
    let resultsHTML = ''

        json.data.forEach(function(object) {
        console.log(object)
        const url = object.images.fixed_width.url
        const width = object.images.fixed_width
        const height = object.images.fixed_width.height
        const title = object.title

        resultsHTML += 
        `<image 
        src="${url}" 
        width = "${width} 
        height = "${height}"
        alt = "${title}">`
    })

    resultsElement.innerHTML = resultsHTML
})
.catch(function(error) {
console.log(error.message)
})