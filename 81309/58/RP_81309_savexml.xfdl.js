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
                this.set_name("savexml");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">11</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">22</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">11</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">22</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "33.79%", "185", null, "74", "57.23%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_81309] appendData 시 savexml로 찍으면 컬럼이 누락되어 찍힘.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "130", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 현상\r\n Dataset.appendData 시 오동작\r\n\r\n - 4월정기 45060 에서 발생 (2018.03.27 - RP78551)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) 버튼 클릭\r\n 3) saveXML 결과 확인\r\n     - 2,3 로우에 rowColumn1 가 없는 것을 확인");
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
        this.registerScript("RP_81309_savexml.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	
        	this.Dataset01.appendData(this.Dataset00);

        	trace(this.Dataset01.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_81309_savexml.xfdl");

       
    };
}
)();
