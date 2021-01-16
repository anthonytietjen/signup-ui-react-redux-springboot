

import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store'

test('Make sure provider and router are working together', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Doesn't matter which element, just make sure one of the elements from the landing page shows up
  // If it can't even find the h1 text, then something has gone critically wrong
  const h1Element = screen.getByText('Welcome');
  expect(h1Element).toBeInTheDocument
})
