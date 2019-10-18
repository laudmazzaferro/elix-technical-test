import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AssetsItem from './AssetsItem'

class Assets extends React.Component {
  render() {
    const { assets } = this.props;
    return (
      <React.Fragment>
        <h2 className="assets-main-title" >ASSETS</h2>
        <div className="assets-container">

          <ol className="assets-list">
            {assets.map(asset => {
              return (
                <li className="assets-item_list" key={asset.id}>
                  <AssetsItem asset={asset}>
                  </AssetsItem>
                  <Link to={`/asset-entities/${asset.id}`} >
                    <button className="asts-btn-to-enti">Entities</button>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </React.Fragment>
    )
  }
}
Assets.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default Assets;