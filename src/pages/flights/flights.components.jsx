import React from "react";
import Header from "../../components/header/header.component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlightListing from "../../components/flight-listing/flight-listing.component";
import FlightFilters from "../../components/flight-filters/flight-filters.component";

const FlightsPage = ()=>{
    return <div>
        <Header name="NewTravelApp"/>
        <Container>
            <Row>
                <Col lg={3}><FlightFilters/></Col>
                <Col><FlightListing/></Col>
            </Row>
        </Container>
    </div>
}

export default FlightsPage;