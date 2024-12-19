// let itCompany = {
//   'Company name': 'IT Comp & Partners',
//   opened: 1999,
//   companyCode: 399504678,
//   employees: 342,
//   ceo: 'Lars Gustafsson',
//   nvo: false,
//   workingLocation: ['Sweden', 'Denmark', 'Norway', 'Finland'],
//   activityAreas: ['Software development', 'Website design', 'Data management', 'Cloud computing'],
//   contacts: {
//     phone: 869947158,
//     email: 'ITcompandPartners@hotmail.com',
//     address: {
//       country: 'Sweden',
//       city: 'Stockholm',
//       street: 'Vasterlanggatan 66',
//       apartment: 7,
//     },
//   },
//   getAddress: function() {
//     return `Our address is: ${this.contacts.address.country}, ${this.contacts.address.city}, ${this.contacts.address.street}, ${this.contacts.address.apartment}`
//   },
//   // setNVOToTrue: function() {
//   //   this.nvo = true;
//   // },
//   // setNVOToFalse: function() {
//   //   this.nvo = false;
//   // },
//   setNVOtoTrueOrFalse: function (){
//     if(this.nvo === true){
//       return this.nvo = false;
//     }
//     else if(this.nvo === false){
//       return this.nvo = true;
//     }
//     // return this.nvo = !this.nvo
//   }, operatesIn: function(){
//     let result = '';
//     for(let i = 0; i < this.workingLocation.length; i++){
//       result += this.workingLocation[i];
//       if (i < this.workingLocation.length - 1){
//         result += ', ';
//       }
//     }
//     return result 
//   },
//     // 
//     //  return `We have offices in ${this.workingLocation}`

//     //chat gpt bet nezinau ar geras atrodo keistai operatesIn: function () {
//     // let locationsString = ''; // Initialize an empty string
//     // this.workingLocation.forEach(function (location, index) {
//     //   locationsString += location;
//     //   if (index < this.workingLocation.length - 1) {
//     //     locationsString += ', ';
//     //   }
//     // }.bind(this)); // Bind 'this' to the regular function
//     // console.log(locationsString); // Log the final string
//   // }
//   whatWeDo: function(){
//     let resultWhatWeDo = '';
//     for(let i = 0; i < this.activityAreas.length; i++){
//      resultWhatWeDo += this.activityAreas[i]
//      if(i < this.activityAreas.length -1){
//       resultWhatWeDo += ', '
//      }
//     }
//     return resultWhatWeDo
//   },
//   newLocation: function(country) {
//     this.workingLocation.push(country)
//     return this.workingLocation
//   },
//   newActivityArea: function(newArea){
//     this.activityAreas.push(newArea)
//     return this.activityAreas
//   },
//   expelCountry: function(deleteCountry){
//     this.workingLocation = this.workingLocation.filter(function(location){
//     return location !== deleteCountry;
//   })},
//   discontinue: function(area){
//     this.activityAreas = this.activityAreas.filter(function(work){
//     return work !== area;
//   })},
  
// }


// console.log(itCompany.getAddress());
// console.log(itCompany.operatesIn());
// console.log(itCompany.whatWeDo());
// console.log(itCompany.workingLocation);
// console.log(itCompany.newLocation('Spain'));
// console.log(itCompany.workingLocation);
// console.log(itCompany.activityAreas);
// console.log(itCompany.newActivityArea('Cybersecurity'));
// console.log(itCompany.activityAreas);
// console.log(itCompany.workingLocation);
// console.log(itCompany.expelCountry('Norway'));
// console.log(itCompany.workingLocation);
// console.log(itCompany.activityAreas);
// console.log(itCompany.discontinue('Website design'));
// console.log(itCompany.activityAreas);

let manufacturingCompany = {}
manufacturingCompany['Company name'] = 'Best Manufacturing LTD.';
manufacturingCompany.opened = 1999;
manufacturingCompany.companyCode = 399504678;
manufacturingCompany.employees = 342;
manufacturingCompany.ceo = 'Lars Gustafsson';
manufacturingCompany.nvo = false;
manufacturingCompany.workingLocation = ['Sweden', 'Denmark', 'Norway', 'Finland'];
manufacturingCompany.activityAreas = ['Software development', 'Website design', 'Data management', 'Cloud computing'];
manufacturingCompany.contacts = {};
manufacturingCompany.contacts.phone = 869947158;
manufacturingCompany.contacts.email = 'ITcompandPartners@hotmail.com';
manufacturingCompany.contacts.address = {}
manufacturingCompany.contacts.address.country = 'Sweden';
manufacturingCompany.contacts.address.city = 'Stockholm';
manufacturingCompany.contacts.address.street = 'Vasterlanggatan 66';
manufacturingCompany.contacts.address.apartment = 7

function addressToString(){
  let result = `${manufacturingCompany.contacts.address.country}, ${manufacturingCompany.contacts.address.city}, ${manufacturingCompany.contacts.address.street}, ${manufacturingCompany.contacts.address.apartment}.`
  return result
}
console.log(addressToString())

function changeNvoToTrue(){
  manufacturingCompany.nvo = true;
  
}
function changeNvoToFalse(){
  manufacturingCompany.nvo = false;
  
}

function invertNVO(){
  if (manufacturingCompany.nvo === false){
    manufacturingCompany.nvo = true
  }
  else if (manufacturingCompany.nvo === true){
    manufacturingCompany.nvo = false
  }
}

function changeToString(){
  let result = `${manufacturingCompany.workingLocation}`
  return result
}

console.log(changeToString())

function changeToString2(){
  let result = `${manufacturingCompany.activityAreas}`
  return result
}

console.log(changeToString2())

let newLocation = function(location){
  manufacturingCompany.workingLocation.push(location)
}

console.log(manufacturingCompany.workingLocation)
newLocation('Spain')
console.log(manufacturingCompany.workingLocation)

let newWorkingArea = function(newArea){
  manufacturingCompany.activityAreas.push(newArea)
}

console.log(manufacturingCompany.activityAreas)
newWorkingArea('Cybersecurity')
console.log(manufacturingCompany.activityAreas)

let deletesCountry = function(deleteC){
  manufacturingCompany.workingLocation = manufacturingCompany.workingLocation.filter(function (location){
  return location !== deleteC
});
};

console.log(manufacturingCompany.workingLocation)
deletesCountry('Finland')
console.log(manufacturingCompany.workingLocation)


let deletesWorkingArea = function(deleteArea){
  manufacturingCompany.activityAreas = manufacturingCompany.activityAreas.filter(function (location){
  return location !== deleteArea
});
};

console.log(manufacturingCompany.activityAreas)
deletesWorkingArea('Website design')
console.log(manufacturingCompany.activityAreas)






