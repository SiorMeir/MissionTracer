import AddScenarioForm from 'components/AddScenario/AddScenarioForm/AddScenarioForm';
import ScenarioTable from 'components/ScenarioTable/ScenarioTable';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [scenarios, setScenarios] = useState([]);
  useEffect(() => {
    window.electron.fileHandling.getExistingScenarios();
    window.electron.ipcRenderer.on('get-scenarios', (arg) => {
      setScenarios(() => {
        return arg;
      });
    });
  }, []);
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
      <div className="footer">
        <button className="btn btn-primary">יצא לאקסל</button>
        <button className="btn btn-primary">הצג אנליטיקה</button>
      </div>
    </div>
  );
}
