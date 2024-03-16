import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';


Login.propTypes = {
    closeDialog: PropTypes.func
    
};


function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        console.log('Form submit: ', values)
        

        try {

            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('new user', user);
            
            // close dialog
            const {closeDialog} = props
            if(closeDialog) {
                closeDialog();
            }

            // enqueueSnackbar('Successfully register!!!!!', { variant: 'success' });
        } catch (error) {
            console.log("Failed to login", error)
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;