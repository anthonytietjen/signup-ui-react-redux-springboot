
import { render, screen } from '@testing-library/react';
import { NewAccountView } from './NewAccountView';

test('renders the page in initial state', () => {
  render(
    <NewAccountView
      isSubmitting={false}
    />
  );

  // Submit button should be enabled
  const submitElement = screen.queryByTestId('submit');
  expect(submitElement).not.toBeDisabled();

  // Loading message should not be visible
  const loadingElement = screen.queryByTestId('loading');
  expect(loadingElement).toBeNull();
})

test('renders the page in "submitted form" state', () => {
  render(
    <NewAccountView
      isSubmitting={true}
    />
  );

  // Submit button should be disabled
  const submitElement = screen.queryByTestId('submit');
  expect(submitElement).toBeDisabled();

  // Loading message should be visible
  const loadingElement = screen.queryByTestId('loading');
  expect(loadingElement).toBeInTheDocument();
})