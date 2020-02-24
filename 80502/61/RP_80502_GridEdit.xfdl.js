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
                this.set_name("GridEdit");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">abc</Col><Col id=\"Column1\">abc</Col><Col id=\"Column2\">abc</Col><Col id=\"Column3\">abc</Col></Row><Row><Col id=\"Column0\">abc</Col><Col id=\"Column1\">abc</Col><Col id=\"Column2\">abc</Col><Col id=\"Column3\">abc</Col></Row><Row><Col id=\"Column0\">abc</Col><Col id=\"Column1\">abc</Col><Col id=\"Column2\">abc</Col><Col id=\"Column3\">abc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "15", "350", "653", "297", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "950", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_80502] [201806정기][HTML5] autoenter=\"select\" 인 Grid Cell을 방향키(오른쪽,아래)로 이동할때 이동된후 방향키가 한번 더 실행됨");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "950", "300", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[현상]\r\nEdge, Chrome, Firefox브라우저에서 발생. (NG)\r\nRuntime,IE11브라우저에서는 발생하지 않음. (OK)\r\n\r\n- MAIN 브랜치 46081에서 발생 (2018.05.16 - RP79945)\r\n\r\n그리드 셀의 편집모드로 캐럿이 들어가 있는 상태에서 방향키(오른쪽,아래)로 다음셀로 이동.\r\n-> 이동시 눌렀던 방향키가 이동후 한번씩 더 입력된 것 처럼 캐럿이 이동됨.\r\n\r\nex)\r\n우측방향키로 다음의 셀로 이동시 : \"abc\"문자열에서 'a'와'b'사이에 캐럿이 위치하게 됨\r\n하측방향키로 아래의 셀로 이동시 : \"abc\"문자열에서 문자열 마지막으로 캐럿이 위치하게됨\r\n\r\n[확인방법1 - 우측방향기로 이동]\r\n1. 첨부폼을 Edge, Chrome, Firefox브라우저에서 실행.\r\n2. 그리드의 셀을 클릭(편집모드가 되면 OK)\r\n3. 우측이동방향키를 계속 눌러서 다음셀로 이동.\r\n4. 이동된 직후 우측이동방향키가 한번 더 눌러진 것처럼 캐럿이 한문자뒤로 이동되서 표시됨. (NG)\r\n\r\n[확인방법2 - 아래쪽방향키로 이동]\r\n1. 첨부폼을 Edge, Chrome, Firefox브라우저에서 실행.\r\n2. 그리드의 셀을 클릭(편집모드가 되면 OK)\r\n3. 하단이동방향키를 눌러서 아래의 셀로 이동.\r\n4. 이동된 직후 하단이동방향키가 한번 더 눌러진 것처럼 캐럿이 문자열 맨뒤로 이동되서 표시됨. (NG)");
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

        this.loadIncludeScript("RP_80502_GridEdit.xfdl");

       
    };
}
)();
