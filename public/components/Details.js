import React from 'react'

function Details() {
  return (
    <>
    <div>Details
    <section class="main">
    <p id="chooseLocation" style={{textAlign:'center'}} > Choose a location to view the weather.</p>
    <div className="styleTop">
        <article />
        <article className="top-section">
            current weather
             <span id="weather-image-container"></span>
            <h2 id = "h2inputText"></h2> 
                <!--search name -->
            <p id = "Area"></p>  
                <!-- Area-->
            <p id = "Region"></p> 
                <!--Region-->
            <p id = "Country"></p> 
                <!-- Country-->
            <p id = "CurrentTemp"></p> 
                <!--Currently feel like-->        
            <p id = "Sunshine"></p> 
                <!--Chance of Sunshine-->
            <p id = "Rain"></p> 
                <!--Chance of Rain -->
            <p id = "Snow"></p> 
                <!--Chance of Snow-->
         </article>
    </div>
    </section>
    </div>



    </>
  )
}

export default Details