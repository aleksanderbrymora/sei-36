const allegies = {
  scorecard: {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
  },
  diagnosis: function(score){
    const list =[]
    const allergyValues = Object.keys(this.scorecard)
    for (let i = 0; i < allergyValues.length; i++) {
      if (score >= allergyValues[i]) {
        list.push(this.scorecard[allergyValues[i]])
        score = allergyValues[i]
      }
    }
    if (list.length > 0) {
      console.log(`This person has ${list.length} allegies`)
      console.log(`The allegies are: ${list.join(', ')}`)

    } else {
      console.log('This person has no allergies')
    }
  },
};


allergies.diagnosis(34);
allergies.diagnosis(8);
