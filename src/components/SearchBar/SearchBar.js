import React, { useState } from 'react'
import {sampleData} from '../../sample-data'
import ResultsList from '../ResultsList/ResultsList'

function SearchBar() {
//Slice of state for filtered results from sampleData array
const [filteredSearch, setFilteredSearch] = useState([])


// Function that executes while user is typing inside searchbar
const onChange = (e) => {
    //Variable that represents user input from searchbar
    const keyWord = e.target.value;

    //Array that holds all of the possible returned locations based on 
    //what the user currently has entered within the search bar
    const filteredResults = sampleData.filter((place) => {
        return place.name.toLowerCase().includes(keyWord.toLowerCase())
    })

    if(keyWord === ""){
        setFilteredSearch([])
    }
    else{
        setFilteredSearch(filteredResults)
    }
}

  return (
    <>
      {/* Searchbar div */}
      <div className="display: flex flex-row justify-start items-center rounded shadow-lg w-96 h-16 ml-3 bg-white mt-4 overflow-x-hidden">

        {/* Icon div */}
          <div className="ml-4">
              <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              xmlns="http://www.w3.org/2000/svg"
              >
                  <g>
                      <path fill="#A1A1AA" d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"/>
                      <path fill="#A1A1AA" d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"/>
                  </g>
              </svg>
            </div>
            
            {/* Input div */}
            <div>
                <input
                id='search-input'
                className="h-14 w-80 ml-4 focus:outline-none"
                type="text" 
                placeholder="Search..." 
                onChange={onChange}
                />
            </div>
        </div>
        <ResultsList results={filteredSearch}/> 
    </>
  )
}

export default SearchBar