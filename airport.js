$(function() {
  $("#calendar_2").datepicker({
    beforeShowDay: function(date) {
      var today = new Date().getDate(),
        tomorrow = today + 2;
      // date is not today, tomorrow, or week-end
      if ((today == date.getDate() || tomorrow == date.getDate()) || date.getDay() % 6 == 0) {
        return [false, "CSSclass", "disabled"];
      } else {
        return [true, '', ''];
      }
    }
  })
});
