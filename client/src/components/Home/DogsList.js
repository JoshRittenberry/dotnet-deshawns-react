import { useEffect, useState } from "react"
import { getAllDogs } from "../../services/dogService"
import DogDetailsPopUp from "./DogDetailsPopUp"

export const DogsList = ({ dogs, setDogs, getAndSetDogs }) => {
    const [modal, setModal] = useState(false);
    const [selectedDog, setSelectedDog] = useState({})

    const toggle = () => setModal(!modal);

    return (
        <>
            {dogs.map(dog => {
                return (
                    <div className="dog-container" id={dog.id} key={dog.Id} value={dog.id} onClick={() => {
                        setSelectedDog(dog)
                        toggle()
                    }}>
                        {dog.name}
                    </div>
                )
            })}
            <DogDetailsPopUp selectedDog={selectedDog} toggle={toggle} modal={modal} setModal={setModal} />
        </>
    )
}