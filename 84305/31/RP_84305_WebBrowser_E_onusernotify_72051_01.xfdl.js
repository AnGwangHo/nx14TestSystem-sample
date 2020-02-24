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
                this.set_name("WebBrowser_E_onusernotify_72051_01");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,310,450);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "7", "300", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("RP 84305 IOS에서 터치 안되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "240", "333", "63", "35", null, null, this);
            obj.set_taborder("3");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "9", "376", "298", "71", null, null, this);
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute 35 79 135 119", "9", "116", "295", "212", null, null, this);
            obj.set_taborder("8");
            obj.set_url("http://localhost:8080/Degradation/html/RP_84305_Inner.html");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.97%", "40", null, "69", "0.32%", null, this);
            obj.set_taborder("10");
            obj.set_text("테스트 방법\r\n\r\n 1. IOS 장비에서 로드 후 HTML5값 전달 버튼 터치\r\n 2. 터치가 안되는 것 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WebBrowser_E_onusernotify__01");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_84305_WebBrowser_E_onusernotify_72051_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl( "Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl( "Sub_menu::WebBrowser_menu1.xfdl");		
        }

        
        this.btn_set_onclick = function(obj,e)
        {
        	this.WebBrowser00.set_document_title(this.txt_titleValue.value);
        	this.txt_result.set_value( this.txt_result.value + "\n"+ "title set : " +this.WebBrowser00.document.title);
        }

        this.btn_get_onclick = function(obj,e)
        {
        	this.txt_result.set_value( this.txt_result.value + "\n"+ "url get : " +this.WebBrowser00.document.url);	
        	this.txt_result.set_value( this.txt_result.value + "\n"+ "title get : " +this.WebBrowser00.document.title);	
        	this.txt_result.set_value( this.txt_result.value + "\n"+ "cookie get : " +this.WebBrowser00.document.cookie);	
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	this.txt_result.set_value( this.txt_result.value + "\n== onusernotify 발생 ==");
        	this.txt_result.set_value( this.txt_result.value + "\nobj.name" + obj.name);
        	this.txt_result.set_value( this.txt_result.value + "\ne.eventid: " + e.eventid);
        	this.txt_result.set_value( this.txt_result.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.txt_result.set_value( this.txt_result.value + "\ne.fromobject: " + e.fromobject);
        	this.txt_result.set_value( this.txt_result.value + "\ne.userdata: " + e.userdata);

        }

        this.Static02_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_84305_WebBrowser_E_onusernotify_72051_01.xfdl");

       
    };
}
)();
