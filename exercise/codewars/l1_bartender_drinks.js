function getDrinkByProfession(param){
  const profession = param.toLowerCase()
  const drinkByProfession = {
    "jabroni":  "Patron Tequila",
    "school counselor": "Anything with Alcohol",
     "programmer":   "Hipster Craft Beer",
     "bike gang member":  "Moonshine" ,
     "politician":  "Your tax dollars" ,
     "rapper":  "Cristal" 
  } 
        
 return drinkByProfession[profession] || "Beer" 

}