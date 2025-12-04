import './App.css'
import BusinessCard from './components/BusinessCard'
import Navigation from './components/Navigation'
import Screen from './components/Screen'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Menu from './components/Menu'

function App() {
  return (
    <>
      
      <Navigation />

      <Routes>
        <Route path='/' element={<>

          <div className='min-h-screen p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center'>
        <BusinessCard name="Wakanesa Dorothy" title="CEO" image="/headshot1.jpg" phone="+254 7104529346" />
        <BusinessCard name="Jane Wairimu" title="Manager" image="/headshot2.jpg" phone="+254 7893540244" />
        <BusinessCard name="Wafula David" title="Supervisor" image="/headshot3.jpg" phone="+254 7453231957" />
        <BusinessCard name="Bob Karanja" title="Clerk" image="/headshot4.jpg" phone="+254 7733696764" />
      </div>
        </> }/>
        <Route path='/screen' element={<Screen />} />
        <Route path='/card' element={<Card />} />
        <Route path='/menu' element={<>
          <div className='mt-30'>
            <Menu />
          </div>
        </>}/>

      </Routes>
      
    </>
  )
}

export default App