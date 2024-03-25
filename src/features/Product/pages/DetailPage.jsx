import { Box, Container, Grid, LinearProgress, Paper, makeStyles } from '@material-ui/core';
import { addToCart } from 'features/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '32px',
        paddingBottom: theme.spacing(3)
    },

    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    right: {
        flex: ' 1 1 0',
        padding: theme.spacing(1.5)
    },

    paddingBox: {
        paddingTop: '32px'
    },

    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    }
}));

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    const classes = useStyles();
    const params = useParams();
    const location = useLocation(); 
    // dispatch 1 action len product
    const  dispatch = useDispatch();

    const productId = params.productId;

    const {product, loading} = useProductDetail(productId);

    if (loading) {
        // TODO: Make this beautiful
        return <Box className={classes.loading}>
            {/* Loading */} <LinearProgress/>

        </Box>
    }

    const handleAddToCartSubmit = (formValues) => {
        console.log('Form submit', formValues);
        // CAI PAYLOAD LA OBJECT MINH TRUYEN VAO
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValues.quantity
        });
        console.log('dispatch action', action)
        dispatch(action);
    }


    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm  onSubmit={handleAddToCartSubmit}/>
                        </Grid>
                    </Grid>
                </Paper>
                
                <ProductMenu product={product}/>
            
            </Container>
            
        </Box>
    );
}

export default DetailPage;