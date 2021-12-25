import { FC } from "react";

interface Props {
  scenarios? : {
    id : number,
    name : string,
    content : string,
    leadingGroup : string,
    timeOfActivation: Date,
    timeOfDeadline : Date,
    status : string
  }[]
}

const ScenarioTable: FC<Props> = (props) => {

    const scenarios = () => {
      
      if (!props.scenarios) {
        return;
      }

      props.scenarios.map((value) => {
        return (
          <tr>
            <th scope="col">מספר תרחיש</th>
            <th scope="col">{value.id}</th>
            <th scope="col">{value.name}</th>
            <th scope="col">{value.content}</th>
            <th scope="col">{value.leadingGroup}</th>
            <th scope="col">{value.timeOfActivation}</th>
            <th scope="col">{value.timeOfDeadline}</th>
            <th scope="col">{value.status}</th>
          </tr>
          )
        })
    }
  return (
    <div>
      <table className="table">
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
          {scenarios}
        </thead>
        <tr></tr>
      </table>
    </div>
  );
};

export default ScenarioTable;
