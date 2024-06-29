import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'
import RC from "./assets/RC.mp4"



function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
   

      <Hero className='relative z-1' >

        {/* <video className='videoTag absolute h-full w-full -z-1' autoPlay loop muted>
            <source src={RC} type='video/mp4' />
        </video> */}
      </Hero>


      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}

    
    </main>
  )
}

export default App