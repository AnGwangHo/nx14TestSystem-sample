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
                this.set_name("Pop1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01", "absolute", "26.66%", "230", null, "69", "64.16%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_85358] 그리드 editautoselect true 선택시 익스플로러(11)에서 선택이 풀리지 않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "150", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1. 현상\r\n open 으로 띄운 창에서 Grid Cell에 전체선택이 풀리지 않는 현상\r\n\r\n - 2018년 2월 정기 44362에서 발생함 (2018.02.07 - RP 77528)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행 (Pop1.xfdl)\r\n 2) 버튼 클릭 > open 창 띄움\r\n 3) Grid의 '부서/공정명' 컬럼에서 임의 셀 선택 > 전체 선택 상태가 됨\r\n 4) 다시 클릭 > 전체 선택이 풀리지 않는 것을 확인\r\n\r\n* open으로 띄우지 않고 바로 실행했을 때는 정상");
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
        this.registerScript("RP_85358_Pop1.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	application.open("modeless", "Base::RP_85358_DHW00323M.xfdl", this.getOwnerFrame(),'', "showtitlebar=true openalign='center middle'", 500, 200);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("RP_85358_Pop1.xfdl");

       
    };
}
)();
