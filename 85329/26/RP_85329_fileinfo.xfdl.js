﻿(function()
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
                this.set_name("fileinfo");
                this.set_titletext("첨부파일설명");
                this._setFormPosition(0,0,1050,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_DETAIL_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_PGM_ID_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"GFM_DETAIL_PGM_ID_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dw_macust", this);
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "12", "175", "404", "57", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("167");
            obj.set_text("Combo00");
            obj.set_innerdataset("@dw_macust");
            obj.set_codecolumn("COMM_CD");
            obj.set_datacolumn("COMM_NM");
            obj.set_type("filterlike");
            obj.set_displayrowcount("10");

            obj = new Button("Button00", "absolute", "464", "179", "13.62%", "6.4%", null, null, this);
            obj.set_taborder("168");
            obj.set_text("insert Row");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0.19%", "52", null, "92", "0.76%", null, this);
            obj.set_taborder("169");
            obj.set_text("테스트 방법\r\n\r\n 1. Combo의 Dropdown Button 클릭\r\n 2. Combo List가 보여짐을 확인\r\n 3. Combo List를 닫고 다시 Dropdown Button 클릭\r\n 4. Combo List가 보여지지 않고 지연되는 현상 확인");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("170");
            obj.set_text("RP 85329 combolist open시 성능저하 문제");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1050, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("첨부파일설명");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_85329_fileinfo.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.dw_macust.insertRow(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_85329_fileinfo.xfdl");

       
    };
}
)();