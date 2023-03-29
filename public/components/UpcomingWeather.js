import React from "react";

function UpcomingWeather(){


    return(
        <>
<section className>
<aside>
  {/* This aside has three article elements that will have upcoming weather but it starts empty. 
    Put this in jv so that i doesn't render until submit is pressed. */}
  <div className="grid-container">
    <div className="threeInOne">
      <article id="today">
        {/* <b>Today</b> */}
        <ul />
      </article>
    </div>
    <div className="threeInOne">
      <article id="tomorrow">
        {/* <b>Tomorrow</b>*/}
        <ul />
      </article>
    </div>
    <div className="threeInOne"> 
      <article id="asatte">
        <ul />
        {/* <b>Day After Tomorrow</b> */}
      </article>
    </div>
  </div>
</aside>
</section>
</>
);
}

export default UpcomingWeather