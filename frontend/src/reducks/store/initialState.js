const initialState = {
    user: {
        errors: {
            email: null,
            password: null
        }
    },
    posts: {
        results: [],
        count: 0,
        next: null,
        previous: null
    }
};


export default initialState;
