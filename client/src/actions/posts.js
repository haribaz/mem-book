import * as api from '../api/index'

console.log(api)
export const getPosts = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.fetchPosts()

            dispatch({ type: 'FETCH_POSTS', payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const createPost = (newPost) => {
    return async (dispatch) => {
        try {
            const { data } = await api.createPost(newPost)

            dispatch({ type: 'CREATE_POST', payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }
}
