import renderButtonGithub from '../components/LoginButton/GithubLogin/github'
import renderButtonGoogle from '../components/LoginButton/GoogleLogin/google'
import renderButtonMicrosoft from '../components/LoginButton/MicrosoftLogin/microsoft'

import './styles.css'

const $ = document.querySelector.bind(document)

const renderLoginButtons = (container: HTMLDivElement) => {
    const htmlContent = `
        <main class="login" id="home">
            <h1>TV Search</h1>
            <h2>Sinta se em casa! Encontre filmes, séries e muito mais quando quiser.
            </h2>
            <div id="login-buttons"></div>

        </main>
    `
    container.innerHTML = htmlContent

    const loginButtons = <HTMLDivElement>$('#login-buttons')

    renderButtonGithub(loginButtons)
    renderButtonGoogle(loginButtons)
    renderButtonMicrosoft(loginButtons)
}

export default renderLoginButtons