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
                this.set_name("RP_84306_Grid_autosizingtype");
                this.set_titletext("RP_84306_Grid_autosizingtype");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "20", "20", "760", "100", null, null, this);
            obj.set_taborder("0");
            obj.set_text("[RP_84306] 동적 생성한 컬럼에 대해 autosizingtype 설정을 변경할 경우 겹쳐지는 현상\r\n\r\n  - load 시점에 동적으로 컬럼을 생성\r\n  - 버튼을 클릭하여 autosizingtype 설정을 'col'로 변경하고 다시 'none'으로 변경");
            obj.style.set_linespace("5");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "450", "120", "150", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("autosizingtype = none");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "450", "190", "150", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("autosizingtype = col");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "120", "400", "200", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:Column1\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:Column2\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column3\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("RP_84306_Grid_autosizingtype");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_84306_Grid_autosizingtype.xfdl", function() {

        this.RP_84306_Grid_autosizingtype_onload = function(obj,e)
        {
        	for (var i = 2; i < 5; i++)
        	{
        		var insertColumnInt = this.Grid00.insertContentsCol(i);

        		this.Grid00.setCellProperty("head", insertColumnInt, "text", "ADDED_" + i);
          		var b = this.Grid00.setFormatColProperty(insertColumnInt, "size", 40);
          		
          		this.Grid00.setCellProperty("body", insertColumnInt, "autosizecol", "limitmin");
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid00.set_autosizingtype("none");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Grid00.set_autosizingtype("col");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.RP_84306_Grid_autosizingtype_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("RP_84306_Grid_autosizingtype.xfdl");

       
    };
}
)();
