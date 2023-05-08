import React from 'react'
import { useOutletContext } from 'react-router'

function Photos() {
    const { vanDetail } = useOutletContext()
    return (
        <img src={vanDetail[0].imageUrl} className="host-van-detail-image" alt="price" />
    )
}

export default Photos
