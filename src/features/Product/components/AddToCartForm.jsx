import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from 'components/form-control/QuantityField/index';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";


AddToCartForm.propTypes = {
    onSubmit:PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {
    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(1, "Minium value is 1").typeError('Please enter a number'),
    });
    
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },

        resolver: yupResolver(schema),
    });
    const {errors} = form
    useEffect(() => {
        console.log('value submit', errors)
    })

    const handleSubmit = async(values) => {
       
        if (onSubmit) {
            await onSubmit(values);
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={{width: '250px'}}
                >
                Add to cart
            </Button>
        </form>
    );
}

export default AddToCartForm;