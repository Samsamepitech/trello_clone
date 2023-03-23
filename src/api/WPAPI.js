import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost/blog/index.php/wp-json/wp/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'samsam',
    password: 'samsam16'
  }
})
export default {
  // categories
  getcats () {
    return api.get('/categories')
  },
  getcat (id) {
    return api.get(`/categories/${id}`)
  },
  createCat (form) {
    return api.post('/categories', form) // creer categorie
  },
  deleteCat (id) {
    return api.delete(`/categories/${id}?force=true`) // effacer categorie // force = true
  },
  editcat (id, form) {
    return api.put(`/categories/${id}`, form) // edit categories
  },

  // posts
  getposts (id) {
    return api.get(`/posts?categories=${id}`)
  },
  getpost (id) {
    return api.get(`/posts/${id}`)
  },
  createPost (form) {
    return api.post('/posts', form)
  },
  editPost (id, form) {
    return api.put(`/posts/${id}`, form)
  },
  deletePost (id) {
    return api.delete(`/posts/${id}`)
  },
  deletepostcat (id) {
    return api.delete(`/posts?categories=${id}`)
  },

  // comment
  getcomment (id) {
    return api.get(`/comments?post=${id}&orderby=date&order=asc`)
  },
  createComment (form) {
    return api.post('/comments', form)
  },
  deleteComment (id) {
    return api.delete(`/comments/${id}`)
  },
  editComment (id, form) {
    return api.put(`/comments/${id}`, form)
  }

}
