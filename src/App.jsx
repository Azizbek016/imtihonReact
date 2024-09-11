
import './Style.scss'
import Navbar from './Navbar'
import Asosiy from './Asosiy'
import Seni from './pages/seni'
import Avtopark from './pages/Avtopark'
import LoginPage from './pages/LoginPage'
import Otzif from './pages/Otzif'
import { Routes,Route } from 'react-router-dom'

function App() {



  return (
    // <div className='container'>
    //   <Navbar/>
    //   <Asosiy/>
    //   <Seni/>
    //   <Avtopark/>
    //   <Otzif/>
    //   <LoginPage/>
    // </div>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Asosiy/>} />
        <Route path="/Seni" element={<Seni />} />
        <Route path="/Avtopark" element={<Avtopark />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Otzif" element={<Otzif />} />
      </Route>
    </Routes>

  )
}

export default App
