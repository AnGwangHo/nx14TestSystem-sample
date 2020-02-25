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
                this.set_name("PopupDiv_M_isPopup_46795_01");
                this.set_titletext("PopupDiv_M_isPopup_46795_01");
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "31", "301", "37", null, null, this);
            obj.set_text("[PopupDiv_M_isPopup_46795_01]");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_button_menu", "absolute", "93", "1", "81", "36", null, null, this);
            obj.set_taborder("21");
            obj.set_text("◀PopupDiv");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "8", "1", "81", "36", null, null, this);
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "6", "70", "292", "96", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new PopupDiv("PopupDiv00", "absolute", "17", "11", "252", "71", null, null, this.Div00);
            obj.set_text("PopupDiv00");
            obj.style.set_border("3 solid yellowgreen");
            obj.style.set_font("Dotum,14");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "28.05%", "17", null, "25", "32.93%", null, this.Div00.PopupDiv00);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.style.setStyleValue("background", "focused", "blue");
            this.Div00.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_trackPopup", "absolute", "59", "179", "85", "35", null, null, this);
            obj.set_taborder("2");
            obj.set_text("trackPopup");
            obj.style.setStyleValue("background", "focused", "yellow");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "253", "179", "50", "35", null, null, this);
            obj.set_taborder("4");
            obj.set_text("clear");
            obj.style.setStyleValue("background", "focused", "yellow");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "229", "298", "130", null, null, this);
            obj.set_taborder("5");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_isPopup", "absolute", "156", "179", "85", "35", null, null, this);
            obj.set_taborder("3");
            obj.set_text("isPopup");
            obj.style.set_background("@gradation");
            obj.style.setStyleValue("background", "focused", "yellow");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result00", "absolute", "6", "360", "298", "72", null, null, this);
            obj.set_taborder("6");
            obj.set_value("'trackPopup' 버튼을 클릭하여 보여진 popupdiv를 \r\n마우스 왼쪽 버튼을 클릭 시 isPopup메소드가 \r\n실행된다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "320", "40", "1050", "140", null, null, this);
            obj.set_taborder("31");
            obj.set_text("1. 현상\r\n popup계열 콤포넌트에서 trackpopup 후에 콤포넌트 영역이 아닌 \r\n폼 영역을 클릭하면 이전 콤포넌트로 포커스가 돌아오지 않습니다.\r\n\r\n2. 테스트방법\r\n 1) 첨부파일을 HTML5 환경에서 실행합니다.\r\n 2) trackpopup 버튼을 클릭합니다.\r\n 3)콤포넌트 클릭아 아닌 폼의 빈 곳을 클릭해서 popup을 닫습니다. (1번 클릭)(2회부터는 포커스가 돌아옴)\r\n 4) tab키를 눌러 포커스 이동을 해봅니다. (브라우저 주소창이 깜빡 거립니다.)\r\n    - 브라우저 주소창이 깜빡거리지 않을 때도 있는데 이 때는 TextArea에 커서가 나타나는지로 판단\r\n    - 또는 버튼의 focused에 색깔을 줘서 확인");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "320", "10", "1050", "30", null, null, this);
            obj.set_taborder("32");
            obj.set_text("[RP_79463] [201804정기] popup계열 콤포넌트에서 trackpopup 후에 콤포넌트 영역이 아닌 폼 영역을 클릭하면 이전 콤포넌트로 포커스가 돌아오지 않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 252, 71, this.Div00.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_border("3 solid yellowgreen");
            		p.style.set_font("Dotum,14");
            		p.set_visible("false");

            	}
            );
            this.Div00.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 292, 96, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("PopupDiv_M_isPopup_46795_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79463_PopupDiv_M_isPopup_46795_01.xfdl", function() {
        this.bOpened;	//팝업되어 있는지 여부

        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::PopupDiv_menu3.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.btn_trackPopup_onclick = function(obj,e)
        {
        	this.Div00.PopupDiv00.trackPopupByComponent(this.Div00, 10, 10);
        }

        this.btn_isPopup_onclick = function(obj,e)
        {
        	this.bOpened = this.Div00.PopupDiv00.isPopup();
        	
        	this.txt_result.set_value(this.txt_result.value + "\n" + "Popup 상태: " + this.bOpened);
        }

        //Popup div가 현재 존재하는지 판단 
        this.Div00_PopupDiv00_onlbuttondown = function(obj,e)
        {
        	this.btn_isPopup_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_button_menu.addEventHandler("onclick", this.btn_button_menu_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);
            this.Div00.PopupDiv00.addEventHandler("onlbuttondown", this.Div00_PopupDiv00_onlbuttondown, this);
            this.btn_trackPopup.addEventHandler("onclick", this.btn_trackPopup_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_isPopup.addEventHandler("onclick", this.btn_isPopup_onclick, this);

        };

        this.loadIncludeScript("RP_79463_PopupDiv_M_isPopup_46795_01.xfdl");

       
    };
}
)();
