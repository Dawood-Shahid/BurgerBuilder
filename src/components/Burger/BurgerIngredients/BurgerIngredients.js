import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredients.css'

class BurgerIngredients extends Component {
    render () {
        let ingredient = null;

        switch(this.props.type) {
            case ('BurgerTop') :
                ingredient = (
                    <div className='BurgerTop'>
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                    </div>
                );
                break;
            case ('BurgerBottom') :
                ingredient = <div className='BurgerBottom'></div>;
                break;
            case ('Meat') :
                ingredient = <div className='Meat'></div>;
                break;
            case ('Cheese') :
                ingredient = <div className='Cheese'></div>;
                break;
            case ('Salad') :
                ingredient = <div className='Salad'></div>;
                break;
            case ('Bacon') :
                ingredient = <div className='Bacon'></div>;
                break;
            
            default :
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredients;