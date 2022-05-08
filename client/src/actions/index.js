import axios from 'axios'

export function getItem() {
    return async function (dispatch) {
        try{
        var json = await axios.get("http://localhost:3001/api");
        return dispatch({
            type:'GET_ITEM',
            payload: json.data
        })}catch(e){
            console.log(e);
        }}}



export function getDetail(id) {
    return async function (dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/api/" + id)
            return  dispatch({
                type: 'GET_DETAIL',
                payload : json.data
            })
        }catch(e){
        console.log(e);
}}}

export function getSearch(name) {
    return async function (dispatch) {
        try{
        var json = await axios.get("http://localhost:3001/api?search=" + name)
        return dispatch ({
            type : "GET_SEARCH",
            payload : json.data
        })
        }catch(e){
            console.log(e);
}}}