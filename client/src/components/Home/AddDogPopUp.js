import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, Col } from 'reactstrap';
import { getAllCities } from '../../services/cityService';
import { getAllWalkers } from '../../services/walkerService';
import { postNewDog } from '../../services/dogService';

export const AddDogPopUp = ({ getAndSetDogs, args }) => {
    const [modal, setModal] = useState(false);
    const [newDog, setNewDog] = useState({})
    const [cities, setCities] = useState([])
    const [city, setCity] = useState({})
    const [walkers, setWalkers] = useState([])
    const [availableWalkers, setAvailableWalkers] = useState([])
    const [walker, setWalker] = useState({})

    const toggle = () => setModal(!modal);

    const getAndSetCities = () => {
        getAllCities().then(res => {
            setCities(res)
            setCity(res[1])
        })
    }

    const getAndSetWalkers = () => {
        getAllWalkers().then(res => {
            setWalkers(res)
            setWalker(res[1])
        })
    }

    useEffect(() => {
        let placeholder = {
            name: "",
            cityId: 0,
            walkerId: 0,
            pictureURL: ""
        }
        getAndSetCities()
        getAndSetWalkers()
        setNewDog(placeholder)
    }, [])

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                New Dog
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>New Dog Form</ModalHeader>
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
                                    value={newDog.name}
                                    placeholder="Dog's Name"
                                    type="input"
                                    onChange={event => {
                                        let placeholder = { ...newDog }
                                        placeholder.name = event.target.value
                                        setNewDog(placeholder)
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
                                    value={newDog?.cityId}
                                    type="select"
                                    onChange={event => {
                                        let placeholder = { ...newDog, cityId: parseInt(event.target.value) }
                                        setNewDog(placeholder)
                                        cities.map(c => {
                                            if (c.id == parseInt(event.target.value)) {
                                                setCity(c)
                                                setAvailableWalkers(walkers?.filter(walker => c.walkerCities?.some(walkerCity => walkerCity.walkerId === walker.id)))
                                            }
                                        })
                                    }}
                                >
                                    <option value="0">
                                        Please Select a City
                                    </option>
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
                                    value={newDog?.walkerId}
                                    type="select"
                                    onChange={event => {
                                        let placeholder = { ...newDog, walkerId: parseInt(event.target.value) }
                                        setNewDog(placeholder)
                                    }}
                                >
                                    {newDog.cityId == 0 && (
                                        <option value="0">
                                            Please Select a City First
                                        </option>
                                    )}
                                    {newDog.cityId > 0 && (
                                        <>
                                            <option value="0">
                                                Please Select a Walker
                                            </option>
                                            {availableWalkers.map(w => {
                                                return (
                                                    <option value={w.id} key={w.id}>
                                                        {w.name}
                                                    </option>
                                                )
                                            })}
                                        </>
                                    )}
                                </Input>
                            </Col>
                        </FormGroup>
                        {/* Dog Picture */}
                        <FormGroup row>
                            <Label
                                for="dogPicture"
                                sm={2}
                            >
                                Picture
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dogPicture"
                                    value={newDog.pictureURL}
                                    placeholder="Picture URL"
                                    type="input"
                                    onChange={event => {
                                        let placeholder = { ...newDog }
                                        placeholder.pictureURL = event.target.value
                                        setNewDog(placeholder)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        if (newDog.name != "" && newDog.cityId != 0 && newDog.walkerId != 0) {
                            postNewDog(newDog).then(() => {
                                getAndSetDogs()
                            })
                        }
                        toggle()
                    }}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={() => {
                        toggle()
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddDogPopUp;