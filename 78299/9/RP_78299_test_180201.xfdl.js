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
                this.set_name("test_180201");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grid1", "absolute", "5", "235", null, null, "5", "-128", this);
            obj.set_taborder("1");
            obj.set_binddataset("DS_GRID1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"270\"/><Column size=\"24\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\"/><Cell col=\"1\" rowspan=\"2\" text=\"*입학년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"단과대학\"/><Cell col=\"3\" rowspan=\"2\" text=\"*학과코드\"/><Cell col=\"4\" rowspan=\"2\" colspan=\"2\" text=\"*소속학과\"/><Cell col=\"6\" rowspan=\"2\" text=\"*주야\"/><Cell col=\"7\" colspan=\"3\" text=\"모집정원\"/><Cell col=\"10\" colspan=\"3\" text=\"입학인원\"/><Cell col=\"13\" rowspan=\"2\" text=\"여석여부\"/><Cell row=\"1\" col=\"7\" text=\"정원내\"/><Cell row=\"1\" col=\"8\" text=\"정원외\"/><Cell row=\"1\" col=\"9\" text=\"합계\"/><Cell row=\"1\" col=\"10\" text=\"정원내\"/><Cell row=\"1\" col=\"11\" text=\"정원외\"/><Cell row=\"1\" col=\"12\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:SEL\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:YR\" editlimit=\"4\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:COLL_NM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:DEPT_NM\" editimemode=\"hangul\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;controlbackground: ;\" cssclass=\"gridPopup\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:DN_DIV_NM\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:ENT_CNT\" mask=\"###,###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:EXC_CNT\" mask=\"###,###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:TOT_CNT\" mask=\"#,#\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:DEPT_ENT_CNT\" mask=\"###,###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:DEPT_EXC_CNT\" mask=\"###,###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:TOT_DEPT_CNT\" mask=\"#,#\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:ADD_YN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"6\" style=\"font:bold 9 Dotum;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;ENT_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;EXC_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;TOT_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;DEPT_ENT_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;DEPT_EXC_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"font:bold 9 Dotum;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;TOT_DEPT_CNT&quot;))\" mask=\"#,#\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "180", null, null, this);
            obj.set_taborder("2");
            obj.set_text("그리드에서 onmousemove() 에서 setCellProperty() 를 이용해서 tooltiptext 를 셋팅을 하고 있습니다.\r\n\r\n동작을 진행하다 보면은 head 를 클릭하였을때\r\n\"정의되지 않음 또는 null 참조인 'left' 속성을 가져올 수 없습니다.\" 라는 오류가 IE 에서 발생이 됩니다.\r\nChrome 에서도 동일하게 오류가 발생이 됩니다.\r\n\r\n[테스트 방법]\r\n1. 폼을 IE, Chrome 에서 띄움니다.\r\n2. 개발자 도구창을 띄움니다.\r\n3. 그리드의 head 부분을 마우스로 클릭을 합니다. \r\n4. 이동을 하면서 여러군데를 클릭을 하게 되면 \r\n\"정의되지 않음 또는 null 참조인 'left' 속성을 가져올 수 없습니다.\" 라는 에러가 나타납니다.\r\n\r\n변경집합번호 : 42729 (RELEASE\\REL_17.11.28.00) 작업으로 발생된 상황");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_78299] [nexacro14] Grid의 mousemove 이벤트에서 setCellProperty() 를 할 경우 오류가 발생이 됩니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
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
        this.registerScript("RP_78299_test_180201.xfdl", function() {

        this.fn_grid1_onheadclick = function(obj,e)
        {
        	trace(e.col);
        }

        this.fn_grid_onmousemove = function(obj,e)
        {
        	if(e.row == -1) 
        	{
        		this.grid1.setCellProperty("head", e.cell, "tooltiptext", "test");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grid1.addEventHandler("onkeydown", this.fn_grid1_onkeydown, this);
            this.grid1.addEventHandler("onmousemove", this.fn_grid_onmousemove, this);
            this.grid1.addEventHandler("oncellclick", this.fn_grid1_oncellclick, this);
            this.grid1.addEventHandler("onheadclick", this.fn_grid1_onheadclick, this);
            this.grid1.addEventHandler("ontextchange", this.fn_grid1_ontextchange, this);

        };

        this.loadIncludeScript("RP_78299_test_180201.xfdl");

       
    };
}
)();
