import { LOAD_PHOTO, GET_PHOTOS } from "../actionNames/UploadPhoto";

export function loadPhoto(data) {
    return{ type: LOAD_PHOTO, data }
}
export function getPhotos(data) {
    return{ type: GET_PHOTOS, data }
}