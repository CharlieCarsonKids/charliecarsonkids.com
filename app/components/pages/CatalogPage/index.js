/**
 *
 * CatalogPage
 *
 * Pages
 */

import { useQuery } from '@apollo/react-hooks';
import { GetCategoryProducts } from 'api/queries/category.graphql';
import PlainLink from 'atoms/PlainLink';
import Title from 'atoms/Title';
import ProductCard from 'molecules/ProductCard';
import React from 'react';
import Col from 'react-bootstrap/Col';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom';

const CatalogPage = () => {
  const {
    state: { categoryId },
  } = useLocation();
  const { data } = useQuery(GetCategoryProducts, {
    variables: {
      id: categoryId,
    },
  });
  return (
    <Container>
      <Title size={5} className="text-center h2 font-weight-normal mb-3">
        {data?.category.name}
      </Title>
      <Row className="my-4">
        {data?.category.products?.edges.map(({ node }) => (
          <Col xs={3} key={node.id}>
            <PlainLink
              to={{
                pathname: `/product/${node.slug}`,
                state: {
                  productId: node.id,
                },
              }}
            >
              <ProductCard
                imageSrc={node.thumbnail2x.url}
                name={node.name}
                price={node.pricing.priceRange.start.net.amount}
                category={node.category.name}
              />
            </PlainLink>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CatalogPage.propTypes = {};

export default CatalogPage;
