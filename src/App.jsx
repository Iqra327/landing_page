import Benefits from "./sections/Benefits"
import Events from "./sections/Events"
import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"

function App() {

  return (
    <main className="mb-[400px]">
      <Header/>
      <Hero/>
      <Benefits/>
      <Events/>
      <Features/>
      {/* <Pricing/> */}
    </main>
  )
}

export default App
