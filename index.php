<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Простое задание</title>
    <link rel="stylesheet" href="pub/css/main.css">

</head>
<body>
    <button id="startRecordingNames" onclick="startRecordingNames()">старт</button>
    <button id="showRecords" onclick="showRecords()">просмотр результатов</button>

    <table id="fieldRecords">
        <tr>
            <td>Кто победил</td>
            <td>Когда победил</td>
        </tr>
    </table>

    <label hidden for="input_player1">Первый Игрок
        <input type="text" id="input_player1" hidden />
    </label>
    <label hidden for="input_player2">Второй игрок
        <input type="text" id="input_player2" hidden />
    </label>

    <input hidden type="Submit" id="startGame" onclick="StartGame()" value="начать игру">
    <table id="field">
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <p id="currentPlayer"></p>
    <button id="redirectButton" onclick="redirectHome()" >Обратно</button>
    <script src="/tic-tac-toe/pub/js/main.js"></script>

</body>
</html>