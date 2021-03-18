import React, { useState, useEffect } from 'react'
import faker from 'faker'

import { Api } from './api'

const App = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    Api.getBreedIds().then(arr => setBreeds(arr))
  }, [])

  const getCat = async () => {
    if (!breeds || breeds.length === 0) return

    const breedId = breeds[Math.floor(Math.random() * breeds.length)]
    const cat = await Api.getCatByBreed(breedId)

    cat.price = Math.floor(Math.random() * 100)
    cat.name = faker.name.findName()
    cat.email = faker.internet.email()
    cat.job = faker.name.jobTitle()
    cat.gender = faker.name.gender()

    return cat
  }

  return (
    <div className="App">
      <button onClick={() => getCat().then(cat => console.log(cat))}>Log a cat to console</button>
    </div>
  ) 
}

export default App