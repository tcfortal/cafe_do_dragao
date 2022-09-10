import YouTube from 'react-youtube';
import './App.css';
import Card from './components/Cards';
import imagem1 from "./images/imagem1.jpg";
import imagem2 from "./images/imagem2.jpg";
import imagem3 from "./images/imagem3.jpg";
import imagem4 from "./images/imagem4.jpg";


function App() {
  return (
    <>
    <div className='nomePrincipal'>
      <h1>CAFÉ DO DRAGÃO</h1>
    </div>
      <div className="wrapper">

        <Card img={imagem1} title="Compra!" alt="compra" description="Ingredientes" />
        <Card img={imagem2} title="Prepara!" alt="prepara" description="preparando" />
        <Card img={imagem3} title="Feito!" alt="feito" description="feito" />
        <Card img={imagem4} title="Cash!" alt="title" description="venda" />
      </div >

      <br />
      <div >
        <YouTube videoId="x2g4pOFAKps"/>
      </div>
    </>
  );
}

export default App;
