import './App.css';

import { AboutMe } from './components/AboutMe.js';
import { MyName, ContactWidgets, Program} from './components/Titles.js';
import { Footer } from './components/Footer.js';
import { DownloadButtons, ResumeDisplay } from './components/Resume.js';
import { Portfolio } from './components/Portfolio.js';

function App() {
  return (
    <div className="App">
      <MyName />
      <Program />
      <ContactWidgets />
      <AboutMe />
      <ResumeDisplay />
      <DownloadButtons />
      <Portfolio />
      <Footer />
    </div>
  )
};

export default App;
