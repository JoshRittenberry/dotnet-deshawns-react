import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Col, Input } from 'reactstrap';
import { getAllCities } from '../../services/cityService';
import { getAllDogs, updateDogWalker } from '../../services/dogService';

export const AddDogToWalkerPopUp = ({ selectedWalker, toggleAddDog, addDogModal, getAndSetWalkers, args }) => {
    const [dogs, setDogs] = useState([])
    const [availableDogs, setAvailableDogs] = useState([])

    const getAndSetDogs = () => {
        getAllDogs().then(res => {
            setDogs(res)
            setAvailableDogs(res?.filter(dog => selectedWalker.walkerCities?.some(walkerCity => walkerCity.cityId === dog.cityId)))
        })
    }

    useEffect(() => {
        getAndSetDogs()
    }, [selectedWalker])

    return (
        <div>
            <Modal isOpen={addDogModal} toggleAddDog={toggleAddDog} {...args}>
                <ModalHeader toggleAddDog={toggleAddDog}>Add Dog to Walker</ModalHeader>
                <ModalBody>
                    <Form>
                        {/* Walker's Dogs */}
                        {availableDogs?.map(dog => {
                            if (dog.walkerId == 0 || dog.walkerId == selectedWalker.id) {
                                let isChecked = dog.walkerId !== 0
                                return (
                                    <FormGroup
                                        check
                                        inline
                                        key={dog.id}
                                    >
                                        <Input
                                            type="checkbox"
                                            checked={isChecked}
                                            onClick={() => {
                                                if (isChecked) {
                                                    let updatedDog = { ...dog, walkerId: 0 }
                                                    updateDogWalker(updatedDog).then(() => {
                                                        getAndSetWalkers()
                                                        getAndSetDogs()
                                                    })
                                                } else {
                                                    let updatedDog = { ...dog, walkerId: selectedWalker.id }
                                                    updateDogWalker(updatedDog).then(() => {
                                                        getAndSetWalkers()
                                                        getAndSetDogs()
                                                    })
                                                }
                                            }}
                                        />
                                        <Label check>
                                            {dog.name}
                                        </Label>
                                    </FormGroup>
                                )
                            }
                        })}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => {
                        toggleAddDog()
                    }}>
                        Exit
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}