import { render, screen } from '@testing-library/react';
import { LandingPageView } from './LandingPageView';

test('renders the landing page in initial state', () => {
  render(
    <LandingPageView
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

test('renders the landing page in "submitted form" state', () => {
  render(
    <LandingPageView
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