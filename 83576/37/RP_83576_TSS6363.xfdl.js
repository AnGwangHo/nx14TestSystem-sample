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
                this.set_name("TSS6363");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "21", "49", "529", "48", null, null, this);
            obj.set_taborder("0");
            obj.set_text(" imemode=\"hiragara\", maxlength=10, lengthunit=\"ascii\"");
            obj.style.set_background("aquamarine");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("bold 11 MS Gothic");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "22", "110", "241", "47", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hiragana");
            obj.set_maxlength("10");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "277", "110", "273", "136", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hiragana");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "31", "181", "121", "41", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("4");
            obj.set_text("RP 83576 IE11에서 일본어 IME 입력 후 스페이스키 입력시 maxlength 초과 입력");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2.05%", "264", null, "92", "31.25%", null, this);
            obj.set_taborder("5");
            obj.set_text("테스트 방법\r\n\r\n 1. Edit, Textarea에 일본어IME입력모드로 'あああああああ'를 maxlength초과해서 입력 확정.\r\n 2. maxlength=10이므로 'あああああ' 5문자만 입력됨.\r\n 3. 이 상태에서 스페이스키를 누르면 입력되는지 확인");
            obj.style.set_font("10 Dotum");
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
        this.registerScript("RP_83576_TSS6363.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var txt = "this.Edit00.value : " + this.Edit00.value + "です。";
        	txt += "\nthis.Edit00.text : " + this.Edit00.text + "です。"
        	this.alert(txt);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_83576_TSS6363.xfdl");

       
    };
}
)();
