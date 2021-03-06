import React, { Component } from 'react';
import ContentZone from 'agility/ContentZone'

class OneColumnTemplate extends Component {
    render() {
        return (
        <div className="one-column-template">
            <ContentZone name='MainContentZone' {...this.props} />
        </div>
        );
    }
}

export default OneColumnTemplate;