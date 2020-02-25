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
                this.set_name("Dataset_M_updateConstColID_48095_01");
                this.set_titletext("Dataset_M_updateConstColID_48095_01");
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstA\" type=\"STRING\" size=\"30\" value=\"A\"/><ConstColumn id=\"ConstB\" type=\"STRING\" size=\"30\" value=\"B\"/><ConstColumn id=\"ConstC\" type=\"STRING\" size=\"30\" value=\"C\"/><Column id=\"colA\" type=\"STRING\" size=\"256\"/><Column id=\"colB\" type=\"STRING\" size=\"256\"/><Column id=\"colC\" type=\"INT\" size=\"256\"/><Column id=\"colD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colB\">유동규</Col><Col id=\"colA\">1</Col><Col id=\"colC\">100</Col><Col id=\"colD\">투우</Col></Row><Row><Col id=\"colB\">주인희</Col><Col id=\"colA\">1</Col><Col id=\"colC\">200</Col><Col id=\"colD\">비이</Col></Row><Row><Col id=\"colB\">고준영</Col><Col id=\"colA\">2</Col><Col id=\"colC\">200</Col><Col id=\"colD\">소오</Col></Row><Row><Col id=\"colB\">이정빈</Col><Col id=\"colA\">3</Col><Col id=\"colC\">300</Col><Col id=\"colD\">프트</Col></Row><Row><Col id=\"colA\">4</Col><Col id=\"colB\">김선주</Col><Col id=\"colC\">400</Col><Col id=\"colD\">비이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "31", "297", "37", null, null, this);
            obj.set_text("[Dataset_M_updateConstColID_48095_01]");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Combo_menu", "absolute", "93", "1", "81", "36", null, null, this);
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "8", "1", "81", "36", null, null, this);
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "351", "298", "91", null, null, this);
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "241", "304", "63", "27", null, null, this);
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "61", "299", "99", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "171", "58", "21", null, null, this);
            obj.set_text("nCol");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "203", "90", "21", null, null, this);
            obj.set_text("strNewColID");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nCol", "absolute", "101", "168", "83", "26", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1px solid blue");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_strNewColID", "absolute", "101", "200", "83", "26", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1px solid blue");
            obj.style.set_align("left middle");
            obj.set_value("AAA");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "243", "86", "21", null, null, this);
            obj.set_text("strOldColID");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "275", "94", "21", null, null, this);
            obj.set_text("strNewColID");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_strOldColID", "absolute", "101", "240", "83", "26", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1px solid red");
            obj.set_value("ConstC");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_strNewColID1", "absolute", "101", "272", "83", "26", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1px solid red");
            obj.style.set_align("left middle");
            obj.set_value("BBB");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateConstColID1", "absolute", "196", "168", "108", "56", null, null, this);
            obj.set_taborder("1");
            obj.set_text("updateConstColID()");
            obj.style.set_border("1px solid blue");
            obj.style.set_font("Verdana,7,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateConstColID2", "absolute", "196", "240", "108", "56", null, null, this);
            obj.set_taborder("1");
            obj.set_text("updateConstColID()");
            obj.style.set_border("1px solid red");
            obj.style.set_font("Verdana,7,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "315", "58", "21", null, null, this);
            obj.set_text("nColIdx");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nColIdx", "absolute", "69", "312", "42", "26", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("1px solid green");
            obj.style.set_align("left middle");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getConstColID", "absolute", "116", "307", "100", "37", null, null, this);
            obj.set_taborder("1");
            obj.set_text("getConstColID()");
            obj.style.set_border("1px solid green");
            obj.style.set_font("Verdana,7,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "320", "40", "1000", "100", null, null, this);
            obj.set_taborder("31");
            obj.set_text("1. 버그로수정\r\n\r\n2. RP 77885 변경 집합 44272 처리시 발생함.\r\n\r\n3. [테스트 방법]\r\na. 샘플을 실행하여 그리드의 가로스크롤을 맨 우측으로 이동시킵니다.\r\nb. 파란색 테두리의 'updateConstColID()'버튼을 클릭합니다.\r\n-> 가로 스크롤이 앞으로 조금 이동하는 현상확인.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "320", "10", "1000", "30", null, null, this);
            obj.set_taborder("32");
            obj.set_text("[RP_79727] [201804_Merge] 그리드의 가로 스크롤이 있을때 dataset의 updateConstColID 메소드 실행 시 가로 스크롤이 움직이는 현상이 있습니다.");
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
            		p.set_titletext("Dataset_M_updateConstColID_48095_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79727_Dataset_M_updateConstColID_48095_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Dataset_menu8.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.btn_updateConstColID1_onclick = function(obj,e)
        {
        	var nColIndex = this.ds_data1.updateConstColID(parseInt(this.edt_nCol.value),this.edt_strNewColID.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "ds_data1.updateConstColID() return : " +nColIndex);
        	this.Grid00.createFormat();
        }

        this.btn_updateConstColID2_onclick = function(obj,e)
        {
        	var nColIndex = this.ds_data1.updateConstColID(this.edt_strOldColID.value, this.edt_strNewColID1.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "ds_data1.updateConstColID() return : " +nColIndex);	
        	this.Grid00.createFormat();
        }

        this.btn_getConstColID_onclick = function(obj,e)
        {
        	var nColIndex = this.ds_data1.getConstColID(this.edt_nColIdx.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "ds_data1.getConstColID("+this.edt_nColIdx.value+") return : " +nColIndex);		
        }

        this.ds_data1_onrowsetchanged = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "=====onrowsetchanged Event Start=====");
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.count : " + e.count);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.eventid : " + e.eventid);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.fromobject : " + e.fromobject);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.fromreferenceobject : " + e.fromreferenceobject);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.reason : " + e.reason);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "e.row : " + e.row);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "=====onrowsetchanged Event End=====");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_data1.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
            this.btn_Combo_menu.addEventHandler("onclick", this.btn_button_menu_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_updateConstColID1.addEventHandler("onclick", this.btn_updateConstColID1_onclick, this);
            this.btn_updateConstColID2.addEventHandler("onclick", this.btn_updateConstColID2_onclick, this);
            this.btn_getConstColID.addEventHandler("onclick", this.btn_getConstColID_onclick, this);

        };

        this.loadIncludeScript("RP_79727_Dataset_M_updateConstColID_48095_01.xfdl");

       
    };
}
)();
