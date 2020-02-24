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
                this.set_name("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "33", "160", "185", "177", null, null, this);
            obj.set_taborder("1");
            obj.style.set_font("14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "29%", "160", null, "65", "39.45%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "950", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_78267, 78268] Edit/Textarea 에서 onload시 Edit.set_value로 문자열 셋팅을 하면, 캐럿이 세팅한 문자열 맨뒤로 가야 하는데 맨앞에 위치함");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "950", "100", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Edit/Textarea 에서 onload시 Edit.set_value로 문자열 셋팅을 하면, 캐럿이 세팅한 문자열 뒤로 가야 하는데 맨앞에 위치함\r\n\r\n1. 실행하여 결과 확인\r\n  > 런타임  : Edit/Textarea 에서 caret 위치가 \"text\" 맨 앞에 위치함 (NG)\r\n  > IE11 :  Edit/Textarea 에서 caret 위치가 \"text\" 맨 앞에 위치함 (OK, 매뉴얼팀 제약사항 진행)\r\n  > Chrome : Edit/Textarea 에서 caret 위치가 \"text\" 맨 뒤에 위치함(OK)\r\n  > FF :  Edit/Textarea 에서 caret 위치가 \"text\" 맨 앞에 위치함(NG)");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78267_caret_test.xfdl", function() {

        this.test_onload = function(obj,e)
        {
        	var str = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";
        	this.TextArea00.set_value(str);
        	this.Edit00.set_value("가나다라마바사 아자차카타파하");
        }

        this.Edit00_onkillfocus = function(obj,e)
        {
        	trace("Edit00 Killfocus caret pos => "+this.Edit00.getCaretPos());
        }

        this.TextArea00_onkillfocus = function(obj,e)
        {
        	trace("TextArea00 Killfocus caret pos => "+this.TextArea00.getCaretPos());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_onload, this);
            this.TextArea00.addEventHandler("onkillfocus", this.TextArea00_onkillfocus, this);
            this.Edit00.addEventHandler("onsetfocus", this.Edit00_onsetfocus, this);
            this.Edit00.addEventHandler("onkillfocus", this.Edit00_onkillfocus, this);

        };

        this.loadIncludeScript("RP_78267_caret_test.xfdl");

       
    };
}
)();
