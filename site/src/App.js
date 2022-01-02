import './App.css';

import { MyName, ContactWidgets, Program} from './components/Titles.js'
import { Footer } from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <MyName />
      <Program />
      <ContactWidgets /> 
      <Footer />
    </div>
  );
}

export default App;
