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
                this.set_name("grid_calendardisplaynulltype_error");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">20160101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">20140101</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">20170101</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">201801010233</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "4.2%", "193", null, "378", "64.06%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"225\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column1\" mask=\"yyyy-MM-dd HH:mm\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "41.41%", "255", null, "58", "48.73%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "950", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_78529] 그리드 셀의 calendardisplaynulltype 속성을 none으로 설정시 null 데이터의 display 형태가 0000-01-01 00:00 출력 됩니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "950", "120", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1. 현상\r\n calendardisplaynulltype=none 일 때  0000-01-01 00:00 으로 나타나는 현상\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) 현상 확인\r\n    - Column1의 세번째 row 가 0000-01-01 00:00 으로 나타남\r\n\r\n3. 2017년 12월정기 브랜치 변경집합 42823에서 발생 (2017.11.14 - RP 76920)");
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
        this.registerScript("RP_78529_grid_calendardisplaynulltype_error.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Dataset01.getColumn(1, 2));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_78529_grid_calendardisplaynulltype_error.xfdl");

       
    };
}
)();
