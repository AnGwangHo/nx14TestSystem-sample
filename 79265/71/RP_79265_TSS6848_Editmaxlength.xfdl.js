(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("maxlength");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("10 Meiryo UI");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "24.51%", "361", null, "38", "52.54%", null, this);
            obj.set_taborder("0");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.03%", "361", null, "35", "84.18%", null, this);
            obj.set_taborder("1");
            obj.set_text("maxlength=");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16.7%", "405", null, "35", "78.91%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "7.03%", "433", null, "35", "84.18%", null, this);
            obj.set_taborder("3");
            obj.set_text("maxlength=");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "16.7%", "477", null, "35", "78.91%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "24.51%", "440", null, "73", "53.03%", null, this);
            obj.set_taborder("5");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("[RP_79265] [디그라데이션] Edit,TextArea의 maxlength가 설정되어 있을 경우, 입력 제한 되는 문자열이 뒤바뀌는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "300", null, null, this);
            obj.set_taborder("7");
            obj.set_text("[디그라데이션]\r\nEdit, TextArea의 maxlength가 설정되어 있을 경우\r\n입력 제한되는 문자열이 마지막에 입력한 문자열을 제한하지 않고, 앞 문자열이 삭제 되서 표시되는 현상\r\n즉, 가장 앞의 문자열이 삭제되거나 중간 문자열이 삭제되는 등 케이스에 따라 조금씩 다름\r\n\r\n[참조]\r\n한글 입력시에도 문제가 발생\r\n\r\n[발생버전]\r\n3월 정기 브랜치 변경집합 44523에서 발생함 (2018.02.19 - RP77717)\r\n\r\n[발생브라우저]\r\nChrome 브라우저에서 발생\r\nRuntime、IE、Firefox、Edge에서도 발생(현상은 조금씩 다름)\r\n\r\n[확인방법]\r\n1. 첨부파일 [TSS6848_Editmaxlength.xfdl]을 Chrome 브라우저에서 실행\r\n2. Edit [maxlength=5]에 [あいうえおかき]를 입력하고, Enter키를 누르면 [あいうえお]가\r\n남아 있고, 이때 [かき]를 입력후 Enter키를 누르면 [うえおかき]가 남아 있음\r\n가장 앞의 [あい]가 삭제 되고 [かき]가 남아 있는 것을 확인\r\n3. 일본어 [あいうえ]를 입력후, 이어서 일본어 IME로 [おか]를 입력하고 Enter키를 누르면 \r\n[あうえおか]가 남아 있는 것을 확인\r\n즉, 중간 문자열 [い]가 삭제 되고 [か]가 남아 있음\r\n4. 한글 입력시에도 [가나다라마]를 입력하면, [가나]만 남는 현상 발생");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_font("10 Meiryo UI");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79265_TSS6848_Editmaxlength.xfdl", function() {

        this.Editmaxlength_onload = function(obj,e)
        {
        	this.Static01.set_text(this.Edit00.maxlength);
        	this.Static03.set_text(this.TextArea00.maxlength);
        }

        this.Edit00_onchar = function(obj,e)
        {
        	trace(obj+e.eventid+"/chartext:"+e.chartext+", pretext:"+e.pretext+"posttext:"+e.posttext);
        }

        this.TextArea00_onchar = function(obj,e)
        {
        	trace(obj+e.eventid+"/chartext:"+e.chartext+", pretext:"+e.pretext+"posttext:"+e.posttext);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Editmaxlength_onload, this);
            this.Edit00.addEventHandler("onchar", this.Edit00_onchar, this);
            this.TextArea00.addEventHandler("onchar", this.TextArea00_onchar, this);

        };

        this.loadIncludeScript("RP_79265_TSS6848_Editmaxlength.xfdl");

       
    };
}
)();
