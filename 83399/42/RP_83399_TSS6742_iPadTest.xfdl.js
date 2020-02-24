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
                this.set_name("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,900);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">あいうえお</Col><Col id=\"Column2\">20180101</Col></Row><Row><Col id=\"Column1\">かきくけこ</Col><Col id=\"Column2\">20180101</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"aa\" type=\"STRING\" size=\"256\"/><Column id=\"bb\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aa\">aaa</Col><Col id=\"bb\">1</Col></Row><Row><Col id=\"aa\">abbb</Col><Col id=\"bb\">2</Col></Row><Row><Col id=\"aa\">acccc</Col><Col id=\"bb\">3</Col></Row><Row><Col id=\"aa\">adddd</Col><Col id=\"bb\">4</Col></Row><Row><Col id=\"aa\">aeeee</Col><Col id=\"bb\">5</Col></Row><Row><Col id=\"aa\">afff</Col><Col id=\"bb\">6</Col></Row><Row><Col id=\"aa\">agggg</Col><Col id=\"bb\">7</Col></Row><Row><Col id=\"aa\">agggg</Col><Col id=\"bb\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "237", "677", "200", "40", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@Dataset01");
            obj.set_codecolumn("bb");
            obj.set_datacolumn("aa");
            obj.set_type("filterlike");

            obj = new Edit("Edit01", "absolute", "2.15%", "283", null, "43", "73.14%", null, this);
            obj.set_taborder("1");
            obj.set_value("Edit01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "2.15%", "675", "200", "44", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Edit("Edit02", "absolute", "668", "675", "200", "43", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "448", "676", "200", "41", null, null, this);
            obj.set_taborder("4");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "2.15%", "442", null, "43", "73.14%", null, this);
            obj.set_taborder("2");
            obj.set_value("Edit02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "6", "8", "694", "37", null, null, this);
            obj.set_taborder("7");
            obj.set_text("RP 83399 Android 삼성, 크롬 브라우저에서 키패드가 컴포넌트를 가리는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "6", "53", "530", "129", null, null, this);
            obj.set_taborder("8");
            obj.set_text("테스트 방법\r\n\r\n\r\n 1. Edit, Calendar, Combo 터치\r\n 2. 키패드가 컴포넌트를 가리는 것을 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 900, this,
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

        this.loadIncludeScript("RP_83399_TSS6742_iPadTest.xfdl");

       
    };
}
)();
