import React from "react";
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="group field">
        <input 
            className="form-input"   
            onChange={handleChange}
            { ...otherProps }
        />
        {
            label ? 
                (<label
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                >
                    { 
                        label[0].toUpperCase() + label.slice(1)
                    }
                </label>)
                : null
        }
    </div>
)

export default FormInput;