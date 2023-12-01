import { useEffect, useState } from "react"
import { getAllCities } from "../../services/cityService"
import { AddCityPopUp } from "./AddCityPopUp"

export const Cities = () => {
    const [cities, setCities] = useState([])

    const getAndSetCities = () => {
        getAllCities().then(res => {
            setCities(res)
        })
    }

    useEffect(() => {
        getAndSetCities()
    }, [])

    return (
        <>
            <header>
                <h3>Serviced Cities</h3>
                <AddCityPopUp getAndSetCities={getAndSetCities} />
            </header>
            <div className="cities-list">
                {cities.map(c => {
                    return (
                        <div className="city-container" id={c.id} key={c.id}>
                            {c.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}