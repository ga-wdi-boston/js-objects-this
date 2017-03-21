'use strict'

const mealObj = {
  name: 'Lauren',
  age: 26,
  calorieTarget: 2000,
  meals: [
    {
      title: 'Breakfast',
      date: '2016-07-24',
      description: 'Smoothie',
      calories: 300,
    },
    {
      title: 'Lunch',
      date: '2016-07-25',
      description: 'Roasted Veggies',
      calories: 500,
    },
    {
      title: 'Dinner',
      date: '2016-07-25',
      description: 'Black Bean Burger',
      calories: 800,
    },
  ],
  caloriesEatenOn: function (date) {
    let dateCalories = 0;
    for (let i = 0; i < this.meals.length; i++) {
      if (this.meals[i].date === date) {
        dateCalories += this.meals[i].calories;
      }
    }

    return dateCalories;
  },

  avgDailyCalories: function () {
    let totalCalories = 0;
    for (let i = 0; i < this.meals.length; i++) {
      totalCalories += this.meals[i].calories;
    }

    // Total days
    let dayCount = 0;
    let uniqueDays = [];
    for (let j = 0; j < this.meals.length; j++) {
      if (uniqueDays.indexOf(this.meals[j].date) === -1) {
        uniqueDays.push(this.meals[j].date);
      }
    }

    dayCount = uniqueDays.length;

    let avgCalories = Math.floor(totalCalories / dayCount);

    return avgCalories;
  },

  onTrack: function () {
    let isOnTrack = false;

    if (this.avgDailyCalories() <= this.calorieTarget) {
      isOnTrack = true;
    }

    return isOnTrack;
  },
};

module.exports = mealObj
