import React, { useEffect } from 'react';
import { getLocations } from 'api/locations';
import useFetch from 'hooks/useApi';

import Card from 'components/shared/Card';
import Layout from 'components/shared/Layout';
import Loading from 'components/shared/Loading';

import './Locations.scss';

const Locations = () => {
  const locations = useFetch(getLocations);

  useEffect(() => {
    locations.request();
  }, []);

  const { data, loading } = locations;

  return !loading ? (
    <Layout>
      <section className="locations-container">
        {data &&
          data.map(location => (
            <Card
              key={location.id}
              users={location.userCount}
              time={location.createdAt}
              description={location.description}
            />
          ))}
      </section>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Locations;
