import { Box, Container, Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import ProductApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';


ListPage.propTypes = {
    
};

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: '250px'
    },

    right: {
        flex: ' 1 1 auto'
    },

    paddingBox: {
        paddingTop: '32px'
    }
}));

function ListPage(props) {
    const classes = useStyles();
    const [productsList, setProductsList] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async() => {
            try {
                const {data} = await ProductApi.getAll({_page:1, _limit: 10});
                setProductsList(data);
                console.log('response', data);
            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <Box className={classes.paddingBox}>
                <Container>
                    <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left column</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductSkeletonList/> : <Typography>Product list</Typography>}
                        </Paper>
                        
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;