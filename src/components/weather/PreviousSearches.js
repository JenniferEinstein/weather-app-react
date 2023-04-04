import React from 'react'

function PreviousSearches({ location, weather }) {

// const ul = document.querySelector("ul");
// const li = document.querySelector("li");

if(document.getElementById(`previous_searches`))document.getElementById(`previous_searches`).remove();
//li.dangerouslySetInnerHTML=`<a href="#">${location}</a>d`
 }

<ul id="previous_searches"></ul>
function previousLocation(location, weather) {
    const ul = document.querySelector("#previous_searches");
    const li = document.createElement("li");
   // li.dangerouslySetInnerHTML = `<a href="#">${location}</a>`;
    li.addEventListener("click", () => {
      weather(location);
    });
    ul.prepend(li);
  


  return (
    <div className='previous-searches'>
       

<aside className="previous">
    {/* <!-- Ths aside will contain weather history --> */}
        <section id="previous-searches" name="previous-searches">
            <h4>Previous Searches</h4>
                <ul>
                    <p id="noSearches">No previous searches.</p>
                </ul>
            </section>
        </aside>
    </div>
  )
}

export default PreviousSearches

// function previousLocation (locationName, weather) {
//     const ul = document.querySelector("ul");
//     const li = document.querySelector("li");
//     if(document.getElementById(`previous_searches`))document.getElementById(`previous_searches`).remove();
//         li.innerHTML=`<a href="#">${location}</a>d`
// }

// <ul id="previous_searches"></ul>
// function previousLocation(locationName, weather) {
//     const ul = document.querySelector("#previous_searches");
//     const li = document.createElement("li");
//     li.innerHTML = `<a href="#">${locationName}</a>`;
//     li.addEventListener("click", () => {
//       getWeatherData(locationName);
//     });
//     ul.prepend(li);
//   }
  