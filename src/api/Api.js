import faker from 'faker'

export class Api {
    static key = "6e15ea00-49be-41e0-a089-e5d44cde1ffa"

    static async _fetch(endPoint) {
        return fetch(`https://api.thecatapi.com/v1${endPoint}`).then(res => res.json())
    }

    static async getBreedIds() {
        const breeds = await Api._fetch("/breeds")
        return breeds.map(breed => breed.id)
    }

    static async getRandomCats(number, breedIds) {
        if (!breedIds || breedIds.length === 0) return
    
        let catArr = []
    
        for (let i = 0; i < number; i++) {
          const breedId = breedIds[Math.floor(Math.random() * breedIds.length)]
          const cat = await Api._fetch(`/images/search?breed_id=${breedId}`)
          catArr.push(cat)
        }
    
        catArr = await Promise.all(catArr)
    
        return catArr.map(cat => {
          cat.price = Math.floor(Math.random() * 10000) / 100 + 10
          cat.name = faker.name.findName()
          cat.job = faker.name.jobTitle()
          cat.music = faker.music.genre()
          cat.country = faker.address.country()
          cat.email = faker.internet.email()
          cat.image = cat[0]
          cat.id = cat.image.id
          cat.breed = cat[0].breeds[0]
          cat.inStock = true
          cat.age = Math.ceil(Math.random() * 13)
          
          delete cat[0]
          delete cat.image.breed
    
          return cat
        })
    }
}