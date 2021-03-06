/**
 *
 * Footer
 *
 * Organism
 */

import { useQuery } from '@apollo/react-hooks';
import { GetNavigationMenus } from 'api/queries/menus.graphql';
import Text from 'atoms/Text';
import SocialBar from 'organisms/SocialBar';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Footer = () => {
  const { data } = useQuery(GetNavigationMenus);
  return (
    <S.Wrapper className="p-3 footer" fluid>
      <Row className="justify-content-center">
        <Col xs={9}>
          <Row className="justify-content-center align-items-top footer py-4">
            {data?.shop.navigation.secondary.items.map(
              ({ id, name, children }) => (
                <Col xs={2} key={id}>
                  <div className="d-flex justify-content-center footer--item">
                    <S.FooterList key={id}>
                      <Text variant="h6">{name}</Text>
                      {children.map(c => (
                        <li key={c.id}>
                          <Link className="text-sm" to={c.url || '/contact'}>
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </S.FooterList>
                  </div>
                </Col>
              ),
            )}
          </Row>
          <Row className="align-items-center py-3">
            <Col>
              <S.FooterText>Legal Stuff</S.FooterText>
            </Col>
            <Col>
              <SocialBar containerClass="justify-content-center" />
            </Col>
            <Col>
              <S.FooterText className="text-right">
                &copy;2020 CharlieCarsonKids
              </S.FooterText>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
