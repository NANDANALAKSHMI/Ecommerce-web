import { useEffect, useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './shared/Header'
import HomeList from "./Home/containers/HomeList"
import Login from './auth/Login'
import Footer from './shared/Footer '
import Register from './auth/Register'
import ProductListAll from './ProductList.jsx/containers/ProductListAll'
import store from './utils/store'
import ProductDetailsList from './productDetailpPage/containers/ProductDetailsList'
import Profile from './auth/Profile'
import { setUserSuccess } from './slices/authSlices'

function App() {
  const [user, setUser] = useState(null);
  const storedUser = localStorage.getItem('loggedInUser');
  useEffect(() => {
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile user={user}/>} />
            <Route path="/" element={<HomeList />} />
            <Route path="/products" element={<ProductListAll />} />
            <Route path="/product/:id" element={<ProductDetailsList />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
