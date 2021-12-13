import AddScenarioButton from 'components/AddScenario/AddScenarioButton/AddScenarioButton';
import AddScenarioForm from 'components/AddScenario/AddScenarioForm/AddScenarioForm';
import ScenarioTable from 'components/ScenarioTable/ScenarioTable';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


export default function App() {
  return (
    <div className="app">
      <h1>ענף הנדסה אווירונאוטית</h1>
      <h2>מעקב תרחישים בתרגיל</h2>
      <div className="data-area">
        <div className="scenarios-area">
          <ScenarioTable />
        </div>
        <div className="form-area card">
          <AddScenarioForm statusOptions={['a','b','c']} engineeringGroupOptions={['fsf','gsg','63456']}/>
          <AddScenarioButton />
        </div>
      </div>
      <div className="footer">Footer goes here</div>
      </div>
  );
}
