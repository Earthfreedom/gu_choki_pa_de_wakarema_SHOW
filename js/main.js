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
        document.getElementById("qrurllink").href = qrurl;
        $('#qrcode').qrcode({ width: 300, height: 300, text: qrurl });
        console.log(qrurl);
        $('.button-box').css('display', 'none');
        $('.button-box2').css('display', '');
        $('#qrcodecontents').css('display', '');
        $('.groupnuminput').css('display', '');
    });

    let index = 0;
    var array_length = [];
    var RoomID_user;
    var result_name = {};
    var jsonresult
    // Firebase
    // Initialize Firebase
    var config = {
        apiKey: "*********************************",
        authDomain: ""*********************************",",
        databaseURL: ""*********************************",",
        projectId: ""*********************************",",
        storageBucket: "",
        messagingSenderId: "519303543239"
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
            var str = "";

            str += '<div id="' + k + '" class="a" >';
            str += '<div class="b">';
            str += '<div id="name" style="font-size: 16px;font-weight: bold; color:#ffd700;">' + v.user_name + "," + '</div>';
            str += '</div>';
            str += '<div class="c">';
            str += '</div>';
            str += '</div>';


            $('#output').append(str)
            var result_name_length_inner = Object.keys(result_name).length
            document.getElementById('user_name_num').innerHTML = '参加人数' + result_name_length_inner + '人';
        }


    });



    // ここにindex.phpから取得したグループ数を設定する


    console.log(result_name);

    $('.button-box2').click(function () {
        var group_num = $("#groupnum").val();
        // setTimeout(() => {
        var objnantoka = Object.keys(result_name)
        console.log(objnantoka)
        var JSON_data = JSON.stringify(objnantoka)
        console.log(JSON_data)

        $.ajax({
            url: 'rand.php',
            type: 'POST',
            // data: { 'JSON_data': JSON_data },


            data: {
                'JSON_data': JSON_data,
                'group': group_num
            },


            // contentType: 'application/json', // リクエストの Content-Type
            // dataType: "json"

        })
            // Ajaxリクエストが成功した時発動
            .done((data) => {
                // $('.result').html(data);
                console.log(data)


                // .then(doc => {
                //     console.log("then");
                // })
                // .catch(error => {
                //     console.log('document add error!');
                //     console.log(error);
                // });

            })
            // Ajaxリクエストが失敗した時発動
            .fail((data) => {
                // $('.result').html(data);
                console.log(data);
            })
            // Ajaxリクエストが成功・失敗どちらでも発動
            .always((data) => {

                var jsonajaxdata = data.responseText
                var jsonslice = jsonajaxdata.slice(11)

                jsonresult = JSON.parse(jsonslice)



                console.log(jsonresult)
                console.log(result_name)
                var result_name_length = Object.keys(result_name).length;
                console.log(result_name_length);
                for (let index = 0; index < jsonresult.length; index++) {
                    var element = jsonresult[index];
                    console.log(element)
                    for (let index2 = 0; index2 < element.length; index2++) {
                        var element2 = element[index2];
                        console.log(element2)
                        var element3 = Number(element2)
                        console.log(element3)

                        for (let index3 = 0; index3 < result_name_length; index3++) {
                            if (element3 === index3) {
                                console.log("処理")
                                console.log(index)
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

                console.log(result_name)
            });
        // }, 3000);




        // setTimeout(() => {


        // }, 5000);


    })




    // $('#qrcodecontents').modaal();



});
