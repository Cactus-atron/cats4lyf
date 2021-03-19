import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import { ProductList } from './components/productList'
import { Basket } from './components/basket'
import { Profile } from './components/profile'
import { FaCat } from 'react-icons/fa'

import { Api } from './api'

const App = () => {
  const [breedIds, setBreedIds] = useState([])
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    Api.getBreedIds().then(arr => setBreedIds(arr))
  }, [])

  useEffect(() => {
    refreshStock()
  }, [breedIds])

  const refreshStock = () => {
    Api.getRandomCats(3, breedIds).then(arr => {
      if (arr) {
        setProducts(arr)
      }
    })
  }

  const addToBasket = async (id) => {
    const newBasket = [...basket]
    const newProducts = [...products]

    const cat = newProducts.find(cat => cat.id === id)
    cat.inStock = false
    newBasket.push(cat)

    setBasket(newBasket)
    setProducts(newProducts)
  }

  return (
    <div className="App">
      <Basket items={basket} />

      <Route exact path="/profile">        
        <Profile/>
      </Route>

      <Route exact path="/">
        <div className="py-3 bg-light">
            <h1 className="d-flex justify-content-center align-items-center">
              Cats4Lyf&nbsp;<FaCat />
            </h1> 
        </div>
        
        <ProductList 
          products={products} 
          addToBasket={addToBasket} 
          refreshStock={refreshStock} 
        />
      </Route>      
    </div>
  ) 
}

export default App