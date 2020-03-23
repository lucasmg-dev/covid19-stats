import React from 'react'
import './styles/App.scss'
import Navbar from './components/navbar'
import CovidTable from './components/covid-table'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <div className='section'>
        <div className='container'>
          <CovidTable />
        </div>
      </div>
    </div>
  )
}

export default App
