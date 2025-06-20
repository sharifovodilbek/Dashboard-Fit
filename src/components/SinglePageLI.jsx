import React from 'react'

const SinglePageLI = ({label, value}) => {
    return (
        <li>
            <span className='text-[14px] text-slate-400'>{label}</span>
            <p className='font-semibold text-[18px]'>{value}</p>
        </li>
    )
}

export default SinglePageLI