const getters = {
    userID: state => {
        return state.user.id;
    },

    name:state => {
        return state.user.name
    },

    email:state => {
        return state.user.email
    },

    token:state => {
        return state.user.token
    }

}



export default getters;