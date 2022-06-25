import { renderSearchForm } from './components/Header'
import renderFavorites, { renderFavCount } from './components/Favourites'

import './style.css'

const token = localStorage.getItem('token')
if (token) {
      const $ = document.querySelector.bind(document)

    const app = <HTMLDivElement>$('#app')
    renderSearchForm(app)

    const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    app.insertAdjacentElement('beforeend', resultArea)


    const favCount = document.createElement('div')
    favCount.id = 'fav-count-and-clear'
    resultArea.insertAdjacentElement('beforebegin', favCount)

    renderFavorites()
    renderFavCount(favCount)

    const loadingContainer = document.createElement('div')
    loadingContainer.id = 'carregando'
    resultArea.insertAdjacentElement('afterbegin',loadingContainer)
} else {
    location.href = 'login.html'
}