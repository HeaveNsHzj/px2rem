'use strict';

var assert = require('assert');
var Px2rem = require('../lib/px2rem');
var path = require('path');
var fs = require('fs');

describe('should work with @2x filter origin css file', function () {
  var px2remIns = new Px2rem({
    filter: function(declaration) {
      var pxReg = /\b(\d+(\.\d+)?)px\b/;
      //var pxReg = /\b1px\b/;
      if (
          /border(?:-(top|left|right|bottom))?$/.test(declaration.property)
          && pxReg.test(declaration.value)
      ) {
        var n = +RegExp.$1;
        console.log(n)
        return n > 1;
      }
      return true;
    }
  });
  var srcPath = path.join(__dirname, 'assets/test.2x.filter.css');
  var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});

  it('[default] should output right rem file', function () {
    var expectedPath = path.join(__dirname, 'output/default.rem.css');
    var outputText = px2remIns.generateRem(srcText);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @1x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.1x.css');
    var outputText = px2remIns.generateThree(srcText, 1);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @2x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.2x.css');
    var outputText = px2remIns.generateThree(srcText, 2);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @3x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.3x.css');
    var outputText = px2remIns.generateThree(srcText, 3);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });
});

describe('should work with @2x origin css file', function () {
  var px2remIns = new Px2rem(/*{remUnit: 75, baseDpr: 2}*/);
  var srcPath = path.join(__dirname, 'assets/test.2x.css');
  var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});

  it('[default] should output right rem file', function () {
    var expectedPath = path.join(__dirname, 'output/default.rem.css');
    var outputText = px2remIns.generateRem(srcText);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @1x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.1x.css');
    var outputText = px2remIns.generateThree(srcText, 1);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @2x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.2x.css');
    var outputText = px2remIns.generateThree(srcText, 2);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @3x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.3x.css');
    var outputText = px2remIns.generateThree(srcText, 3);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });
});

describe('should work with @3x origin css file', function () {
  var px2remIns = new Px2rem({remUnit: 112.5, baseDpr: 3});
  var srcPath = path.join(__dirname, 'assets/test.3x.css');
  var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});

  it('[default] should output right rem file', function () {
    var expectedPath = path.join(__dirname, 'output/default.rem.css');
    var outputText = px2remIns.generateRem(srcText);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @1x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.1x.css');
    var outputText = px2remIns.generateThree(srcText, 1);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @2x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.2x.css');
    var outputText = px2remIns.generateThree(srcText, 2);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });

  it('should output right @3x file', function () {
    var expectedPath = path.join(__dirname, 'output/default.3x.css');
    var outputText = px2remIns.generateThree(srcText, 3);
    assert.equal(outputText, fs.readFileSync(expectedPath, {encoding: 'utf8'}));
  });
});
