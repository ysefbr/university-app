import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import { useState } from "react";
import image from './assets/pixellogo.png'



function app(){
  const [etudiants, setEtudiants] = useState([
  {  
  nom : 'yousef',
    prenom : ' benrabea',
    email : 'yousefbenrabea@gmail.com',
    telephone :'22531903',
    filere:'glsi2',
    groupe:'d',
    ville :'bekalta',
    img : image
  },
  {
    nom:'bziwech',
    prenom:"rayen", 
    email:"rayen@gg.cc",
    telephone : "12345678",
    filere : "glsi2",
    groupe:"d",
    ville:"moknine",
    img : image
  }
]);
function ajouterEtudiant() {
  const nouvelEtudiant = {
    nom: 'nouveau',
    prenom: 'etudiant',
    email: 'ggg@aa.com',
    telephone: '55555555',
    filere: 'glsi2',
    groupe: 'd',
    ville: 'mmmmmmm',
    img: image
  };
  setEtudiants([...etudiants, nouvelEtudiant]);
}
  return(
  
    <div className="container">  <div className="action">
  < button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
    </div>
      {etudiants.map((etudiant) => (
      <StudentCard 
      key={etudiant.email}
      prenom={etudiant.prenom}
      nom={etudiant.nom}
      email={etudiant.email}
      telephone={etudiant.telephone}
      filere={etudiant.filere}
      groupe={etudiant.groupe}
      ville={etudiant.ville}
      img={etudiant.img}
      />
      
      ))}</div>
  )}
export default app;