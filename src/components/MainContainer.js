import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Folder from '@material-ui/icons/Folder';

import data from '../data/MegaPomoshnik';
import { connect } from 'react-redux';
import { itemsFetchData } from '../redux/action';


const Tree = (data) => ( 
    data.data[0].result.map((res, index) => 
    <ListItem key={index}>
      <ListItemAvatar >
          <Avatar className='info-bg'>
            <Folder />
          </Avatar>
      </ListItemAvatar>
      <Link
        to={{
              pathname: `/detail/${res.id}/${res.text}`,
              state: { 
                  detail: res 
              }
            }}
          style={{ textDecoration: 'none', textTransform: 'uppercase', color: '#6a6a6b' }}>
              <ListItemText primary={res.text}  />
      </Link>
      <Divider />
    </ListItem>
  ) 
);

class MainContainer extends PureComponent {
  
    state = {
        data: data
    }

    componentDidMount() {
        this.props.itemsFetchData(data);
    }

    render() {
        return (
        <div>
            <Tree data={this.state.data}  />
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      data: state.items.data
    };
};
  
const mapDispatchToProps = dispatch => ({
    itemsFetchData: (data) => dispatch(itemsFetchData(data)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);