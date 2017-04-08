import React, { Component, PropTypes } from 'react';

const ModalPerson = ({ title ,isOpenModal, toggle }) => {
    return(
      <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name:</label>
              <input type="email" className="form-control"  placeholder="Name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Age:</label>
              <input type="email" className="form-control"  placeholder="Age"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">City:</label>
              <input type="email" className="form-control"  placeholder="City"/>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.toggle}>Save</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalPerson;
