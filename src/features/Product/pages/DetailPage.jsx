import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams, Routes, Route, useLocation , Outlet} from "react-router-dom";
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductDescription from '../components/ProductDescription';
import ProductAditional from '../components/ProductAditional';
import { LinearProgress } from '@material-ui/core';

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
    }

    console.log('hhhhhh',location.pathname)

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