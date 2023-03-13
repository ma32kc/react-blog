import React from "react"

interface CustomButtonProps {
    onClick: () => void
    label: string
    classes?: string
}

const CustomButton: React.FC<CustomButtonProps> =
    ({onClick, label, classes}) => {
        return (
            <button
                onClick={onClick}
                className={"inline-flex justify-center w-1/2 h-[45px] items-center bg-emerald-400 text-white px-4 py-2 rounded-md " + classes}
            >
                {label}
            </button>
        );
    };

export default CustomButton