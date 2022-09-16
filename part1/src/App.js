import './App.css';
import Mensaje from './Mensaje.js'

//Debido que los componentes son funciones, podremos crearlos con la forma declarativa o con arrow functions


const Description = () => {
  return <p> Esta es la app del curso fullstack bootcamp</p> 
}


function App() { 
  return (
    <div className="App">
      <Mensaje color= 'blue' message= 'Estamos trabajando' />
      <Mensaje color= 'green' message= 'En un curso'/>
      <Mensaje color= 'black' message= 'React'/>
      <Description />
    </div>
  );
}

export default App;
