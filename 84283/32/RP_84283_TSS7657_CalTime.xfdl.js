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
                this.set_name("CalSpin");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,500);
            }
            this.style.set_font("12 Meiryo UI");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00", "absolute", "12%", "186", "286", "46", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy年MM月dd日");
            obj.set_value("null");
            obj.set_editformat("yyyy年MM月dd日");

            obj = new Calendar("Calendar01", "absolute", "12%", "280", "286", "46", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("HH時mm分ss秒");
            obj.set_value("null");
            obj.set_editformat("HH時mm分ss秒");

            obj = new Calendar("Calendar03", "absolute", "12%", "369", null, "47", "40.67%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy年MM月dd日 (HH時mm分ss秒)");
            obj.set_editformat("yyyy年MM月dd日 (HH時mm分ss秒)");
            obj.set_type("spin");
            obj.set_value("null");

            obj = new Button("Button00", "absolute", "74.67%", "280", null, "40", "9.67%", null, this);
            obj.set_taborder("3");
            obj.set_text("set_value");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("4");
            obj.set_text("RP 84283 시간 포맷의 캘린더에 시간 입력 후 확정하면 값이 변경되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.17%", "52", null, "92", "0.83%", null, this);
            obj.set_taborder("5");
            obj.set_text("테스트 방법\r\n\r\n 1. 두번 째 캘린더에 임의의 시간 입력 후 엔터 또는 탭키 동작\r\n 2. 두번 째 캘린더의 값이 입력되는지 확인 (20時19分11秒 로 변경됨)");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 500, this,
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
        this.registerScript("RP_84283_TSS7657_CalTime.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        	this.Calendar01.set_value("123245");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_84283_TSS7657_CalTime.xfdl");

       
    };
}
)();
