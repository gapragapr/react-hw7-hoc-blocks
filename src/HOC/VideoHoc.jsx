import React from 'react'

import Popular from '../Components/Popular/Popular'
import New from '../Components/New/New'

export default function VideoHoc(Component){
    return function (props, ...args){
        if (props.views > 1000){
            return (
                <Popular>
                    <Component {...props}/>
                </Popular>
            )
        } else if (props.views < 100){
            return (
                <New>
                    <Component {...props}/>
                </New>
            )
        } else {
            return (
                <Component {...props}/>
            )
        }
    }
}