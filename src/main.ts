import { renderSearchForm } from './components/Header'
import './style.css'

const $ = document.querySelector.bind(document)
const token = localStorage.getItem('token')

if (token) {
    const container = <HTMLDivElement>$('#container')
    renderSearchForm(container)
    const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    container.insertAdjacentElement('beforeend', resultArea)
    const loadingContainer = document.createElement('div')
    loadingContainer.id = 'carregando'
    resultArea.insertAdjacentElement('afterbegin',loadingContainer)
} else {
    location.href = 'login.html'
}
