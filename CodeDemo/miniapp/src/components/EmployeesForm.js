import React, { useState, useEffect } from 'react';

function EmployeeForm({ onAdd, onUpdate, currentEmployee, onCancel }) {
    const [employee, setEmployee] = useState({ name: '', email: '', phone: '', position: '' });

    useEffect(() => {
        if (currentEmployee) {
            setEmployee(currentEmployee);
        }else{
            setEmployee({ name: '', email: '', phone: '', position: '' });
        }
    }, [currentEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee.id) {
            onUpdate(employee);
        } else {
            onAdd({ ...employee, id: Date.now() });
        }
        setEmployee({ name: '', email: '', phone: '', position: '' });
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input type="text" name="name" value={employee.name} placeholder="Name" onChange={handleChange} className="form-control mb-2" required />
            <input type="email" name="email" value={employee.email} placeholder="Email" onChange={handleChange} className="form-control mb-2" required />
            <input type="text" name="phone" value={employee.phone} placeholder="Phone" onChange={handleChange} className="form-control mb-2" required />
            <input type="text" name="position" value={employee.position} placeholder="Position" onChange={handleChange} className="form-control mb-2" required />
            <button type="submit" className="btn btn-primary">{employee.id ? 'Update' : 'Add'}</button>
            {onCancel && <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancel</button>}
        </form>
    );
}

export default EmployeeForm;
