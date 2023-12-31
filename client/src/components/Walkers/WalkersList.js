import "./WalkersList.css"
import { useEffect, useState } from "react"
import { deleteWalker, getAllWalkers } from "../../services/walkerService";
import { FilterWalkers } from "./FilterWalkers";
import { WalkerDetailsPopUp } from "./WalkerDetailsPopUp"
import { Button } from "reactstrap";
import { AddDogToWalkerPopUp } from "./AddDogToWalkerPopUp";
import { getAllDogs, updateDogWalker } from "../../services/dogService";

export const WalkersList = () => {
    const [walkers, setWalkers] = useState([])
    const [selectedWalker, setSelectedwalker] = useState({})
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [walkerDetailsModal, setWalkerDetailsModal] = useState(false)
    const [addDogModal, setAddDogModal] = useState(false)

    const toggleWalkerDetails = () => setWalkerDetailsModal(!walkerDetailsModal)
    const toggleAddDog = () => setAddDogModal(!addDogModal)

    const getAndSetWalkers = () => {
        getAllWalkers().then(res => {
            setWalkers(res)
            if (selectedWalker.id != null) {
                setSelectedwalker(res.find(res => res.id == selectedWalker.id))
            }
        })
    }

    useEffect(() => {
        getAndSetWalkers()
    }, [])

    return (
        <>
            <header className="walkers-header">
                <h3>Available Walkers</h3>
                <FilterWalkers filteredWalkers={filteredWalkers} setFilteredWalkers={setFilteredWalkers} walkers={walkers} />
            </header>
            <div className="walkers-list">
                {filteredWalkers.map(walker => {
                    return (
                        <div className="walker-container" id={walker.id} key={walker.id}>
                            <header>
                                <i className="fa-solid fa-trash-can walker-delete" id={walker.id} onClick={event => {
                                    let dogs = []
                                    getAllDogs().then(res => {
                                        res.filter(res => res.walkerId == selectedWalker.id)
                                        dogs?.map(dog => {
                                            let updatedDog = {...dog, walkerId: 0}
                                            updateDogWalker(updatedDog)
                                        })
                                        deleteWalker(parseInt(event.target.id)).then(() => {
                                            getAndSetWalkers()
                                        })
                                    })
                                }}></i>
                                <h6 className="walker-name">{walker.name}</h6>
                            </header>
                            <img src={walker.pictureURL} alt="walker Image" className="walker-image" onClick={() => {
                                setSelectedwalker(walker)
                                toggleWalkerDetails()
                            }} />
                            <Button color="primary" onClick={() => {
                                setSelectedwalker(walker)
                                toggleAddDog()
                            }}>
                                Add Dog
                            </Button>
                        </div>
                    )
                })}
                <WalkerDetailsPopUp selectedWalker={selectedWalker} toggleWalkerDetails={toggleWalkerDetails} walkerDetailsModal={walkerDetailsModal} getAndSetWalkers={getAndSetWalkers} />
                <AddDogToWalkerPopUp selectedWalker={selectedWalker} toggleAddDog={toggleAddDog} addDogModal={addDogModal} getAndSetWalkers={getAndSetWalkers} />
            </div>
        </>
    )
}