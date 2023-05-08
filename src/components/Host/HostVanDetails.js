import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function HostVanDetails() {
    const [vanDetail, setVanDetail] = useState(null);
    const params = useParams();
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVanDetail(data.vans))
    }, [params.id])
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    if (!vanDetail) {
        return <h1>Loading.....</h1>
    }
    return (
        <section>
            <Link 
                to=".."
                relative='path'
                className='back-button'>&larr;<span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={vanDetail[0].imageUrl} alt={vanDetail[0].type} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vanDetail[0].type}`}
                        >
                            {vanDetail[0].type}
                        </i>
                        <h3>{vanDetail[0].name}</h3>
                        <h4>${vanDetail[0].price}/day</h4>
                    </div>
                </div>
                <div className='links'>
                    <NavLink to="." end style={({ isActive }) => isActive ? styles : null}>Details</NavLink>
                    <NavLink to="pricing" style={({ isActive }) => isActive ? styles : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({ isActive }) => isActive ? styles : null}>Photos</NavLink>
                </div>
                <Outlet context={{ vanDetail }} />
            </div>
        </section>
    )
}

export default HostVanDetails
