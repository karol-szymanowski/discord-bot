module.exports = function (msg) {
  if (!msg.author){
    throw new Error('empty name')
  }
  return `Hello ${msg.author}!`
};
