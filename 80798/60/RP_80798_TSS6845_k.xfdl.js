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
                this.set_name("TSS6845");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_preload("true");
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column4\">[Undefined]</Col><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "12.89%", "515", null, "78", "73.34%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "33.59%", "489", null, "370", "7.03%", null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "16", "16", "560", "269", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"button\" edittype=\"button\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "128", "212", "560", "269", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("key");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"bar\" edittype=\"button\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column4\" combodataset=\"Dataset01\" combocodecol=\"Column0\" combodatacol=\"Column1\" combotype=\"filter\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "29.49%", "179", null, "318", "5.57%", null, this);
            obj.set_text("PopupDiv00");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "37", "17", "570", "269", null, null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("key");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"button\" edittype=\"button\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column4\" combodataset=\"Dataset01\" combocodecol=\"Column0\" combodatacol=\"Column1\" combotype=\"filter\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("[RP_80798] [디그라데이션]Grid의 autoenter가 'select'인 button을 클릭시 오류 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "140", null, null, this);
            obj.set_taborder("5");
            obj.set_text("[현상]\r\nGrid의 autoenter가 'select'인 경우 type이 button인 cell을 클릭하고 나면 \r\n그 후 다른 선택 동작들이 정상적으로 실행되지않는 현상이 발생합니다.\r\n\r\n[확인방법]\r\n1. 첨부파일 실행\r\n2. type이 button인 cell을 클릭\r\n3. 다른 row를 선택하거나, 다른 버튼을 클릭\r\n-> 동작하지않음(NG)\r\n\r\n- 변경 집합 46191로 발생한 건으로 정기 AS가 필요한 상황임.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 370, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");
            		p.set_async("false");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 318, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TSS6845");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Button00","enable","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "Dataset00");
        };
        
        // User Script
        this.registerScript("RP_80798_TSS6845_k.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup()
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	//alert();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("RP_80798_TSS6845_k.xfdl");
        this.loadPreloadList();
       
    };
}
)();
