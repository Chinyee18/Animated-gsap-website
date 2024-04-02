

// --- Creative AI image
$( ".ca-img" ).on( "mouseover", function() {
  $("#ca-img-3").css({
    transform: 'translate(5px, 20px)',transition:'all .3s ease-out'
  });
  $("#ca-img-2").css({
    transform: 'translate(-20px, 0px)',transition:'all .3s ease-out'
  });
} );
$( ".ca-img" ).on( "mouseout", function() {
  $("#ca-img-3").css({
    transform: 'translate(-20px, -20px)',transition:'all .3s ease-out'
  });
  $("#ca-img-2").css({
    transform: 'translate(0px, 0px)',transition:'all .3s ease-out'
  });
} );

// --- Direct communication images
$( "#dc_1" ).on( "mouseover", function() {
  $("#dc_1").css({
    transform: 'translate(5px, -20px) scale(1.1)',transition:'all .3s ease-out',
  });
} );
$( "#dc_1" ).on( "mouseout", function() {
  $("#dc_1").css({
    transform: 'translate(-10px, 0px)',transition:'all .3s ease-out'
  });
} );

$( "#dc_3" ).on( "mouseover", function() {
  $("#dc_3").css({
    transform: 'translate(-20px, -20px) scale(1.1)',transition:'all .3s ease-out',
  });
} );
$( "#dc_3" ).on( "mouseout", function() {
  $("#dc_3").css({
    transform: 'translate(10px, 0px)',transition:'all .3s ease-out'
  });
} );

$( "#qr" ).on( "mouseover", function() {
  $("#qr").css({
    transform: 'translate(-10px, 0px) scale(1.1)',transition:'all .3s ease-out',
  });
} );
$( "#qr" ).on( "mouseout", function() {
  $("#qr").css({
    transform: 'translate(10px, 0px)',transition:'all .3s ease-out'
  });
} );

// Data Analytics

$( "#da_1" ).on( "mouseover", function() {
  $("#da_2").css({
    transform: 'translate(-10px, -10px) scale(1.1)',transition:'all .3s ease-out',
  });
} );
$( "#da_1" ).on( "mouseout", function() {
  $("#da_2").css({
    transform: 'translate(10px, 0px)',transition:'all .3s ease-out'
  });
} );

$( "#da_1" ).on( "mouseover", function() {
  $("#da_1").css({
    transform: 'translate(-10px, 0px) scale(1.15)',transition:'all .3s ease-out',
  });
} );
$( "#da_1" ).on( "mouseout", function() {
  $("#da_1").css({
    transform: 'translate(10px, 6px)',transition:'all .3s ease-out'
  });
} );



