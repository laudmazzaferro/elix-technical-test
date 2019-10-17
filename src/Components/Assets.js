import React from 'react';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
import AssetsItem from './AssetsItem'

class Assets extends React.Component {
  render() {
    const {assets}= this.props;
    return (
      <div>
        {/*<nav>
          <ol>
            {assets.map(asset=>{
              return(
                <li><a href={`http://localhost:3000/#${asset.t_street_name}`}>{asset.t_street_name}</a></li>
              ) 
            })}
          </ol>
          </nav>*/}
        <ol>
          {assets.map(asset=>{ 
            return(
              <li key={asset.id}>
                <AssetsItem asset={asset}>
                </AssetsItem>
                <Link to={`/asset-entities/${asset.id}`} >
                <button>Entidades</button>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default Assets;