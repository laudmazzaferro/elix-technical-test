import React from 'react';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
import AssetsItem from './AssetsItem'

class Assets extends React.Component {
  render() {
    const {assets}= this.props;
    return (
      <div>
        <Link to={`/entities`} className="charapter-link">
          <button>click</button>
        </Link>
        <ol>
          {assets.map(asset=>{ 
            return(
              <li key={asset.id}>
                <AssetsItem asset={asset}>
                </AssetsItem>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default Assets;