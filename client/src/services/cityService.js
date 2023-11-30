export const getAllCities = () => {
    return fetch('/api/cities').then(res => res.json())
}