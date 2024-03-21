import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAI_PLACEHOLDER } from 'constants/index';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product}) {
    const thumbnaiUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAI_PLACEHOLDER

    return (
        <Box>
            <img src={thumbnaiUrl} alt={product.name} width='100%' />
        </Box>
    );
}

export default ProductThumbnail;