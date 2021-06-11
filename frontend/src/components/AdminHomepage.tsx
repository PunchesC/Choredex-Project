import './AdminHomepage.css'
import CalendarCard from './CalendarCard'


function AdminHomepage(){


  return (
    <div className="AdminHomepage">
      <h3>Admin Homepage</h3>
      <button>Add Trainer</button>
      <CalendarCard />
    </div>
  )
}

export default AdminHomepage;