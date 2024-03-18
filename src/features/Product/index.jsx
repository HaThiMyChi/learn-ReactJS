import { Link, useParams } from 'react-router-dom';
// import { useMatch } from "react-router-dom";
import {Box} from '@material-ui/core'


ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    // const match = useMatch('/products');
    // console.log('match', match)
    const { productId} = useParams()
    console.log("123", productId)
    return (
        <Box>
            {/* Product feature
            <Routes>
                <Route path='/products' element={<ListPage />}/>
            </Routes> */}
            <Link to={`/products/${productId}`}>Product A</Link>
            {/* <ListPage /> */}
        </Box>
    );
}

export default ProductFeature;