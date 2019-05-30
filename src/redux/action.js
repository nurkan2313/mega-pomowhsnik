export const RECEIVE_METHODS = 'RECEIVE_METHODS';

export const receivePosts = (data) => {
  return {
    type: RECEIVE_METHODS,
    data
  };
};

export function itemsFetchData(data) {
    return (dispatch) => {
        dispatch(receivePosts(data))
    };
}