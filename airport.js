$(function() {
  var date = new Date();
  var minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
  $('#element_2').datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: minDate,
    beforeShowDay: $.datepicker.noWeekends
  });

});
