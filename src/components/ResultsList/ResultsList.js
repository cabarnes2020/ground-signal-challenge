import React from 'react'
import ResultCard from '../ResultCard/ResultCard'

function ResultsList({results}) {


  return (
    // ResultsList container div
    <div className="display: flex flex-col justify-center content-start items-center mt-4">

        {/* ResultsList banner div */}
        <div className="display: flex justify-start content-center bg-blue-600 w-full ml-3 overflow-x-hidden">
            { 
            // If the results prop has multiple results, return p tag that says multiple results have been found
            // If the results prop only has 1 result, return p tag that signifies this
            // If the results prop is empty, return p tag that says no results have been found
            results && document.getElementById('search-input') === null ? <></>
                :
                <p className="text-sm text-white p-3">{results.length >= 2 ? `Found ${results.length} Results`: results.length === 1 ? `Found 1 Result` : `Found 0 Results`}</p>
            }
        </div>

        {/* Results div */}
        <div className="display: flex flex-col bg-white w-full ml-3">
            {
            //If results prop has loaded in and is not empty, create a card for each result in the array
            results && results.length > 0 && (
                results.map((result, index) => {
                    return <ResultCard place={result} key={index} />
                })
                ) 
            }
        </div>
    </div>
  )
}

export default ResultsList
