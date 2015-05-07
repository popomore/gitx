#!/usr/bin/env node

'use strict';

// 自定义 ssh 可以指定私钥
var spawn = require('child_process').spawn;

var args = [
  '-o', 'StrictHostKeyChecking=no',
  '-i', process.env.GITX_KEY
].concat(process.argv.slice(2));
var opt = {
  stdio: 'inherit'
};

spawn('ssh', args, opt);
