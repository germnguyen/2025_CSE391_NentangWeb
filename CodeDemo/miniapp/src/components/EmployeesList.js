import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.position}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => onEdit(emp)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => onDelete(emp.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeList;
