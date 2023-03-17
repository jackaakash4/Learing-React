import React from 'react'
import Person from './Person'

function Namelist() {
    const person = [
        {
            id: 1,
            name: 'Aakash',
            age: 21,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Jack',
            age: 20,
            skill: 'JS'
        },
        {
            id: 3,
            name: 'Aryan',
            age: 15,
            skill: 'Java'
        }
    ]
    const personList = person.map(person => <Person person={person} />)
 
    return (
    <div className='personList'>
        {
            personList
        }
    </div>
  )
}

export default Namelist