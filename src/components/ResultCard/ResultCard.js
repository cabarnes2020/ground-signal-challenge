import React, {useState} from 'react'
import L from "leaflet"
import DetailModal from "../DetailModal/DetailModal"


function ResultCard({place}) {
    //Slice of state used to open and close DetailModal
    const [openModal, setOpenModal] = useState(false)


    //Function used to control the opening of the modal, to be executed when a marker is clicked
    const onMarkerClick = function(e) {
        setOpenModal(true)
    }

    //Function used to execute marker functionality when a card in the ResultsList is clicked
    const onClick = () => {
        //Grabs instance of map from the window variable
        const map = window.map

        //Instantiates a new marker using the place prop
        const newMarker = L.marker([place.location.lat, place.location.lon])

        //Instantiates a popup to accompany the marker created above
        const popup = L.popup({closeOnClick: false, autoClose: false}).setContent(`${place.name}`)
        
        //Adds a new marker to the map, ensures each new marker has onClick functionality to open modal,
        //and adds a popup with the location's name to further identify what location the marker represents
        newMarker.addTo(map).on('click', onMarkerClick).bindPopup(popup).openPopup()

        //Pulls the map view to the location of the marker
        map.setView([place.location.lat, place.location.lon], 16)
    }


  return (
      <>
      {/* ResultCard container div */}
      <div className="display: flex flex-row justify-start hover:bg-slate-100">

        {/* Icon div */}
        <div className="p-3">
            <svg 
            width="20" 
            height="50" 
            viewBox="0 0 11 14" 
            xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="#2563EB" d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"/>
            </svg>
        </div>

        { place && (
            // ResultCard content div
            <div className="display: flex flex-col justify-center justify-items-start w-full" onClick={onClick} >
                <p className="text-sm font-bold"> {place.name} </p>
                <p className="text-zinc-400 text-xs"> {place.location.lat} {place.location.lon} </p>
            </div>
        )
        }
      </div>
      
        {/* If openModal is set to true and place prop is not null, open DetailModal */}
        {openModal && place &&  <DetailModal place={place} closeModal={() => setOpenModal(false)}/>}


    </>
  )
}

export default ResultCard
