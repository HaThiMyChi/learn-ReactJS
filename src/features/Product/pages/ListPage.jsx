import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductApi from 'api/productApi';
import { useEffect } from 'react';


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

    useEffect(() => {
        (async() => {
            const response = await ProductApi.getAll({_page:1, _limit: 10});
            console.log('response', response);
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
                        <Paper elevation={0}>Right Column</Paper>
                        
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;