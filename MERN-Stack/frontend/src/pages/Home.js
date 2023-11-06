import { useEffect , useState } from "react"
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = ()=> {
    const [ workouts , setWorkouts] = useState(null)

    useEffect(() =>{
        const fetchworkoouts = async () => {

            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok) {
                setWorkouts(json)
            }
        }
        fetchworkoouts()
    },[])

return (
    <div className="home">
        <div>
        <WorkoutForm className="right-column" />
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails  key={workout._id} workout={workout} className="left-column"  />
            ))}
           
        </div>
       
    </div>
)

}

export default Home