import{Card} from './components/card'
import './App.css';

function App() {
  return (
<div>
  <Card id={1} paragrafo={'o paragrafo é uma string 1'} details='detalhes'/>
  <Card id={2} paragrafo={'o paragrafo é uma string 2'} details='detalhes 2'/>
</div>
 
  
  
  );
}

export default App;
