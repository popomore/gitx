#Gitx 

[![NPM version](https://img.shields.io/npm/v/gitx.svg)](https://npmjs.org/package/gitx)
[![Build Status](https://img.shields.io/travis/popomore/gitx.svg)](https://travis-ci.org/popomore/gitx)
[![AppVeyor Status](https://img.shields.io/appveyor/ci/popomore/gitx/master.svg)](https://ci.appveyor.com/project/popomore/gitx)
[![Coverage Status](https://img.shields.io/coveralls/popomore/gitx.svg)](https://coveralls.io/r/popomore/gitx)
[![NPM downloads](http://img.shields.io/npm/dm/gitx.svg)](https://npmjs.org/package/gitx)

Use git with custom identity file

---

## Install

```
$ npm install gitx -g
```

## Usage

```
$ gitx -i ~/.ssh/id_rsa clone git@github.com:popomore/test-id.git
```

## API

```
var git = require('gitx')(process.env.HOME + '/.ssh/id_rsa');

// use child_process.spawn
git.spawn(['clone', 'git@github.com:popomore/test-id.git'], {stdio: 'inherit'});

// use child_process.exec
git.exec('clone git@github.com:popomore/test-id.git', {stdio: 'inherit'});
```

## LICENSE

Copyright (c) 2015 popomore. Licensed under the MIT license.
