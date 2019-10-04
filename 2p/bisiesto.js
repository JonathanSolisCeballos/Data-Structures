class LeapYear {
  constructor(year) {
    this.year = year
  }
  bisiesto() {
    /* if(year % 4 === 0 ){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true
            }
            else return false
        }else return true
    }else return false */
    return (this.year % 4 === 0) ? (this.year % 100 === 0) ? (this.year % 400 === 0) ? true : false : true : false;
  }
}

let year1 = new LeapYear(1996)
let year2 = new LeapYear(2020)
let year3 = new LeapYear(2076)
let year4 = new LeapYear(3000)
console.log(year1.bisiesto(), year2.bisiesto(), year3.bisiesto(), year4.bisiesto())

let year5 = new LeapYear(1896)
let year6 = new LeapYear(1900)
let year7 = new LeapYear(2000)
let year8 = new LeapYear(2004)
let year9 = new LeapYear(2100)
console.log(year5.bisiesto(), year6.bisiesto(), year7.bisiesto(), year8.bisiesto(), year9.bisiesto())