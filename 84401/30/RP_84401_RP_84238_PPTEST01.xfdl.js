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
                this.set_name("PPTEST01");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1110,512);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"col01\" type=\"STRING\" size=\"256\"/><Column id=\"col02\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static16", "absolute", "10", "208", "120", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("mask edit");
            obj.set_cssclass("sta_WFSA_label");
            obj.getSetter("multilang").set("thk");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_thkFrom", "absolute", "10", "228", "120", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "138", "208", "120", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("edit");
            obj.set_cssclass("sta_WFSA_label");
            obj.getSetter("multilang").set("invNo");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_invNo", "absolute", "138", "228", "120", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_inputmode("upper");
            obj.set_maxlength("20");
            obj.set_imemode("hangul,full");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("5");
            obj.set_text("RP 84401 Win7 크롬에서 IME일본어 입력 후 숫자 입력시 누락 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0.18%", "52", null, "92", "0.81%", null, this);
            obj.set_taborder("6");
            obj.set_text("테스트 방법\r\n\r\n 1. Win7 크롬에서 실행\r\n 2. 키보드를 일본어 히라가나로 변경\r\n 3. maskedit에 숫자키패드로 '123456' 입력\r\n 4. '12346'으로 되는지 확인");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1110, 512, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PPTEST01");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item26","mae_thkFrom","value","ds_search","thkFrom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_invNo","value","ds_search","invNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PPTEST01_onload, this);

        };

        this.loadIncludeScript("RP_84401_RP_84238_PPTEST01.xfdl");

       
    };
}
)();
