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
                this.set_name("Grid_P_fillareatype_46723_01");
                this.set_titletext("Grid_P_fillareatype_46723_01");
                this._setFormPosition(0,0,484,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" size=\"30\" type=\"STRING\" value=\"ConstData1\"/><Column id=\"Normal\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" size=\"256\" type=\"STRING\"/><Column id=\"Text\" size=\"256\" type=\"STRING\"/><Column id=\"Date\" size=\"256\" type=\"STRING\"/><Column id=\"Curency\" size=\"256\" type=\"STRING\"/><Column id=\"Check\" size=\"256\" type=\"STRING\"/><Column id=\"Comb\" type=\"STRING\" size=\"256\"/><Column id=\"Butto\" type=\"STRING\" size=\"256\"/><Column id=\"Bar\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Number\">10</Col><Col id=\"Text\">abc</Col><Col id=\"Date\">2012-01-25</Col><Col id=\"Curency\">200000</Col><Col id=\"Check\">true</Col><Col id=\"Normal\">1</Col><Col id=\"Comb\">1index</Col><Col id=\"Butto\">A</Col><Col id=\"Bar\">100</Col><Col id=\"image\">URL('titlebar_icon')</Col></Row><Row><Col id=\"Number\">20</Col><Col id=\"Text\">def</Col><Col id=\"Date\">2012-04-30</Col><Col id=\"Curency\">1000000</Col><Col id=\"Check\">false</Col><Col id=\"Normal\">2</Col><Col id=\"Comb\">2index</Col><Col id=\"Butto\">B</Col><Col id=\"Bar\">50</Col><Col id=\"image\">URL('titlebar_icon')</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "15", "467", "37", null, null, this);
            obj.set_text("RP 83196 Display / Edit 상태의 value가 다르게 나타나는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "58", "465", "134", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"185\"/><Column size=\"57\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"Normal\"/><Cell col=\"1\" text=\"Number\"/><Cell col=\"2\" displaytype=\"normal\" text=\"Text\"/><Cell col=\"3\" text=\"Date\"/><Cell col=\"4\" displaytype=\"currency\" text=\"Currency\"/><Cell col=\"5\" text=\"CheckBox\"/><Cell col=\"6\" text=\"Combo\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" displaytype=\"normal\" text=\"Bar\"/><Cell col=\"9\" text=\"Image\"/><Cell col=\"10\" text=\"const\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:Normal\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" text=\"bind:Number\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:Text\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:Date\" calendardisplay=\"display\"/><Cell col=\"4\" displaytype=\"currency\" edittype=\"normal\" text=\"bind:Curency\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Comb\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" text=\"bind:Butto\"/><Cell col=\"8\" displaytype=\"bar\" edittype=\"normal\" text=\"bind:Bar\"/><Cell col=\"9\" displaytype=\"image\" edittype=\"normal\" text=\"bind:image\"/><Cell col=\"10\" text=\"bind:ConstColumn0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "3", "194", "467", "114", null, null, this);
            obj.set_taborder("32");
            obj.set_text("테스트 방법\n\n\n 1. 화면 로드 후 Grid의 Date Column의 value를 확인\n 2. 편집 상태와 아닐때의 값이 동일한지 확인");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 484, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Grid_P_fillareatype_46723_01");

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
        this.registerScript("RP_83196_Grid_P_fillareatype_46723_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Grid_Property_menu4.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        
        this.btn_set_fillareatype_onclick = function(obj,e)
        {
        	this.Grid00.set_fillareatype(this.com_fillareatype.text);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "fillareatype set : " + this.Grid00.fillareatype);		
        }

        this.btn_get_fillareatype_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "fillareatype get : " + this.Grid00.fillareatype);		
        }

        
        this.Grid00_oncellclick = function(obj,e)
        {
        	//alert(e.eventid+obj.name);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("RP_83196_Grid_P_fillareatype_46723_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
