import './AccountForm.css'
import { useHistory } from 'react-router';
import { FormEvent, useContext, useState } from 'react';
import {Account} from '../model/model';

function AccountForm(){

  // const { add account } = useContext(AccountContext);
  const history = useHistory();

  const [ adminName, setAdminName ] = useState("");
  const [ adminPassword, setAdminPassword ] = useState("");
  const [ gymName, setGymName ] = useState("");
  const [ gymPassword, setGymPassword ] = useState("");
  const [ calendarTitle, setCalendarTitle ] = useState("");

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();

  //   const account: Account = {
  //     adminName: adminName,
  //     adminPassword: adminPassword,
  //     gymName: gymName,
  //     gymPassword: gymPassword,
  //     calendarTitle: calendarTitle,
  //   }

  //   const num = addAccount(account);
  //   history.push(`/admin-homepage/${num}`);
  // }

  return (
    <form className="AccountForm" >
      <h3>New Account Form</h3>
      <div className="AccountForm_left_container">
        <label>Admin Name:
          <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
        </label>
        <label>Admin Password:
          <input type="text" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
        </label>
        {/* Hover effect to let parents/guardians know why gym means */}
        <label>Gym Name
          <input type="text" value={gymName} onChange={(e) => setGymName(e.target.value)} />
        </label>
        <label>Gym Password
          <input type="text" value={gymPassword} onChange={(e) => setGymPassword(e.target.value)} />
        </label>
      </div>
      <div className="AccountForm_right_container">
        <label>Calendar Title
          <input type="text" value={calendarTitle} onChange={(e) => setCalendarTitle(e.target.value)} />
        </label>
        {/* <label>Number of Trainers
          <input></input>
        </label> */}
        {/* generate the # of input trainer name field from above number of trainers input */}
        {/* <label>Trainer Example1
        <input></input>
        </label>
        <label>Trainer Example2
        <input></input>
        </label> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );

}

export default AccountForm;