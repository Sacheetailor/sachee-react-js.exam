import React from 'react';
import { Spinner, Container } from 'bootstrap';

const Loader = () => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
    <Spinner animation="border" variant="danger" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading Recipes...</span>
    </Spinner>
  </Container>
);

export default Loader;