import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import { Pagination } from '@material-ui/lab';

ListPage.propTypes = {
    
};

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: '250px'
    },

    right: {
        flex: ' 1 1 0'
    },

    paddingBox: {
        paddingTop: '32px'
    }
}));

function ListPage(props) {
    const classes = useStyles();
    const [productsList, setProductsList] = useState();
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1, 
        _limit: 10
    })


    useEffect(() => {
        (async() => {
            try {
                const {data, pagination} = await ProductApi.getAll(filters);
                
                setProductsList(data);
                setPagination(pagination);
                console.log('data api 111', data, pagination);
            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters(prevFilters => (
            {
                // giu lai nhung filter truoc do
                ...prevFilters,
                // doi cai page sang page moi
                _page: page
            }
        ))
    }
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
                                {loading ? <ProductSkeletonList/> : <ProductList data={productsList} />}

                                <Pagination color="primary" 
                                    count={Math.ceil(pagination.total / pagination.limit)} 
                                    page={pagination.page} 
                                    onChange={handlePageChange}>
                                </Pagination>
                            </Paper>
                            
                            
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;