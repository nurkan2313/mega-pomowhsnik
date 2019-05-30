import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Folder from '@material-ui/icons/Folder';

const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  },
  menuHeader: {
    paddingLeft: '30px'
  }
};

const Tree = (data) => ( 
  data.data.result.map((res, index) => 
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

class Detail extends Component {
  render() {
    return(
      <div>
        <List>
          <Tree data={this.props.location.state.detail}  />
        </List>
      </div>
    )
  } 
}

export default withStyles(styles)(Detail);