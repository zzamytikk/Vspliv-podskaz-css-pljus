gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <link href="/db/publ/zHid/1-0-0/m.css" rel="stylesheet">
    <script src="/db/publ/zHid/1-0-0/m.js" defer></script>
    
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
      <b>Скрыть/Показать</b> позволяет частично скрыть некоторые элементы интерфейса. 
      Она может быть полезна в различных ситуациях, например, когда вы хотите частично скрыть большой текст.
    </div></div>
    <!-- Примеры: -->
    <style>
      .prezHid b {
        color:#09F
      }
    </style>
    <fieldset class="all-c1">
      <legend>Примеры</legend>
      <div class="prezHid">
        <div style="--zHidH: 10ex;" zhid><button zhidb><p><s></s></p></button>
          <b>zhid=""</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше 768px: <i style="color:green">Открыто</i>
            <br>&nbsp;&nbsp;• Экран меньше 769px: <i style="color:red">Закрыто</i>
            
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      <hr class="all-c5" style="opacity: .5">
      <div class="prezHid">
        <div style="--zHidH: 10ex;" zhid="1"><button zhidb><p><s></s></p></button>
          <b>zhid="1"</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше 768px: <i style="color:red">Закрыто</i>
            <br>&nbsp;&nbsp;• Экран меньше 769px: <i style="color:red">Закрыто</i>
             
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      <hr class="all-c5" style="opacity: .5">
      <div class="prezHid">
        <div zhid="0"><button zhidb><p><s></s></p></button>
          <b>zhid="0"</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше 768px: <i style="color:green">Открыто</i>
            <br>&nbsp;&nbsp;• Экран меньше 769px: <i style="color:green">Открыто</i>
            
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="0">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Пример2:</b></h4>
      <div style="--zHidH: 7ex;" zhid>
        <div class="ram-V2 gI-inf all-c1">
          <div><button zhidb><p><s></s></p></button>
            Скрыть/Показать — любое содержан ие элемента. текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст..
          </div>
        </div>
      
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        <!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
        &lt;div style="--zHidH: 7ex;" zhid><!-- --zHid:9ex; - Размер видемой области -->
        &nbsp; &lt;div class="ram-V2 gI-inf all-c1">
        &nbsp; &nbsp; &lt;div>
        &nbsp; &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button><!-- button кнопка Открыть/Закрыть -->
        &nbsp; &nbsp; &nbsp; Скрыть/Показать — любое содержан ие элемента. текст текст текст текст текст текст текст
        &nbsp; &nbsp; &lt;/div>
        &nbsp; &lt;/div>
        &lt;/div>
        </code></div></pre>
      </div>
      
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Без рамки:</b></h4>
      <div style="margin: 7px 0; padding: 5px;">
        <div style="--zHid:9ex" zhid="1"><button zhidb><p><s></s></p></button>
          На брег песчаный и пустой,
          И тридцать витязей прекрасных
          Чредой из вод выходят ясных,
          И с ними дядька их морской;
          Там королевич мимоходом
          Пленяет грозного царя;
          Там в облаках перед народом
          Через леса, через моря
          Колдун несёт богатыря;
          В темнице там царевна тужит,
          А бурый волк ей верно служит;
          Там ступа с Бабою Ягой
          Идёт, бредёт сама собой,
          Там царь Кащей над златом чахнет;
          Там русский дух… там Русью пахнет!
          И там я был, и мёд я пил;
          У моря видел дуб зелёный;
          Под ним сидел, и кот учёный
          Свои мне сказки говорил.
  
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px;">&lt;!-- style вид рамки -->
          &nbsp; <!-- --zHid:9ex; - Размер видемой области -->
          &nbsp; &lt;div style="--zHid:2ex" zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; На брег песчаный и пустой,
          &nbsp; &nbsp; И тридцать витязей прекрасных
          &nbsp; &nbsp; Чредой из вод выходят ясных,
          &nbsp; &nbsp; И с ними дядька их морской;
          &nbsp; &nbsp; Там королевич мимоходом
          &nbsp; &nbsp; Пленяет грозного царя;
          &nbsp; &nbsp; Там в облаках перед народом
          &nbsp; &nbsp; Через леса, через моря
          &nbsp; &nbsp; Колдун несёт богатыря;
          &nbsp; &nbsp; В темнице там царевна тужит,
          &nbsp; &nbsp; А бурый волк ей верно служит;
          &nbsp; &nbsp; Там ступа с Бабою Ягой
          &nbsp; &nbsp; Идёт, бредёт сама собой,
          &nbsp; &nbsp; Там царь Кащей над златом чахнет;
          &nbsp; &nbsp; Там русский дух… там Русью пахнет!
          &nbsp; &nbsp; И там я был, и мёд я пил;
          &nbsp; &nbsp; У моря видел дуб зелёный;
          &nbsp; &nbsp; Под ним сидел, и кот учёный
          &nbsp; &nbsp; Свои мне сказки говорил.
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
    </fieldset>
    
    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      <ul class="ram-V0 all-c8">
        <li><b>zhid=""</b> Когда экран меньше 769px автоматически скроет большую часть содержания элемента.</li>
        <li><b>zhid="1"</b> Закрыто.</li>
        <li><b>zhid="0"</b> Открыто.</li>
        <li><b>style="--zHid: 2ex;"</b> размер видемой области.</li>
        <li><b>style="--zHidHs: 2.5ex;"</b> размер затемнения снизу.</li>
        <li><b>style="--zHidC: red;"</b> Цвет затемнения снизу.</li>
      </ul> 
    </div></div> 
    <!-- Возможные изменения: -->
    <fieldset class="all-c2">
      <legend>Возможные изменения</legend>
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Размер видемой области:</b></h4>
      <div class="prezHid">
          <div style="--zHid:2ex" zhid="1"><button zhidb><p><s></s></p></button>
            Установим style="<b>--zHid: 2ex;</b>" размер видемой области.
            <br>По умолчанию = 4ex.
            <br>• ex - Высота шрифта в нижнем регистре.
            <br> &nbsp; &nbsp; &nbsp; &nbsp;- Можно использовать все виды: px, em ...
  
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
              &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
              &lt;!-- --zHid:2ex; - Размер видемой области -->
              &nbsp; &lt;div style="--zHid:2ex" zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
              &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
              &nbsp; &nbsp; Тут содержание элемента...
              &nbsp; &lt;/div>
              &lt;/div>
              </code></div></pre>
          </div>
        </div>
        
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Цвет затемнения снизу:</b></h4>
      <div class="prezHid">
        <div style="--zHidC:red" zhid><button zhidb><p><s></s></p></button>
          Установим style="<b>--zHidC: red;</b>" цвет затемнения снизу.
          <br>По умолчанию = white.
      
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
          &lt;!-- --zHidC:red; - Цвет затемнения снизу -->
          &nbsp; &lt;div style="--zHidC:red" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; Тут содержание элемента...
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
  
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Убрать затемнения снизу:</b></h4>
      <div class="prezHid" style="--zHidC: #0000;" zhid><button zhidb><p><s></s></p></button>
        Установим style="<b>--zHidC: #0000;</b>" цвет затемнения снизу.
        <br>По умолчанию = white.
        
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        &lt;!-- --zHidC: #0000; - Уберает затемнение снизу  -->
        &lt;div style="--zHidC: #0000;" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
        &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
        &nbsp; Текст текст ...
        &lt;/div>
        </code></div></pre>
      </div>
      
      <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Размер затемнения снизу:</b></h4>
      <div class="prezHid">
        <div style="--zHidHs:8ex; --zHid:8ex" zhid><button zhidb><p><s></s></p></button>
          Установим style="<b>--zHidHs: 8ex;</b>" размер видемой области.
          <br>По умолчанию = 2.5ex.
          <br>• ex - Высота шрифта в нижнем регистре.
          <br> &nbsp; &nbsp; &nbsp; &nbsp;- Можно использовать все виды: px, em ...
      
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
          &lt;!-- --zHidHs:8ex; - Размер видемой области -->
          &nbsp; &lt;div style="--zHidHs:8ex" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; Тут содержание элемента...
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
    </fieldset>
    <br> 
    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Подключение к сайту:</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;script src="https://code.jquery.com/jquery-3.7.1.min.js" defer>&lt;/script><!-- Библиотека jQuery -->
    &lt;link href="https://zam.usite.pro/db/publ/zHid/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Меню' -->
    &lt;script src="https://zam.usite.pro/db/publ/zHid/1-0-0/m.js" defer>&lt;/script><!-- Мозг 'Меню' -->
    </code></div></pre>

    <b style="color:red">►</b> Исходники(css, js): <a href="https://github.com/zzamytikk/Hidden-box/tree/main/zHid/1-0-0" target="_blank">github</a> <i style="opacity:.4">(m. - Сокращённый вариант, ok. - Подробный)</i>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в конец &lt;body>..&lt;/body>: -->
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; zHid.$();//★ Спрятать/Показать hid (Запускаем)
    &nbsp; });
    &lt;/script>
    </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
  </script>
`};