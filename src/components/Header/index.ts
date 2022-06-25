import searchShows from '../../components/SearchForm'


searchShows()

export const renderSearchForm = (container: HTMLElement) => {
  const userPhoto = localStorage.getItem('userPhoto')
  const userName = localStorage.getItem('userName')

  let favOrHome
    if (location.pathname == '/favorites.html') {
        favOrHome = `
            <div id="home">
                <a href="index.html">
                    <span>Home</span>
                </a>
            </div>
        `
    } else if (location.pathname == '/tvshow.html') {
        favOrHome = `
            <div id="home">
            <a href="index.html">
                <span>Home</span>
            </a>
            </div>
            <div id="favorites">
                <a href="favorites.html">
                    <img src="/assets/img/favorite.png" alt="Favoritos">
                    <span>Favoritos</span>
                </a>
            </div>
        `
    } else {
        favOrHome = `
            <div id="favorites">
                <a href="favorites.html">
                    <img src="/assets/img/favorite.png" alt="Favoritos">
                    <span>Favoritos</span>
                </a>
            </div>
        `
    }

    const htmlContent = `
        <div class="header">
        <img src="${userPhoto}" alt="Foto de ${userName}">
        <span>${userName}</span>

            <div id="favorites">
                <a href="favorites.html">
                    <img src="/assets/img/favorite.png" alt="Favoritos">
                    <span>Favoritos</span>
                </a>
            </div>
        </a>

        <a href="logout.html">
            <img src="/assets/img/logout.png" alt="Sair">
        </a>
        </div>

        <form id="search-form">
            <input type="text" id="filter" name="filter" placeholder="Digite o título da série">
            <button>Pesquisar</button>
        </form>
        `

    container.innerHTML = htmlContent
}