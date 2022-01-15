import { FC, SyntheticEvent, useState } from 'react';

interface FormProps {
  engineeringGroupOptions: string[];
  statusOptions: string[];
}

const AddScenarioForm: FC<FormProps> = (props) => {
  const [value, setValue] = useState({
    ScenrioID: '',
    ScenarioName: '',
    ScenarioContent: '',
    ScenarioIntegrator: '',
    activationTime: '',
    deadlineTime: '',
    status: '',
  });
  const onInput = (event: SyntheticEvent) =>
    setValue({ ...value, [event.target.name]: event.target.value });
  function handleSubmit(event: SyntheticEvent) {
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    event.preventDefault();
    window.electron.fileHandling.saveScenarios('wow', formData);
    event.target.reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit} action="">
      <div className="form-group">
        <label htmlFor="ScenrioID">מזהה תרחיש</label>
        <input
          className="form-control"
          type="text"
          name="ScenrioID"
          id="ScenrioID"
          placeholder="לדוגמה: A1212"
          onChange={onInput}
          value={value.ScenrioID}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioName">שם תרחיש</label>
        <input
          className="form-control"
          type="text"
          name="ScenarioName"
          id="ScenarioName"
          onChange={onInput}
          value={value.ScenarioName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioContent">תוכן תרחיש</label>
        <input
          className="form-control"
          type="text"
          name="ScenarioContent"
          id="ScenarioContent"
          placeholder="סיפור הרקע ומה נדרש"
          onChange={onInput}
          value={value.ScenarioContent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioIntegrator">מדור מוביל</label>
        <select
          className="form-control"
          name="ScenarioIntegrator"
          id="ScenarioIntegrator"
          placeholder="מדור מוביל"
          onChange={onInput}
          value={value.ScenarioIntegrator}
        >
          {props.engineeringGroupOptions.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="activationTime">זמן הפעלה</label>
        <input
          className="form-control"
          type="datetime-local"
          name="activationTime"
          id="activationTime"
          placeholder="זמן הפעלה"
          onChange={onInput}
          value={value.activationTime}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadlineTime">זמן יעד</label>
        <input
          className="form-control"
          type="datetime-local"
          name="deadlineTime"
          id="deadlineTime"
          placeholder="זמן יעד"
          onChange={onInput}
          value={value.deadlineTime}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">סטטוס</label>
        <select className="form-control" name="status" id="status" onChange={onInput} value={value.status}>
          {props.statusOptions.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
      <button type='submit' className="btn btn-primary">הוסף תרחיש</button>
    </form>
  );
};

export default AddScenarioForm;
