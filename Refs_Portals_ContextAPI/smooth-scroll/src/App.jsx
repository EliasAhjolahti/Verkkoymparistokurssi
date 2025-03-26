import { useRef } from 'react'
import './App.css'

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null)

  return (
    <div>
<nav>
<button onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}> go to home </button>
<button onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}> go to about </button>
<button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}> go to contact </button>
</nav>

<div id="home" ref={homeRef}>
<h1>home</h1>
<p>{'home '.repeat(300)}</p>
</div>

<div id="about" ref={aboutRef}>
<h1>about</h1>
<p>{'about '.repeat(300)}</p>
</div>

<div id="contact" ref={contactRef}>
<h1>contact</h1>
<p>{'contact '.repeat(300)}</p>
</div>

</div>
  )
}

export default App
