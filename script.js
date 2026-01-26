document.addEventListener('DOMContentLoaded', () => {
    console.log('Mean Girls Project Loaded');

    // Example interaction: Log clicks on movie items
    const movies = document.querySelectorAll('.movie-item');
    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            console.log(`Clicked on: ${movie.innerText}`);
        });
    });
});
