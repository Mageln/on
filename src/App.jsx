import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Registration } from './pages/Registration/Registration'
import { UsingThePlatform } from './pages/usingThePlatform/usingThePlatform'
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
  )
}

export default App
