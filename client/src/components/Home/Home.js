import { getGreeting } from "../../apiManager";
import { useEffect, useState } from "react";
import { DogsList } from "./DogsList.js";
import { AddDogPopUp } from "./AddDogPopUp.js";
import { getAllDogs } from "../../services/dogService.js";

export default function Home() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})
  const [addDogModal, setAddDogModal] = useState(false);
  const [dogDetailsModal, setDogDetailsModal] = useState(false);

  const toggleDogDetails = () => setDogDetailsModal(!dogDetailsModal);

  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });

  const getAndSetDogs = () => {
    getAllDogs().then(res => {
      setDogs(res)
    })
  }

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
    getAndSetDogs()
  }, []);

  return (
    <>
      <p>{greeting.message}</p>
      <AddDogPopUp getAndSetDogs={getAndSetDogs} setSelectedDog={setSelectedDog} addDogModal={addDogModal} setAddDogModal={setAddDogModal} toggleDogDetails={toggleDogDetails} dogs={dogs} />
      <DogsList dogs={dogs} setDogs={setDogs} getAndSetDogs={getAndSetDogs} selectedDog={selectedDog} setSelectedDog={setSelectedDog} dogDetailsModal={dogDetailsModal} setDogDetailsModal={setDogDetailsModal} toggleDogDetails={toggleDogDetails} />
    </>
  );
}
