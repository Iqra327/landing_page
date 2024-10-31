import Benefits from "./sections/Benefits"
import Categories from "./sections/Categories"
import Events from "./sections/Events"
import FAQs from "./sections/FAQs"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import HelpCenter from "./sections/HelpCenter"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Works from "./sections/Works"

function App() {

  return (
    <main>
      <Header/>
      <Hero/>
      <Benefits/>
      <Works/>
      <Events/>
      <Features/>
      <Pricing/>
      <Categories/>
      <FAQs/>
      <HelpCenter/>
      <Footer/>
    </main>
  )
}

export default App
