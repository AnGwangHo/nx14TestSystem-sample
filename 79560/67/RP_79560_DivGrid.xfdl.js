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
                this._setFormPosition(0,0,1024,1000);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">17</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">18</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">19</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">20</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">21</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">22</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">23</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">24</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">25</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">26</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">27</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">28</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">29</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">30</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">31</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">32</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">33</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">34</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">35</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">36</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">37</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">38</Col><Col id=\"Column1\">あいうえお</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "5.27%", "159", null, "551", "4.59%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("antiquewhite");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "5.09%", "196", null, "134", "26.11%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"229\"/><Column size=\"344\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "66.96%", "99", null, "78", "16.36%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "5.74%", "26", null, "147", "38.24%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.style.set_background("aquamarine");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "11.51%", "39", null, "76", "55.95%", null, this.Div00.Div00);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "66.73%", "130", null, "50", "10.06%", null, this.Div00.Div00);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.Div00.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "5.74%", "362", null, "177", "4.23%", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.style.set_background("aqua");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "11.07%", "16", null, "110", "64.5%", null, this.Div00.Div01);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "48.38%", "27", null, "133", "8.78%", null, this.Div00.Div01);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div00.Div01.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.27%", "870", null, "42", "3.52%", null, this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.style.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "11.82%", "1834", null, "119", "65.04%", null, this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "850", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("[RP_79560] [201804정기][RP79302연관][디그라데이션][iOS-Safari] Div내부의 콤포넌트위에서 터치로 화면스크롤이 안됩니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "850", "100", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Div 내부의 콤포넌트 중 스크롤이 있는 콤포넌트에서 화면 전체스크롤이 동작하지 않습니다.\r\n\r\n1. 테스트방법\r\n 1) 첨부파일 실행 (DivGrid.xfdl)\r\n 2) Div 안의 콤포넌트 위에서 스크롤 시도\r\n 3) 스크롤이 없는 콤포넌트 (버튼, Div(스크롤이없는)) 에서는 정상\r\n 4) 스크롤이 있는 콤포넌트 (Grid, Div(스크롤이 있는)) 에서는 스크롤이 되지 않음");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 147, this.Div00.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");
            		p.style.set_background("aquamarine");

            	}
            );
            this.Div00.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 177, this.Div00.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div01");
            		p.style.set_background("aqua");

            	}
            );
            this.Div00.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 551, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 1000, this,
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

        this.loadIncludeScript("RP_79560_DivGrid.xfdl");

       
    };
}
)();
