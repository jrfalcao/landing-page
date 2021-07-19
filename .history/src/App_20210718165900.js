import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Promotion from './Components/Promotion';

import './assets/css/App.css';
import Image01 from './assets/img/super_oferta.jpg'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Promotion 
        imageDir={true}
        imgUrl={Image01}
        promoTitle="Aproveite nossas ofertas especiais"
        description="Durante o nosso Black Fride serão diversas ofertas especiais que caberam no seu bolso" 
      />
    </div>
  );
}

export default App;
