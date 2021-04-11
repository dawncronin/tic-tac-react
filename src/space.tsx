import React, { FC } from 'react'

interface Props {
    position: number,
    onPlayerMove: Function,
    spaceValue: string
 
}

const Space: FC<Props> = ({position, spaceValue, onPlayerMove}) => {


    return (
        <div className={`space position-${position}`} onClick={() => onPlayerMove(position)}>
            <p className='marker'>{spaceValue}</p>
        </div>
    )
}

export default Space