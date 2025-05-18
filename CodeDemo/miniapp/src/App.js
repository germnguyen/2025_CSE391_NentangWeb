import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesForm from './components/EmployeesForm';
import EmployeesList from './components/EmployeesList';
import Navbar from './components/NavBar';

// Log changes directly related to data
const logChange = (action, before, after = null) => {
    console.log(`${action}:`);
    if(before) console.log('Before:', before);
    if(after) console.log('After:', after);
};

// App Component
function App() {
    const [employees, setEmployees] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    const addEmployee = (emp) => {
        setEmployees((prev) => {
          const newEmployees = [...prev, emp];
          logChange('Added Employee', null, emp);
          return newEmployees;
        });
    };

    const updateEmployee = (updated) => {
        setEmployees((prev) => {
          const before = prev.find(emp => emp.id === updated.id);
          const newEmployees = prev.map((emp) => emp.id === updated.id ? updated : emp);
          logChange('Updated Employee', before, updated);
          return newEmployees;
        });
    };

    const deleteEmployee = (id) => {
        setEmployees((prev) => {
            const empToDelete = prev.find((emp) => emp.id === id);
            const newEmployees = prev.filter((emp) => emp.id !== id);
            logChange('Deleted Employee', empToDelete, null);
            return newEmployees;
        });
    };

    const editEmployee = (emp) => setCurrentEmployee(emp);

    return (
      <div>
        <Navbar />
        <div className="container mt-5">
            <h2>Employee Manager with Direct Change Log</h2>
            <EmployeesForm
                onAdd={addEmployee}
                onUpdate={updateEmployee}
                currentEmployee={currentEmployee}
                onCancel={() => setCurrentEmployee(null)}
            />
            <div id="employee-list">
                <EmployeesList employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} />
            </div>
        </div>
      </div>
    );
}

export default App;
