import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from './Navbar';
import Loading from './Loading';

const Layout = ({ children }) => {
  if(typeof window === `undefined`) return <Loading/>;
  const engine = new Styletron();

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Navbar/>
          <main>{children}</main>
      </BaseProvider>
    </StyletronProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
