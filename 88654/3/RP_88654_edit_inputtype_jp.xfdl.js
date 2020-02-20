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
                this.set_name("edit_inputtype_jp");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Edit_ios\" type=\"STRING\" size=\"256\"/><Column id=\"Textarea_ios\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "8", "9", "671", "35", null, null, this);
            obj.set_taborder("0");
            obj.set_text(" Edit, Textarea 일본어 입력필터 설정");
            obj.style.set_background("aqua");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("12 MS Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "95", "156", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text(" inputtype 설정");
            obj.style.set_background("wheat");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_half", "absolute", "291", "95", "61", "35", null, null, this);
            obj.set_taborder("2");
            obj.set_text("half");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_english", "absolute", "355", "95", "77", "35", null, null, this);
            obj.set_taborder("4");
            obj.set_text("english");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_alpha", "absolute", "443", "95", "63", "35", null, null, this);
            obj.set_taborder("5");
            obj.set_text("alpha");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_digit", "absolute", "515", "95", "69", "35", null, null, this);
            obj.set_taborder("6");
            obj.set_text("digit");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_number", "absolute", "587", "95", "77", "35", null, null, this);
            obj.set_taborder("7");
            obj.set_text("number");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_inputtype", "absolute", "173", "94", "86", "36", null, null, this);
            obj.set_taborder("8");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "8", "141", "156", "35", null, null, this);
            obj.set_taborder("9");
            obj.set_text(" maxlength 설정");
            obj.style.set_background("wheat");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_maxlength", "absolute", "173", "140", "86", "36", null, null, this);
            obj.set_taborder("10");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "272", "140", "149", "74", null, null, this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_max("30");
            obj.style.set_buttonsize("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "7", "248", "436", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text(" 현재 inputtype 설정값 : normal");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "446", "248", "233", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text(" 현재 maxlength 설정값 : 0");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "8", "341", "332", "60", null, null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "346", "341", "333", "123", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "7", "281", "672", "52", null, null, this);
            obj.set_taborder("16");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Edit_ios\"/><Cell col=\"1\" disptype=\"normal\" text=\"Textarea_ios\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Edit_ios\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Textarea_ios\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "8", "52", "156", "35", null, null, this);
            obj.set_taborder("17");
            obj.set_text(" inputfilter 설정");
            obj.style.set_background("wheat");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_inputfilter", "absolute", "173", "52", "86", "36", null, null, this);
            obj.set_taborder("18");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "7", "224", "436", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text(" 현재 inputfilter 설정값 : none");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_alpha_filter", "absolute", "291", "52", "61", "35", null, null, this);
            obj.set_taborder("20");
            obj.set_text("alpha");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_digit_filter", "absolute", "355", "52", "77", "35", null, null, this);
            obj.set_taborder("21");
            obj.set_text("digit");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "434", "143", "158", "34", null, null, this);
            obj.set_taborder("22");
            obj.set_text("set Value(\"test001\")");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "346", "485", "333", "123", null, null, this);
            obj.set_taborder("24");
            obj.set_displaynulltext("displaynulltext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "434", "183", "158", "34", null, null, this);
            obj.set_taborder("25");
            obj.set_text("set Value(null)");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "10", "464", "330", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text(" ※displaynulltext 설정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "594", "143", "158", "34", null, null, this);
            obj.set_taborder("27");
            obj.set_text("set Value(\"12345678\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "594", "183", "158", "34", null, null, this);
            obj.set_taborder("28");
            obj.set_text("set Value(\"ABCDEFG\")");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "8", "485", "332", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_displaynulltext("displaynulltext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "690", "347", "167", "47", null, null, this);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "7", "412", "142", "44", null, null, this);
            obj.set_taborder("30");
            obj.set_text("value값 확인");
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
            obj = new BindItem("item0","Edit00","value","Dataset00","Edit_ios");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","TextArea00","value","Dataset00","Textarea_ios");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","Dataset00","Edit_ios");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","TextArea01","value","Dataset00","Textarea_ios");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_88654_edit_inputtype_jp.xfdl", function() {

        
        this.Btn_inputfilter_onclick = function(obj,e)
        {
        	var s_inputfilter = "";
        	if (!this.chk_alpha_filter.value && !this.chk_digit_filter.value)
        	{
        		s_inputfilter = "none";
        		this.Edit00.set_inputfilter(s_inputfilter);
        		this.TextArea00.set_inputfilter(s_inputfilter);
        		this.Edit01.set_inputfilter(s_inputfilter);
        		this.TextArea01.set_inputfilter(s_inputfilter);
        	}
        	else
        	{
        		if (this.chk_alpha_filter.value)
        		{
        			if (s_inputfilter.length == 0)
        			{
        				s_inputfilter = "alpha";
        			}
        			else
        			{
        				s_inputfilter += ",alpha";
        			}
        		}
        		if (this.chk_digit_filter.value)
        		{
        			if (s_inputfilter.length == 0)
        			{
        				s_inputfilter = "digit";
        			}
        			else
        			{
        				s_inputfilter += ",digit";
        			}
        		}
        		this.Edit00.set_inputfilter(s_inputfilter);
        		this.TextArea00.set_inputfilter(s_inputfilter);
        		this.Edit01.set_inputfilter(s_inputfilter);
        		this.TextArea01.set_inputfilter(s_inputfilter);
        	}
        	this.Static06.set_text(" 현재 inputfilter 설정값 : " + s_inputfilter);
        }

        this.Btn_inputtype_onclick = function(obj,e)
        {
        	var s_inputtype = "";
        	if (!this.chk_half.value && !this.chk_alpha.value && !this.chk_english.value && !this.chk_digit.value && !this.chk_number.value)
        	{
        		s_inputtype = "normal";
        		this.Edit00.set_inputtype(s_inputtype);
        		this.TextArea00.set_inputtype(s_inputtype);
        	}
        	else
        	{
        		if (this.chk_half.value)
        		{
        			if (s_inputtype.length == 0)
        			{
        				s_inputtype = "half";
        			}
        			else
        			{
        				s_inputtype += ",half";
        			}
        		}
        		if (this.chk_alpha.value)
        		{
        			if (s_inputtype.length == 0)
        			{
        				s_inputtype = "alpha";
        			}
        			else
        			{
        				s_inputtype += ",alpha";
        			}
        		}
        		if (this.chk_english.value)
        		{
        			if (s_inputtype.length == 0)
        			{
        				s_inputtype = "english";
        			}
        			else
        			{
        				s_inputtype += ",english";
        			}
        		}
        		if (this.chk_digit.value)
        		{
        			if (s_inputtype.length == 0)
        			{
        				s_inputtype = "digit";
        			}
        			else
        			{
        				s_inputtype += ",digit";
        			}
        		}
        		if (this.chk_number.value)
        		{
        			if (s_inputtype.length == 0)
        			{
        				s_inputtype = "number";
        			}
        			else
        			{
        				s_inputtype += ",number";
        			}
        		}
        		this.Edit00.set_inputtype(s_inputtype);
        		this.TextArea00.set_inputtype(s_inputtype);
        		this.Edit01.set_inputtype(s_inputtype);
        		this.TextArea01.set_inputtype(s_inputtype);
        	}
        	this.Static03.set_text(" 현재 inputtype 설정값 : " + s_inputtype);
        }

        this.Btn_maxlength_onclick = function(obj,e)
        {
        	var vMaxlength = this.Spin00.value;
        	this.Edit00.set_maxlength(vMaxlength);
        	this.TextArea00.set_maxlength(vMaxlength);
        	this.Edit01.set_maxlength(vMaxlength);
        	this.TextArea01.set_maxlength(vMaxlength);
        	this.Static04.set_text(" 현재 maxlength 설정값 : " + vMaxlength);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.Edit00.set_value("test001");
        	this.TextArea00.set_value("test001");
        	this.Edit01.set_value("test001");
        	this.TextArea01.set_value("test001");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Edit00.set_value(null);
        	this.TextArea00.set_value(null);
        	this.Edit01.set_value(null);
        	this.TextArea01.set_value(null);
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.Edit00.set_value("12345678");
        	this.TextArea00.set_value("12345678");
        	this.Edit01.set_value("12345678");
        	this.TextArea01.set_value("12345678");
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.Edit00.set_value("ABCDEFG");
        	this.TextArea00.set_value("ABCDEFG");
        	this.Edit01.set_value("ABCDEFG");
        	this.TextArea01.set_value("ABCDEFG");
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.alert(this.Edit00.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Btn_inputtype.addEventHandler("onclick", this.Btn_inputtype_onclick, this);
            this.Btn_maxlength.addEventHandler("onclick", this.Btn_maxlength_onclick, this);
            this.Btn_inputfilter.addEventHandler("onclick", this.Btn_inputfilter_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("RP_88654_edit_inputtype_jp.xfdl");

       
    };
}
)();
