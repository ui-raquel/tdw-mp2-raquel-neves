import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FilmCard from './FilmCard';

test('renders film title and director', () => {
  const film = {
    id: '1',
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    release_date: '2001',
    image: 'https://example.com/spirited-away.jpg'
  };
  
  render(
    <MemoryRouter>
      <FilmCard film={film} />
    </MemoryRouter>
  );
  
  expect(screen.getByText('Spirited Away')).toBeInTheDocument();
  expect(screen.getByText(/Hayao Miyazaki/)).toBeInTheDocument();
});