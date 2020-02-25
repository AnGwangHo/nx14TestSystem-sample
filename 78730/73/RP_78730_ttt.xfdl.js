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
                this.set_name("ttt");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "4.79%", "220", null, "192", "66.7%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_78730] 그리드의 데이터영역이아닌 여백에 마우스 우클릭 시 오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "150", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 현상\r\n 그리드의 데이터영역이아닌 여백에 마우스 우클릭 시 오류입니다.\r\n\r\n오류메시지\r\nSCRIPT438: 개체가 '_hasEditor' 속성이나 메서드를 지원하지 않습니다.\r\n\r\n===테스트방법===\r\n1. 첨부된 화면을 HTML5퀵뷰로 실행.\r\n2. 개발자도구 > 콘솔\r\n3. 그리드 데이터 이외의 여백에서 우클릭.\r\n\r\n* 2018년 2월정기 브랜치 변경집합 44022에서 발생 (2018.01.24 - RP77979)");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_78730_ttt.xfdl");

       
    };
}
)();
