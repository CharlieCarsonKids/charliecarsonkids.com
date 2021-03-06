/**
 *
 * Hero
 *
 * Molecule
 */

import Title from 'atoms/Title';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const StyledJumbotron = styled(({ imageSrc, ...props }) => (
  <Jumbotron {...props} />
))`
  background: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  min-height: 1143px;
`;

const HeroTitle = styled(Title)`
  text-shadow: 2px 2px 4px rgba(150, 150, 150, 1);
`;

export const Hero = ({ imageSrc, text, buttonText, onButtonClick }) => (
  <StyledJumbotron className="hero" imageSrc={imageSrc}>
    <div>
      <Row className="h-100">
        <Col xs={6} className="pb-3 my-auto">
          <HeroTitle className="mb-0 font-weight-bold" color="#fefefe">
            {text.toUpperCase()}
          </HeroTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="py-3">
          {buttonText && (
            <Button onClick={onButtonClick} size="lg" variant="outline-light">
              {buttonText}
            </Button>
          )}
        </Col>
      </Row>
    </div>
  </StyledJumbotron>
);

Hero.defaultProps = {
  buttonText: '',
  onButtonClick: () => {},
  text: '',
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Hero;
