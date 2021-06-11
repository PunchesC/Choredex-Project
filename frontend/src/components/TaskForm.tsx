import './TaskForm'

function TaskForm(){


  return (
    <form className="TaskForm">
      <h3>New Task Form</h3>
      <div className="TaskForm_left_container">
      <label>Task Title:
        <input></input>
      </label>
      <label>Task Description(optional):
        <textarea></textarea>
      </label>
      </div>
      <div className="TaskForm_right_container">
      <label>Select Day(s):
        <label>Monday
        <input type="checkbox"></input>
        </label>
        <label>Tuesday
        <input type="checkbox"></input>
        </label>
        <label>Wednesday
        <input type="checkbox"></input>
        </label>
        <label>Thursday
        <input type="checkbox"></input>
        </label>
        <label>Friday
        <input type="checkbox"></input>
        </label>
        <label>Saturday
        <input type="checkbox"></input>
        </label>
        <label>Sunday
        <input type="checkbox"></input>
        </label>  
      </label>
      {/* Number of trainer dependent on the amount selected on Account Form */}
      <label>Select Trainer:
      <select>
        <option>Trainer Example1</option>
        <option>Trainer Example2</option>
      </select>
      </label>
      <label>Level of Difficulty:
      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      </label>
      <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default TaskForm;