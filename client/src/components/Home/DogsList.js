import { useEffect, useState } from "react"
import { getAllDogs } from "../../services/dogService"
import DogDetailsPopUp from "./DogDetailsPopUp"
import "./DogsList.css"

export const DogsList = ({ dogs, setDogs, getAndSetDogs }) => {
    const [modal, setModal] = useState(false);
    const [selectedDog, setSelectedDog] = useState({})

    const toggle = () => setModal(!modal);

    return (
        <div className="dogs-list">
            {dogs.map(dog => {
                return (
                    <div className="dog-container" id={dog.id} key={dog.Id} value={dog.id} onClick={() => {
                        setSelectedDog(dog)
                        toggle()
                    }}>
                        {dog.name}
                        <img src={dog.pictureURL} alt="Dog Image" className="dog-image"/>
                    </div>
                )
            })}
            <DogDetailsPopUp selectedDog={selectedDog} toggle={toggle} modal={modal} setModal={setModal} />
        </div>
    )
}