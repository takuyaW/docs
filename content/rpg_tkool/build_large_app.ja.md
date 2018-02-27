---
title: 100MB以上のAndroidアプリをビルドするには
weight: 90
---

Google
PlayがサポートするAndroid用アプリのAPKファイルにはサイズ制限(100MB)があります。

そのため、100MB以上のアプリを作成する場合は、「大容量アプリのビルド」機能をご利用ください。

## 「大容量アプリのビルド」機能について

この機能は、Monacaがアプリのリソース(プログラムや音楽、画像など)をホスティングする機能です。

この機能を利用すると、アプリで必要となる全てのリソースは、Monacaのクラウドサービス上に配置され、

アプリが端末上で起動されたタイミングで、端末にリソースがダウンロードされます。

アプリのサイズを気にすることなくビルドをご利用いただけます。

## 「大容量アプリのビルド」機能の利用方法について

### デバッグ用アプリで利用する場合

ビルド画面にて、「大容量アプリのビルド」にチェックし、ビルドをすることで利用ができます。

{{<note>}}
デバッグ用の場合、Monaca上にホスティングされたリソースは1週間利用可能です。
{{</note>}}

{{<figure src="/images/rpg_tkool/build_android/build_debug_large_app.png">}}  

### リリース用アプリで利用する場合

ビルド画面にて、「大容量アプリのビルド」にチェックし、ビルドをすることで利用ができます。

ビルドの度に、Monaca上にホスティングされるリソースは、アプリバージョンごとに区別され保管されます。

Monaca上に保管されるリソースは、アプリバージョン 3つ分までとなります。

{{<note>}}
同一のアプリバージョンをビルドした場合は、最新のものに上書きされます。
{{</note>}}

{{<figure src="/images/rpg_tkool/build_android/build_release_large_app.png">}}  

## 既に端末に存在するアプリと同一バージョンのアプリをインストールするには

「大容量アプリのビルド」機能においては、同じ「バージョン」のアプリが既に端末に存在している場合、変更内容はダウンロードされません。

変更内容のダウンロードには、既に端末に入っている同一バージョンのアプリを手動にて削除し、新規にビルドしたアプリをインストールしてください。

なお、「バージョン」が現在端末にあるアプリより新しい値である場合は、アプリが上書き更新され正常に変更が反映されます。