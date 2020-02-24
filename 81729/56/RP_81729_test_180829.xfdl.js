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
                this.set_name("test_180829");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">3</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "29", "195", "12.3%", "6.51%", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_81729] [nexacro14 - 디그]Dataset 에서 insertRow 후 copyData 를 하게 되면 오류 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "120", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Dataset 에서 insertRow 후 copyData 를 하게 되면 오류 발생\r\n\r\nTypeError: Cannot read property '0' of undefined\r\n\r\n[테스트 방법]\r\n1. 폼을 구동합니다.\r\n2. 버튼을 클릭합니다.\r\n3. output 창에 에러가 발생이 됩니다.\r\n-> main branch 변경집합번호  :47634 번 작업으로 발생되는 문제 (RP-81327)");
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
        this.registerScript("RP_81729_test_180829.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.insertRow(0);
        	//this.Dataset00.addRow(0);
        	this.Dataset00.setColumn(0, 0, "test");
        	
        	this.Dataset01.copyData(this.Dataset00);
        	
        	//trace(this.Dataset00.saveXML());
        	trace(this.Dataset01.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_180829_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_81729_test_180829.xfdl");

       
    };
}
)();
