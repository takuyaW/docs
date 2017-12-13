<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
カメラ操作 プラグイン
=====================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-camera/blob/master/RELEASENOTES.md#034-dec-02-2014">0.3.4</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちら ( GitHub
)](https://github.com/apache/cordova-plugin-camera) をご確認ください。

</div>

このプラグインでは、グローバルオブジェクト 「 `navigator.camera` 」 の
API
を使用し、システム側の画像ライブラリーからの画像の取得、および、写真撮影を行います。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.camera);
    }

プラグイン ID
-------------

    org.apache.cordova.camera

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.camera`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

navigator.camera.getPicture
---------------------------

デバイス内蔵カメラでの写真撮影、または、デバイスの画像ギャラリー内の画像検索を行います。取得した画像は、Base64形式の文字列として、または、画像ファイルの
URI を、Success
コールバック関数に引き渡します。このメソッド自体は`CameraPopoverHandle`オブジェクトを返します。このオブジェクトを使用して、ファイル選択用のポップオーバー
( popover ) の位置を変更できます。

    navigator.camera.getPicture( cameraSuccess, cameraError, cameraOptions );

### 解説

The `camera.getPicture`
関数を使用して、デバイス搭載のカメラアプリを起動して、写真撮影を行います。デフォルトでは、`Camera.sourceType`
と `Camera.PictureSourceType.CAMERA`
が等しいときに、この処理を実行します。写真の撮影後は、カメラアプリを終了して、対象のアプリケーションに戻ります。

`Camera.sourceType` が
`Camera.PictureSourceType.PHOTOLIBRARY`、または、`Camera.PictureSourceType.SAVEDPHOTOALBUM`
の場合、画像選択用のダイアログが表示され、既存の画像があれば、その中から選択できます。また、`camera.getPicture`
関数は、`CameraPopoverHandle`
オブジェクトを返すので、このオブジェクトを使用して、画像選択用のダイアログの位置を変更できます。たとえば、端末の向きが変わった場合に使用できます。

戻り値は、`cameraSuccess`
コールバック関数に渡されます。戻り値は、`cameraOptions`
の設定に応じて、次のいずれかの形式で返されます。

-   `文字列` : Base64 形式でエンコードされた写真画像
-   `文字列` : 画像ファイルの保存場所 (
    ローカルのストレージ内、デフォルトはこちら )

上記の値 ( エンコードされた画像、または、URI )
を使用して、次のような、さまざまな処理ができます。

-   `<img>` タグ内への画像のレンダリング (
    このページ内にサンプルがあります )
-   ローカルへのデータの保存 (
    `LocalStorage`、[Lawnchair](http://brianleroux.github.com/lawnchair/)
    など )
-   外部サーバーへのデータの送信

**注意** :
最新の端末で撮影した写真の解像度は高くなります。端末のギャラリーから取得する画像は、`quality`
パラメーターで画質を指定しても、解像度の低い画像に変換されません。メモリー問題を回避するためには、`Camera.destinationType`
を、`DATA_URL` ではなく、`FILE_URI` に設定します。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

Preference ( iOS が対象 ) \~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

-   **CameraUsesGeolocation** ( 真偽値、デフォルトは、false )。JPEG
    形式の画像をキャプチャーする場合、この値を true に設定すると、EXIF
    ヘッダー内の位置情報を取得できるようになります ( true
    に設定した場合、位置情報の使用に必要な許可をシステム側にリクエストします
    )。

        <preference name="CameraUsesGeolocation" value="false" />

### Amazon Fire OS 特有の動作

Amazon Fire OS では、インテント ( intent )
を使用し、カメラのアクティビティ ( activity )
を起動させ、画像のキャプチャーを行います。また、メモリーの空きが少ない携帯端末では、Cordova
側のアクティビティが強制終了 ( kill )
させられることがあります。この場合、Cordova
側のアクティビティがリストアされても、画像が表示されないことがあります。

### Android 特有の動作

Android では、インテント ( intent ) を使用し、カメラのアクティビティ (
activity )
を起動させ、画像のキャプチャーを行います。また、メモリーの空きが少ない携帯端末では、Cordova
側のアクティビティが強制終了 ( kill )
させられることがあります。この場合、Cordova
側のアクティビティがリストアされても、画像が表示されないことがあります。

### iOS 特有の動作

コールバック関数の中で、JavaScript の `alert()`
を使用すると、問題が生じる場合があります。この問題を避けるため、alert を
`setTimeout()` 内に記述します。この方法を使用されば、alert
が表示される前に、iOS の 画像選択用ダイアログ ( image picker ) または
ポップオーバー ( popover ) を、完全に閉じることができます。

    setTimeout(function() {
        // do your thing here!
    }, 0);

### 例

写真の撮影時、および、写真 ( Base64 エンコード形式の画像 )
の取得時に使用します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

写真撮影および画像ファイルの保存場所を取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

CameraOptions を参照のこと -------------

カメラの設定をカスタマイズするオプションのパラメーターです。

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };

### オプション

-   **quality**: 保存した画像の画質を指定します。範囲は、0 から 100
    まであり、100 を指定すると、フル解像度 (
    ファイルの圧縮に起因するロスはなし ) となります。デフォルトは、50
    です ( カメラの解像度に関する情報は、利用できません )。 *(Number)*
-   **destinationType**: Choose the format of the return value. The
    default is FILE\_URI. Defined in `navigator.camera.DestinationType`
    *(Number)*

        Camera.DestinationType = {
            DATA_URL : 0,      // Return image as base64-encoded string
            FILE_URI : 1,      // Return image file URI
            NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
        };

-   **sourceType**: 写真の取得先を設定します。デフォルトは、CAMERA
    です。`navigator.camera.PictureSourceType` で定義します。 *(Number)*

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

-   **allowEdit**: 画像選択の前に、簡単な編集を許可します。 *(Boolean)*
-   **encodingType**:
    返ってくる画像ファイルのエンコード形式を選択します。デフォルトは、JPEG
    です。`navigator.camera.EncodingType` で定義します。 *(Number)*

        Camera.EncodingType = {
            JPEG : 0,               // Return JPEG encoded image
            PNG : 1                 // Return PNG encoded image
        };

-   **targetWidth**:
    画像を拡大・縮小するための幅をピクセルで指定します。\**targetHeight*\*
    と共に使用しなければなりません。アスペクト比は一定に保持されます。
    *(Number)*
-   **targetHeight**:
    画像を拡大・縮小するための縦の長さをピクセルで指定します。n
    **targetWidth**
    と共に使用しなければなりません。アスペクト比は一定に保持されます。n
    *(Number)*
-   **mediaType**:
    画像の取得元のメディアの種類を指定します。`PictureSourceType` に
    `PHOTOLIBRARY` または
    `SAVEDPHOTOALBUM`が指定されている場合のみ有効です。メディアの種類は`nagivator.camera.MediaType`
    で定義します。 *(Number)*

        Camera.MediaType = {
            PICTURE: 0,    // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
        };

-   **correctOrientation**:
    キャプチャーを行ったときのデバイスの向きになるよう、画像を回転させます。\*(Boolean)\*
-   **saveToPhotoAlbum**:
    キャプチャーを行った後、デバイスのフォトアルバムに画像を保存します。
    *(Boolean)*
-   **popoverOptions**: iOS 専用のオプションです。iPad
    でのポップオーバー ( popover ) の位置を指定します。
    `CameraPopoverOptions` を使用して設定します。
-   **cameraDirection**: 使用するカメラを選択します (
    前面または背面のカメラ )。デフォルトは、BACK
    です。`navigator.camera.Direction` で定義します。 *(Number)*

        Camera.Direction = {
            BACK : 0,      // Use the back-facing camera
            FRONT : 1      // Use the front-facing camera
        };

### Amazon Fire OS 特有の動作

-   `cameraDirection`
    にどんな値を設定しても、背面のカメラを使用した撮影になります。
-   `allowEdit` パラメーターを無視します。
-   `Camera.PictureSourceType.PHOTOLIBRARY` と
    `Camera.PictureSourceType.SAVEDPHOTOALBUM`
    では、どちらの場合でも、同一のフォトアルバムを表示します。

### Android 特有の動作

-   `cameraDirection`
    にどんな値を設定しても、背面のカメラを使用した撮影になります。
-   `allowEdit` パラメーターを無視します。
-   `Camera.PictureSourceType.PHOTOLIBRARY` と
    `Camera.PictureSourceType.SAVEDPHOTOALBUM`
    では、どちらの場合でも、同一のフォトアルバムを表示します。

### iOS 特有の動作

-   一部のデバイスで発生するメモリーエラーを防ぐため、 `quality` を
    50以下に設定してください。
-   `destinationType.FILE_URI` に設定している場合、写真はアプリの
    temporary/tmp
    ディレクトリーに保存されます。なお、このディレクトリーのコンテンツは、アプリが終了したときに削除されます。

CameraError
-----------

エラーメッセージを表示する、onError 時のコールバック関数です。

    function(message) {
        // Show a helpful message
    }

### パラメーター

-   **message**: デバイスのネイティブコードが提供するメッセージn
    *(String)*

cameraSuccess
-------------

画像データを返す、onSuccess 時のコールバック関数です。

    function(imageData) {
        // Do something with the image
    }

### パラメーター

-   **imageData**:
    Base64形式でエンコードした画像データ、*または*、画像を指す file
    URI。どちらになるかは、`cameraOptions` に基づきます。 *(String)*

### 例

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

CameraPopoverHandle
-------------------

A handle to the popover dialog created by `navigator.camera.getPicture`.

### メソッド

-   **setPosition**: ポップオーバー ( popover ) の位置を設定します。

### サポート対象のプラットフォーム

-   iOS

### setPosition

ポップオーバー ( popover ) の位置を設定します。

### パラメーター

-   `cameraPopoverOptions`: `CameraPopoverOptions`
    で、新しい位置を指定します。

### 例

    var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
        { destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
        });

    // Reposition the popover if the orientation changes.
    window.onorientationchange = function() {
        var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
        cameraPopoverHandle.setPosition(cameraPopoverOptions);
    }

CameraPopoverOptions
--------------------

iOS
専用のパラメーターです。iPadのライブラリまたはアルバムから画像を選択するときのポップオーバー
(popover ) の固定位置と矢印の方向を指定します。

    { x : 0,
      y :  32,
      width : 320,
      height : 480,
      arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
    };

### CameraPopoverOptions

-   **x**: 画面上に表示するポップオーバー ( popover ) の
    x座標をピクセルで表します。 *(Number)*
-   **x**: 画面上に表示するポップオーバー ( popover ) の
    x座標をピクセルで表します。 *(Number)*
-   **width**: 画面上に表示するポップオーバー ( popover )
    の幅をピクセルで表します。 *(Number)*
-   **height**: 画面上に表示するポップオーバー ( popover
    )の縦の長さをピクセルで表します。 *(Number)*
-   **arrowDir**: ポップオーバー ( popover ) の矢印の向きを表します。
    `Camera.PopoverArrowDirection` で定義します。 *(Number)*

        Camera.PopoverArrowDirection = {
            ARROW_UP : 1,        // matches iOS UIPopoverArrowDirection constants
            ARROW_DOWN : 2,
            ARROW_LEFT : 4,
            ARROW_RIGHT : 8,
            ARROW_ANY : 15
        };

注意
：ポップオーバーのサイズは矢印の方向や画面の向きによって調節され、変化することがあります。位置を固定するとき、画面の向きの変化を考慮に入れてください。

navigator.camera.cleanup
------------------------

一時的なストレージに保存されている処理前の写真を削除します。

    navigator.camera.cleanup( cameraSuccess, cameraError );

### 解説

`camera.getPicture`
を呼び出した後に取得し、一時的なストレージに保存されている処理前の画像ファイルを削除します。
`Camera.sourceType` の値と `Camera.PictureSourceType.CAMERA`
が等しく、また、`Camera.destinationType` が
`Camera.DestinationType.FILE_URI` と等しい場合のみ有効です。

### サポート対象のプラットフォーム

-   iOS

### 例

    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("Camera cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
