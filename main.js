const searchForm = document.getElementById ('search-form');
const searchInput = document.getElementById ('search-box');
const resultsElement = document.getElementById('search-results');
const showMoreBtn = document.getElementById ('show-more-button');

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.giphy.com/v1/gifs/search?page=${page}4dq04fkDkwiXsn1xH9GQZCLgQarb2suxq${keyword}`;
    
}