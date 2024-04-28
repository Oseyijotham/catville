import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  
  Frame,
  IconLabel,
  Symbol
} from './SharedLayout.styled';

import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
                alt="Cat"
                width="50px"
              />
            </Frame>
            <IconLabel>Catville</IconLabel>
          </Logo>
        </Symbol>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/cinema">Cinema</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
