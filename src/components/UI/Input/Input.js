import React from 'react';
import './Input.css'
;
function Input(props) {
    let inputElement = null;
    let inputClasses= ['InputElement']

    if (props.invalid && props.shouldValidate && props.touched)  {
        inputClasses.push('Invalid')
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className="InputElement" {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = ( <select className="InputElement" value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.key} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>)
            break;
        default:
            inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }

    return (
        <div className="Input">
            <label className="Label" >{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;