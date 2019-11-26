const hostUrl = 'http://localhost:3000';

module.exports = {
  loadPosts() {
    return fetch(`${hostUrl}/posts`).then(r => r.json())
  },

  loadPost(id) {
    return fetch(`${hostUrl}/posts/${id}`).then(r => r.json())
  },

  setPost(title, author) {
    return fetch(`${hostUrl}/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, author }),
      headers: { "Content-Type": "application/json" }
    });
  }
}
