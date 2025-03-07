gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
      <b>Всплывающее окно (Настройки/Разное)</b> позволяет быстро и удобно настроить определенные параметры.
      Оно обычно появляется на экране, когда пользователь нажимает на определенную кнопку или выполняет определенные действия.
      В окне настроек пользователь может изменить различные параметры, такие как язык интерфейса, настройки безопасности, настройки звука и многое другое.
    </div></div>

    <fieldset class="all-c1">
      <legend>Пример</legend>
      <style>
        #primerzON > div {
          padding: 7px;
        }
        /* Открыто */
        .pokzoNasO::after {
          opacity: 1;
          transform: translateY(0);
          transition: .7s;
        }
        .pokzoNasO > div:last-child {/* Открываем */
          display: block;
          visibility: visible;/* Вернём видемость для outline при нажатии TAB */
          opacity: 1;
          transform: translateY(0);
          transition: .7s, width .1s, height .1s, left 0s, right 0s;
        }
        /* КОНЕЦ Открыто */
        
        .pokcvettest >div {
          text-align: center;
          margin:9px 0;
          min-width: max-content!important
        }
        .pokcvettest .pokzoNasO {
          left: -20%;
          width:0;
          height: 0;
        }
        .pokcvettest .pokzoNasO > div:last-child {z-index: 1;
          position: relative;
        }
        .pokcvettest .pokzoNasO > div:last-child > div {
          overflow: unset
        }
        .pokcvettest .pokzoNasO::after {
          z-index: 1
        }
      </style>
      <div id="primerzON" style="display: flex; justify-content: center;">
        <div>
          <div class="zONas-TL"><div><button but>Верх в лево</button></div>
            <div><div>
              zONas-TL <br>
              Смена дизайна: <button but>button</button>
            </div></div>
          </div>
        </div>
        <div>
          <div class="zONas-TR"><button but>Верх в право</button>
            <div><div>zONas-TR <br>
             Смена дизайна: <button but>button</button></div></div>
          </div>
        </div>
      </div>
      
      <div id="primerzON" style="display: flex; justify-content: center;">
        <div>
          <div class="zONas-BL"><button but>Низ в лево</button>
            <div><div>zONas-BL <br>
             Смена дизайна: <button but>button</button></div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR"><button but>Низ в право</button>
            <div><div>zONas-BR <br>
             Смена дизайна: <button but>button</button></div></div>
          </div>
        </div>
      </div>
    
      <div class="ram-n1-1 ram-V1-1X pokcvettest">
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c0">
            <div><div>all-c0</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c1">
            <div><div>all-c1</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c2">
            <div><div>all-c2</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c3">
            <div><div>all-c3</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c4">
            <div><div>all-c4</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c5">

            <div><div>all-c5</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c6">
            <div><div>all-c6</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c7">
            <div><div>all-c7</div></div>
          </div>
        </div>
        <div>
          <div class="zONas-BR pokzoNasO zONasO all-c8">
            <div><div>all-c8</div></div>
          </div>
        </div>
      </div>
    </fieldset>
    
    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      <u>ИИ корекция</u>:
      <ul class="ram-V0 all-c8">
        <li>Относительно стенок окна (Горизонтально/Вертикально)</li>
        <li>При изменении размера <u>браузер окна</u> или поворот телефона (Горизонтально, Вертикально)</li>
      </ul>
    </div></div>
    
    <div class="ram-V0 ram-V2 gI-inf all-c2"><div style="--zHid:6ex; --zHidC:#0000" zhid="1">
      <u>Список всех переменных</u>:<button zhidb><p><s></s></p></button>
      <ul class="ram-V0 all-c8">
        <li><b>id: 'svoi2'</b> путь до &lt;div id="svoi2" class="zONas-</li>
        <li><b>ON: 'keyup'</b> сменим обработку событий $.on('keyup.zONas');</li>
        <li><b>ON: undefined</b> по умолчанию $.on('click.zONas');</li>
        <li><b>F: (d, b, N) => {}</b> своя функция (Сработает при открытии окна)</li>
        <li><b>Fx: d => {}</b> своя функция (Сработает при закрытии окна)</li>
      </ul>
      <u>Доп информация</u>:
      <ul class="ram-V0 all-c8">
        <li><b>zONas.O.o = 8;</b> задаём свой отступ от стенок. (По умолчанию 4)</li>
        <li><b>zONas.$();</b> поиск всех(для запуска) &lt;div class="zONas-, если не установлен &lt;div id=".."</li>
        <li><b>class="zONasNet"</b> установит запрет на закрытие окна, при открытии другова. (Закрывается только при нажатии на &lt;button)</li>
      </ul>
    </div></div>
    
    <div class="ram-V0 ram-V2 gI-inf all-c0"><div>
      <u>По умолчанию установлен поиск только кнопки: &lt;button></u>
      <ul class="ram-V0 all-c8">
        <li>Для выбора другой кнопки необходимо добавить:</li> 
        <li><b>id</b> &lt;a id="zonasb">кнопка&lt;/a></li>
        <li><b>class</b> &lt;a class="zonasb">кнопка&lt;/a></li>
      </ul>
    </div></div>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Подключение к сайту:</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;script src="https://code.jquery.com/jquery-3.7.1.min.js" defer>&lt;/script>&lt;!-- Библиотека jQuery -->
    &lt;link href="https://zam.usite.pro/db/publ/zONas/1-0-0/m.css" rel="stylesheet">&lt;!-- Вид 'Меню' -->
    &lt;script src="https://zam.usite.pro/db/publ/zONas/1-0-0/m.js" defer>&lt;/script>&lt;!-- Мозг 'Меню' -->
    </code></div></pre>

    <b style="color:red">►</b> Исходники(css, js): <a href="https://github.com/zzamytikk/Okno_nastroiki/tree/main/zONas/1-0-0" target="_blank">github</a> <i style="opacity:.4">(m. - Сокращённый вариант, ok. - Подробный)</i>
    
    <style>
      .ramPriStor > div {
        width: max-content;
      }
    </style>
    <p>Для выбора <u class="u-n0 all-c1">стороны появления</u> подсказки добавим в атрибут <span class="cod-scb">class</span>:</p>
    <div class="ramPriStor ram-n1-1 ram-V1 all-c1"><!-- ✂ Стороны поивления -->
      <div>
        <i>Верх в лево</i>
        <b>class</b><s>zONas-TL</s>
      </div>
      <div>
        <i>Верх в право</i>
        <b>class</b><s>zONas-TR</s>
      </div>
      <div>
        <i>Низ в лево</i>
        <b>class</b><s>zONas-BL</s>
      </div>
      <div>
        <i>Низ в право</i>
        <b>class</b><s>zONas-BR</s>
      </div>
    </div>

    <p>Для выбора <u class="u-n0 all-c1">расцветки</u> добавим в атрибут <span class="cod-scb">class</span>:</p>
    <div class="ram-n1-1 ram-V1 all-c2"><!-- ✂ Цвета -->
      <div>
        <i>Красная</i>
        <b>class</b><s>all-c0</s>
      </div>
      <div>
        <i>Зелёный</i>
        <b>class</b><s>all-c1</s>
      </div>
      <div>
        <i>Оранжевый</i>
        <b>class</b><s>all-c2</s>
      </div>
      <div>
        <i>Жёлтый</i>
        <b>class</b><s>all-c3</s>
      </div>
      <div>
        <i>Синий</i>
        <b>class</b><s>all-c4</s>
      </div>
      <div>
        <i>Серый</i>
        <b>class</b><s>all-c5</s>
      </div>
      <div>
        <i>Розовый</i>
        <b>class</b><s>all-c6</s>
      </div>
      <div>
        <i>Океан</i>
        <b>class</b><s>all-c7</s>
      </div>
      <div>
        <i>Белый/Чёрный</i>
        <b>class</b><s>all-c8</s>
      </div>
    </div>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Вариант 1:</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;div class="zONas-TL all-c4">
    &nbsp; &lt;button>button&lt;/button>&lt;!-- Ваша кнопка (Открыть/Закрыть Всплывающее окно (Настройки/Разное)) -->
    &nbsp; &lt;div>&lt;div>
    &nbsp; &nbsp; Ваш текст тут..
    &nbsp; &lt;/div>&lt;/div>
    &lt;/div>
    
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; //zONas.O.o = 8;//Задаём свой отступ от стенок. (По умолчанию 4)
    &nbsp; &nbsp; //zONas.$(); поиск всех &lt;div class="zONas-, если не установлен &lt;div id=".."
    &nbsp; &nbsp; zONas.$();//★ Запускаем Всплывающее окно (Настройки/Разное)
    &nbsp; });
    &lt;/script>
    </code></div></pre>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Вариант 2:</b></h4>
    <p>Своя функция с выводом своего содержания окна</p>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;div id="svoi2" class="zONas-TL all-c4">
    &nbsp; &lt;button>button&lt;/button>&lt;!-- Ваша кнопка (Открыть/Закрыть Всплывающее окно (Настройки/Разное)) -->
    &nbsp; &lt;div>&lt;div>&lt;/div>&lt;/div>
    &lt;/div>
    
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; //Поиск по &lt;div id="svoi2"
    &nbsp; &nbsp; zONas.$({//★ Запускаем индивидуально для подгруза
    &nbsp; &nbsp; &nbsp; id: 'svoi2', //Путь до &lt;div id="svoi2" class="zONas-
    
    &nbsp; &nbsp; &nbsp; F: (d, b, N) => {//Своя функция (Сработает при открытии окна)
    &nbsp; &nbsp; &nbsp; &nbsp; //d = $() //&lt;div id="svoi2" class="zONas-
    &nbsp; &nbsp; &nbsp; &nbsp; //b = $() //&lt;button
    &nbsp; &nbsp; &nbsp; &nbsp; //N = $() //Путь до содержания окна
    
    &nbsp; &nbsp; &nbsp; &nbsp; zONas.L(d, b, N, 'Тут ваш <b>текст</b>');//Выводим наш текст HTML. //htm=false;//Остановит вывод окна!
    &nbsp; &nbsp; &nbsp; }
    &nbsp; &nbsp; });
    &nbsp; });
    &lt;/script>
    </code></div></pre>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Вариант 3:</b></h4>
    <p>Своя функция после закрытия окна</p>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;div id="svoi2" class="zONas-TL all-c4">
    &nbsp; &lt;button>button&lt;/button>&lt;!-- Ваша кнопка (Открыть/Закрыть Всплывающее окно (Настройки/Разное)) -->
    &nbsp; &lt;div>&lt;div>&lt;/div>&lt;/div>
    &lt;/div>
    
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; //Поиск по &lt;div id="svoi2"
    &nbsp; &nbsp; zONas.$({//★ Запускаем индивидуально для подгруза
    &nbsp; &nbsp; &nbsp; id: 'svoi2', //Путь до &lt;div id="svoi2" class="zONas-
    
    &nbsp; &nbsp; &nbsp; F: (d, b, N) => {//Своя функция (Сработает при открытии окна)
    &nbsp; &nbsp; &nbsp; &nbsp; //d = $() //&lt;div id="svoi2" class="zONas-
    &nbsp; &nbsp; &nbsp; &nbsp; //b = $() //&lt;button
    &nbsp; &nbsp; &nbsp; &nbsp; //N = $() //Путь до содержания окна
    
    &nbsp; &nbsp; &nbsp; &nbsp; zONas.L(d, b, N, 'Тут ваш <b>текст</b>');//Выводим наш текст HTML. //htm=false;//Остановит вывод окна!
    &nbsp; &nbsp; &nbsp; &nbsp; $('#over').css('overflow', 'unset');//Добавим видимость
    &nbsp; &nbsp; &nbsp; },
    
    &nbsp; &nbsp; &nbsp; Fx: d => {//Своя функция (Сработает при закрытии окна)
    &nbsp; &nbsp; &nbsp; &nbsp; //d = $() //&lt;div id="svoi2" class="zONas-

    &nbsp; &nbsp; &nbsp; &nbsp; $('#over').removeAttr('style');//Вернём
    &nbsp; &nbsp; &nbsp; }
    &nbsp; &nbsp; });
    &nbsp; });
    &lt;/script>
    </code></div></pre>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Вариант 4:</b></h4>
    <p>Обработка $.ajax(); + смена обработки событий keyup, input,..</p>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;div id="svoi3" class="zONas-TL all-c4">
    &nbsp; &lt;button>button&lt;/button>&lt;!-- Ваша кнопка (Открыть/Закрыть Всплывающее окно (Настройки/Разное)) -->
    &nbsp; &lt;div>&lt;div>&lt;/div>&lt;/div>
    &lt;/div>
    
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; //Поиск по &lt;div id="svoi3"
    &nbsp; &nbsp; zONas.$({//★ Запускаем индивидуально для подгруза
    &nbsp; &nbsp; &nbsp; id: 'svoi3', //Путь до &lt;div id="svoi3" class="zONas-
    &nbsp; &nbsp; &nbsp; ON: 'keyup', //Сменим обработку событий $.on('keyup.zONas');
    &nbsp; &nbsp; &nbsp; //ON: undefined, //По умолчанию $.on('click.zONas');
    
    &nbsp; &nbsp; &nbsp; F: (d, b, N) => {//Своя функция (Сработает при открытии окна)
    &nbsp; &nbsp; &nbsp; &nbsp; //d = $() //&lt;div id="svoi3" class="zONas-
    &nbsp; &nbsp; &nbsp; &nbsp; //b = $() //&lt;button
    &nbsp; &nbsp; &nbsp; &nbsp; //N = $() //Путь до содержания окна
    
    &nbsp; &nbsp; &nbsp; &nbsp; $.ajax({
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: '/testAjax.html', //Куда отправить запрос.
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dataType: 'html', //Тип данных в ответе (xml, json, script, html).
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; success: function(htm){ //Функция которая будет выполнена после успешного запроса.
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //Тут можно обработать до вывода: htm = htm.replace(/удали меня/,'');
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; zONas.L(d, b, N, htm);//Выводим наш текст HTML. //htm=false;//Остановит вывод окна!
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
    &nbsp; &nbsp; &nbsp; &nbsp; });
    &nbsp; &nbsp; &nbsp; }
    &nbsp; &nbsp; });
    &nbsp; });
    &lt;/script>
    </code></div></pre>

    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Вариант 5:</b></h4>
    <p><span class="cod-scb">class</span>="<u class="u-n0 all-c1">zONasNet</u>" установит запрет на закрытие окна, при открытии другова. (Закрывается только при нажатии на &lt;button)</p>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;div class="zONas-TL zONasNet all-c4">
    &nbsp; &lt;button>button&lt;/button>&lt;!-- Ваша кнопка (Открыть/Закрыть Всплывающее окно (Настройки/Разное)) -->
    &nbsp; &lt;div>&lt;div>
    &nbsp; &nbsp; Ваш текст тут..
    &nbsp; &lt;/div>&lt;/div>
    &lt;/div>
    
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; //zONas.O.o = 8;//Задаём свой отступ от стенок. (По умолчанию 4)
    &nbsp; &nbsp; //zONas.$(); поиск всех &lt;div class="zONas-, если не установлен &lt;div id=".."
    &nbsp; &nbsp; zONas.$();//★ Запускаем Всплывающее окно (Настройки/Разное)
    &nbsp; });
    &lt;/script>
    </code></div></pre>
    
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Для тёмного сайта:</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Необходимо добавить в body class="temaT" -->
    &lt;body class="temaT">
    </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    zONas.$();//★ Запускаем Всплывающее окно (Настройки/Разное)
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};