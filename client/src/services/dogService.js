export const getAllDogs = () => {
    return fetch(`/api/dogs`).then(res => res.json())
}

export const randomDogImage = () => {
    return fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json())
}