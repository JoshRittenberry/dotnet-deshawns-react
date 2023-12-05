import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Col, Input } from 'reactstrap';
import { getAllCities } from '../../services/cityService';
import { deleteWalkerCity, postWalkerCity } from '../../services/walkerService';

export const WalkerDetailsPopUp = ({ selectedWalker, toggleWalkerDetails, walkerDetailsModal, setWalkerDetailsModal, getAndSetWalkers, args }) => {
    const [edit, setEdit] = useState(false)
    const [editedWalker, setEditedWalker] = useState({})
    const [cities, setCities] = useState([])

    const getAndSetCities = () => {
        getAllCities().then(res => {
            setCities(res)
        })
    }

    useEffect(() => {
        getAndSetCities()
        let placeholder = {
            firstName: selectedWalker?.firstName,
            lastName: selectedWalker?.lastName,
            walkerCities: selectedWalker?.walkerCities,
            pictureURL: selectedWalker?.pictureURL
        }
        setEditedWalker(placeholder)
    }, [selectedWalker])

    return (
        <div>
            <Modal isOpen={walkerDetailsModal} toggleWalkerDetails={toggleWalkerDetails} {...args}>
                <ModalHeader toggleWalkerDetails={toggleWalkerDetails}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        {/* Walker First Name */}
                        <FormGroup row>
                            <Label
                                for="walkerFirstName"
                                sm={2}
                            >
                                First Name
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="walkerFirstName"
                                    value={editedWalker.firstName}
                                    placeholder="Walker's First Name"
                                    type="text"
                                    readOnly={!edit}
                                    onChange={event => {
                                        let placeholder = { ...editedWalker }
                                        placeholder.firstName = event.target.value
                                        setEditedWalker(placeholder)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        {/* Walker Last Name */}
                        <FormGroup row>
                            <Label
                                for="walkerLastName"
                                sm={2}
                            >
                                Last Name
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="walkerLastName"
                                    value={editedWalker.lastName}
                                    placeholder="Walker's Last Name"
                                    type="text"
                                    readOnly={!edit}
                                    onChange={event => {
                                        let placeholder = { ...editedWalker }
                                        placeholder.lastName = event.target.value
                                        setEditedWalker(placeholder)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        {cities?.map(city => {
                            let isChecked = selectedWalker.walkerCities?.some(wc => wc.cityId == city.id)
                            return (
                                <FormGroup
                                    check
                                    inline
                                    key={city.id}
                                >
                                    <Input
                                        type="checkbox"
                                        readOnly={!edit}
                                        checked={isChecked}
                                        onClick={() => {
                                            if (edit) {
                                                if (isChecked) {
                                                    let walkerCity = selectedWalker.walkerCities?.find(wc => wc.cityId == city.id)
                                                    deleteWalkerCity(walkerCity.id).then(() => {
                                                        getAndSetWalkers()
                                                    })
                                                } else {
                                                    let newWalkerCity = {
                                                        walkerId: selectedWalker?.id,
                                                        cityId: city.id
                                                    }
                                                    postWalkerCity(newWalkerCity).then(() => {
                                                        getAndSetWalkers()
                                                    })
                                                }
                                            }
                                        }}
                                    />
                                    <Label check>
                                        {city.name}
                                    </Label>
                                </FormGroup>
                            )
                        })}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {edit && (
                        <>
                            <Button color="primary" onClick={() => {
                                toggleWalkerDetails()
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
                        toggleWalkerDetails()
                        setEdit(false)
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default WalkerDetailsPopUp;