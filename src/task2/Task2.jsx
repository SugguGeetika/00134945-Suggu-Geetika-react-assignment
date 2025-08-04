import React from 'react';

export default function Task2() {
  const employees = [
    { name: 'Geetika', salary: 36000 },
    { name: 'Anil', salary: 45000 },
    { name: 'Chaitanya', salary: 55000 },
    { name: 'Akshith', salary: 50000 }
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
