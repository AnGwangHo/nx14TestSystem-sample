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
                this.set_name("tss7256_sub");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "55.47%", "31", null, "131", "7.32%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "8.3%", "37", null, "124", "48.54%", null, this);
            obj.set_taborder("1");
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
        this.registerScript("RP_82093_tss7256_sub.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	trace("aaaa");
        	//obj.setFocus();
        	//this.parent.Div00.set_url("Base::RP_82093_tss7256_sub_1.xfdl");
        	this.set_url("Base::RP_82093_tss7256_sub_1.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_82093_tss7256_sub.xfdl");

       
    };
}
)();
