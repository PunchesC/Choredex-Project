import './AccountForm.css'
import { useHistory } from 'react-router';
import { FormEvent, useContext, useState } from 'react';
import Account from '../model/Account';

function AccountForm(){

  // const { add account } = useContext(AccountContext);
  const history = useHistory();

  const [ adminName, setAdminName ] = useState("");
  const [ adminPassword, setAdminPassword ] = useState("");
  const [ gymName, setGymName ] = useState("");
  const [ gymPassword, setGymPassword ] = useState("");
  const [ calendarTitle, setCalendarTitle ] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const account: Account = {
      adminName: adminName,
      adminPassword: adminPassword,
      gymName: gymName,
      gymPassword: gymPassword,
      calendarTitle: calendarTitle,
    }

    // const num = addAccount(account);
    // history.push()
  }

  return (
    <form className="AccountForm">
      <h3>New Account Form</h3>
      <div className="AccountForm_left_container">
        <label>Admin Name:
          <input></input>
        </label>
        <label>Admin Password:
          <input></input>
        </label>
        {/* Hover effect to let parents/guardians know why gym means */}
        <label>Gym Name
          <input></input>
        </label>
        <label>Gym Password
          <input></input>
        </label>
      </div>
      <div className="AccountForm_right_container">
        <label>Calendar Title
          <input></input>
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