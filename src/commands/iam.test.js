const iam = require('./iam');

let msg = {
  content: '',
  guild:{
    roles: [
      {
        id: '1234',
        name: 'test'
      },
      {
        id: '4321',
        name: 'test2'
      }
    ]
  },
  member: {
    addRole: function(id) {
      return id
    }
  }
}

describe('iam command', () => {
  it('should return value', () => {
    msg.content = '.iam test'
    expect(iam.function(msg)).toEqual('You are now test')
    msg.content = '.iam test test2'
    expect(iam.function(msg)).toEqual('You can add only one role at a time')
    msg.content = '.iam nothing'
    expect(iam.function(msg)).toEqual('No role like this, check .roles')
    msg.content = '.iam'
    expect(iam.function(msg)).toEqual('You are the one! https://www.youtube.com/watch?v=dT8dmvAzIqA')
  })
})
