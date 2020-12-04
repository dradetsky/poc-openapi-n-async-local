const getAlsStore = require('./getals')

module.exports = (ctx, req, res) => {
  const myheader = getAlsStore().getStore().myheader
  console.log(`myheader 1: ${myheader}`)
  res.send({oh: 'hai'})
}
