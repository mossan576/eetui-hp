$(function(){
  $(".SNS__btn").on("mouseover",function(){
    $(this).css({"background-color": "gray"});
  }).on("mouseout", function(){
    $(this).css({"background-color": "rgb(20, 20, 20)"});
  })
})