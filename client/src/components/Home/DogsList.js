import { useEffect, useState } from "react"
import { deleteDog, getAllDogs } from "../../services/dogService"
import DogDetailsPopUp from "./DogDetailsPopUp"
import "./DogsList.css"

export const DogsList = ({ dogs, setDogs, getAndSetDogs, selectedDog, setSelectedDog, dogDetailsModal, setDogDetailsModal }) => {
    const toggleDogDetails = () => setDogDetailsModal(!dogDetailsModal);

    return (
        <div className="dogs-list">
            {dogs.map(dog => {
                return (
                    <div className="dog-container" id={dog.id} key={dog.Id} value={dog.id}>
                        <header className="dog-container-header">
                            <i className="fa-solid fa-trash-can dog-delete" id={dog.id} onClick={event => {
                                deleteDog(parseInt(event.target.id)).then(() => {
                                    getAndSetDogs()
                                })
                            }}></i>
                            <h6 className="dog-name">{dog.name}</h6>
                        </header>
                        <img src={dog.pictureURL} alt="Dog Image" className="dog-image" onClick={() => {
                            setSelectedDog(dog)
                            toggleDogDetails()
                        }} />
                    </div>
                )
            })}
            <DogDetailsPopUp selectedDog={selectedDog} toggleDogDetails={toggleDogDetails} dogDetailsModal={dogDetailsModal} setDogDetailsModal={setDogDetailsModal} />
        </div>
    )
}