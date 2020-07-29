import React from 'react'

function FormField({placeHolder ,label, type, name, value, onChange}) {
    return (<div>
        <input
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