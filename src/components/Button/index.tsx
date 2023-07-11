// import React from 'react'

type buttonProps = {
    type: "primary" | "danger";
    shape?: "round" | "circle" | "default";
    loading?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () =>void
}


const Button = ({ icon, shape, loading, children, type, onClick }: buttonProps) => {

    return (
        <button className={`border py-2 px-4 mr-2
        ${type == "primary" && "text-white bg-blue-500"}
        ${type == "danger" && "text-white bg-red-500"}

        ${shape == "default" && "rounded-md"}
        ${shape === "round" && "rounded-full"}
        ${shape === "circle" && "rounded-full w-10 h-10"}
        `}
        onClick={onClick}
        >
            {icon && icon}
            {children}

        </button>
    )
}

export default Button