---
title: バックエンド管理パネル
---

ユーザーを登録・管理する機能を、モバイルアプリに実装するためには、クライアントアプリと連携するサーバーサイドのプログラムを、別途、組む必要があります。Monaca
バックエンドでは、クラウドサービスとして、ユーザーの管理機能を提供しています。Monaca
バックエンドを使用すれば、アプリ開発者はサーバーサイドの開発をせずとも、バックエンドの機能をアプリに実装できます。

Monaca バックエンドを使用すれば、次の機能を実装できます。

-   サーバー上での、エンドユーザーのデータ管理
-   エンドユーザーの登録とログイン認証

ここでは、 Monaca クラウド IDE
上で、ユーザー管理を行う方法について解説します。

## <a name="backend-control-panel-getting-started"></a> Monaca バックエンドの管理

1.  バックエンド管理パネル上で、歯車のアイコンをクリックして、バックエンドの切り替え
    を選択します。

    {{<img src="/images/backend/control_panel/1.png">}}

2.  次のダイアログが表示されます。ここでは、バックエンドの新規作成、または、他のプロジェクトで使用しているバックエンドの再利用を選択できます。選択後、{{<guilabel name="適用">}}ボタンをクリックして、プロジェクトにバックエンドを紐付けします。

    {{<img src="/images/backend/control_panel/2.png">}}

3.  バックエンドの適用後、次のようなバックエンド管理パネルが表示されます。

    {{<img src="/images/backend/control_panel/3.png">}}

## バックエンド設定

### バックエンドの切り替え

1.  バックエンド管理パネル上で、歯車のアイコンをクリックして、`バックエンドの切り替え`を選択します。

    {{<img src="/images/backend/control_panel/25.png">}}

2.  バックエンドの切り替え用のダイアログが表示されます。既存のバックエンドを使用、または、新規バックエンドの作成を選択できます。選択後、{{<guilabel name="適用">}}ボタンをクリックします。

    {{<img src="/images/backend/control_panel/26.png">}}

### セキュリティー設定

1. バックエンド管理パネル上で、歯車のアイコンをクリックして、`バックエンド設定`を選択します。

    {{<img src="/images/backend/control_panel/27.png">}}

2. \[ Backend Settings \] メニュー画面が表示されます。このメニュー画面では、次の設定ができます。

    - 自動ログインの有効化・無効化、自動ログインの有効時間の設定
    - ユーザー名とパスワードの最短文字数の設定
    - パスワード リセット トークンの有効時間の設定

    {{<img src="/images/backend/control_panel/28.png">}}

3. {{<guilabel name="適用">}}ボタンをクリックします。

バックエンド マネジメント API キー
----------------------------------

Monaca バックエンド マネジメント API の使用時には、バックエンド
マネジメント API キーが必要です。この API を使用すれば、Monaca クラウド
IDE からではなく、開発者自身のサーバーから Monaca
バックエンドを管理できます。詳細は、[バックエンド マネジメント API](/ja/reference/monaca_api/cloud_management)をご確認ください。

バックエンド マネジメント API キーの取得手順を、次に記します。

1.  バックエンド管理パネル上で、歯車のアイコンをクリックして、`バックエンド設定`を選択します。

    {{<img src="/images/backend/control_panel/29.png">}}

2.  \[ Backend Settings \] メニューが表示されます。{{<guilabel name="マネジメント API">}}を選択して、{{<guilabel name="有効にする">}}をクリックします。

    {{<img src="/images/backend/control_panel/30.png">}}

3.  このページ上で、次の 2 つの情報を確認します。

    - マネジメント API のエンドポイント URL: `"https://cloud.monaca.mobi/manage/json-rpc/CLOUD_PROJECT_ID"`形式の URL が表示されています。URL 内の 「 CLOUD\_PROJECT\_ID 」部分は、Monaca バックエンドの ID です。また、この URL は、*JSON-RPC リクエストの送信先* として使用されます ([バックエンド マネジメント API](/ja/reference/monaca_api/cloud_management))。
    - IP アドレスの範囲 : 指定した IP アドレスの範囲に対して、API キーを 1 つ設定できます。空白設定は、推奨しません。

    {{<img src="/images/backend/control_panel/31.png">}}

4.  {{<guilabel name="作成する">}}ボタンをクリックして、API キーを生成します (画面中央に表示)。

参考ページ

- [バックエンド API](/ja/reference/monaca_api/cloud)
- [バックエンド メモ帳アプリ](/ja/sampleapp/samples/backend_memo)

