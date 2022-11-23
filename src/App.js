import './App.css';
import { HeaderHero } from './components/headerhero/HeaderHero';
import { Header } from './components/header/Header';
import { Brand } from './components/brands/Brand';
import { Services } from './components/services/Services';
import { Vision } from './components/visions/Vision';
import { Solution } from './components/solutions/Solution';
import { WhyUs } from './components/whyus/WhyUs';
import { Gallery } from './components/gallery/Gallery';
import { Member } from './components/member/Member';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <HeaderHero/>
     <Brand/>
     <Services/>
     <Vision/>
     <Solution/>
     <WhyUs/>
     <Gallery/>
     <Member/>
     <Footer/>
    </div>
  );
}

export default App;
