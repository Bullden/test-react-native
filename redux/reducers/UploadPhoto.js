import { LOAD_PHOTO } from "../actionNames/UploadPhoto"



export const initialState = {
    photos: []
}
export function photoReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case LOAD_PHOTO: {
            let img = action.data.photo
            let arr = state.photos
            arr.push(img)
            let array = JSON.parse(JSON.stringify(arr))
            
            return{
                ...state,
                photos: array
            }
        }
        case 'PHOTOS': {
            console.log(action.payload);
            return{
                ...state,
                photos: action.payload.photos
            }
        }
        default:
            return state
    }
}
export const photo = (state) => state.photo