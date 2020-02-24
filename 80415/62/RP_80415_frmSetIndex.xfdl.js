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
                this.set_name("frmSetIndex");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">abc</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">xyz</Col><Col id=\"Column4\">20180101</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "24", "232", "278", "44", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "324", "232", "160", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set_value(null)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "324", "272", "160", "36", null, null, this);
            obj.set_taborder("2");
            obj.set_text("set_value(\"\")");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "28", "320", "277", "76", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">B</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");

            obj = new Button("Button02", "absolute", "324", "320", "160", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_text("set_index(-1)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "324", "360", "160", "36", null, null, this);
            obj.set_taborder("5");
            obj.set_text("set_value(null)");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "30", "419", "276", "46", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">C</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">D</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Button("Button04", "absolute", "324", "416", "160", "36", null, null, this);
            obj.set_taborder("7");
            obj.set_text("set_index(-1)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "324", "456", "160", "36", null, null, this);
            obj.set_taborder("8");
            obj.set_text("set_value(null)");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "35", "507", "271", "104", null, null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "324", "507", "160", "36", null, null, this);
            obj.set_taborder("10");
            obj.set_text("set_value(null)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "324", "547", "160", "36", null, null, this);
            obj.set_taborder("11");
            obj.set_text("set_value(\"\")");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "35", "629", "267", "50", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");

            obj = new Button("Button08", "absolute", "324", "627", "160", "36", null, null, this);
            obj.set_taborder("13");
            obj.set_text("set_value(null)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "324", "667", "160", "36", null, null, this);
            obj.set_taborder("14");
            obj.set_text("set_value(\"\")");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "38", "715", "269", "41", null, null, this);
            obj.set_taborder("15");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "324", "715", "160", "36", null, null, this);
            obj.set_taborder("16");
            obj.set_text("set_value(null)");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "324", "755", "160", "36", null, null, this);
            obj.set_taborder("17");
            obj.set_text("set_value(\"\")");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "35", "803", "196", "44", null, null, this);
            obj.set_taborder("18");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "324", "803", "160", "36", null, null, this);
            obj.set_taborder("19");
            obj.set_text("set_value(null)");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "324", "843", "160", "36", null, null, this);
            obj.set_taborder("20");
            obj.set_text("set_value(\"\")");
            obj.style.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "16", "888", "713", "87", null, null, this);
            obj.set_taborder("21");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "850", "30", null, null, this);
            obj.set_taborder("22");
            obj.set_text("[RP_80415] [디그라데이션] 데이타셋과 바인드된 콤포넌트들의 value(null)와 index(-1)값으로 초기화 되지 않는 현상이 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "850", "150", null, null, this);
            obj.set_taborder("23");
            obj.set_text("1. 현상\r\n 데이타셋과 바인드된 콤포넌트들에서 아래의 스크립트로 value, index값을 초기화하면 반응이 없음.\r\n Edit, Textarea, Calendar, CheckBox : set_value(null)\r\n Spin : set_value(\"\")\r\n Radio, Combo : set_index(-1)\r\n\r\n - 5월정기 브랜치 45981에서 발생 (2018.05.09 - RP 77191,76173)\r\n\r\n2. 테스트방법\r\n 1) 첨부폼을 실행.\r\n 2) 각 콤포넌트을 초기화하기위해 옆의 버튼을 클릭.\r\n 3) 배경색이 yellow인 버튼을 실행시에 value값이 초기화가 안되는 문제가 발생. (이전 버전에서 정상적으로 초기화 되었음)");
            obj.style.set_font("9 Dotum");
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
            obj = new BindItem("item0","Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Radio00","value","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo00","value","Dataset00","Column2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","TextArea00","value","Dataset00","Column3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Calendar00","value","Dataset00","Column4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","CheckBox00","value","Dataset00","Column5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Spin00","value","Dataset00","Column6");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_80415_frmSetIndex.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Edit00.set_value(null);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Edit00.set_value("");
        }

        //
        this.Button02_onclick = function(obj,e)
        {
        	this.Radio00.set_index(-1);
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.Radio00.set_value(null);
        }

        //
        this.Button04_onclick = function(obj,e)
        {
        	this.Combo00.set_index(-1);
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.Combo00.set_value(null);
        }

        //
        this.Button06_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(null);
        }

        this.Button07_onclick = function(obj,e)
        {
        	this.TextArea00.set_value("");
        }

        //
        this.Button08_onclick = function(obj,e)
        {
        	this.Calendar00.set_value(null);
        }

        this.Button09_onclick = function(obj,e)
        {
        	this.Calendar00.set_value("");
        }

        //
        this.Button10_onclick = function(obj,e)
        {
        	this.CheckBox00.set_value(null);
        }

        this.Button11_onclick = function(obj,e)
        {
        	this.CheckBox00.set_value("");
        }

        //
        this.Button12_onclick = function(obj,e)
        {
        	this.Spin00.set_value(null);
        }

        this.Button13_onclick = function(obj,e)
        {
        	this.Spin00.set_value("");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.Button11.addEventHandler("onclick", this.Button11_onclick, this);
            this.Button12.addEventHandler("onclick", this.Button12_onclick, this);
            this.Button13.addEventHandler("onclick", this.Button13_onclick, this);

        };

        this.loadIncludeScript("RP_80415_frmSetIndex.xfdl");

       
    };
}
)();
