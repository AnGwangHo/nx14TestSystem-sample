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
                this.set_name("Grid_P_autofittype_46721_01");
                this.set_titletext("Grid_P_autofittype_46721_01");
                this._setFormPosition(0,0,443,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"Number\" size=\"256\" type=\"STRING\"/><Column id=\"Data\" size=\"256\" type=\"STRING\"/><Column id=\"Text\" size=\"256\" type=\"STRING\"/><Column id=\"Date\" size=\"256\" type=\"STRING\"/><Column id=\"Chk_val\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"Number\">1</Col><Col id=\"Data\">일</Col><Col id=\"Text\">Col_Data10Col_Data10</Col><Col id=\"Date\">2009-01-01</Col><Col id=\"Chk_val\">true</Col></Row><Row><Col id=\"Number\">2</Col><Col id=\"Data\">이</Col><Col id=\"Text\">Col_Data20Col_Data20</Col><Col id=\"Date\">2009-01-02</Col><Col id=\"Chk_val\">false</Col></Row><Row><Col id=\"Number\">3</Col><Col id=\"Data\">삼</Col><Col id=\"Text\">Col_Data30Col_Data30</Col><Col id=\"Date\">2009-01-03</Col><Col id=\"Chk_val\">true</Col></Row><Row><Col id=\"Number\">4</Col><Col id=\"Data\">사</Col><Col id=\"Text\">Col_Data40Col_Data40</Col><Col id=\"Date\">2009-01-04</Col><Col id=\"Chk_val\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_autofittype", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">none</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column1\">col</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"Column1\">row</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"Column1\">both</Col><Col id=\"Column0\">4</Col></Row><Row><Col id=\"Column1\">allpivot</Col><Col id=\"Column0\">5</Col></Row><Row><Col id=\"Column1\">allrow</Col><Col id=\"Column0\">6</Col></Row><Row><Col id=\"Column1\">allboth</Col><Col id=\"Column0\">7</Col></Row><Row><Col id=\"Column1\">col,allrow</Col><Col id=\"Column0\">8</Col></Row><Row><Col id=\"Column1\">row,allpivot</Col><Col id=\"Column0\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "7", "438", "37", null, null, this);
            obj.set_text("RP 83435 autofittype 속성 'col' 설정시 right band와 이격 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "251", "298", "85", null, null, this);
            obj.set_taborder("28");
            obj.set_value("//");
            obj.set_text("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "240", "224", "63", "27", null, null, this);
            obj.set_taborder("29");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "59", "296", "109", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"left\"/><Cell col=\"1\" text=\"Number\"/><Cell col=\"2\" text=\"Data\"/><Cell col=\"3\" text=\"Text\"/><Cell col=\"4\" text=\"Date\"/><Cell col=\"5\" text=\"Chk_val\"/><Cell col=\"6\" text=\"right\"/></Band><Band id=\"body\"><Cell text=\"bind:Text\"/><Cell col=\"1\" text=\"bind:Number\"/><Cell col=\"2\" text=\"bind:Data\"/><Cell col=\"3\" text=\"bind:Text\"/><Cell col=\"4\" text=\"bind:Date\"/><Cell col=\"5\" text=\"bind:Chk_val\"/><Cell col=\"6\" text=\"bind:Data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "191", "114", "22", null, null, this);
            obj.set_text("autofittype ::");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_autofittype", "absolute", "226", "182", "35", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get_autofittype", "absolute", "269", "182", "35", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Combo("com_autofittype", "absolute", "122", "182", "95", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_autofittype");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_value("1");
            obj.set_text("none");
            obj.set_index("0");

            obj = new Static("Static03", "absolute", "4", "347", "428", "93", null, null, this);
            obj.set_taborder("30");
            obj.set_text("테스트 방법\r\n\r\n 1. Combo에서 'col'을 선택하고 set Button 클릭\r\n 2. Chk_val Column과 right band 사이에 이격 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 443, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Grid_P_autofittype_46721_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds_Data");
        };
        
        // User Script
        this.registerScript("RP_83435_Grid_P_autofittype_46721_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Grid_Property_menu6.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");	
        }

        
        this.btn_set_autofittype_onclick = function(obj,e)
        {
        	this.Grid00.set_autofittype(this.com_autofittype.text);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "autofittype set : " +this.Grid00.autofittype);		
        }

        this.btn_get_autofittype_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "autofittype get : " +this.Grid00.autofittype);			
        }
        this.Button01_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Component_Grid::Grid_P_autofittype_46721_02.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_set_autofittype.addEventHandler("onclick", this.btn_set_autofittype_onclick, this);
            this.btn_get_autofittype.addEventHandler("onclick", this.btn_get_autofittype_onclick, this);
            this.com_autofittype.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("RP_83435_Grid_P_autofittype_46721_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
