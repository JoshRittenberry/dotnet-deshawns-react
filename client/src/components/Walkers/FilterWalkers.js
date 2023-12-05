import React, { useEffect, useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getAllCities } from '../../services/cityService';
import { getAllWalkers } from '../../services/walkerService';

export const FilterWalkers = ({ filteredWalkers, setFilteredWalkers, direction, walkers, ...args }) => {
    const [cities, setCities] = useState([])
    const [text, setText] = useState("")
    const [cityID, setCityID] = useState(0)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const getAndSetCities = () => {
        getAllCities().then(res => {
            setCities(res)
        })
    }

    const updateWalkers = () => {
        if (cityID == 0) {
            getAllWalkers().then(walkers => {
                setFilteredWalkers(walkers)
            })
        } else {
            getAllWalkers().then(walkers => {
                let filtered = walkers.filter(walker => walker.walkerCities.some(wc => wc.cityId == cityID))
                setFilteredWalkers(filtered)
            })
        }
    }

    useEffect(() => {
        getAndSetCities()
        if (cityID == 0) {
            setText("All Cities")
        } else {
            setText(cities.find(c => c.id == cityID).name)
        }
        updateWalkers()
    }, [cityID, walkers])

    return (
        <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle caret>{text}</DropdownToggle>
                <DropdownMenu {...args}>
                    <DropdownItem className="city-filter" id={0} onClick={() => {
                        setCityID(0)
                    }}>
                        All Cities
                    </DropdownItem>
                    {cities.map(c => {
                        return (
                            <DropdownItem className="city-filter" id={c.id} key={c.id} onClick={() => {
                                setCityID(c.id)
                            }}>
                                {c.name}
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
        </div>
    )

}

FilterWalkers.propTypes = {
    direction: PropTypes.string,
};