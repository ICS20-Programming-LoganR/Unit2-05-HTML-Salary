// Created by: Logan Rodriguez
// Created on: Mar 2022
// This file contains the JS functions for index.html

const TAX_RATE = 0.1805
function calculate () {
  //function for determining the users payout

  //get their hours from the text field
  let Hours = parseInt(document.getElementById("hours").value)
	// get their hourly rate from the text field
  let Rate = parseInt(document.getElementById("hourly-rate").value)
  // get their total from the hourly rate and hours
  let Total = (Hours * Rate)
  // get the amount taken
  let Tax = (Total * TAX_RATE. toFixed(2))
  // display information back to user
  let Payment = (Total - Tax. toFixed(2))
  document.getElementById('information').innerHTML = "Total = $" + (Payment) + " Amount payed to the government = $" + (Tax)
  
}