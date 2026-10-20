import {useState} from "react";

function StudentCard(props) {
  const[cordonneesvisibles,setCoordonneesvisibles]=useState(false);
  function basculerinformation(){
    setCoordonneesvisibles(!cordonneesvisibles);
    
  } 
  return (
    <div>
      <h1>Fiche d'information</h1>
      <img src={props.img} alt="logo" width={80} height={80}/>
      <p>Nom: {props.nom}</p>
      <p>Prénom: {props.prenom}</p>
      {cordonneesvisibles && (
        <div>
          <p>Email: {props.email}</p>
          <p>Téléphone: {props.telephone}</p>
        </div>
      )}

      
      <p>Filière: {props.filere}</p>
      <p>Groupe: {props.groupe}</p>
      <p>Ville: {props.ville}</p>
      <a href={`mailto:${props.email}`}>contacter moi</a>
      <button onClick={basculerinformation}>{cordonneesvisibles ? "masquer" : "afficher"}</button>
    </div>
    
  );
};
export default StudentCard;