import React, { useState, useEffect } from 'react'
import faker from 'faker'

import { Api } from './api'

const App = () => {
  const [breedIds, setBreedIds] = useState([])
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    Api.getBreedIds().then(arr => setBreedIds(arr))
  }, [])

  useEffect(() => {
    getCats(10).then(arr => {
      setProducts(arr)
      console.log(arr)
    })
  }, [breedIds])


  const getCats = async (number) => {
    if (!breedIds || breedIds.length === 0) return

    let catArr = []

    for (let i = 0; i < number; i++) {
      const breedId = breedIds[Math.floor(Math.random() * breedIds.length)]
      const cat = Api.getCatByBreed(breedId)  
      catArr.push(cat)
    }

    catArr = await Promise.all(catArr)

    return catArr.map(cat => {
      cat.price = Math.floor(Math.random() * 10000) / 100 + 10
      cat.name = faker.name.findName()
      cat.email = faker.internet.email()
      cat.job = faker.name.jobTitle()
      cat.gender = faker.name.gender()
      cat.music = faker.music.genre()
      cat.car = faker.fake("{{vehicle.color}} {{vehicle.manufacturer}}, {{vehicle.model}}")
      cat.image = cat[0]
      cat.breed = cat[0].breeds[0]

      delete cat[0]
      delete cat.image.breeds

      return cat
    })
  }

  return (
    <div className="App">
      <button onClick={() => getCats(1).then(cat => console.log(cat[0]))}>Log a cat to console</button>
    </div>
  ) 
}

export default App