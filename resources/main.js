
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
    map.width($win.width() - ($win.width() * .33));
    map.height($win.height()/2);
  }
  resizeMap();
  var debounceResize = debounce(resizeMap, 200);
  $win.on('resize', debounceResize);


});