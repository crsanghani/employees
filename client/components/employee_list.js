import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 21;


class EmployeeList extends Component {
  // props.employees => an array of employee ojects
  render () {
    return (
      <div>
        <div className='employee-list'>
          {this.props.employees.map(employee =>
            <EmployeeDetail key={employee._id} employee={employee} />)}
        </div>
        <button onClick={() => Meteor.subscribe('employees', 42)}
          className='btn btn-primary'>
          Load More...
        </button>
      </div>
    )
  }
}

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees', PER_PAGE);

  //return an object, what ever we return will be sent to EmployeeList as properties
  return { employees: Employees.find({}).fetch() };

}, EmployeeList);
