//DOMが読み込まれた直後

$(function () {

    //厳密なエラーチェック
    'use strict';

    // QRコード自動生成部分：坂根
    // ランダム文字列を生成してURLへ追加しQRコードを生成する

    // 生成する文字列の長さ
    var l = 8;

    // 生成する文字列に含める文字セット
    var c = "abcdefghijklmnopqrstuvwxyz0123456789";

    var cl = c.length;
    var r = "";
    for (var i = 0; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
    }
    var RoomID_host = r;
    var qrurl = location.host + "/ikijanken/user.php?RoomID=" + RoomID_host;
    $('.button-box').click(function () {
        $('#qrcode').qrcode({ width: 300, height: 300, text: qrurl });
        console.log(qrurl);
        $('.button-box').css('display', 'none');
        $('.button-box2').css('display', '');
    });

    let index = 0;
    var array_length = [];
    var RoomID_user;
    var result_name = {};
    // Firebase
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBpmpIO7D50IrdCuxtH_aX6rej94ywh78M",
        authDomain: "chatapp-8b295.firebaseapp.com",
        databaseURL: "https://chatapp-8b295.firebaseio.com",
        projectId: "chatapp-8b295",
        storageBucket: "chatapp-8b295.appspot.com",
        messagingSenderId: "763401900420"
    };
    firebase.initializeApp(config);

    var newPostRef = firebase.database().ref();

    newPostRef.on('child_added', function (data) {
        var k = data.key;
        var v = data.val();

        console.log(k, v)

        // ルームIDを設定
        RoomID_user = v.room_id



        // if (RoomID_user === RoomID_host) {

        // array_length.push(v.username);
        // console.log(array_length);

        // for (let index = 0; index < array_length.length; index++) {
        // result_name[index]["user_name"] = v.username;
        // result_name[index]["user_id"] = v.user_id;
        // result_name[index]["user"] = v.user;
        // result_name[index]["room_id"] = v.room_id;
        // result_name[index]["result"] = null;



        result_name[index] = {
            user_name: v.username,
            user_id: v.user_id,
            user: v.user,
            room_id: v.room_id,
            result: null
        };

        index++





        // メッセージ表示
        var str = "";

        str += '<div id="' + k + '" class="a" >';
        str += '<div class="b">';
        str += '<div id="name" style="font-size: 16px;font-weight: bold; color:#ffd700;">' + v.username + "," + '</div>';
        str += '</div>';
        str += '<div class="c">';
        str += '</div>';
        str += '</div>';


        $('#output').append(str)

        // } else {
        //     return;
        // }

        // console.log(result_name);

        // console.log(Object.keys(result_name))

    });

    var group_num = 3;
    console.log(result_name);
    setTimeout(() => {
        var objnantoka = Object.keys(result_name)
        console.log(objnantoka)
        var JSON_data = JSON.stringify(objnantoka)
        console.log(JSON_data)

        //Ajax通信開始
        $.ajax({
            url: 'rand.php',
            type: 'POST',
            data: {
                JSON_data: JSON_data,
                group: group_num
            },
            contentType: 'application/json', // リクエストの Content-Type
            dataType: "json"

            // 2. doneは、通信に成功した時に実行される
            //  引数のdata1は、通信で取得したデータ
            //  引数のtextStatusは、通信結果のステータス
            //  引数のjqXHRは、XMLHttpRequestオブジェクト
        }).done(function (data1, textStatus, jqXHR) {
            // $("#out1").html(jqXHR.status); //jqXHR.statusを表示
            // $("#out2").html(textStatus); //textStatusを表示

            // // 3. キーを指定して値を表示 
            // $("#out4").html(data1["form"]["cs1"]);
            console.log(textStatus)
            // 4. オブジェクトをJSON形式の文字列に変換
            var data2 = JSON.stringify(data1);
            console.log(data2); //コンソールにJSON形式で表示される

            // 5.JSON形式の文字列をオブジェクトにし、
            // キーを指定して値(httpbin.org)を表示
            var data3 = JSON.parse(data2);
            // $("#out5").html(data3["headers"]["Host"]);

            // 6. failは、通信に失敗した時に実行される
        }).fail(function (jqXHR, textStatus, errorThrown) {
            // $("#out1").html(jqXHR.status); //jqXHR.statusを表示
            // $("#out2").html(textStatus); //textStatusを表示
            // $("#out3").html(errorThrown); //errorThrownを表示
            console.log(textStatus)
            console.log(errorThrown)
            // 7. alwaysは、成功/失敗に関わらず実行される
        }).always(function () {
            // $("#out6").html("complete"); //表示3

        });




    }, 3000);







    // Ajaxリクエストが成功・失敗どちらでも発動
    // .always((data) => {

    // });


    // objexct.kyes

    // }
    //ユーザーネームを配列に追加



    //ex: obj{1:{user_name:v.username,user_id:v.user_id,room_id:room_id,result:result}}


    // 指定数でグループ分けをするために割り算（アマ映画ある場合はあまりを）計算する
    // 例：人数11で３グループの場合

    // 11/3=




    // username[name: ear, name:]
    // username[]

    // 4[]
    // 4[]
    // 3[]



    //userのresult画像を出力する
    function q() {

        $("#result").html('<img src="rock.png" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')

        if ("" == 1) {
            $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')

        } else if ("" == 2) {
            $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')
        } else if ("" == 3) {
            $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')
        }

    }
    q()


});