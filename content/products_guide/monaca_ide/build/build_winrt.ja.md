---
title: Windows アプリのビルド
weight: 30
aliases: /ja/monaca_ide/manual/build/build_winrt
---

Windows ストアアプリ
--------------------

Windows ストアアプリは、HTML5 と JavaScript で作成され、WinRT
アーキテクチャー上で、ネイティブと同じように実行されます。また、Monaca
で作成したアプリにも、Visual Studio
などで作成したアプリと同じ機能が実装されており、WinJS
を含む、すべてのネイティブ機能を使用できます。

また、Windows ストアアプリは、Windows および Windows RT を搭載した PC
とタブレット上で動作します。なお、Monaca では、Windows
ストア向けのビルド ( リリースビルド ) をサポートしていないため、Windows
ストア向けにアプリを作成する場合には、Visual Studio
などを使用して、別途、アプリを再ビルドする必要があります。

また、Windows ストアアプリには、Android と iOS にはない制約があります。

-   Trident/Chakra ( レンダリングエンジン/JavaScript エンジン )
    のストアアプリ向けの実行モードで、HTML5 と JavaScript
    は実行されるため、標準メソッドと機能の一部に、サポートされていないものがあります
    ( Trident は、IE と同じ描画エンジンでもあります )。詳細は、「 [HTML,
    CSS, and JavaScript features and
    difference](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx)
    」 ( 外部サイト ) をご確認ください。

事前準備
--------

Windows アプリの構築には、Microsoft
社が発行する、有効な開発者用ライセンスが必要です。ライセンス自体は無料ですが、Microsoft
アカウントが必要です。ライセンスを取得する場合には、最初に
[こちら](https://dev.windows.com/en-us/programs/join) で登録をします。

ステップ 1 : Windows アプリの設定
---------------------------------

1.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="設定" menu2="Windows アプリ設定">}} を選択します。
2.  アプリに関する情報を入力します。

    <table class="small">
        <tr>
            <td width="20%">パッケージ証明書キー</td>
            <td>Monaca アプリを Windows アプリに変換 ( 再コンパイル ) するときに、この証明書を使用します。また、この証明書は、サイドローディング ( side-loading ) を行うとき、および、Windows ストアに申請するときにも使用されます。既存の証明書がなければ、Windows アプリを初めてビルドするときに、証明書は自動的に発行されます。既存の証明書ファイルをアップロードする場合には、パスワード無しの PKCS#7 形式のファイルを使用します。</td>
        </tr>
        <tr>
            <td>アプリ表示名</td>
            <td>アプリの名前を入力します。スタート画面に表示されます。</td>
        </tr>
        <tr>
            <td>パッケージ表示名</td>
            <td>パッケージ名を入力します。</td>
        </tr>
        <tr>
            <td>短い名前 / 略称</td>
            <td>タスクバーに表示する文字を入力します。</td>
        </tr>
        <tr>
            <td>名前の表示</td>
            <td>スタート画面 ( Windows 8 以上 ) 上に表示されるロゴのデフォルト設定を選択します。</td>
        </tr>
        <tr>
            <td>バージョン</td>
            <td>アプリのバージョン番号を入力します。バージョン番号には、ドット区切りの数値を使用します ( 例 : 1.0.0 )。</td>
        </tr>
        <tr>
            <td>説明</td>
            <td>アプリの概要を入力します。</td>
        </tr>
        <tr>
            <td>発行者表示名</td>
            <td>開発者名、開発グループ名、企業名などを入力します。</td>
        </tr>
        <tr>
            <td>アーキテクチャー</td>
            <td>CPU のアーキテクチャーを選択します。AnyCPU、x86、x64、Arm のいずれかのオプションを選択します。</td>
        </tr>
    </table>

    {{<img src="/images/monaca_ide/manual/build/winrt/1.png">}}

3.  設定後、{{<guilabel name="保存する">}} をクリックします。

ステップ 2 : アプリのビルド
---------------------------

1.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="ビルド" menu2="Windows アプリのビルド">}} を選択します。
2.  {{<guilabel name="ビルドを開始する">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/winrt/2.png">}}

3.  ビルド後、zip ファイルをダウンロードします。

ステップ 3 : アプリのインストール
---------------------------------

1.  先ほどダウンロードした zip ファイルを解凍します。
2.  解凍したフォルダー内の `Add-AppDevPackage.ps1`
    ファイルを右クリックして、`PowerShell で実行`
    を選択すると、インストールが始まります。

    {{<img src="/images/monaca_ide/manual/build/winrt/4.png">}}

3.  選択したファイルを開くか確認するメッセージが表示されます。{{<guilabel name="開く">}}
    をクリックします。

    {{<img src="/images/monaca_ide/manual/build/winrt/5.png">}}

4.  \[ Enter \] を押して、処理を続けます。

    {{<img src="/images/monaca_ide/manual/build/winrt/6.png">}}

5.  管理者権限を付与するかを確認するメッセージが表示されます \[
    ユーザーアカウント制御 ( UAC ) 機能 が有効な場合 \]。{{<guilabel name="はい">}}
    をクリックします。
6.  PowerShell のウィンドウ上に、次のメッセージが表示されます。 `R`
    と入力します。

    {{<img src="/images/monaca_ide/manual/build/winrt/7.png">}}

7.  `Y` ( はい ) を入力します。

    {{<img src="/images/monaca_ide/manual/build/winrt/8.png">}}

8.  インストール後、[ Enter ] を押します。

    {{<img src="/images/monaca_ide/manual/build/winrt/9.png">}}

9.  これで、インストールが完了しました。次に、アプリビュー ( アプリ一覧
    ) 上にアプリが追加されていることを確認します。

    {{<img src="/images/monaca_ide/manual/build/winrt/10.png">}}

10. アプリをクリックして、起動します。

    {{<img src="/images/monaca_ide/manual/build/winrt/11.png">}}

