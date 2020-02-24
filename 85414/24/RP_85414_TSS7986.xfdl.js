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
                this.set_name("ddddd");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">aaaaaaaaaaaaaaa</Col></Row><Row><Col id=\"Column0\">bbbbbbbbbbbbb</Col></Row><Row><Col id=\"Column0\">ccccccccccccccc</Col></Row><Row><Col id=\"Column0\">ddddddddddddd</Col></Row><Row><Col id=\"Column0\">eeeeeeeeeeeeeee</Col></Row><Row><Col id=\"Column0\">ffffffffffffffffffffff</Col></Row><Row><Col id=\"Column0\">ggggggggggggg</Col></Row><Row><Col id=\"Column0\">hhhhhhhhhhhhh</Col></Row><Row><Col id=\"Column0\">iiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Col></Row><Row><Col id=\"Column0\">jjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Col></Row><Row><Col id=\"Column0\">kkkkkkkkkkkkkkkkkkkk</Col></Row><Row><Col id=\"Column0\">llllllllllllllllllllllllllllll</Col></Row><Row><Col id=\"Column0\">mmmmmmmmmmmmmm</Col></Row><Row><Col id=\"Column0\">nnnnnnnnnnnnnnnnn</Col></Row><Row><Col id=\"Column0\">111111111111111</Col></Row><Row><Col id=\"Column0\">22222222222222</Col></Row><Row><Col id=\"Column0\">3333333333333</Col></Row><Row><Col id=\"Column0\">444444444444444444444</Col></Row><Row><Col id=\"Column0\">aaaaaaaaaaaaaaa</Col></Row><Row><Col id=\"Column0\">bbbbbbbbbbbbb</Col></Row><Row><Col id=\"Column0\">ccccccccccccccc</Col></Row><Row><Col id=\"Column0\">ddddddddddddd</Col></Row><Row><Col id=\"Column0\">eeeeeeeeeeeeeee</Col></Row><Row><Col id=\"Column0\">ffffffffffffffffffffff</Col></Row><Row><Col id=\"Column0\">ggggggggggggg</Col></Row><Row><Col id=\"Column0\">hhhhhhhhhhhhh</Col></Row><Row><Col id=\"Column0\">iiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Col></Row><Row><Col id=\"Column0\">jjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Col></Row><Row><Col id=\"Column0\">kkkkkkkkkkkkkkkkkkkk</Col></Row><Row><Col id=\"Column0\">llllllllllllllllllllllllllllll</Col></Row><Row><Col id=\"Column0\">mmmmmmmmmmmmmm</Col></Row><Row><Col id=\"Column0\">nnnnnnnnnnnnnnnnn</Col></Row><Row><Col id=\"Column0\">111111111111111</Col></Row><Row><Col id=\"Column0\">22222222222222</Col></Row><Row><Col id=\"Column0\">3333333333333</Col></Row><Row><Col id=\"Column0\">444444444444444444444</Col></Row><Row><Col id=\"Column0\">aaaaaaaaaaaaaaa</Col></Row><Row><Col id=\"Column0\">bbbbbbbbbbbbb</Col></Row><Row><Col id=\"Column0\">ccccccccccccccc</Col></Row><Row><Col id=\"Column0\">ddddddddddddd</Col></Row><Row><Col id=\"Column0\">eeeeeeeeeeeeeee</Col></Row><Row><Col id=\"Column0\">ffffffffffffffffffffff</Col></Row><Row><Col id=\"Column0\">ggggggggggggg</Col></Row><Row><Col id=\"Column0\">hhhhhhhhhhhhh</Col></Row><Row><Col id=\"Column0\">iiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Col></Row><Row><Col id=\"Column0\">jjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Col></Row><Row><Col id=\"Column0\">kkkkkkkkkkkkkkkkkkkk</Col></Row><Row><Col id=\"Column0\">llllllllllllllllllllllllllllll</Col></Row><Row><Col id=\"Column0\">mmmmmmmmmmmmmm</Col></Row><Row><Col id=\"Column0\">nnnnnnnnnnnnnnnnn</Col></Row><Row><Col id=\"Column0\">111111111111111</Col></Row><Row><Col id=\"Column0\">22222222222222</Col></Row><Row><Col id=\"Column0\">3333333333333</Col></Row><Row><Col id=\"Column0\">444444444444444444444</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "717", "211", "291", "269", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell edittype=\"readonly\" text=\"bind:Column0\" wordwrap=\"char\" editscrollbar=\"none\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "16", "211", "291", "269", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:Column0\" wordwrap=\"char\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "355", "211", "291", "269", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell edittype=\"textarea\" text=\"bind:Column0\" wordwrap=\"char\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "164", "242", "40", null, null, this);
            obj.set_taborder("3");
            obj.set_text("edittype＝none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "360", "164", "241", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text("edittype＝textarea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "719", "164", "243", "40", null, null, this);
            obj.set_taborder("5");
            obj.set_text("edittype＝readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("6");
            obj.set_text("RP 85414 스크롤 동작이 edittype에 따라 동작하지 않는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0.2%", "44", null, "92", "0.78%", null, this);
            obj.set_taborder("7");
            obj.set_text("테스트 방법\r\n\r\n 1. 각 Grid에 마우스 휠동작을 실행\r\n 2. 각 Grid가 스크롤 동작을 하는지 확인");
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

        this.loadIncludeScript("RP_85414_TSS7986.xfdl");

       
    };
}
)();
