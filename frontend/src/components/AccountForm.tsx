import './AccountForm.css'
import { useHistory } from 'react-router';
import { FormEvent, useContext, useState } from 'react';
import {Account} from '../model/model';
import { AccountContext } from '../context/auth.context';

function AccountForm(){

  // const { add account } = useContext(AccountContext);
  const history = useHistory();
  const {account} = useContext(AccountContext);
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
      <h2>NEW ACCOUNT FORM</h2>
      <div className="AccountForm_left_container">
        <label>admin name:<br></br>
          <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
        </label><br></br>
        <label>admin password:<br></br>
          <input type="text" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
        </label><br></br>
        {/* Hover effect to let parents/guardians know why gym means */}
        <label>gym name:<br></br>
          <input type="text" value={gymName} onChange={(e) => setGymName(e.target.value)} />
        </label><br></br>
        <label>gym password:<br></br>
          <input type="text" value={gymPassword} onChange={(e) => setGymPassword(e.target.value)} />
        </label><br></br>
      </div>
      <div className="AccountForm_right_container">
        <label>calendar title:<br></br>
          <input type="text" value={calendarTitle} onChange={(e) => setCalendarTitle(e.target.value)} />
        </label><br></br>
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
      <button type="submit">submit</button>
    </form>
  );

}

export default AccountForm;