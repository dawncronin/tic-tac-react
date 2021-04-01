import React, { FC } from 'react'

interface Props {
    position: number,
    onPlayerMove: Function,
    spaceValue: string
 
}

const Space: FC<Props> = ({position, spaceValue, onPlayerMove}) => {


    return (
        <div className="space" onClick={() => onPlayerMove(position)}>
            {spaceValue}
        </div>
    )
}

export default Space