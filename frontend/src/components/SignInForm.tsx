import { FormEvent, useContext, useState } from 'react';
import { AccountContext } from '../context/auth.context';
import { useHistory } from 'react-router-dom';
import './SignInForm.css';
import sweeping from '../assets/sweeping.png';
import { readAccountByGymName } from '../service/pokemonService';
function SignInForm() {
  const [adminName, setAdminName] = useState('');
  const [trainerName, setTrainerName] = useState('');
  const [password, setPassword] = useState('');
  const [gymName, setGymName] = useState('');
  const { setCurrentUser, setAccount } = useContext(AccountContext);

  let history = useHistory();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    readAccountByGymName(gymName).then((accountFromApi) => {
      setAccount(accountFromApi);

      if (
        accountFromApi.adminName === adminName &&
        accountFromApi.adminPassword === password
      ) {
        setCurrentUser(adminName);
        history.push(`/homepage/${accountFromApi.adminName}`);
      } else {
        for (let trainer of accountFromApi.trainers) {
          if (
            trainer.name === trainerName &&
            accountFromApi.gymPassword === password
          ) {
            setCurrentUser(trainerName);
            history.push(`/choredex/${trainer.name}`);
          }
        }
      }
    });
  }

  return (
    <form className="SignInForm" onSubmit={handleSubmit}>
      <h2 className="Title">SIGN IN FORM</h2>
      <div>
        <label>
          admin name:<br></br>
          <input
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label>
          trainer name:<br></br>
          <input
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label>
          gym name:<br></br>
          <input
            type="text"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label>
          password:<br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <br></br>
      </div>
      <div>
        <button type="submit">sign in</button>
      </div>
      <img className="sweeping" src={sweeping} alt="minccino sweeping" />
    </form>
  );
}

export default SignInForm;
