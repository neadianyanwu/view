import React from 'react'
import { IconConfig } from '../types'
const FocusCameraPlusAdd: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg
            width={`${size || 24}`}
            height={`${size || 24}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 9V5C21 3.89543 20.1046 3 19 3H15M21 15V19C21 20.1046 20.1046 21 19 21H15M3 15V19C3 20.1046 3.89543 21 5 21H9M3 9V5C3 3.89543 3.89543 3 5 3H9M12 9V12M12 12V15M12 12H9M12 12H15"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default FocusCameraPlusAdd
