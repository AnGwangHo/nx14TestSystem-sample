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
                this.set_name("SAM_100_form");
                this.set_titletext("Form : 팝업호출");
                this._setFormPosition(0,0,1254,632);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">AAA</Col><Col id=\"Column1\">CCC</Col></Row><Row><Col id=\"Column0\">BBB</Col><Col id=\"Column1\">DDD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button09", "absolute", "2.79%", "159", null, "35", "90.75%", null, this);
            obj.set_taborder("32");
            obj.set_text("모달");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "2.79%", "200", null, "36", "90.75%", null, this);
            obj.set_taborder("33");
            obj.set_text("모달리스");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("34");
            obj.set_text("[RP_78611] open으로 팝업시 onload에 obj.setFocus()시 오류현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "100", null, null, this);
            obj.set_taborder("35");
            obj.set_text("open으로 팝업시 onload에 obj.setFocus()시 오류현상입니다.\r\n\r\n===테스트 방법===\r\n\r\n1. 첨부된 화면중 _testM.xfdl의 모달리스 버튼의 application.open의 폼url인자값을 _test.xfdl로 설정.\r\n\r\n2. 퀵뷰로 실행시 obj.setFocus()시 오류");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1254, 632, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SAM_100_form");
            		p.set_titletext("Form : 팝업호출");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78611__testM.xfdl", function() {

        this.Button09_onclick = function(obj,e)
        {
        	var oChildFrame = new ChildFrame;
        	
        	oChildFrame.init("test", "absolute",0, 0, 100, 100, null, null, "Base::RP_78611__test1.xfdl");	//22는 타이틀바높이
        	oChildFrame.set_autosize(false);
        	
        	//oChildFrame.set_showtitlebar(bShowtitlebar);
        	oChildFrame.set_layered(true);
        	//oChildFrame.set_resizable(bResize);
        	//oChildFrame.set_showstatusbar(bShowstatusbar);
        	//oChildFrame.set_openalign(sOpenalign); //화면의 중앙에 위치
        	//oChildFrame.style.set_background(sBackground);   //backround color
        	oChildFrame.set_dragmovetype("all");
        	
        // 	var oPopupInfo = {};
        // 	oPopupInfo["modeless"]     = "N";
        // 	oPopupInfo["url"]      		= oData.url;
        // 	oPopupInfo["popupTitle"]   = oData.title;
        // 	oPopupInfo["popup_fobj"]   = pThis;
        // 	oPopupInfo["popup_oArg"]   = oData.objParam;
        // 	oPopupInfo["popup_callback"] = sPopupCallback;
        	
        	var pThis = this;
        	
        	//var bSucc = oChildFrame.showModal(sId, pThis ,oData.objParam,  pThis , sPopupCallback);
        	var bSucc = oChildFrame.showModal("test", pThis.getOwnerFrame() ,"",  pThis , "");
        }

        this.Button10_onclick = function(obj,e)
        {
        	var pThis = this;
        	// open창에서 해당옵션은 고정처리
        	var sOpenStyle= "showtitlebar=false showstatusbar=false autosize=false resizable=false location=false";
        	application.open("test",  "Base::RP_78611__test1.xfdl", pThis.getOwnerFrame() ,"", sOpenStyle, 0, 0 , 100, 200, pThis);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.SAM_100_form_ontimer, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);

        };

        this.loadIncludeScript("RP_78611__testM.xfdl");

       
    };
}
)();
