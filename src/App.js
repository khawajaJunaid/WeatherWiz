
import WeatherWizard from './components/weathercard';
import { Grommet} from 'grommet';
import { grommet } from 'grommet';
function App() {
  return (
    <Grommet theme={grommet}>
    <div style={{backgroundColor: "#242f5e", height:"100%", width:"100%"}} >
      <WeatherWizard/>
    </div>
    </Grommet>
  );
}

export default App;
