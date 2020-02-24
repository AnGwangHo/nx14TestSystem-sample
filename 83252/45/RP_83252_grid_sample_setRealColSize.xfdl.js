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
                this.set_name("grid_check_sample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"column0\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">100</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Gil-Dong Hong</Col><Col id=\"telno\">02-1234-1234</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">100</Col><Col id=\"column0\">25000000</Col></Row><Row><Col id=\"dept_code\">200</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Sun-Sin Lee</Col><Col id=\"telno\">02-1234-1234</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">200</Col><Col id=\"column0\">-25000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0.78%", "64", null, "165", "40.23%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"address\"/><Cell col=\"5\" disptype=\"normal\" text=\"age\"/><Cell col=\"6\" disptype=\"normal\" text=\"column0\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:address\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:age\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "0.78%", "254", null, "50", "88.48%", null, this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "16", "467", "37", null, null, this);
            obj.set_taborder("8");
            obj.set_text("RP 83252 setRealColsize 후 가로 스크롤 생기지 않는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "145", "232", "467", "114", null, null, this);
            obj.set_taborder("9");
            obj.set_text("테스트 방법\n\n\n 1. 화면 로드 후 Button00을 클릭\n 2. 가로스크롤 생성 여부를 확인");
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
        this.registerScript("RP_83252_grid_sample_setRealColSize.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        	this.Grid00.set_enableredraw(false); 
        	this.Grid00.set_autofittype("none");
        	this.Grid00.setRealColSize(0,  1000,  false); // <= 가로스크롤 생기도록 크게 늘림
        	this.Grid00.set_enableredraw(true); 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_83252_grid_sample_setRealColSize.xfdl");

       
    };
}
)();
