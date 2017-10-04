import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Image from 'grommet/components/Image';

export default class PopHeader extends Component {
  render() {
    return (
      <div>
        <Header
          float={true}
        >
          <Image
            className="header-logo"
            src="../../static/images/HEADER-LOGO.png"
            size="small"
          />
          <div className="header-phone-box">
            <img alt="" src="../static/images/phone.png"/>
            <a className="header-phone-number" href="tel:+923344423767">
              0-33-44 <br />
              ICEPOP
            </a>
          </div>
        </Header>
      </div>
    )
  }
}
