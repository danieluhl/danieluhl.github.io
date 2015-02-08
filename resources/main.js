
$(function(){
  var taglines = [
    'The Love Awakens',
    'Age of Ultralove',
    'Love Genisys',
    'The Secret Wedding',
    'One dream can change the world',
    'What could go wrong?',
    'Back to SoCal!'
  ];

  var $tagline = $('.tagline');
  var taglineIndex = 0;
  var $doc = $(document);
  var $win = $(window);

  var rotateInterval = setInterval(function(){
    $tagline.fadeOut(200, function(){
      $tagline.html(taglines[taglineIndex]);
      $tagline.fadeIn(200);
    });

    taglineIndex = (taglineIndex + 1)%(taglines.length + 1);
  }, 8000);

  // heading tagline
  $doc.on('click', '.tagline', function(){
    clearInterval(rotateInterval);
  });

  // resize event
  var map = $('#weddingMap');
  function resizeMap() {
    map.width($win.width() - ($win.width() * .1 + 20));
    map.height($win.height() - ($win.height() * .33));
  }
  resizeMap();
  var debounceResize = debounce(resizeMap, 200);
  $win.on('resize', debounceResize);

  


  // color clicker thing
  $doc.on('click', '.colorButton', function(){
    var text = $('.colorIn').val();
    var result = '#';
    for(var i = 0; i < text.length; i++){
      result = result + text.charCodeAt(i).toString(16);
    }
    $('.colorResult').css('background', result).html(result);
  });

  $('.colorIn').keyup(function(event){
    if(event.keyCode == 13){
      $('.colorButton').click();
    }
  });


  // show buttons based on device
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1;
  if(isAndroid) {
    $('.map-android').show();
  } else {
    $('.map-apple').show();
  }
});