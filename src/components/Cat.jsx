import { useContext } from "react";
import StateContext from "../context";

const Cat = () => {
    const [value, dispatch] = useContext(StateContext);
    const { activity } = value;

    const handleClick = (type) => {
        dispatch({ type });
    }

    return (
        <>
            <p>This big ol' chONk of a kitty is {activity}</p>
            <button type='button' onClick={() => handleClick('ACTION_PLOT')}>Call Kitty Fat</button><button type='button' onClick={() => handleClick('ACTION_FORGIVE')}>Compliment Kitty</button>
        </>
    )
};

export default Cat;