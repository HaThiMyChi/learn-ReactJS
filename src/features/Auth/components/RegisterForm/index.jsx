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
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import PasswordField from "components/form-control/PasswordField";

const useStyles = makeStyles((theme) => ({
    root: {
        // spacing 2 don vi la 16px (tuong ung voi 1 spacing la 8px)
        paddingTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main
    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign:'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();
    console.log(123)

    const schema = yup.object().shape({
        fullName: yup.string().required('Please enter your full name.'),
        password: yup.string().required('Please enter your password.').min(6, 'Please enter at least 6 characters')
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
        console.log(values)
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    }

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>

            <Typography component="h3" variant="h5" className={classes.title}>
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}  className={classes.form}>
                <InputField  name="fullName" label="Full Name" form={form} />
                <InputField  name="email" label="Email" form={form} />
                <PasswordField  name="password" label="Password" form={form} />
                <PasswordField  name="retypePassword" label="Retype Password" form={form} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}

                >
                    Create an account
                </Button>
            </form>
        </div>
        
    );
}

export default RegisterForm;