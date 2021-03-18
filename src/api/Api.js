export class Api {
    static key = "6e15ea00-49be-41e0-a089-e5d44cde1ffa"

    static async getBreedIds() {
        const breeds = await Api._fetch("/breeds")
        return breeds.map(breed => breed.id)
    }

    static async getCatByBreed(breedId) {
        return await Api._fetch(`/images/search?breed_id=${breedId}`)
    }

    static async _fetch(endPoint) {
        return fetch(`https://api.thecatapi.com/v1${endPoint}`).then(res => res.json())
    }
}