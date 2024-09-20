import './App.css';
import { Language } from './components/language';

function App() {
  return (
    <div>
      <h2>Amazing Languages</h2>
      <div>
        <Language
          name='JavaScript'
          company='Netscape Communications'
          year={1995}
        />
        <Language
          name='Python'
          company='The Python Software Foundation'
          year={1991}
        />
        <Language name='C' company='Bell Labs' year={1972} />
      </div>
    </div>
  );
}

export default App;
