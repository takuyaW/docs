.. _debugger_on_ios:

================================================
iOS 向け Monaca デバッガー
================================================

.. contents:: Table of Contents
   :local:
   :depth: 2

.. figure:: images/debugger_ios/1.png
  :height: 250px
  :align: center

  iOS 向け Monaca デバッガー

.. rst-class:: clear

.. note:: Monacaバックエンドプラグインは、Monaca Debugger（ストアバージョン）とカスタム版Monaca Debuggerの両方ともに含まれていません。

.. note:: Cordova 5.2 より前のバージョンを実装したプロジェクトを、Monaca デバッガー 5 系上で実行する場合、不具合が生じることがあります。修復方法を次に記します。

  1. プロジェクトに実装されている :ref:`Cordova のバージョンを更新 <changing_cordova_version>`
  2. use :ref:`カスタムビルド版Monacaデバッガー <custom_debugger_ios>`.

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
      - `App Store`__
      - :ref:`custom_debugger_ios` を参照のこと
    * - :ref:`cordova_ios`
      - 基本 Cordova プラグインおよび複数のサードパーティー製 Cordova プラグインがあらかじめ実装されています。
      - 基本 Cordova プラグインやサードパーティー製 プラグインに加えて、ユーザー自作の プラグインなどを組み込むことができます。
    * - App ID ( iOS:CFBundleIdentifier )
      - ``mobi.monaca.debugger``
      - 設定画面にてユーザー側で設定
    * - アプリのリリース番号 ( 外部向け/iOS:CFBundleShortVersionString)
      - 固定 ( 現在は 6.0.0 )
      - ユーザー側で設定
    * - アプリのビルド番号 ( 内部向け/iOS:CFBundleVersion )
      - 固定 ( 現在は 6.0.0 )
      - ユーザー側で設定
    * - :ref:`usb_ios`
      - Not 可
      - 可 (Safari’s Web Inspector)
    * - :ref:`localkit_ios`
      - Not 可
      - 可
    * - :ref:`network_ios`
      - Not 可
      - 可

.. _AppStore: https://itunes.apple.com/en/app/monaca/id550941371?mt=8
__ AppStore_



.. _cordova_ios:

Cordova プラグイン
==============================

Monaca デバッガーには、「 基本 Cordova プラグイン 」 および 「 サードパーティー製 Cordova プラグイン 」 が、あらかじめ実装されています。

基本 Cordova プラグインとは、バッテリー情報の取得 API、カメラ API、住所録の取得 API、端末情報の取得 API などを指します。詳細は、:ref:`cordova_core_plugins` をご確認ください。

また、DatePicker、BarcodeScanner など、サードパーティー製 ( 第三者提供 ) の Cordova プラグインも、Monaca に実装されています。詳細は、 :ref:`third_party_cordova_index` をご確認ください。.

これ以外の第三者提供 ( 「 外部の Cordova プラグイン 」 ) または自作のプラグイン ( 「 :ref:`ユーザー Cordova プラグイン <custom_cordova_plugin>` 」 ) をプロジェクトに追加することもできます。ストア版の Monaca デバッガーには、これらのプラグインはデフォルトでは実装されていないため、デバッガー上でアプリをそのまま実行しても、正しく動作しません。そこで、ストア版のデバッガーの代わりに、カスタムビルド版の Monaca デバッガーを使用します。カスタムビルド版も、ストア版も、どちらも Monaca デバッガーですが、こちらのデバッガーは、Monaca クラウド IDE 上で 「 ビルド 」 して、端末にインストールします ( Monaca デバッガーは、アプリです )。詳細は、:ref:`custom_debugger_ios` をご確認ください。

.. _usb_ios:

USB デバッグ
==============================

iOS 向けの Monaca デバッガーでは、USB デバッグをサポートしており、 Safari ブラウザーを使用したリモートデバッグが行えます。リモートデバッグで行える主な処理は、次のとおりです。

- Console を使用したデバッグ : Console を使用して、各種メッセージを出力できます。
- DOM の解析 : DOM の構造の確認と修正を行えます。また、リアルタイムで、更新を反映できます。
- JavaScript のデバッグ : JavaScript パフォーマンスのプロファイリング、分析ポイント ( ブレークポイント ) のセット、実行処理の制御を行います。

詳細は、:ref:`iOS アプリのデバッグ方法 ( Monaca デバッガーと USB デバッグを使用 ) <usb_debugging_ios>` をご確認ください。

.. _localkit_ios:

Localkit のインスぺクタ機能
==============================

Windows と Mac OS の両方で、このインスペクタ機能を使用できます。


.. _network_ios:

ネットワーク インストール
==============================

iOS 向けの Monaca デバッガーでは、デバッガー経由で、ビルド済みのアプリ ( デバッグビルド版のみ ) をインストールできます。詳細は、 :ref:`ネットワーク インストール ( [ インスト ] の解説  ) <debugger_project_options>` 機能を、ご確認ください。

.. note:: App Store から入手した iOS 向けの Monaca デバッガーでは、この機能は使用できません。



.. _custom_debugger_ios:

How to Build カスタムビルド版Monacaデバッガー
====================================================


事前準備
^^^^^^^^^^^^^^^^^

必要なアイテムを、次に記します。

- 有効な秘密鍵
- 開発用証明書
- 開発用 プロビジョニング プロファイル

カスタム版デバッガーのビルド前に、上記のアイテムの準備と必要な設定を行います。詳細は、:ref:`building_for_ios` ( 参照先のステップ 1 と 2 ) をご確認ください。完了後、次の手順に従い、ビルドを行います。

アプリのビルド
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Monaca クラウド IDE メニューから、 :menuselection:`デバッグ --> デバッガーの説明とインストール` を選択します。

2. :menuselection:`iOS 向けデバッガー インストール --> ビルドしてインストール` を選択します。

  .. figure:: images/debugger_ios/2.png
    :width: 400px
    :align: left

  .. rst-class:: clear


3. 開発用 プロビジョニング プロファイルをアップロードします。 :guilabel:`次へ` ボタンをクリックします。

4. ビルドが完了するまでには、しばらくかかります。ビルドが完了すると、次の画面が表示されます。ビルドしたアプリは、iTune を使用して、端末にインストールするか、または、ファイルを PC へダウンロードすることができます。

  .. figure:: images/debugger_ios/3.png
    :width: 400px
    :align: left

  .. rst-class:: clear

5. デバッガーを端末へインストールした後、Monaca アカウントを使用して、デバッガーにログインします。次に、IDE の画面に戻り、:guilabel:`Monaca デバッガーをインストールして、ログインしました。` にチェックを入れ、:guilabel:`次へ` をクリックします。


6. Monaca クラウド IDE とデバッガー間が接続されます。接続後、:guilabel:`実機デバッグ` をクリックすると、デバッガー上でアプリが同期・実行されます。

  .. figure:: images/debugger_ios/4.png
    :width: 400px
    :align: left

  .. rst-class:: clear

7. デバッガー上でアプリが実行されていることを確認します。この状態で、アプリの検証を行えます。また、IDE に一度戻り、アプリを修正・保存してみましょう。修正箇所は、保存後、直ちにデバッガー側にも反映されます。

  .. figure:: images/debugger_ios/5.png
    :width: 400px
    :align: left

  .. rst-class:: clear


.. seealso::

  *参考ページ*

  - :ref:`monaca_debugger_features`
  - :ref:`debugging_monaca_app`
