import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 30px',
  },
});


CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const handleIncreaseClick = () => {
        const action = increase(); // action creator (no tra ve 1 object action)
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease(); // action creator (no tra ve 1 object action)
        dispatch(action); // cap nhat state
    }
    
    return (
        <div>
            Counter Feature: {counter}

            <div>
                <Button className={classes.root} onClick={handleIncreaseClick}>Increase</Button>
                <Button className={classes.root} onClick={handleDecreaseClick}>Decrease</Button>
            </div>
        </div>
    );
}

export default CounterFeature;