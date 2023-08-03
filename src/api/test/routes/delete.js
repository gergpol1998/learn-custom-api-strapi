module.exports = {
    routes: [
      { // Path defined with a regular expression
        method: 'DELETE',
        path: '/test/delete', // Only match when the URL parameter is composed of lowercase letters
        handler: 'delete.delete',
      }
    ]
}