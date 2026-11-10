import { useState } from "react";
import "./StudentForm.css";



function StudentForm(props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filere, setFilere] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [img, setImg] = useState("");
  return (
    <div>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" value={nom}  onChange={(e) => setNom(e.target.value)} />
        <label htmlFor="prenom">Prénom:</label>
        <input type="text" id="prenom" value={prenom}  onChange={(e) => setPrenom(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="telephone">Téléphone:</label>
        <input type="tel" id="telephone" value={telephone}  onChange={(e) => setTelephone(e.target.value)} />
        <label htmlFor="filere">Filière:</label>
        <select name="" id="Filière">
            <option value="">Sélectionnez une filière</option> 
            <option value="glsi1">glsi</option>
            <option value="dsi">dsi</option>
            <option value="rsi">rsi</option> 
        </select>
        <label htmlFor="groupe">Groupe:</label>
        <input type="text" id="groupe"  onChange={(e) => setGroupe(e.target.id)} />
        <label htmlFor="ville">Ville:</label>
        <input type="text" id="ville"  onChange={(e) => setVille(e.target.id)} />
        <label htmlFor="img">Image:</label>
        <input type="file" accept="image/*" id="img"  onChange={(e) =>{ 
            const fichier = e.target.files[0];
            if (fichier) {
            setImg(URL.createObjectURL(fichier));
            } } }/>

        <div className="action">
        <button onClick={() => {
          const nouvelEtudiant = {
            nom,
            prenom,
            email,
            telephone,
            filere,
            groupe,
            ville,
            img
          };
          props.onAddStudent(nouvelEtudiant);
        }}>
          Ajouter
        </button></div>

    </div>
  );

}
export default StudentForm;