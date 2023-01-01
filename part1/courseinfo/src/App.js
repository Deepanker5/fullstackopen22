// displays course information
const Content = (props) => {
  let breakdown = props.course.parts
  return (
    <div>
      <Individual course = {breakdown[0]}/>
      <Individual course = {breakdown[1]}/>
      <Individual course = {breakdown[2]}/>
    </div>
  )
}
//breakdown course into individual parts
const Individual = (props) => {
  let breakdown = props.course
  return (
    <div>
      <p>{breakdown.name} {breakdown.exercises}</p>
    </div>
  )
}
//display Title
const Header = (props) => {
  let title = props.course.name
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
//display sum of exercises
const Total = (props) => {
  let breakdown = props.course.parts
  let sum = breakdown[0].exercises + breakdown[1].exercises + breakdown[2].exercises
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course ={course} />
      <Total course ={course} />
    </div>
  )
}


export default App
