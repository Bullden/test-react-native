import {combineReducers} from 'redux';
import { photoReducer } from './reducers/UploadPhoto';

const rootReducer = combineReducers({
    photo: photoReducer
});

export default rootReducer;
