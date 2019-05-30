import { connect } from 'react-redux';
import { itemsFetchData } from '../redux/action';
import MainContainer from './MainContainer';

const mapStateToProps = state => {
  return {
    isLoading: isFetching,
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => ({
    itemsFetchData: () => dispatch(itemsFetchData()),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const MainContainer = wrapper(MainContainer);
export default MainContainer;
