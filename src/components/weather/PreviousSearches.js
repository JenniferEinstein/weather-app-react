import React from 'react'

function PreviousSearches() {
  return (
    <div className='previous-searches'>
       

<aside className="previous">
    {/* <!-- Ths aside will contain weather history --> */}
        <section>
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
  