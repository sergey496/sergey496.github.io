/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

import Biography from './biography';
import Filmography from './filmography';
import Photos from './photos';
import Video from './video/video';
import Map from './map';

import producerState from '../../utils/producerState';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: this.props.person,
      video: this.props.video,
      dataFilmorgaphy: '',
      dataBiography: '',
      mapCoordinates: '',
      photo: '',
      allPhotos: '',
    }
  }

  componentWillMount() {
    if (!window.localStorage.producerName) window.localStorage.setItem('producerName', 'Белоусов Олег Павлович');

    const producerState = JSON.parse(window.localStorage.getItem('producerState'));
    
    const currentProducer = producerState.producers.find(
      producer => producer.person === window.localStorage.getItem('producerName'),
    );
    const currentProducerIndex = producerState.producers.findIndex(
      producer => producer.person === window.localStorage.getItem('producerName'),
    );
    
    const dataFilmorgaphy = currentProducer.filmography;
    const dataBiography = currentProducer.biography;
    const mapCoordinates = currentProducer.markOnMap;
    const photo = producerState.pictures[currentProducerIndex][0];
    const allPhotos = producerState.pictures[currentProducerIndex];
    const video = currentProducer.videoLinks;

    this.setState({ dataFilmorgaphy, dataBiography, mapCoordinates, photo, allPhotos, video });
  }

  render() {
    const { person, dataFilmorgaphy, dataBiography, mapCoordinates, photo, allPhotos, video } = this.state;

    return (
      <Fragment>
        <h1>{person}</h1>

        <Figure>
          <Figure.Image width={400} height={500} alt={person} src={photo} />
        </Figure>

        <Biography biography={dataBiography} />
        <Filmography filmography={dataFilmorgaphy} />
        <Photos photoLinks={allPhotos} person={person} />
        <Video videoLink={video} />
        <Map mapCoordinates={mapCoordinates} />
      </Fragment>
    );
  }
}

export default Person;
