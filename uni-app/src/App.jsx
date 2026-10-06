import image from './assets/pixellogo.png'
function app() {

  const fich={
    nom :'yousef',
    prenom : ' benrabea',
    email : 'yousefbenrabea@gmail.com',
    telephone :'22531903',
    filere:'glsi2',
    groupe:'d',
    ville :'bekalta',
    img : image
  };
  return (
    <div>
      <h1>Fiche d'information</h1>
      <img src={fich.img} alt="logo" width={80} height={80}/>
      <p>Nom: {fich.nom}</p>
      <p>Prénom: {fich.prenom}</p>
      <p>Email: {fich.email}</p>
      <p>Téléphone: {fich.telephone}</p>
      <p>Filière: {fich.filere}</p>
      <p>Groupe: {fich.groupe}</p>
      <p>Ville: {fich.ville}</p>
      <a href={`mailto:${fich.email}`}>contacter moi</a>
    </div>
  );
}
export default app;