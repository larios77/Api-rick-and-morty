import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react'
import './style.css'
import Search from '../Search/index'
import useCharacter from '../../hooks/useCharacter'

const initialState = {
  favorites: [],
}
const API = 'https://rickandmortyapi.com/api/character/'

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    default:
      return state
  }
}

const Characters = () => {
  const [favorites] = useReducer(favoritesReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharacter(API)

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const filteredUsers = useMemo(
    () =>
      characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )

  return (
    <div>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters">
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
        {filteredUsers.map((character, image, status, species) => (
          <div className="card" key={characters.id}>
            <div className="image__card">
              <img src={character.image} alt="images" />
            </div>
            <div className="title">
              <h2>{character.name}</h2>
            </div>
            <div className="description">
              <p>
                <span>Estado:</span>
                {character.status}
              </p>
              <p>
                <span>Especie:</span>
                {character.species}
              </p>
              <button type="button" className="button__add">
                Agregar a favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Characters
