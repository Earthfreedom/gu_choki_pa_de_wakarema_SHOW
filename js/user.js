//DOMが読み込まれた直後

$(function () {

    //厳密なエラーチェック
    'use strict';


    let user_id = "";
    let room_id = $("#room_id").val();
    // Firebase
    // Initialize Firebase
    let firebaseConfig = {
        apiKey: "AIzaSyCDSgAdntx_VJZpLt7_VvYkGJUDyjp-iEI",
        authDomain: "gu-choki-pa-de-wakarema-show.firebaseapp.com",
        databaseURL: "https://gu-choki-pa-de-wakarema-show.firebaseio.com",
        projectId: "gu-choki-pa-de-wakarema-show",
        storageBucket: "gu-choki-pa-de-wakarema-show.appspot.com",
        messagingSenderId: "519303543239",
        appId: "1:519303543239:web:9b8e50057e58c62d"
    };
    firebase.initializeApp(firebaseConfig);


    let newPostRef = firebase.database().ref();

    // 送信ボタンクリックでメッセージ送信
    // オブジェクトの形でデータを送ってください
    $('#send').on('click', function () {
        // 生成する文字列の長さ
        let l = 8;

        // 生成する文字列に含める文字セット
        let c = "abcdefghijklmnopqrstuvwxyz0123456789";

        let cl = c.length;
        let r = "";
        for (let i = 0; i < l; i++) {
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
        let k = data.key;
        let v = data.val();

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
        }

    });

});