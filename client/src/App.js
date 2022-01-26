import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/form/Form';
import Prueba from './Components/prueba/prueba.jsx'; 
import Prueba2  from './Components/prueba2/prueba2.jsx';
import Prueba3 from './Components/prueba3/prueba3.jsx';
import Prueba4 from './Components/prueba4/prueba4.jsx';



function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path='/prueba' component={Prueba}/>
          <Route exact path='/prueba2' component={Prueba2}/>
          <Route exact path='/prueba3' component={Prueba3}/>
          <Route exact path='/prueba4' component={Prueba4}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
