import React from 'react';
//import PropTypes from 'prop-types';

class AssetsItem extends React.Component {
  render() {
    const { asset } = this.props;
    return (
      <div>
         <h2>{asset.t_street_name}</h2>
         <p>{asset.n_number}</p>
         <p>{asset.t_city}</p>
         <p>{asset.t_code}</p>
      </div>
    )
  }
}

export default AssetsItem;