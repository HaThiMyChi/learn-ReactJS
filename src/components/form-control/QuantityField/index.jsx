import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";


const useStyles = makeStyles(theme => ({
  root: {},

  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItem: 'center',
    maxWidth: '200px'
  }
}));

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { formState, setValue} = form;
  console.log('form value', form)
  const hasError = formState.errors[`${name}`];

  return (
    <>
      <FormControl fullWidth margin="normal" variant="outlined" size="small">
        <Typography>{label}</Typography>

        <Controller 
            name={name}
            control={form.control}
            render={({ field: { onChange, onBlur, value, ref } }) => {
              console.log('value ....', value)
              return (
                <Box className={classes.box}>
                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                  <RemoveCircleOutline />
                </IconButton>
              
                <OutlinedInput
                  id={name}
                  type="number"
                  disabled={disabled}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur} 
                />

                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                  <AddCircleOutline/>
                </IconButton>
              </Box>
              )
            }
          }
        />
        <FormHelperText error={!!hasError}>{formState.errors[`${name}`]?.message}</FormHelperText>
      </FormControl>
    </>
  );
}

export default QuantityField;
