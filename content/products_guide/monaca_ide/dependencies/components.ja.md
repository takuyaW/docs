---
title: JS・CSS コンポーネント
weight: 20
aliases: /ja/monaca_ide/manual/dependencies/components
---

JS・CSS コンポーネントとは、プロジェクトにインクルード ( include )
する、JavaScript と CSS ライブラリー群 ( jQuery、jQuery mobile、Onsen UI
など ) を指します。

JavaScript/CSS ライブラリーを追加する場合、次の手順に従います。

1.  From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="JS/CSS コンポーネントの追加と削除">}}.
2.  [ JS/CSS コンポーネントの追加と削除 ]
    ページが表示されます。ページ上では、複数のライブラリーが一覧化されています。必要なライブラリーを見つけられない場合には、検索ボックスを使用します。

    {{<img src="/images/monaca_ide/manual/dependencies/components/1.png">}}

3.  ここでは、Angular
    ライブラリーを検索してみます。検索後、条件に一致するライブラリーが一覧表示されます。対象のライブラリーの
    {{<guilabel name="追加">}} をクリックして、プロジェクトに追加します。

    {{<img src="/images/monaca_ide/manual/dependencies/components/2.png">}}

4.  プロジェクトに追加するライブラリーのバージョンを選択します。

    {{<img src="/images/monaca_ide/manual/dependencies/components/3.png">}}

5.  インクルード ( include ) するファイル ( 対象のライブラリー内 )
    を選択して、{{<guilabel name="OK">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/components/4.png">}}

6.  追加したライブラリーが一覧上に表示されていることを確認します。ライブラリーのバージョンと選択したファイルを変更する場合には、{{<guilabel name="設定">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/components/5.png">}}

ライブラリーを追加すると、そのファイルは、`www/components`
フォルダーに追加されます。また、次の JavaScript ファイルと CSS
ファイルも自動的に更新されます。プロジェクトに追加したライブラリーの種類にかかわらず、こちらのファイルは、常にこのフォルダー内に置かれています。

| ファイル名 | 説明 |
|----------|-------------|
| `components/loader.js` | 使用可能なすべてのライブラリーを読み込むための JavaScript ファイル |
| `components/loader.css` | 使用可能なすべてのライブラリーに適用するスタイルシートのファイル |

{{<figure src="/images/monaca_ide/manual/dependencies/components/6.png">}}

HTML ファイルから、 上記の 2 つのファイルを参照するだけで、ライブラリーの読み込みが行えます。記述例を次に記します。HTML
ファイルの `<head>` タグ内で、次の記述を行うだけで、ライブラリーが使用できます。

{{<highlight html>}}
<script src="components/loader.js"></script>
<link rel="stylesheet" href="components/loader.css">
{{</highlight>}}

{{<note>}}
ライブラリー内の画像を使用する場合、 <code>components</code>
フォルダーから対象の画像ファイルを、直接、読み込めます。
{{</note>}}
