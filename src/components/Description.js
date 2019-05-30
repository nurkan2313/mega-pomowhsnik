import React, { PureComponent } from 'react';
import HtmlToReactParser from 'html-to-react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Circle from '@material-ui/icons/PhoneForwarded';
import ListItem from '@material-ui/core/ListItem';
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

const Tree = (data) => (
    <div>
      <p>{data.data.long_name}</p>
      <p>{data.data.text}</p>
      <p>{data.data.command}</p>
      <p>{data.data.sms_num}</p>
      {htmlToReactParser.parse(data.data.description)}
       
       <ListItem>
            <ListItemAvatar style={{color: '#26469e'}}>
              <Avatar className='info-bg'>
                  <Circle />
              </Avatar>
            </ListItemAvatar>
            <a href={`tel:${data.data.command}`} className="call_command">выполнить</a>
       </ListItem>
    </div>
);

class Description extends PureComponent {
  render() {
    return(
        <ul>
            <Tree data={this.props.location.state.detail}  />
        </ul>
    )
  } 
}

export default withStyles(styles)(Description);