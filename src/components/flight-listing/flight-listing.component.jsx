import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../store/slices/flights";

const FlightListing = ()=>{

    const dispatch = useDispatch();

    const listing = useSelector((state)=>{
        const { flights } = state
        return flights.flights
    })

    console.log(listing);
    

    useEffect(()=>{
        dispatch(fetchFlights())
    }, [])


    return <ul>
        {listing && listing.map((flight)=>{
            return  <li key={flight.id}>
                {flight.flight_name}
            </li>
        })}
    </ul>
}

export default FlightListing