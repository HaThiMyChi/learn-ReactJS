import { Box, Typography, makeStyles} from '@material-ui/core';
import { STATIC_HOST, THUMBNAI_PLACEHOLDER } from 'constants/index';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';

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
    const navigate = useNavigate ();

    const handleClick = () => {
        // Navigate to detail page: /products/:productID
        navigate(`/products/${product.id}`);
    };


    const thumbnaiUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAI_PLACEHOLDER

    return (
        <Box padding={1} onClick={handleClick}> 
            <Box padding={1} className={classes.img}>
                <img src={thumbnaiUrl} alt={product.name} width='100%'></img>
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                </Box>
                
                {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
            </Typography >
        </Box>
    );
}

export default Product;