import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/Form'


function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
