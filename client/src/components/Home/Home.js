import { getGreeting } from "../../apiManager";
import { useEffect, useState } from "react";
import { DogsList } from "./DogsList.js";
import { AddDogPopUp } from "./AddDogPopUp.js";
import { getAllDogs } from "../../services/dogService.js";

export default function Home() {
  const [dogs, setDogs] = useState([])

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
      <AddDogPopUp getAndSetDogs={getAndSetDogs}/>
      <DogsList dogs={dogs} setDogs={setDogs} getAndSetDogs={getAndSetDogs} />
    </>
  );
}
