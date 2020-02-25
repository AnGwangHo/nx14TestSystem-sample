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
                this.set_name("grid_celltype");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">12</Col><Col id=\"Column2\">12</Col></Row><Row><Col id=\"Column0\">23</Col><Col id=\"Column1\">23</Col><Col id=\"Column2\">23</Col></Row><Row><Col id=\"Column0\">4123</Col><Col id=\"Column1\">4123</Col><Col id=\"Column2\">4123</Col></Row><Row><Col id=\"Column0\">554</Col><Col id=\"Column1\">554</Col><Col id=\"Column2\">554</Col></Row><Row><Col id=\"Column0\">123</Col><Col id=\"Column1\">123</Col><Col id=\"Column2\">123</Col></Row><Row><Col id=\"Column0\">1333</Col><Col id=\"Column1\">1333</Col><Col id=\"Column2\">1333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "3.03%", "210", null, "166", "69.82%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" celltype=\"summary\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "33.4%", "228", null, "72", "29.98%", null, this);
            obj.set_taborder("1");
            obj.set_text("그리드.Cell.celltype = summary\r\n\r\n값이 동일하게 보입니다.\r\n이전 버전에서는 나타나지 않는 현상입니다.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "62.4%", "192", null, "207", "16.11%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_78694] 그리드 Cell.celltype = summary 사용시 값 반영 오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "130", null, null, this);
            obj.set_taborder("4");
            obj.set_text("그리드 Cell.celltype = summary 사용시 값 반영 오류입니다.\r\n\r\n===테스트 방법===\r\n\r\n1. 첨부된 화면을 퀵뷰로 실행.\r\n\r\n2. Column2의 summary celltype이 값이 동일하게 나오고 클릭 시 값이 이상하게 오류동작을 합니다.\r\n\r\ncf)\r\nMAIN 브랜치 / 변경 집합 43576 에서 발생");
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

        this.loadIncludeScript("RP_78694_grid_celltype.xfdl");

       
    };
}
)();
