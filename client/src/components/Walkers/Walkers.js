import { useEffect, useState } from "react"
import { getAllWalkers } from "../../services/walkerService";
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
                {filteredWalkers.map(w => {
                    return (
                        <div className="walker-container" id={w.id} key={w.id}>
                            {w.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}