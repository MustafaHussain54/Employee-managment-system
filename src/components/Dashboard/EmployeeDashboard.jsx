import React from 'react'
import Header from '../Others/Header'
import TaskNumbers from '../Others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
