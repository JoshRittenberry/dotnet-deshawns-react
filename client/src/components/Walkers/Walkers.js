import "./WalkersList.css"
import { useEffect, useState } from "react"
import { deleteWalker, getAllWalkers } from "../../services/walkerService";
import { FilterWalkers } from "./FilterWalkers";

export const Walkers = () => {
    const [walkers, setWalkers] = useState([]);
    const [filteredWalkers, setFilteredWalkers] = useState([]);

    const getAndSetWalkers = () => {
        getAllWalkers().then(res => {
            setWalkers(res)
        })
    }

    useEffect(() => {
        getAndSetWalkers()
    }, [])

    return (
        <>
            <header className="walkers-header">
                <h3>Available Walkers</h3>
                <FilterWalkers filteredWalkers={filteredWalkers} setFilteredWalkers={setFilteredWalkers}/>
            </header>
            <div className="walkers-list">
                {filteredWalkers.map(walker => {
                    return (
                        <div className="walker-container" id={walker.id} key={walker.id}>
                            <header>
                                <i className="fa-solid fa-trash-can walker-delete" id={walker.id} onClick={event => {
                                    deleteWalker(parseInt(event.target.id)).then(() => {
                                        getAndSetWalkers()
                                    })
                                }}></i>
                                <h6 className="walker-name">{walker.name}</h6>
                            </header>
                            <img src={walker.pictureURL} alt="walker Image" className="walker-image" onClick={() => {
                                // setSelectedwalker(walker)
                                // togglewalkerDetails()
                            }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}