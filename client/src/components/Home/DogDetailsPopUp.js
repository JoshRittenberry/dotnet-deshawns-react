import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, Col } from 'reactstrap';
import { getAllCities, getCityById } from '../../services/cityService';
import { getAllWalkers } from '../../services/walkerService';

export const DogDetailsPopUp = ({ selectedDog, toggleDogDetails, dogDetailsModal, setDogDetailsModal, args }) => {
    const [edit, setEdit] = useState(false)
    const [cities, setCities] = useState([])
    const [city, setCity] = useState({})
    const [walkers, setWalkers] = useState([])
    const [availableWalkers, setAvailableWalkers] = useState([])
    const [editedDog, setEditedDog] = useState({})

    const getAndSetCities = () => {
        getAllCities().then(res => {
            setCities(res)
        })
    }

    const getAndSetWalkers = () => {
        getAllWalkers().then(res => {
            setWalkers(res)
        })
    }

    useEffect(() => {
        getAndSetCities()
        getAndSetWalkers()
        getCityById(selectedDog?.cityId).then(res => {
            setCity(res)
            setAvailableWalkers(walkers?.filter(walker => res.walkerCities?.some(walkerCity => walkerCity.walkerId === walker.id)))
        })
        setEdit(false)
        let placeholder = {
            name: selectedDog?.name,
            cityId: selectedDog?.cityId,
            walkerId: selectedDog?.walkerId
        }
        setEditedDog(placeholder)
    }, [selectedDog])

    return (
        <div>
            <Modal isOpen={dogDetailsModal} toggleDogDetails={toggleDogDetails} {...args}>
                <ModalHeader toggleDogDetails={toggleDogDetails}>Dog Info</ModalHeader>
                <ModalBody>
                    <Form>
                        {/* Dog Name */}
                        <FormGroup row>
                            <Label
                                for="dogName"
                                sm={2}
                            >
                                Name
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dogName"
                                    value={editedDog.name}
                                    placeholder="Dog Name"
                                    type={edit ? "input" : "text"}
                                    onChange={event => {
                                        let placeholder = { ...editedDog }
                                        placeholder.name = event.target.value
                                        setEditedDog(placeholder)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        {/* Dog City */}
                        <FormGroup row>
                            <Label
                                for="dogCity"
                                sm={2}
                            >
                                City
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dogCity"
                                    value={edit ? editedDog.cityId : cities.find(c => c.id == editedDog.cityId)?.name}
                                    type={edit ? "select" : "text"}
                                    onChange={event => {
                                        let placeholder = { ...editedDog, cityId: parseInt(event.target.value) }
                                        setEditedDog(placeholder)
                                        cities.map(c => {
                                            if (c.id == parseInt(event.target.value)) {
                                                setCity(c)
                                                setAvailableWalkers(walkers?.filter(walker => c.walkerCities?.some(walkerCity => walkerCity.walkerId === walker.id)))
                                            }
                                        })
                                    }}
                                >
                                    {cities.map(c => {
                                        return (
                                            <option value={c.id} key={c.id}>
                                                {c.name}
                                            </option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </FormGroup>
                        {/* Dog Walker */}
                        <FormGroup row>
                            <Label
                                for="dogWalker"
                                sm={2}
                            >
                                Walker
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dogWalker"
                                    value={edit ? editedDog.walkerId : selectedDog.walker?.name ? `${selectedDog.walker?.name}` : "No Walker Assigned"}
                                    type={edit ? "select" : "text"}
                                    onChange={event => {
                                        let placeholder = { ...editedDog, walkerId: parseInt(event.target.value) }
                                        setEditedDog(placeholder)
                                    }}
                                >
                                    {availableWalkers.map(w => {
                                        return (
                                            <option value={w.id} key={w.id}>
                                                {w.name}
                                            </option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {edit && (
                        <>
                            <Button color="primary" onClick={() => {
                                toggleDogDetails()
                                setEdit(false)
                            }}>
                                Submit
                            </Button>{' '}
                        </>
                    )}
                    {!edit && (
                        <>
                            <Button color="primary" onClick={() => {
                                setEdit(true)
                            }}>
                                Edit
                            </Button>{' '}
                        </>
                    )}
                    <Button color="secondary" onClick={() => {
                        toggleDogDetails()
                        setEdit(false)
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DogDetailsPopUp;