---
title: ブロック崩しゲーム
weight: 70
---

pixi.js を使用したサンプルゲームです。 pixi.js は、非常に高速な、HTML5
の 2D レンダリング エンジンです。WebGL を基盤としています \[ WebGL
未対応のブラウザーでは、Canvas にフォールバック ( fallback / 切り替え )
します \]。Pixi の詳細は、
[こちら](https://github.com/GoodBoyDigital/pixi.js)
をご確認ください。このゲームでは、ボールが画面下に落ちないように、パドルを操作しながら、煉瓦状に積まれたブロックを崩していきます。すべてのブロックを崩し終えたところで、ゲームクリアとなります。

  *テスト環境* Android 7.0                                   iOS 10.1.1                             
  ---------------------------------------------------------- -------------------------------------- --------------------------------------------------------------------------------------------------------
                                                                                                    
  .. raw:: html                                                                                     
  &lt;div class="iframe-sample                               s"&gt;                                 
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa           tes/5-monacanoid/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                                      
                                                                                                    
  ファイル構成                                                                                      
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                          
  .. image:: images/break\_the                               \_bricks/break\_1.png                  
  :width: 200px                                                                                     
                                                                                                    
  ============================                               ====== =====================           ======================================================================================================
  `index.html`                                               スタート画面のページ ( ホーム画面の    ページ )
  `js/main.js`                                               アプリ内でさまざまな処理を行う Ja      vaScript ファイル
  `css/style.css`                                            アプリに適用する共通スタイルシート     
  `img/*.png`                                                このテンプレートで使用する、すべての   イメージファイル
  `res/VT323-Regular.ttf`                                    TrueType のフォント                    

必要な JS/CSS コンポーネント
----------------------------

  `Pixi`                                                       
  ------------------------------------------------------------ --------
                                                               
  ソースコードの解説                                           
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   \^\^\^
  js/main.js                                                   

main.js は、アプリ内のさまざまな処理を定義している JavaScript
ファイルです。

`BB`
オブジェクトのコードを次に記します。こちらが、アプリで使用する、メインのオブジェクトとなります。プロパティーには、スクリーンサイズ用
( screenSize )、パドル用 ( paddle )、ボール用 ( balls )、ブロック用 (
blocks )、スコア用 ( score )
などがあります。メソッドには、マップの作成用 ( `setMap()`
)、ボールの配置用 ( `addBall()` )、パドルの配置用 ( `addPaddle()`
)、ゲームのリセット用 ( `reset()` )、スコアの計算用 ( `addScore()`
)、ゲームの終了用 ( `endGame()` ) などがあります。

``` {.sourceCode .javascript}
...
var BB = {
    stage: new PIXI.Stage(0x000000),
    renderer: null,
    screenSize: null,
    paddle: null,
    balls: [],
    blocks: [],
    score: 0,
    scoreLabel: null,
    accelLabel: null,
    isMouseDown: false,

    // Create blocks map
    setMap: function() {
        var blockMap = [
            [null,      null,       null,       null,       null,       'blue',     null,       null,       null,       null],
            [null,      null,       null,       null,       'red',      'red',      'blue',     null,       null,       null],
            [null,      null,       null,       'red',      'red',      null,       null,       'blue',     null,       null],
            [null,      null,       'red',      'red',      null,       null,       null,       null,       'blue',     null],
            [null,      'red',      'red',      null,       null,       'gold',     null,       null,       'silver',   'silver'],
            [null,      null,       'red',      'red',       null,       null,       null,       'silver',   'silver',   null],
            [null,      null,       null,       'red',      'red',       null,       'silver',   'silver',   null,       null],
            [null,      null,       null,       null,       'silver',   'silver',   'silver',   null,       null,       null],
            [null,      null,       null,       null,       null,       'silver',   null,       null,       null,       null]
        ];

        for(j = 0; j < blockMap.length; j++) {
            for(i = 0; i < blockMap[j].length; i++) {
                if(blockMap[j][i] !== null) {
                    var block = BB.addBlock(10 + (30 * i), 80 + (12 * j), blockMap[j][i]);
                }
            }
        }
    },

    /**
     * @param {int} x
     * @param {int} y
     * @param {String} color red,blue,silver,gold
     * @return {Object} block
     **/
    addBlock: function(x, y, color) {
        switch (color) {
            case "red":
            case "blue":
                var point = SETTINGS_POINT;
                break;
            case "silver":
                var point = SETTINGS_POINT_SILVER;
                break;
            case "gold":
                var point = SETTINGS_POINT_GOLD;
                break;
            default:
                var point = SETTINGS_POINT;
                color = "red";
                break;
        }

        var texture = PIXI.Texture.fromImage(imgPath["block_" + color], false);
        var block = new PIXI.Sprite(texture);

        block.anchor.x = 0.5;
        block.anchor.y = 0.5;

        block.position.x = x;
        block.position.y = y;

        block.width = 30;
        block.height = 12;

        block.point = point;

        BB.stage.addChild(block);
        BB.blocks.push(block);

        return block;
    },

    // Create a ball and add it to PIXI.Stage
    addBall: function() {
        var texture = PIXI.Texture.fromImage(imgPath["ball"], false);
        var ball = new PIXI.Sprite(texture);

        ball.anchor.x = 0.5;
        ball.anchor.y = 0.5;

        ball.position.x = parseInt(BB.renderer.width * 0.5);
        ball.position.y = 200;

        ball.width = 10;
        ball.height = 10;

        ball.delta = {
            'x' : Math.random() - 0.5,
            'y' : -0.4
        };

        BB.stage.addChild(ball);
        BB.balls.push(ball);
    },

    // Create a paddle and add it to PIXI.Stage
    addPaddle: function() {
        var texture = PIXI.Texture.fromImage(imgPath["paddle"], false);
        BB.paddle = new PIXI.Sprite(texture);

        BB.paddle.anchor.x = 0.5;
        BB.paddle.anchor.y = 0.5;

        BB.paddle.position.x = parseInt(BB.renderer.width * 0.5);
        BB.paddle.position.y = BB.renderer.height - 60;

        BB.paddle.width = 60;
        BB.paddle.height = 10;

        BB.paddle.accel = 0;
        BB.paddle.delta = {
            'x' : Math.random() - 0.5,
            'y' : -3.8
        };

        BB.stage.addChild(BB.paddle);
    },

    /**
     * Add points to current score
     * @param {int} val points to add
     */
    addScore: function(val) {
        BB.score += parseInt(val);
        BB.scoreLabel.setText(BB.score);
    },

    /**
     * Set score
     * @param {int} val new score
     */
    setScore: function(val) {
        BB.score = val;
        BB.scoreLabel.setText(BB.score);
    },

    /**
     * callback for Core Cordova Plugins Acceleration Watch
     * @param {Object} a a.x, a.y, a.z
     */
    updateAcceleration: function(a) {
        var accelText = "", ac = a.x.toFixed(2);

        if(a.x > 0) accelText = '+' + String(ac);
        else accelText = String(ac);

        // Use parameter x to move paddle
        if (BB.paddle !== null) {
          if (BB.paddle.accel / ac > 2.0) {

          } else if (BB.paddle.accel / ac > 0) {
            BB.paddle.accel += ac * SETTINGS_PADDLE_ACCEL;
          } else {
            BB.paddle.accel = ac * SETTINGS_PADDLE_ACCEL;
          }
        }

        BB.accelLabel.setText(accelText);
    },

    // Reset current game and start new one
    reset: function() {
        //Reset (remove all children in the stage if exists)
        for (var i = BB.stage.children.length - 1; i >= 0; i--) {
            BB.stage.removeChildAt(i);
        }

        BB.balls = [];
        BB.blocks = [];
        BB.setMap();
        for (var i = 0; i < SETTINGS_BALL_NUM; i++) {
            BB.addBall();
        }
        BB.addPaddle();

        var resetLabel = new PIXI.Text("RESET", {font: "24px/1.2 vt", fill: "red"});
        resetLabel.position.x = 18;
        resetLabel.position.y = BB.renderer.height - 52;
        BB.stage.addChild(resetLabel);
        resetLabel.buttonMode = true;
        resetLabel.interactive = true;
        resetLabel.click = resetLabel.tap = function(data) {
            BB.reset();
        };
        setTimeout(function() {
            resetLabel.setText("RESET"); //for Android
        }, 1000, resetLabel);

        var label = new PIXI.Text("SCORE:", {font: "24px/1.2 vt", fill: "red"});
        label.position.x = 20;
        label.position.y = 20;
        BB.stage.addChild(label);
        setTimeout(function() {
            label.setText("SCORE:"); //for Android
        }, 1000, label);

        BB.scoreLabel = new PIXI.Text("0", {font: "24px/1.2 vt", fill: "white"});
        BB.scoreLabel.position.x = 90;
        BB.scoreLabel.position.y = 20;
        BB.stage.addChild(BB.scoreLabel);
        BB.setScore(0);

        /*
        var label = new PIXI.Text("ACCEL:", {font: "24px/1.2 vt", fill: "red"});
        label.position.x = 160;
        label.position.y = 20;
        BB.stage.addChild(label);
        label.setText("ACCEL:"); //for Android

        BB.accelLabel = new PIXI.Text("0", {font: "24px/1.2 vt", fill: "white"});
        BB.accelLabel.position.x = 230;
        BB.accelLabel.position.y = 20;
        BB.stage.addChild(BB.accelLabel);
        */

        BB.gameState = GAMESTATE_PLAY;
    },

    /**
     * Check whether the ball hits the object
     * @param {PIXI.Sprite} ball
     * @param {PIXI.Sprite} obj target object
     */
    isBallHit: function(ball, obj) {
        return (ball.position.x > (obj.position.x - (obj.width * 0.5))) &&
            (ball.position.x < (obj.position.x + (obj.width * 0.5))) &&
            (ball.position.y > (obj.position.y - (obj.height * 0.5))) &&
            (ball.position.y < (obj.position.y + (obj.height * 0.5)));
    },

    // Game Over
    endGame: function() {
        BB.gameState = GAMESTATE_STOP;
        vibrate();
    },

    // Game Clear
    clearGame: function() {
        if(typeof navigator.notification !== 'undefined') navigator.notification.alert("Cleared!", function(){}, "Congraturations");
        else alert("Cleared!");

        BB.gameState = GAMESTATE_STOP;
    }
}
...
```

このページの読み込みが開始されると、 `init()` が呼び出されます。Cordova
側の準備が完了したとき、または、端末の種類を検知できなかったとき、いずれの場合でも、`init()`
が呼び出されます。

``` {.sourceCode .javascript}
...
window.onload = function() {
    if(getUa() === false) init();
    else document.addEventListener("deviceready", init, false);
}
...
```

`init()`
関数のコードを次に記します。この関数では、使用されている端末の種類に応じた、BB
オブジェクトのレンダリングを行います。次に、パドルに対して、リスナーを設定します。そして、各イベントに応じて、パドルの位置を決めます。

``` {.sourceCode .javascript}
...
function init() {
    // Accelerometer
    /*
    if (typeof navigator.accelerometer !== 'undefined' && !accelerationWatch) {
        accelerationWatch = navigator.accelerometer.watchAcceleration(
            BB.updateAcceleration,
            function(ex) {
                alert("accel fail (" + ex.name + ": " + ex.message + ")");
            },
            {frequency: SETTINGS_ACCELEROMETER_RELOAD_FREQ}
        );
    }
    */
    BB.screenSize = setBound();

    BB.renderer = (getUa() === "Android") ? new PIXI.CanvasRenderer(BB.screenSize.width, BB.screenSize.height) : new PIXI.autoDetectRenderer(BB.screenSize.width, BB.screenSize.height),
    BB.renderer.transparent = false;
    document.body.appendChild(BB.renderer.view);

    setScale(BB.screenSize);

    BB.reset();

    // Event listeners to control the paddle
    window.addEventListener("touchmove", function(e) {
        BB.paddle.position.x = e.touches[0].clientX / BB.screenSize.zoom;
    });

    window.addEventListener("mousedown", function(e) {
        BB.isMouseDown = true;
    });

    window.addEventListener("mouseup", function(e) {
        BB.isMouseDown = false;
    });

    window.addEventListener("mousemove", function(e) {
        if(BB.isMouseDown) BB.paddle.position.x = e.clientX;
    });

    window.addEventListener("keydown", function(e) {
        switch (e.which) {
            case 37:
                BB.paddle.position.x -= 4;
                BB.paddle.accel += (SETTINGS_PADDLE_ACCEL * 0.1);
                break;
            case 39:
                BB.paddle.position.x += 4;
                BB.paddle.accel -= (SETTINGS_PADDLE_ACCEL * 0.1);
                break;
            case 38:
                BB.paddle.position.y -= 1;
                break;
        }
    });

    requestAnimFrame(animate);
}
...
```

`getUa()` 関数を使用して、端末の種類を検知します。検知できない場合には、
`false` を返します。

``` {.sourceCode .javascript}
...
function getUa() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 ) {
        return 'iPhone';
    } else if(navigator.userAgent.indexOf('iPad') > 0) {
        return 'iPad';
    } else if(navigator.userAgent.indexOf('Android') > 0) {
        return 'Android';
    } else return false;
}
...
```
