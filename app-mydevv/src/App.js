import './App.css';
import Titulo from './Titulo';

const Mensaje=()=>{
  return <h2>"Hola Wapes"</h2>;
}
function App() {
  const mensaje="hola Mundo"
  const fecha= new Date()
  return (
    <div className="App">
      <Titulo color='green' title='Aprendiendo Con React'/>
      <Titulo color= 'red' title='Nos haremos expertos'/>
      <Mensaje />
      <p>Estamos trabajando en ello</p>
      {`${mensaje} ${fecha.getFullYear()}`}
    </div>
  );
}

export default App;
