import React, { FC } from "react";

const ScenarioTable: FC = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">מספר תרחיש</th>
            <th scope="col">שם</th>
            <th scope="col">תוכן</th>
            <th scope="col">מדור מוביל</th>
            <th scope="col">זמן הפעלה</th>
            <th scope="col">זמן יעד</th>
            <th scope="col">סטטוס</th>
          </tr>
        </thead>
        <tr></tr>
      </table>
    </div>
  );
};

export default ScenarioTable;
