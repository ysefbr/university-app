import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import image from './assets/pixellogo.png'
const etudiants =[
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
];

function app(){
  return(
    <div className="container">
      {etudiants.map((etudiant) => (
      <StudentCard 
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