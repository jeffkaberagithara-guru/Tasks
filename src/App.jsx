import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {

  return (
    <>
      <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <BusinessCard name="Wakanesa Dorothy" title="CEO" image="/headshot1.jpg" phone="+254 7104529346" />
      <BusinessCard name="Jane Wairimu" title="Manager" image="/headshot2.jpg" phone="+254 7893540244" />
      <BusinessCard name="Wafula David" title="Supervisor" image="/headshot3.jpg" phone="+254 7453231957" />
      {/* <BusinessCard name="Bob Karanja" title="Clerk" image="/headshot4.jpg" phone="+254 7733696764" /> */}
      </div>
    </>
  )
}

export default App
