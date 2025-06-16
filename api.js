const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");
const apikey = '4dq04fkDkwiXsn1xH9GQZCLgQarb2sux';
fetch('https://api.github.com/users/bitboin/repos')
