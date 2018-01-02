---
title: リモートビルドと配布申請
weight: 50
---

リモートビルド の機能を解説します ( \[ ビルド設定 \] 画面の各タブの解説
)。

-   ビルド : ビルド対象のプラットフォーム ( Android、iOS、Chrome
    Apps、Windows ) を選択します。
-   ビルド設定 :
    アプリおよび各プラットフォーム向けのビルドに必要な設定をします。
-   依存関係の設定 : 必要なプラグイン （
    [Cordova プラグイン]({{<ref "cordova_plugin.ja.md">}}) 、[JS・CSS コンポーネント]({{<ref "components.ja.md">}})
    、[外部サービスとの連携](/ja/reference/service_integration/) など ） を設定します。

ここまでの手順で、アプリの開発工程のすべてが完了しました。次の工程では、アプリのビルド、端末へのインストールなど、配布に向けた準備をします。これらの工程まで行えば、マーケットで配布できるアプリが完成します。なお、実際に、マーケット
( App Store、Google Play など )
上で配布する前には、リリースビルド版のアプリが必要です。

各プラットフォーム向けアプリのビルド方法と配布申請に関しては、次の解説をご確認ください。

- [Monaca アプリのビルド](/ja/tutorials/monaca_cli/building_app)
- [配布方法](/ja/products_guide/monaca_ide/deploy)