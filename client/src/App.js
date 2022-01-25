import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/form/Form';
import  Prueba  from './Components/prueba/prueba.jsx';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path='/prueba' component={Prueba}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
