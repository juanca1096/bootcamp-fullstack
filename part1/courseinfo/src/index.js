import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
    const course = 'Half Stack application development'
    const part1  = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const totalExercises = exercises1 + exercises2 + exercises3
    return (
        <div className="App">
            <Header course={course} />
            <Content 
            part1={part1} exercises1={ ` Numbers of exercises ${exercises1}`}
            part2={part2} exercises2={` Numbers of exercises ${exercises2}`}
            part3={part3} exercises3={` Numbers of exercises ${exercises3}`}
            />
            <Total totalExercises={` Numbers Total of exercises ${totalExercises}`}/>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'))