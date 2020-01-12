import React from 'react';
import '../Stylesheets/AddForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Modal, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/AddForm.css';

function MyVerticallyCenteredModal(props) {

    
    
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tambah Widget
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group" >
                        <input type="text" name="name" className="form-control" id="name" placeholder="Name" style={{ backgroundColor: "#f5f7f6" }} />
                        <br />
                        <input type="text" name="name" className="form-control" id="name" placeholder="Price" style={{ backgroundColor: "#f5f7f6" }} />
                        <br />
                        <input type="text" name="name" className="form-control" id="name" placeholder="Description" style={{ backgroundColor: "#f5f7f6" }} />
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#f5f7f6" }}>
                    <Button style={{
                        backgroundColor: "transparent",
                        backgroundRepeat: 'no-repeat',
                        border: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                        outline: "none"
                    }} onClick={props.onHide}>
                        <div style={{ color: "black" }}>Batal</div>
                    </Button>

                    <Button onClick={props.onHide} style={{ width: "130px" }} >Tambah</Button>
                </Modal.Footer>
            </Modal >
        )

    


}

export default function AddForm() {
    
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: "30" }} />
                <b>Tambah Widget</b>
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>


    );
}

