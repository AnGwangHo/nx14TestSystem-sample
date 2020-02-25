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
                this.set_name("maxlength");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,718);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">test001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "47", "250", "300", "37", null, null, this);
            obj.set_taborder("0");
            obj.set_text("確認用コンポーネント");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "4.49%", "294", null, "49", "76.07%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "28.71%", "290", null, "60", "56.84%", null, this);
            obj.set_taborder("2");
            obj.set_text("送信");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "4.59%", "385", null, "268", "79.79%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"text\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "49.12%", "296", null, "65", "25%", null, this);
            obj.set_taborder("4");
            obj.set_value("hjlhjklhlhkl");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "46%", "408", null, "77", "27.15%", null, this);
            obj.set_taborder("5");
            obj.set_value("hjklhjlhlhjkl");
            obj.set_type("string");
            obj.set_mask("@@@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "24.9%", "401", null, "217", "57.03%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "1150", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("[RP_78409] [201802정기] IE의 edit, maskedit에서 tab키로 포커스를 이동 시킨뒤 입력된 문자열 위에 마우스 커서를 놓고 클릭하면 포커스는 오지만 caret은 이동하지 않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "1000", "200", null, null, this);
            obj.set_taborder("8");
            obj.set_text("2018.2.13 2월 정기 테스트용 IE11 발생\r\nRuntime, Chrome, Firefox 정상\r\n\r\n* 2월정기 브랜치 변경집합 43984에서 발생 (2018.01.22 - RP 46099,77623)\r\n\r\n IE의 edit, maskedit에서 tab키로 포커스를 이동 시킨뒤 \r\n입력된 문자열 위에 마우스 커서를 놓고 클릭하면 \r\n포커스는 오지만 caret은 이동하지 않습니다.\r\n\r\n<테스트>\r\n1. 샘플을 IE11로 실행합니다.\r\n2. 좌측상단의 edit에 클릭으로 caret을 맨 뒤로 옴깁니다.\r\n3. tab키를 누릅니다.\r\n4. 좌측상단의 edit에 클릭으로 문자열 중간쯤 클릭으로 한번 클릭합니다.\r\n5. 포커스는 오지만 caret은 맨 뒤에서 깜빡이고 있습니다.\r\n  - 한번더 클릭하면 caret이 이동합니다.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 718, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","Dataset00","text");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78409_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
            var id = "search";
            var url = "http://172.10.12.159:8080/File/editTest.jsp";
            var reqDs = "Dataset00=Dataset00, Dataset01=Dataset01";
            var respDs = "Dataset01=Dataset01";
            var args = "mode=on";
            var bAsync = true;
            this.transaction(id, url, reqDs, respDs, args, "", bAsync);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_78409_test.xfdl");

       
    };
}
)();
