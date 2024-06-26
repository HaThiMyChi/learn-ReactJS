import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import InputField from '../../../../components/form-control/InputField';

import InputField from "components/form-control/InputField";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PasswordField from "components/form-control/PasswordField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    // spacing 2 don vi la 16px (tuong ung voi 1 spacing la 8px)
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position:'relative',
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  process: {
    position:'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0
  }
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your email.").email('Please enter a valid email'),
    password: yup
      .string()
      .required("Please enter your password."),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });


  const onHandleSubmit = async(values) => {

    const {onSubmit} = props;

    if (onSubmit) {
      await onSubmit(values);
    }

    form.reset();
  };


  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(onHandleSubmit)} className={classes.form}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
  
        <Button disabled={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
