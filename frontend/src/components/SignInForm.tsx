import { FormEvent, useContext, useState } from "react";
import { AccountContext } from "../context/auth.context";
import { useHistory } from "react-router-dom"
import "./SignInForm.css";


function SignInForm(){
const [adminName, setAdminName] = useState("");
const [trainerName, setTrainerName] = useState("");
const [password, setPassword] = useState("");
const {accounts} = useContext(AccountContext);
let history = useHistory();


function handleSubmit(event:FormEvent): void {
  event.preventDefault();
for(let account of accounts)
if(account.adminName===adminName && account.adminPassword===password){
  console.log("Sucess Admin: " + account.adminName + account.adminPassword)

}
// for(let account of accounts)
// for(let trainer of account.trainers)
// if(trainer.name===trainerName && account.gymPassword===password){
//   console.log("Sucess Trainer: " + trainer.name + account.gymPassword)
//   history.push(`/choredex/${trainer.name}`)
// }


  
}

  return (
    <form className="SignInForm" onSubmit={handleSubmit}>
      <div>
        <label>Admin Name:
          <input value={adminName} onChange={e => setAdminName(e.target.value)} ></input>
        </label>
        <label>Trainer Name:
          <input value={trainerName} onChange={e => setTrainerName(e.target.value)} ></input>
        </label>
        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        </label>
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  )
}

export default SignInForm;