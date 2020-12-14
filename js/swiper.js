// <!-- ファーストビュー -->
jQuery(function ()
{
    // ここに処理を書く
    var swiper1 = new Swiper('.first-view-swiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        speed: 3000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
    var swiper2 = new Swiper('.reccomend-swiper', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    //   },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        // loop:true,
    });
});



/*HTML テンプレート
<!-- スライダーのメインコンテナの div 要素 -->
<div class="swiper-container"> 
  <!-- ラッパーの（スライドを囲む） div 要素 -->
  <div class="swiper-wrapper"> 
    <!-- それぞれのスライドの div 要素 -->
    <div class="swiper-slide"><img src="images/sample_01.png" alt=""></div>
    <div class="swiper-slide"><img src="images/sample_02.png" alt=""></div>
    <div class="swiper-slide"><img src="images/sample_03.png" alt=""></div>
  </div>
  <!-- ページネーションの div 要素 -->
  <div class="swiper-pagination"></div>
 
  <!-- ナビゲーションボタンの div 要素-->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
 
  <!-- スクロールバーの div 要素 -->
  <div class="swiper-scrollbar"></div>
</div>
*/