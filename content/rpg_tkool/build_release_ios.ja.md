---
title: iOS アプリの作成 (リリース用)
weight: 50
---

リリース用 iOS アプリの作成方法について説明します。

## 1. 事前準備

ビルド開始前に「[iOS Developer Program](https://developer.apple.com/programs/ios/) への登録」が必要となります。

## 2. 秘密鍵とCSRの作成

まずは、秘密鍵を作成します。既存の秘密鍵がある場合には、インポートもできます。

ここでは、新規に秘密鍵を作成します。

「秘密鍵と CSR の生成」ボタンをクリックして、ユーザー名 ( 秘密鍵に付ける名前 ) ・ メールアドレス ( Apple ID ) ・ 国コードを入力します。

{{<figure src="/images/rpg_tkool/build_ios/modal_make_key_csr.png">}}  

秘密鍵の作成後、その秘密鍵に関連付けされた CSR ファイルが同時に作成されます。

この CSR ファイルをダウンロードします。このファイルは、後ほど、iOS Dev Center で証明書を発行するときに使用します。

## 3. 証明書の作成とプロビジョニングプロファイルの準備

「 [証明書の作成]({{<ref "build_ios.ja.md#証明書の作成">}}) 」 を参考にしiOS Dev Center で証明書を作成して、ダウンロードします。

「 [プロビジョニング プロファイルの作成]({{<ref "build_ios.ja.md#プロビジョニング-プロファイルの作成">}}) 」 を参考にしiOS Dev Center でプロビジョニング プロファイルを作成して、ダウンロードします。

証明書とそれに対応するプロビジョニング プロファイルが準備できたら、アップロードを行います。

## 4. ビルドの開始

「 リリース向けビルド 」の「リリースビルド」を選択します。

プロビジョニングファイルの項目にファイルが設定されていることを確認し、「ビルドを開始する」ボタンをクリックします。

{{<figure src="/images/rpg_tkool/build_ios/select_provisioning.png">}}  

## 5. ビルド

ビルドが完了するまで、数十分かかりますので、しばらく待ちます。ビルドが完了すると、次の画面が表示されます。

{{<figure src="/images/rpg_tkool/build_ios/build_release_success.png">}}  

## 6. アプリのインストール

次のいずれかの方法で、ビルドしたアプリをストアへアップロードすることができます。

1.  ビルドしたアプリをパソコンに直接ダウンロードし、Appleの「[Application Loader](http://help.apple.com/itc/apploader/e3) 」を利用する
2.  Monacaのデプロイサービスを利用する(有料)

