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
                this.set_name("GridCombo");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,829,450);
            }
            this.style.set_font("10 Meiryo UI,Hiragino Kaku Gothic ProN");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset07", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"INT\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"cmb\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">ABCD</Col><Col id=\"number\">1000</Col><Col id=\"date\">20150101</Col><Col id=\"check\">0</Col><Col id=\"cmb\">0</Col></Row><Row><Col id=\"text\">EFGH</Col><Col id=\"number\">2000</Col><Col id=\"date\">20160303</Col><Col id=\"check\">1</Col><Col id=\"cmb\">1</Col></Row><Row><Col id=\"text\">IJKL</Col><Col id=\"number\">3000</Col><Col id=\"date\">20171010</Col><Col id=\"check\">1</Col><Col id=\"cmb\">0</Col></Row><Row><Col id=\"text\">MNOP</Col><Col id=\"number\">4000</Col><Col id=\"date\">20150101</Col><Col id=\"check\">0</Col><Col id=\"cmb\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset06", this);
            obj._setContents("<ColumnInfo><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"val\">0</Col><Col id=\"text\">男性</Col></Row><Row><Col id=\"val\">1</Col><Col id=\"text\">女性</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid06", "absolute", "29", "168", "710", "165", null, null, this);
            obj.set_cssclass("grid-normal");
            obj.set_taborder("2");
            obj.set_binddataset("Dataset07");
            obj.set_formatid("default");
            obj.set_scrollbars("none");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"text\"/><Cell col=\"1\" text=\"number\"/><Cell col=\"2\" text=\"date\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"cmb\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:text\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:number\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:date\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:cmb\" combodataset=\"Dataset06\" combocodecol=\"val\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "5.55%", "369", null, "28", "68.28%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_innerdataset("@Dataset06");
            obj.set_codecolumn("val");
            obj.set_datacolumn("text");

            obj = new Static("Static00", "absolute", "91.68%", "12", null, "12", "0.97%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "32", "52", "447", "82", null, null, this);
            obj.set_taborder("3");
            obj.set_text("테스트 방법\r\n\r\n 1. 터치모니터 환경이나 서피스에서 화면 실행\r\n 2. cmb Column의 cell을 클릭\r\n 3. 편집모드의 Grid Combo의 edit 영역 터치\r\n 4. Grid Combo List가 열리는지 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "7", "557", "37", null, null, this);
            obj.set_taborder("4");
            obj.set_text("RP 87143 터치모니터에서 Grid Combo 터치시 Combo List 표시안되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 829, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_font("10 Meiryo UI,Hiragino Kaku Gothic ProN");

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
            this.Static05.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_87143_TSS8228_GridCombo.xfdl");

       
    };
}
)();
