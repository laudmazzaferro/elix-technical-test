import React from 'react';
import PropTypes from 'prop-types';

class AssetsItem extends React.Component {
  render() {
    const { asset } = this.props;
    return (
      <div className="container-item_list">
         <h2 className="title-item_list" id={`${asset.t_street_name}`}>{asset.t_street_name}, {asset.n_number}</h2>
         <p className="city-item_list" >{asset.t_city}  <i className="fas fa-map-marker-alt"></i></p>
         <p className="code-item_list" >{asset.t_code}</p>
      </div>
    )
  }
}

AssetsItem.propTypes = {
  asset: PropTypes.object.isRequired,
};
export default AssetsItem;