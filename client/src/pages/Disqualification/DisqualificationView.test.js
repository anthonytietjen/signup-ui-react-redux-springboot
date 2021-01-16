import { render, screen } from '@testing-library/react';
import { DisqualificationView } from './DisqualificationView';

test('renders the page with a message', () => {
  const message = "Lorum ipsum dolor sit amet";

  render(
    <DisqualificationView
      message={message}
    />
  );

  // Message should be displayed
  const messageElement = screen.queryByTestId('message');
  expect(messageElement).toHaveTextContent(message);
})