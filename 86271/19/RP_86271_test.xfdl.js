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
                this.set_name("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "24", "137", "398", "221", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "46.09%", "150", null, "50", "42.19%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "25", "375", "400", "141", null, null, this);
            obj.set_taborder("2");
            obj.set_value("홍길동");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "8", "6", "547", "37", null, null, this);
            obj.set_taborder("3");
            obj.set_text("RP 86271 한글입력 후 잘라내기 실행시 오류 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "16", "45", null, "84", "54.49%", null, this);
            obj.set_taborder("4");
            obj.set_text("테스트 방법\r\n\r\n 1. 상단 Textarea에서 '홍길동동동' 문구 입력\r\n 2. 마우스로 '동동동' 선택 후 마우스 오른클릭하여 context menu 호출\r\n 3. context menu에서 잘라내기 선택 후 오류 발생하는지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_86271_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.TextArea00.value);
        	
        	trace(this.Dataset00.saveXML());
        }

        this.TextArea00_ontextchanged = function(obj,e)
        {
        	trace("TextArea00_ontextchanged");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("ontextchanged", this.TextArea00_ontextchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_86271_test.xfdl");

       
    };
}
)();
