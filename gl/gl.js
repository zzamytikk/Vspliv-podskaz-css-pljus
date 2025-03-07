var gl = {
  //POD:() => {},//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
  $: () => { //Запуск
    gl.M.$(); //Кнопки перед меню
  },
  z: { //Настройки
    //Меню:
    //Mx:1//1 - Открыто/undefined/0 - Закрыто
  },
  M: { //Кнопки меню
    $: function() {
      let O = this;
      $('#M').addClass(gl.z.Mx ? 'X' : 0) //Скроем при старте
        .find('>div').append('<div>' + O.X.t() + ' <div></div></div><div class="all-c4">' + //Удалить меню
          O.tema.t() + //Смена фона body
          O.cho.t() + //Подсказки
          O.font.fam.t() + //font-family
          O.font.siz.t() + //font-size
          O.bodyS.t() + //Добавим полосу прокрутки
          '<div>');
      
      //Вешаем click:
      O.tema.t$(); //Смена фона body click + при загрузке установить body class
      O.cho.t$(O); //Подсказки
      O.font.fam.t$(); //font-family
      O.font.siz.t$(); //font-size
      O.bodyS.t$(); //Вешаем click
    },
    cho: { //Подсказки
      t: () => { //Кнопка
        return '<div id="glPodskaz" class="zONas-TR zONasNet">' +
          '<div><button class="B-Ig-vVg"><p></p></button></div>' +
          '<div><div></div></div>' +
          '</div>' +
          '<div class="MspisZ">' +
          '<button class="B-Ig-X B-R-Io all-c0"><p></p></button>' +
          '<div>Меню</div>' +
          '</div>';
      },
      t$: O => { //Первый Запуск Список Меню `Окно` вешаем обработчик / Вешаем click 'Назад к меню/Закрыть окно'
        O.cho.O.$(); //★ Вешаем 'Окно настройки'
        
        $('.MspisZ button').click(function() { //Вешаем click 'Назад к меню/Закрыть окно'
          if ($(this).is('.B-Ig-zad')) { //Откроем окно 'Вернёмся к меню'
            $('#glPodskaz > div:first-child .B-Ig-vVg').click().click();
          } else {
            $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Закроем окно
          }
        });
      },
      O: { //Окно
        U: { //Подгружаем с сайта
          //gl:'/Подсказки/minF/gl.js',//Путь до главного скрипта с настройками
          js: [], //Для script
          //html:''//Содержание Загруженого
        },
        $: function() { //★ Вешаем 'Окно настройки'
          let O = this;
          
          zONas.L2 = (d, b, N, t, M) => { //Сократим
            if(!M){//Открываем раздел
              O.BA(0, gl.M.cho.O.M.R); //Анимация кнопки Закрыть окно/Назад к меню
            }
            
            zONas.L(d, b, N, t); //Выводим наш текст HTML. //htm=false;//Остановит вывод окна!
            
            if(M){//Открываем меню
              O.M.zad.$(); //Вернуть меню как было до нажатия button
              
              //console.debug('Scroll для назад к меню O.M.zad.n.s', O.M.zad.n.s);
              if(O.M.zad.n.s===undefined){//Нe нажали назад к меню
                //console.debug('Открыли меню(В самый низ):', s.height());
                let s=$('#glPodskaz > div:eq(-1)');
                s.scrollTop(s.height());//Открыли меню scroll в самый низ
              }
            }
            
            gl.M.cho.O.U = { //Очистка
              gl: '',
              js: [],
              html: ''
            }; //console.debug(U, gl.M.cho.O.U);
            
            b.removeClass('B-L').removeAttr('disabled');
          };
          
          zONas.$({ //Вешаем обработчик click 
            id: 'glPodskaz', //Путь до <div id="svoi2" class="zONas-
            F: (d, b, N) => { //Своя функция (Сработает при открытии окна)
              //d = $() //<div id="svoi2" class="zONas-
              //b = $() //<button
              //N = $() //Путь до содержания окна
              b.addClass('B-L').attr('disabled', '');
              $('#M > div > :eq(-1)').css('overflow', 'unset'); //Для видимости окна
              
              setTimeout(() => {//Для показа индикатора загрузки
                let U = gl.M.cho.O.U;
                if (U.gl) { //zam.usite.pro
                  $.getScript(U.gl, () => { //Всё `html, и js ссылки для доп подгоузки`
                    U = gl.M.cho.O.U; //Обновим после загрузки
                    //console.debug(typeof U.js, U.js[0]); 
                    if (typeof U.js == 'object' && U.js[0] !== undefined) { //Доп подгоузка js:
                      U.js.forEach((v, k) => {
                        $.getScript(v, () => { //script
                          //console.debug('k['+k+'] == ['+(U.js.length - 1)+'](U.js.length - 1)'); 
                          if (k == (U.js.length - 1)) { //Послед загрузка
                            zONas.L2(d, b, N, gl.M.cho.O.U.html); //Выводим html
                          }
                        }).fail(() => {
                          zONas.L2(d, b, N, '<font color=red>Ошибка подгрузки $.getScript("<u>' + v + '</u>");</font>');
                        });
                      });
                    } else { //Выводим html без подгруза скриптов
                      zONas.L2(d, b, N, gl.M.cho.O.U.html);
                    }
                  }).fail(() => {
                    zONas.L2(d, b, N, '<font color=red>Ошибка подгрузки:<br>$.getScript("<u>' + gl.M.cho.O.U.gl + '</u>");</font>');
                  });
                } else { //Откроем список Меню
                  zONas.L2(d, b, N, O.M.t(), 1);
                  O.M.C(); //Вешаем click По списку меню + Запуск Скрыть/Показать + Поиск
                }
              }, 300); 
            },
            Fx: () => { //При закрытии окна вернём overflow
              $('#M > div > :eq(-1)').removeAttr('style'); //Походу left/right окно
              O.BA(1); //Анимация кнопки Закрыть окно/Назад к меню и Название раздела
              $('#glPodskaz > :eq(-1) > * > *').remove(); //Очистка содержимого окна + снятие .on('click'
              
              delete gl.POD; //Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
            }
          });
        },
        //x=1; Показать кнопку закрыть. x=0; Вернутся к меню
        BA: (x = 0, R) => { //Анимация кнопки Закрыть окно/Назад к меню и Название раздела
          let b = $('.MspisZ'),
            a = ['B-Ig-zad all-c2', 'B-Ig-X all-c0'];
          
          b.css({ right: '-100%', opacity: 0 }); //Спрячим
          //console.debug('removeClass(a['+(+!x)+'] '+a[+!x]+').addClass(a['+x+'] '+a[x]+')');
          setTimeout(() => { //Заменим кнопку и вернём
            b.find('div').text(R || 'Меню'); //Название раздела
            b.removeAttr('style') //Удалим b.css('right', '-100%')
              .find('button').removeClass(a[+!x]).addClass(a[x]);
          }, 400);
        },
        M: { //МЕНЮ gl.M.cho.O.M
          zad: { //Вернуть меню как было до нажатия button
            n: {
              //s:0,//scroll где остановились
              r: [] //Названия открытых разделов
            },
            $: function() { //Вернём
              let b = $('.Mspis2');
              
              this.n.r.forEach(v => {
                b.find('> [zhidb]:contains(' + v + ')').parent().attr('zhid', '0') //Откроем меню2(Которые были открыты)
              });
              
              if (this.n.s) {//Вернём scroll как было до открытия раздела
                $('#glPodskaz > div:eq(-1)').scrollTop(this.n.s)
              }
              this.n = {}; //Очистка 'Вернём меню'
            },
            z: function() { //Запишим
              this.n = {
                s: $('#glPodskaz > div:eq(-1)').scrollTop(),
                r: []
              };
              
              $('.Mspis2[zhid="0"]').each((i, e) => { //Названия открытых разделов
                this.n.r.push($(e).find('[zhidb]').text())
              });
              //console.debug('Названия открытых разделов и scroll:',this.n);
            }
          },
          /* Вешаем click По списку меню
             Запуск Скрыть/Показать
             Вешаем обработчик Поиск
          */
          //R:'Название раздела',
          C: () => { //!!!Каждый раз при открытии окна
            let O = gl.M.cho.O.M;
            
            zHid.$(); //Запуск Скрыть/Показать
            O.src.c(); //Вешаем обработчик Поиск
            
            $('.Mspis > div').on('click.mSpis', e => { //Вешаем click По списку меню
              let M, u, k, n, b = $(e.target); //Что нажали
              //console.debug('click по .Mspis');
              if (/[PSB]|BUTTON/.test(b[0].tagName)) {
                b = !b.is('.B-Ix-kr') //Когда нажали на потомкам <p,s,b>
                  ?b.closest('.B-Ix-kr') //До button
                  :b;
                
                if (b[0]) {
                  O.zad.z(); //Запишим. Вернуть меню как было до нажатия button
                  O.R = b.find('b:eq(0)').text(); //Название нажатой button
                  
                  M = b.parent('.Mspis2')[0]; //true - Меню2/false - Меню1
                  n = M ? b.parent().find('[zhidb]').text() //Название раздела
                    : O.R; //Название нажатой button (Меню1)
                  
                  for (k of O.a) {
                    if (k[0] == n) {
                      u = M //url
                        ?k[1][b.index() - 1][1] //Меню2
                        :k[1]
                      break;
                    }
                  }
                  
                  //console.debug(b.parent('.Mspis2')[0], u); 
                  if (u) {
                    //console.debug('if(gl.M.cho.TEST['+gl.M.cho.TEST+'] && !O.H['+O.H+']) => Открываем в', gl.M.cho.TEST && !O.H?'localhost':'www.zam.usite.pro');
                    //console.debug(b[0].tagName, u);
                    O.u((gl.M.cho.TEST && !O.H
                      ? '/Подсказки' //localhost
                      : 'https://zam.usite.pro/db/Primery'
                    ) + '/' + u + '/gl.js');
                  }
                }
              }
            });
          },
          //H: 1,//1-Откроем только www.zam.usite.pro, undefined-автоОпределение
          //gl.M.cho.O.M.u('/zam.js');
          u: u => { //Подгоузим по url'HTML' в окно настроек
            $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Закроем
            gl.M.cho.O.U.gl = u; //url gl.js
            $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Откроем окно
          },
          a: [ //0-Заголовок(button), 1-url, 2-Раздел/2-[Под меню], теги через зяпятую(для поиска)
            ['Примеры для сайта HTML', [
              ['Кнопки', 'primeri/button', 'button, a, input, select, рамки, иконки, icon, свои, google'],
              ['Цвета .all-c.. --all-..', 'primeri/cvet-cssAll', 'css, root'],
              ['Подсветка кода', 'primeri/zCod', 'html, css, js, zCod.$()'],
              ['Линия разграничения', 'primeri/hr', 'html, css, &lt;hr>'],
              ['Рамки', 'primeri/ramki', 'html, css'],
              ['Информационное окно', 'primeri/okno_inf_menu', 'html, css, js, jquery, окно, Инфо-Подсказка, Информационное окно'],
              ['Всплывающая подсказка css', 'primeri/vPodskazCss', 'html, окно'],
              ['display: flex', 'primeri/flex', 'html, css'],
              ['fieldset', 'primeri/fieldset', 'html, css, рамка с заголовком'],
              ['Подчеркнуть текст', 'primeri/podUtxt', 'html, css, &lt;u>, выделить'],
              ['Спрятать/Показать (hidden)', 'primeri/zHid', 'html, css, js, jquery, скрыть, hidden'],
              ['Запись на устройство', 'primeri/localStorage', 'js, f.db.$(), localStorage'],
              ['Всплывающае "Окно настройки"', 'primeri/OknoNastr', 'html, css, js, jquery'],
              
            ]],
            //['Полезное для сайта', [
            
            //]],
            ['Заметки', '1/zametki', 'планы'],
            ['Презентация', '1/prezentacija', 'html, css, js'],
            ['Сжатие', '1/sokratitCSSjs', 'js, css, minify, Уменьшить, код']
          ],
          //T: 0,//Запись сформированного меню
          t: function() { //return Список меню button
            let i = 0,
              t = this.T;
            
            if (!t) { //1 запуск и Сохраним
              let C, B = (n, t) => '<button class="B-Ix-kr"><p><s></s></p><b>' + n + '</b><b>' + (t || '-') + '</b></button>';
              
              t = '<div class="Mspis"><div>';
              
              this.a.forEach(v => {
                if (typeof v[1] != 'object') {
                  i++;
                  t += B(v[0], v[2]);
                } else { //Подменю
                  C = new Intl.Collator();
                  v[1] = v[1].sort((a, b) => C.compare(a[0], b[0])); //Сортируем по алфавиту
                  
                  t += '<div class="Mspis2" zhid="1">' +
                    '<button zhidb><p><s></s></p><b>' + v[0] + '</b></button>';
                  
                  v[1].forEach(v => {
                    i++;
                    t += B(v[0], v[2]);
                  });
                  
                  t += '</div>'
                }
              });
              
              t += '</div>' +
                '<div class="MspisS">' +
                '<div><b>Всего:</b> <b>' + i + '</b><span><i>' + i + '</i> :Поиск</span></div>' +
                '<div class="B-i-Tx">' + //Поиск
                '<input type="text" placeholder="Поиск" required="">' +
                '<div>' +
                '<button class="B-Ix-X" onclick="$(this).parent().prev().val(\'\').focus()"><p><s></s><s></s></p></button>' +
                '<button class="B-I-src"><p><s></s></p></button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            }
            
            return t
          },
          src: { // Поиск
            $: function() { //Сортируем по поиску input,paste
              let i, I, T, v, b = $(this);
              //console.debug(b[0].tagName);
              if (b[0].tagName != 'INPUT') { //Нажали button
                b = b.parent().prev();
              }
              
              v = b.val().replace(/[ ]{2,}/g, ' '); //Убераем двайные пробелы и больше
              I = $('.MspisS b:eq(1)').text(); //Всего записей
              i = $('.MspisS i').text(); //После поиска записей
              
              //console.debug('if(v.length['+v.length+'] == 0 && I['+I+']==['+i+']i) => '+(v.length == 0 && I==i));
              if (v.length == 0 && I == i) { return } //Остановим! Пусто и нету скрытых
              $('.Mspis2').attr('zhid', 0); //Откроем все разделы
              
              $('.Mspis > div:eq(0) .B-Ix-kr').filter((i, e) => {
                e = $(e);
                T = e.find('b:eq(-1)').text().replace('-', ''); //Список тегов (- уберём пустой тег)
                
                //console.debug(i, 'if(new RegExp(v['+v+'], \'i\').test(['+(e.find('b:eq(0)').text()+T)+']e.find(\'b:eq(0)\').text()+T)) => ' + new RegExp(v, 'i').test(e.text()+T));
                if (new RegExp(v, 'i').test(e.find('b:eq(0)').text() + T)) { //Нашли совпадение
                  e.removeClass('MspisX MspisXr')
                } else { //Уберём
                  e.addClass('MspisX' + (i & 1 ? 'r' : ''))
                }
              });
              
              $('.Mspis2').filter((i, e) => {
                e = $(e);
                
                if (e.find('.B-Ix-kr:not(.MspisX, .MspisXr)')[0]) { //Нашли совпадение
                  e.slideDown();
                } else { //Уберём
                  e.slideUp();
                }
              });
              
              i = $('.Mspis > div:eq(0) .B-Ix-kr:not(.MspisX, .MspisXr)').length;
              
              if (+I == i) { //Всего == после поиска
                $('.Mspis2').attr('zhid', 1); //Откроем разделы
              }
              $('.MspisS i').css('color', i > 0 ? i < i ? '#0b0' : '' : 'red').html(i); //Осталось
            },
            //gl.M.cho.O.M.src.c();//Вешаем обработчик Поиск
            c: () => {
              let f = gl.M.cho.O.M.src.$; //Сортируем по поиску
              //change.mSpisSrc, keyup.mSpisSrc
              $('.Mspis .B-i-Tx input').on('input.mSpisSrc focus.mSpisSrc paste.mSpisSrc', f);
              $('.Mspis .B-I-src').on('click.mSpisSrc', f);
            }
          }
        }
      }
    },
    font: { //font-size/family html
      siz: { //font-size
        $: e => { //$ || string
          let C = typeof e == 'string' ? e : $(e).val();
          
          gl.f.db.pish('font-siz', C);
          
          $('html').css('font-size', C + 'pt')
        },
        t: () => { //кнопки <select
          let s = gl.f.db.chit('font-siz') || 12,
            t = '<div class="B-S"><select id="font-siz">';
          
          [8, 10, 12, 14, 16, 18, 20, 22, 24].forEach(v => {
            t += '<option value="' + v + '"' +
              (v == s ? ' selected' : '') + '>' + v;
          });
          
          return t + '</select></div>'
        },
        t$: () => { //click + localStorage
          let O = gl.M.font.siz,
            l = gl.f.db.chit('font-siz');
          
          if (l) { //Установим font-size в html
            O.$(l);
          }
          
          $('#font-siz').on('change', function() { //click
            O.$(this)
          });
        }
      },
      fam: { //family
        $: e => { //$() || {string}
          let C = typeof e == 'string' ? e : $(e).val();
          
          if (C != 'font-family') {
            gl.f.db.pish('font-fam', C);
            
            $('body').css('font-family', C)
          } else {
            gl.f.db.udal('font-fam'); //Удалим
            $('body').css('font-family', '')
          }
        },
        t: () => { //кнопки <select
          let s = gl.f.db.chit('font-fam'),
            t = '<div class="B-S"><select id="font-fam">' +
            '<option>font-family';
          
          [
            'Istok Web',
            'Comfortaa',
          ].forEach(v => {
            t += '<option value="' + v + '"' +
              (v == s ? ' selected' : '') + '>' + v;
          });
          
          return t + '</select></div>'
        },
        t$: () => { //click + localStorage
          let O = gl.M.font.fam,
            l = gl.f.db.chit('font-fam');
          
          if (l) { //Установим font-family в body
            O.$(l);
          }
          
          $('#font-fam').on('change', function() { //click
            O.$(this)
          });
        }
      }
    },
    bodyS: { //Добавим полосу прокрутки
      $: e => { //V=Вертикально, G=Горизонт
        var b = $('body'),
          v = $(e).val(),
          c = /px$/.test(v);
        //console.debug('val:', v, ', 1 = Цыфры:', c);
        
        if (!c) { //Вертикально/Горизонтально
          b.removeClass('bodyS1 bodyS2');
          
          if (v != 0) {
            gl.f.db.pish('bodyS', v);
            b.addClass('bodyS' + v);
          } else {
            gl.f.db.udal('bodyS'); //Удалим
          }
        }
        
        if (c) { //Пиксели
          if (v != '1700px') {
            gl.f.db.pish('bodyScif', v);
            b.css('--Scroll', v);
          } else {
            gl.f.db.udal('bodyScif'); //Удалим
          }
        }
        
        //console.debug('body class:', b.attr('class'));
        //console.debug('body style:', b.attr('style'));
      },
      t: () => { //кнопки <select
        let c = gl.f.db.chit('bodyScif'),
          s = gl.f.db.chit('bodyS'),
          t = '<div id="bodyS">&nbsp;scroll:<div class="B-S"><select>';
        
        [ //name cif
          '999px',
          '1700px',
          '2500px'
        ].forEach(v => {
          t += '<option value="' + v + '"' +
            (v == c || (!c && /1700px/.test(v)) ? ' selected' : '') + '>' + v
        });
        
        t += '</select><div></div><select>';
        
        a2 = [ //name
          'Выключен',
          'Вертикально',
          'Горизонтально'
        ].forEach((v, i) => {
          t += '<option value="' + i + '"' +
            (i == s ? ' selected' : '') + '>' + v
        });
        
        return t + '</select></div>'
      },
      t$: () => { //СТАРТ Вешаем click
        let b = $('body'),
          c = gl.f.db.chit('bodyScif'),
          s = gl.f.db.chit('bodyS');
        
        if (c && s) { //Пиксели
          b.css('--Scroll', c);
        }
        if (s) {
          b.addClass('bodyS' + s)
        }
        
        $('#bodyS select').on('change', function() {
          gl.M.bodyS.$(this);
        });
      }
    },
    tema: { //Смена фона body
      //e = this <select
      c: e => { //Вырезаем из списка class tema[0-9- и заменим на новый
        let C = $(e).val(),
          s = C.split('/');
        
        gl.f.db.pish('tema', C);
        $('body').removeClass('temaT');
        
        let t = ($('body').attr('class') || '') //Берём весь class и вырезаем tema
          .replace(/(^| )tema[0-9-]+( |$)/, '$1')
          .replace(/ $/, '');
        
        $('body').attr('class',
          (t ? t + ' ' : '') + //вернём classы
          'tema' + s[0] + //и добавим новый
          (s[1] ? ' temaT' : '')
        );
      },
      t: () => { //кнопки <select
        let s = gl.f.db.chit('tema') || 8,
          a = [ //class,color,name,1=тёмный фон
            ['4-2', '012', 'Тёмно синий', 1],
            [8, 'fff', 'Белый'],
            [9, '000', 'Чёрный', 1]
          ],
          t = '<div class="B-S"><select id="tema">';
        
        a.forEach(v => {
          t += '<option value="' + v[0] +
            (v[3] ? '/' + v[3] : '') + '" ' +
            (v[0] == s ? ' selected' : '') + '>' + v[2]
        });
        
        return t + '</select></div>'
      },
      t$: () => { //СТАРТ Вешаем click + проверии localStorage
        let l = gl.f.db.chit('tema'),
          s;
        
        if (l) { //Была запись в db
          s = l.split('/');
          $('body').addClass('tema' + s[0] + (s[1] ? ' temaT' : ''))
        }
        
        $('#tema').on('change', function() {
          gl.M.tema.c(this); //Смена фона
        });
      }
    },
    X: { //Убрать меню
      $: () => {
        let B = $('#M > div [x]'), //button
          x = B.is('.B-I-X2'); //Панель открыта
        
        B.removeClass('B-I-' + (x ? 'X2' : 'Ok')) //Меняем вид кнопки
          .addClass('B-I-' + (x ? 'Ok' : 'X2'));
        
        $('#M').toggleClass('X');
      },
      t: () => {
        return '<button class="B-I-X2" onclick="gl.M.X.$()" x><p><s></s><s></s></p></button>'
      }
    }
  },
  f: { //funk gl.db.chit
    db: { //Запись на устройство
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