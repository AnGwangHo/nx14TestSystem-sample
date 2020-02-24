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
                this.set_name("Grid_P_autoenter_49041_01");
                this.set_titletext("Grid_P_autoenter_49041_01");
                this._setFormPosition(0,0,710,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Cell_Edit1\" type=\"STRING\" size=\"256\"/><Column id=\"Cell_Edit2\" type=\"STRING\" size=\"256\"/><Column id=\"Cell_Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Cell_CheckBox\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Cell_Edit1\">1</Col><Col id=\"Cell_Combo\">a</Col><Col id=\"Cell_CheckBox\">0</Col><Col id=\"Cell_Edit2\">1</Col></Row><Row/><Row><Col id=\"Cell_Edit1\">2</Col><Col id=\"Cell_Combo\">b</Col><Col id=\"Cell_CheckBox\">1</Col><Col id=\"Cell_Edit2\">2</Col></Row><Row><Col id=\"Cell_Edit1\">3</Col><Col id=\"Cell_Combo\">c</Col><Col id=\"Cell_CheckBox\">0</Col><Col id=\"Cell_Edit2\">3</Col></Row><Row><Col id=\"Cell_Edit1\">4</Col><Col id=\"Cell_Combo\">d</Col><Col id=\"Cell_CheckBox\">1</Col><Col id=\"Cell_Edit2\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">a</Col><Col id=\"data\">a</Col></Row><Row><Col id=\"id\">b</Col><Col id=\"data\">b</Col></Row><Row><Col id=\"id\">c</Col><Col id=\"data\">c</Col></Row><Row><Col id=\"id\">d</Col><Col id=\"data\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_autoenter", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">key</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column1\">select</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"Column1\">none</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "6", "8", "694", "37", null, null, this);
            obj.set_text("RP 83379 autoenterkey 속성이 \"key\" 일 때, 오류 현상 (Runtime)");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "312", "298", "131", null, null, this);
            obj.set_taborder("28");
            obj.set_value("//");
            obj.set_text("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "241", "275", "63", "35", null, null, this);
            obj.set_taborder("29");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "59", "296", "157", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj.set_selecttype("cell");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"text\" text=\"Cell_Edit1\"/><Cell col=\"1\" text=\"Cell_Edit2\"/><Cell col=\"2\" text=\"Cell_Combo\"/><Cell col=\"3\" text=\"Cell_CheckBox\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:Cell_Edit1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:Cell_Edit2\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"combo\" text=\"bind:Cell_Combo\" combodataset=\"ds_combo\" combocodecol=\"id\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Cell_CheckBox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("com_autoenter", "absolute", "96", "222", "107", "40", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_autoenter");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_value("3");
            obj.set_text("none");
            obj.set_index("2");

            obj = new Static("Static00", "absolute", "9", "229", "83", "22", null, null, this);
            obj.set_text("autoenter ::");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_autoenter", "absolute", "210", "222", "43", "40", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get_autoenter", "absolute", "258", "222", "43", "40", null, null, this);
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "319", "59", "381", "251", null, null, this);
            obj.set_taborder("30");
            obj.set_text("테스트 방법\r\n\r\n\r\n 1. 런타임에서 샘플을 실행한다.\r\n 2. autoenter 콤보에서 'key'를 선택한다.\r\n 3. set 버튼을 클릭한다.\r\n 4. Cell_Edit2 셀중 하나를 클릭하고 'd'값을 입력한다.\r\n 5. enter키로 확정한다.\r\n (tab키나 방향키로 문자를 확정하여도 증상은 동일하게 발생함.) \r\n -> 셀값이 dd로 출력됨.");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 710, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Grid_P_autoenter_49041_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_83379_Grid_P_autoenter_49041_01.xfdl", function() {
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

        this.btn_set_autoenter_onclick = function(obj,e)
        {
        	this.Grid00.set_autoenter(this.com_autoenter.text);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "autoenter set : " +this.Grid00.autoenter);		
        }

        this.btn_get_autoenter_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "autoenter get : " +this.Grid00.autoenter);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.com_autoenter.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.btn_set_autoenter.addEventHandler("onclick", this.btn_set_autoenter_onclick, this);
            this.btn_get_autoenter.addEventHandler("onclick", this.btn_get_autoenter_onclick, this);

        };

        this.loadIncludeScript("RP_83379_Grid_P_autoenter_49041_01.xfdl");

       
    };
}
)();
