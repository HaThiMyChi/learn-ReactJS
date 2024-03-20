import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/FilterViewer';

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
    },

    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '10px'
    }
}));

function ListPage(props) {
    const classes = useStyles();
    const [productsList, setProductsList] = useState();
    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1, 
        _limit: 9,
        _sort: 'salePrice:ASC',

    })


    useEffect(() => {
        (async() => {
            try {
                const {data, pagination} = await ProductApi.getAll(filters);
                
                setProductsList(data);
                setPagination(pagination);

            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }
            setLoading(false);
        })();
    }, [filters]);

    // Khi ma state filters thay doi thi trigger thay doi, no chay lai useEffect nay (goi lai api)

    const handlePageChange = (e, page) => {
        setFilters(prevFilters => (
            {
                // giu lai nhung tham so filter truoc do
                ...prevFilters,
                // doi cai page sang page moi
                _page: page
            }
        ))
    };

    const handleSortChange = (newValue) => {
        setFilters(prevFilters => (
            {
                // giu lai nhung tham so filter truoc do
                ...prevFilters,
                // khi ma co sort thay doi, thì mình đổi lại giá trị sort này = newValue mới
                _sort: newValue
            }
        ))
    };

    const handleFiltersChange = (newFilters) => {
        setFilters(prevFilters => (
            {
                // giu lai nhung tham so filter truoc do
                ...prevFilters,
                // Nhieu cai filters thay doi nen lay het newFilters luon (nó kết hợp với tất cả những giá trị filter mới mà thằng con nó bao lên)
                ...newFilters
            }
        ));
    };

    const setNewFilters = (newFilters) => {
        setFilters(newFilters);
    }

    return (
        <div>
            <Box className={classes.paddingBox}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item className={classes.left}>
                            <Paper elevation={0}>
                                <ProductFilters filters={filters} onChange={handleFiltersChange} />
                            </Paper>
                        </Grid>
                        <Grid item className={classes.right}>
                            
                            <Paper elevation={0}>
                                <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                                <FilterViewer filters={filters} onChange={setNewFilters} />

                                {loading ? <ProductSkeletonList length={9}/> : <ProductList data={productsList} />}

                                <Box className={classes.pagination}>
                                    <Pagination color="primary" 
                                        count={Math.ceil(pagination.total / pagination.limit)} 
                                        page={pagination.page} 
                                        onChange={handlePageChange}>
                                    </Pagination>
                                </Box>
                                
                            </Paper>
                            
                            
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;