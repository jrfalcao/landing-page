import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Promotion from './Components/Promotion';

import './assets/css/App.css';
import Image01 from './assets/img/super_oferta.jpg'
import Image02 from './assets/img/oferta_relampago.jpg'
import Image03 from './assets/img/ofertas_imperdiveis.jpg'


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
      <Promotion 
        imageDir={true}
        imgUrl={Image02}
        promoTitle="Ofertas Relâmpago"
        description="Ofertas relâmpago que te deixarão de queixo caído" 
      />
      <Promotion 
        imageDir={true}
        imgUrl={Image03}
        promoTitle="Não deixe de aproveitar"
        description="Serão ofertas imperdíveis que você não poderá deixar de aproveitar. Cadastre seu email para ser contactado!" 
      />
    </div>
  );
}

export default App;
