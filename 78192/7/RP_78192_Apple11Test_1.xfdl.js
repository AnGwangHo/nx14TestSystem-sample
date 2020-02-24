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
                this.set_name("Apple11Test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("12 Meiryo UI");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "3.32%", "325", null, "39", "76.17%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.56%", "230", null, "40", "0.68%", null, this);
            obj.set_taborder("1");
            obj.set_text("oncharイベント発生確認");
            obj.style.set_background("aqua");
            obj.style.set_font("bold 16 Meiryo UI,Hiragino Kaku Gothic ProN");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3.32%", "280", null, "30", "84.96%", null, this);
            obj.set_taborder("2");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "34.38%", "280", null, "30", "53.91%", null, this);
            obj.set_taborder("3");
            obj.set_text("MaskEdit");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "66.02%", "280", null, "30", "22.27%", null, this);
            obj.set_taborder("4");
            obj.set_text("TextArea");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "34.38%", "325", null, "39", "41.02%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "66.02%", "325", null, "96", "1.37%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "3.32%", "449", null, "271", "67.68%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "34.38%", "449", null, "271", "36.62%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "66.02%", "449", null, "271", "4.98%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "900", "170", null, null, this);
            obj.set_taborder("10");
            obj.set_text("[디그라데이션]\r\nMac OS의 사파리 브라우저에서 Edit, Textarea의 onchar 이벤트에서 Textarea.value가 설정되어 있으면 \r\n문자열 입력후 Caret이 문자열 가장 앞에 위치하는 현상\r\n즉, 문자열이 역순으로 입력이 되고 있음\r\n\r\n[발생브라우저]\r\n- Mac OS의 Safari 10, 11 브라우저에서 발생(9이하 버전은 미확인)\r\n\r\n[확인방법]\r\n1. 첨부 파일을 Mac OS Safari 브라우저에서 실행\r\n2. Edit에 [abc]를 입력하면, [cba]로 입력되면서 Caret이 문자열 가장 앞쪽에 위치하고 있는 것을 확인\r\n3. TextArea에서도 2번과 같은 현상이 발생하는 것을 확인\r\n4. nexacro 14,0,1,1900(2017,10,31,1)에서는 정상적으로 입력되는 것을 확인");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "900", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("[RP_78192] Mac OS 사파리 브라우저에서 onchar 이벤트에서 value 설정하면, 문자열 입력후 Caret이 문자열 가장 앞에 위치하는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_font("12 Meiryo UI");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78192_Apple11Test_1.xfdl", function() {

        this.Edit00_onchar = function(obj,e)
        {
        	var info = e.eventid + " -> e.chartext : " + e.chartext + " / e.pretext : " + e.pretext + " / e.posttext : " + e.posttext;
        	this.TextArea01.set_value(this.TextArea01.value + info + '\n');
        }

        this.MaskEdit00_onchar = function(obj,e)
        {
        	var info = e.eventid + " -> e.chartext : " + e.chartext + " / e.pretext : " + e.pretext + " / e.posttext : " + e.posttext;
        	this.TextArea02.set_value(this.TextArea02.value + info + '\n');
        }

        this.TextArea00_onchar = function(obj,e)
        {
        	var info = e.eventid + " -> e.chartext : " + e.chartext + " / e.pretext : " + e.pretext + " / e.posttext : " + e.posttext;
        	this.TextArea03.set_value(this.TextArea03.value + info + '\n');
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit00.addEventHandler("onchar", this.Edit00_onchar, this);
            this.Edit00.addEventHandler("ontextchange", this.Edit00_ontextchange, this);
            this.MaskEdit00.addEventHandler("onchar", this.MaskEdit00_onchar, this);
            this.TextArea00.addEventHandler("onchar", this.TextArea00_onchar, this);
            this.TextArea03.addEventHandler("oneditclick", this.TextArea02_oneditclick, this);

        };

        this.loadIncludeScript("RP_78192_Apple11Test_1.xfdl");

       
    };
}
)();
