class Calendar{
  JanuaryFirst (year) {
    return ((year + Math.floor((year - 1)/4) - Math.floor((year-1)/100) + Math.floor((year-1)/400)) % 7)
  }
}