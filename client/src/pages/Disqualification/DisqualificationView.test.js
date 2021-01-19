import { render, screen } from '@testing-library/react';
import { DisqualificationView } from './DisqualificationView';

test('renders the page with a message', () => {
  const message = "Lorum ipsum dolor sit amet";
  const phoneNumber = "1-555-555-5555";

  render(
    <DisqualificationView
      message={message}
      phoneNumber={phoneNumber}
    />
  );

  // Message should be displayed
  const messageElement = screen.queryByTestId('message');
  expect(messageElement).toHaveTextContent(message);

  // Phone number should be displayed
  const phoneNumberElement = screen.queryByTestId('phone_number');
  expect(phoneNumberElement).toHaveTextContent(phoneNumber)
})