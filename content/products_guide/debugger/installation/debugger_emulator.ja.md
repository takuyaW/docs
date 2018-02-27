---
title: Android エミュレーター向け Monaca デバッガー
weight: 40
aliases: /ja/debugger/manual/installation/debugger_emulator
---

ここでは 「 Android SDK 」 の AVD ( Android Virtual Device/Android
仮想端末 ) と呼ばれる Android エミュレーター上で、Monaca
デバッガーを動作させる方法を紹介します。これを使えば、Android
アプリのシミュレートを PC 上で行えます。また、複数の Android
端末でアプリの検証を行いたい場合もこの方法が有用です。

{{<note>}}
Monacaバックエンドプラグインは、カスタム版Monaca
Debuggeに含まれていません。
{{</note>}}

{{<note>}}
この解説では、Mac OS X を使用しています。また、エミュレーター上で Monaca
デバッガーを実行する場合、インターネット接続が必要です。
{{</note>}}

ステップ 1 : Android 仮想端末のセットアップ
-------------------------------------------

1.  [Android Studio](http://developer.android.com/sdk/index.html)
    をダウンロードして、インストールします。
2.  Android Studio を起動します。
3.  新規のプロジェクトを作成するか、または、既存のプロジェクトを開きます。
4.  {{<guilabel name="AVD Manager">}} をクリックして、[ Android Virtual Device Manager ]
    ダイアログを表示します。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/1.png">}}  

5.  {{<guilabel name="+ Create Virtual Device">}} をクリックします。
6.  使用する Android 端末を選択して、{{<guilabel name="Next">}} をクリックします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/2.png">}}  

7.  システムイメージを選択して ( 場合によっては、最初にダウンロード
    )、{{<guilabel name="Next">}} をクリックします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/3.png">}}  

8.  仮想端末の設定を行います。{{<guilabel name="Show Advanced Settings">}}
    をクリックして、仮想端末の詳細設定 (
    メモリーとストレージのサイズ、端末のフレーム設定、キーボード入力の可否など
    ) を行います。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/4.png">}}  
    {{<img src="/images/debugger/manual/installation/debugger_emulator/4_1.png">}}  

9.  設定後、 {{<guilabel name="Finish">}} をクリックします。

## <a name="step-2"></a> ステップ 2 : Android 向けのカスタムビルド版 Monaca デバッガーのビルド

1.  Monaca クラウド IDE へ行き、Android 向けのカスタムビルド版 Monaca
    デバッガーをビルドします。詳細は、[カスタムビルド版 Monaca デバッガーのビルドとインストール]({{<ref "debugger_android.ja.md#custom-debugger-android">}})
    をご確認ください。
2.  ビルドされたデバッガーのファイルをダウンロードして、Google
    Drive、Dropbox
    などのクラウドストレージへ、ダウンロードしたファイルをアップロードします。
3.  アップロードしたファイルのダウンロードリンクを確認しておきます (
    仮想端末上で、後ほど、このリンクを使用します )。

ステップ 3 : Monaca デバッガーのインストール
--------------------------------------------

1.  {{<guilabel name="AVD Manager">}} を選択して、対象の仮想端末を起動します。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/5.png">}}  

2.  仮想端末上でブラウザーを起動させ、[ステップ 2](#step-2)
    で確認したダウンロードリンクを開き、Android 向けのカスタムビルド版
    Monaca デバッガーをダウンロードします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/6.png" width="350">}} 

3.  ダウンロードしたファイルをクリックして、デバッガーをインストールします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/7.png" width="350">}} 

4.  インストール ウィザードが起動します。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/8.png" width="350">}}  

5.  インストール後、アプリの一覧画面に、Monaca
    デバッガーが表示されていることを確認します。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/9.png" width="350">}}  

ステップ 4 : Monaca デバッガー上でのプロジェクトの起動
------------------------------------------------------

1.  Monaca デバッガーを起動させ、Monaca
    アカウントを使用して、サインインします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/10.png" width="350">}}  

2.  Monaca デバッガー上で、実行するプロジェクトをクリックします。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/11.png" width="350">}}  

3.  これで、プロジェクトの検証の準備が整いました。アプリの開発における
    Monaca
    デバッガーの使用方法・具体例に関しては、[機能の概要]({{<ref "features.ja.md">}})
    と [使用例]({{<ref "debug.ja.md">}}) をご確認ください。

    {{<img src="/images/debugger/manual/installation/debugger_emulator/12.png" width="350">}}  

参考ページ

- [Chrome 向け Monaca デバッガー]({{<ref "debugger_chrome.ja.md">}})
- [iOS 上へのデバッガーのインストール]({{<ref "debugger_ios.ja.md">}})
- [Android 向けの Monaca デバッガー]({{<ref "debugger_android.ja.md">}})
- [機能の概要]({{<ref "features.ja.md">}})
- [使用例]({{<ref "debug.ja.md">}})
