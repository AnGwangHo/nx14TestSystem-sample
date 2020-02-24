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
                this.set_name("RC74281");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("9 MS Gothic");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Edit00\" type=\"STRING\" size=\"256\"/><Column id=\"Edit01\" type=\"STRING\" size=\"256\"/><Column id=\"TextArea00\" type=\"STRING\" size=\"256\"/><Column id=\"TextArea01\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit00\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit01\" type=\"STRING\" size=\"256\"/><Column id=\"Combo00\" type=\"STRING\" size=\"256\"/><Column id=\"Combo01\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "99", "154", "180", "30", null, null, this);
            obj.set_taborder("0");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "154", "86", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Edit00 : ");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "294", "154", "180", "30", null, null, this);
            obj.set_taborder("2");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "484", "154", "86", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text(": Edit01 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "194", "86", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("TextArea00 : ");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "100", "194", "180", "60", null, null, this);
            obj.set_taborder("5");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "294", "194", "180", "60", null, null, this);
            obj.set_taborder("6");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "484", "194", "86", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text(": TextArea01");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "100", "264", "180", "30", null, null, this);
            obj.set_taborder("8");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "264", "86", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("MaskEdit00 : ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "294", "264", "180", "30", null, null, this);
            obj.set_taborder("10");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "484", "264", "86", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text(": MaskEdit01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "100", "304", "180", "30", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AB</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">B</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("12");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");
            obj.set_type("search");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static06", "absolute", "10", "304", "86", "30", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Combo00 : ");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "294", "304", "180", "30", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AB</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">B</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("search");
            obj.style.set_font("18 MS Gothic");
            obj.style.setStyleValue("background", "focused", "red");

            obj = new Static("Static07", "absolute", "484", "304", "86", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text(": Combo01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "344", null, "80", "5", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"Edit\"><Cell/><Cell col=\"1\"/></Cell><Cell col=\"2\" colspan=\"2\" text=\"TextArea\"><Cell/><Cell col=\"1\"/></Cell><Cell col=\"4\" colspan=\"2\" text=\"MaskEdit\"><Cell/><Cell col=\"1\"/></Cell><Cell col=\"6\" colspan=\"2\" text=\"Combo\"><Cell/><Cell col=\"1\"/></Cell><Cell row=\"1\" text=\"Edit00\"/><Cell row=\"1\" col=\"1\" text=\"Edit01\"/><Cell row=\"1\" col=\"2\" text=\"TextArea00\"/><Cell row=\"1\" col=\"3\" text=\"TextArea01\"/><Cell row=\"1\" col=\"4\" text=\"MaskEdit00\"/><Cell row=\"1\" col=\"5\" text=\"MaskEdit01\"/><Cell row=\"1\" col=\"6\" text=\"Combo00\"/><Cell row=\"1\" col=\"7\" text=\"Combo01\"/></Band><Band id=\"body\"><Cell text=\"bind:Edit00\"/><Cell col=\"1\" text=\"bind:Edit01\"/><Cell col=\"2\" text=\"bind:TextArea00\"/><Cell col=\"3\" text=\"bind:TextArea01\"/><Cell col=\"4\" text=\"bind:MaskEdit00\"/><Cell col=\"5\" text=\"bind:MaskEdit01\"/><Cell col=\"6\" text=\"bind:Combo00\"/><Cell col=\"7\" text=\"bind:Combo01\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "592", "152", "119", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Focused Component : ");
            this.addChild(obj.name, obj);

            obj = new Static("stFocusedComp", "absolute", "712", "152", "297", "30", null, null, this);
            obj.set_taborder("18");
            obj.style.set_color("blue");
            obj.style.set_font("18 MS Gothic");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "613", "197", "120", "50", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "745", "198", "94", "26", null, null, this);
            obj.set_taborder("20");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "851", "195", "114", "96", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_index("-1");

            obj = new Calendar("Calendar00", "absolute", "616", "254", "194", "34", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");

            obj = new Calendar("Calendar01", "absolute", "615", "295", "196", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");

            obj = new Static("Static09", "absolute", "11", "7", "645", "37", null, null, this);
            obj.set_taborder("24");
            obj.set_text("RP 87187 IOS에서 연속 터치 동작으로 Edit간 Focus 이동시 Caret과 Focus가 분리되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "32", "52", "447", "82", null, null, this);
            obj.set_taborder("25");
            obj.set_text("테스트 방법\r\n\r\n 1. IOS 사파리에서 화면 실행\r\n 2. 화면의 Edit, Textarea 등의 입력 Component들을 연속해서 터치하여 Focus 이동\r\n 3. Caret과 Focus가 일치하여 이동되는지 확인\r\n");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_font("9 MS Gothic");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","Dataset00","Edit00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit01","value","Dataset00","Edit01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","TextArea00","value","Dataset00","TextArea00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","TextArea01","value","Dataset00","TextArea01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","MaskEdit00","value","Dataset00","MaskEdit00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","MaskEdit01","value","Dataset00","MaskEdit01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Combo00","value","Dataset00","Combo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Combo01","value","Dataset00","Combo01");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_87187_RC74281.xfdl", function() {

        this.RC74281_ontimer = function(obj,e)
        {
        	if(e.timerid == 1) {
        		var comp = "";
        		if(this.getFocus()) {
        			comp = this.getFocus().name;
        		}
        		this.stFocusedComp.set_text(comp);
        	}
        }

        this.RC74281_onload = function(obj,e)
        {
        	this.setTimer(1, 500);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer", this.RC74281_ontimer, this);
            this.addEventHandler("onload", this.RC74281_onload, this);
            this.Static10.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("RP_87187_RC74281.xfdl");

       
    };
}
)();
