import { Box, Checkbox, FormControlLabel, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]} `,

    },

    list: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',

        '& > li': {
            margin: 0,
        }
    },
}))

function FilterByService({filters = {}, onChange}) {
    const classes = useStyles();

    const handleChange = (e) => {

        if (!onChange) return;

        // lay e.target luu tam vao 2 bien name, value
        const {name, checked} = e.target;

        onChange({ [name]: checked});
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">
               DỊCH VỤ
            </Typography>
           
           <ul className={classes.list}>
                {[
                    {value: 'isPromotion', label: 'Có khuyến mãi' },
                    {value: 'isFreeShip', label: 'Vận chuyển miễn phí'},
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={Boolean(filters[service.value])}
                                onChange={handleChange}
                                name={service.value}
                                color="primary"
                            />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
           </ul>
        </Box>
    );
}

export default FilterByService;