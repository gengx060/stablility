import React, { Component } from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    handleClose = () => {
        this.setState({show: false});
    };

    handleShow = () =>  {
        this.setState({show: true});
    };

    render() {
        const {show} = this.state;
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>
                            Action
                        </th>
                        <th>
                            State
                        </th>
                        <th>
                            Auth Name
                        </th>
                        <th>
                            Sales Tax rate
                        </th>
                        <th>
                            Use Tax Rate
                        </th>
                        <th>
                            Start Date
                        </th>
                        <th>
                            End Date
                        </th>
                        <th>
                            Created
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Action
                        </td>
                        <td>
                            State
                        </td>
                        <td>
                            Auth Name
                        </td>
                        <td>
                            Sales Tax rate
                        </td>
                        <td>
                            Use Tax Rate
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
                        </td>
                        <td>
                            Created
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="primary" onClick={this.handleShow}> show </Button>
            </div>
        );
    }
}

export default Form;