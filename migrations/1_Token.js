const Token = artifacts.require('ERC20');

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Token, 'German', 'GMN', '18', '10000');
};