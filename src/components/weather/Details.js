import React from 'react'

function Details() {
  return (
    <>
    <div>Details
    <section className="main">
    <p id="chooseLocation" style={{textAlign:'center'}} > Choose a location to view the weather.</p>
    <div className="styleTop">
        <article />
        <article className="top-section">
            current weather
             <span id="weather-image-container"></span>
            <h2 id = "h2inputText">H2 h2inputText</h2> 
               <p> !--search name --</p> 
            <p id = "Area"></p>  
            {/* <p>  <!-- Area--></p>  */}
            <p id = "Region"></p> 
            {/* <p> <!--Region--></p>  */}
            <p id = "Country"></p> 
            {/* <p> <!-- Country--></p>  */}
            <p id = "CurrentTemp"></p> 
            {/* <p>   <!--Currently feel like-->        </p>  */}
            <p id = "Sunshine"></p> 
            {/* <p>   <!--Chance of Sunshine--></p>  */}
            <p id = "Rain"></p> 
            {/* <p>  <!--Chance of Rain --></p>  */}
            <p id = "Snow"></p> 
            {/* <p> <!--Chance of Snow--></p>  */}
         </article>
    </div>
    </section>
    </div>



    </>
  )
}

export default Details