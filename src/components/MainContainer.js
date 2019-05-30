import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import data from '../data/MegaPomoshnik';
import { connect } from 'react-redux';
import { itemsFetchData } from '../redux/action';

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
            <List className="list-services">
            {this.state.data.map((res, index) => (
                <Link
                to={{
                    pathname: `/info/${res.tid}/${res.method}`,
                    state: { 
                        detail: res 
                    }
                }}
                style={{ textDecoration: 'none' }}
                key={index}
                >
                <ListItem>
                    <strong>{res.method}</strong>
                </ListItem>
                <Divider />
                </Link>
            ))}
            </List>
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