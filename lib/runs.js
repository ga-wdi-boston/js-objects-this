'use strict'

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],

  totalDistance: function () {
    // define an auxillary variable
    const runs = this.runs

    // define an accumulator
    let result = 0

    // work on accumulator
    for (let i = 0; i < runs.length; i++) {
      result += runs[i].distance
    }

    // return accumulator
    return result
  },

  longestRun: function () {
    // define an auxillary variable
    const runs = this.runs

    let result = runs[0].distance

    for (let i = 1; i < runs.length; i++) {
      if (runs[i].distance > result) {
        result = runs[i].distance
      }
    }

    return result
  },

  averageSpeed: function () {
    // define an auxillary variable
    const runs = this.runs

    let totalTime = 0

    for (let i = 0; i < runs.length; i++) {
      totalTime += runs[i].timeTaken
    }

    return this.totalDistance() / totalTime
  }
}

module.exports = mcFaceRuns
