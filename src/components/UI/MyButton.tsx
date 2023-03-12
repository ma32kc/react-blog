import React from "react"

interface CustomButtonProps {
    onClick: () => void
    label: string
}

const CustomButton: React.FC<CustomButtonProps> =
    ({onClick, label}) => {
        return (
            <button onClick={onClick} className="inline-flex justify-center w-[150px] h-[45px] items-center bg-emerald-400 text-white px-4 py-2 rounded-md">{label}</button>
        );
    };

export default CustomButton