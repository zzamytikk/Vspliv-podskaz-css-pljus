/*  ✪ https://zam.usite.pro/publ/...
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var pro = {//Начинаем проект
  $:q => {//★ 
    
  },
  f: { //funk gl.db.chit
    db: {
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

/*
  ★    Название функции
  *     Описание
  •     Описание2
  ◈ ✂ ✓ ✪
*/

//#region       //✦ Уровень 1 ----

//#endregion    //✦ Уровень 1 ----

//#region           //✦✦ Уровень 2 ----

//#endregion        //✦✦ --------------