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
                this.set_name("WebBrowserOnPopupDiv");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "0.78%", "239", null, "62", "84.57%", null, this);
            obj.set_taborder("0");
            obj.set_text("Static & WebBrowser");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "0.78%", "315", "150", "100", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("azure");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "10", null, "25", "10", null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "8", null, null, "50", "10", "10", this.PopupDiv00);
            obj.set_taborder("1");
            obj.set_url("http://localhost:38080/AJSTest/Base/test.html");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "16.41%", "239", null, "62", "68.95%", null, this);
            obj.set_taborder("1");
            obj.set_text("Edit(taborder=4) & \r\nWebBroser(taborder=3)");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01", "absolute", "16.41%", "315", "150", "100", null, null, this);
            obj.set_text("PopupDiv01");
            obj.style.set_background("azure");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "8", null, null, "50", "10", "10", this.PopupDiv01);
            obj.set_taborder("3");
            obj.set_url("http://localhost:38080/AJSTest/Base/test.html");
            this.PopupDiv01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "10", "10", null, "25", "10", null, this.PopupDiv01);
            obj.set_taborder("4");
            obj.set_value("Edit");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "31.84%", "239", null, "62", "53.52%", null, this);
            obj.set_taborder("2");
            obj.set_text("Edit(taborder=0) & \r\nWebBroser(taborder=1)");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv02", "absolute", "31.84%", "315", "150", "100", null, null, this);
            obj.set_text("PopupDiv01");
            obj.style.set_background("azure");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "10", "10", null, "25", "10", null, this.PopupDiv02);
            obj.set_taborder("0");
            obj.set_value("Edit");
            this.PopupDiv02.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser02", "absolute", "8", null, null, "50", "10", "10", this.PopupDiv02);
            obj.set_taborder("1");
            obj.set_url("http://localhost:38080/AJSTest/Base/test.html");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_83928] 한번의 마우스클릭으로 PopupDiv가 표시되지 않는 현상 (브라우저별 상이)");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "170", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1. 현상\r\nPopupDiv안에 WebBrowser컴포넌트가 배치된 경우,\r\nIE/Edge이외의 브라우저(Chrome, FireFox, iOS-Safari)에서는 \r\nPopupDiv가 정상적으로 표시 안되는 현상이 발생합니다.\r\n\r\n - 2018년 3월정기 44454에서 발생함 (2018.02.09 - RP78331)\r\n    -> 이 시점에서는 현재와 다르게 아예 PopupDiv가 뜨지 않음\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행((Chrome, FireFox, iOS-Safari)\r\n 2) 화면에 표시된 버튼들을 클릭하여 PopupDiv를 표시\r\n     => [Static&WebBrowser], [Edit(taborder=4&WebBrowser(taborder=3)] 버튼은\r\n          버튼 1회클릭으로 PopupDiv이 표시되지 않음 (NG)");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 150, 100, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("azure");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 150, 100, this.PopupDiv01,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv01");
            		p.style.set_background("azure");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.PopupDiv01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 150, 100, this.PopupDiv02,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv01");
            		p.style.set_background("azure");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.PopupDiv02.addLayout(obj.name, obj);

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
        this.registerScript("RP_83928_TSS7601_WebBrowserOnPopupDiv.xfdl", function() {

        
        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, 15, 15, 150, 100, "close_callback");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.PopupDiv01.trackPopupByComponent(obj, 15, 15, 150, 100, "close_callback");
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.PopupDiv02.trackPopupByComponent(obj, 15, 15, 150, 100, "close_callback");
        }

        this.close_callback = function(id,val)
        {
        	trace("--- btnAddFromBox_onclick callback CLOSE --- 001");
        }

        this.WebBrowserOnPopupDiv_onload = function(obj,e)
        {
        	this.PopupDiv00.WebBrowser00.set_url("http://172.10.13.103:8080/NWJ/jsp/TSS7601_test.html");
        	this.PopupDiv01.WebBrowser00.set_url("http://172.10.13.103:8080/NWJ/jsp/TSS7601_test.html");
        	this.PopupDiv02.WebBrowser02.set_url("http://172.10.13.103:8080/NWJ/jsp/TSS7601_test.html");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WebBrowserOnPopupDiv_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("RP_83928_TSS7601_WebBrowserOnPopupDiv.xfdl");

       
    };
}
)();
