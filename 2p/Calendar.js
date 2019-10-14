(function() {
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

    printCalendar(month, year) {}

    todayPlus(day, nDays) {
      return (day + nDays) % 7;
    }
  }

  let cal = new Calendar();
  console.log(cal.firstDayYear(2019));
  console.log(cal.todayPlus(1, 52));
})();
