jQuery(function () {
    // ヘッダーの高さを取得
    let height = jQuery(".header").height();

    //ヘッダーの高さ分だけコンテンツを下げる
    // jQuery("body").css("margin-top", height); //10pxだけ余裕をもたせる

    // ナビゲーションリンクをクリックしたら、スクロールする

    jQuery('a[href^="#"]').click(function () {
        // headerの高さを指定
        let headerHeight = height + 50;
        // animateの速さを指定
        let speed = 1000;
        // クリックされた要素のhref属性を取得
        let href = jQuery(this).attr("href");

        // hrefのurl https://musica.local/を削除
        const deleteHttps = 'http://local/index.html/#';
        let scrollTarget = href.replace(deleteHttps, '');

        // href属性が#かつ空白であれば、'html',そうでなければ、変数hrefを格納
        let target = jQuery(href == "#" || href == "" ? "html" : scrollTarget);
        // ヘッダーの高さを引いたtargetの座標を取得
        let position = target.offset().top - headerHeight;

        // html,bodyをアニメーション
        jQuery("html, body").animate({
                scrollTop: position,
            },
            speed,
            "swing"
        );

        // ハンバーガーメニューを閉じる
        // jQuery(".collapse").collapse("hide");
        // return false;
    });

    // 終了
    // console.log('main.js,read ok!');
});
// $(function(){
//   // #で始まるa要素をクリックした場合に処理
//   $('a[href^="#"]').click(function(){
//     // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
//     var adjust = 0;
//     // スクロールの速度（ミリ秒）
//     var speed = 1000;
//     // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
//     var href= $(this).attr("href");
//     // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
//     var position = target.offset().top + adjust;
//     // スムーススクロール linear（等速） or swing（変速）
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });