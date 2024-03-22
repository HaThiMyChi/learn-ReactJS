import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

ProductDescription.propTypes = {
    product: PropTypes.object,
    
};

function ProductDescription({product}) {
    console.log('product.description', product )
    return (
        <Paper elevation = {0} style={{padding: '15px'}}>
            <div dangerouslySetInnerHTML={{__html: product.description}}></div>
        </Paper>
    );
}

export default ProductDescription;