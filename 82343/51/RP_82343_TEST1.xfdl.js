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
                this.set_name("TEST1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "13.87%", "200", null, "291", "38.38%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_82343] Grid의 onkeyup 이벤트가 발생하지 않는 현상 (방향키)");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "140", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 현상\r\n Grid에서 방향키를 눌렀을 때 onkeyup 이벤트가 발생하지 않는 현상\r\n\r\n - MAIN 48625에서 발생 (2018.10.08)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) 방향키를 눌러본다\r\n 3) 이벤트가 발생하지 않는 것을 확인\r\n     - 첫번째 로우에서 방향키 위를 눌렀을 때는 발생함\r\n     - 마지막 로우에서 방향키 아래를 눌렀을 때는 발생함");
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
        this.registerScript("RP_82343_TEST1.xfdl", function() {

        this.Grid00_onkeyup = function(obj,e)
        {
        	this.Grid00.setCellPos(3);
        	this.Dataset00.set_rowposition(0);
         	this.Grid00.showEditor(true);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onkeyup", this.Grid00_onkeyup, this);

        };

        this.loadIncludeScript("RP_82343_TEST1.xfdl");

       
    };
}
)();
