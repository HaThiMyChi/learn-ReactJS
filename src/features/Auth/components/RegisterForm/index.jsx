import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import InputField from '../../../../components/form-control/InputField';

import InputField from 'components/form-control/InputField';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
    title: yup.string().required('Please enter title'),
    
  });
 

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        },

        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    }

    return (
        <div>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>

            <Typography component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField  name="fullName" label="Full Name" form={form} />
                <InputField  name="email" label="Email" form={form} />
                <InputField  name="password" label="Password" form={form} />
                <InputField  name="retypePassword" label="Retype Password" form={form} />
            </form>
        </div>
        
    );
}

export default RegisterForm;