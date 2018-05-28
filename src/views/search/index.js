import * as React from 'react';
import { connect } from 'react-redux';

class Search extends React.Component<Props, State> {
  state = { searchQueryString: '' };

  render() {
    const { searchQueryString } = this.state;

    return (
      <View>
        <SearchInput handleSubmit={this.handleSubmit} />
      </View>
    );
  }
}


export default compose(connect())(Search);
