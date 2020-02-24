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
                this.set_name("CalSystem");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00", "absolute", "9%", "146", null, "54", "33.25%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.style.set_popuptype("system");

            obj = new Calendar("Calendar01", "absolute", "9%", "282", null, "54", "33.25%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_popuptype("none");

            obj = new Calendar("Calendar02", "absolute", "9%", "418", null, "54", "33.25%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.style.set_popuptype("normal");

            obj = new Calendar("Calendar03", "absolute", "9%", "466", null, "54", "33.25%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.style.set_popuptype("center");

            obj = new Static("Static00", "absolute", "72.25%", "143", null, "55", "4%", null, this);
            obj.set_taborder("4");
            obj.set_text("system");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "72.25%", "287", null, "55", "4%", null, this);
            obj.set_taborder("5");
            obj.set_text("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "72.25%", "415", null, "55", "4%", null, this);
            obj.set_taborder("6");
            obj.set_text("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "72.13%", "463", null, "55", "4.13%", null, this);
            obj.set_taborder("7");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "7", "557", "37", null, null, this);
            obj.set_taborder("8");
            obj.set_text("RP 87124 IPad 에서 popuptype이 system인 Calendar가 동작하지 않음");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "32", "52", "447", "82", null, null, this);
            obj.set_taborder("9");
            obj.set_text("테스트 방법\r\n\r\n 1. IPad에서 화면 실행\r\n 2. popuptype이 system인 상단 Calendar 터치\r\n 3.SystemUI가 표시되는지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
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
        this.registerScript("RP_87124_TSS8225_CalSystem.xfdl", function() {

        this.CalSystem_onload = function(obj,e)
        {
        	this.Static00.set_text("popuptype : "+this.Calendar00.style.popuptype);
        	this.Static01.set_text("popuptype : "+this.Calendar01.style.popuptype);
        	this.Static02.set_text("popuptype : "+this.Calendar02.style.popuptype);
        	this.Static03.set_text("popuptype : "+this.Calendar03.style.popuptype);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CalSystem_onload, this);
            this.Static05.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_87124_TSS8225_CalSystem.xfdl");

       
    };
}
)();
