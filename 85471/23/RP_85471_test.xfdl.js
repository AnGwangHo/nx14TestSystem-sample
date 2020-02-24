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
                this.set_name("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "24", "72", "158", "72", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "208", "52", null, "148", "41.8%", null, this);
            obj.set_taborder("1");
            obj.set_text("테스트방법\r\n\r\n 1. 버튼 클릭\r\n 2. trace 확인\r\n 3. saveXML 함수의 'A' 옵션에 맞춰 출력되는지 확인\r\n 4. 정상출력시 아래와 같이 Column이 유지\r\n\r\n <Row type=\"delete\"> \r\n   <Col id=\"Column0\">asdf</Col> \r\n</Row>");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("RP 85471 deleterow시 saveXML 실행 시 오동작");
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
        

        
        // User Script
        this.registerScript("RP_85471_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.addRow();
        	
        	this.Dataset00.setColumn(0, "Column0", "asdf");
        	
        	this.Dataset00.applyChange();
        	
        	this.Dataset00.deleteRow(0);
        	
        	trace(this.Dataset00.saveXML("aaa", "a"));
        }

        this.TextArea00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_85471_test.xfdl");

       
    };
}
)();
