import VideoCard from './VideoCard.component.jsx';
import { render, screen } from '@testing-library/react';
import React from 'react';


test('renders a card with title and image', () => {
    render(<VideoCard title="Wizeline" img="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo" />);
 
  
    const title = screen.getByText(/Wizeline/i);
   
  
    expect(title).toBeInTheDocument();
  });