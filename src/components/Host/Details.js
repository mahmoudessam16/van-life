import React from 'react'
import { useOutletContext } from 'react-router'
function Details() {
    const { vanDetail } = useOutletContext();
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{vanDetail[0].name}</span></h4>
            <h4>Category: <span>{vanDetail[0].type}</span></h4>
            <h4>Description: <span>{vanDetail[0].description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}

export default Details
