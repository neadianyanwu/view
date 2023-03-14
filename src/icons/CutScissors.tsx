import React from 'react'
import { IconConfig } from '../types'
const CutScissors: React.FC<IconConfig> = ({
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
                d="M19.7224 8.69623C21.1573 7.86781 21.6489 6.03304 20.8205 4.59816C19.9921 3.16328 18.1573 2.67165 16.7224 3.50008C15.2876 4.32851 14.7959 6.16328 15.6244 7.59816C16.4528 9.03303 18.2876 9.52466 19.7224 8.69623ZM19.7224 8.69623L3 17.9999M19.7225 15.5672C21.1573 16.3956 21.649 18.2304 20.8205 19.6652C19.9921 21.1001 18.1573 21.5917 16.7225 20.7633C15.2876 19.9349 14.796 18.1001 15.6244 16.6652C16.4528 15.2304 18.2876 14.7387 19.7225 15.5672ZM19.7225 15.5672L3.00001 6.2635"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CutScissors
