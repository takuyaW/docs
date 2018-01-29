---
title: プッシュ通知機能
weight: 40
---

{{<note>}}
Cordova6.2プロジェクトでアドホックビルドしたアプリに対しては、リリースを選択する必要があります。
{{</note>}}

プッシュ通知に使用する Monaca バックエンド マネジメント API を、次に記します。

メソッド | 解説
-------|-----------------------
[Push.send()](#push-send) | プッシュ通知を送信します。
[Push.status()](#push-status) | プッシュ通知のステータスを取得します。
  
Push.send()
------------------------------

アプリに、プッシュ通知を送信します。

{{<highlight javascript>}}
Push.send()
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`pushProjectId` | 文字列 | [プッシュ通知 プロジェクト ID](#プッシュ通知-プロジェクト-id)
`platform` | 文字列 | 通知先となるプラットフォームです。 `"android"` または `"ios"` になります。
`target` | 文字列 | エンドユーザーの種類です。`"app"` になります。
`buildType` | 文字列 | アプリのビルドの種類です。 `"debug"` 、 `"release"` 、 `"adhoc"` のいずれかを選択します。
`title` | 文字列 | タイトルです ( Android のみ )。
`message` | 文字列 | 送信されるメッセージです。
`badge` | 数値 | バッジ ( iOS のみ ) です。
`json` | JSON オブジェクト | JSON データです。
`userOidList` | 文字列の配列 | ユーザー ID を使用して、対象となるユーザーを絞り込みます ( 任意 )。 <ul><li>Javascript 側では、これらの ID の値は、 [monaca.cloud.User.oid](../../cloud/user/#user-oid) となります。</li><li>[バックエンド マネジメント API](../../cloud_management) に記載されているように、これらの ID は、 [User.list()](../user/#user-list) 関数で取得した各データの `"_id"` プロパティーの値です。</li></ul>
`userQuery` | String | ユーザーのプロパティーと [MonaQL]({{<ref "criteria.ja.md#monaca-クエリー言語">}}) クエリーを使用して、対象となるユーザを絞り込みます ( 任意 )。 例 `country == "US" && age > 20`
`userQueryBindParams` | 配列 | userQuery 内にプレースホルダーがある場合には、値に置き換えます ( 任意 )。 例 userQuery が `country == ? && age > ?` の場合、`["US", 20]` になります。
`deviceIdList` | 文字列の配列 | デバイス ID を使用して、対象となる端末を絞り込みます ( 任意 )。 <ul><li>Javascript 側では、これらの ID は [monaca.getDeviceId()](../../utility/#monaca-getdeviceid) の戻り値です。</li></ul>

{{<note>}}
      <code>deviceIdList</code> 、 <code>userOidList</code> 、 <code>userQuery</code> は、同時に使用できません。
{{</note>}}

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`queueIdList` | 配列 | プッシュキュー ID ( push queue id ) の一覧です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

Push.status()
--------------------------------------------

プッシュ通知のステータスを取得します。

{{<highlight javascript>}}
Push.status(pushProjectId: String, queueId: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`pushProjectId` | 文字列 | [プッシュ通知 プロジェクト ID](#プッシュ通知-プロジェクト-id)
`queueId` | 文字列 | プッシュキュー ID ( Push queue ID / `queueIdList` から取得 )

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`status` | 文字列 | ステータス ( `完了` など ) です。
`numTarget` | 数値 | 対象となる受信者の数です。
`numPushed` | 数値 | 受信が成功した数です。
`numFailed` | 数値 | 受信が失敗した数です。
`createdAt` | TimeUnit | 作成日時です。
`pushStartedAt` | TimeUnit | 開始日時です。
`pushFinishedAt` | TimeUnit | 完了日時です ( 成功または失敗に関わらず )。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

プッシュ通知 プロジェクト ID
----------------------------

プッシュ通知 プロジェクト ID とは、プッシュ通知毎の ID
です。次の手順で確認できます。

1.  Monaca クラウド IDE 上の `雲` アイコンをクリックして、 **Monaca
    バックエンド** の管理画面を開きます。

2.  `歯車` のアイコンをクリックして、 `バックエンド設定...`
    を開きます。下のスクリーンショットをご確認ください。

    {{<img src="/images/reference/monaca_api/cloud_management/backend_setting.png">}}

3.  `Backend Settings` 画面が表示されます ( 中央の左側 )。次に、
    `プッシュ通知` の項目をクリックします。スクロールで下に行き、 アプリの
    「 プッシュ通知プロジェクト ID 」 を確認します (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/reference/monaca_api/cloud_management/push_projectID.png">}}