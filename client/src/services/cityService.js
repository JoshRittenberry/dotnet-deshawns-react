export const getAllCities = () => {
    return fetch('/api/cities').then(res => res.json())
}

export const getCityById = (id) => {
    return fetch(`/api/cities/${id}`).then(res => res.json())
}

export const postNewCity = (newCity) => {
    return fetch(`/api/cities`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newCity)
    })
}