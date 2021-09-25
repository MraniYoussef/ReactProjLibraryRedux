import { addMemberApi, deleteMemberApi, getMembersApi, saveMemberApi, searchMemberApi } from "../../api/apiMembers";
import { ADD_MEMBER, ADD_MEMBER_ERROR, ADD_MEMBER_SUCCESS, DELETE_MEMBER, DELETE_MEMBER_ERROR, DELETE_MEMBER_SUCCESS, FETCHING_MEMBERS, FETCHING_MEMBERS_ERROR, FETCHING_MEMBERS_SUCCESS, SEARCH_MEMBER, SEARCH_MEMBERS_ERROR, SEARCH_MEMBERS_SUCCESS, UPDATE_MEMBER, UPDATE_MEMBER_ERROR, UPDATE_MEMBER_SUCCESS } from "./types";

export const fetchMembers = () => {

    return async dispatch => {
        dispatch({type: FETCHING_MEMBERS});

        try {

            const members = await getMembersApi();
            dispatch({
                type: FETCHING_MEMBERS_SUCCESS,
                payload: members,
            });

        }catch(err){
            dispatch({
                type: FETCHING_MEMBERS_ERROR,
                payload: err,
            })
        }
    }
}

export const deleteMember = idMember => {
    return async dispatch => {
        
        dispatch({type: DELETE_MEMBER});
        try {
        await deleteMemberApi(idMember) ;
            dispatch({
                type: DELETE_MEMBER_SUCCESS,
                payload: idMember,
            });
        }catch(err){
            dispatch({
                type: DELETE_MEMBER_ERROR,
                payload: err,
            })
        }
    }
}

export const addMember = data => {
    return async dispatch => {
        
        dispatch({type: ADD_MEMBER});
        try {
        const member = await addMemberApi(data) ;
            dispatch({
                type: ADD_MEMBER_SUCCESS,
                payload: {...data, member}
            });
        }catch(err){
            dispatch({
                type: ADD_MEMBER_ERROR,
                payload: err,
            })
        }
    }
}

export const saveMember = data => {
    return async dispatch => {
        
        dispatch({type: UPDATE_MEMBER});
        try {
         await saveMemberApi(data) ;
            dispatch({
                type: UPDATE_MEMBER_SUCCESS,
                payload: {data}
            });
        }catch(err){
            dispatch({
                type: UPDATE_MEMBER_ERROR,
                payload: err,
            })
        }
    }
}

export const searchMember = lastName => {
    return async dispatch => {
        
        dispatch({type: SEARCH_MEMBER});
        try {
         const members = await searchMemberApi(lastName) ;
            dispatch({
                type: SEARCH_MEMBERS_SUCCESS,
                payload: members,
            });
        }catch(err){
            dispatch({
                type: SEARCH_MEMBERS_ERROR,
                payload: err,
            })
        }
    }
}