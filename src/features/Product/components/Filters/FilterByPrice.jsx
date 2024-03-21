import { Box, TextField, Typography, makeStyles } from '@material-ui/core';
import { Button } from '../../../../../node_modules/@material-ui/core/index';
import PropTypes from 'prop-types';
import { useState } from 'react';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]} `,

    },

    range: {

        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    },
}))

function FilterByPrice({onChange}) {
    const classes = useStyles();

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleSubmit = () => {
        if (onChange) onChange(values);

        // Khi minh submit xong thi reset lai value
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    };

    const handleChange = (e) => {
        // lay e.target luu tam vao 2 bien name, value
        const {name, value} = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            // [e.target.name] : e.target.value
            [name]: value
        }));
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">
               CHỌN KHOẢNG GIÁ
            </Typography>
            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                    <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>

            <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;