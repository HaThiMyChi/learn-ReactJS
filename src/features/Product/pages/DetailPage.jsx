import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams  } from "react-router-dom";
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';

const useStyles = makeStyles(theme => ({
    root: {},

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
}));

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    const classes = useStyles();
    const params = useParams();
    const productId = params.productId;

    const {product, loading} = useProductDetail(productId);

    if (loading) {
        // TODO: Make this beautiful
        return <Box>
            Loading
        </Box>
    }

    return (
        <Box className={classes.paddingBox}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            
        </Box>
    );
}

export default DetailPage;