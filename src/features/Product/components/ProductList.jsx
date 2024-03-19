import { Box, Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Product from '../components/Product';

ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: []
}

function ProductList({data}) {

    return (
        <Box>
            <Grid container>
                {data.map(product => (
                    <Grid  item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Box sx={{backgroundColor: 'primary.dark'}}>
                            <Product product={product} />
                        </Box>
                    </Grid>
                ) )}
   
                   
                    
 
            </Grid>
        </Box>
    );
}

export default ProductList;