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
                this.set_name("FormFont");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,1800);
            }
            this.style.set_font("12 HGP創英角ﾎﾟｯﾌﾟ体");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">あいうえお</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">かきくけこ</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"caption\">トップ1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">1-1</Col><Col id=\"caption\">1階層</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"caption\">トップ2</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "60", "435", "270", "192", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("antiquewhite");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "60", "26", null, "35", "15%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Div");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "60", "255", "268", "116", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "384", "451", "270", "180", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("cadetblue");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox00", "absolute", "4", "0", null, "55", "59.63%", null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.PopupDiv00.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">あいうえお</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">かきくけこ</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo00", "absolute", "365", "255", "290", "124", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");

            obj = new CheckBox("CheckBox00", "absolute", "674", "255", "318", "121", null, null, this);
            obj.set_taborder("3");
            obj.set_text("CheckBox00");
            obj.style.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "60", "657", "270", "138", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">ListBox</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">ListBox</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("Edit00", "absolute", "376", "657", "278", "138", null, null, this);
            obj.set_taborder("5");
            obj.set_value("Edit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "704", "657", "278", "138", null, null, this);
            obj.set_taborder("6");
            obj.set_mask("@@@@");
            obj.set_displaynulltext("MaskEdit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "664", "863", "333", "140", null, null, this);
            obj.set_taborder("7");
            obj.set_value("TextArea");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00", "absolute", "696", "451", "301", "159", null, null, this);
            this.addChild(obj.name, obj);
            var Menu00_innerdataset = new Dataset("Menu00_innerdataset", this.Menu00);
            Menu00_innerdataset._setContents("<ColumnInfo><Column id=\"idcolumn\" size=\"256\"/><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">あい</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">1-1</Col><Col id=\"captioncolumn\">あああああああああああああああ</Col><Col id=\"levelcolumn\">1</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">1-2</Col><Col id=\"captioncolumn\">いいいいいいいいいいい</Col><Col id=\"levelcolumn\">1</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">かき</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"captioncolumn\">さし</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row></Rows>");
            obj.set_innerdataset(Menu00_innerdataset);
            obj.set_taborder("8");
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            obj.style.set_popupitemheight("40");

            obj = new Tab("Tab00", "absolute", "60", "843", "270", "189", null, null, this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "60", "26", null, "38", "23.03%", null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("Tab");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "346", "863", "294", "150", null, null, this);
            obj.set_taborder("10");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "60", "1050", "260", "155", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">リンゴ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">バナナ</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.style.set_background("aqua");

            obj = new Calendar("Calendar00", "absolute", "352", "1051", "321", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Static("Static00", "absolute", "60", "1228", "230", "138", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static00");
            obj.style.set_background("aquamarine");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "354", "1230", "300", "138", null, null, this);
            obj.set_taborder("14");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "713", "1261", "282", "105", null, null, this);
            obj.set_taborder("15");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "385", "419", "191", "31", null, null, this);
            obj.set_taborder("17");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "701", "1052", "94", "31", null, null, this);
            obj.set_taborder("18");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu01", "absolute", "701", "1304", "307", "149", null, null, this);
            this.addChild(obj.name, obj);
            var PopupMenu01_innerdataset = new Dataset("PopupMenu01_innerdataset", this.PopupMenu01);
            PopupMenu01_innerdataset._setContents("<ColumnInfo><Column id=\"idcolumn\" size=\"256\"/><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">あい</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\"/><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">1-1</Col><Col id=\"captioncolumn\">うえお</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\"/><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">かき</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\"/><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\"/></Row></Rows>");
            obj.set_innerdataset(PopupMenu01_innerdataset);
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            obj.style.set_itemheight("50");

            obj = new GroupBox("GroupBox00", "absolute", "60", "1387", "250", "139", null, null, this);
            obj.set_text("GroupBox00");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00", "absolute", "352", "1403", "319", "118", null, null, this);
            obj.set_taborder("20");
            obj.set_text("ProgressBar00");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "60", "1562", "617", "112", null, null, this);
            obj.set_taborder("21");
            obj.getSetter("retry").set("0");
            obj.style.set_itemheight("100");
            obj.style.set_buttonsize("100");
            obj.style.set_buttontext("ファイル追加");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "727", "1400", "254", "112", null, null, this);
            obj.set_taborder("22");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3.91%", "190", null, "42", "2.83%", null, this);
            obj.set_taborder("23");
            obj.set_text("各コンポーネントの上で、スクロール操作をする（フリック操作）");
            obj.style.set_background("deepskyblue");
            obj.style.set_font("16 HGP創英角ﾎﾟｯﾌﾟ体");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "6.74%", "1707", "861", "220", null, null, this);
            obj.set_taborder("24");
            obj.style.set_border("4 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("25");
            obj.set_text("[RP_79302] [디그라데이션][iOS-Safari] 넥사크로화면안의 일부 콤포넌트위에서 터치로 화면스크롤이 안됩니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "130", null, null, this);
            obj.set_taborder("26");
            obj.set_text("[현상]\r\n터치로 화면스크롤이 동작하지 않는 현상이 확인된 콤포넌트는 아래와 같습니다.\r\nDiv, Listbox, Tabpage, Textarea, Grid, FileUpload\r\n\r\n[확인방법]\r\n1. 첨부폼을 iOS-Safari에서 실행.\r\n2. 각 콤포넌트 위에서 터치해서 아래위로 화면스크롤.\r\n3. Div, Listbox, Tabpage, Textarea, Grid, FileUpload 콤포넌트 위에서는 화면스크롤이 동작하지 않음. (NG)\r\n\r\n* 3월정기 변경집합 44658에서 발생함 (2018.02.27)");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 270, 192, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 270, 180, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("cadetblue");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 1800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_font("12 HGP創英角ﾎﾟｯﾌﾟ体");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79302_MobileScrollTest.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj,3,obj.getOffsetHeight());
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.PopupMenu01.trackPopupByComponent(obj,3,obj.getOffsetHeight(),"right bottom");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("RP_79302_MobileScrollTest.xfdl");

       
    };
}
)();
