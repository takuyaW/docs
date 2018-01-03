---
title: Onsen UI 最小限のテンプレート
weight: 160
---

[Onsen UI](https://ja.onsen.io/) アプリの作成時に使用できる、最小限のテンプレートです。

**テスト環境**

- Android 4.2.2
- iOS 7.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/7-ons-minimum/www/index.html">}}

## ファイル構成                                          

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_1.png">}}   

ファイル | 説明
--------------|-----------------------------------
`index.html` | スタート画面のページ ( ホーム画面のページ )
`page1.html` | ページ 1
`page2.html` | ページ 2
`styles/app.css` | プロジェクトのスタイルシート ファイル

必要な JS/CSS コンポーネント
----------------------------

- `Onsen UI`

## HTML の解説                                      

### index.html                                       

`index.html` は、スタート画面のページです。ここには、ページのスタック管理と遷移時のアニメーション管理を行う、ページナビゲーション用のコンポーネント 「 `<ons-navigator>` タグ 」 を置いています。また、
`page="page1.html"` 属性を使用して、 `page1.html`
を、スタックの最初のページとして指定します。これにより、アプリの起動時に表示される、最初のページが、`page1.html`
になります。

{{<note>}}
<code>ons-navigator</code> の <code>page</code> 属性を使用する代わりに、<code>ons-navigator</code> 下に <code>ons-page</code>
を置き、スタックの最初のページを指定することもできます。両方の記法を併用すると、`<ons-page>`
コンポーネントよりも、 <code>page</code> 属性を使用した設定が優先されます。つまり、
<code>page</code> 属性で指定されたページが、スタックの最初のページとなり、
<code>ons-page</code> コンポーネントは無視されます。詳細に関しては、{{<link href="https://ja.onsen.io/v2/api/js/ons-navigator.html#reference-detail" title="Onsen UI のマニュアル">}} をご確認ください。
{{</note>}}

### page1.html

`page1.html` has a line of text (`ページ 1`) and a {{<guilabel name="Push ページ 2">}} button.
(See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_2.png" width="300">}}   

When the {{<guilabel name="Push ページ 2">}} button is clicked, the ページ 2 is shown
horizontally with a Welcome back button on top-left of the page. In
other words, the ページ 2 is currently the second page in the page
stack. When the Welcome back button is clicked, it goes back to the
previous page which, in this case, is the ページ 1.

### page2.html

`page2.html` has only a line of text (`ページ 2`). (See the screenshot
below)

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_3.png" width="300">}}   
