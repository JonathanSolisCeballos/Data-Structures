(function() {
  const Matrix = require("./Matrix/Matrix");
  class Calendar {
    firstDayYear(year) {
      //0 = sunday, 6 = saturday
      return (
        (year +
          Math.floor((year - 1) / 4) -
          Math.floor((year - 1) / 100) +
          Math.floor((year - 1) / 400)) %
        7
      );
    }
    isLeapYear(year) {
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            return true;
          } else return false;
        } else return true;
      } else return false;
    }

    printCalendar(month, year) {
      let firstDayofMonth = new Date(year, month).getDay();
      let matrixMonth = new Matrix(6, 7);
      for (let i = 1; i < this.daysInMonth(); i++) {}
      return matrixMonth.getMatrix();
    }

    daysInMonth(month, year) {
      return 32 - new Date(year, month, 32).getDate();
    }

    todayPlus(day, nDays) {
      return (day + nDays) % 7;
    }
  }

  let cal = new Calendar();
  // console.log(cal.firstDayYear(2019));
  // console.log(cal.todayPlus(1, 52));
  console.table(cal.printCalendar());
})();
