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
                this.set_name("Grid_displaytype_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"DATE\" size=\"256\"/><Column id=\"Column1\" type=\"INT\" size=\"256\"/><Column id=\"Column0\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column5\">1231232</Col><Col id=\"Column4\">dfsafewf2</Col><Col id=\"Column3\">1232312</Col><Col id=\"Column2\"/><Col id=\"Column1\">234234</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column5\">sssesfsdfa</Col><Col id=\"Column4\">43243</Col><Col id=\"Column3\">3232</Col><Col id=\"Column2\"/><Col id=\"Column1\">324234</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column5\">3423432</Col><Col id=\"Column4\">wew</Col><Col id=\"Column3\">32</Col><Col id=\"Column2\"/><Col id=\"Column1\">324324423</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column5\">afdsfdsf</Col><Col id=\"Column4\">adaf</Col><Col id=\"Column3\">32323</Col><Col id=\"Column2\"/><Col id=\"Column1\">432423</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column5\">eeeeweerfwe</Col><Col id=\"Column4\">23423</Col><Col id=\"Column3\">31421321</Col><Col id=\"Column2\"/><Col id=\"Column1\">4234234</Col><Col id=\"Column0\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "1.56%", "154", null, "222", "37.89%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"number\"/><Cell col=\"3\" text=\"date\"/><Cell col=\"4\" text=\"currency\"/><Cell col=\"5\" text=\"checkbox\"/></Band><Band id=\"body\"><Cell text=\"bind:Column5\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:Column3\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:Column2\"/><Cell col=\"4\" displaytype=\"currency\" text=\"bind:Column1\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("1");
            obj.set_text("RP 84608 Grid Cell의 default align 동작 문제");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0.2%", "52", null, "92", "0.78%", null, this);
            obj.set_taborder("2");
            obj.set_text("테스트 방법\r\n\r\n 1. 테마에서 Grid>align, Grid>body>cellalign 값을 지움\r\n 2. 툴의 디자인 화면에서 Grid의 align 확인\r\n 3. 화면 실행 후 툴의 디자인 화면과 align이 동일한지 확인");
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

        };

        this.loadIncludeScript("RP_84608_Grid_displaytype_test.xfdl");

       
    };
}
)();
