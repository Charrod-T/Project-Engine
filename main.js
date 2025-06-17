const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2suxq'
const searchForm = document.getElementById ('search-form');
const searchBox = document.getElementById ('search-box');
const searchResult = document.getElementById('search-result');
const resetBtn = document.getElementById ('reset-btn');

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=5&offset=${(page - 1) * 5}`;    
const response = await fetch(apiUrl);  
const data = await response.json();

   const results = data.data;

   if (page === 1) {
       searchResult.innerHTML = "";
   }

    if (Array.isArray(results)) {
   result.forEach((result) => {
    const image = document.createElement("img");
    image.src = result.images.original.url;
    image.alt = result.title;

    const imageLink = document.createElement("a");
    imageLink.href = result.url;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
    });
} else {
    console.error("API response data is not an array:", results);
}
}

searchForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
})

resetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
});
function resetCallback(){
    counterValue = 0;
    renderCounterValue();
}