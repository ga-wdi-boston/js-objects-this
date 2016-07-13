'use strict';

const chai = require('chai');
const expect = chai.expect;

const runs = require('../lib/runs');

describe('runs', function () {

  describe('total distance', function () {

    it('has the correct length', function () {
      expect(runs.totalDistance()).to.equal(2600);
    });

  });

  describe('longest run', function () {

    it('has the correct length', function () {
      expect(runs.longestRun()).to.equal(1400);
    });

  });

  describe('average speed', function () {

    it('has the correct value', function () {
      expect(runs.averageSpeed().toLocaleString('en-US')).to.equal('1.857');
    });

  });

});
