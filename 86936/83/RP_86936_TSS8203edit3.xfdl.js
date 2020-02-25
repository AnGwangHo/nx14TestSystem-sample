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
                this.set_name("TSS8203edit2");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "60", "80", "120", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("inputtype=\"digit\"");
            obj.style.set_border("1 solid #385d8aff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "200", "80", "120", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "340", "80", "120", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
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
        this.registerScript("RP_86936_TSS8203edit3.xfdl", function() {
        this._print = function (obj,e)
        {
        	trace(obj.id+'_'+e.eventid);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this._print(obj, e);
        	alert("value:"+this.Edit00.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit00.addEventHandler("canchange", this._print, this);
            this.Edit00.addEventHandler("cancharchange", this._print, this);
            this.Edit00.addEventHandler("onchanged", this._print, this);
            this.Edit00.addEventHandler("onchar", this._print, this);
            this.Edit00.addEventHandler("ontextchange", this._print, this);
            this.Edit00.addEventHandler("ontextchanged", this._print, this);
            this.Edit00.addEventHandler("onlbuttondown", this._print, this);
            this.Edit00.addEventHandler("onlbuttonup", this._print, this);
            this.Edit00.addEventHandler("onkillfocus", this._print, this);
            this.Edit00.addEventHandler("onsetfocus", this._print, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button00.addEventHandler("onlbuttondown", this._print, this);
            this.Button00.addEventHandler("onlbuttonup", this._print, this);
            this.Button00.addEventHandler("onkillfocus", this._print, this);
            this.Button00.addEventHandler("onsetfocus", this._print, this);

        };

        this.loadIncludeScript("RP_86936_TSS8203edit3.xfdl");

       
    };
}
)();
