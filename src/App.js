import logo from './logo.svg';
import './App.css';
import React from "react";
import Profil from "../src/profil/Profil"
function App() {

  const testClick = (name) => {
    alert('' + name);
    };
  return (
<div>
<div>
<button onClick={() => testClick('RAMZI TLILI')} style={{backgroundColor:'brown',width:'50px',height:'50px',textAlign:'center'}}>
    <h4>Name</h4>
</button>
</div>
<div><Profil fullName="Ramzi Tlili" bio="I'm Ramzi Tlili from Sidi Bouzid study in GOMYCODE Sfax" profession="etudiant"  image = "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>

</div>


</div>
  );
}
export default App;
