import './AccountForm.css'
import { FormEvent, useState } from 'react';
import {Account, Trainer} from '../model/model';
import vacuuming from '../assets/vacuuming.png';
import { createAccount } from '../service/pokemonService';


function AccountForm(){
  const [ adminName, setAdminName ] = useState("");
  const [ adminPassword, setAdminPassword ] = useState("");
  const [ gymName, setGymName ] = useState("");
  const [ gymPassword, setGymPassword ] = useState("");
  const [ calendarTitle, setCalendarTitle ] = useState("");
  const [ trainers ] = useState<Trainer[]>([]);

  function clearForm(){
    setAdminName("");
    setAdminPassword("");
    setGymName("");
    setGymPassword("");
    setCalendarTitle("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const account: Account = {
      adminName: adminName,
      adminPassword: adminPassword,
      gymName: gymName,
      gymPassword: gymPassword,
      calendarTitle: calendarTitle,
      trainers: trainers
    }
    createAccount(account);
    clearForm();
    alert("Successfully created a gym! Sign in to start adding trainers and assigning chores!")
  }

  return (
    <form className="AccountForm" onSubmit={handleSubmit}>
      <h2 className="Title">NEW ACCOUNT FORM</h2>
      <div className="AccountForm_left_container">
        <label>admin name:<br></br>
          <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} required/>
        </label><br></br>
        <label>admin password:<br></br>
          <input type="text" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required/>
        </label><br></br>
        {/* Hover effect to let parents/guardians know why gym means */}
        <label>gym name:<br></br>
          <input type="text" value={gymName} onChange={(e) => setGymName(e.target.value)} required/>
        </label><br></br>
        <label>gym password:<br></br>
          <input type="text" value={gymPassword} onChange={(e) => setGymPassword(e.target.value)} required/>
        </label><br></br>
      </div>
      <div className="AccountForm_right_container">
        {/* <label>calendar title:<br></br>
          <input type="text" value={calendarTitle} onChange={(e) => setCalendarTitle(e.target.value)} required/>
        </label><br></br> */}
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
      <button type="submit">submit</button><br></br>
      <img className="vacuuming" src={vacuuming} alt="mr mime vacuuming" />
    </form>
  );

}

export default AccountForm;