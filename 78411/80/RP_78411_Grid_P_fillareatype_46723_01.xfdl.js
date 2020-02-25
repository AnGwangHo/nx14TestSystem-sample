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
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" size=\"30\" type=\"STRING\" value=\"ConstData1\"/><Column id=\"Normal\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" size=\"256\" type=\"STRING\"/><Column id=\"Text\" size=\"256\" type=\"STRING\"/><Column id=\"Date\" size=\"256\" type=\"STRING\"/><Column id=\"Curency\" size=\"256\" type=\"STRING\"/><Column id=\"Check\" size=\"256\" type=\"STRING\"/><Column id=\"Comb\" type=\"STRING\" size=\"256\"/><Column id=\"Butto\" type=\"STRING\" size=\"256\"/><Column id=\"Bar\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Number\">10</Col><Col id=\"Text\">abc</Col><Col id=\"Date\">2012-01-25</Col><Col id=\"Curency\">200000</Col><Col id=\"Check\">true</Col><Col id=\"Normal\">1</Col><Col id=\"Comb\">1index</Col><Col id=\"Butto\">A</Col><Col id=\"Bar\">100</Col><Col id=\"image\">URL('titlebar_icon')</Col></Row><Row><Col id=\"Number\">20</Col><Col id=\"Text\">def</Col><Col id=\"Date\">2012-04-30</Col><Col id=\"Curency\">1000000</Col><Col id=\"Check\">false</Col><Col id=\"Normal\">2</Col><Col id=\"Comb\">2index</Col><Col id=\"Butto\">B</Col><Col id=\"Bar\">50</Col><Col id=\"image\">URL('titlebar_icon')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fillareatype", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"Data\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"Data\">none</Col><Col id=\"id\">1</Col></Row><Row><Col id=\"Data\">linerow</Col><Col id=\"id\">2</Col></Row><Row><Col id=\"Data\">datarow</Col><Col id=\"id\">3</Col></Row><Row><Col id=\"Data\">controlrow</Col><Col id=\"id\">4</Col></Row><Row><Col id=\"Data\">allrow</Col><Col id=\"id\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "31", "301", "37", null, null, this);
            obj.set_text("[Grid_P_fillareatype_46723_01] ");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "285", "298", "158", null, null, this);
            obj.set_taborder("28");
            obj.set_value("//");
            obj.set_text("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "240", "246", "63", "31", null, null, this);
            obj.set_taborder("29");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "8", "1", "81", "36", null, null, this);
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_button_menu", "absolute", "93", "1", "115", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("◀Grid_Property");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "58", "297", "134", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"57\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"Normal\"/><Cell col=\"1\" text=\"Number\"/><Cell col=\"2\" displaytype=\"normal\" text=\"Text\"/><Cell col=\"3\" text=\"Date\"/><Cell col=\"4\" displaytype=\"currency\" text=\"Currency\"/><Cell col=\"5\" text=\"CheckBox\"/><Cell col=\"6\" text=\"Combo\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" displaytype=\"normal\" text=\"Bar\"/><Cell col=\"9\" text=\"Image\"/><Cell col=\"10\" text=\"const\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:Normal\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" text=\"bind:Number\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:Text\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:Date\" calendardisplay=\"display\"/><Cell col=\"4\" displaytype=\"currency\" edittype=\"normal\" text=\"bind:Curency\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Comb\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" text=\"bind:Butto\"/><Cell col=\"8\" displaytype=\"bar\" edittype=\"normal\" text=\"bind:Bar\"/><Cell col=\"9\" displaytype=\"image\" edittype=\"normal\" style=\"background: ;\" text=\"bind:image\"/><Cell col=\"10\" text=\"bind:ConstColumn0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("com_fillareatype", "absolute", "112", "198", "190", "40", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_fillareatype");
            obj.set_codecolumn("id");
            obj.set_datacolumn("Data");
            obj.set_value("1");
            obj.set_text("none");
            obj.set_index("0");

            obj = new Static("Static00", "absolute", "9", "205", "97", "22", null, null, this);
            obj.set_text("fillareatype ::");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_fillareatype", "absolute", "88", "246", "69", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get_fillareatype", "absolute", "164", "246", "69", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "320", "10", "900", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_text("[RP_78411] [201802정기]Grid 컴포넌트의 스크롤바를 우측으로 이동 후 fillareatype 속성에 값을 지정하면 Grid 일부 내용이 사라집니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "320", "40", "900", "180", null, null, this);
            obj.set_taborder("32");
            obj.set_text("[현상]\r\n- Grid 컴포넌트의 스크롤바를 우측으로 이동 후 fillareatype 속성에 값을 지정하면 Grid 일부 내용이 사라집니다.\r\n\r\n* 2월정기 브랜치 변경집합 44272에서 발생 (2018.02.02 - RP77885)\r\n\r\n[확인방법]\r\n1. 첨부한 파일을 실행합니다.\r\n2. Grid 컴포넌트의 가로 스크롤바를 우측으로 이동합니다.(가급적 끝으로)\r\n3. fillareatype 부분의 Combo에 'none'이외의 값을 지정합니다.\r\n4. 'set'버튼을 클릭합니다.\r\n   --> 첨부한 이미지 처럼 Grid 일부 내용이 사라집니다.\r\n\r\n[환경]\r\n- Win7 Runtime, IE11, Chrome");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
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
            this._addPreloadList("data", "", "ds_fillareatype");
        };
        
        // User Script
        this.registerScript("RP_78411_Grid_P_fillareatype_46723_01.xfdl", function() {
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
        		
        		
        		//this.Grid01.set_fillareatype(this.com_fillareatype.text);
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
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);
            this.btn_button_menu.addEventHandler("onclick", this.btn_button_menu_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.btn_set_fillareatype.addEventHandler("onclick", this.btn_set_fillareatype_onclick, this);
            this.btn_get_fillareatype.addEventHandler("onclick", this.btn_get_fillareatype_onclick, this);

        };

        this.loadIncludeScript("RP_78411_Grid_P_fillareatype_46723_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
