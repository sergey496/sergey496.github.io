/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import Toggle from './menu/toggle';

import producerState from '../utils/producerState';
import engProducers from '../../data/producers-eng.json';
import ruProducers from '../../data/producers-rus.json';

import Person from './person';

export default class PersonListHandler extends Component {
  state = producerState;

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  render() {
    let producers;
    const { pictures } = this.state;
    if (this.state.lang === 'en') {
      producers = this.state.producers;
    } else {
      producers = this.state.producers;
    }

    return (
      <Fragment>
        <Toggle onClick={(i) => {
          if (i === 'en') {
            this.state.producers = engProducers;
            this.state.lang = i;
            this.forceUpdate();
          } else {
            this.state.producers = ruProducers;
            this.state.lang = i;
            this.forceUpdate();
          }
        }}
        />
        <CardGroup>
          {producers.map((person, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              role="button"
              tabIndex={0}
              className={person.person}
              key={`${person.person}`}
              onClick={this.handleClick}
            >
              <Person
                person={person.person}
                linkImage={pictures[index][0]}
                linkButton="/person"
                buttonName={<Trans>More</Trans>}
                size="15"
              />
            </div>
          ))}
        </CardGroup>
      </Fragment>
    );
  }
}
