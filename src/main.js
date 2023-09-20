import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/SearchBar/SearchBar'
import './main.css'



//Renders Searchbar component inside searchbar div in index.html file
const searchBarNode = document.getElementById("searchbar")
const searchBar = createRoot(searchBarNode);
searchBar.render(<SearchBar />)


/**
 * Things I would change or improve: 
 * Learn how to make classes in Tailwind to cut down on repetitive styling
 * Find a better/more efficent way to inject React into a non-react app, as this was my 1st time
 * Incorporate a way to switch the map view from default to dark mode at the click of a button or at a certain time of day
 	*This would help protect users' eyes when viewing the map at night or low-light areas
 * Create a handler to deal with cases where images can't render due to missing credentials
 */

/**
 * Decisions I made: 
 * Used Leaflet to set up entire Map rather than Google Maps. 
 	* Made this decision after learning that I could use Leaflet's library while adding a Google Maps layer view on top of map
 * Decided to use React hooks to manage state because project was small. If project was more complex, 
 	*I would have used a more robust state manager to handle the complexity
 * Added small pop-ups to newly placed markers to ensure user's knew exactly what location they were selecting
 * Used tailwind styling to add hover feature to the location cards rendered in the results list
 * In addition to the required close icon, added intuitive functionality to close modal whenever the 
 	* background surrounding the modal div was clicked
 * */	



	
// window.initMap = function() {

	// Create a map object and specify the DOM element for display.
	// const map = new google.maps.Map(document.querySelector('.map'), {
	// 	center: {
	// 		lat: -34.397,
	// 		lng: 150.644
	// 	},
	// 	scrollwheel: false,
	// 	zoom: 8,
	// })

// 	google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
// 		// console.log('tiles loaded')
// 	})

// }++

