//DOMが読み込まれた直後

$(function () {

    //厳密なエラーチェック
    'use strict';


    var user_id = "";
    var room_id = $("#room_id").val();
    // Firebase


    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyBpmpIO7D50IrdCuxtH_aX6rej94ywh78M",
    //     authDomain: "chatapp-8b295.firebaseapp.com",
    //     databaseURL: "https://chatapp-8b295.firebaseio.com",
    //     projectId: "chatapp-8b295",
    //     storageBucket: "chatapp-8b295.appspot.com",
    //     messagingSenderId: "763401900420"
    // };
    // firebase.initializeApp(config);

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCDSgAdntx_VJZpLt7_VvYkGJUDyjp-iEI",
        authDomain: "gu-choki-pa-de-wakarema-show.firebaseapp.com",
        databaseURL: "https://gu-choki-pa-de-wakarema-show.firebaseio.com",
        projectId: "gu-choki-pa-de-wakarema-show",
        storageBucket: "",
        messagingSenderId: "519303543239"
    };
    firebase.initializeApp(config);


    var newPostRef = firebase.database().ref();

    // 送信ボタンクリックでメッセージ送信
    // オブジェクトの形でデータを送ってください
    $('#send').on('click', function () {
        // 生成する文字列の長さ
        var l = 8;

        // 生成する文字列に含める文字セット
        var c = "abcdefghijklmnopqrstuvwxyz0123456789";

        var cl = c.length;
        var r = "";
        for (var i = 0; i < l; i++) {
            r += c[Math.floor(Math.random() * cl)];
        }
        user_id = r;
        if ($("#username").val() === "") {
            alert("空白はだめだよー")
        } else {
            newPostRef.push({
                user_name: $("#username").val(),
                user_id: user_id,
                user: true,
                result: "",
                room_id: room_id
            })
            document.getElementById("username").value = "";
        }



    });



    newPostRef.on('child_added', function (data) {
        var k = data.key;
        var v = data.val();

        console.log(k, v)

        if (v.user === false && v.room_id === room_id) {

            if (v.user_id === user_id) {
                if (v.result == 0) {
                    $("#result").html('<img src="image/rock.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;margin:0 auto;">')
                    $('.result_none').css('display', 'none');
                    $('.result_end').css('display', '');
                } else if (v.result == 1) {
                    $("#result").html('<img src="image/paper.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;margin:0 auto;">')
                    $('.result_none').css('display', 'none');
                    $('.result_end').css('display', '');
                } else if (v.result == 2) {
                    $("#result").html('<img src="image/scissors.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;margin:0 auto;">')
                    $('.result_none').css('display', 'none');
                    $('.result_end').css('display', '');
                } else if (v.result == 3) {
                    $("#result").html('<img src="image/heaven.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;margin:0 auto;">')
                    $('.result_none').css('display', 'none');
                    $('.result_end').css('display', '');
                }
            }
            // alert("あなたは" + v.result + "グループです。")
        }






        // メッセージ表示

    });




    // //userのresult画像を出力する
    // function q() {

    //     $("#result").html('<img src="rock.png" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')

    //     if ("" == 1) {
    //         $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')

    //     } else if ("" == 2) {
    //         $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')
    //     } else if ("" == 3) {
    //         $("#result").html('<img src="image/01.png"" width="200" alt="" style="border-radius: 50%;border: solid 8px #ffd700;">')
    //     }

    // }
    // q()







});