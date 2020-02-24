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
                this.set_name("ccc");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "4.39%", "237", null, "219", "46.97%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_selectscrollmode("scroll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"Column9\"/><Cell col=\"10\" disptype=\"normal\" text=\"Column10\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:Column9\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "4.39%", "523", null, "219", "46.97%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset01");
            obj.set_selectscrollmode("scroll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"Column9\"/><Cell col=\"10\" disptype=\"normal\" text=\"Column10\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:Column9\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("RP 84265 selectscrollmode가 scroll인 grid를 drag시 scroll되지 않음");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.2%", "52", null, "92", "0.88%", null, this);
            obj.set_taborder("3");
            obj.set_text("테스트 방법\r\n\r\n 1. 실행 후 상단 그리드 drag 동작\r\n 2. 상단 그리드의 scroll 동작 확인\r\n 3. 하단 그리드 drag 동작\r\n 4. 하단 드리드 scroll 동작 확인");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.39%", "192", null, "37", "69.53%", null, this);
            obj.set_taborder("4");
            obj.set_text("ondrag 이벤트가 설정 된 그리드");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "4.39%", "486", null, "37", "69.53%", null, this);
            obj.set_taborder("5");
            obj.set_text("ondrag 이벤트가 설정 되지 않은 그리드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("ccc");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_84265_ccc.xfdl", function() {

        this.Grid00_ondrag = function(obj,e)
        {
        	trace("Grid00_ondrag");
        }

        this.Grid00_ondrop = function(obj,e)
        {
        	trace("Grid00_ondrop");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("ondrag", this.Grid00_ondrag, this);

        };

        this.loadIncludeScript("RP_84265_ccc.xfdl");

       
    };
}
)();
