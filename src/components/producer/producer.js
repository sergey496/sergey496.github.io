import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

import Biography from './biography';
import Filmography from './filmography';
import Photos from './photos';
import Video from './video/video';
import Map from './map';

import producerState from '../../utils/producerState';

if (localStorage.producerName) localStorage.setItem('producerName', 'Белоусов Олег Павлович');

const currentProducer = producerState.producers.find(
  producer => producer.person === localStorage.getItem('producerName'),
);
const currentProducerIndex = producerState.producers.findIndex(
  producer => producer.person === localStorage.getItem('producerName'),
);

const dataFilmorgaphy = currentProducer.filmography;
const dataBiography = currentProducer.biography;
const mapCoordinates = currentProducer.markOnMap;
const photo = producerState.pictures[currentProducerIndex][0];
const allPhotos = producerState.pictures[currentProducerIndex];
const video = currentProducer.videoLinks;

const Person = ({ person }) => (
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

Person.defaultProps = {
  person: 'Albert Einstein',
  video: 'https://www.youtube.com/embed/hFgB5E0uL_Y',
};

Person.propTypes = {
  person: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  video: PropTypes.string,
};

export default Person;
