import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RestaurantList from '../components/RestaurantList';

const mockStore = configureStore([]);
const store = mockStore({
  restaurants: {
    items: [],
    status: 'idle',
    error: null,
  },
});

test('renders restaurant list', () => {
  render(
    <Provider store={store}>
      <RestaurantList />
    </Provider>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
