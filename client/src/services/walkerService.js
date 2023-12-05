export const getAllWalkers = () => {
    return fetch(`/api/walkers`).then(res => res.json())
}

export const deleteWalker = (id) => {
    return fetch(`/api/walkers/${id}`, { method: "DELETE" })
}