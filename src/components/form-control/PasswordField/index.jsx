import { TextField } from "@material-ui/core";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import { useState } from "react";
import { Controller } from "react-hook-form";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
console.log(props);
  const { errors } = form;
  // const hasError = errors[name];
  

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller 
            name={name}
            control={form.control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <OutlinedInput
                id={name}
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
              />
            )}
            
            // labelWidth={70}
            // disabled={disabled}
            // error={!!hasError}
            // helperText={errors[name]?.mesasge}
        />
        {/* <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText> */}
      </FormControl>
    </>
  );
}

export default PasswordField;
