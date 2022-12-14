import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    changeInput,
    searchDataBase,
    getCategoryList,
    getRatingList,
    clearFilters,
    titleSearch,
  } = props

  const getSearchedList = event => {
    changeInput(event.target.value)
  }

  const search = event => {
    if (event.key === 'Enter') {
      searchDataBase()
    }
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={getSearchedList}
          onKeyDown={search}
          value={titleSearch}
        />
        <BsSearch className="search" />
      </div>

      <ul className="unordered-list-category">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachCategory => (
          <li className="category-list" key={eachCategory.categoryId}>
            <button
              className="category-button"
              type="button"
              onClick={() => getCategoryList(eachCategory.categoryId)}
            >
              <p>{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <ul className="unordered-list-category">
        <h1 className="category-rating">Rating</h1>
        {ratingsList.map(eachRating => (
          <li className="category-list1" key={eachRating.ratingId}>
            <button
              className="category-button"
              type="button"
              onClick={() => getRatingList(eachRating.ratingId)}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="stars"
              />
            </button>
            <span className="up">& up</span>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
