import './App.css';
// import Footer from '../public/components/Footer';
// import PreviousSearches from '../public/components/PreviousSearches';
// import UpcomingWeather from '../public/components/UpcomingWeather';





function App() {

//The fetch() function returns a promise.



// fetch(`https://wttr.in/${event.target.location.value}?format=j1`)



  // fetch(`https://wttr.in/Detroit?format=j1`)
  //   .then((response) => response.json())
  //   .then((json) => {
  //   // You can do what you like with the result here.
  //   console.log(json);
  // })
  // .catch((error) => {
  //   // You can do what you like with the error here.
  //   console.log(error);
  // });




  

  return (
    <div className="App">
      {/* do i need header component? */}
      <header className="App-header"> 
        <h1>This is the App Component</h1>

        <h1>Weather Application</h1>
        <form>
            <label htmlFor="location">Pick a Location</label>
            <input type="submit" defaultValue="Get Weather"/>
        </form>
    </header>
<aside className = "aside">

</aside>

    <main className="main">
        <article>
        Choose a location to view the weather.
        </article>
        <aside>
          <p>Aside in Main after Article</p>
            <article>article</article>
            <article>article</article>
            <article>article</article>
        </aside>
        </main>
        <aside className="previous-searches">
            <section>
                <h4>Previous Searches</h4>
                <ul></ul>
            </section>
        </aside>        
      
{/* 
<Footer /> */}

    </div>
  );
}

export default App;
