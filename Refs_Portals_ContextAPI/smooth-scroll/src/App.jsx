import { useContext, useRef, useState } from 'react'
import './App.css'
import BackToTop from './components/BackToTop';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { state, dispatch } = useContext(ThemeContext);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('')


  return (
    <div className={`app ${state.theme}`}>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME'})}>
        Toggle Theme
      </button>
<nav>

<button
  onClick={() => {
    setActiveSection('home');
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }}
  className={activeSection === 'home' ? 'active' : ''}
>
  go to home
</button>

<button onClick={() => {
  setActiveSection('about');
  aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }}
  className={activeSection === 'about' ? 'active' : ''}
  > 
  go to about 
  </button>

  <button onClick={() => {
  setActiveSection('contact');
  aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }}
  className={activeSection === 'contact' ? 'active' : ''}
  > 
  go to contact
  </button>

</nav>

<div id="home" ref={homeRef} >
<h1>home</h1>
<p>{'home '.repeat(300)}</p>
</div>

<div id="about" ref={aboutRef} >
<h1>about</h1>
<p>{'about '.repeat(300)}</p>
</div>

<div id="contact" ref={contactRef} >
<h1>contact</h1>
<p>{'contact '.repeat(300)}</p>
</div>
<BackToTop />
</div>
  )
}

export default App
