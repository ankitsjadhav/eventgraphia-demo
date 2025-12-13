import './App.css'
import Header from './components/layout/Header'
import Carousel from './components/sections/InfiniteCarousel'
import Footer from './components/layout/Footer'

function App() {
  return (
      <div className='min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-black selection:text-white'>
          <Header />
          <main>              
              <Carousel />
              
              {/* Spacer before footer */}
              <div className="h-24"></div>
          </main>
          <Footer />
      </div>
  )
}

export default App;

