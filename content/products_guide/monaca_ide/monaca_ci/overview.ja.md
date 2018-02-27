---
title: 概要
weight: 10
aliases: /ja/monaca_ide/manual/monaca_ci/overview
---

Monaca CI は、Monaca の開発環境に新しく組み込まれた、CI ( Continuous
Integration/継続的インテグレーション )
を実現するためのサービスです。このサービスを使用すると、プロジェクトのビルド処理の自動化、検証版アプリの配信/配布処理の自動化を行えるため、開発を大幅に効率化できます。自動化処理の基礎には、Webhook
を使用しています。Webhook を使用することにより、GitHub または Git
系のサービスと容易に連携することができます ( Webhook
経由で、コードのコミット、ブランチ/タグの作成など、特定のイベントを処理できます
)。Monaca CI
の処理を、ここで簡単に解説します。最初に、ユーザーがプロジェクトを
GitHub にプッシュすると、GitHub 側から Monaca サーバー側へ HTTP POST
リクエストが発行されます。このリクエスト内容が Monaca CI
側で保持している設定と一致する場合には、前述の処理 (
ビルド処理、および、指定されていれば配信/配布処理 ) が実行されます。

Monaca CI
を使用することにより、ビルド処理・検証処理・配信/配布処理をはじめとする、手間のかかる処理から開発者は解放され、アプリの内容・性能に注力して、開発が行えるようになります。

事前準備
--------

Monaca CI を使用する前に、Monaca アカウントと GitHub
を連携させる必要があります。連携手順は、次のとおりです。

1.  Monaca アカウントと GitHub
    を連携させます。詳細は、[GitHub との連携](../../version_control/github_integration) をご確認ください。
2.  GitHub
    レポジトリとプロジェクトを接続させます。詳細は、[レポジトリと Monaca プロジェクトの接続]({{<ref "github_integration.ja.md#ステップ-2-レポジトリと-monaca-プロジェクトの接続">}})
    をご確認ください。

{{<note>}}
Monaca CI のご利用には、Cordova の 6.2 以上が必要です。
{{</note>}}

Monaca CI の使用方法
--------------------

次の手順に従い、Monaca CI を使用します。GitHub
レポジトリとプロジェクトとの接続が完了していることを前提に、ここでは解説をします。

1.  Monaca クラウド IDE
    のメニューから、{{<menu menu1="設定" menu2="継続的インテグレーション">}} を選択します。
2.  [ JSON 設定 ]
    項目では、次のような設定がデフォルトで記述されています (
    詳細は、[JSON 設定](#json-設定) を参照のこと
    )。これらのパラメーターを使用して、Monaca CI
    の挙動を設定します。次のような設定の場合、GitHub ブランチ/タグ
    へプロジェクトコードをプッシュ ( push )
    するたびに、デバッグビルドとリリースビルド版 iOS
    アプリのビルドを行うよう、Monaca CI は Monaca
    サーバー側へ命令します。ビルド完了後は、[ ビルド一覧 ]
    パネル上で、ビルド済みのファイルをダウンロードすることができます (
    {{<menu menu1="ビルド" menu2="ビルド履歴一覧">}} )。

    {{<highlight json>}}
[
    {
        "task_name": "Default",
        "branch": "/master/",
        "platform": [
            "android",
            "ios"
        ],
        "build": [
            "debug",
            "release"
        ],
        "deploy": []
    }
]
    {{</highlight>}}

3.  デフォルトでは、Monaca CI
    は無効にされています。有効にするためには、{{<guilabel name="有効にする">}}
    をクリックして、次に {{<guilabel name="保存する">}} をクリックします。これで、Monaca CI
    を使用する準備が完了し、JSON 設定内で指定している GitHub
    のブランチ/タグへ、プロジェクトをプッシュ ( push )
    することができます。プッシュ後は、[ ビルド一覧 ]
    パネルからビルド済みのファイルをダウンロードできます。なお、ビルド処理には、数分かかるときがあります。

    {{<img src="/images/monaca_ide/manual/monaca_ci/overview/3.png" width="600">}}

{{<warning>}}
リリースビルド版アプリ ( iOS および Android 向け ) の場合、「 初回 」
のビルドは、IDE
上で、手動で、行う必要があります。初回のビルド以降は、Monaca CI
を使用して、自動でビルドを行えます (
リリースビルド版を初めてビルドする場合、Android
では、有効なキーストアの入力が必要になり、iOS
では、有効なプロビジョニングプロファイルのアップロードが必要になるためです
)。
{{</warning>}}

デプロイサービス ( 配信/配布支援サービス ) の組み込み
-----------------------------------------------------

Monaca CI
を使用すれば、アプリの配信/配布処理を自動化することもできます。自動化の方法は、次のとおりです。

1.  Monaca クラウド IDE のメニューから、{{<menu menu1="設定" menu2="デプロイサービス">}}
    を選択します。
2.  {{<guilabel name="新しく追加する">}} をクリックします。
3.  デプロイサービスを選択して、詳細設定を入力します。入力後、{{<guilabel name="追加">}}
    をクリックします。詳細設定で入力する項目は、次のとおりです。

    - エイリアス名 : 各サービスの管理に使用する、一意の識別子を入力します。
    - ユーザー名 ( DeployGate 専用 ) : アプリ所有者のユーザー名または組織名を入力します。
    - API キー ( DeployGate の場合 ) または API トークン ( HockeyApp の場合 ) : API キー ( または API トークン ) は、デプロイサービスのプロバイダーから入手できます。入手方法に関しては、[DeployGate からの API キーの入手方法]({{<ref "supported_services.ja.md#api-キー-または-api-トークンの取得方法">}}) または [HockeyApp からの API トークンの入手方法]({{<ref "supported_services.ja.md#api-キー-または-api-トークンの取得方法-1">}}) をご確認ください。

    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/1.png" title="DeployGate" width="500">}}
    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/1_1.png" title="HockeyApp" width="500">}}

4.  [ 継続的インテグレーション ] パネルへ行き、[ デプロイサービス一覧
    ] 上に、追加したサービスが表示されていることを確認します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/overview/4.png">}}

5.  [ JSON 設定 ] 内に、デプロイサービス側の設定を追記します。次の
    JSON の記述では、GitHub のブランチ 「 `"release"` 」
    にプロジェクトをプッシュ ( push ) して、デバッグビルド版の iOS と
    Android
    アプリをビルドします。そして、ビルドしたアプリの配信/配布には、`DeployGate`
    サービスを使用します。付随するオプション設定 ( DeployGate
    サービス側で提供しているオプション機能 )
    も行います。ここでは、リリースノートの作成は行いますが、email
    でのリリース通知 ( iOS 端末専用のオプション ) は無効にしています。

    {{<highlight json>}}
[
    {
        "task_name": "Beta Test",
        "branch": "/release/",
        "platform": [
            "ios",
            "android"
        ],
        "build": [
            "debug"
        ],
        "deploy": [
            {
                "type": "DeployGate",
                "alias": "Insider Test",
                "default": {
                    "release_note": "This is a beta test for insider testing."
                },
                "ios": {
                    "disable_notify": "yes"
                }
            }
        ]
    }
]
    {{</highlight>}}

6.  設定後、{{<guilabel name="保存する">}} をクリックします。

{{<note>}}
Monaca CI では、複数のデプロイサービス (
検証版アプリの配信/配布支援サービス )
を組み込むことができます。また、各デプロイサービスには、単数・複数のエイリアス
( alias ) を割り当てることもできます。サポートしているデプロイサービス (
またはサポート予定 ) に関しては、{{<link href="../supported_services" title="検証版アプリなどの配信/配布支援サービス ( デプロイサービス ) ">}} をご確認ください。
{{</note>}}

## JSON 設定

Monaca CI では、JSON のレシピ ( アプリの設定に使用する、JSON
のフィールドとその値の集合体 )
を使用して、処理を自動化しています。よって、行う処理は、JSON
形式で指定します。

### パラメーター

レシピで使用するパラメーターは、次のとおりです。

<table>
    <tr>
        <th width="15%">パラメーター</th>
        <th>説明</th>
    </tr>
    <tr>
        <td><code>task_name</code></td>
        <td>ビルド処理に付ける名前を指定します。</td>
    </tr>
    <tr>
        <td><code>branch</code></td>
        <td>プロジェクトをビルドするときに使用する、GitHub のブランチを指定します。JSON の正しい記法を使用します。</td>
    </tr>
    <tr>
        <td><code>tag</code></td>
        <td>プロジェクトをビルドするときに使用する、GitHub タグを指定します。</td>
    </tr>
    <tr>
        <td><code>platform</code></td>
        <td>ビルドを行うプラットフォームを指定します。設定できる値は、<code>ios</code>、<code>android</code>、<code>winrt</code>です。</td>
    </tr>
    <tr>
        <td><code>build</code></td>
        <td>ビルドの種類を指定します。設定できる値は、<code>debug</code>、<code>release</code>です。</td>
    </tr>
    <tr>
        <td><code>deploy</code></td>
        <td>アプリの配信/配布に使用するデプロイサービス ( 複数設定可 )
            <ul>
                <li><code>type</code>: デプロイサービス名を指定します ( 大文字・小文字を区別 )。</li>
                <li><code>alias</code>: デプロイサービスのエイリアス名/連携名を指定します ( 大文字・小文字を区別 )。</li>
                <li><code>default</code>: 各種オプション ( デプロイサービス提供の機能 ) を設定するブロックです。</li>
                <li><code>ios</code>: iOS 向けのオプション設定 ( デプロイサービス提供の機能 ) 用のブロックです。</li>
                <li><code>android</code>: Android 向けのオプション設定 ( デプロイサービス提供の機能 ) 用のブロックです。</li>
            </ul>
            デプロイサービスごとのオプション設定は、<a href="../supported_services">こちら</a> をご確認ください。
        </td>
    </tr>
</table>

### 例

複数のデプロイサービスの組み込み方法、および、1
つのデプロイサービスに複数のエイリアスを割り当てる方法を、次に記します。

{{<highlight json>}}
[
    {
        "task_name": "test",
        "branch": "/master/",
        "platform": [
            "ios",
            "android"
        ],
        "build": [
            "debug",
            "release"
        ],
        "deploy": [
            {
                "type": "DeployGate",
                "alias": "Internal-Focus-Group",
                "default": {
                  "release_note": "This is a beta test for insider testing."
                },
                "ios": {
                  "disable_notify": "yes"
                }
            },
            {
                "type": "DeployGate",
                "alias": "External-Focus-Group",
                "default": {
                  "release_note": "This is a beta test for outsider testing."
                },
                "ios": {
                  "disable_notify": "yes"
                }
            },
            {
                "type": "HockeyApp",
                "alias": "Demo",
                "default": {
                  "notes": "This is a beta test for demo."
                }
            }
        ]
    }
]
{{</highlight>}}


Monaca CI 側の処理
------------------

ここでは、Monaca CI を使用して、iOS 向け および Android
向けのリリースビルド版アプリをビルドする例を紹介します。プロジェクトコードのプッシュ
( push ) 先には、`master` ブランチを指定しています。また、Monaca CI
を使用して、DeployGate と HockeyAPP の 2
つのデプロイサービス上へ、ビルド済みファイルを送ります。JSON
レシピは、次のようになります。

{{<highlight json>}}
[
  {
    "task_name": "Default",
    "branch": "/master/",
    "platform": [
      "ios",
      "android"
    ],
    "build": [
      "release"
    ],
    "deploy": [
      {
        "type": "DeployGate",
        "alias": "Insider Test",
        "default": {
          "release_note": "This is a beta test for insider testing."
        },
        "ios": {
          "disable_notify": "yes"
        }
      },
      {
        "type": "HockeyApp",
        "alias": "Demo",
        "default": {
          "notes": "This is a beta test for demo."
        }
      }
    ]
  }
]
{{</highlight>}}

上記の JSON 設定を実行した場合、Monaca CI
側では、次の処理が実行されます。

1.  GitHub へコードをプッシュ ( Push ) します。
2.  GitHub 上のブランチ/タグ ( JSON レシピ内で指定されたブランチ/タグ )
    へコードがプッシュされた後、Monaca
    サーバー側では、プロジェクトのビルドを開始します。ビルドの進捗状況を確認する場合には、IDE
    上の {{<menu menu1="ビルド" menu2="継続的インテグレーション結果一覧">}}
    をご確認ください。また、ビルド済みのファイルを確認・ダウンロードする場合には、{{<menu menu1="ビルド" menu2="ビルド履歴一覧">}}
    をご確認ください。

    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/5.png" title="ビルド準備時">}}
    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/7.png" title="ビルド完了時">}}
    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/8.png" title="ビルド済みファイルの一覧">}}

3.  ビルド処理の完了後、Monaca
    サーバー側から、指定されたデプロイサービス側へ、ビルド済みファイルを送ります。

    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/9.png" title="DeployGate のダッシュボード">}}
    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/10.png" title="HockeyApp のダッシュボード">}}

参考ページ

- [検証版アプリなどの配信/配布支援サービス ( デプロイサービス )](../supported_services)