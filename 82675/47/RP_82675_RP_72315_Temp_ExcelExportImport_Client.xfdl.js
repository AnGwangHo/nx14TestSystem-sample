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
                this.set_name("test25");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_srchCpaugvofrsk", this);
            obj._setContents("<ColumnInfo><Column id=\"examrpt_id\" type=\"STRING\" size=\"10\"/><Column id=\"prvivsbz_ledno\" type=\"STRING\" size=\"9\"/><Column id=\"cpau_gvof_nm\" type=\"STRING\" size=\"100\"/><Column id=\"fnnl_slrl_rt\" type=\"BIGDECIMAL\" size=\"7\"/><Column id=\"bas_yr\" type=\"STRING\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">전체</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">adsf</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">edsf</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3f3</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">35r454</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">45afasdf</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">전체</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">adsf</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">safdsadfasdfsadfsadfasdfdsdsa&#10;f&#10;sadf&#10;dsaf&#10;sda&#10;f&#10;sadf&#10;마지막</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">safdsadfasdfsadfsadfasdfdsdsa&#10;f&#10;sadf&#10;dsaf&#10;sda&#10;f&#10;sadf&#10;</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">sadfasdfsa</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">asdfasdfdsafsadf</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new MaskEdit("mskFnnlSlrlRt", "absolute", "40", "153", "75", "22", null, null, this);
            obj.set_type("number");
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_displaynulltext("0.0");
            obj.set_mask("###.0#");
            obj.set_maskchar("0");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBasYr", "absolute", "40", "184", "75", "22", null, null, this);
            obj.set_type("number");
            obj.set_taborder("1");
            obj.set_maskchar("0");
            obj.set_limitbymask("both");
            obj.style.set_align("left middle");
            obj.set_mask("####");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "4%", "285", null, "22", "89.84%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "13.28%", "470", null, "258", "49.02%", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.style.set_background("blue");
            this.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "56", "82", null, null, "172", "80", this.Div01);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "60.1%", "75", null, "93", "5.18%", null, this.Div01);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("[RP_82675] taborder가 첫번째일때 textarea를 클릭시 클릭한 부분부터 블락 지정 되는 오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "100", null, null, this);
            obj.set_taborder("15");
            obj.set_text("taborder가 첫번째일때 textarea를 클릭시 클릭한 부분부터 블락 지정 되는 오류입니다.\r\n\r\n===테스트 방법===\r\n\r\n1. 첨부된 파일 퀵뷰로 실행.\r\n2. div의 왼쪽textarea를 클릭 시 클릭한 부분부터 아래로 블락지정됨.(오류)\r\n3. div의 오른쪽textarea를 클릭 시 클릭한 부분 caret만 위치함(정상)\r\n");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 258, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.style.set_background("blue");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","mskFnnlSlrlRt","value","ds_srchCpaugvofrsk","fnnl_slrl_rt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mskBasYr","value","ds_srchCpaugvofrsk","bas_yr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.TextArea00","value","Dataset02","Column1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.TextArea01","value","Dataset02","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_82675_RP_72315_Temp_ExcelExportImport_Client.xfdl", function() {

        this.Div01_TextArea01_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.test25_onkeydown, this);
            this.mskBasYr.addEventHandler("onkillfocus", this.divSection_mskBasYr_onkillfocus, this);
            this.Edit01.addEventHandler("onkillfocus", this.Edit01_onkillfocus, this);

        };

        this.loadIncludeScript("RP_82675_RP_72315_Temp_ExcelExportImport_Client.xfdl");

       
    };
}
)();
