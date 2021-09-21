
import './App.css';
import News from './Components/News';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sports from './Components/Sports';
import Covid from './Components/Covid';
import Navbar from './Components/Navbar';
import backgroundnews from  './Components/Videos/backgroundnews.mp4';
import Finance from './Components/Finance';
function App() {
  console.log(backgroundnews);
  return (
      <Router>
        <div className="App">
        <Navbar />
        <video src={backgroundnews} muted loop autoPlay>
      </video>
        <Switch>
        <Route path="/" exact component={News} />
        <Route path="/Sports" component={Sports} />
        <Route path="/Covid" component={Covid} />
        <Route path="/Finance" component={Finance} />
        </Switch>
        </div>
      </Router>
  )
}
export default App;


