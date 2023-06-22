// $('.p-step__sliderList').slick({
//   autoplay: true,
//   dots: true,
//   // スライドの最後まできたら次には進まない
//   infinite: false,
//   speed: 300,
//   // 通常時はスライドは4枚表示、4枚ずつスライド
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         // 1024px以下の時、スライドは3枚表示、3枚ずつスライド
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         // スライドの最後まで来たら最初に戻る
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         // 600px以下の時、スライドは2枚表示、2枚ずつスライド
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// });

$('.p-step__sliderList').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});