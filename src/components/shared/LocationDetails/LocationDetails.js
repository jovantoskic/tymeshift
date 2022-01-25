import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ViewsIcon } from 'assets/icons/Views.svg';
import { ReactComponent as TimezoneIcon } from 'assets/icons/Timezone.svg';
import { ReactComponent as UsersIcon } from 'assets/icons/Users.svg';

import { dateFormatter } from 'utils/helpers';

import './LocationDetails.scss';

const LocationsDetails = ({ users, time, views }) => {
  return (
    <main className="location-details-container">
      <div className="users">
        <UsersIcon />
        <span>{users} Users</span>
      </div>
      <div className="time">
        <TimezoneIcon />
        <span>{dateFormatter(time)}</span>
      </div>
      <div className="views">
        <ViewsIcon />
        <span>{`${views} views`}</span>
      </div>
    </main>
  );
};

LocationsDetails.propTypes = {
  users: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default LocationsDetails;
