export const getAllWalkers = () => {
    return fetch(`/api/walkers`).then(res => res.json())
}

export const deleteWalker = (id) => {
    return fetch(`/api/walkers/${id}`, { method: "DELETE" })
}

export const postWalkerCity = (newWalkerCity) => {
    return fetch(`/api/walkerCities`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newWalkerCity)
    })
}

export const deleteWalkerCity = (walkerCityId) => {
    return fetch(`/api/walkerCities/${walkerCityId}`, { method: "DELETE" })
}