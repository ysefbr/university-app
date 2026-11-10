import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import { useState } from "react";
import image from './assets/pixellogo.png';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      nom: 'yousef',
      prenom: 'benrabea',
      email: 'yousefbenrabea@gmail.com',
      telephone: '22531903',
      filere: 'glsi2',
      groupe: 'd',
      ville: 'bekalta',
      img: image,
    },
    {
      nom: 'bziwech',
      prenom: 'rayen',
      email: 'rayen@gg.cc',
      telephone: '12345678',
      filere: 'glsi2',
      groupe: 'd',
      ville: 'moknine',
      img: image,
    },
  ]);

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      nom: 'nouveau',
      prenom: 'etudiant',
      email: `ggg@aa.com`,
      telephone: '55555555',
      filere: 'glsi2',
      groupe: 'd',
      ville: 'mmmmmmm',
      img: image,
    };

    setEtudiants((etudiantsActuels) => [...etudiantsActuels, nouvelEtudiant]);
  }

  function supprimerEtudiant(email) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.filter((etudiant) => etudiant.email !== email)
    );
  }
  function modifierEtudiant(email, nouvellesInformations) {
    nouvellesInformations.nom =prompt("Entrez les nouvelles nom de l'étudiant:");
    setEtudiants ((etudiantsActuels) =>
      etudiantsActuels.map((etudiant) =>
        etudiant.email === email ? { ...etudiant, ...nouvellesInformations } : etudiant
      )
    );
  }
  function addetudiant() {
    const newe = {};
    newe.nom =prompt("Entrez les nouvelles nom de l'étudiant:");
    newe.prenom =prompt("Entrez les nouvelles prenom de l'étudiant:");
    newe.email =prompt("Entrez les nouvelles email de l'étudiant:");
    newe.telephone =prompt("Entrez les nouvelles telephone de l'étudiant:");
    newe.filere =prompt("Entrez les nouvelles filere de l'étudiant:");
    newe.groupe =prompt("Entrez les nouvelles groupe de l'étudiant:");
    newe.ville =prompt("Entrez les nouvelles ville de l'étudiant:");
    setEtudiants((etudiantsActuels) => [...etudiantsActuels, newe]);
  }

  return (
    <div>

      <div className="action">
        <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        <button onClick={addetudiant}>Ajouter etud form</button>  
        

      </div>
      <div>
        <StudentForm 
        onAddStudent={(nouvelEtudiant) => setEtudiants((etudiantsActuels) => [...etudiantsActuels, nouvelEtudiant])}
        />
      </div>

    
    <div className="container">
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
          onDelete={supprimerEtudiant}
          onEdit={modifierEtudiant}
          
        />
      ))}
    </div>
    </div>
  );
}

export default App;