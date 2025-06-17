const searchForm = document.getElementById ('search-form')

searchForm.addEventListener('submit', function(event) {
event.preventDefault()
})

function search(q) {
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux';
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;


function search(q) 
fetch(path).then ( function (response) {
return response.json()

}).then(function (json) {
console.log(json.data[0].images.fixed_width.url
const resultsElement = document.getElementById('results')
let resultsHTML = ''

json.data.forEach(function(object) {
console.log(object)

const url = obejct.images.fixed_width.url
const width = obejct.images.fixed_width
const height = obejct.images.fixed_width.height
const title = object.title

resultsHTML += `<img src = "${url}" 
                 width="${width}" 
                 height = "${height}" 
                 alt = "${title}">`
})

resultsElement.innerHTML = resultHTML

}).catch(function (error) {
console.log (error.message)
})

}