$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#invertedcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
});
