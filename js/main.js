//DOMが読み込まれた直後

$(function () {

    //厳密なエラーチェック
    'use strict';

    // QRコード自動生成部分：坂根
    // ランダム文字列を生成してURLへ追加しQRコードを生成する

    // 生成する文字列の長さ
    let l = 8;

    // 生成する文字列に含める文字セット
    const c = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cl = c.length;
    let r = "";
    for (let i = 0; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
    }
    let RoomID_host = r;
    let qrurl = location.host + "/ikijanken/user.php?RoomID=" + RoomID_host;
    $('.button-box').click(function () {
        document.getElementById("qrurllink").href = qrurl;
        $('#qrcode').qrcode({ width: 300, height: 300, text: qrurl });
        console.log(qrurl);
        $('.button-box').css('display', 'none');
        $('.button-box2').css('display', '');
        $('#qrcodecontents').css('display', '');
        $('.groupnuminput').css('display', '');
    });

    let index = 0;
    let array_length = [];
    let RoomID_user;
    let result_name = {};
    let jsonresult
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

    newPostRef.on('child_added', function (data) {
        let k = data.key;
        let v = data.val();

        // ルームIDを設定
        RoomID_user = v.room_id

        if (RoomID_user === RoomID_host && v.user === true) {
            result_name[index] = {
                user_name: v.user_name,
                user_id: v.user_id,
                user: v.user,
                room_id: v.room_id,
                result: null
            };
            index++
            // メッセージ表示
            let str = "";
            str += '<div id="' + k + '" class="a" >';
            str += '<div class="b">';
            str += '<div id="name" style="font-size: 16px;font-weight: bold; color:#ffd700;">' + v.user_name + "," + '</div>';
            str += '</div>';
            str += '<div class="c">';
            str += '</div>';
            str += '</div>';
            $('#output').append(str)
            let result_name_length_inner = Object.keys(result_name).length
            document.getElementById('user_name_num').innerHTML = '参加人数' + result_name_length_inner + '人';
        }
    });
    // ここにindex.phpから取得したグループ数を設定する

    $('.button-box2').click(function () {
        let group_num = $("#groupnum").val();

        let objnantoka = Object.keys(result_name)

        let JSON_data = JSON.stringify(objnantoka)

        $.ajax({
            url: 'rand.php',
            type: 'POST',

            data: {
                'JSON_data': JSON_data,
                'group': group_num
            },

        })
            // Ajaxリクエストが成功した時発動
            .done((data) => {
                console.log(data)

            })
            // Ajaxリクエストが失敗した時発動
            .fail((data) => {
                console.log(data);
            })
            // Ajaxリクエストが成功・失敗どちらでも発動
            .always((data) => {

                let jsonajaxdata = data.responseText
                let jsonslice = jsonajaxdata.slice(11)

                jsonresult = JSON.parse(jsonslice)

                let result_name_length = Object.keys(result_name).length;

                for (let index = 0; index < jsonresult.length; index++) {
                    let element = jsonresult[index];

                    for (let index2 = 0; index2 < element.length; index2++) {
                        let element2 = element[index2];

                        let element3 = Number(element2)

                        for (let index3 = 0; index3 < result_name_length; index3++) {
                            if (element3 === index3) {

                                result_name[index3].result = index;
                                result_name[index3].user = false;
                                newPostRef.push({
                                    user_name: result_name[index3].user_name,
                                    user_id: result_name[index3].user_id,
                                    user: result_name[index3].user,
                                    result: result_name[index3].result,
                                    room_id: result_name[index3].room_id
                                })
                            }
                        }
                    }
                }
            });
    })

});
