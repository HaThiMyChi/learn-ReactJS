import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import {Controller } from "react-hook-form";

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool,
};

function InputField(props) {
    console.log('run here')
    const {form, name, label, disabled} = props;
    const { formState} = form;
    const hasError = formState.errors[`${name}`];
    console.log('dasdsd',formState.errors[`${name}`])
    return (
        <Controller 
            name={name}
            control={form.control}

            // render={({ field: { onChange, onBlur, value, ref, name } }) => (
            //     <TextField 
            //         margin="normal"
            //         variant="outlined"
            //         fullWidth
            //         label={label}
            //         onBlur={onBlur}
            //         value={value}
            //         disabled={disabled}
            //         // error={!!hasError}
            //         helperText={formState.errors[`${name}`]?.message}
            //     />
            // )}
            render={({ field }) => <TextField {...field}  
                label={label} variant="outlined" margin='normal' fullWidth
                error={!!hasError}
                helperText={formState.errors[`${name}`]?.message}
                />
            }
        
        />
    );
}

export default InputField;