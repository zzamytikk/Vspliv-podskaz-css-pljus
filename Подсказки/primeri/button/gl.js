gl.M.cho.O.U = {
  js:['https://zam.usite.pro/db/Primery/primeri/button/ok.js'],//js.$
  html: `
  
  <style>
      .flex-w {
        ---flexW:33.3%;
        --zHid:6.3ex
      }
      
      fieldset.all-c1 [zhid] {
        padding-top:1px/* Уберает дёрганье */
      }
      
      #ubrRam [class*="zONas-"] #cod {/* Убераем рамку */
        margin:0;
        border:0;
        box-shadow:unset;
      }
      #ubrRam [class*="zONas-"] > div:last-child {
        padding: 0
      }
    </style>
    <!-- .B- <b>Текст: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>.B- Текст</legend>
          <button class="B-"><b>button</b></button>,
          <a class="B-" href=""><b>Атекст</b></a>
       
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-bottom:0">
            <li><b>&lt;div style="--B-Cm: red;">&lt;button...</b> для всех</li>
            <li><b>&lt;button style="--B-C: red;"</b> только для 1</li>
          </ul>
        </fieldset>
      </div>
    </div>
    <!-- .B-I(x)- Иконки мои &lt;p>&lt;s>: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1">
          <legend>.B-I(x)- Иконки мои &lt;p>&lt;s> (+Смена)</legend>

          <button class="B-Ix-M"><p><s></s><s></s></p></button>,
          <button class="B-Ix-kr"><p><s></s></p></button>,
          <button class="B-Ix-X"><p><s></s><s></s></p></button>,
          <button class="B-I-X2"><p><s></s><s></s></p></button>,
          <button class="B-I-src"><p><s></s></p></button>,
          <button class="B-I-Ok"><p><s></s></p></button>,
          <button class="B-I-Ok2"><p><s></s></p></button>,
          <button class="B-I-hidV"><p><s></s></p></button>,
          <button class="B-I-hidV1"><p><s></s></p></button>,
          <br>
          <button style="--B-C:green" class="B-Ix-M"><p><s></s><s></s></p></button>,
          <a class="B-Ix-M" href=""><p><s></s><s></s></p></a>,
          <button style="--B-I-C:red" class="B-Ix-M"><p><s></s><s></s></p><b>button yg</b></button>,
          <a class="B-Ix-M" href=""><p><s></s><s></s></p><b>Атекст</b></a>,
          <br>
          <button class="B-Ix-kr"><p><s></s></p><b>текст</b></button>,
          <button class="B-Ix-X"><p><s></s><s></s></p><b>текст</b></button>,
          <button class="B-I-src"><p><s></s></p><b>текст</b></button>,
          
          <!-- Смена 1-й на другую: -->
          <h4 class="hr-n1 hr-L" style="--hr-Ct: var(--Ct)"><b>Смена 1-й на другую:</b></h4> 
          <button class="B-Ix-M" onclick="js.F.Bs(this)"><p><s></s><s></s></p><b>Меняем B-Ix-M на B-Ix-X</b></button>
          <button class="B-Ix-M" onclick="js.F.Bs(this)"><p><s></s><s></s></p><b>Меняем B-Ix-M на B-I-X2</b></button>
          <button class="B-I-hidV" onclick="js.F.Bs(this)"><p><s></s><s></s></p><b>Меняем B-I-hidV на B-I-hidV1</b></button>
          
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-bottom:0">
            <li><b>&lt;button style="--B-I-O: 4px;"</b> отступ между &lt;button(рамка) и &lt;p(icon)</li>
            <li><b>&lt;div style="--B-I-Om: 4px;">&lt;button...</b> для всех</li>
            <li><b>&lt;button style="--B-I-C: red;"</b> цвет иконки</li>
            <li><b>&lt;button style="--B-C: red;"</b> цвет текста</li>
          </ul>
        </fieldset>
      </div>
    </div>
    <!-- .B-Ig- Иконки google &lt;p>: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>.B-Ig- Иконки google &lt;p></legend>
          <button style="--B-I-C:#0b0" class="B-Ig-don"><p></p></button>,
          <button class="B-Ig-don" style="--B-I-C:#0b0"><p></p><b>B-Ig-don</b></button>,

          <button class="B-Ig-kat"><p></p></button>, 
          <button class="B-Ig-kat"><p></p><b>B-Ig-kat</b></button>,
          <br>
          <button class="B-Ig-nas"><p></p></button>,
          <button class="B-Ix-X B-R-Io all-c0"><p><s></s><s></s></p></button>,
          <button style="--B-I-O: 9px;" class="B-Ig-cop B-R-Io all-c1"><p></p></button>,
          
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-bottom:0">
            <li><b>Все иконки:</b> https://fonts.google.com/icons?icon.size=24</li>
            <li><b>&lt;button style="--B-I-O: 4px;"</b> отступ между &lt;button(рамка) и &lt;p(icon)</li>
            <li><b>&lt;div style="--B-I-Om: 4px;">&lt;button...</b> для всех. (отступ между &lt;button'рамка' и &lt;p'icon')</li>
            <li><b>&lt;button style="--B-I-C: red;"</b> цвет иконки</li>
            <li><b>&lt;button style="--B-C: red;"</b> цвет текста</li>
          </ul>
        </fieldset>
      </div>
    </div>
    <!-- input[text] .B-i-T / textarea .B-i-TA: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>input[text] .B-i-T / textarea .B-i-TA</legend>
          <div class="all-c4"><!-- div: Для отображения html всех кнопок. all-c4: после клика не меняет цвет -->
            <div class="B-i-T">
              <input type="text" placeholder="Введите запрос..." required>
            </div>
            <div class="B-i-T">
              <input type="text" value="&lt;input" placeholder="Введите запрос..." required>
            </div>
            <div class="B-i-TA" dobvhtmlcod>
              <textarea placeholder="Введите запрос..." required></textarea>
            </div>
            <div class="B-i-TA">
              <textarea style="height: 90px" placeholder="Введите запрос..." required>&lt;textarea  90px</textarea>
            </div>
            
            <h4 class="hr-n1 hr-L" style="--hr-Ct: var(--Ct)"><b>Готовые:</b></h4> 
            <div class="B-i-Tx">
              <input type="text" placeholder="Введите запрос..." value="Поиск" required>
              <div>
                <button class="B-Ix-X" onClick="$(this).parent().prev().val('').focus()" nebl><p><s></s><s></s></p></button>
                <button class="B-I-src" nebl><p><s></s></p></button>
              </div>
            </div>
            <br><br> 
            <div class="B-i-TAx">
              <textarea placeholder="Введите запрос..." required>Удалить/Сохранить</textarea>
              <div>
                <button class="B-Ig-cop B-R-Io all-c1" nebl><p></p></button>
                <button class="B-Ix-X B-R-Io all-c0" onClick="$(this).parent().prev().val('').focus()" nebl><p><s></s><s></s></p></button>
              </div>
            </div>
            
            <div style="--zHidH:6ex;" udalim zhid><button zhidb><p><s></s></p></button>
              <pre id="zCod" class="ram-n0 all-c5" style="margin-bottom:0; margin-right: 1.7em" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
              &lt;script src="/input/text_textarea/1-0-0/ok.js" defer>&lt;/script>
              
              &lt;script>
              &nbsp; document.addEventListener('DOMContentLoaded', () => {
              &nbsp; &nbsp; zBiT.c();//Скопировать текст textarea
              &nbsp; });
              &lt;/script>
              </code></div></pre>
            </div>
            
            <div class="ram-V0 ram-V2 gI-inf all-c2" style="font-size:.8em"><div>
              <u>&lt;input[text], textarea</u>:
              <ul class="ram-V0 all-c8">
                <li><b>&lt;div style="--B-bg: red;"</b> задний фон</li>
                <li><b>&lt;button pokaz></b> переменная <u>pokaz</u> запрещяет скрытие кнопки(Удалить/Копировать)</li>
              </ul>
              <u>&lt;textarea</u>:
              <ul class="ram-V0 all-c8">
                <li><b>&lt;textarea style="resize: none"</b> запрет на изменение размера </li>
              </ul>
            </div></div>
          </div>
        </fieldset>
      </div>
    </div>
    <!-- input[radio,checkbox] .B-i-CR: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>input[radio,checkbox] .B-i-CR</legend>
          
          <div class="B-i-CR all-c1">
            <input type="radio" name="stxt" value="1" checked>
            <s></s>
            <b>value 1</b>
          </div>
          <div class="B-i-CR all-c1">
            <input type="radio" name="stxt" value="2">
            <s></s>
            <b>value 2</b>
          </div>
    
          <div class="B-i-CR all-c1">
            <input type="radio" name="beztxt" value="3" checked>
            <s></s>
          </div>
          <div class="B-i-CR all-c1">
            <input type="radio" name="beztxt" value="4">
            <s></s>
          </div>
    
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-top: 5px">
            <li><b>name=" "</b> делает &lt;input[radio] одним набором</li>
          </ul>
    
          <div class="B-i-CR all-c1">
            <input type="checkbox" name="a" value="1" checked>
            <s></s>
            <b>value 1</b>
          </div>
          <div class="B-i-CR all-c1">
            <input type="checkbox" name="a2" value="2">
            <s></s>
            <b>value 2</b>
          </div>
          <div class="B-i-CR all-c1">
            <input type="checkbox" name="a3" value="3">
            <s></s>
          </div>
          
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-top: 5px">
            <li><b>checked=" "</b> делает &lt;input[radio, checkbox] выбраным при загрузке страницы</li>
          </ul>
          
        </fieldset>
      </div>
    </div>
    <!-- input[range] .B-i-R: -->
    <div class="flex-w" style="--zHidH:7.5ex;" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>input[range] .B-i-R</legend>
          
          <div class="B-i-R all-c0">
            <input id="rangeT" type="range" min="0.1" max="1" step="0.1" value="0.7">
            <div><i></i></div>
          </div>
          
          <div class="B-i-R all-c0">
            <input id="rangeT" type="range" min="0.1" max="1" step="0.1" value="1">
            <div><b>Яркость</b><i></i></div>
          </div>
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Деления:</b></h4> 
          <div class="B-i-R all-c6">
            <datalist id="delenija">
              <option>0</option>
              <option>30</option>
              <option>45</option>
              <option>60</option>
              <option>90</option>
              <option>120</option>
            </datalist>
            <input id="rangeT" type="range" min="0" max="120" value="15" list="delenija">
            <div><i></i></div>
          </div>
          <div class="B-i-R all-c6">
            <datalist id="delenija">
              <option>0</option>
              <option>30</option>
              <option>45</option>
              <option>60</option>
              <option>90</option>
              <option>120</option>
            </datalist>
            <input id="rangeT" type="range" min="0" max="120" value="60" list="delenija">
            <div><b>Деления</b><i></i></div>
          </div>
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Тест:</b></h4>
          <div class="B-i-R all-c7">
            <input id="rangeT" type="range" min="0.1" max="1" step="0.1" value="1">
            <div><b>Много текста Много текста Много текста Много текста</b><i></i></div>
          </div>
          <div class="B-i-R all-c7" style="width: 100%">
            <input id="rangeT" type="range" min="0.1" max="1" step="0.1" value="1">
            <div><b>100%</b><i></i></div>
          </div>
          <div class="B-i-R all-c7" style="width:250px">
            <input id="rangeT" type="range" min="0.1" max="1" step="0.1" value="1">
            <div><b>250px</b><i></i></div>
          </div>
          
          <div style="--zHidH:6ex" zhid><button zhidb><p><s></s></p></button>
            <pre id="zCod" class="ram-n0 all-c5 udalim" style="margin-bottom:0; margin-right: 1.7em" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
            &nbsp; &lt;script>
            &nbsp; &nbsp; zBiS.$({//Запускает обработку цифр 'input[range]'
            &nbsp; &nbsp; &nbsp; id: 'rangeT',//Добавить в &lt;input id="rangeT"
            &nbsp; &nbsp; &nbsp; f: e => {//function для обработки
            &nbsp; &nbsp; &nbsp; &nbsp; //e = $(this);
            &nbsp; &nbsp; &nbsp; &nbsp; console.log('value:', e.val());
            &nbsp; &nbsp; &nbsp; }
            &nbsp; &nbsp; });
            &nbsp; &lt;/script>
            </code></div></pre>
          </div>
        </fieldset>
      </div>
    </div>
    <!-- .B-S select: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>select .B-S</legend>
          <div class="B-S all-c1">
            <select name="select">
              <option value="1">option</option>
              <option value="2">option2</option>
            </select>
          </div>
          <div class="B-S all-c1">
            <select name="select2">
              <option value="1">option</option>
              <option value="2" selected>option2</option>
            </select>
          </div>
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Разделы:</b></h4> 
          <div class="B-S all-c1">
            <select name="select3">
              <optgroup label="Раздел 1">
                <option value="1">option1</option>
                <option value="2">option2</option>
              </optgroup>
              <optgroup label="Раздел 2">
                <option value="1">option3</option>
                <option value="2">option4</option>
              </optgroup>
            </select>
          </div>
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Выбрать несколько вариантов:</b></h4> 
          <div class="B-S all-c1">
            <select name="select3" multiple>
              <option value="1">option option</option>
              <option value="2">option2</option>
            </select>
          </div>
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>2-а или более select:</b></h4> 
          <div class="B-S all-c1">
            <select name="select4">
              <option value="1">option1</option>
              <option value="2">option2</option>
            </select>
            <div></div>
            <select name="select">
              <option value="3">option3</option>
              <option value="4">option4</option>
            </select>
          </div>
          
          <ul class="ram-n1 ram-V0 all-c2" style="font-size:.8em; margin-top: 5px">
            <li><b>selected=" "</b> делает &lt;option выбраным при загрузке страницы</li>
          </ul>
        
        </fieldset>
      </div>
    </div>
    <!-- .B-R- Рамки: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0">
          <legend>.B-R- Рамки</legend>
          <button class="B-R-0"><b>B-R-0</b></button>,
          <button class="B-Ig-don B-R-0"><p></p></button>,
          <button class="B-Ig-don B-R-0 all-c2"><p></p><b>B-R-0</b></button>,
          <br>
          <button class="B-R-1"><b>B-R-1</b></button>,
          <button class="B-Ix-M B-R-1"><p><s></s><s></s></p></button>,
          <button class="B-Ig-kat B-R-1"><p></p></button>,
          <button class="B-Ig-kat B-R-1"><p></p><b>B-R-1</b></button>,
          
          <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>.B-R-Io Свои/google:</b></h4> 
          <button class="B-Ix-X B-R-Io all-c0"><p><s></s><s></s></p></button>,
          <button class="B-Ig-cop B-R-Io all-c1"><p></p></button>,
        </fieldset>
      </div>
    </div>
    
    <hr class="hr-1 all-c0">
    <!-- Проверка в линию: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0 bezHtmlCod">
          <legend>Проверка в линию</legend>
          <button class="B-R-1"><b>Ёу&lt;but</b></button>,
          <a class="B-R-1 B-Ix-M"><p><s></s><s></s></p><b>Ё&lt;a</b></a>,
          <button class="B-R-1 B-Ig-don"><p></p><b>Ёy&lt;but</b></button>,
          <button class="B-R-0 B-S all-c4"><select><option>Ё&lt;sel</option></select></button>,
          <div class="B-i-CR B-R-0 all-c1">
            <input type="radio" name="vliniju" value="2">
            <s></s>
            <b>value 2</b>
          </div>,
          <div class="B-i-CR B-R-1 all-c7">
            <input type="checkbox" name="a" value="1" checked>
            <s></s>
            <b>value 1</b>
          </div>,
          <hr>
          
          <button class="B-"><b>Ёy &lt;but</b></button>,
          <a class="B-Ix-M"><p><s></s><s></s></p><b>Ё&lt;a</b></a>,
          <button class="B-Ig-don"><p></p><b>Ё&lt;but</b></button>,
          <div class="B-i-R all-c0">
            <input type="range" min="0.1" max="1" step="0.1" value="1">
            <div><i>...</i></div>
          </div>,
          <div class="B-S all-c1">
            <select name="select">
              <option value="1">option</option>
              <option value="2">option2</option>
            </select>
          </div>,
          <br>
          
          <div class="B-i-CR all-c1">
            <input type="radio" name="vliniju" value="1" checked>
            <s></s>
            <b>value 1</b>
          </div>
          <div class="B-i-CR all-c1">
            <input type="radio" name="vliniju" value="2">
            <s></s>
            <b>value 2</b>
          </div>,
          <div class="B-i-CR all-c1">
            <input type="checkbox" name="a" value="1" checked>
            <s></s>
            <b>value 1</b>
          </div>,
          
          <div class="B-i-T" style="width:70px">
            <input type="text" value="&lt;input" placeholder="Введите запрос...">
          </div>,
          <div class="B-i-TA" style="width:70px">
            <textarea placeholder="Введите запрос...">&lt;textarea</textarea>
          </div>,
          
        </fieldset>
      </div>
    </div>
    <!-- Перенос строки: -->
    <div class="flex-w" zhid="1">
      <div>
        <fieldset class="all-c1 v-BG0 bezHtmlCod">
          <legend>Перенос строки</legend>
          <div style="width:150px; border: 1px solid red;">
            <a style="display:none1;" class="B-R-1"><b>Пере нос стр оки</b></a>,
            <a class="B-Ix-M B-R-1"><p><s></s><s></s></p><b>Пере нос стр оки</b></a>
            <br>
            <button style="display:none1;" class="B-R-1"><b>Пере нос стр оки</b></button>,
            <button style="display:none1;" class="B-Ix-M B-R-1"><p><s></s><s></s></p><b>Пере нос стр оки</b></button>
          </div>
        </fieldset>
      </div>
    </div>
    
        <!-- Полезная информация: -->
    <div zhid="1"><button style="position:absolute; right:.4em; top:1em" zhidb><p><s></s></p></button>
    <div class="ram-V0 ram-V2 gI-inf all-c2" style="font-size:.8em"><div>
      <u>Задаём цвет button,a..</u>:
      <ul class="ram-V0 all-c8">
        <li><b>&lt;div style="--B-Cm: red;">&lt;button...</b> для всех</li>
        <li><b>&lt;button style="--B-C: red;"</b> только для 1</li>
      </ul>
      <u>icon Свои/google</u>:
      <ul class="ram-V0 all-c8">
        <li><b>&lt;button style="--B-I-O: 4px;"</b> отступ между &lt;button(рамка) и &lt;p(icon)</li>
        <li><b>&lt;div style="--B-I-Om: 4px;">&lt;button...</b> для всех</li>
        <li><b>&lt;button style="--B-I-C: red;"</b> цвет иконки</li>
        <li><b>&lt;button style="--B-C: red;"</b> цвет текста</li>
      </ul>
      <u>input, textarea</u>:
      <ul class="ram-V0 all-c8">
        <li><b>&lt;div style="--B-bg: red;"</b> задний фон</li>
      </ul>
      <hr>
      <u>Теги внутри &lt;button, a></u>:
      <ul class="ram-V0 all-c8">
        <li><b>&lt;p></b> иконка (Свои/google)</li>
        <li><b>&lt;b></b> текст</li>
      </ul>
      <u>Теги внутри &lt;div></u>:
      <ul class="ram-V0 all-c8">
        <li><b>&lt;input type="text"></b> ввод текста</li>
        <li><b>&lt;input type="checkbox,radio"></b> выбрать</li>
        <li><b>&lt;input type="range"></b> ползунок</li>
        <li><b>&lt;select>&lt;option></b> список</li>
      </ul>
      <u>.B-L Загрузка...</u>:
      <ul class="ram-V0 all-c8">
        <li>&lt;button class="B-L" disabled></li>
        <li>&lt;div class="B-L">&lt;input, textarea, select disabled></li>
      </ul>
      <u>disabled Заблокировать кнопку от действий</u>:
      <ul class="ram-V0 all-c8">
        <li>&lt;button disabled></li>
        <li>&lt;div>&lt;input, textarea, select disabled></li>
      </ul>
      <u>Вешаем обработчик jQuery.on(click,input,..) на</u>:
      <ul class="ram-V0 all-c8">
        <li><b>button></b> click</li>
        <li><b>input[text], textarea></b> change keyup paste</li>
        <li><b>input[radio,checkbox,range]></b> input</li>
        <li><b>select></b> change</li>
      </ul> 
      <u>Варианты обработчиков</u>:
      <ul class="ram-V0 all-c8">
        <li><b>change</b> когда убрали фокус (input[text], textarea, select>)</li>
        <li><b>input</b> по-разному (input[text], textarea>)</li>
        <li><b>keyup</b> кнопка отжата</li>
        <li><b>paste</b> вставили текст</li>
        <li><b>blur</b> теряет фокус</li>
      </ul>
      
    </div></div>
    </div>

  <script>
    js.$(); //Добавим button: Загрузка | disabled
    js.cod.$('#glPodskaz > div:eq(-1)'); //Посмотреть HTML код кнопки
    zBiT.c(); //Скопировать текст textarea
    zBiS.$({ //Запускает обработку (Цифр) input[range]
      id: 'rangeT:not([disabled])', //Добавить в <input id="rangeT"
      f: e => { //function для обработки
        //e = $(this);
        // console.log('value:', e.val());
      }
    });
    
    zCod.$(); //Подсветка HTML кода
    zHid.$(); //Скрыть/Показать
  </script>
`};