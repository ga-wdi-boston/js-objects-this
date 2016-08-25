'use strict';

let mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],

  totalDistance: function () {
    // access the runs collection and sum all the distances
    // for each run member (object)
    let result = 0;

    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].distance;
    }

    return result;
  },

  longestRun: function () {
    // access the runs collection and find the run with the longest distance
    let result = 0;

    for (let i = 0, max = this.runs.length; i < max; i++) {
      let currentDistance = this.runs[i].distance;

      if (currentDistance > result) {
        result = currentDistance;
      }
    }

    return result;
  },

  averageSpeed: function () {
    // we already have totalDistance
    // we could make a new method totalTimeTaken

    let totalTimeTaken = 0;

    for (let i = 0, max = this.runs.length; i < max; i++) {
      totalTimeTaken += this.runs[i].timeTaken;
    }
    // totalDistance / totalTimeTaken
    return this.totalDistance() / totalTimeTaken;
  },
};

module.exports = mcFaceRuns;
