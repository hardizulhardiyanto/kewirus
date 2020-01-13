import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/NavbarMenu.css';
import AddFormNew from './AddFormNew';

export default class NavbarMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.handleAddData = this.handleAddData.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    handleAddData() {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({
          showModal: false,
        //   activeTab: "testimonials",
        //   color: null,
        //   capacity: null,
        //   size: null,
        //   clicks: 0,
        //   show: false
        });
      };

    render() {

        return (

            <div className="container-fluid">
                <div className="shadow-sm p-1 mb-5 bg-white rounded">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">Kewirus - App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Button variant="primary"  className="mr-5 ml-auto" onClick={this.handleAddData} >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: "30" }}/>
                                <b>Tambah Widget</b>
                            </Button>

                            <AddFormNew
                                show = {this.state.showModal}
                                closeModal={this.closeModal}
                            />

                        </Navbar.Collapse>
                    </Navbar>
                </div>


            </div>


        )
    }
}