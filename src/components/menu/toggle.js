/* eslint-disable */
import React, { Component } from 'react'
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import i18n from 'i18next'
import { Trans } from 'react-i18next'

import producerState from '../../utils/producerState'

import producersRus from '../../../data/producers-rus.json'
import producersEng from '../../../data/producers-eng.json'

export default class Toggle extends Component {
  changeLang(e, lang) {
    // e.preventDefault();
    console.log(lang);

    i18n.changeLanguage(lang);

    producerState.lang = lang;
    if (lang === 'ru') {
      producerState.producers = producersRus;
    } else if (lang === 'en') {
      producerState.producers = producersEng;
    }
    // console.log(producerState)
  }

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1} onClick={() => this.props.onClick('ru')}>
            <Trans>Rus</Trans>
          </ToggleButton>
          <ToggleButton value={2} onClick={() => this.props.onClick('en')}>
            <Trans>Eng</Trans>
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }
}
