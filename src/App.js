
import WeatherWizard from './components/weathercard';
import Popup from './components/popup';
import { Grommet} from 'grommet';
import { grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import * as Sentry from '@sentry/browser'

function App() {
  // Sentry.captureException("error ")
  return (
    <Router>
      <Grommet theme={grommet}>
      {/* <div style={{backgroundColor: "#242f5e", height:"100%", width:"100%"}} > */}
        
      <Switch>  
        <Route exact path="/" >
        <WeatherWizard/>
        </Route>
        <Route  exact path="/popup" >
        <Popup/>
        </Route>
        {/* <WeatherWizard/> */}
        
      </Switch>
      {/* </div> */}
      </Grommet>
    </Router>
  );
}

export default App;
