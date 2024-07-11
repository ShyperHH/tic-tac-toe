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
    <div>
        <button class="buttonBackPart" id="startRecordingNames" onclick="startRecordingNames()">
            <div class="buttonFrontPart">
                старт
            </div>
        </button>

        <button class="buttonBackPart" id="showRecords" onclick="showRecords()">
            <div class="buttonFrontPart">
                результаты
            </div>
        </button>
    </div>


    <table id="fieldRecords">
        <caption>
            Результаты игры
        </caption>
        <thead>
            <tr>
                <th>Кто победил</th>
                <th>Когда победил</th>
            </tr>
        </thead>
        <tbody>

        </tbody>

    </table>

    <div class="fieldsEnterNames">
        <input type="text" id="input_player1" hidden />
        <label hidden for="input_player1">Первый Игрок</label>


        <input type="text" id="input_player2" hidden />
        <label hidden for="input_player2">Второй игрок</label>

        <button class="buttonBackPart" hidden id="startGame" onclick="StartGame()" >
            <div class="buttonFrontPart">
                Начать игру
            </div>
        </button>
    </div>



    <table id="field">
        <caption>Игровое поле</caption>
        <tbody>
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
        </tbody>
    </table>
    <p id="currentPlayer"></p>
    <button class="buttonBackPart" id="redirectButton" onclick="redirectHome()" >
        <div class="buttonFrontPart">
            Обратно
        </div>
    </button>
    <script src="/tic-tac-toe/pub/js/main.js"></script>

</body>
</html>