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
                this.set_name("tet");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv00", "absolute", "11.62%", "310", null, "218", "52.15%", null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "12.01%", "151", null, "115", "65.04%", null, this);
            obj.set_taborder("1");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_80363] [긴급][Nexacro14]폼에 popupdiv 생성후 application.exit() 실행시 오류발생합니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "100", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[테스트방법]\r\n1. 종료버튼을 클릭한다.\r\n2. 런타임 종료되며 위와같은 에러가 출력된다.\r\n\r\n1. 버그로 수정\r\n\r\n2. RP 80099, 변경집합 46234 번으로 발생함.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 218, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("blue");

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
        this.registerScript("RP_80363_tet.xfdl", function() {

        // this.Button00_onclick = function(obj:Button, e:nexacro.ClickEventInfo)
        // {
        // 	this.PopupDiv00.trackPopup(0,0)
        // }

        this.Button01_onclick = function(obj,e)
        {
        	application.exit();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("RP_80363_tet.xfdl");

       
    };
}
)();
