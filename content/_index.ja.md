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
    background-color: #ffe6cc;
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
    padding: 0 15px;
}

nav#top-bar {
    background-color: #ffffff;
}

nav#top-bar > img {
    margin: 10px 20px;
}

nav#top-bar > ul {
    width: auto;
    float: right;
    margin-right: 160px;
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
    margin: 0 auto;
    padding: 0px 23px;
}

div.top-body > p {
    padding: 74px 0;
}

div.container {
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: space-between;
}

div.item {
    max-width: 300px;
    margin-bottom: 30px;
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
</style>

<nav id="top-bar">
    <img src="/images/common/header_logo_docs.png">
    <ul>
        <li><a href="https://community.onsen.io/">コミュニティ</a></li>
        <li><a href="faq">FAQ</a></li>
        <li>
        </li>
    </ul>
    <div class="top-search" id="top-search">
        <input type="search" id="top-search-doc" placeholder="Search Keyword">
    </div>
</nav>

<nav id="top-menu">
    <ul id="top-menu">
        <li><a href="">Monacaを学ぶ</a></li>
        <li><a href="">チュートリアル</a></li>
        <li><a href="">リファレンス</a></li>
        <li><a href="">UI・テンプレート</a></li>
        <li><a href="">サンプルアプリ</a></li>
        <li><a href="">ネイティブ機能</a></li>
        <li><a href="">開発のヒント</a></li>
        <li><a href="">外部サービス連携</a></li>
        <li><a href="">RPGツクールゲームのアプリ化</a></li>
        <li><a href="">学習・教育</a></li>
    </ul>
</nav>

<div class="top-body">
    <p>
        このドキュメントでは、Monacaでの開発を効率的にはじめるためのコンテンツを閲覧できます。エンジニア特化型Q＆Aサイトのteratailにて、Monaca公認Q&Aコミュニティもありますので、合わせて活用してみてください。また、サポート&サービスからMonacaに関する一般的なお問い合わせから技術的な質問することも可能です。
    </p>
    <div class="container">
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_samples1.jpg"></a>
            <h3>Monacaを学ぶ</h3>
            <p>Monacaの全製品の総合的なガイドです。作成開始からApp StoreやGoogle Playへの配布申請まで解説。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_build1.jpg"></a>
            <h3>チュートリアル</h3>
            <p>開発を効率的にはじめるためのチュートリアルです。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_office1.jpg"></a>
            <h3>リファレンス</h3>
            <p>Monacaで使用できるすべてのリファレンスです。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_components1.jpg"></a>
            <h3>UI・テンプレート</h3>
            <p>開発を加速させる便利なUIコンポーネントやテンプレートです。コンポーネントデザインやページ操作機能を簡単に作成できます。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_samples2.jpg"></a>
            <h3>サンプルアプリ</h3>
            <p>ゲームやチャットなど、サンプルアプリのソースコードを提供。アプリ開発の参考にダウンロードして編集してみましょう。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_debug1.jpg"></a>
            <h3>ネイティブ機能</h3>
            <p>Cordovaプラグインを利用した、カメラ操作やバイブレーションの制御、位置情報の取得などネイティブプラットフォーム機能へアクセスする方法など。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_samples3.jpg"></a>
            <h3>開発のヒント</h3>
            <p>音楽の再生、データベースの利用方法など開発テクニックを紹介します。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_hands1.jpg"></a>
            <h3>外部サービス連携</h3>
            <p>モバイル広告や広告の分析などアプリの成長を支援する外部サービスとの連携方法について。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_rpg1.jpg"></a>
            <h3>RPGツクールゲームのアプリ化</h3>
            <p>RPGツクールMVで作ったゲームを簡単にiOS、Android向けのスマホアプリ化できるサービスを提供しています。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_school1.jpg"></a>
            <h3>学習・教育</h3>
            <p>モバイルアプリの開発手法を学びたい方や、学校などの教育機関のための学習サポートプログラムを提供しています。</p>
        </div>
        <div class="item">
            <a href=""><img src="/images/common/top_page/img_books1.jpg"></a>
            <h3>書籍</h3>
            <p>Monaca公式ガイドブックを紹介。プログラミング教育にもご利用頂ける書籍やサンプルアプリ、動画教材などを紹介しております。</p>
        </div>
    </div>
    
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