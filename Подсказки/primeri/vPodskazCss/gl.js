gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
      <b>Всплывающая подсказка</b> обычный блок с текстом, который появляется при наведении на элемент(ссылки, кнопки и т.д).
      Подсказка даёт более подробную информацию о содержимом элемента.
    </div></div> 
    
    <style>
 .infOK > div {
 width: 150px;/* Для оденакого центрования */
 /* border: 1px solid #fff3 */
 min-height: 50px;
 }

 /* Покажем */
 .infOK [class*="inf-"]::after,
 .infOK [class*="inf-"]::before {z-index: 1;
 opacity: 1;
 }
 .infOK [class*="inf-"]::after {
 content: attr(data-t);
 }
 /* Центруем */
 .infOK [class*="inf-"] {
 position: absolute;
 }
 .infOK :is([class*="inf-T"]) {
 top: 115%;
 }
 .infOK [class*="inf-B"] {
 top: 25%;
 }
 .infOK :is([class*="inf-R"], [class*="inf-L"]) {
 top: 50%;
 }

 .infOK :is([class*="inf-TR"], [class*="inf-BR"], .inf-L) {
 left: 90%;
 }
 .infOK :is(.inf-T, .inf-B) {
 left: 50%;
 }
 .infOK :is([class*="inf-TL"], [class*="inf-BL"], .inf-R){
 left: 15%;
 }
 </style>
    <!-- ✂ Цветовой набор -->
    <div class="ram-n1-1 ram-V1-1X infOK">
       <div>
       <dl class="inf-TR all-c0" data-t=".inf-TR .all-c0"></dl>
       </div>
       <div>
       <dl class="inf-T all-c1" data-t=".inf-T .all-c1"></dl>
       </div>
       <div>
       <dl class="inf-TL all-c2" data-t=".inf-TL .all-c2"></dl>
       </div>
       <div>
       <dl class="inf-L all-c3" data-t="inf-L all-c3"></dl>
       </div>
       <div>
       <dl class="inf-BR all-c4" data-t="inf-BR all-c4"></dl>
       </div>
       <div>
       <dl class="inf-R all-c5" data-t="inf-R all-c5"></dl>
       </div>
       <div>
       <dl class="inf-B all-c6" data-t="inf-B all-c6"></dl>
       </div>
       <div>
       <dl class="inf-BL all-c7" data-t="inf-BL all-c7"></dl>
       </div>
       <div>
       <dl class="inf-T all-c8" data-t="inf-T all-c8"></dl>
       </div>
       </div>
     
    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      Для светлого и тёмного фона!
    </div></div>

    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Добавим (html, css) подсказку:</b></h4>
    <p>Для создания подсказки в HTML добавим к нужному элементу пользовательский атрибут <span class="cod-scb">data-t = </span><span class="cod-atr">"Текст подсказки"</span> с текстом подсказки.</p>
    <p>Для выбора <u class="u-n0 all-c1">стороны появления</u> подсказки добавим в атрибут <span class="cod-scb">class</span>:</p>
      
    <div class="ram-n1-1 ram-V1 all-c1"><!-- ✂ Стороны поивления -->
       <div class="inf-R all-c8" data-t="Право центр">
       <i>Право центр</i>
       <b>class</b><s>inf-R</s>
       </div>
       <div class="inf-TL all-c8" data-t="Верх слева на право">
       <i>Верх слева на право</i>
       <b>class</b><s>inf-TL</s>
       </div>
       <div class="inf-T all-c8" data-t="Верх центр">
       <i>Верх центр</i>
       <b>class</b><s>inf-T</s>
       </div>
       <div class="inf-TR all-c8" data-t="Верх справа на лево">
       <i>Верх справа на лево</i>
       <b>class</b><s>inf-TR</s>
       </div>
       <div class="inf-BR all-c8" data-t="Низ справа на лево">
       <i>Низ справа на лево</i>
       <b>class</b><s>inf-BR</s>
       </div>
       <div class="inf-B all-c8" data-t="Низ центр">
       <i>Низ центр</i>
       <b>class</b><s>inf-B</s>
       </div>
       <div class="inf-BL all-c8" data-t="Низ слева на право">
       <i>Низ слева на право</i>
       <b>class</b><s>inf-BL</s>
       </div>
       <div class="inf-L all-c8" data-t="Лево центр">
       <i>Лево центр</i>
       <b>class</b><s>inf-L</s>
       </div>
     </div>
      
    <p>Для выбора <u class="u-n0 all-c1">расцветки подсказки</u> добавим в атрибут <span class="cod-scb">class</span>:</p>
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
     
    <!-- HTML пример -->
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;link href="https://zam.usite.pro/db/publ/tooltipCSS/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Всплывающая подсказка' -->
    </code></div></pre>
    <!-- HTML пример -->
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Установим 'Всплывающая подсказка': -->
    &lt;dl class="inf-TL all-c4" data-t="Пример появления • Верх лево">Наведи на меня мышку&lt;/dl>
    </code></div></pre>
    <b style="color:red">►</b> Исходники(css): <a href="https://github.com/zzamytikk/Vsplyvajushija-podskazka-css/tree/main/tooltipCSS/1-0-0" target="_blank">github</a> <i style="opacity:.4">(m. - Сокращённый вариант, ok. - Подробный)</i>
    
    <h4 class="hr-n1 hr-L all-c7"><b>Для тёмного сайта:</b></h4>
    <!-- HTML пример -->
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Необходимо добавить в body class="temaT" -->
    &lt;body class="temaT">
    </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
  </script>
`};