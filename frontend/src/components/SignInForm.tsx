import "./SignInForm.css"

function SignInForm(){

  return (
    <form className="SignInForm">
      <div>
        <label>Admin Name:
          <input></input>
        </label>
        <label>Trainer Name:
          <input></input>
        </label>
        <label>Password:
          <input type="password"></input>
        </label>
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  )
}

export default SignInForm;