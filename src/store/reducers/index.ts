// third-party
import { combineReducers } from 'redux';

// project import
import leads from './leads';
import snackbar from './snackbar';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  snackbar,
  leads,
});

export default reducers;