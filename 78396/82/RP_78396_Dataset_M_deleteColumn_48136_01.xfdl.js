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
                this.set_name("Dataset_M_deleteColumn_48136_01");
                this.set_titletext("Dataset_M_deleteColumn_48136_01");
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
            obj = new Static("Static01", "absolute", "3", "31", "301", "37", null, null, this);
            obj.set_text("[Dataset_M_deleteColumn_48136_01]");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Combo_menu", "absolute", "93", "1", "81", "36", null, null, this);
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "292", "294", "140", null, null, this);
            obj.set_taborder("28");
            obj.set_value("//");
            obj.set_text("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "232", "248", "63", "35", null, null, this);
            obj.set_taborder("29");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "8", "1", "81", "36", null, null, this);
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delColumn", "absolute", "114", "248", "107", "37", null, null, this);
            obj.set_taborder("33");
            obj.set_text("delColumn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "61", "295", "99", null, null, this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_data1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "171", "97", "21", null, null, this);
            obj.set_text("updatecontrol");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_updatecontrol", "absolute", "115", "168", "181", "26", null, null, this);
            this.addChild(obj.name, obj);
            var rd_updatecontrol_innerdataset = new Dataset("rd_updatecontrol_innerdataset", this.rd_updatecontrol);
            rd_updatecontrol_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rd_updatecontrol_innerdataset);
            obj.set_taborder("37");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("true");
            obj.set_index("0");

            obj = new Combo("rd_idIdx", "absolute", "10", "206", "108", "37", null, null, this);
            this.addChild(obj.name, obj);
            var rd_idIdx_innerdataset = new Dataset("rd_idIdx_innerdataset", this.rd_idIdx);
            rd_idIdx_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ID</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Index</Col></Row></Rows>");
            obj.set_innerdataset(rd_idIdx_innerdataset);
            obj.set_taborder("38");
            obj.set_text("ID");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_index("0");

            obj = new Edit("txt_value", "absolute", "122", "206", "173", "37", null, null, this);
            obj.set_taborder("39");
            obj.set_value("colB");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delAll", "absolute", "8", "248", "97", "37", null, null, this);
            obj.set_taborder("40");
            obj.set_text("column 모두삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "320", "40", "800", "180", null, null, this);
            obj.set_taborder("41");
            obj.set_text("[테스트 환경]\r\nruntime, ie11, Galaxy S6 Edge(7.0)\r\n\r\n1. deleteColumn 메소드를 사용히여 const column을 삭제 시 에러가 발생합니다.\r\n: 14.0.1.2000, 14.0.1.2100, 14.0.1.2200 버젼에서 정상 동작합니다.\r\n\r\n[테스트 방법]\r\na. 샘플을 실행하여 updatecontrol = false를 설정하고 ID에 ConstA를 입력합니다.\r\nb. delColumn 버튼을 클릭합니다.\r\n-> TypeError: Cannot read property '_index' of undefined 에러가 발생\r\n\r\n참고)\r\nMAIN 브랜치 / 변경 집합 43946 에서 발생");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "320", "10", "800", "30", null, null, this);
            obj.set_taborder("42");
            obj.set_text("[RP_78396] [201802정기] deleteColumn 메소드를 사용히여 const column을 삭제 시 에러가 발생합니다.");
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
            		p.set_titletext("Dataset_M_deleteColumn_48136_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78396_Dataset_M_deleteColumn_48136_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Dataset_menu3.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        //Dataset 에서 지정한 Column 또는 Const Column을 삭제
        this.btn_delColumn_onclick = function(obj,e)
        {
        	var bSucc;
        	
        	//updatecontrol 속성
        	this.ds_data1.set_updatecontrol(this.rd_updatecontrol.value);
        	
        	if(this.rd_idIdx.value == 0){
        		//id
        		bSucc = this.ds_data1.deleteColumn(this.txt_value.value);
        	}else{
        		//index
        		bSucc = this.ds_data1.deleteColumn(parseInt(this.txt_value.value));
        	}
        	
        	
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "성공여부 : " +bSucc + "\nrowposition: " + this.ds_data1.rowposition);
        	this.Grid00.createFormat();
        }

        
        // EVENT 영역
        this.ds_data1_onrowsetchanged = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "=== onrowsetchanged 발생 ===");
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "상태값 : " + e.reason);
        	this.txt_result.set_value(this.txt_result.value + "\n");
        }

        
        this.btn_delAll_onclick = function(obj,e)
        {
        	var bSucc;
        	bSucc = this.ds_data1.clear();
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "성공여부 : " +bSucc + "\nrowposition: " + this.ds_data1.rowposition);
        	this.Grid00.createFormat();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_data1.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
            this.btn_Combo_menu.addEventHandler("onclick", this.btn_button_menu_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);
            this.btn_delColumn.addEventHandler("onclick", this.btn_delColumn_onclick, this);
            this.btn_delAll.addEventHandler("onclick", this.btn_delAll_onclick, this);

        };

        this.loadIncludeScript("RP_78396_Dataset_M_deleteColumn_48136_01.xfdl");

       
    };
}
)();
