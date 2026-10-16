const endpointURL = 'https://api.programiz.pro/api/Demo/javascript/movies';
let fetchData = fetch(endpointURL);
fetchData
    .then(response => response.json())
    .then(data => data.movies.forEach(movie => console.log(movie.name)));
