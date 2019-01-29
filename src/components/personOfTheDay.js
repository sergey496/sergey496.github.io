import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import producerState from '../utils/producerState';

import Person from './person';

export default class PersonOfTheDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      window.localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  handleToggle(e) {
    if (e.target.tagName !== 'BUTTON') {
      // eslint-disable-next-line
      const openIsNow = this.state.isOpen
      this.setState({
        isOpen: !openIsNow,
      });
    }
  }

  render() {
    const { producers, pictures, producerOfTheDay } = producerState;
    const index = producerOfTheDay;
    const { isOpen } = this.state;

    const styleHeader = {
      textAlign: 'center',
      paddingTop: '15px',
      color: 'rgb(92, 0, 153)',
    };
    const styleFragment = {
      border: '2px solid rgb(92, 0, 153)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(214, 153, 255, 0.2)',
      transition: 'all 2s ease-out',
      cursor: 'pointer',
    };

    let result;
    if (isOpen) {
      result = (
        // eslint-disable-next-line
        <div
          className={producers[index].person}
          key={`${producers[index].person}`}
          onClick={this.handleClick}
        >
          <Person
            person={producers[index].person}
            linkImage={pictures[index][0]}
            linkButton="/person"
            buttonName={<Trans>More</Trans>}
            size="15"
          />
        </div>
      );
    } else {
      result = null;
    }
    return (
      // eslint-disable-next-line
      <div style={styleFragment} onClick={e => this.handleToggle(e)}>
        <h2 style={styleHeader}>
          <Trans>ProducerOfTheDay</Trans>
        </h2>
        {result}
      </div>
    );
  }
}
