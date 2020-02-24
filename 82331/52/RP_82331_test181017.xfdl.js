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
                this.set_name("test180508");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00", "absolute", "6.74%", "201", null, "63", "71.88%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "6.74%", "290", null, "54", "75.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_82331] [긴급][디그라][Nexacro14] 마스크나 달력에서 우측마우스메뉴후 붙여넣기하면 되지않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "140", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1. 현상\r\n MaskEdit, Calendar에 마우스 우클릭(컨텍스트메뉴) 붙여넣기 시 동작하지 않는 현상\r\n\r\n - Runtime 에서만 발생\r\n - RP 82140 처리로 발생 (MAIN 48596)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) 메모장에 '1234' 입력 > 복사\r\n 3) MaskEdit 또는 Calendar에 우클릭 하여 'paste'\r\n 4) 현상 확인");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_82331_test181017.xfdl", function() {

        
        this.Dataset00_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "Column0"){
        		alert("Dataset00_oncolumnchanged");
        		this.Grid00_onkeyup();
        	}
        }

        this.Grid00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		alert("Grid00_onkeyup");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_82331_test181017.xfdl");

       
    };
}
)();
