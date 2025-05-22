import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesForm from './components/EmployeesForm';
import EmployeesList from './components/EmployeesList';
import Navbar from './components/NavBar';
import ModalForm from './components/ModalForm';

// Log changes directly related to data
const logChange = (action, before, after = null) => {
    console.log(`${action}:`);
    if(before) console.log('Before:', before);
    if(after) console.log('After:', after);
};

// App Component
function App() {
    const [employees, setEmployees] = useState(()=>{
        const data = localStorage.getItem('employees');
        return data ? JSON.parse(data) : [];
    });

    
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [showModal, setShowModal]  = useState(false);



    // Save employees to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);


    // addEmployee, updateEmployee, deleteEmployee, editEmployee, handleShowModal, handleCloseModal
    const addEmployee = (emp) => {
        setEmployees((prev) => {
          const newEmployees = [...prev, emp];
          logChange('Added Employee', null, emp);
          return newEmployees;
        });
    };

    const updateEmployee = (emUpdated) => {
        setEmployees((prev) => {
          const before = prev.find(emp => emp.id === emUpdated.id);
          const newEmployees = prev.map((emp) => emp.id === emUpdated.id ? emUpdated : emp);
          logChange('Updated Employee', before, emUpdated);
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

    const editEmployee = (emp) => {
        setCurrentEmployee(emp);
        setShowModal(true);
    }
    

    const handleShowModal = (emp = null) => {
        setCurrentEmployee(emp);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setCurrentEmployee(null);
        setShowModal(false);
    }; 

    return (
      <div>
        <Navbar />
            <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Employee Manager with Direct Change Log</h2>
                <button className="btn btn-primary" onClick={() => handleShowModal()}>
                Thêm nhân viên
                </button>
            </div>
            <ModalForm
                show={showModal}
                onHide={handleCloseModal}
                onAdd={addEmployee}
                onUpdate={updateEmployee}
                currentEmployee={currentEmployee}
            />
            <div id="employee-list">
                <EmployeesList employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} />
            </div>
        </div>
      </div>
    );
}

export default App;
