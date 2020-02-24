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
                this.set_name("testmain");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,597,606);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "0.84%", "152", null, null, "0.84%", "0", this);
            obj.set_taborder("8");
            obj.set_url("http://localhost:8080/Degradation/html/RP_83966_sub2.html");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("10");
            obj.set_text("RP 83966 Win10 태블릿에서 Webborwser내 페이지에 터치 입력 안되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.17%", "52", null, "92", "0.84%", null, this);
            obj.set_taborder("11");
            obj.set_text("테스트 방법\r\n\r\n 1. Win10 태블릿 에서 실행\r\n 2. 웹브라우저 컴포넌트 내 웹페이지의 버튼, 라디오, 체크박스 등 터치\r\n 3. 터치입력이 동작하는 지 확인");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 597, 606, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("transparent");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_83966_webbrowser.xfdl", function() {

        
        this.Button05_onclick = function(obj,e)
        {
        	this.go("Base::testmain.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_83966_webbrowser.xfdl");

       
    };
}
)();
