---
title: Monaca と Xcode 間でのビルド設定の再利用
weight: 20
---

Monaca クラウド IDE と Xcode ( Mac OS X ) を併用して、Monaca
アプリを作成する場合、両環境で、同じビルド設定 ( 秘密鍵と証明書 )
を使用できるように準備する必要があります。

ここでは、次の項目に関して解説します。

-   [Xcode から Monaca クラウド IDE へのビルド設定のエクスポート](#xcode-から-monaca-クラウド-ide-へのビルド設定のエクスポート)
-   [Monaca クラウド IDE から Xcode へのビルド設定のエクスポート](#monaca-クラウド-ide-から-xcode-へのビルド設定のエクスポート)

Xcode から Monaca クラウド IDE へのビルド設定のエクスポート
-----------------------------------------------------------

ここでは、Mac OS X ( Xcode ) 上で使用しているビルド設定 ( 秘密鍵と証明書
) を、Monaca クラウド IDE へエクスポートする手順を解説します。

### ステップ 1 : キーチェーンアクセス上での秘密鍵と証明書のエクスポート

キーチェーンアクセス上で、秘密鍵をエクスポートします。次の手順に従います。

1.  Mac OS X 上で、`アプリケーション` &rarr; `ユーティリティー` &rarr; `キーチェーンアクセス`
    を選択します。
2.  \[ キーチェーンアクセス \] 画面の左下に表示されている、`証明書`
    をクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/1.png">}}

3.  エクスポートする証明書を右クリックして、{{<guilabel name="「 証明書名 」 を書き出す">}}
    を選択します。このとき、秘密鍵と関連付けされている証明書を選択します。秘密鍵と関連付けされている証明書のみ、Monaca
    にインポートできます。

    {{<img src="/images/monaca_ide/manual/build/import_export/2.png">}}

4.  エクスポート用の画面が表示されます。今回は、秘密鍵として保存するため、フォーマットを
    `個人情報交換 (.p12)` にして、{{<guilabel name="保存">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/3.png" width="600">}}

5.  秘密鍵用のパスワードを入力して、{{<guilabel name="OK">}} ボタンをクリックします。 `.p12`
    の拡張子を持つ、秘密鍵のファイルが作成されます。後ほど、Monaca
    クラウド IDE
    上で、このファイルのインポートするときに、このパスワードを使用しますので、メモします。

    {{<img src="/images/monaca_ide/manual/build/import_export/4.png">}}

6.  エクスポートする証明書を右クリックして {{<guilabel name="「 証明書名 」 を書き出す">}}
    を選択します。今回は、証明書として保存するので、フォーマットを
    `証明書 (.cer)` にして、{{<guilabel name="保存">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/5.png" width="600">}}

### ステップ 2 : 秘密鍵と証明書の Monaca へのインポート

{{<note>}}
Monaca では、秘密鍵を 1
つのみ登録できます。開発用証明書と配布用証明書で異なった秘密鍵を使用している場合、使用する証明書に紐付けされている秘密鍵を、再びインポートする必要があります。
{{</note>}}

Monaca クラウド IDE
へ秘密鍵と証明書をインポートします。次の手順に従います。

1.  Monaca クラウド IDE のメニューから、{{<menu menu1="設定" menu2="iOS ビルド設定">}}
    を選択します。表示された画面上で、{{<guilabel name="インポート">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/6.png">}}

2.  秘密鍵のファイル (`.p12` ファイル )
    を参照・選択して、対応するパスワードを入力します。次に、{{<guilabel name="インポート">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/7.png">}}

3.  `発行された証明書を登録する` 項目の {{<guilabel name="証明書のアップロード">}}
    をクリックします。インポートした秘密鍵に関連付けされた証明書 (
    開発用または配布用 ) をアップロードします。

    {{<img src="/images/monaca_ide/manual/build/import_export/8.png">}}

4.  証明書のファイル (`.cer` ファイル )
    を参照・選択して、アップロードします。

Monaca クラウド IDE から Xcode へのビルド設定のエクスポート
-----------------------------------------------------------

{{<note>}}
Monaca クラウド IDE からエクスポートする場合、1
つのファイル上に、秘密鍵と証明書は保存されます。
{{</note>}}

Monaca クラウド IDE
から秘密鍵と証明書をエクスポートします。次の手順に従います。

1.  Monaca クラウド IDE メニューから、{{<menu menu1="設定" menu2="iOS ビルド設定">}}
    を選択します。
2.  「 Monacaに登録された証明書 」の一覧で、証明書の`エクスポート`アイコンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/import_export/9.png">}}

3.  エクスポートの前にパスワードを入力します。後から、証明書をインポートするときに、このパスワードが必要になります。

    {{<img src="/images/monaca_ide/manual/build/import_export/10.png">}}

4.  エクスポート ボタンをクリックすると、`.p12`
    の拡張子が付いたファイルがダウンロードされます ( 例 :
    `dev_certification_ios.p12`
    )。このファイルには、秘密鍵と証明書の両方が保存されています。
5.  ダウンロードしたファイルをダブルクリックします。ファイルのパスワードを聞かれますので、入力して、{{<guilabel name="OK">}}
    をクリックします。これで、秘密鍵と証明書を Xcode
    上でも使用できます。

    {{<img src="/images/monaca_ide/manual/build/import_export/11.png">}}

