.. _debugger_on_android:

================================================
Android 向けの Monaca デバッガー
================================================

.. contents:: Table of Contents
   :local:
   :depth: 2

.. figure:: images/debugger_android/3.png
  :height: 250px
  :align: center

  Android 向けの Monaca デバッガー

.. rst-class:: clear

.. note:: Monacaバックエンドプラグインは、Monaca Debugger（ストアバージョン）とカスタム版Monaca Debuggerの両方ともに含まれていません。

.. note:: Cordova 5.2 より前のバージョンを実装したプロジェクトを、Monaca デバッガー 5 系上で実行する場合、不具合が生じることがあります。修復方法を次に記します。

  1. プロジェクトに実装されている :ref:`Cordova のバージョンを更新 <changing_cordova_version>`
  2. :ref:`カスタムビルド版 Monaca デバッガー <custom_debugger_and>` を使用 ( 旧バージョンの Cordova に対応するため )

.. rst-class:: wide-table

  .. list-table::
    :widths: 10 25 25
    :header-rows: 1

    * -
      - ストア版 Monaca デバッガー
      - カスタムビルド版Monacaデバッガー
    * - 説明
      - ストア版 Monaca デバッガー
      - Monaca クラウド IDE にて、ビルドして作成する Monaca デバッガー
    * - インストール方法
      - #. `Play Store`__
        #. `Amazon App Store`__
      - :ref:`custom_debugger_and` を参照のこと
    * - :ref:`cordova_and`
      - 基本 Cordova プラグインおよび複数のサードパーティー製 Cordova プラグインがあらかじめ実装されています。
      - 基本 Cordova プラグインやサードパーティー製 プラグインに加えて、ユーザー自作の プラグインなどを組み込むことができます。
    * - パッケージ名 ( Android:PackageName )
      - ``mobi.monaca.debugger``
      - 設定画面にてユーザー側で設定
    * - アプリのリリース番号 ( 表示用 / Android:versionName )
      - 固定 ( 現在は 6.0.1 )
      - ユーザー側で設定
    * - アプリのビルド番号 ( 内部処理用 / Android:versionCode )
      - 固定 ( 現在は 600012 )
      - ユーザー側で設定
    * - :ref:`usb_and`
      - 利用可 ( Chrome DevTools )
      - 利用可 ( Chrome DevTools )
    * - :ref:`localkit_and`
      - 可
      - 可
    * - :ref:`webview_and`
      - Stock と Crosswalk
      - Stock と Crosswalk
    * - :ref:`network_and`
      - 可
      - 可

.. _PlayStoreNormal: https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en
__ PlayStoreNormal_

.. _AmazonAppStore: http://www.amazon.com/Asial-Corporation-Monaca-Debugger/dp/B00H1M1518
__ AmazonAppStore_


.. _cordova_and:

Cordova プラグイン
==============================

Monaca デバッガーには、「 基本 Cordova プラグイン 」 および 「 サードパーティー製 Cordova プラグイン 」 が、あらかじめ実装されています。

基本 Cordova プラグインとは、バッテリー情報の取得 API、カメラ API、住所録の取得 API、端末情報の取得 API などを指します。詳細は、:ref:`cordova_core_plugins` をご確認ください。

また、DatePicker、BarcodeScanner など、サードパーティー製 ( 第三者提供 ) の Cordova プラグインも、Monaca に実装されています。詳細は、 :ref:`third_party_cordova_index` をご確認ください。.

これ以外の第三者提供 ( 「 外部の Cordova プラグイン 」 ) または自作のプラグイン ( 「 :ref:`ユーザー Cordova プラグイン <custom_cordova_plugin>` 」 ) をプロジェクトに追加することもできます。ストア版の Monaca デバッガーには、これらのプラグインはデフォルトでは実装されていないため、このデバッガー上でアプリをそのまま実行しても、正しく動作しません。そこで、ストア版のデバッガーの代わりに、カスタムビルド版の Monaca デバッガーを使用します。カスタムビルド版も、ストア版も、どちらも Monaca デバッガーですが、カスタムビルド版のデバッガーは、Monaca クラウド IDE 上で 「 ビルド 」 して、端末にインストールします ( Monaca デバッガーは、アプリです )。詳細は、:ref:`custom_debugger_and` をご確認ください。


.. _usb_and:

USB デバッグ
==============================

Android 向けの Monaca デバッガーでは、USB デバッグをサポートしており、Google Chrome ブラウザーを使用したリモートデバッグが行えます。リモートデバッグで行える主な処理は、次のとおりです。

- Console を使用したデバッグ : Console を使用して、各種メッセージを出力できます。
- DOM の解析 : DOM の構造の確認と修正を行えます。また、リアルタイムで、更新を反映できます。
- JavaScript のデバッグ : JavaScript パフォーマンスのプロファイリング、分析ポイント ( ブレークポイント ) のセット、実行処理の制御を行います。

詳細は、:ref:`Android 向けアプリのデバッグ方法 ( Monaca デバッガーと USB デバッグを使用 ) <usb_debugging_android>` をご確認ください。

.. _localkit_and:

Localkit のインスぺクタ機能
==============================

Windows と Mac OS の両方で、このインスペクタ機能を使用できます。

.. _webview_and:

WebView
==============================

Android 向けのデバッガーには、Stock と Crosswalk の両方の WebView エンジンが実装されています。アプリ側で使用する WebView の種類により、自動で、WebView が切り替わります。

.. _network_and:

ネットワーク インストール
==============================

Android 向けの Monaca デバッガーでは、デバッガー経由で、ビルド済みのアプリ ( デバッグビルド版のみ ) を端末にインストールできます。詳細は、 :ref:`ネットワーク インストール ( [ インスト ] の解説  ) <debugger_project_options>` 機能を、ご確認ください。


.. _custom_debugger_and:

カスタムビルド版 Monaca デバッガーのビルドとインストール
==================================================

1. Monaca クラウド IDE メニューから、 :menuselection:`デバッグ --> デバッガーの説明とインストール` を選択します。

2. :menuselection:`Android 向けデバッガーインストール --> ビルドしてインストール` を選択します。

  .. figure:: images/debugger_android/1.png
    :width: 400px
    :align: left

  .. rst-class:: clear

3. ビルドが完了するまで、数分かかる場合がありますので、しばらく待ちます。ビルドが完了すると、次の画面が表示されます。ビルドしたアプリは、QR コードを使用して、端末にインストールするか、または、ファイルを PC へダウンロードすることができます。

  .. figure:: images/debugger_android/4.png
    :width: 400px
    :align: left

  .. rst-class:: clear

4. デバッガーを端末へインストールした後、Monaca アカウントを使用して、デバッガーにログインします。次に、IDE の画面に戻り、:guilabel:`Monaca デバッガーをインストールして、ログインしました。` にチェックを入れ、:guilabel:`次へ` をクリックします。

5. Monaca クラウド IDE とデバッガー間が接続されます。接続後、:guilabel:`実機デバッグ` をクリックすると、デバッガー上でアプリが同期・実行されます。

  .. figure:: images/debugger_android/5.png
    :width: 400px
    :align: left

  .. rst-class:: clear

6. デバッガー上でアプリが実行されていることを確認します。この状態で、アプリの検証を行えます。また、IDE に一度戻り、アプリを修正・保存してみましょう。修正箇所は、保存後、直ちにデバッガー側にも反映されます。

  .. figure:: images/debugger_android/6.png
    :width: 400px
    :align: left

  .. rst-class:: clear

.. seealso::

  *参考ページ*

  - :ref:`Debugger インストール方法 on Emulator<debugger_on_emulator>`
  - :ref:`Debugger インストール方法 on iOS<debugger_on_ios>`
  - :ref:`monaca_debugger_features`
  - :ref:`debugging_monaca_app`
