import { useEffect, useState } from "react"
import { getAllDogs, randomDogImage } from "../../services/dogService"

export const DogsList = () => {
    const [dogs, setDogs] = useState([])

    const getAndSetDogs = () => {
        getAllDogs().then(res => {
            setDogs(res)
        })
    }

    const getDogImage = () => {
        let image = null

        randomDogImage().then(res => {
            image = res.message
        })
        return image
    }

    useEffect(() => {
        getAndSetDogs()
    }, [])

    return (
        <>
            {dogs.map(d => {
                return (
                    <div className="dog-container" id={d.id} key={d.Id}>
                        {d.name}
                    </div>
                )
            })}
        </>
    )
}