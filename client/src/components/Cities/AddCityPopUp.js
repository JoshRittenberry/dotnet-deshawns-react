import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { postNewCity } from '../../services/cityService';

export const AddCityPopUp = ({getAndSetCities, args}) => {
    const [modal, setModal] = useState(false);
    const [text, setText] = useState("")
    const [newCity, setNewCity] = useState({})

    const toggle = () => setModal(!modal);

    useEffect(() => {
        let cityObj = { name: text }
        setNewCity(cityObj)
    }, [text])

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                New City
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>New City Form</ModalHeader>
                <ModalBody>
                    <Input placeholder="City Name" value={text} onChange={event => {
                        setText(event.target.value)
                    }} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        if (text != "") {
                            postNewCity(newCity).then(() => {
                                getAndSetCities()
                            })
                        }
                        toggle()
                        setText("")
                    }}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={() => {
                        toggle()
                        setText("")
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddCityPopUp;