import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
//import { Routes, Route } from "react-router-dom";
//import PageNotFound from "../common/PageNotFound";

export const PetsList = ({ pets, allPets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <div>
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
         {pets.map((pet) => {
           return (
           <Pet key={pet.id} kind={pet.kind} pet={pet} />
           )
         })}
        </section>
      </section>
    </div>
  );
};
export default PetsList;
