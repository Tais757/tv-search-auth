import axios from 'axios'
import { API_URL } from '../config/config'
import { getTvShow } from '../models/TVShow'
import renderTVShowCard from '../components/TVShowCard'
import updateFavs from "../utils/favUtils"



const $ = document.querySelector.bind(document)

const http = axios.create({
  baseURL: API_URL,
})

const searchShows = async () => {
  const params = new URLSearchParams(document.location.search)
  const filter = params.get('filter')

  if (filter) {
    const response = await http.get('/', {
      params: {
        q: filter,
      },
    })

    if (response.status == 200) {
      const { data } = response
      const resultArea = <HTMLDivElement>$('#result-area')
      resultArea.innerHTML = ''
      data.forEach((jsonObj: any) => {
        const { show } = jsonObj
        const tvShow = getTvShow(show)
        renderTVShowCard(tvShow, resultArea)
      })
    }
  }
  updateFavs()
}

export default searchShows
