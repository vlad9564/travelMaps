import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";



var iconFeature = new ol.Feature(new ol.geom.Point([15, 25]));
var source = new ol.source.Vector({ features: [iconFeature] });


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Map view={{ center: [0, 0], zoom: 2 }} >
            <Layers>
              <layer.Tile />
              <layer.Vector source={source} />
            </Layers>
            {/* <Overlays>
              <Overlay
              />
            </Overlays> */}
            <Controls  >
              <control.Rotate />
              <control.ScaleLine />
              <control.FullScreen />
              <control.OverviewMap />
              <control.ZoomSlider />
              <control.ZoomToExtent />
              <control.Zoom />
            </Controls>
            <Interactions>

            </Interactions>
          </Map>
        </header>
      </div >
    );
  }
}

export default App;
