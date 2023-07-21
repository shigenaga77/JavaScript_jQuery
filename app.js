// // $(function(){
// //   $('.box1').slideDown();
// // });

// $(function(){
//   $('.box1').hide();
//   // $('.box1').css({'background-color': '#0000ff'});
// });

$(function(){
  $('.box1').slideDown(2000,function(){
    $('.box1').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});