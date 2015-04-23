import * as Blocks from 'panels-ui/blocks';
import React from 'react';

export default class Block extends React.Component {
  render() {
    let El = Blocks[this.props.block.type];
    return <El {...this.props.block.toJS()}></El>;
  }
}
