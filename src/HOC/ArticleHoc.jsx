import React from 'react'

import Popular from '../Components/Popular/Popular'
import New from '../Components/New/New'

export default function ArticleHoc(Component){
    return function (props, ...args){
        console.log(props)
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