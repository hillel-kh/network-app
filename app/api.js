const hostUrl = 'http://localhost:3000'

module.exports = {
  loadPosts() {
    return fetch(`${hostUrl}/posts`).then(r => r.json())
  },

  loadPost(id) {
    return fetch(`${hostUrl}/posts/${id}`).then(r => r.json())
  },

  loadComments(postId) {
    return fetch(`${hostUrl}/comments?postId=${postId}`).then(r => r.json())
  }
}
