import React from 'react'
import App from '../../App'
// import Nav from '../common/Nav'
import Footer from '../common/Footer'
import About
 from '../common/About'

function Home() {

  return (
    <div className='home-page'>
      {/* <Nav /> */}
      <About />
      <App />
      <Footer />



</div>
  )
}

export default Home