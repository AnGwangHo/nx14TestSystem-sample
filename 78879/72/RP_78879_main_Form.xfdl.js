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
                this.set_name("main_Form");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("aqua");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "3.61%", "45", null, "76", "71.29%", null, this);
            obj.set_taborder("0");
            obj.set_text("main_Form");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "34.96%", "158", null, "354", "21.09%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Base::RP_78879_sub_From.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("aqua");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::RP_78879_sub_From.xfdl");
        };
        
        // User Script
        this.registerScript("RP_78879_main_Form.xfdl", function() {

        this.main_Form_onload = function(obj,e)
        {
        	alert("mainFrom---> " + this.Div00.form_Value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.main_Form_onload, this);

        };

        this.loadIncludeScript("RP_78879_main_Form.xfdl");
        this.loadPreloadList();
       
    };
}
)();
