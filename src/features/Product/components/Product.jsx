import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {

    console.log('product 11111', product)
    return (
        <Box padding={1}> 
            <Skeleton variant="rect" width='100%' height={118} />
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    { new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                
                {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
            </Typography >
        </Box>
    );
}

export default Product;