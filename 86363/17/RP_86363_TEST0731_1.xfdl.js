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
                this.set_name("TEST0731_1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "11", "157", "570", "342", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Base::RP_86363_TEST0731_2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "56", "331", "82", null, null, this);
            obj.set_taborder("2");
            obj.set_text("테스트 방법\r\n\r\n 1. 화면 로드 후 Div내 Cell 클릭\r\n 2. 콘솔창에서 trace 확인\r\n 3. '222'가 콘솔창에 출력되는지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "7", "413", "37", null, null, this);
            obj.set_taborder("3");
            obj.set_text("RP 86363 transaction 후 cellclick 발생 안하는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::RP_86363_TEST0731_2.xfdl");
        };
        
        // User Script
        this.registerScript("RP_86363_TEST0731_1.xfdl", function() {

        this.TEST0731_1_onlbuttondown = function(obj,e)
        {
        	trace('11');
        	this.fn_chkWrisStop();
        }

        

        
        /*******************************************************************************
         * fn_chkWrisStop : 통합정보시스템 이용 제한 여부 확인
         ********************************************************************************/
        this.fn_chkWrisStop = function()
        {
        	var url = "jsp::RP_86363_NC_NoSQL2.jsp";
        	this.transaction( "fn_chkWrisStop"
        					, url
        					, ""
        					, ""
        					, "a=b"
        					, "fn_trans_callback"
        					, false
        					, 0
        					, false);
        }

        /***************************************************************************************
         * fn_trans_callback
         ***************************************************************************************/
        this.fn_trans_callback = function (sSvcId,nErrorCode,sReturn)
        {
        	switch (sSvcId)
        	{
        		case "fn_chkWrisStop":
        			if (nErrorCode == 1)
        			{
        				trace('4444444444');
        			}
        			else
        			{
        				trace('333333333');
        			}
        			break;

        		default:
        			break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onlbuttondown", this.TEST0731_1_onlbuttondown, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_86363_TEST0731_1.xfdl");
        this.loadPreloadList();
       
    };
}
)();
