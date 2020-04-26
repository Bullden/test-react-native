import { put, takeEvery, call} from "redux-saga/effects";
import {callBackend} from "../../services/apiService";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);


export function* doGetPhotos() {
    yield takeEvery(`GET_PHOTOS`, function* (action) {
        mock.onGet("/users").reply(200, {
            photos: [
                {id: 333333333333, date: '22.04.2020', uri: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
                {id: 111111111111, date: '22.04.2020', uri: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"},
            ],
        }); 
       const answerBackend =  yield call(callBackend, `users`)
       console.log(answerBackend.data);
       
       yield put({
           type: "PHOTOS",
           payload: {
               photos: answerBackend.data.photos
           }
       }) 
    })
}

// axios.get("/users").then(function (response) {
//     console.log(response.data);
// });
