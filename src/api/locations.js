import client from 'resources/client';

export const getLocations = () => client.get('/locations');
