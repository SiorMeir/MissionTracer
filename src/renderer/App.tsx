import AddScenarioButton from 'components/AddScenario/AddScenarioButton/AddScenarioButton';
import AddScenarioForm from 'components/AddScenario/AddScenarioForm/AddScenarioForm';
import ScenarioTable from 'components/ScenarioTable/ScenarioTable';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

let scenarios;
window.electron.fileHandling.getExistingScenarios();  
window.electron.ipcRenderer.on('get-scenarios', (arg) => (scenarios = arg));

export default function App() {
  return (
    <div className="app">
      <h1>{window.configData['branch']}</h1>
      <h2>מעקב תרחישים בתרגיל</h2>
      <div className="data-area">
        <div className="scenarios-area">
          <ScenarioTable scenarios={scenarios} />
        </div>
        <div className="form-area card">
          <AddScenarioForm
            statusOptions={['a', 'b', 'c']}
            engineeringGroupOptions={['fsf', 'gsg', '63456']}
          />
        </div>
      </div>
      <div className="footer">Footer goes here</div>
    </div>
  );
}
