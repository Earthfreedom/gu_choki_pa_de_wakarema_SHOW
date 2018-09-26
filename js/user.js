//DOMが読み込まれた直後

$(function () {

    //厳密なエラーチェック
    'use strict';


    // 生成する文字列の長さ
    var l = 8;

    // 生成する文字列に含める文字セット
    var c = "abcdefghijklmnopqrstuvwxyz0123456789";

    var cl = c.length;
    var r = "";
    for (var i = 0; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
    }
    var user_id = r;

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

    // 送信ボタンクリックでメッセージ送信
    // オブジェクトの形でデータを送ってください
    $('#send').on('click', function () {
        newPostRef.push({
            user_name: $("#username").val(),
            user_id: user_id,
            user: "true",
            room_id: $("#room_id").val()
        })

    });



    newPostRef.on('child_added', function (data) {
        var k = data.key;
        var v = data.val();

        console.log(k, v)



        // メッセージ表示
        var str = "";

        $('#output').append(str);
    });












});