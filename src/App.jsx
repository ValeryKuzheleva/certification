import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Basket from './components/basket/Basket'
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';

export const AppContext = React.createContext({})

function App() {
const [trips, setTrips] = useState([])

const [overlayItems, setOverlayItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tripsData = await axios.get('https://643e98c96c30feced82d93ac.mockapi.io/trips')
    
    const cartData = await axios.get('https://643e98c96c30feced82d93ac.mockapi.io/cart')

    setTrips(tripsData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`https://643e98c96c30feced82d93ac.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

return (
    
  <AppContext.Provider
  value={
    {
      trips,
      setTrips,
      overlayItems,
      setOverlayItems,
      isAdded
    }
  }>
    <div>
     <Router>
     <Header/> 
      <Routes>
        <Route path='/'
                    element={
                        <Home
                        item={trips}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                />

        <Route path='/reviews'
                    element={
                        <Reviews/>
                    }
                />

        <Route path='/contacts'
                    element={
                        <Contacts/>
                    }
                />

        <Route path='/cart'
                element={
                        <Basket
                        totalPrice={
                          overlayItems.reduce((element = overlayItems.length, obj)=>
                          element+obj.price, 0 
                          )
                        }
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />
                    }
                />
      </Routes>
      </Router> 
      <Footer/>
     </div>
    </AppContext.Provider>
  );
}

export default App;