import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../../store/slices/flights";

const FlightListing = ()=>{

    const dispatch = useDispatch();

    const listing = useSelector((state)=>{
        return state.flights
    })

    console.log(listing);
    

    useEffect(()=>{
        dispatch(getFlights())
    }, [])


    return <ul>
        {listing && listing.map((flight)=>{
            return  <li key={flight.id}>
                {flight.route}
            </li>
        })}
    </ul>
}

export default FlightListing