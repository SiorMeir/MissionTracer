import { FC } from 'react';
import './ScenarioTable.css';

interface Props {
  scenarios?: {
    id: number;
    name: string;
    content?: string;
    leadingGroup: string;
    timeOfActivation: string;
    timeOfDeadline: string;
    status: string;
  }[];
}

const ScenarioTable: FC<Props> = (props) => {
  const setScenarios = () => {
    if (!props.scenarios) {
      return (
        <tr>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
          <td scope="col">No Data</td>
        </tr>
      );
    }

    return props.scenarios.map((value) => {
      return (
        <tr>
          <td scope="col">מספר תרחיש</td>
          <td scope="col">{value.id}</td>
          <td scope="col">{value.name}</td>
          <td scope="col">
            <div className="content-cell">
              <div className="text">{value.content}</div>
              <button className="btn btn-primary expand-btn">הרחב</button>
            </div>
          </td>
          <td scope="col">{value.leadingGroup}</td>
          <td scope="col">{value.timeOfActivation}</td>
          <td scope="col">{value.timeOfDeadline}</td>
          <td scope="col">{value.status}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table scenario-table">
        <thead>
          <tr>
            <th scope="col">מספר תרחיש</th>
            <th scope="col">מזהה תרחיש</th>
            <th scope="col">שם</th>
            <th scope="col">תוכן</th>
            <th scope="col">מדור מוביל</th>
            <th scope="col">זמן הפעלה</th>
            <th scope="col">זמן יעד</th>
            <th scope="col">סטטוס</th>
          </tr>
        </thead>
        <tbody>{setScenarios()}</tbody>
      </table>
    </div>
  );
};

export default ScenarioTable;
