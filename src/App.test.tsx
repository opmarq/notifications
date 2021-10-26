import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';

test('display a loader', () => {
  render(<App />);
  const loaderElement = screen.getByTitle(/loader/i);
  expect(loaderElement).toBeDefined()
});

test('display 20 elements', async () => {
  render(<App />);
  await waitFor(() => {
    const elements = screen.getAllByTitle(/notification-item/i)
    expect(elements.length).toBe(20)
  })
});

test('clear all elements', async () => {
  render(<App />);
  const clearButton = screen.getByRole(/clear-all/);
  expect(clearButton).toBeDefined();
  fireEvent.click(clearButton);
  await waitFor(() => {
    const element = screen.queryByText(/No notifications 👐/i)
    expect(element).toBeDefined()

  })
});
