import { Link, useParams, useLocation} from 'react-router-dom';
// import { useMatch } from "react-router-dom";
import {Box} from '@material-ui/core'
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';


ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const currentPath = useLocation().pathname;
    // const match = useMatch('/products');

    const { productId} = useParams()

    return (
        <Box>
            Product feature
            <Routes>
                <Route path='/' element={<ListPage />}/>
                {/* <Route path={`/:productId`} element={<DetailPage />}/> */}
            </Routes>
            {/* <Link to={`/products/${productId}`}>Product A</Link> */}
            {/* <ListPage /> */}
        </Box>
    );
}

export default ProductFeature;