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
                this.set_name("test_180405");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">b</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">c</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "44", "340", "37.99%", "35.03%", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "62", "297", "16.02%", "4.43%", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div.Edit");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "456", "343", "326", "118", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.style.set_background("antiquewhite");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "29", "25", "90", "42", null, null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "241", "297", "13.28%", "4.95%", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "388", "297", "13.28%", "4.95%", null, null, this);
            obj.set_taborder("6");
            obj.set_text("no AddRow");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "471", "483", "21.39%", "5.47%", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("[RP_79710] [nexacro14] Div 에 있는 Edit setFocus 시에 오류 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "240", null, null, this);
            obj.set_taborder("9");
            obj.set_text("[버그로 수정]\r\n- WORKV8\\RELEASE\\REL_18.03.27.00 브랜치의 448180 변경집합부터 발생하였습니다\r\n- 3월정기 배포이후 MAIN에 병합하기 전까지의 MAIN소스에서는 문제가 없습니다 (병합으로 인한 충돌로 예상됨)\r\n- 현상확인브라우저 : Runtime, Chrome\r\n\r\n[등록내용]\r\nDataset 에 bind 되어 있는 Edit 를 setFocus() 시에 오류가 발생이 됩니다.\r\n\r\nDataset addRow 후에 Edit 에 setFocus() 를 합니다.\r\nDiv 로 감싸지 않은것은 오류가 발생이 되지 않는데\r\nDiv 로 감싼 Edit 는 오류가 발생이 됩니다.\r\n\r\n또한 addRow() 를 하지 않게 되면 오류가 발생이 되지 않습니다.\r\n\r\n[테스트 방법]\r\n1. 폼을 구동 합니다.\r\n2. \"Div.Edit\" 버튼을 클릭합니다. (오류 발생)\r\n3. \"Edit\" 버튼을 클릭합니다. (정상동작)\r\n4. \"no AddRow\" 버튼을 클릭합니다.(정상동작)");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 326, 118, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("transparent");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79710_test_180405.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.addRow();
        	
        	this.Div00.Edit00.setFocus();
        }
        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.addRow();
        	
        	this.Edit00.setFocus();
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.Div00.Edit00.setFocus();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_180405_onload, this);
            this.addEventHandler("onclick", this.test_180405_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("RP_79710_test_180405.xfdl");

       
    };
}
)();
