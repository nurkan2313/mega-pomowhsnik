import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Folder from '@material-ui/icons/FolderOpen';
import Circle from '@material-ui/icons/TurnedInNot';

import HtmlToReactParser from 'html-to-react';
import { withStyles } from '@material-ui/core/styles';

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

const htmlToReactParser = new HtmlToReactParser.Parser();

const SubTree = (subdata) => (
  <ul>
    {!!(subdata.data) ? subdata.data.map(
      res => (
        <li> 
          {!!(res.description) ? 
            <Link
                to={{
                    pathname: `/description/${res.id}/${res.text}`,
                    state: { 
                        detail: res 
                    }
                }}
                style={{ textDecoration: 'none' }}
            >
                {res.text}
            </Link> : <h4 style={{color: 'red'}}> {res.text} </h4>
          } 
          {!!(res.children) ? <SubTree data={res.children} /> :  null}

        </li>
      )
    ) : null
        }
  </ul>
);

const Tree = (data) => (
  !!(data.data.children) ?
  data.data.children.map((res, index) => 
    <ListItem key={index}>
        {
          !!(res.children) ? 
          <React.Fragment>
              <ListItemAvatar style={{color: '#26469e'}}>
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
                style={{ textDecoration: 'none' }}
              >
                <ListItemText primary={res.text} style={{color: 'red'}} />
              </Link> 
            </React.Fragment>
            :
            !!(res.description) ? 
            <React.Fragment>
              <ListItemAvatar style={{color: '#26469e'}}>
                  <Avatar className='info-bg'>
                    <Folder />
                  </Avatar>
              </ListItemAvatar>
              <Link
                  to={{
                      pathname: `/description/${res.id}/${res.text}`,
                      state: { 
                          detail: res 
                      }
                  }}
                  style={{ textDecoration: 'none' }}
              >
                  <ListItemText primary={res.text}  style={{color: 'red'}}/>
              </Link> 
              </React.Fragment>
              : 
              <React.Fragment>
                <ListItemAvatar style={{color: '#26469e'}}>
                  <Avatar className='info-bg'>
                    <Circle />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={res.text}  />
              </React.Fragment>
        }
    </ListItem>
  ) : htmlToReactParser.parse(data.data.description)
);

class Detail extends PureComponent {
  render() {
    return(
      <List>
        <Tree data={this.props.location.state.detail}  />
      </List>
    )
  } 
}

export default withStyles(styles)(Detail);