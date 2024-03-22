import { Box, makeStyles } from '@material-ui/core';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import ProductAditional from './ProductAditional';
import ProductReviews from './ProductReviews';
import PropTypes from 'prop-types';

ProductMenu.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    listStyleType: 'none',

    '& > li': {
      padding: theme.spacing(2, 4),
    },

    '& > li > a': {
      color: theme.palette.grey[700],
      textDecoration: 'none',
    },

    '& > li > a:active': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
  },
}));

function ProductMenu({product = {}, props}) {

  const location = useLocation();
  const classes = useStyles();

  console.log('param product', product);

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <NavLink
            exact
            to={`${location.pathname}`}
            className="nav__link"
            activeClassName="nav__link--active">
            Description
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          to={`${location.pathname}/additional`}
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Additional Information
        </NavLink>
      </li>

      <li>
        <NavLink
              exact
              to={`${location.pathname}/reviews`}
              className="nav__link"
              activeClassName="nav__link--active"
        >
            Reviews
        </NavLink>
      </li>

        <Routes>
            <Route path={`/${location.pathname}`} element={<ProductDescription product={product} />} />
            <Route path={`${location.pathname}/additional`} element={<ProductAditional />} />
            <Route path={`${location.pathname}/reviews`} element={<ProductReviews />} />
        </Routes>
    </Box>
  );
}

export default ProductMenu;