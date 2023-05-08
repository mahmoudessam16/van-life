import React from 'react'
import { useOutletContext } from 'react-router'

function Pricing() {
    const {vanDetail} = useOutletContext()
    return (
        <h3 className="host-van-price">${vanDetail[0].price}<span>/day</span></h3>
    )
}

export default Pricing
