export const types = Object.freeze({
  CREATE_LOCATION: 'CREATE_LOCATION',
  DELETE_LOCATION: 'DELETE_LOCATION',
  SET_LOCATIONS: 'SET_LOCATIONS',
});

const mockData = [
  {
    name: 'Location 12',
    id: 'id-1',
    country: 'Ukraine',
    city: 'Kyiv',
    state: 'Kyiv region',
    address: 'Shevchenko street 1',
  },
  {
    name: 'Location 2',
    id: 'id-2',
    country: 'Ireland',
    city: 'Dublin',
    state: 'Dublin province',
    address: 'Shevchenko street 2',
  },
  {
    name: 'Location 3',
    id: 'id-3',
    country: 'Czechia',
    city: 'Prague',
    state: 'Prague region',
    address: 'Shevchenko street 3',
  },
  {
    name: 'Location 4',
    id: 'id-4',
    country: 'Ukraine',
    city: 'Kyiv',
    state: 'Kyiv region',
    address: 'Shevchenko street 1',
  },
  {
    name: 'Location 5',
    id: 'id-5',
    country: 'Ireland',
    city: 'Dublin',
    state: 'Dublin province',
    address: 'Shevchenko street 2',
  },
  {
    name: 'Location 6',
    id: 'id-6',
    country: 'Czechia',
    city: 'Prague',
    state: 'Prague region',
    address: 'Shevchenko street 3',
  },
];

const initialState = {
  locations: mockData || [],
};

export default initialState;
