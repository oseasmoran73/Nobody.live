import React, { Component } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

import '../styles/stream.css';
import api from '../api';

class Stream extends Component {
    constructor(props) {
        super(props);
        this.state= {
            streams: []
        };
    }

    componentDidMount = async () => {
        await api.getStreams().then(streams => {
            console.log('streams', streams);
        })
    }

    render() {
        return (
            <div className='nl-stream__container'>
                LiveStream Component Init
                {/* <TwitchEmbed channel='Jankos' theme='dark' muted/> */}
            </div>
        )
    }
}

export default Stream;