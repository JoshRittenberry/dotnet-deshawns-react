export const getAllDogs = () => {
    return fetch(`/api/dogs`).then(res => res.json())
}

export const postNewDog = (newDog) => {
    return fetch(`/api/dogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDog)
    })
}

export const randomDogImage = () => {
    return fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json())
}