import React from 'react'
import './index.css';
function FormField({placeHolder ,label, type, name, value, onChange}) {
    return (<div>
        <input className="estilo"
                placeholder={placeHolder}
                label={label}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
    </div>)
}

export default FormField