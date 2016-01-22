'use strict';

module.exports = {
  name: "Person McFace",
  email: "wdi@personmcface.com",
  runs : [
    {
      date: "2015-05-25 15:00",
      distance: 1200,
      timeTaken: 600
    },
    {
      date: "2015-05-25 15:00",
      distance: 1400,
      timeTaken: 800
    }
  ],

  totalDistance: function() {
    // define an accumulator
    let result = 0;
    // work on accumulator
    for (let i = 0; i < this.runs.length; i++) {
      result += this.runs[i].distance;
    }
    // return accumulator
    return result;
  },

  longestRun: function() {
    let result = this.runs[0].distance;

    for (let i = 1; i < this.runs.length; i++) {
      if (this.runs[i].distance > result) {
        result = this.runs[i].distance;
      }
    }

    return result;
  },

  averageSpeed: function() {
    let totalTime = 0;

    for (let i = 0; i < this.runs.length; i++) {
      totalTime += this.runs[i].timeTaken;
    }

    return this.totalDistance() / totalTime;
  }
};
