/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';
import Img from '/Users/joshuakeough/PersonalWebsites/TvMounts/src/components/ContactPage/JoshResumeImg.png';

const title = 'Contact Me';


class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>

          <img src={Img} width="380" height="380" alt="React"/>

          <p>Cell: &nbsp;
            <a href="tel:1-901-336-5063">(901) 336-5063</a>
          </p>
          <p>Email: &nbsp;
            <a href="mailto:jkeough1987@live.com?Subject=Web%20Dev" target="_top">
              jkeough1987@live.com
            </a>
          </p>
        </div>
      </div>
    )
      ;
  }

}

export default withStyles(ContactPage, s);
