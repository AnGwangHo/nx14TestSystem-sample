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
                this.set_name("Grid_P_rowcount_49082_01");
                this.set_titletext("Grid_P_rowcount_49082_01");
                this._setFormPosition(0,0,401,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"id\" size=\"256\" type=\"STRING\"/><Column id=\"name\" size=\"256\" type=\"STRING\"/><Column id=\"level\" size=\"256\" type=\"STRING\"/><Column id=\"state\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">김미령</Col><Col id=\"level\">0</Col><Col id=\"state\">1</Col></Row><Row><Col id=\"id\">1-1</Col><Col id=\"name\">김갑돌</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col></Row><Row><Col id=\"id\">1-2</Col><Col id=\"name\">김시습</Col><Col id=\"level\">1</Col><Col id=\"state\">0</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">이명순</Col><Col id=\"level\">0</Col><Col id=\"state\">0</Col></Row><Row><Col id=\"id\">2-1</Col><Col id=\"name\">이재석</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col></Row><Row><Col id=\"id\">2-2</Col><Col id=\"name\">이경숙</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col></Row><Row><Col id=\"id\">2-2-1</Col><Col id=\"name\">김개똥</Col><Col id=\"level\">2</Col><Col id=\"state\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "7", "301", "37", null, null, this);
            obj.set_text("RP 83438 treestate 적용 안되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "59", "296", "149", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"level\"/><Cell col=\"3\" text=\"state\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:id\" treelevel=\"bind:level\" treestate=\"bind:state\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:level\"/><Cell col=\"3\" text=\"bind:state\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "224", "363", "93", null, null, this);
            obj.set_taborder("2");
            obj.set_text("테스트 방법\r\n\r\n 1. 김시습 row의 tree icon이 폴더 모양인지 확인\r\n 2. 이명순 row의 tree를 확장 후 이경숙 row의 tree를 확장\r\n 3. 김개똥 row의 tree icon이 폴더인지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 401, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Grid_P_rowcount_49082_01");

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
        this.registerScript("RP_83438_Grid_P_rowcount_49082_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Grid_Property_menu3.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.btn_set_rowcount1_onclick = function(obj,e)
        {
        	this.Grid00.set_rowcount(this.edt_rowcount1.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "this.Grid00.rowcount set : " +this.Grid00.rowcount);	
        }

        this.btn_get_rowcount1_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "this.Grid00.rowcount get : " +this.Grid00.rowcount);		
        }

        this.btn_set_rowcount2_onclick = function(obj,e)
        {
        	this.Grid01.rowcount(this.edt_rowcount2.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "this.Grid01.rowcount set : " +this.Grid01.rowcount);		
        }

        this.btn_get_rowcount2_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "this.Grid01.rowcount get : " +this.Grid01.rowcount);		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_83438_Grid_P_rowcount_49082_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
