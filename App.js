import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';

function App() {
  const utilisateur = { nom: 'Berrada', photo: '/ghali.png' };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Ghali" />
      <Profil utilisateur={utilisateur} taille={120} />

      <h1>Liste des voitures 🚗</h1>

      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="BMW" modele="X5" couleur="Noir" />
      <Voiture marque="Tesla" modele="Model 3" couleur="Blanc" />
    </div>
  );
}

export default App;