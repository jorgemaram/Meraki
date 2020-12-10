import React, { Component } from 'react';
import EventService from "../../../service/event.service"
import MarkerCard from "../Maps/marker"
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';




class allMaps extends Component {

    constructor() {
        super()
        this.state = {
            event: [],

        }
        this.eventService = new EventService()
    }

    componentDidMount = () => {

        this.refreshEvents()

    }

    refreshEvents = () => {

        this.eventService
            .getEvent()
            .then(res => this.setState({ event: res.data }))
            .catch(err => console.log(err))
    }

    render() {

       console.log(this.state.event)

        return (
            <>

                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{ lat: 40.428637831327386, lng: - 3.6969483107523127, }}
                />

                {this.state.event.map(elm => <MarkerCard  key={elm._id} {...elm} />)}


            </>
        )
    }
}

export default withScriptjs(withGoogleMap(allMaps))


// {

//           this.state.events.map(elm =><MapMarker
//             googleMapURL={mapURL}
//             containerElement={<div style={{ height: "400px" }} />}
//             mapElement={<div style={{ height: "100%" }} />}
//             loadingElement={<p>Cargando</p>}
//             {...elm}
//         />
//     )
// } * /}




