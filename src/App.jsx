import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Registration } from './pages/Registration/Registration'
import { UsingThePlatform } from './pages/UsingThePlatform/UsingThePlatform'
import { Header } from './components/Header'



function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/using" element={<UsingThePlatform />} />
        </Routes>
  </BrowserRouter>
  // <div>
  //   <Header/>
  //   {currentPage === "registration" ? (
  //     <Registration handlePageChange={handlePageChange}/>
  //   ):(
  //     <UsingThePlatform handlePageChange={handlePageChange}/>
  //   )
  //   }
  // </div>
  )
}

export default App
