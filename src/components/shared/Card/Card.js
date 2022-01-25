import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as EditIcon } from 'assets/icons/Edit.svg';

import Modal from 'components/shared/Modal';
import LocationDetails from 'components/shared/LocationDetails';

import './Card.scss';

const Card = ({ users, time, description }) => {
  const [views, setViews] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalViews = () => {
    setIsModalOpen(true);
    setViews(views + 1);
  };

  return (
    <>
      <div onClick={handleModalViews} className="card-container">
        <span className="edit-icon-container">
          <EditIcon className="edit-icon" />
        </span>
        <h3 className="headline">Acme HQ</h3>
        <LocationDetails users={users} time={time} views={views} />
      </div>
      {isModalOpen && (
        <Modal
          openModal={setIsModalOpen}
          users={users}
          time={time}
          description={description}
          views={views}
        />
      )}
    </>
  );
};

Card.propTypes = {
  users: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
