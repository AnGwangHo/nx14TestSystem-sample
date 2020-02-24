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
                this.set_name("TSS7378parent");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_showModal", "absolute", "60", "160", "120", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("showModal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open", "absolute", "60", "240", "120", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new Button("btn_go", "absolute", "60", "320", "120", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Go");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_86764] showModal로 열린 창을 CTRL+마우스 휠 동작시 화면이 확대, 축소 안되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "100", null, null, this);
            obj.set_taborder("4");
            obj.set_text("[현상확인]\r\n1. 첨부파일(parent) 실행\r\n2. [showModal]버튼 클릭 후 CTRL+마우스 휠 동작\r\n=>  2701버전에서는 화면이 확대 축소되나 14.0.1.2802 부터는 동작하지 않음\r\n\r\n현상은 RP.80526 (변경집합 46919)의 수정이 원인으로 보여지나,\r\n사양에 의한 수정인지, 디그레인지 불명확합니다.");
            obj.style.set_font("9 Dotum");
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
        this.registerScript("RP_86764_TSS7378a_parent.xfdl", function() {

        this.strFormUrl = "Base::RP_86764_TSS7378_c.xfdl" ;
        this.btn_showModal_onclick = function(obj,e)
        {
        	var	id = "modal" ;
        	var objChildFrame = new ChildFrame(id, "absolute", 30, 30, 640, 480, null, null, this.strFormUrl);
        	objChildFrame.showModal(id, this.getOwnerFrame(), null, this, "callbackModal");
        }

        this.cnt = 0 ;
        this.btn_open_onclick = function(obj,e)
        {
        	var	strName = "modeless"+this.cnt ;
        	application.open(strName, this.strFormUrl, this.getOwnerFrame(),"", "showtitlebar=true showstatusbar=false", 0, 0, 640, 480);
        	this.cnt++ ;
        }

        this.callbackModal = function(id,value){	
        	trace("showModal callback,id:"+id+",return:"+value);
        }

        this.btn_go_onclick = function(obj,e)
        {
        	this.go(this.strFormUrl) ;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_showModal.addEventHandler("onclick", this.btn_showModal_onclick, this);
            this.btn_open.addEventHandler("onclick", this.btn_open_onclick, this);
            this.btn_go.addEventHandler("onclick", this.btn_go_onclick, this);

        };

        this.loadIncludeScript("RP_86764_TSS7378a_parent.xfdl");

       
    };
}
)();
