/**
 *
 * ProductCard Styled Components
 *
 * Molecule
 */

import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Wrapper = styled(Card)`
  border: 0;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  position: relative;
`;

export const Img = styled(Card.Img)`
  height: 100%;
  object-fit: cover;
`;

export const Title = styled(Card.Title)`
  font-family: 'Poppins', 'GT Walsheim Pro', Georgia, Times, 'Times New Roman',
    serif;
`;

export const Subtitle = styled(Card.Subtitle)`
  font-size: 0.75rem;
  font-weight: 600;
`;

export const DetailsContainer = styled.div``;

export const DetailsButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%) scale(0.9);
  opacity: 0;
  transition: all 300ms ease;
  border: 1px solid white;

  ${DetailsContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, -125%) scale(1);
  }
`;
