---
title: Chrome 向け Monaca デバッガー
weight: 30
aliases: /ja/debugger/installation/debugger_chrome
---

{{<note>}}
Monacaバックエンドプラグインは、カスタム版Monaca
Debuggeに含まれていません。
{{</note>}}

Chrome アプリは、Web アプリの一種であり、Chrome
エンジン上で実行されます。また、インストール後の Chrome
アプリは、オフラインでも使用できます。Chrome アプリは、Chrome
ウェブストアから入手できます。

インストール方法
----------------

1.  Chrome 向けの Monaca デバッガーは、[Chrome
    ウェブストア](https://chrome.google.com/webstore/detail/eampeimhpjmnimjbfajnbegjnafjadld)
    から入手できます。または、Monaca クラウド IDE
    のメニューから、{{<menu menu1="デバッグ" menu2="デバッガーの説明とインストール" menu3="Chrome 向けデバッガー インストール">}} を選択します。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/1.png">}}  

2.  {{<guilabel name="CHROME に追加">}} ボタンをクリックして、Monaca デバッガーを Chrome
    に追加します。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/2.png">}}  

3.  ダイアログが表示されるので、 {{<guilabel name="アプリを追加">}}
    ボタンをクリックして、インストールを完了させます。

Monaca デバッガーの実行
-----------------------

1.  ブックマークバー左端の `アプリ`
    をクリックするか、または、アドレスバーに `chrome://apps`
    と入力して、インストールされた Chrome アプリの一覧を表示させます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/3.png">}}

2.  デスクトップ上からアプリを起動する場合には、Chrome
    向けのアプリランチャーを使用することもできます。アプリランチャーは、[Chrome
    ウェブストア](https://chrome.google.com/webstore) から入手できます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/4.png">}}

3.  Monaca デバッガーアプリを起動して、Monaca
    アカウントを使用し、ログインします。ログイン後、Monaca
    プロジェクトの一覧が、デバッガー上に表示されます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/5.png">}}

4.  デバッガー上で、プロジェクトを選択すれば、実行されます。プロジェクトを初めて実行する場合には、ワーキングディレクトリー
    ( 作業用ディレクトリー )
    を指定する必要があります。以後、このプロジェクト関連のファイル (
    クラウドからダウンロードされるファイルも含む )
    は、このディレクトリーに置かれます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/6.png">}}

5.  ワーキングディレクトリーの設定後、プロジェクトファイルのダウンロードが開始されます。ダウンロードの完了後、次の画面が表示されます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/7.png">}}

6.  Chrome ブラウザーを開き、アドレスバーに `chrome://extensions`
    と入力して、ページを開きます。次に、プロジェクトをダウンロードしたフォルダーへ移動して、プロジェクト名が付いたフォルダーを
    Chrome の拡張機能のページ上へドラッグ&ドロップします。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/8.png">}}

7.  ここまでの手順で、アプリのインストールが完了し、起動できる状態になりました。{{<guilabel name="起動">}}
    をクリックして、アプリを起動します。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/9.png">}}

8.  または、アプリランチャー上から起動できます。

    {{<img src="/images/debugger/manual/installation/debugger_chrome/10.png">}}

参考ページ

- [エミュレーター上へのデバッガーのインストール]({{<ref "debugger_emulator.ja.md">}})
- [iOS 上へのデバッガーのインストール]({{<ref "debugger_ios.ja.md">}})
- [Android 向けの Monaca デバッガー]({{<ref "debugger_android.ja.md">}})
- [機能の概要]({{<ref "features.ja.md">}})
- [使用例]({{<ref "debug.ja.md">}})
