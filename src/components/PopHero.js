import React, { Component } from 'react';

import classNames from 'classnames';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

import FlavourStickers from './FlavourStickers'

export default class PopHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      watermelonFlavour: 'Show',
      strawberryFlavour: 'Hide',
      lemonFlavour: 'Hide',
      chocolateFlavour: 'Hide',
      coconutFlavour: 'Hide',
      pommeFlavour: 'Hide'
    }

    this._backgroundLoop = this._backgroundLoop.bind(this);
  }

  _backgroundLoop() {
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Hide',
        strawberryFlavour: 'Show',
        lemonFlavour: 'Hide',
        chocolateFlavour: 'Hide',
        coconutFlavour: 'Hide',
        pommeFlavour: 'Hide'
      }),
      console.log('Running first time out')
    )}, 2000)
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Hide',
        strawberryFlavour: 'Hide',
        lemonFlavour: 'Show',
        chocolateFlavour: 'Hide',
        coconutFlavour: 'Hide',
        pommeFlavour: 'Hide'
      }),
      console.log('Running second timeout')
    )}, 4000)
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Hide',
        strawberryFlavour: 'Hide',
        lemonFlavour: 'Hide',
        chocolateFlavour: 'Show',
        coconutFlavour: 'Hide',
        pommeFlavour: 'Hide'
      }),
      console.log('Running third timeout')
    )}, 6000)
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Hide',
        strawberryFlavour: 'Hide',
        lemonFlavour: 'Hide',
        chocolateFlavour: 'Hide',
        coconutFlavour: 'Show',
        pommeFlavour: 'Hide'
      }),
      console.log('Running third timeout')
    )}, 8000)
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Hide',
        strawberryFlavour: 'Hide',
        lemonFlavour: 'Hide',
        chocolateFlavour: 'Hide',
        coconutFlavour: 'Hide',
        pommeFlavour: 'Show'
      }),
      console.log('Running third timeout')
    )}, 10000)
    setTimeout(() => {(
      this.setState({
        watermelonFlavour: 'Show',
        strawberryFlavour: 'Hide',
        lemonFlavour: 'Hide',
        chocolateFlavour: 'Hide',
        coconutFlavour: 'Hide',
        pommeFlavour: 'Hide'
      }),
      console.log('Running third timeout')
    )}, 12000)
  }

  componentDidMount() {
    this._backgroundLoop()
    setInterval(() => {(
      this._backgroundLoop()
    )}, 10000)
  }

  componentWillUnMount() {
    clearTimeout();
  }

  render() {
    return (
      <div
        className='package-image-wrapper container'
      >
        <div className="pophero-bg-2" >
          <div className="pop-flavour-icons">
            <div className={classNames("pop-flavour-icon", this.state.watermelonFlavour)}>
              <img className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/watermelon-cooler.svg"/>
              <h5 className="pop-flavour-text watermelon-flavour-text">
                Watermelon
              </h5>
            </div>
            <div className={classNames("pop-flavour-icon", this.state.strawberryFlavour)}>
              <img className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/strawberry.svg"/>
              <h5 className="pop-flavour-text strawberry-flavour-text">
                Strawberry
              </h5>
            </div>
            <div className={classNames("pop-flavour-icon", this.state.lemonFlavour)}>
              <img  className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/lemon-sour.svg"/>
              <h5 className="pop-flavour-text lemon-flavour-text">
                Lemon Sour
              </h5>
            </div>
            <div className={classNames("pop-flavour-icon", this.state.chocolateFlavour)}>
              <img  className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/chocolate.svg"/>
              <h5 className="pop-flavour-text chocolate-flavour-text">
                Chocolate
              </h5>
            </div>
            <div className={classNames("pop-flavour-icon", this.state.coconutFlavour)}>
              <img  className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/coconut.svg"/>
              <h5 className="pop-flavour-text coconut-flavour-text">
                Coconut
              </h5>
            </div>
            <div className={classNames("pop-flavour-icon", this.state.pommeFlavour)}>
              <img className="pop-flavour-icon-svg" alt="" src="../static/images/flavours/pomegranate.svg"/>
              <h5 className="pop-flavour-text pomme-flavour-text">
                Pomegrenate
              </h5>
            </div>
          </div>
        </div>
        <div className={classNames("pophero-bg pophero-bg-watermelon", this.state.watermelonFlavour)} />

        <div className={classNames("pophero-bg pophero-bg-strawberry", this.state.strawberryFlavour)}/>

        <div className={classNames("pophero-bg pophero-bg-lemon", this.state.lemonFlavour)}/>

        <div className={classNames("pophero-bg pophero-bg-chocolate", this.state.chocolateFlavour)}/>

        <div className={classNames("pophero-bg pophero-bg-coconut", this.state.coconutFlavour)}/>

        <div className={classNames("pophero-bg pophero-bg-pomme", this.state.pommeFlavour)}/>


        <div className="icepops pop-image">
          <div className={classNames("watermelon-pop ", this.state.watermelonFlavour)} />
          <div className={classNames("strawberry-pop", this.state.strawberryFlavour)} />
          <div className={classNames("lemon-sour-pop", this.state.lemonFlavour)} />
          <div className={classNames("chocolate-pop", this.state.chocolateFlavour)} />
          <div className={classNames("coconut-pop ", this.state.coconutFlavour)} />
          <div className={classNames("pomegrenade-pop ", this.state.pommeFlavour)} />
        </div>
      </div>
    )
  }
}
