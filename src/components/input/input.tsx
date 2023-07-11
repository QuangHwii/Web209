// import React from 'react'

import React from "react"

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: React.ReactNode;
    size?: "small" | "text-sm";
    name?: string
}

const Input = ({ prefix, onChange, placeholder, name }: InputProps) => {
    return (
        <div
            className="flex items-center space-x-2 border border-green-500 p-2 w-full mr-2"

        >
            {prefix && prefix}
            <input
                className={`w-full outline-none`}
                onChange={onChange}
                type="text"
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}

export default Input