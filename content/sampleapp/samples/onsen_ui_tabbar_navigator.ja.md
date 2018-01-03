---
title: Onsen UI ナビ付 タブバー
weight: 170
---

[Onsen UI タブバー](https://ja.onsen.io/v2/api/js/ons-tabbar.html) と
[ナビゲーター](https://ja.onsen.io/v2/api/js/ons-navigator.html) を使用したテンプレートです。

**テスト環境**

- Android 4.2.2
- iOS 7.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/9-ons-tab-nav/www/index.html">}}

## ファイル構成

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_1.png">}}                           

ファイル | 説明
--------------|-----------------------------------
`index.html` | スタート画面のページ ( ホーム画面のページ )
`navigator.html` | Navigator page for ページ 1
`page1.html` | ページ 1
`page2.html` | ページ 2
`page3.html` | ページ 3
`new_page.html` | 新規のページ
`styles/app.css` | プロジェクトのスタイルシート ファイル

必要な JS/CSS コンポーネント
----------------------------

- `Onsen UI`                                       

## HTML の解説                                      

### index.html                                       

`index.html` は、スタート/ホーム画面のページです。ここでは、
`<ons-tabbar>` コンポーネントを使用して、3
つのタブを指定します。タブは、Home ( `navigator1.html` )、Camera (
`page2.html` )、Settings ( `page3.html` ) です (
下のスクリーンショット参照のこと )。

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_6.png" width="300">}}    

### navigator.html

navigator.html に、ページのナビゲーションを行う navigator 要素 (
`<ons-navigator>` タグ ) を記述しています。navigator
要素を使用すると、ページスタックを使用され、ページ遷移 ( \[ 戻る \] )
は水平方向に行われます。 `navigator.html`
ファイルに記述があるように、navigator 要素には、 `page1.html`
を指定しています。これにより、ページスタックの最初のページに、Page 1
が置かれます。

### page1.html

page1.html は、1 列の文字列 ( `Page 1` ) と 1 個のボタン ( `Push New Page`
) から構成されています。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_2.png" width="300">}} 

`Push New Page` ボタンをクリックすると、新規のページ ( New Page )
が表示され、ページスタックへプッシュ ( push )
されます。つまり、ページスタック内で、2 番目のページとして、ページ 1
の後ろに置かれることを意味します。

### new_page.html

`new_page.html` は、1 列の文字列 ( `New Page` ) と 1 個のボタン (
`Pop Page` ) から構成されています。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_5.png" width="300">}} 

新規のページ ( New Page ) のトップ左端の Home 戻るボタンまたは Pop Page
ボタンをタップすると、ページスタックに置かれている前のページに戻ります。ここでは、ページ
1 となります。

### page2.html

`page2.html` は、1 列の文字列 ( `Page 2` )
で構成されています。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_3.png" width="300">}} 

### page3.html

`page3.html` は、1 列の文字列 ( `Page 3` )
から構成されています。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_4.png" width="300">}} 