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
                this.set_name("Grid_Cell_P_displaytype_49231_01");
                this.set_titletext("Grid_Cell_P_displaytype_49231_01");
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"data1\" size=\"256\" type=\"STRING\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/><Column id=\"bind\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data1\">10</Col><Col id=\"data2\">1000000</Col><Col id=\"bind\">date</Col><Col id=\"data\">A</Col></Row><Row><Col id=\"data1\">70</Col><Col id=\"data2\">titlebar_icon</Col><Col id=\"bind\">image</Col><Col id=\"data\">B</Col></Row><Row><Col id=\"data1\">50</Col><Col id=\"data2\">30</Col><Col id=\"bind\">bar</Col><Col id=\"data\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "31", "301", "37", null, null, this);
            obj.set_text("[Grid_Cell_P_displaytype_49231_01] ");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "8", "1", "72", "36", null, null, this);
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_button_menu", "absolute", "85", "1", "87", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("◀Grid_Cell");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "312", "298", "131", null, null, this);
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "241", "303", "63", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Combo("com_displaytype", "absolute", "130", "209", "174", "29", null, null, this);
            this.addChild(obj.name, obj);
            var com_displaytype_innerdataset = new Dataset("com_displaytype_innerdataset", this.com_displaytype);
            com_displaytype_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">text</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">decoratetext</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">number</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">exponent</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">date</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">currency</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">checkbox</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">combo</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">image</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">button</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">bar</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">tree</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">none</Col></Row></Rows>");
            obj.set_innerdataset(com_displaytype_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("normal");
            obj.set_index("0");

            obj = new Button("btn_setCellProperty", "absolute", "128", "239", "173", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("setCellProperty");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getCellProperty", "absolute", "128", "271", "173", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("getCellProperty");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "241", "68", "59", null, null, this);
            obj.set_text("nCellIdx");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nCellIdx", "absolute", "85", "241", "40", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "209", "113", "29", null, null, this);
            obj.set_text("displaytype");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "62", "296", "138", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"data1\" combodataset=\"ds_Data\" combocodecol=\"data1\" combodatacol=\"data\"/><Cell col=\"1\" text=\"data2\"/><Cell col=\"2\" text=\"bind\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"textarea\" text=\"bind:data1\" treestate=\"-1\" combodataset=\"ds_Data\" combocodecol=\"data1\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"1\" edittype=\"textarea\" text=\"bind:data2\"/><Cell col=\"2\" edittype=\"textarea\" text=\"bind:bind\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_idx1", "absolute", "180", "2", "29", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_idx2", "absolute", "212", "2", "29", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_idx00", "absolute", "243", "2", "29", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("3");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_idx04", "absolute", "275", "2", "29", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "340", "67", "296", "138", null, null, this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"data1\" combodataset=\"ds_Data\" combocodecol=\"data1\" combodatacol=\"data\"/><Cell col=\"1\" text=\"data2\"/><Cell col=\"2\" text=\"bind\"/></Band><Band id=\"body\"><Cell displaytype=\"bar\" edittype=\"textarea\" text=\"bind:data1\" treestate=\"-1\" combodataset=\"ds_Data\" combocodecol=\"data1\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"1\" edittype=\"textarea\" text=\"bind:data2\"/><Cell col=\"2\" edittype=\"textarea\" text=\"bind:bind\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00", "absolute", "340", "228", "233", "51", null, null, this);
            obj.set_taborder("35");
            obj.set_text("ProgressBar00");
            obj.set_pos("50");
            obj.set_max("100");
            obj.set_min("10");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "353", "315", "120", "50", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "650", "40", "800", "120", null, null, this);
            obj.set_taborder("37");
            obj.set_text("테스트 환경: win10 runtime/Galaxy S8 Plus(7.0)\r\n\r\n1. ProgressBar의 pos 값 설정시 적용되지 않습니다.\r\n: 그리드의 displaytype이 bar일때도 증상 동일합니다.\r\n-> HTML5/ 안드로이드 웹브라우져/ IOS는 정상동작\r\n\r\n[테스트 방법]\r\na. 첨부파일을 실행합니다.\r\n-> ProgressBar의 pos가 50으로 셋팅되어있지만 표시되지 않음.\r\n-> 왼쪽 그리드의 첫번째 column의 displaytype이 bar 값이 표시되지 않음.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "650", "10", "800", "30", null, null, this);
            obj.set_taborder("38");
            obj.set_text("[RP_81959] [201809정기] ProgressBar의 pos 값 설정시 적용되지 않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Grid_Cell_P_displaytype_49231_01");

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
        this.registerScript("RP_81959_Grid_Cell_P_displaytype_49231_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Grid_Cell_menu2.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        
        this.btn_setCellProperty_onclick = function(obj,e)
        {
        	var displaytype = this.com_displaytype.text;
        	var nCellIdx = this.edt_nCellIdx.value;
        	this.Grid00.setCellProperty("body", nCellIdx, "displaytype", displaytype);
        	this.txt_result.set_value(this.txt_result.value + "body/"+nCellIdx+"/displaytype set : " + this.Grid00.getCellProperty("body", nCellIdx, "displaytype") + "\n");						
        }

        this.btn_getCellProperty_onclick = function(obj,e)
        {
        	var nCellIdx = this.edt_nCellIdx.value;
        	this.txt_result.set_value(this.txt_result.value + "body/"+nCellIdx+"/displaytype get : " + this.Grid00.getCellProperty("body", nCellIdx, "displaytype") + "\n");							
        }

        this.btn_idx2_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Component_Grid_Cell::Grid_Cell_P_displaytype_49231_02.xfdl");		
        }

        this.btn_idx00_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Component_Grid_Cell::Grid_Cell_P_displaytype_49231_03.xfdl");		
        }

        this.btn_idx04_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Component_Grid_Cell::Grid_Cell_P_displaytype_49231_04.xfdl");		
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.ProgressBar00.set_pos('20');
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);
            this.btn_button_menu.addEventHandler("onclick", this.btn_button_menu_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_setCellProperty.addEventHandler("onclick", this.btn_setCellProperty_onclick, this);
            this.btn_getCellProperty.addEventHandler("onclick", this.btn_getCellProperty_onclick, this);
            this.btn_idx1.addEventHandler("onclick", this.btn_idx1_onclick, this);
            this.btn_idx2.addEventHandler("onclick", this.btn_idx2_onclick, this);
            this.btn_idx00.addEventHandler("onclick", this.btn_idx00_onclick, this);
            this.btn_idx04.addEventHandler("onclick", this.btn_idx04_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_81959_Grid_Cell_P_displaytype_49231_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
