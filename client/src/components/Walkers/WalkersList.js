import "./WalkersList.css"
import { useEffect, useState } from "react"
import { deleteWalker, getAllWalkers } from "../../services/walkerService";
import { FilterWalkers } from "./FilterWalkers";
import { WalkerDetailsPopUp } from "./WalkerDetailsPopUp"

export const WalkersList = () => {
    const [walkers, setWalkers] = useState([])
    const [selectedWalker, setSelectedwalker] = useState({})
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [walkerDetailsModal, setWalkerDetailsModal] = useState(false)

    const toggleWalkerDetails = () => setWalkerDetailsModal(!walkerDetailsModal)

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
                                    console.log("hello???")
                                    deleteWalker(parseInt(event.target.id)).then(() => {
                                        getAndSetWalkers()
                                    })
                                }}></i>
                                <h6 className="walker-name">{walker.name}</h6>
                            </header>
                            <img src={walker.pictureURL} alt="walker Image" className="walker-image" onClick={() => {
                                setSelectedwalker(walker)
                                toggleWalkerDetails()
                            }} />
                        </div>
                    )
                })}
                <WalkerDetailsPopUp selectedWalker={selectedWalker} toggleWalkerDetails={toggleWalkerDetails} walkerDetailsModal={walkerDetailsModal} setWalkerDetailsModal={setWalkerDetailsModal} getAndSetWalkers={getAndSetWalkers} />
            </div>
        </>
    )
}