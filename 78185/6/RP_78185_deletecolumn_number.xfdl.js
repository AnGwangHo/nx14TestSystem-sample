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
                this.set_name("deletecolumn_number");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "4.65%", "180", null, "45", "79.65%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "11.9%", "260", null, "225", "52.65%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_78185] [201801_Merge] Dataset.deletecolumn의 전달인자값으로 index 번호를 넘기면 에러가 발생합니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "40", "800", "120", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1. 현상\r\n Dataset.deleteColumn 시 에러 발생\r\n\r\n2. 테스트방법\r\n 1) 첨부파일을 Runtime,이나 HTML5 환경에서 실행합니다.\r\n 2) Button00 을 클릭합니다.\r\n 3) deletecolumn(2) 스크립트를 수행하는데 에러가 발생합니다.\r\n\r\n3. MAIN 브랜치 변경집합 43946에서 발생 (2018.01.19 - RP77647)");
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
        this.registerScript("RP_78185_deletecolumn_number.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.deleteColumn(2);
        	trace(this.Dataset00.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_78185_deletecolumn_number.xfdl");

       
    };
}
)();
