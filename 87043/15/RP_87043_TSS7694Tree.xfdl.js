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
                this.set_name("TreeSample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("TreeSample", this);
            obj._setContents("<ColumnInfo><Column id=\"TREE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE\">A</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE\">A-1</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE\">A-2</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"TREE\">B</Col><Col id=\"TEXT\">This string will be  copied.</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE\">B-1</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE\">B-2</Col><Col id=\"status\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "10", "178", "788", "210", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("TreeSample");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/><Column size=\"264\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ツリー\"/><Cell col=\"1\" text=\"テキスト\"/><Cell col=\"2\" text=\"説明\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:TREE\" treelevel=\"bind:TREE_LEVEL\" autosizecol=\"default\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:TEXT\" editdisplay=\"display\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "10", "433", null, null, "222", "128", this);
            obj.set_taborder("1");
            obj.set_binddataset("TreeSample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"TREE\"/><Cell col=\"1\" disptype=\"normal\" text=\"TEXT\"/><Cell col=\"2\" disptype=\"normal\" text=\"TREE_LEVEL\"/><Cell col=\"3\" disptype=\"normal\" text=\"DESCRIPTION\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:TREE\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:TEXT\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:TREE_LEVEL\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "7", "413", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("RP 87043 Grid Tree에서 값입력 후 이동하면 오동작");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "64", "447", "82", null, null, this);
            obj.set_taborder("3");
            obj.set_text("테스트 방법\r\n\r\n 1. 'テキスト' Column에 첫번 쨰 Cell에 임의의 값 입력\r\n 2. 확정되지 않은 상태로 아래 방향키 입력\r\n 3. 첫번 째 Cell에 입력한 값이 이동한 Cell에 복사되는지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_87043_TSS7694Tree.xfdl");

       
    };
}
)();
