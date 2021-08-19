import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        className="searchBar"
        placeholder="Buscar"
      />
      <FiSearch className="icons" />
    </div>
  )
}
export default Search
