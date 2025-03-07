gl.M.cho.O.U = {
  js:['https://zam.usite.pro/db/Primery/1/sokratitCSSjs/m.js'],
  html: `
  <link href="https://zam.usite.pro/db/Primery/1/sokratitCSSjs/m.css" rel="stylesheet">
  <style>/* Корекция под браузер окно (на всю): */
    #glPodskaz #minF {
      position:relative;
      top:0;
      width: calc(100vw - 18px);
      height: calc(100vh - 3.8em);/* - Отступ от верха */
    }
    #glPodskaz #minF .B-i-TAx button {
      --B-I-O:6px/* Отступ между рамкой и иконкой */
    }
  </style>
    <div id="minF" class="flex-w" style="---flexW:50%;">
      <div>
        <div>
          <div class="B-i-CR all-c1">
            <input type="radio" name="minF" value="0" checked>
            <s></s><b>js</b>
          </div>
          <div class="B-i-CR all-c1">
            <input type="radio" name="minF" value="1">
            <s></s><b>css</b>
          </div>
          
          (<span style="font-weight:400; color:red">...</span>):
        </div>
        
        <div class="B-i-TAx all-c4">
          <textarea placeholder="Введите текст для сокращения" required></textarea>
          <div>
            <button class="B-Ix-X B-R-Io all-c0" onclick="$(this).parent().prev().val('').focus()"><p><s></s><s></s></p></button>
          </div>
        </div>
      </div>
      <div>
        <div>
          Сократили (<span class="SRK-minus">...</span>):
        </div>
        <div class="B-i-TAx all-c1">
          <textarea placeholder="..." required disabled></textarea>
          <div>
            <button class="B-Ig-cop B-R-Io all-c1" pokaz><p></p></button>
          </div>
        </div>
      </div>
    </div>

  <script>
    minF.c();
    zBiT.c();//Вешаем 'Скопировать текст из textarea'
  </script>
`};