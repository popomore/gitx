'use strict';

var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var chmod = require('chmod');

module.exports = function(privateKey) {
  if (!fs.existsSync(privateKey)) {
    throw new Error(privateKey + ' not exists');
  }

  // Permissions of the private key must be 400 or 600
  // http://bodhizazen.net/Tutorials/SSH_keys
  chmod(privateKey, 600);

  return new Git(privateKey);
};


function Git(key) {
  this.key = key;
}

Git.prototype.spawn = function(args, options) {
  return cp.spawn('git', args, this._getOpt(options));
};

Git.prototype.exec = function(command, options, callback) {
  if (!callback) {
    callback = options;
    options = null;
  }
  return cp.exec('git ' + command, this._getOpt(options));
};

Git.prototype._getOpt = function(opt) {
  opt || (opt = {});
  opt.env || (opt.env = process.env);
  opt.env.GITX_KEY = this.key;
  opt.env.GIT_SSH = path.join(__dirname, 'ssh.js');
  return opt;
};
