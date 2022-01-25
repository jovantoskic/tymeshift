import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CloseIcon } from 'assets/icons/Close.svg';

import LocationDetails from 'components/shared/LocationDetails';

import './Modal.scss';

const Modal = ({ openModal, users, time, description, views }) => {
  return (
    <div onClick={() => openModal(false)} className="modal-container">
      <div className="modal-inner-container">
        <header className="modal-header">
          <h3 className="modal-headline">Acme HQ</h3>
          <CloseIcon
            className="modal-close-icon"
            onClick={() => openModal(false)}
          />
        </header>
        <main className="modal-content">
          <LocationDetails users={users} time={time} views={views} />
          <div className="modal-description">
            <h4 className="desc-headline">Description</h4>
            <p className="description">{description}</p>
          </div>
        </main>
        <footer className="footer">
          <button onClick={() => openModal(false)} className="button">
            Done
          </button>
        </footer>
      </div>
    </div>
  );
};

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  users: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Modal;
