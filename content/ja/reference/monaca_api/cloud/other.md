他の API
========

ここでは、他の解説ページには記載されていない、Monaca バックエンドの
JavaScript API を紹介します。

  メソッド/プロパティー 解説                       
  ------------------------------------------------ ---------------------------------------------------------
  monaca.cloud.setTimeout()&lt;c.setTO&gt;         *Ajax* リクエストのタイムアウト時間を設定します。
  \$.Promise&lt;promise&gt;                        Monaca バックエンドが返すオブジェクトです。
  Promise のメソッドチェーン化 &lt;c.promise&gt;   promise をメソッドチェーン化します ( ネストは不使用 )。

setTimeout() - タイムアウトの設定
---------------------------------

*Ajax* リクエストのタイムアウト時間を設定します。.

monaca.cloud.setTimeout(msec: number)

パラメーター

:   -------- --------------------------------------------------------------------------------------
      `msec`   タイムアウト時間はミリ秒単位で設定します。 デフォルト値は、 `30000` ( 30 秒 ) です。
      -------- --------------------------------------------------------------------------------------

戻り値

:   -------- --
      `なし`   
      -------- --

例

:   タイムアウトまでの時間を、 `5` 秒に設定します。

    ``` {.sourceCode .javascript}
    monaca.cloud.setTimeout(5000);
    ```

\$.Promise
----------

`$.Promise` とは、 jQuery オブジェクトであり、 `"promise ( プロミス )"`
です。promise ( プロミス ) では、ある処理が成功 ( resolved / fullfilled
) または失敗 ( rejected )
になると、指定されたコールバック関数を実行します。ここでの処理とは、バックエンドサーバーとのやり取り
( 保存、更新のリクエストなど ) になります。

  ------------ ------------------------------------------------------------------------------------------------------------------------
  `done()`     成功時に実行されるコールバックです。
  `fail()`     失敗時に実行されるコールバックです。コールバックに渡される `monaca.cloud.Error` には、エラーコードが格納されています。
  `always()`   成功または失敗のいずれの場合でも、このコールバックが実行されます。
  ------------ ------------------------------------------------------------------------------------------------------------------------

例

:   ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("Diary");
    var criteria = monaca.cloud.Criteria('title == "Monaca"');
    Diary.find(criteria)
      .done(function(result){
        console.log(result.items[0].body);
      })
      .fail(function(err){
        console.log(err.code);
      });
      .always(function()
      {
        console.log("This message will always appear.");
      }
    );
    ```

Promise のメソッドチェーン化
----------------------------

`promise` には、コールバックのペア ( 2 つ ) を引数に取れる `then()`
があります。 `promise` が解決 ( resolved / fullfilled )
した場合には、最初のコールバックが呼ばれ、失敗 ( rejected )
した場合には、2 つ目のコールバックが呼ばれます。

また、 `promise` では、複数の `promise`
を、ネスト化ではなく、メソッドチェーン化できます。`promise`
の仕様として、ある `promise` のコールバックが、実行結果として、新しい
`promise` を返した場合、最初の promise は、新しい promise
が解決するまで、解決されません。つまり、コールバック処理を多重に組み合わせて、ピラミッド型のコード
( コールバック地獄 ) を組まなくとも、複数の処理を行えます。

例 :

:   ``` {.sourceCode .javascript}
    var memo = MC.Collection("memo_collection");
    memo.findOneMine(CRITERIA)
    .then(function(item) {
      item.title = NEW_TITLE;
      return item.update();
    }, function(err){
      console.log('Error: ' + JSON.stringify(err));
      return null; })
    .then(function(updatedItem) {
      console.log('Updating is success!' + JSON.stringify(updatedItem));
    });
    ```


