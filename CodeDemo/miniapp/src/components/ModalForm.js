import React from "react";
import { Modal, Button } from "react-bootstrap";
import EmployeeForm  from "./EmployeesForm";
const ModalForm = ({show, onHide, onAdd, onUpdate, currentEmployee})  => (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{currentEmployee ? "Edit Employee" : "Add Employee"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EmployeeForm
                onAdd={onAdd}
                onUpdate={onUpdate}
                currentEmployee={currentEmployee}
                onCancel={onHide}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);
export default ModalForm;