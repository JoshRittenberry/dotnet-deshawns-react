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
    }).then(res => res.json())
}

export const deleteDog = (id) => {
    return fetch(`/api/dogs/${id}`, { method: "DELETE" })
}

export const updateDogWalker = (updatedDog) => {
    return fetch(`/api/dogs/${updatedDog.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedDog)
    })
}