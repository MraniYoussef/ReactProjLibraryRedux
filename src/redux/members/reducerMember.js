import { ADD_MEMBER, ADD_MEMBER_ERROR, ADD_MEMBER_SUCCESS, DELETE_MEMBER, DELETE_MEMBER_ERROR, DELETE_MEMBER_SUCCESS, FETCHING_MEMBERS, FETCHING_MEMBERS_ERROR, FETCHING_MEMBERS_SUCCESS, SEARCH_MEMBER, SEARCH_MEMBERS_ERROR, SEARCH_MEMBERS_SUCCESS, UPDATE_MEMBER, UPDATE_MEMBER_ERROR, UPDATE_MEMBER_SUCCESS } from "./types";

const initialStateMember = {
    members: [],
    status: null,
    error: null,
}


const reducerMember  = (state = initialStateMember, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_MEMBERS: {
            return {
                ...state,
                status: 'fetching-members-progress',
            }
        }
        case FETCHING_MEMBERS_ERROR: {
            return {
                ...state,
                status: 'fetching-members-error',
                error: payload,
            }
        }
        case FETCHING_MEMBERS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-members-success',
                members: payload,
            }

        }

        case DELETE_MEMBER: {
            return {
                ...state,
                status: 'delete-member-progress',
            }
        }
        case DELETE_MEMBER_ERROR: {
            return {
                ...state,
                status: 'delete-member-error',
                error: payload,
            }
        }
        case DELETE_MEMBER_SUCCESS: {
            return {
                ...state,
                status: 'delete-members-success',
                members: [...state.members.filter(member => member.idMember !== payload)]
            }
        }

        case ADD_MEMBER: {
            return {
                ...state,
                status: 'add-member-progress',
            }
        }
        case ADD_MEMBER_ERROR: {
            return {
                ...state,
                status: 'add-member-error',
                error: payload,
            }
        }
        case ADD_MEMBER_SUCCESS: {
            return {
                ...state,
                status: 'add-member-success',
                members: [...state.members, payload],
            }
        }
        case UPDATE_MEMBER: {
            return {
                ...state,
                status: 'update-member-progress',
            }
        }
        case UPDATE_MEMBER_ERROR: {
            return {
                ...state,
                status: 'update-member-error',
                error: payload,
            }
        }
        case UPDATE_MEMBER_SUCCESS: {
            const newMembers = [...state.members];
            const member = newMembers.find(member => member.idMember === payload.idMember);
            member.firstName = payload.firstName;
            member.lastName = payload.lastName;
            return {
                ...state,
                status: 'update-member-success',
                members: [...newMembers],
            }
        }

        case SEARCH_MEMBER: {
            return {
                ...state,
                status: 'search-member-progress',
            }
        }
        case SEARCH_MEMBERS_ERROR: {
            return {
                ...state,
                status: 'search-member-error',
                error: payload,
            }
        }
        case SEARCH_MEMBERS_SUCCESS: {
            
            return {
                ...state,
                status: 'search-member-success',
                members: [...payload],
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducerMember;