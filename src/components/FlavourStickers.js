import React, { Component } from 'react';

import classNames from 'classnames';

import StrawberrySticker from './Flavours/StrawberrySticker'
import WatermelonSticker from './Flavours/WatermelonSticker'

export default class FlavourStickers extends Component {
  render() {
    return (
      <div className="flavour-sticker-holder">
        <StrawberrySticker
          strawberryClass={classNames("flavour-sticker", this.props.strawberryClass)}
        />
        <WatermelonSticker
          watermelonClass={classNames("flavour-sticker", this.props.watermelonClass)}
        />
      </div>
    )
  }
};
