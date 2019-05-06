import CharactersPage from '<pages>/Characters'
import Character from '<pages>/Character'

const routes = [
  {
    exact: true,
    path: '/',
    component: CharactersPage

  },
  {
    exact: true,
    path: '/:id',
    component: Character
  }
]

export default routes
