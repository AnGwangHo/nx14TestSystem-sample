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
                this.set_name("RP_88062_FF_Combo");
                this.set_titletext("RP_88062_FF_Combo");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODECOL\" type=\"STRING\" size=\"256\"/><Column id=\"DATACOL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOL\">1</Col><Col id=\"DATACOL\">가나다1</Col></Row><Row><Col id=\"CODECOL\">2</Col><Col id=\"DATACOL\">가나다2</Col></Row><Row><Col id=\"CODECOL\">3</Col><Col id=\"DATACOL\">가나다3</Col></Row><Row><Col id=\"CODECOL\">4</Col><Col id=\"DATACOL\">가나다4</Col></Row><Row><Col id=\"CODECOL\">5</Col><Col id=\"DATACOL\">가나다5</Col></Row><Row><Col id=\"CODECOL\">6</Col><Col id=\"DATACOL\">가나다6</Col></Row><Row><Col id=\"CODECOL\">7</Col><Col id=\"DATACOL\">가나다7</Col></Row><Row><Col id=\"CODECOL\">8</Col><Col id=\"DATACOL\">가나다8</Col></Row><Row><Col id=\"CODECOL\">9</Col><Col id=\"DATACOL\">가나다9</Col></Row><Row><Col id=\"CODECOL\">10</Col><Col id=\"DATACOL\">ABCDE1</Col></Row><Row><Col id=\"CODECOL\">11</Col><Col id=\"DATACOL\">ABCDE2</Col></Row><Row><Col id=\"CODECOL\">12</Col><Col id=\"DATACOL\">ABCDE3</Col></Row><Row><Col id=\"CODECOL\">13</Col><Col id=\"DATACOL\">ABCDE4</Col></Row><Row><Col id=\"CODECOL\">14</Col><Col id=\"DATACOL\">ABCDE5</Col></Row><Row><Col id=\"CODECOL\">15</Col><Col id=\"DATACOL\">ABCDE6</Col></Row><Row><Col id=\"CODECOL\">16</Col><Col id=\"DATACOL\">ABCDE7</Col></Row><Row><Col id=\"CODECOL\">17</Col><Col id=\"DATACOL\">ABCDE8</Col></Row><Row><Col id=\"CODECOL\">18</Col><Col id=\"DATACOL\">ABCDE9</Col></Row><Row><Col id=\"CODECOL\">19</Col><Col id=\"DATACOL\">山田1</Col></Row><Row><Col id=\"CODECOL\">20</Col><Col id=\"DATACOL\">山田2</Col></Row><Row><Col id=\"CODECOL\">21</Col><Col id=\"DATACOL\">山田3</Col></Row><Row><Col id=\"CODECOL\">22</Col><Col id=\"DATACOL\">山田4</Col></Row><Row><Col id=\"CODECOL\">23</Col><Col id=\"DATACOL\">山田5</Col></Row><Row><Col id=\"CODECOL\">24</Col><Col id=\"DATACOL\">山田6</Col></Row><Row><Col id=\"CODECOL\">25</Col><Col id=\"DATACOL\">山田7</Col></Row><Row><Col id=\"CODECOL\">26</Col><Col id=\"DATACOL\">山田8</Col></Row><Row><Col id=\"CODECOL\">27</Col><Col id=\"DATACOL\">山田9</Col></Row><Row><Col id=\"CODECOL\">28</Col><Col id=\"DATACOL\">12345</Col></Row><Row><Col id=\"CODECOL\">29</Col><Col id=\"DATACOL\">67890</Col></Row><Row><Col id=\"CODECOL\">30</Col><Col id=\"DATACOL\">13579</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "20", "20", "760", "100", null, null, this);
            obj.set_taborder("0");
            obj.set_text("[RP_88062] [Firefox] comboedit에 조합 문자 입력 시 조합 문자가 조합 완료되는 시점에 combolist가 닫힘\r\n\r\n  Ex 1. 'ㄱ'을 입력한 상태에서 'ㅏ'를 입력 시\r\n  Ex 2. 'yamada'를 입력하고 '山田' 변환 시 (일본어 IME - Hiragana 입력)");
            obj.style.set_linespace("5");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "120", "150", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("type = dropdown");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "190", "150", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("type = search");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "260", "150", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("type = filter");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "330", "150", "50", null, null, this);
            obj.set_taborder("4");
            obj.set_text("type = filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "150", "120", "180", "50", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("CODECOL");
            obj.set_datacolumn("DATACOL");

            obj = new Combo("Combo01", "absolute", "150", "190", "180", "50", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_text("Combo01");
            obj.set_type("search");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("CODECOL");
            obj.set_datacolumn("DATACOL");

            obj = new Combo("Combo02", "absolute", "150", "260", "180", "50", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_text("Combo02");
            obj.set_type("filter");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("CODECOL");
            obj.set_datacolumn("DATACOL");

            obj = new Combo("Combo03", "absolute", "150", "330", "180", "50", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_text("Combo03");
            obj.set_type("filterlike");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("CODECOL");
            obj.set_datacolumn("DATACOL");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("RP_88062_FF_Combo");

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

        this.loadIncludeScript("RP_88062_FF_Combo.xfdl");

       
    };
}
)();
