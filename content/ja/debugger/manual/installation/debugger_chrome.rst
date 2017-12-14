.. _debugger_on_chrome_apps:

================================================
Chrome 向け Monaca デバッガー
================================================

.. contents:: Table of Contents
   :local:
   :depth: 2

.. note:: Monacaバックエンドプラグインは、カスタム版Monaca Debuggeに含まれていません。


Chrome アプリは、Web アプリの一種であり、Chrome エンジン上で実行されます。また、インストール後の Chrome アプリは、オフラインでも使用できます。Chrome アプリは、Chrome ウェブストアから入手できます。


インストール方法
==============================

1. Chrome 向けの Monaca デバッガーは、`Chrome ウェブストア <https://chrome.google.com/webstore/detail/eampeimhpjmnimjbfajnbegjnafjadld>`_ から入手できます。または、Monaca クラウド IDE のメニューから、:menuselection:`デバッグ --> デバッガーの説明とインストール --> Chrome 向けデバッガー インストール` を選択します。

  .. figure:: images/debugger_chrome/1.png
     :width: 400px
     :align: left

  .. rst-class:: clear

2. :guilabel:`CHROME に追加` ボタンをクリックして、Monaca デバッガーを Chrome に追加します。

  .. figure:: images/debugger_chrome/2.png
     :width: 700px
     :align: left

  .. rst-class:: clear

3. ダイアログが表示されるので、 :guilabel:`アプリを追加` ボタンをクリックして、インストールを完了させます。



Monaca デバッガーの実行
==========================================

1. ブックマークバー左端の :guilabel:`アプリ` をクリックするか、または、アドレスバーに :guilabel:`chrome://apps` と入力して、インストールされた Chrome アプリの一覧を表示させます。

  .. figure:: images/debugger_chrome/3.png
     :width: 600px
     :align: left

  .. rst-class:: clear

2. デスクトップ上からアプリを起動する場合には、Chrome 向けのアプリランチャーを使用することもできます。アプリランチャーは、`Chrome ウェブストア <https://chrome.google.com/webstore>`_ から入手できます。

  .. figure:: images/debugger_chrome/4.png
     :width: 350px
     :align: left

  .. rst-class:: clear

3. Monaca デバッガーアプリを起動して、Monaca アカウントを使用し、ログインします。ログイン後、Monaca プロジェクトの一覧が、デバッガー上に表示されます。

  .. figure:: images/debugger_chrome/5.png
     :width: 350px
     :align: left

  .. rst-class:: clear

4. デバッガー上で、プロジェクトを選択すれば、実行されます。プロジェクトを初めて実行する場合には、ワーキングディレクトリー ( 作業用ディレクトリー ) を指定する必要があります。以後、このプロジェクト関連のファイル ( クラウドからダウンロードされるファイルも含む ) は、このディレクトリーに置かれます。

  .. figure:: images/debugger_chrome/6.png
     :width: 350px
     :align: left

  .. rst-class:: clear

5. ワーキングディレクトリーの設定後、プロジェクトファイルのダウンロードが開始されます。ダウンロードの完了後、次の画面が表示されます。

  .. figure:: images/debugger_chrome/7.png
     :width: 350px
     :align: left

  .. rst-class:: clear

6. Chrome ブラウザーを開き、アドレスバーに  :guilabel:`chrome://extensions` と入力して、ページを開きます。次に、プロジェクトをダウンロードしたフォルダーへ移動して、プロジェクト名が付いたフォルダーを Chrome の拡張機能のページ上へドラッグ&ドロップします。

  .. figure:: images/debugger_chrome/8.png
     :width: 600px
     :align: left

  .. rst-class:: clear

7. ここまでの手順で、アプリのインストールが完了し、起動できる状態になりました。:guilabel:`起動` をクリックして、アプリを起動します。

  .. figure:: images/debugger_chrome/9.png
     :width: 600px
     :align: left

  .. rst-class:: clear

8. または、アプリランチャー上から起動できます。

  .. figure:: images/debugger_chrome/10.png
     :width: 350px
     :align: left

  .. rst-class:: clear


.. seealso::

  *参考ページ*

  - :ref:`デバッガーの機能 <monaca_debugger_features>`
  - :ref:`デバッガーの使用例 <debugging_monaca_app>`
