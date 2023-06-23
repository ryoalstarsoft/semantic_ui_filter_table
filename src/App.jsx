import React, {Component} from 'react';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react'

import VehicleList from './VehicleList.jsx';

export class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <VehicleList />
      </Container>
    )
  };
}
