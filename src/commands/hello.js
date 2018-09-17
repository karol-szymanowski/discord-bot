module.exports = {
  command: '.hello',
  description: '',
  function: function (msg) {
    if (!msg.author){
      throw new Error('empty name')
    }
    return `Hello ${msg.author}!`
  }
};
