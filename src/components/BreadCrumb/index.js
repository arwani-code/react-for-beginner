// import react from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './BreadCrumb.style';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
