import React, {ReactNode} from "react"

interface ModalProps {
    isOpen: boolean
    toggle: () => void
    children: ReactNode
}

export default function Modal(props: ModalProps) {
    return (
        <>
            {props.isOpen && (
                <div
                    className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-gray-500/80 transition-all ease-in-out duration-300"
                    onClick={props.toggle}
                >
                    <div
                        className="w-1/2 h-1/3 bg-white rounded"
                        onClick={e => e.stopPropagation()}
                    >
                        {props.children}
                    </div>
                </div>
            )}
        </>
    )
}