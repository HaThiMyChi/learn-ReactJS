import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalCountSelector } from './selectors';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal = useSelector(cartTotalCountSelector);

    return (
        <div>
            Cart feature {cartTotal}
        </div>
    );
}

export default CartFeature;