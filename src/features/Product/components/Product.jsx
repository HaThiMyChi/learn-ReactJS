import { Box, Typography, makeStyles} from '@material-ui/core';
import { STATIC_HOST, THUMBNAI_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {},

    img: {
        display: 'flex',
        margin: '0 3px'
    },
}));

function Product({product}) {
    const classes = useStyles();
    const thumbnaiUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAI_PLACEHOLDER

    return (
        <Box padding={1}> 
            <Box padding={1} className={classes.img}>
                <img src={thumbnaiUrl} alt={product.name} width='100%'></img>
            </Box>
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