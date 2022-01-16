import React from 'react'

import './Loading.scss'

import { Circles } from  'react-loader-spinner'

function Loading() {
    return (
        <div className="loadingDiv">
            <Circles
                heigth="100"
                width="100"
                color='#1CF8BD'
                arialLabel='loading'
            />
      </div>
    )
}

export default Loading
