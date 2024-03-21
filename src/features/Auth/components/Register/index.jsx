import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';


Register.propTypes = {
    closeDialog: PropTypes.func
    
};


function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {

        try {
            // auto set username = email, xem lai file api
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
      
            // close dialog
            const {closeDialog} = props
            if(closeDialog) {
                closeDialog();
            }

            enqueueSnackbar('Successfully register!!!!!', { variant: 'success' });
        } catch (error) {
            console.log("Failed to register", error)
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;