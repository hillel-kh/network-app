const hostUrl = 'http://localhost:3000'

module.exports = {
  loadPosts() {
    return fetch(`${hostUrl}/posts`).then(r => r.json())
  },

  loadPost(id) {
    return fetch(`${hostUrl}/posts`).then(r => r.json()).then(r => r[id])
  }
}