import './App.css';
import { useRef , useEffect } from 'react';


function App() {
  const paragrafRef = useRef()
  const sayacREf = useRef()
  function artır (){
sayacREf.current = sayacREf.current +5
alert(sayacREf.current)
  }
  return (
    <div className="App">
<p ref={paragrafRef} >Test</p>
<button onClick={artır}>Artır</button>
    </div>
  );
}

export default App;
