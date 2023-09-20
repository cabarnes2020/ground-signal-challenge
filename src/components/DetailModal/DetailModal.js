import React from 'react'

function DetailModal({place, closeModal}) {


  return (
    <div className="position: fixed top-0 right-0 left-0 bottom-0 display: flex justify-center items-center">

        {/* background-container */}
        <div className="position: fixed top-0 right-0 left-0 bottom-0 display: flex justify-center items-center bg-black/70" onClick={closeModal}>

            {/* Close Icon container div */}
            <div className='position: absolute top-2 right-2 cursor-pointer' onClick={closeModal}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0,0,256,256" 
            width="35" height="35">
                <g fill="#D3D3D3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}>
                    <g transform="scale(10.66667,10.66667)">
                        <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
                    </g>
                </g>
            </svg>
            </div>

            {/* modal-container */}
            <div className="bg-white w-[600px] h-[500px]">

                {/* modal header */}
                <div className="display: flex flex-row justify-between items-center border-b-2 h-16">

                    {/* modal-header-left */}
                    <div className="display: flex flex-row items-center">
                        <div className="pl-2 mr-3">
                            <svg 
                            width="22" 
                            height="50" 
                            viewBox="0 0 11 14" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="#2563EB" d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"/>
                            </svg>
                        </div>
                        <div className="ml-3px">
                            <h1 className="text-2xl font-bold">{place.name}</h1>
                            <p className="text-zinc-400 text-xs">{place.location.lat}, {place.location.lon}</p>
                        </div>
                    </div>

                    {/* modal-header-right */}
                    <div className="mr-7 w-[160px] h-[40px]">
                        <button onClick={() => {window.open('https://www.groundsignal.com', '_blank')}} className="bg-blue-600 text-white rounded w-full h-full ">Visit Website</button>
                    </div>
                </div>

                {/* modal-body-container */}
                <div className="display: flex flex-col justify-between h-[400px]">

                    {/* description-container */}
                    <div className="display: flex justify-center mt-10">
                        {/* If the place has a description, then render it. If not, let user know there is no description */}
                         <p>{place.details?.description ? place.details.description : 'No description is available at this time'}</p>

                    </div>

                    {/* images-container */}
                    <div className="display: flex flex-row justify-center">
                        {
                        //If the place has images, map through its images array and display them.
                        //If the place has no images, let user know there are no images provided
                        place.images ? place.images.map((imageUrl) => {
                            return <div className="ml-1 mr-1 w-[200px] h-[200px]">
                                    <img src={imageUrl} className="w-full h-full"></img>
                                </div>
                        }) 
                        : 
                        <p>No images are provided</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailModal
