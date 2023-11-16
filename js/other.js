<!-- 客服 -->

	var qaList = [
	{Q:"你好|哈囉|嗨|哈羅|嗨嗨|HI|Hi|HELLO|Hello", A:"您好!請問需要什麼幫助呢?"},
	{Q:"樓梯", A:"走進去後正前方就可以看到樓梯囉~"},
	{Q:"電梯", A:"進門後往左邊那扇門走就會看到了!"},
	{Q:"廁所", A:"進門後走到底，在您的左手邊喔~"},
	{Q:"學餐幾點營業", A:"中午11點-13點半，晚上17點-19點!"},
	{Q:"圖文部", A:"營業時間:9點-19點!"},
	{Q:"7-11營業時間|7-11的營業時間|7-11幾點開|7-11幾點開門|請問7-11幾點開|請問7-11幾點營業|請問7-11的營業時間", A:"營業時間:8點-20點!"},
	{Q:"7-11可以取貨嗎", A:"可以喔~"},
	{Q:"飲水機", A:"飲水機在廁所旁邊~"},
	{Q:"有東西遺失", A:"可以至綜合業務處尋找喔~"},
	{Q:"綜合業務處", A:"位在C棟的斜前方!"},
	{Q:"借用場地", A:"可以到社團服務組租借呦~"},
	{Q:"社團服務組", A:"在活動中心2F"},
	{Q:"學餐的菜單", A:"學餐有許多店家，想吃麵類還飯類?"},
	{Q:"飯", A:"學餐有便當店喔~什麼飯都有"},
	{Q:"麵", A:"學餐有QQ麵之屋喔~什麼飯麵都有"},
	{Q:"電話|聯絡|通話|客服", A:"點選客服的頭像即可撥打電話喔~"},
	{Q:"好的|謝謝", A:"很開心能為您服務~~"}
	];
	
	function random(n) { // 從 0 到 n-1 中選一個亂數
      return Math.floor(Math.random()*n);
    }

    // 以下是快捷訊息的js
	
	function quicka(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messagea").value;
		append(document.getElementById("say").value);
		answer();
	}
	
	function quickb(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messageb").value;
		append(document.getElementById("say").value);
		answer();
	}
	
	function quickc(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messagec").value;
		append(document.getElementById("say").value);
		answer();
	}
    
	function quickd(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messaged").value;
		append(document.getElementById("say").value);
		answer();
	}
	
	function quicke(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messagee").value;
		append(document.getElementById("say").value);
		answer();
	}
	
	function quickf(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messagef").value;
		append(document.getElementById("say").value);
		answer();
	}

	function quickg(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messageg").value;
		append(document.getElementById("say").value);
		answer();
	}

	function quickh(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messageh").value;
		append(document.getElementById("say").value);
		answer();
	}

	function quicki(){ // 將快捷訊息丟到框框裡面
		document.getElementById("say").value = document.getElementById("messagei").value;
		append(document.getElementById("say").value);
		answer();
	}
	// 以上是快捷訊息的js
    
    function say() { // 當送出鍵按下時，會呼叫這個函數進行回答動作
      append(document.getElementById("say").value); // 先將使用者輸入的問句放到「對話區」顯示。
      answer(); // 然後回答使用者的問題。
    }
    
    function keyin(event) { // 當按下 enter 鍵時，會呼叫此函數進行回答
      var keyCode = event.which; // 取出按下的鍵
      if (keyCode == 13) say(); // 如果是換行字元 \n ，就進行回答動作。
    }
	
    
    function append(line) { // 將客人的問題放到「對話區」顯示。
      var dialogBox = document.getElementById("dialogBox"); // 取出對話框 
	  var tip = document.getElementById("tip");
	  var outodiv = document.createElement('div');		// 新增最外框div
	  outodiv.className = "people";
	  var avatar = document.createElement("img");				// 新增頭像
	  avatar.className = "pimg";
	  avatar.src = "../pic/people.jpg";
	  var odiv = document.createElement('div');		// 新增div
	  odiv.className = "replyss right";
	  odiv.id = "dialogBoxs";
	  odivcontent = document.createTextNode(line);		// 在裡面加入客人的問題
	  odiv.appendChild(odivcontent);		// 讓div顯示
	  outodiv.appendChild(odiv);
	  outodiv.appendChild(avatar);
	  dialogBox.innerHTML += "<BR/><BR/>";
	  dialogBox.insertBefore(outodiv,dialogBox.lastChild);
	  tip.scrollTop = tip.scrollHeight;		// 捲動到最下方
    }
	
	function append2(line) { // 將客服人員的回答放到「對話區」顯示。
      var dialogBox = document.getElementById("dialogBox");
	  var tip = document.getElementById("tip");
	  var outoodiv = document.createElement('div');		// 新增最外框div
	  outoodiv.className = "customer";
	  var link = document.createElement("a");		// 新增電話連結
	  link.href= "tel:+886-76011000";
	  var avatar = document.createElement("img");				// 新增頭像
	  avatar.className = "cimg";
	  avatar.src = "../pic/customer service.jpg";
	  var oodiv = document.createElement('div');		// 新增div
	  oodiv.className = "replys leftt";
	  oodiv.id = "dialogBoxs";
	  oodivcontent = document.createTextNode(line);		// 在裡面加入客人的問題
	  oodiv.appendChild(oodivcontent);		// 讓div顯示
	  link.appendChild(avatar);
	  outoodiv.appendChild(link);
	  outoodiv.appendChild(oodiv);
	  dialogBox.innerHTML += "<BR/><BR/><BR/>";
	  dialogBox.insertBefore(outoodiv,dialogBox.lastChild);
	  tip.scrollTop = tip.scrollHeight;		// 捲動到最下方
    }
	
    function answer() { // 回答問題
      setTimeout(function () { // 停頓 1 到 3 秒再回答問題 (因為若回答太快就不像人了，人打字需要時間)
        append2(getAnswer());
      }, 1000+random(2000));
    }
    
    function getAnswer() {
	  var say = document.getElementById("say").value; // 取得使用者輸入的問句。
	  document.getElementById("say").value = ""; // 輸入後裡面的文字消失
      for (var i in qaList) { // 對於每一個 QA 
       try {
        var qa = qaList[i];
        var qList = qa.Q.split("|"); // 取出 Q 部分，分割成一個一個的問題字串 q
        var aList = qa.A.split("|"); // 取出回答 A 部分，分割成一個一個的回答字串 q
        for (var qi in qList) { // 對於每個問題字串 q
          var q = qList[qi];
          if (q=="") // 如果是最後一個「空字串」的話，那就不用比對，直接任選一個回答。
            return aList[random(aList.length)]; // 那就從答案中任選一個回答
          var r = new RegExp("(.*)"+q+"([^?.;]*)", "gi"); // 建立正規表達式 (.*) q ([^?.;]*)
          if (say.match(r)) { // 比對成功的話
            tail = RegExp.$2; // 就取出句尾
            // 將問句句尾的「我」改成「你」，「你」改成「我」。
            tail = tail.replace("我", "#").replace("你", "我").replace("#", "你");
            return aList[random(aList.length)].replace(/\*/, tail); // 然後將 * 改為句尾進行回答
          }
        }
       } catch (err) {}
      }
      return "我不太清楚您在詢問什麼~"; // 如果發生任何錯誤，就回答「然後呢？」來混過去。
    }
