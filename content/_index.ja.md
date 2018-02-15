+++
title="Monaca ドキュメント"
type="homepage"
+++

<style>
body {
    width: 100%;
    height: 100%;
}

#sidebar {
    display: none;
}

#body{
    margin: 0;
    background-color: #fff;
}

#body-inner {
     width: 100%;
}

#body .padding {
    padding: 0;
}
#body img {
    float: left;
    margin: 0 0 16px 0;
}

nav {
    width: 100%;
    height: 50px;
}

nav > ul {
    margin: 0 auto;
    list-style-type: none;
    padding: 12px 0;
}


nav > ul > li {
    display: inline;
}

ul > li > a {
    font-size: 13px;
    padding: 0 10px;
}

nav#top-bar {
    background-color: #ffffff;
    border-bottom: 1px solid #CCC;
}

nav#top-bar > img {
    margin: 10px 20px;
}

nav#top-bar > ul {
    width: auto;
    float: right;
    margin-right: 220px;
}

nav#top-bar > li > a {
    color: #fdfdfd;
}

nav#top-menu {
    background-color: #2687ea;
    text-align: center; 
}

nav#top-menu > ul {
    clear: both;
    margin: 0 auto;
    display: table;
}

ul#top-menu > li > a{
    color: #FFF;
}

div.top-body{
    width: 1020px;
    height: auto;
    margin: 0 auto;
    padding: 0px 23px;
}

div.top-body > p {
    padding: 74px 0;
}

div.container {
    margin-top: 50px;
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-start;
}

div.item {
    max-width: 320px;
    margin-bottom: 30px;
    padding-right: 20px;
}

div.item > h3 {
    margin: 0;
    font-family: Meiryo;
    color:  #35527c;
    font-size: 18px;/* Approximation due to font substitution */
    font-weight: 700;
    text-align: left;
    border: none;
}

div.item > p {
    margin: 0;
    padding-top: 16px;
    font-family: Meiryo;
    color:  #333333;
    font-size: 12px;/* Approximation due to font substitution */
    font-weight: 400;
    text-align: left;
}

div.item > img {
    margin: 0;
}

.top-search {
  position: absolute;
  top: 5px;
  right: 20px;
  @media screen and (max-width: 825px) {
    right: 50px;
  }
}

#top-search input[type=search] {
  background-color: #fff;
	width: 15px;
	padding-left: 10px;
	color: transparent;
	cursor: pointer;
}
#top-search input[type=search]:hover {
	background-color: #fff;
}
#top-search input[type=search]:focus {
	width: 170px;
	padding-left: 32px;
	color: #000;
	background-color: #fff;
	cursor: auto;
}
#top-search input:-moz-placeholder {
	color: transparent;
}
#top-search input::-webkit-input-placeholder {
	color: transparent;
}

input[type=search] {
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 14px;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none;
}


input[type=search] {
	background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
	border: solid 1px #ccc;
	padding: 9px 10px 9px 32px;
	width: 170px;

	-webkit-border-radius: 10em;
	-moz-border-radius: 10em;
	border-radius: 10em;

	-webkit-transition: all .5s;
	-moz-transition: all .5s;
	transition: all .5s;
}
input[type=search]:focus {
	background-color: #fff;
	//border-color: #66CC75;

  border-color: $monaca-blue;

	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	box-shadow: 0 0 5px rgba(109,207,246,.5);
}


input:-moz-placeholder {
	color: #999;
}
input::-webkit-input-placeholder {
	color: #999;
}

div.bottom-menu {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #f8f6f2;
}

ul.bottom-menu {
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-start;
    list-style-type: none;
    text-align: center;
    padding: 0 150px;
    margin: 30px 0 30px 0;
    border-top: 1px solid #CCC;
}

ul.bottom-menu > li {
    height: 95px;
    width: 15%;
    line-height: 95px;
}

ul.bottom-menu > li > a {
    color: #333;
}

footer.footline{
    margin: 0;
    border-top: 0px;
}
footer.footline > p {
    margin: 0;
    line-height: 30px;
    text-align: center;
    font-size: 11px;
    color: #999;
    position: fixed;
    height: 30px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #FFF;
    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
    border: 0px;
    opacity: 0.9
}

#body-inner {
    margin-bottom:0;
}

.sub-menu-parent {
    position: relative;
}

ul.sub-menu {
    position: absolute;
    visibility: hidden;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(-2em);
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
    border: 1px solid #ebebeb;
    background: #FFF;
    border-radius: 3px;
    width: 167px;
    padding: 5px 0;
    margin: 5px 0;
    list-style-type: none;
    text-align: left;
}

ul.sub-menu > li > a {
    color: #333;
}

ul.sub-menu > li:hover {
    background-color: #ccc;
}

.sub-menu-parent:hover ul.sub-menu {
    visibility: visible; /* shows sub-menu */
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s; /* this removes the transition delay so the menu will be visible while the other styles transition */
}

span.external {
  background: transparent url(/images/common/top_page/external.png) no-repeat right top;
  background-size: 11px 11px;
  padding-right: 15px;
}

</style>

<nav id="top-bar">
    <img src="/images/common/header_logo_docs.png">
    <ul>
        <li><a href="https://community.onsen.io/">コミュニティ</a></li>
        <li><a href="faq">FAQ</a></li>
        <li>
            <a href="https://ja.monaca.io/">
                <span class="external">MONACA</span>
            </a>
        </li>
    </ul>
    <div class="top-search" id="top-search">
        <input type="search" id="top-search-doc" placeholder="Search Keyword">
    </div>
</nav>

<div class="top-body">
    <div class="container">
        <div class="item">
            <a href="products_guide"><img src="/images/common/top_page/img_samples1.jpg"></a>
            <h3>Monacaを学ぶ</h3>
            <p>プロジェクトの作成からアプリの申請/配布まで解説しています。</p>
        </div>
        <div class="item">
            <a href="tutorials"><img src="/images/common/top_page/img_build1.jpg"></a>
            <h3>チュートリアル</h3>
            <p>Monacaでの開発を効率的にはじめるためのチュートリアルです。</p>
        </div>
        <div class="item">
            <a href="sampleapp/samples"><img src="/images/common/top_page/img_components1.jpg"></a>
            <h3>テンプレート</h3>
            <p>開発を加速させる便利なテンプレート集です。</p>
        </div>
        <div class="item">
            <a href="sampleapp/samples"><img src="/images/common/top_page/img_samples2.jpg"></a>
            <h3>サンプルアプリ</h3>
            <p>アプリ開発の参考になるゲームやチャットなどのソースコードを提供しています。</p>
        </div>
        <div class="item">
            <a href="reference"><img src="/images/common/top_page/img_debug1.jpg"></a>
            <h3>API リファレンス</h3>
            <p>カメラ操作、位置情報などネイティブ機能にアクセスするプラグインのAPIリファレンスです。</p>
        </div>
        <div class="item">
            <a href="sampleapp/tips"><img src="/images/common/top_page/img_samples3.jpg"></a>
            <h3>開発のヒント</h3>
            <p>音楽の再生、データベースの利用方法など開発テクニックを紹介しています。</p>
        </div>
        <div class="item">
            <a href="reference/service_integration"><img src="/images/common/top_page/img_hands1.jpg"></a>
            <h3>外部サービス連携</h3>
            <p>モバイル広告やユーザー行動分析など、アプリの成長をサポートするサービスとの連携方法について解説しています。</p>
        </div>
        <div class="item">
            <a href="rpg_tkool"><img src="/images/common/top_page/img_rpg1.jpg"></a>
            <h3>RPGツクールゲームのアプリ化</h3>
            <p>「RPGツクールMV」で作成したゲームを簡単にiOS/Android向けにアプリ化できるサービスを提供しています。</p>
        </div>
        <div class="item">
            <a href="https://edu.monaca.io/"><img src="/images/common/top_page/img_school1.jpg"></a>
            <h3>学習・教育</h3>
            <p>"モバイルアプリの開発手法を学びたい方や、 学校などの教育機関のための学習サポートプログラムを提供しています。"</p>
        </div>
        <div class="item">
            <a href="https://edu.monaca.io/material"><img src="/images/common/top_page/img_books1.jpg"></a>
            <h3>書籍</h3>
            <p>Monaca公式ガイドをはじめ、プログラミング教育にもご利用いただける書籍やサンプルアプリ、動画教材をご紹介しています。</p>
        </div>
    </div>
    <footer class="footline">
        <p>Copyright © 2011-2016 Asial Corporation. All rights reserved.</p>
    </footer>
</div>
<div class="bottom-menu">
    <ul class="bottom-menu">
        <li><a href="environment">更新履歴</a></li>
        <li><a href="">対応環境</a></li>
        <li><a href="https://ja.monaca.io/pricing.html">料金プラン</a></li>
        <li><a href="https://ja.monaca.io/support/inquiry.html">お問い合わせ窓口</a></li>
        <li><a href="sitemap">サイトマップ</a></li>
        <li><a href="/en">English</a></li>
    </ul>
</div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script>
<script type="text/javascript">
    docsearch({
      apiKey: 'cb8771194cfef15ef3d6578f488656b7',
      indexName: 'monaca',
      inputSelector: '#top-search-doc',
      algoliaOptions: { 'facetFilters': ["language:ja"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    });
</script>