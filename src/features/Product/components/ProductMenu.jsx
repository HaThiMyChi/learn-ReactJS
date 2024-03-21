import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { Link, NavLink, useLocation} from 'react-router-dom';

ProductMenu.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItem: 'center',
        padding: 0,
        listStyleType: 'none',

        '& > li' : {
            padding: theme.spacing(2, 4)
        },

        '& > li > a': {
            color: theme.palette.grey[700],
        },

        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    }
}))

function ProductMenu(props) {
    const url = useLocation();
    const classes = useStyles();

    console.log('param menu', url)

    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link component={NavLink} to={url.pathname} exact>Description</Link>
            </li>

            <li>
                <Link component={NavLink} to={`${url.pathname}/additional`} exact>Additional Information</Link>
            </li>

            <li>
                <Link component={NavLink} to={`${url.pathname}/reviews`} exact>Reviews</Link>
            </li>
        </Box>
    );
}

export default ProductMenu;