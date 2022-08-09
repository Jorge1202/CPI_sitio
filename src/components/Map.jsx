import React from 'react';

import './styles/Map.css';

const Map = ({url}) => { 
    return (
        <React.Fragment>   
            <section className="mapa_iframe">
                <div className="container-fluid p-0">
                    <iframe title="mapa" src={url}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Map;
