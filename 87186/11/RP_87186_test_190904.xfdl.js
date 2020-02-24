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
                this.set_name("test_190904");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("white");
            this.style.set_border("1 solid black");
            this.style.set_bordertype("round 20 20  lefttop righttop leftbottom rightbottom");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">a</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">b</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "4.49%", "168", null, "167", "73.14%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column0\" combodataset=\"Dataset01\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodisplay=\"display\"/><Cell col=\"1\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "42.48%", "168", null, "68", "42.09%", null, this);
            obj.set_taborder("1");
            obj.set_text("Filter");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "28.91%", "344", null, "185", "42.09%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "7", "557", "37", null, null, this);
            obj.set_taborder("3");
            obj.set_text("RP 87186 Grid Combo의 binddataset에 Filter시 오동작");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "32", "52", "447", "82", null, null, this);
            obj.set_taborder("4");
            obj.set_text("테스트 방법\r\n\r\n 1. 화면 실행 후 Filter Button 클릭\r\n 2. Grid 내 Combo를 선택하여 값을 변경 후 다른 Cell 선택\r\n 3. Combo에서 선택한 값이 유지 되는지 확인\r\n");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_background("white");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 20 20  lefttop righttop leftbottom rightbottom");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_87186_test_190904.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset01.filter("Column2=='b'");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("oncolumnchanged", this.Dataset00_oncolumnchanged, this);
            this.Dataset01.addEventHandler("cancolumnchange", this.Dataset01_cancolumnchange, this);
            this.Dataset01.addEventHandler("oncolumnchanged", this.Dataset01_oncolumnchanged, this);
            this.addEventHandler("onrbuttondown", this.test_190904_onrbuttondown, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_87186_test_190904.xfdl");

       
    };
}
)();
