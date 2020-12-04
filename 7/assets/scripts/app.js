const btnAddMovie = document.querySelector('header button');
const addModal = document.getElementById('add-modal');
const deleteModal = document.getElementById('delete-modal');
const backdrop = document.getElementById('backdrop');
const btnCancel = addModal.querySelector('.btn.btn--passive');
const btnAdd = addModal.querySelector('.btn.btn--success');
const btnNoCancel = deleteModal.querySelector('.btn.btn--passive');
const btnYes = deleteModal.querySelector('.btn.btn--danger');

const movieTitle = document.getElementById('title');
const imageURL = document.getElementById('image-url');
const yourRating = document.getElementById('rating');

const entryText = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const movieListData = [];

function showAddModal() {
    addModal.classList.add('visible');
    backdrop.classList.add('visible');
}

function showDeleteModal() {
    deleteModal.classList.add('visible');
    backdrop.classList.add('visible');
}

function hideModal() {
    addModal.classList.remove('visible');
    deleteModal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

btnAddMovie.addEventListener('click', showAddModal);
btnCancel.addEventListener('click', hideModal);
backdrop.addEventListener('click', hideModal);

function addMovie() {
    if (movieTitle.value === '' || imageURL.value === '' ||  yourRating.value === '' || yourRating.value > 5 || yourRating.value < 1) {
        alert('Pleese enter valid values (rating between 1 and 5).');
    } else {
        entryText.style.display = 'none';

        let element = document.createElement('li');
        element.id = Math.random();
        element.classList.add('movie-element');
        element.innerHTML = `<div class="movie-element__image"><img src='${imageURL.value}' alt='${movieTitle.value}'></div>` +
                            '<div class="movie-element__info">' +
                                `<h2>${movieTitle.value}</h2>` +
                                `<p>${yourRating.value}/5 stars</p>` +
                            '</div>';
        movieList.appendChild(element);
        hideModal();
        element.addEventListener('click', removeMovie.bind(null, element.id));
        movieListData.push({
            id: element.id,
            title: movieTitle.value,
            image: imageURL.value,
            rating: yourRating.value
        })
    }
}

function removeMovie(id) {
    let element = document.getElementById(id);
    showDeleteModal();
    btnYes.onclick = function () {
        element.remove();
        hideModal();
        for (var movie of movieListData) {
            if (movie.id === id) {
                movieListData.splice(movieListData.indexOf(movie), 1);
            }
        }
    }
};

btnAdd.addEventListener('click', addMovie);
btnNoCancel.addEventListener('click', hideModal);
