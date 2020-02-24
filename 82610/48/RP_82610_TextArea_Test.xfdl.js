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
                this.set_name("TextArea_Test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "4.2%", "204", null, "358", "49.32%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "53.61%", "225", null, "129", "25.29%", null, this);
            obj.set_text("길이가 8자리 초과");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "28.24%", "85", null, "25", "26.39%", null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30.09%", "44", null, "33", "9.72%", null, this.PopupDiv00);
            obj.set_taborder("1");
            obj.set_text("8자리 초과");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_82610] [IE11] TextArea 붙여넣기 시 caret위치 이상 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "140", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[버그로수정]\r\nTextArea컴포넌트에서 문자입력중 Alert을 발생시켜 닫은 이후에 ctrl+v 동작으로 문자열 붙여넣기시\r\nIE11에서는 caret의 위치가 붙여넣기 이전의 위치가 됩니다 (Chrome은 전체 문자열 끝임)\r\n\r\n- 변경집합 추적결과 REL_18.09.27.00 브랜치 47468변경집합이후부터 발생합니다\r\n\r\n[테스트방법]\r\n- 첨부한 TextArea_Test.xfdl 파일을 다운로드하고 IE11으로 퀵뷰합니다\r\n- 메모장에 문자열을 입력후 ctrl+c 하여 문자열을 클립보드에 복사해둡니다\r\n- TextArea에서 문자를 입력하고 입력중 8자가 넘으면 alert이 뜨고 확인창을 닫습니다\r\n- 클립보드에 복사해둔 문자열을 ctrl+v로 TextArea에 붙여넣기하고 캐럿의 위치를 확인합니다");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 129, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("길이가 8자리 초과");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

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
        this.registerScript("RP_82610_TextArea_Test.xfdl", function() {

        var aaa = true;

        this.TextArea00_ontextchanged = function(obj,e)
        {
        	if (aaa) {
        		var vLstPos = this.TextArea00.text.length;
        		if (vLstPos == 8) {
        			this.alert("!!");
        			//this.PopupDiv00.trackPopup(10,10);
        			aaa = false;
        		}
        		this.TextArea00.setCaretPos(vLstPos);
        	}
        }

        
        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("ontextchanged", this.TextArea00_ontextchanged, this);
            this.PopupDiv00.Button00.addEventHandler("onclick", this.PopupDiv00_Button00_onclick, this);

        };

        this.loadIncludeScript("RP_82610_TextArea_Test.xfdl");

       
    };
}
)();
