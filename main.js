const searchForm = document.getElementById ('search-form')
const searchBox = document.getElementById ('search-box')
const resultsElement = document.getElementById('results')
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function() {
       resultsElement.innerHTML = '';
    });


searchForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const q = searchBox.value
    search(q)
})

function search(q) {
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux';
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;


fetch(path).then (function (response) {
    return response.json()
})

.then(function (json) {
console.log(json.data[0].images.fixed_width.url)
let resultsHTML = ''

json.data.forEach(function(object) {
console.log(object)

const url = object.images.fixed_width.url
const width = object.images.fixed_width.width
const height = object.images.fixed_width.height
const title = object.title

resultsHTML += `<img src = "${url}" 
                 width="${width}" 
                 height = "${height}" 
                 alt = "${title}">`
})

resultsElement.innerHTML = resultsHTML

}).catch(function (error) {
console.log (error.message)
})

}