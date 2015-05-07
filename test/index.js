'use strict';

require('should');
var path = require('path');
var rimraf = require('rimraf');
var gitx = require('..');

describe('gitx', function() {
  var git = gitx(path.join(__dirname, 'id_rsa'));
  var repo = path.join(process.cwd(), 'test-id');

  afterEach(function(done) {
    rimraf(repo, done);
  });

  it('should spawn', function(done) {
    git.spawn(['clone', 'git@github.com:popomore/test-id.git'], {stdio: 'inherit'})
      .once('error', done)
      .once('close', done.bind(null, null));
  });

  it('should exec', function(done) {
    git.exec('clone git@github.com:popomore/test-id.git', {stdio: 'inherit'}, done);
  });

  it('should exec without options', function(done) {
    git.exec('clone git@github.com:popomore/test-id.git', done);
  });

  it('should throw when private key is not found', function() {
    (function() {
      gitx('not-exists');
    }).should.throw('not-exists not exists');
  });
});
