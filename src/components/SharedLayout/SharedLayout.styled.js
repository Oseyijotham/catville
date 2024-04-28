import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #f0d1a5;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Frame = styled.div`
  border-radius: 50%;
  background-color: #f0d1a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid rgb(114, 17, 17);
`;

export const Icon = styled.svg`
  fill: rgb(114, 17, 17);
`;

export const IconLabel = styled.span`
  font-family: 'Sansita Swashed';
  font-size: 20px;
  color: rgb(114, 17, 17);

  &::first-letter {
    font-size: 30px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  margin-bottom: 16px;
  margin-top: 16px;
  border: 5px solid rgb(114, 17, 17);
  background-color: rgb(216, 155, 75);
  border-radius: 4px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.3));

  > nav {
    display: flex;
    font-family: 'Comic Sans MS';
    padding: 10px;
    gap:5px;
  }
`;

export const Logo = styled.div`
  margin-left: 10px;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgb(114, 17, 17);
  font-weight: 700;
  background-color: #f0d1a5;
  border: 1px solid rgb(114, 17, 17);

  &.active {
    color: white;
    background-color: rgb(114, 17, 17);
  }
`;

export const Symbol = styled(NavLink)`
  text-decoration: none;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    
  }
`;
