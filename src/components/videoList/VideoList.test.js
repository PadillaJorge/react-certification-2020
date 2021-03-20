import VideoList from './VideoList.component.jsx';
import { render, screen } from '@testing-library/react';
import React from 'react';


test('renders a title', () => {
    render(<VideoList />);
    const title = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
    expect(title).toBeInTheDocument();
  });