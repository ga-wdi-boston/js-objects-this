'use strict';

let user = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs : [
    {
      date: '2016-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2016-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],

  totalDistance : function() {
    let total = 0;
    for (let i = 0; i < this.runs.length; i++) {
      total += this.runs[i].distance;
    }
    return total;
  },
  longestRun : function() {
    let runsDistances = [];
    for (let i = 0; i < this.runs.length; i++) {
      runsDistances[i] = this.runs[i].distance;
    }

    return runsDistances.sort().reverse()[0];
  },
  averageSpeed : function() {
    let speeds = [];
    let speedTotal = 0;
    for (let i = 0; i < this.runs.length; i++) {
      let distance = this.runs[i].distance;
      let timeTaken = this.runs[i].timeTaken;
      let speed = distance/timeTaken;
      speeds[i] = speed;
      // can be simplified down to:
      // speeds[i] = this.runs[i].distance / this.runs[i].timeTaken
    }

    for (let i = 0; i < speeds.length; i++) {
      speedTotal += speeds[i];
    }

    return speedTotal/speeds.length;
  }
};

// console.log(user.averageSpeed());
