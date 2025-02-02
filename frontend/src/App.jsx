import {Routes,Route} from 'react-router-dom'
import Navbarseller from './components/Navbarseller'
import Signup from './pages/seller/Signup'
import Login from './pages/seller/Login'
import Addproduct from './pages/seller/Addproduct'
import Viewproduct from './pages/seller/Viewproduct'
import Navbaradmin from './components/Navbaradmin'
import Viewproducts from './pages/admin/Viewproducts'
import Home from './pages/buyer/Home'
import Cart from './pages/buyer/Cart'

//hhhhhhh
function App() {
  //comment

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signupseller" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path='/addproduct' element={<Addproduct/>} />
    <Route path='/getproductforseller' element={<Viewproduct/>} />
    <Route path='/navbaradmin' element={<Navbaradmin/>} />
    <Route path='/getproductforadmin' element={<Viewproducts/>} />
    <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </>
  )
}

export default App
