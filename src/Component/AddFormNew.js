import React, { Component } from 'react';
import '../Stylesheets/AddForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/AddForm.css';

export default class AddFormNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            descript: '',
            isValid: true,
            showAlert: false,

        }
        this.handleCancleModal = this.handleCancleModal.bind(this)

    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCancleModal = (e) => {
        e.preventDefault()
        this.setState({ name: '', price: '', descript: '', isValid: true, showAlert: false });
        this.props.closeModal();
    }

    handleSend = e => {
        e.preventDefault();
        let { name, price, descript } = this.state;
        if (!name || !price || !descript) this.setState({ isValid: false, showAlert: true });

        else {
            this.setState({ name: '', price: '', descript: '', isValid: true, showAlert: false });
            this.props.sendData({ name, price, descript });
            this.props.closeModal();
        }
    };

    render() {
        let { show } = this.props
        return (
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                {this.state.showAlert && (
                    <div className="alert alert-danger" role="alert">
                        Sory Data Not Null
                    </div>
                )}

                <Modal.Header>
                    <Modal.Title>
                        Tambah Widget
                </Modal.Title>
                    <Button 
                    style={{
                        backgroundColor: "transparent",
                        backgroundRepeat: 'no-repeat',
                        border: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                        outline: "none"
                    }}
                    onClick={this.handleCancleModal} >
                    <FontAwesomeIcon icon={faTimes} style={{ color:'black' }} />
                    </Button>

                </Modal.Header>
                <Modal.Body>
                    <form id="addTestimonial" onSubmit={this.handleSend}>
                        <div className="form-group" >
                            <input type="text" name="name" className="form-control" placeholder="Name" style={{ backgroundColor: "#f5f7f6" }} value={this.state.name} onChange={this.handleInputChange} />
                            <br />
                            <input type="text" name="price" className="form-control" placeholder="Price" style={{ backgroundColor: "#f5f7f6" }} value={this.state.price} onChange={this.handleInputChange} />
                            <br />
                            <input type="text" name="descript" className="form-control" placeholder="Description" style={{ backgroundColor: "#f5f7f6" }} value={this.state.descript} onChange={this.handleInputChange} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#f5f7f6" }}>
                    <Button style={{
                        backgroundColor: "transparent",
                        backgroundRepeat: 'no-repeat',
                        border: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                        outline: "none"
                    }} onClick={this.handleCancleModal}>
                        <div style={{ color: "black" }}>Batal</div>
                    </Button>

                    <Button form="addTestimonial" type="submit" style={{ width: "130px" }} >Tambah</Button>
                </Modal.Footer>
            </Modal >
        )
    }
}