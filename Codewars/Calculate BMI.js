function bmi(weight, height) {
    let bmi = weight/(height**2)
      if(bmi <= 18.5) return "Underweight" 
      if(bmi > 18.5 && bmi <= 25) return 'Normal' 
      if(bmi > 25 && bmi <= 30) return "Overweight" 
      return "Obese";
  }

  console.log(bmi(180, 1.80))
//   , "Normal");