gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  let z = {
    f: { //funk gl.db.chit
      db: {//Запись на устройство
        /* 
          .f.db.chit('ключь');//Читаем
          .f.db.pish('ключь', '');//Пишим
          .f.db.udal('ключь');//Удалим
        */
        k: 'gl_', //Начало уникального ключа
        chit: function(k) { //Читаем
          return localStorage.getItem(this.k + k)
        },
        pish: function(k, v) { //Пишим
          localStorage.setItem(this.k + k, v)
        },
        udal: function(k) { //Удалим
          localStorage.removeItem(this.k + k)
        }
      }
    }
  };
  &lt;/script>
  </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
  </script>
`};