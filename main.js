$(function () {

  window.onbeforeunload = function () {
     window.scrollTo(0,0);
 };
  var scrollEvent = false;
  var htmlIndex = 0;
  // console.log(htmlIndex);

  $('html, body').on('mousewheel', function (e) {

    e.preventDefault();

    var m = e.originalEvent.wheelDelta;
    // console.log("wheel delta = " + m);
    var windowHeight = $('#window1').height();

    if( m > 1 && htmlIndex >=1 && scrollEvent == false ){
      console.log("old count = " + htmlIndex);
      scrollEvent = true;
      htmlIndex --;
      console.log("new count = " + htmlIndex);
      $('html, body').stop().animate( { scrollTop: windowHeight * htmlIndex},
        {duration: 900, complete: function () {
          scrollEvent = false;}
        });
      } else if (m < 1 && htmlIndex < 3 && scrollEvent == false) {
        console.log("old count = " + htmlIndex);
        scrollEvent = true;
        htmlIndex ++;
        console.log("new count = " + htmlIndex);
        $('html, body').stop().animate( { scrollTop : windowHeight * htmlIndex},
        {duration:900, complete: function() {
          scrollEvent = false;
        }})
      }



  })

});
