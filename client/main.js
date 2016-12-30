import React from 'react'
import ReactDOM from 'react-dom'

import EmployeeList from './components/employee_list'
// declare component
const App = () => {
  return (
    <EmployeeList />
  )
}

// after meteor loads in the browser, render my app to the dom
Meteor.startup(() => {
  //  react render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
