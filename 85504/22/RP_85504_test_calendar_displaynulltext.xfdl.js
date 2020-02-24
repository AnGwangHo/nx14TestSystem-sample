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
                this.set_name("test_calendar_displaynulltext");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00", "absolute", "52", "139", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displaynulltext("00000000");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_displaynulltextcolor("salmon");
            obj.set_value("null");

            obj = new Edit("Edit00", "absolute", null, "70", "153", "27", "820", null, this);
            obj.set_taborder("0");
            obj.set_displaynulltext("null");
            obj.style.set_displaynulltextcolor("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "8", "6", "547", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("RP 85504 Calendar에서 displaynulltextcolor 설정후 focus out시 오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "270", "60", null, "100", "29.69%", null, this);
            obj.set_taborder("3");
            obj.set_text("테스트 방법\r\n\r\n 1. 화면 로드 후 Calendar의 displaynulltextcolor 값 적용 확인 (Salmon)\r\n 2. 마우스 또는 탭키로 Calendar로 focus이동 후 다시 focus out \r\n 3. Calendar의 displaynulltextcolor 값이 다시 적용되는지 확인 (Salmon)");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_85504_test_calendar_displaynulltext.xfdl");

       
    };
}
)();
