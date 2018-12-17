import * as React from 'react';
import {
  Header,
  HomeStyles,
} from './styles';
import Input from './Input';

export default class Home extends React.Component {
  public render() {
    return (
      <HomeStyles>
        <Header>
          <Input />
        </Header>
        <main>
          Content
        </main>
      </HomeStyles>
    )
  }
};
