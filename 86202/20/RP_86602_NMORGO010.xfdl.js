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
                this.set_name("NMORGO010");
                this.set_titletext("전체발주");
                this._setFormPosition(0,0,720,1008);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORD_QTY\">9</Col></Row><Row><Col id=\"ORD_QTY\"/></Row><Row><Col id=\"ORD_QTY\"/></Row><Row><Col id=\"ORD_QTY\"/></Row><Row><Col id=\"ORD_QTY\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK_ALL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dtl01", this);
            obj._setContents("<ColumnInfo><Column id=\"dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_head", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cate_mst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ord_info", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_poss_info", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dummy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_shop_info", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tran", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gds_evt_info", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"30\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"14\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"14\"/><Column id=\"EVT_INFO\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ord_header", this);
            obj._setContents("<ColumnInfo><Column id=\"LOAN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LOAN_AMT\">0</Col><Col id=\"ORD_AMT\">0</Col><Col id=\"ORD_CNT\">0/&lt;fs v='18'&gt;0&lt;/fs&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ord_header_title", this);
            obj._setContents("<ColumnInfo><Column id=\"LOAN_AMT_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AMT_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_CNT_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LOAN_AMT_TITLE\">발주 가능 금액</Col><Col id=\"ORD_AMT_TITLE\">총 발주 금액</Col><Col id=\"ORD_CNT_TITLE\">발주 품목 수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static22", "absolute", "0", "0", "16", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_text("w16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "0", "16", null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_text("w16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "720", "16", null, null, this);
            obj.set_taborder("6");
            obj.set_text("16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            obj.style.set_background("tomato");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond", "absolute", "16", "16", null, "212", "16", null, this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "0", "0", "176", "60", null, null, this.div_cond);
            obj.set_taborder("0");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_cond.addChild(obj.name, obj);
            obj = new Calendar("cal_ord_dt", "absolute", "176", "0", null, "60", "0", null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_autoskip("true");
            obj = new Static("Static00", "absolute", "0", "76", "176", "60", null, null, this.div_cond);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_cond.addChild(obj.name, obj);
            obj = new Edit("edt_cate", "absolute", "246", "76", null, "60", "70", null, this.div_cond);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "152", "176", "60", null, null, this.div_cond);
            obj.set_taborder("5");
            obj.set_text("PLU/상품명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_cond.addChild(obj.name, obj);
            obj = new Button("btn_cate_prev", "absolute", "176", "76", "70", "60", null, null, this.div_cond);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Prev");
            this.div_cond.addChild(obj.name, obj);
            obj = new Button("btn_cate_next", "absolute", null, "76", "70", "60", "0", null, this.div_cond);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Next");
            this.div_cond.addChild(obj.name, obj);
            obj = new Edit("edt_sch_text", "absolute", "176", "152", null, "60", "0", null, this.div_cond);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.div_cond.addChild(obj.name, obj);
            obj = new Button("btn_cate_search00", "absolute", null, "152", "71", "60", "0", null, this.div_cond);
            obj.set_taborder("9");
            obj.set_cssclass("btn_TF_Search");
            this.div_cond.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "76", "720", "16", null, null, this);
            obj.set_taborder("8");
            obj.set_text("16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            obj.style.set_background("tomato");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "152", "720", "16", null, null, this);
            obj.set_taborder("9");
            obj.set_text("16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            obj.style.set_background("tomato");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "228", "720", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_text("32");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            obj.style.set_background("tomato");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ordHeader", "absolute", "16", "260", null, "92", "16", null, this);
            obj.set_cssclass("grd_WF_DefaultOrder");
            obj.set_taborder("14");
            obj.set_binddataset("ds_ord_header");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/><Column size=\"260\"/><Column size=\"164\"/></Columns><Rows><Row size=\"35\"/><Row size=\"54\"/></Rows><Band id=\"body\"><Cell cssclass=\"grd_WF_CellOrderLabel\" text=\"발주 가능 금액\" expr=\"expr:comp.parent.ds_ord_header_title.getColumn(0,'LOAN_AMT_TITLE')\"/><Cell col=\"1\" cssclass=\"grd_WF_CellOrderLabel\" text=\"총 발주 금액\" expr=\"expr:comp.parent.ds_ord_header_title.getColumn(0,'ORD_AMT_TITLE')\"/><Cell col=\"2\" text=\"발주 품목 수\" expr=\"expr:comp.parent.ds_ord_header_title.getColumn(0,'ORD_CNT_TITLE')\"/><Cell row=\"1\" displaytype=\"number\" cssclass=\"grd_WF_CellOrderDataYellow\" text=\"bind:LOAN_AMT\" mask=\"expr:LOAN_AMT == 0 ? &quot;&quot; : '###,###'\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" cssclass=\"grd_WF_CellOrderDataOrange\" text=\"bind:ORD_AMT\" mask=\"expr:ORD_AMT == 0 ? &quot;&quot; : '###,###'\"/><Cell row=\"1\" col=\"2\" displaytype=\"decoratetext\" cssclass=\"grd_WF_CellOrderDataWhite\" text=\"bind:ORD_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "352", "720", "16", null, null, this);
            obj.set_taborder("15");
            obj.set_text("16");
            obj.set_cssclass("sta_GUIDE_Area");
            obj.set_visible("false");
            obj.style.set_background("tomato");
            this.addChild(obj.name, obj);

            obj = new Div("div_main", "absolute", "0", "368", null, "500", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "16", "0", null, "500", "16", null, this.div_main);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_main");
            obj.set_nodatatext("No Data");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"37\" band=\"head\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"상품명\"/><Cell col=\"1\" rowspan=\"2\"><Cell displaytype=\"image\" text=\"Images::img_WF_CellDayText.png\"/><Cell row=\"1\" displaytype=\"image\" text=\"Images::img_WF_CellNextText.png\"/></Cell><Cell col=\"2\" rowspan=\"2\" text=\"발주&#13;&#10;수량\"/><Cell col=\"3\" rowspan=\"2\" text=\"입수\"/><Cell col=\"4\" rowspan=\"2\" text=\"전일&#13;&#10;판매\"/><Cell col=\"5\" rowspan=\"2\" text=\"주간&#13;&#10;평균\"/><Cell col=\"6\" rowspan=\"2\" text=\"운영&#13;&#10;재고\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" style=\"align:left middle;padding:0 0 0 16;\" text=\"bind:GDS_NM\" wordwrap=\"char\"/><Cell col=\"1\" rowspan=\"2\"><Cell displaytype=\"image\" style=\"padding:0 0 0 0;\" text=\"bind:ICO_EVT\"/><Cell row=\"1\" displaytype=\"image\" style=\"padding:0 0 0 0;\" text=\"bind:ICO_EVT_NEXT\"/></Cell><Cell col=\"2\" rowspan=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"integer\" style=\"align:center;background:bind:STR_ORD_CELL_BG;background2:bind:STR_ORD_CELL_BG;color:bind:ORD_QTY_COLOR;color2:bind:ORD_QTY_COLOR;selectbackground:bind:STR_ORD_CELL_BG;selectcolor:bind:ORD_QTY_COLOR;\" text=\"bind:ORD_QTY\" mask=\"bind:ORD_QTY_MASK\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ORD_ACQ_QTY\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:PRE_SALE_QTY\"/><Cell col=\"5\" rowspan=\"2\" expr=\"expr:PRE_SALE_QTY.length == 0 ? &quot;&quot; : SAL_AVG\"/><Cell col=\"6\" rowspan=\"2\" style=\"background:#f2f2f2ff;background2:#f2f2f2ff;\" text=\"bind:NSTCK_QTY\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_head", "absolute", "16", "368", "688", "77", null, null, this);
            obj.set_taborder("18");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"37\" band=\"head\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"상품명\"/><Cell col=\"1\" rowspan=\"2\"><Cell displaytype=\"image\" text=\"Images::img_WF_CellDayText.png\"/><Cell row=\"1\" displaytype=\"image\" text=\"Images::img_WF_CellNextText.png\"/></Cell><Cell col=\"2\" rowspan=\"2\" text=\"발주&#13;&#10;수량\"/><Cell col=\"3\" rowspan=\"2\" text=\"입수\"/><Cell col=\"4\" rowspan=\"2\" text=\"전일&#13;&#10;판매\"/><Cell col=\"5\" rowspan=\"2\" text=\"주간&#13;&#10;평균\"/><Cell col=\"6\" rowspan=\"2\" text=\"운영&#13;&#10;재고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "584", "500", "120", "50", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Button00");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 212, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div02");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 500, this.div_main,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("Div00");

            	}
            );
            this.div_main.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 720, 1008, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전체발주");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_cond.cal_ord_dt","value","ds_cond","ORD_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_cond.edt_cate","value","ds_cond","CATE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_cond.edt_sch_text","value","ds_cond","SCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_86602_NMORGO010.xfdl", function() {
        /**********************************************************************************************
         * 01. 업무구분        : 전체 발주
         * 02. 화면            : NMORGO010.xfdl
         * 03. 화면설명        : 전체 발주
         * 04. 관련화면/서비스 :
         * 05. 수정이력        :
         **********************************************************************************************
         *  수정일     이  름   	사유
         **********************************************************************************************
         *  2019-01-10       최초작성
         ***********************************************************************************************/
         
         /*******************************************************************************
         *	공통 라이브러리 Include 영역
         *******************************************************************************/

        /*******************************************************************************
         *	Form 전역변수 영역
         *******************************************************************************/
        this.sORD_TP = "301";// 모바일발주(301: 전체발주, 302: 단품발주, 303: 발주수정, 304:대체일발주, 305: 소모품발주, 306: 결품발주)

        this.basicDt = "";

        this.SCH_CO_CD    = "";
        this.SCH_ORG_CD   = "";
        this.SCH_ORD_DT   = "";
        this.SCH_CATE_CD  = "";
        this.SCH_CHK_ALL  = "1";

        this.CATE_DIRECTION = "NEXT"; 
        this.ordQtyOk = true; 

        this.LOAN_AMT     = 0; // 발주가능금액
        this.AUTO_ORD_AMT = 0; // 자동발주예정금액
        this.ORD_AMT      = 0; // 총발주금액

        this.CALLBACK1 = "N";
        this.CALLBACK2 = "N";
        this.CALLBACK3 = "N";
        this.CALLBACK4 = "N";

        this.ORD_QTY_CELL = -1;
        this.USER_ALL_CHK = "Y";// 모바일에서는 전체선택 체크 기능이 없기에 전체선택을 한걸로 진행한다.

        this.arrowKey       = false;

        /*******************************************************************************
         *	Form Event 영역
         *******************************************************************************/
        this.form_onload = function(obj,e)
        {
        // 	/** 공통 OnLoad 이벤트 **/
        // 	this.gfn_onloadForm(obj, e);
        // 	
        // 	this.fn_init();

        	this.div_main.grd_main.setOffsetHeight(3388);
        	this.div_main.setOffsetHeight(3388);
        	this.Button00.setOffsetTop(368+3388);
        	this.resetScroll();
        	this.div_main.grd_main.setCellPos(2);
        	this.div_main.grd_main.showEditor(true);
        };

        // * 필수함수
        this.form_onpostload = function()
        {
        	this.fn_initForm();
        };

        // * 필수함수
        this.fn_initForm = function()
        {
        	/* top 및 bottom 영역 설정 */
        	var oConfig = 	{
        						sTitle      : this.gfn_getMenuName()
        					,	aTop        : [this.BTN_TOP_ID.back, this.BTN_TOP_ID.weather, this.BTN_TOP_ID.menu, this.BTN_TOP_ID.push]
        					,   aBottom 	: [this.BTN_ID.save		 ]
        					,   aBottomText	: ["발주등록"	  		 ]
        					};
        				
        	this.gfn_setTopBottom(this, oConfig);
        };

        // 상단영역 기능버튼 클릭 시 호출되는 함수
        this.fn_executeTopButton = function(strBtnType)
        {
        	trace("fn_executeTopButton strBtnType : " + strBtnType);
        };
         
        // 업무화면 공통버튼 클릭 시 호출되는 함수
        this.fn_executeMainButton = function(strBtnType)
        {
        	switch(strBtnType)
        	{
        		case this.BTN_ID.save :
        			this.fn_save();
        			break;
        	}
        };

        /*******************************************************************************
         *	Form 공통 Function 영역
         *******************************************************************************/
        // Form 내 Transaction 공통 Callback 함수
        this.fn_callback = function(strSvcId,nErrorCode,strErrorMsg)
        {
        	if (nErrorCode < 0) {
        		// 에러발생
        //		NXCore.alert(strErrorMsg);
        		return;
        	}

        	switch (strSvcId)
        	{
        		case "cateMstList":
        			// 첫번째 Category Setting
        			if( this.ds_cate_mst.findRow("CATE_CD",this.ds_cond.getColumn(0,"CATE_CD")) < 0 ) {
        				this.ds_cond.set_enableevent(false);
        				this.ds_cond.setColumn(0,"CATE_CD",this.ds_cate_mst.getColumn(0,"CATE_CD"));
        				this.ds_cond.setColumn(0,"CATE_NM",this.ds_cate_mst.getColumn(0,"CATE_NM"));
        				this.ds_cond.set_enableevent(true);
        			}
        			
        // 			this.ds_cond.set_enableevent(false);
        // 			this.ds_cond.setColumn(0,"CATE_CD",this.ds_cate_mst.getColumn(0,"CATE_CD"));
        // 			this.ds_cond.setColumn(0,"CATE_NM",this.ds_cate_mst.getColumn(0,"CATE_NM"));
        // 			this.ds_cond.set_enableevent(true);
        			
        			// 초기 자동 조회
        			if( !NXCore.isEmpty(this.ds_cond.getColumn(0,"ORG_CD")) ) {
        				var e = new nexacro.ClickEventInfo();
        				this.fn_read("", e, "R", "A");
        			}
        			break;
        		
        		case "mainList" :
        //			@Deprecated(모바일 미사용)
        // 			if( this.ds_dtl01.getColID(0) == "dummy" && this.ds_main.rowcount > 0 ) {
        // 				this.ds_dtl01.copyData(this.ds_main);
        // 				this.ds_dtl01.clearData();
        // 				this.ds_dtl01.addRow();
        // 				
        // 				var e = new nexacro.DSRowPosChangeEventInfo();
        // 					e.newrow = this.ds_main.rowposition;
        // 				this.ds_main_onrowposchanged(this.ds_main, e);
        // 			}
        // 						
        // 			this.div_main.grd_main.set_formats("<Formats>" + this.div_main.grd_main.orgformat + "</Formats>"); // Column 폭조정한것 원위치.
        	
        			// 전일자 매출 / 주간 매출 초기세팅
        //			@Deprecated(모바일 미사용 - 전일/주간 구분 없이 전일만 존재하기에 미사용)
        // 			if(!application.getPrivateProfile("sale_pre_week")
        // 				|| application.getPrivateProfile("sale_pre_week") == "pre"){
        // 				this.div_cond_btn_sale_pre_onclick();
        // 			}else{
        // 				this.div_cond_btn_sale_week_onclick();
        // 			}
        			
        /*			
        			if( this.div_cond.btn_sale_pre.enable == false ) {
        				this.div_cond_btn_sale_pre_onclick();
        			}
        			else {
        				this.div_cond_btn_sale_week_onclick();
        			}
        */
        			
        			this.CALLBACK1 = "Y";
        			this.fn_SearchEnd();
        			this.gfn_fullScroll(this,this.div_main,this.div_main.grd_main,this.grd_head);
        			
        			this.div_main.grd_main.setFocus();
        			this.ds_main.set_rowposition(0);
        			this.div_main.grd_main.selectRow(0);
        			this.div_main.grd_main.setCellPos(this.ORD_QTY_CELL);
        			break;
        			
        		case "ordSum":
        			this.CALLBACK2 = "Y";
        			this.fn_SearchEnd();
        			break;
        			
        		case "ordPossList":
        			this.CALLBACK3 = "Y";
        			this.fn_SearchEnd();
        			break;
        			
        		case "ordPossList_re" :
        			this.CALLBACK3 = "Y";
        			this.fn_SearchEnd_re();
        			break;
        			
        		case "headDt":
        			this.CALLBACK4 = "Y";
        			this.fn_SearchEnd();
        			break;
        			
        		case "mainSave" :
        			// NXCore.alert("Com.C202");  // 저장되었습니다.
        			
        			if( !NXCore.isEmpty(this.ds_cond.getColumn(0,"SCH_TEXT")) ) {
        				this.ds_cond.set_enableevent(false);
        				this.ds_cond.setColumn(0,"SCH_TEXT","");
        				this.ds_cond.set_enableevent(true);
        				var e = new nexacro.ClickEventInfo();
        				this.fn_read("", e, "R", "A");
        			}
        			else {
        				if( this.btnSaveClicked == true ) {
        					this.btnSaveClicked = false;
        					var e = new nexacro.ClickEventInfo();
        					this.fn_read("", e, "R", "A");
        				}
        				else {
        					if( this.CATE_DIRECTION == "NEXT" ) {
        						if( this.ds_cate_mst.findRow("CATE_CD",this.SCH_CATE_CD) == this.ds_cate_mst.rowcount -1 ) {
        							var e = new nexacro.ClickEventInfo();
        							this.fn_read("", e, "R", "A");
        						}
        						else {
        							this.btn_cate_next_onclick("",  e);
        						}
        					}
        					else {
        						if( this.ds_cate_mst.findRow("CATE_CD",this.ds_cond.getColumn(0,"CATE_CD")) < 1 ) {
        							var e = new nexacro.ClickEventInfo();
        							this.fn_read("", e, "R", "A");
        						}
        						else {
        							this.btn_cate_next_onclick("",  e);
        						}
        					}
        				}
        			}
        			
        			break;
        			
        		default:
        			break;
        	}
        };

        // Form 내 popup 공통 Callback 함수
        this.fn_callbackPopup = function(strId,value)
        {
        	switch (strId)
        	{
        		case "COMPOPUP010_P07" :
        			if(null == value) {
        				return;
        			}
        			
        			var obj = value;	
        			 
        			var sSelCateCd = obj["pv_CateCd"];

        			var iCateRow = this.ds_cate_mst.findRow("CATE_CD",sSelCateCd);
        			
        			if( iCateRow < 0 ) {
        				NXCore.alert("조회할 수 없는 카테고리가 선택되었습니다.");
        				return;
        			}
        			
        			if( this.fn_mainUpdated() ) {
        				if( NXCore.confirm("Qst.Q008") ) {  // 변경된 데이터가 있습니다. 진행하시겠습니까?
        					this.ds_main.applyChange();
        				}
        				else {
        					return;
        				}
        			}
        			
        			this.ds_cond.set_enableevent(false);
        			this.ds_cond.setColumn(0,"CATE_CD",sSelCateCd);
        			this.ds_cond.setColumn(0,"CATE_NM",this.ds_cate_mst.getColumn(iCateRow,"CATE_NM"));		
        			this.ds_cond.setColumn(0,"SCH_TEXT","");
        			this.ds_cond.set_enableevent(true);
        			
        			// 재조회
        			var e = new nexacro.ClickEventInfo();
        			this.fn_read("", e, "R", "A");
        			break;
        		case "COMPOPUP010_P09" :
        			var obj = value;
        			
        			var sIsSave       = obj["pv_isSave"];
        			var sStrOrdEnblYn = obj["pv_strOrdEnblYn"];
        			var sPluCd        = obj["pv_pluCd"];
        			var sNowStk       = obj["pv_nowStck"];
        			
        			var iOldNstk = nexacro.toNumber(this.ds_main.getColumn(this.ds_main.rowposition,"NSTCK_QTY"),0);
        			var iOldStk  = nexacro.toNumber(this.ds_main.getColumn(this.ds_main.rowposition,"NOW_STK"),0);
        			var iNowStk  = nexacro.toNumber(obj["pv_nowStck"],0);
        			
        			var iGap = iNowStk - iOldStk;
        			if( iGap != 0 ) {
        				// 조회 후 데이터 미존재시 컬럼도 미존재하여 addColumn 처리함.
        				var sCol_1 = this.ds_main.getColumnInfo("NOW_STK");
        				var sCol_2 = this.ds_main.getColumnInfo("NSTCK_QTY");
        				if( NXCore.isEmpty(sCol_1) ) this.ds_main.addColumn( "NOW_STK", "BIGDECIMAL", 80 );
        				if( NXCore.isEmpty(sCol_2) ) this.ds_main.addColumn( "NSTCK_QTY", "BIGDECIMAL", 80 );
        			
        				this.ds_main.setColumn(this.ds_main.rowposition,"NOW_STK",  iOldStk+iGap);
        				this.ds_main.setColumn(this.ds_main.rowposition,"NSTCK_QTY",iOldNstk+iGap);
        			}
        			break;
        	}
        };

        /**
         * 메뉴 이동시 미저장 여부 확인 
         * @param 
         * @return 
         */
        this.fn_checkFormClose = function()
        {
        	/** 필수 정의 함수 **/
        	if( this.fn_mainUpdated() ) {
        		return NXCore.confirm("Qst.Q006");//아직 저장하지 않은 작업 중인 데이터가 존재합니다. 계속 진행하시겠습니까? 
            }
            
        	return true;
        };

        /*******************************************************************************
         *	Component Event 영역
         *******************************************************************************/
        // Grid click
        this.div_main_grd_main_oncellclick = function(obj,e)
        {
        	if( e.row < 0 ) return;
        	
        	if( e.cell >= 0 && e.cell <= 1 ) {
                // 상품 팝업 출력
                var paramCoCd  = this.ds_main.getColumn(e.row,"CO_CD");
                var paramOrgCd = this.ds_main.getColumn(e.row,"ORG_CD");
                var paramOrdDt = this.ds_main.getColumn(e.row,"ORD_DT");
                var paramPluCd = this.ds_main.getColumn(e.row,"PLU_CD");
                
                var objData = {
                                popupid     : "COMPOPUP010_P09"                     // callback id
                              , sFormUrl    : "POPUP::COMPOPUP010_P09.xfdl"         // formurl
        // 					  , left        : 16
        // 					  , top         : 20
        // 					  , right       : 16
        // 					  , bottom      : 0
                              , oArgs       : {
                                                paramCoCd  : paramCoCd
                                               ,paramOrgCd : paramOrgCd
                                               ,paramOrdDt : paramOrdDt
                                               ,paramPluCd : paramPluCd
                                              } // argument             
                              };    

                this.gfn_showModal(this, objData);
        	} else if( e.cell == 2 ) {
        		obj.setCellPos(this.ds_main.getColumn(e.row,"ORD_QTY_COLOR"));
        	}
        }

        // Grid dblclick
        this.div_main_grd_main_oncelldblclick = function(obj,e)
        {
        	if( e.row < 0 ) return;
        	
        	// 입수수량 더블클릭하면 발주수량을 +입수수량만큼 해준다~
        	var sColId = nexacro.trim(obj.getCellProperty("Body",e.cell,"text").substr(5).toUpperCase())+"";
        	if( sColId == "ORD_ACQ_QTY" ) {
        		if( this.ds_main.getColumn(e.row,"STR_ORD_ENBL_YN") == "1" ) {
        			var iVal = nexacro.toNumber(this.ds_main.getColumn(e.row,"ORD_QTY"),0)+nexacro.toNumber(this.ds_main.getColumn(e.row,"ORD_ACQ_QTY"),0);
        			this.ds_main.setColumn(e.row,"ORD_QTY",iVal);
        			return;
        		}
        	}
        }

        this.iFindRow = 0;
        // Grid Enter
        this.div_main_grd_main_onenterdown = function(obj,e)
        {
        //	if( this.ordQtyOk == true ) {
        	
        // 		this.ENTER_IX++;
        // 		
        // 		if( this.ENTER_IX%2 == 0 ){
        // 			return;
        // 		}
        // 		
        // 		obj.set_enableevent(false);
        // 		var bNextExist = false;
        // 		
        // 		var iFindRow = this.ds_main.findRowExpr("STR_ORD_ENBL_YN=='1' && currow>" + e.row);
        // 
        // 		if( iFindRow > -1 ) {
        // 			this.ds_main.set_rowposition(iFindRow);
        // 			bNextExist = true;
        // 		}
        // 		
        // 		this.div_main.grd_main.setCellPos(e.cell);
        // 		if( !bNextExist ) {
        // 			if( !this.fn_mainUpdated() ) {
        // 				var sSchTxt = this.ds_cond.getColumn(0,"SCH_TEXT");
        // 				if( NXCore.isEmpty(sSchTxt) ) {
        // 					this.btn_cate_next_onclick();
        // 				}
        // 				else {
        // 					this.ds_cond.setColumn(0,"SCH_TEXT","");
        // 				}
        // 			}
        // 			else {
        // 				this.CATE_DIRECTION = "NEXT";
        // 				var e = new nexacro.ClickEventInfo();
        // 				this.fn_save("", e, "S", "A");
        // 			}
        // 		}
        // 		obj.set_enableevent(true);
        // 	}
        	
        	this.ds_main.set_rowposition(this.iFindRow);
        	this.div_main.grd_main.setCellPos(e.cell);
        	this.ordQtyOk = true;
        	this.iFindRow++;
        }

        // 좌우 화살표키로 CELL 영역 못벗어나게 하기
        this.div_main_grd_main_onkeydown = function(obj,e)
        {
        	if( (e.keycode == 37 || e.keycode == 39) && this.div_main.grd_main.getCellPos() == this.ORD_QTY_CELL ) {  // 37 <      39 >
        		this.div_main.grd_main.set_selecttype("cell");
        		this.arrowKey = true;
        	}
        	
        	// 발주불가상품만 있다면.. 다음카테고리로 이동.
        	if( e.keycode == 13 ) {
        		if( this.ds_main.findRow("STR_ORD_ENBL_YN","1") < 0 ) {
        			this.btn_cate_next_onclick();
        			return;
        		}
        	}
        	
        	// 발주불가에서 엔터치면 발주가능row로 이동
        	if( e.keycode == 13 && this.ds_main.getColumn(this.ds_main.rowposition,"STR_ORD_ENBL_YN")=="0" ) {
        	
        		this.ENTER_IX = 1;
        		
        		var iFindRow = this.ds_main.findRowExpr("STR_ORD_ENBL_YN=='1' && currow>" + this.ds_main.rowposition);
        		
        		if( iFindRow > -1 ) {
        			this.ds_main.set_rowposition(iFindRow);
        		}
        		else {
        			this.ds_main.set_rowposition(this.ds_main.getCaseMax("STR_ORD_ENBL_YN=='1'","rowidx"));
        		}
        		
        		this.div_main.grd_main.setCellPos(this.ORD_QTY_CELL);
        		return;
        	}
        	
        	// 발주수량cell이 아닌곳에서 엔터치면 다음row 발주수량cell로 이동
        	if( e.keycode == 13 && this.div_main.grd_main.getCellPos() != this.ORD_QTY_CELL ) {
        		if( this.ds_main.findRowExpr("STR_ORD_ENBL_YN=='1' && currow>" + this.ds_main.rowposition) < 0 ) {
        			this.ENTER_IX = 1;
        			this.div_main.grd_main.setCellPos(this.ORD_QTY_CELL);
        		}
        		else {
        			var e = new nexacro.GridEditEventInfo();
        				e.row  = this.ds_main.rowposition;
        				e.cell = this.ORD_QTY_CELL;
        			this.div_main.grd_main_onenterdown(this.div_main.grd_main, e);
        		}
        	}
        	
        }

        this.div_main_grd_main_onkeyup = function(obj,e)
        {
        	if( (e.keycode == 37 || e.keycode == 39) ) {
        		this.arrowKey = false;
        		this.div_main.grd_main.set_selecttype("row");
        	}
        	//if( e.keycode == 13 ) {
        		this.ENTER_IX = 0;
        	//}
        	if( e.keycode == 13 ) {
        		this.div_main.grd_main.showEditor(true);
        	}
        }

        this.div_main_grd_main_onselectchanged = function(obj,e)
        {
        	this.div_main.grd_main.set_enableevent(false);
        	if( e.oldcell != e.cell && this.arrowKey == true ){
        		obj.setCellPos(e.oldcell);
        		this.arrowKey = false;
        	}
        	this.div_main.grd_main.set_enableevent(true);
        }

        // Item 이동(이전)
        this.btn_cate_prev_onclick = function(obj,e)
        {
        	this.CATE_DIRECTION = "PREV";
        	var iCateRow = this.ds_cate_mst.findRow("CATE_CD",this.ds_cond.getColumn(0,"CATE_CD"));
        	if( iCateRow < 1 ) {
        		NXCore.alert("이전 카테고리가 없습니다.");
        		return;
        	}

        	if( this.USER_ALL_CHK == "N" ) {
        		this.ds_cond.set_enableevent(false);
        		this.ds_cond.setColumn(0,"CHK_ALL","0");
        		this.ds_cond.set_enableevent(true);
        	}
        	
        	iCateRow--;	
        	this.ds_cond.setColumn(0,"CATE_CD",this.ds_cate_mst.getColumn(iCateRow,"CATE_CD"));
        }

        // Item 이동(이후)
        this.btn_cate_next_onclick = function(obj,e)
        {
        	this.CATE_DIRECTION = "NEXT";
        	var iCateRow = this.ds_cate_mst.findRow("CATE_CD",this.ds_cond.getColumn(0,"CATE_CD"));
        	if( iCateRow >= (this.ds_cate_mst.rowcount-1) ) {
        		NXCore.alert("마지막 상품입니다.");
        		return;
        	}
        	
        	if( this.USER_ALL_CHK == "N" ) {
        		this.ds_cond.set_enableevent(false);
        		this.ds_cond.setColumn(0,"CHK_ALL","0");
        		this.ds_cond.set_enableevent(true);
        	}

        	iCateRow++;
        	this.ds_cond.setColumn(0,"CATE_CD",this.ds_cate_mst.getColumn(iCateRow,"CATE_CD"));
        }

        this.div_main_grd_main_onheadclick = function(obj,e)
        {
        	NXGrid.sortOrCheck(obj, e.cell);
        }

        /*******************************************************************************
         *	Dataset Event 영역
         *******************************************************************************/
        // ds_main
        this.ds_main_cancolumnchange = function(obj,e)
        {
        	if( e.columnid.toUpperCase()  == "ORD_QTY" ) {
        		if( nexacro.toNumber(e.newvalue,0) < 0 ) {
        			return false;
        		}
        		
        		if( nexacro.toNumber(e.oldvalue,0) == nexacro.toNumber(e.newvalue,0) ) {
        			return false;
        		}
        		
        		// 입수단위에 따른 주문량 검증체크
        		if( nexacro.toNumber(e.newvalue,0) % nexacro.toNumber(obj.getColumn(e.row,"ORD_ACQ_QTY"),0) != 0 ) {
        			NXCore.alert("Err.E094",obj.getColumn(e.row,"ORD_ACQ_QTY"));  // 최소 입수수량을 확인하여 주십시요.
        			this.ordQtyOk = false;
        			return false;
        		}
        		
        		// 최소발주수량 체크
        		if( nexacro.toNumber(e.newvalue,0) != 0
        		    &&
        		    nexacro.toNumber(e.newvalue,0) < nexacro.toNumber(obj.getColumn(e.row,"LOW_ORD_QTY"),0) 
        		) {
        			NXCore.alert("최소발주수량(" + obj.getColumn(e.row,"LOW_ORD_QTY") + ")보다 작습니다.");
        			this.ordQtyOk = false;
        			return false;
        		}
        		
        		// 최대발주수량 체크
        		if( nexacro.toNumber(e.newvalue,0) > nexacro.toNumber(obj.getColumn(e.row,"MAX_ORD_QTY"),0) ) {
        			NXCore.alert("최대발주수량(" + obj.getColumn(e.row,"MAX_ORD_QTY") + ")을(를) 초과합니다.");
        			this.ordQtyOk = false;
        			return false;
        		}
        		this.ordQtyOk = true;
        	}
        	return true;
        }

        this.ds_main_oncolumnchanged = function(obj,e)
        {
        	if( e.row < 0 ) return;
        	
        	if( e.columnid.toUpperCase() == "ORD_QTY" ) {
        		
        		// 10배이상 경고
        		if( nexacro.toNumber(e.newvalue,0) >= nexacro.toNumber(obj.getColumn(e.row,"ORD_ACQ_QTY"),0) * 10 ) {
        			NXCore.alert("발주수량이 입수의 10배이상입니다.\n\n잘못된 입력일 수 있으니 발주수량을 확인하십시요.");
        		}
        		
        		this.ENTER_IX = 0;
        		if( obj.getColumn(e.row,"AUT_ORD_YN_ORG") == "1" ) {
        			// obj.set_enableevent(false);
        			if( nexacro.toNumber(e.newvalue,0) == nexacro.toNumber(obj.getColumn(e.row,"SORD_QTY"),0) ) {
        				obj.setColumn(e.row,"AUT_ORD_YN","1");  // 입력발주수량 = 자동발주수량 이면 자동발주여부 '1'
        				obj.setColumn(e.row,"ORD_QTY_COLOR","#25AD16");
        			}
        			else {
        				obj.setColumn(e.row,"AUT_ORD_YN","0");  // 입력발주수량!= 자동발주수량 이면 자동발주여부 '0'
        				obj.setColumn(e.row,"ORD_QTY_COLOR","#000000");
        			}
        			// obj.set_enableevent(true);
        		}
        		else {
        			if( obj.getColumn(e.row,"AUT_ORD_TARGET_YN") == "1" ) {
        				if( nexacro.toNumber(e.newvalue,0) == nexacro.toNumber(obj.getColumn(e.row,"SORD_QTY"),0) ) {
        					obj.setColumn(e.row,"ORD_QTY_COLOR","#25AD16");
        				}
        				else {
        					obj.setColumn(e.row,"ORD_QTY_COLOR","#000000");
        				}
        			}
        		}
        		
        		if( nexacro.toNumber(e.newvalue,0) == nexacro.toNumber(obj.getColumn(e.row,"ORG_ORD_QTY"),0) ) {
        			if( obj.getColumn(e.row,"AUT_ORD_TARGET_YN") == "1" ) {
        				obj.setColumn(e.row,"ORD_QTY_MASK","###,##0");
        			}
        			else {
        				obj.setColumn(e.row,"ORD_QTY_MASK","###,###");
        			}
        			obj.setColumn(e.row,"STR_ORD_CELL_BG","#fefcb6ff");
        		}
        		else {
        			obj.setColumn(e.row,"ORD_QTY_MASK","");
        			obj.setColumn(e.row,"STR_ORD_CELL_BG","#fefcb6ff URL('theme://images/img_WF_CellInput.png')");  // img_WF_Essential.png
        		}
        		
        		this.fn_OrdInfoCalc();  // 하단정보 표기
        	}
        }

        // ds_cond
        this.ds_cond_cancolumnchange = function(obj,e)
        {
        	if( e.columnid == "ORD_DT" ) {  // 발주일자는 기본 발주일자 포함 미래일자만 변경가능
        		if( nexacro.toNumber(e.newvalue,0) < nexacro.toNumber(this.basicDt,0) ) {
        			return false;
        		}
        	}
        	
        	if( this.fn_mainUpdated() ) {
        		if( e.columnid == "CATE_CD" ) {
        			var isConfirm = NXCore.confirm("작업 중인 자료가 있습니다.\n저장하시겠습니까?");
        			if(isConfirm) {
        				var e = new nexacro.ClickEventInfo();
        				this.fn_save("", e, "S", "A");
        				return false;
        			} else {
        				this.ds_main.applyChange();
         				return true;
        			}
        //			@Deprecated(모바일 미사용)
        // 			//화면 크기를 가지고 와서 nLeft랑 nTop이랑 계산한다.
        // 			var nFrameWidth  = application.mainframe.width;
        // 			var nFrameHeight = application.mainframe.height;
        // 			
        // 			var nWidth  = 320;
        // 			var nHeight = 100;
        // 			
        // 			var nLeft = nexacro.toNumber(nFrameWidth / 2 + nWidth / 2);
        // 			var nTop  = nexacro.toNumber(nFrameHeight/ 2);
        //             
        // 			var cf = new ChildFrame();
        // 			cf.init("cf_modal", "absolute", nLeft, nTop, nWidth, nHeight);
        // 			cf.set_formurl("POPUP::COMPOPUP010_P28.xfdl");
        // 			cf.set_openalign("center middle");
        // 
        // 			var ret = system.showModalWindow(cf, "cf_modal", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this);
        // 			
        // 			if( ret=="1" ) {
        // 				var e = new nexacro.ClickEventInfo();
        // 				this.fn_save("", e, "S", "A");
        // 				return false;
        // 			}
        // 			else {
        // 				this.ds_main.applyChange();
        //  				return true;
        // 			}
        		} else {
        			if( NXCore.confirm("Qst.Q008") ) {  // 변경된 데이터가 있습니다. 진행하시겠습니까?
        				this.ds_main.applyChange();
        				return true;
        			} else {
        				return false;
        			}
        		}
        	}
        	return true;
        }

        // 전체선택 변경시 재조회
        this.orgCdNm = "";
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if( e.columnid == "ORG_CD" && (isNaN(e.newvalue) || new String(e.newvalue).length != 5) ) {
        		this.fn_clearData();
        		this.ds_cond.set_enableevent(false);
        		this.ds_cond.setColumn(0,"CATE_CD","");
        		this.ds_cond.setColumn(0,"CATE_NM","");
        		this.ds_cond.set_enableevent(true);
        		this.orgCdNm = "";
        		return;
        	}
        	
        // 	if( e.columnid == "ORG_NM" ) {
        // 		
        // 		var sOrgCd = this.ds_cond.getColumn(0,"ORG_CD");
        // 		var sOrgNm = this.ds_cond.getColumn(0,"ORG_NM");
        // 		var sOrgCdNm = sOrgCd + "_" + sOrgNm;
        // 		
        // 		if( sOrgNm == "" ) {
        // 			this.fn_clearData();
        // 			this.orgCdNm = "";
        // 			return;
        // 		}
        // 		
        // 		if( this.orgCdNm != sOrgCdNm ) {
        // 			this.ds_cond.set_enableevent(false);
        // 			
        // 			this.ds_cond.setColumn(0,"ORD_DT",  this.basicDt);
        // 			this.ds_cond.setColumn(0,"SCH_TEXT","");
        // 			
        // 			this.fn_cate_mst();  // Category Master
        // 			
        // 			this.ds_cond.setColumn(0,"CATE_CD",this.ds_cate_mst.getColumn(0,"CATE_CD"));
        // 			this.ds_cond.setColumn(0,"CATE_NM",this.ds_cate_mst.getColumn(0,"CATE_NM"));
        // 			
        // 			this.ds_cond.set_enableevent(true);
        // 		}
        // 		this.orgCdNm = sOrgCdNm;
        // 	}

        	if( e.columnid == "ORD_DT" ) {
        		if( !NXCore.isEmpty(this.ds_cond.getColumn(0,"ORG_CD")) ) {
        			this.fn_cate_mst();  // Category Master  다시 가져오기
        			return;
        		}
        	}
        	
        	if( e.columnid == "CATE_CD" ) {
        		this.ds_cond.set_enableevent(false);
        		this.ds_cond.setColumn(0,"SCH_TEXT","");
        		this.ds_cond.setColumn(0,"CATE_NM",this.ds_cate_mst.getColumn(this.ds_cate_mst.findRow("CATE_CD",e.newvalue),"CATE_NM"));
        		this.ds_cond.set_enableevent(true);
        	}
        	if( e.columnid == "ORG_NM" || e.columnid == "ORD_DT" || e.columnid == "CATE_CD" || e.columnid == "CHK_ALL" || e.columnid == "SCH_TEXT" ) {
        		var b = (e.columnid == "ORD_DT") ? new Button() : "";
        		var e = new nexacro.ClickEventInfo();
        		
        		this.fn_read(b, e, "R", "A");
        	}
        }

        this.fn_clearData = function()
        {
        	this.ds_main.clearData();
        	this.ds_cate_mst.clearData();
        	this.ds_dtl01.copyData(this.ds_dummy);
        	this.ds_ord_info.clearData();
        	this.ds_poss_info.clearData();
        	this.ds_shop_info.clearData();
        	this.ds_ord_header.clearData();
        	
        // 	this.div_info.edt_list_ord_cnt.set_value("");
        // 	this.div_info.msk_sup_amt.set_value("");
        // 	this.div_info.msk_loan_amt.set_value("");
        // 	this.div_info.msk_auto_ord_amt.set_value("");
        // 	this.div_info.msk_ord_amt.set_value("");
        	
        	//채권잔액 초기화 및 화면 invisible
        	this.ds_ord_header_title.setColumn(0, "LOAN_AMT_TITLE", "발주 가능 금액");
        }

        // // 	@Deprecated(모바일 미사용)
        // this.div_cond_btn_sale_pre_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	NXGrid.unsort(this.div_main.grd_main);
        // 	
        // 	this.div_main.grd_main.setCellProperty("Head", 8,"text","전일\n판매");
        // 	this.div_main.grd_main.setCellProperty("Body", 8,"text","bind:PRE_SALE_QTY");
        // 	this.div_cond.btn_sale_pre.set_enable(false);
        // 	this.div_cond.btn_sale_week.set_enable(true);
        // 	
        // 	application.setPrivateProfile("sale_pre_week","pre"); // 쿠키처럼 이전 값 저장
        // }
        // 
        // // 	@Deprecated(모바일 미사용)
        // this.div_cond_btn_sale_week_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	NXGrid.unsort(this.div_main.grd_main);
        // 	
        // 	this.div_main.grd_main.setCellProperty("Head", 8,"text","주간\n판매");
        // 	this.div_main.grd_main.setCellProperty("Body", 8,"text","bind:SAL_SUM");
        // 	this.div_cond.btn_sale_week.set_enable(false);
        // 	this.div_cond.btn_sale_pre.set_enable(true);
        // 	
        // 	application.setPrivateProfile("sale_pre_week","week"); // 쿠키처럼 이전 값 저장
        // }

        this.div_cond_edt_cate_oneditclick = function(obj,e)
        {
        	this.div_cond_btn_cate_search_onclick();
        }

        this.div_cond_btn_cate_search_onclick = function(obj,e)
        {
        	if(!this.fn_checkValidation()) return;
        	
        	var paramCoCd   = this.ds_cond.getColumn(0,"CO_CD");
            var paramOrgCd  = this.ds_cond.getColumn(0,"ORG_CD");
            var paramOrdDt  = this.ds_cond.getColumn(0,"ORD_DT");
            var paramCateCd = this.ds_cond.getColumn(0,"CATE_CD");
            var paramType   = "01";
            var paramAllYn  = this.ds_cond.getColumn(0,"CHK_ALL");
            
            var objData = {
                            popupid     : "COMPOPUP010_P07"
                          , sFormUrl    : "POPUP::COMPOPUP010_P07.xfdl" 
        //                   , left        : 16
        //                   , top         : 20
        //                   , right       : 16
        //                   , bottom      : 0
                          , oArgs       : {
                                             paramCoCd   : paramCoCd
                                            ,paramOrgCd  : paramOrgCd
                                            ,paramOrdDt  : paramOrdDt
                                            ,paramAllYn  : paramAllYn
                                            ,paramCateCd : paramCateCd
                                            ,paramType   : paramType
                                          }
                          };    

            this.gfn_showModal(this, objData);
        }

        /*******************************************************************************
         *	사용자 정의 Function 영역
         *******************************************************************************/
        //7월 아이스크림 행사대응 소스인데 삭제할지는 확인필요. 차세대점포JHJ
        this.selectGdsEvtInfo = function(){

        	var tx = new NXTransaction(this);
        	tx.addOutDataset("ds_gds_evt_info", "ds_gds_evt_info");
        	tx.setCallback("fn_callback");
        	tx.setService("nm/or/go010/selectGdsEvtInfoList.do");
        	tx.execute("selectGdsEvtInfo");
        }

        this.fn_init = function ()
        {
        	this.fn_setDataset(obj);     // DataSet 에 초기 Data Load
        	this.fn_setDefaultValue();   // 기본값 설정
        }

        // DataSet 에 초기데이터 Load
        this.fn_setDataset = function(obj) {

        	this.ds_cond.set_enableevent(false);	
        	this.ds_cond.setColumn(0, "CO_CD"   , application.gv_compCd);  // Set comp_cd
        	this.ds_cond.setColumn(0, "ORG_CD"  , NXCore.getBizLoc().code);
        	this.ds_cond.setColumn(0, "CHK_ALL" , this.SCH_CHK_ALL);
        	this.ds_cond.setColumn(0, "CATE_ALL", "1");
        	this.ds_cond.setColumn(0, "SCH_TEXT", "");
        	
        	if( this.ds_cond.getColumn(0,"ORG_CD") == undefined ) {
        		this.ds_cond.setColumn(0,"ORG_CD","");
        		this.ds_cond.setColumn(0,"ORG_NM","");
        	}
        	
        	var dt = new NXDate();
        		dt.addDate(0);
        	
        	// 10시 이전이면 오늘날짜.. 이후이면 내일날짜 Setting
        	var sNowHH = dt.toFormatString("HH");
        	if( nexacro.toNumber(sNowHH,0) >= 10 ) {
        		dt.addDate(1);
        	}
        	//this.basicDt = dt.toFormatString();
        	this.basicDt = this.gfn_selectOrdDate();
        	this.ds_cond.setColumn(0,"ORD_DT",this.basicDt);
        	this.ds_cond.setColumn(0,"SCH_TEXT","");
        	this.ds_cond.set_enableevent(true);
        	
        	// Category Master
        //	if( !NXCore.isEmpty(this.ds_cond.getColumn(0,"ORG_CD")) && !NXCore.isEmpty(this.ds_cond.getColumn(0,"ORD_DT")) ) {
        		//Category 조회
        		this.fn_cate_mst();
        //	}
        }

        // 기본값 설정
        this.fn_setDefaultValue = function() {

        	this.ORD_QTY_CELL = NXGrid.getCellFromColID(this.div_main.grd_main,"ORD_QTY");  // 발주수량 Cell	
        	//this.div_cond.cal_ord_dt.setFocus();  // 초기Focus
        }

        // Category Master 조회
        this.fn_cate_mst = function () {
        	
        // 	if( NXCore.isEmpty(this.ds_cond.getColumn(0,"ORG_CD")) ) {
        // 		return;
        // 	}
        	if(!this.fn_checkValidation()) return;
        	
        	this.ds_cate_mst.clearData();
        	var tx = new NXTransaction(this);
        		
        		tx.addInDataset("inDs", "ds_cond:A");
        		tx.addOutDataset("ds_cate_mst", "outDs");
        		
        		tx.setCallback("fn_callback");                  		// CallBack
        		tx.setService("nm/or/go010/selectCateMstList.do");      // Url		
        		tx.execute("cateMstList");
        }

        this.fn_OrdInfoCalc = function() {

        	// 발주품목수 / 전체품목수
        	var sOrdCnt = this.gfn_NumComma(this.ds_main.getCaseCount("ORD_QTY>0")) + "/" + this.gfn_NumComma(this.ds_main.rowcount);
        	
        	this.ds_ord_header.setColumn(0, "ORD_CNT", sOrdCnt);
        	
        	// 발주가능금액
        	var sRowType = Dataset.ROWTYPE_UPDATE;
        	var iNowAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType) + "&& EX_ORD_AMT_YN!='1'", "GDS_COST*ORD_QTY");
        	var iOrgAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType) + "&& EX_ORD_AMT_YN!='1'", "GDS_COST*ORG_ORD_QTY");
        	var iEnblAmt = this.LOAN_AMT - (iNowAmt-iOrgAmt);
        	
        	//일발발주 마이너스 한도일시 증액 조회
        	var iOrdBuffAmt = nexacro.toNumber(this.ds_poss_info.getColumn(0, "ORD_BUFF_AMT"),0)*-1;
        		
        	var bizlocTp = this.ds_poss_info.getColumn(0, "BIZLOC_TP");	
        	if(bizlocTp == "7" ){	
        		this.ds_ord_header_title.setColumn(0, "LOAN_AMT_TITLE", "채권잔액");
        		iEnblAmt = nexacro.toNumber(this.ds_poss_info.getColumn(0,"CREDIT_BAL_AMT"),0);
        	}else{
        		this.ds_ord_header_title.setColumn(0, "LOAN_AMT_TITLE", "발주 가능 금액");	
        	}
        	
        	this.ds_ord_header.setColumn(0, "LOAN_AMT", iEnblAmt);
        	
        	// 총 발주 금액
        	var iNowAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType), "GDS_COST*ORD_QTY");
        	var iOrgAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType), "GDS_COST*ORG_ORD_QTY");
        	
        	this.ds_ord_header.setColumn(0, "ORD_AMT", this.ORD_AMT + (iNowAmt-iOrgAmt));
        	
        	var autoTransOrdAvb = this.ds_poss_info.getColumn(0, "AUTOTRANS_ORD_AVB_FLAG");	
        	var avbLoanAmt      = this.ds_poss_info.getColumn(0, "AVB_LOAN_AMT");
        	//var bizlocTp        = this.ds_poss_info.getColumn(0, "BIZLOC_TP");
        	
        	/*
        	사업장유형(S417) 이 간편입금제(7) 이면    '채권잔액' / CREDIT_BAL_AMT(간편입금제 채권잔액) 으로 표현
        	                      간편입금제(7) 아니면 '발주가능금액' / 발주가능금액 계산값 으로 표현
        	*/
        	if(bizlocTp == "7" && autoTransOrdAvb != "1"){
        		NXCore.alert("최대 채권금액이 초과하여 발주가 불가능합니다.");
        		this.fn_getSelectOrdPoss_re();
        		
        		//return;
        	}
        	
        	//if( iEnblAmt < -50000 && bizlocTp == '1') {
        	if( iEnblAmt < iOrdBuffAmt && (bizlocTp == '1' || bizlocTp == '2')) {
        		NXCore.alert("발주가능금액이 "+this.gfn_NumComma(iOrdBuffAmt)+"원 이하입니다.");
        		this.fn_getSelectOrdPoss_re();
        		//return;
        	}

        }

        this.fn_OrdInfoCalc_re = function() {

        	// 발주품목수 / 전체품목수
        	var sOrdCnt = this.gfn_NumComma(this.ds_main.getCaseCount("ORD_QTY>0")) + "/" + this.gfn_NumComma(this.ds_main.rowcount);
        	
        	this.ds_ord_header.setColumn(0, "ORD_CNT", sOrdCnt);
        	
        	// 발주가능금액
        	var sRowType = Dataset.ROWTYPE_UPDATE;
        	var iNowAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType) + "&& EX_ORD_AMT_YN!='1'", "GDS_COST*ORD_QTY");
        	var iOrgAmt = this.ds_main.getCaseSum("dataset.getRowType(rowidx)==" + nexacro.wrapQuote(sRowType) + "&& EX_ORD_AMT_YN!='1'", "GDS_COST*ORG_ORD_QTY");
        	var iEnblAmt = this.LOAN_AMT - (iNowAmt-iOrgAmt);
        	
        	var bizlocTp = this.ds_poss_info.getColumn(0, "BIZLOC_TP");	
        	if(bizlocTp == "7" ){	
        		this.ds_ord_header_title.setColumn(0, "LOAN_AMT_TITLE", "채권잔액");
        		iEnblAmt = nexacro.toNumber(this.ds_poss_info.getColumn(0,"CREDIT_BAL_AMT"),0);
        	}else{
        		this.ds_ord_header_title.setColumn(0, "LOAN_AMT_TITLE", "발주 가능 금액");	
        	}
        	
        	this.ds_ord_header.setColumn(0, "LOAN_AMT", iEnblAmt);
        }

        this.fn_getSelectOrdPoss = function() {
        	var tx = new NXTransaction(this);

        		tx.addInDataset( "inDs", "ds_cond:A");
        		tx.addOutDataset("ds_poss_info", "outDs");
        		
        		tx.setCallback("fn_callback");
        		tx.setService("ns/cmm/selectOrdPoss.do");
        		tx.execute("ordPossList");
        }

        this.fn_getSelectOrdPoss_re = function() {
        	var tx = new NXTransaction(this);

        		tx.addInDataset( "inDs", "ds_cond:A");
        		tx.addOutDataset("ds_poss_info", "outDs");
        		
        		tx.setCallback("fn_callback");
        		tx.setService("ns/cmm/selectOrdPoss.do");
        		tx.execute("ordPossList_re");
        }

        this.fn_getHeadDt = function() {
        	var tx = new NXTransaction(this);

        		tx.addInDataset( "inDs", "ds_cond:A");
        		tx.addOutDataset("ds_head", "outDs");
        		
        		tx.setCallback("fn_callback");
        		tx.setService("nm/or/go010/headDt.do");
        		tx.execute("headDt");
        }

        this.fn_SearchEnd = function()
        {
        	if( this.CALLBACK1 == "N" || this.CALLBACK2 == "N" || this.CALLBACK3 == "N" || this.CALLBACK4 == "N" ) {
        		return;
        	}
        	
        	// 발주가능금액관리 여부에 따른 발주가능금액 보이기.숨기기
        	if(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1") {
        		this.grd_ordHeader.setFormatColProperty(0,"size",260); 
        		this.grd_ordHeader.setFormatColProperty(1,"size",260);
        		this.grd_ordHeader.setFormatColProperty(2,"size",164);
        	} else {
        		this.grd_ordHeader.setFormatColProperty(0,"size",0); 
        		this.grd_ordHeader.setFormatColProperty(1,"size",260 + 130);
        		this.grd_ordHeader.setFormatColProperty(2,"size",164 + 130);	
        	}
        	
        // 	this.div_info.sta_loan_amt.set_visible(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1" ? true:false);
        // 	this.div_info.msk_loan_amt.set_visible(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1" ? true:false);
        	
        	// 초기 발주가능금액 Setting
        	// 초기 총발주금액 Setting
        	this.LOAN_AMT     = nexacro.toNumber(this.ds_poss_info.getColumn(0,"AVB_LOAN_AMT"),0) - nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	this.AUTO_ORD_AMT = nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	this.ORD_AMT      = nexacro.toNumber(this.ds_ord_info.getColumn(0,"ORD_AMT"),0) + nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	
        	this.fn_OrdInfoCalc();

        	// 초기 Focus
        	this.div_main.grd_main.set_enableevent(true);
        	
        	if( this.ds_main.getRowCount() == 0 ) {
        		if( this.CATE_DIRECTION == "PREV" ) {
        			this.btn_cate_next_onclick();
        		}
        		else {
        			this.btn_cate_next_onclick();
        		}
        	} else {
        		this.AUTO_SEARCH = "N";
        	}
        }

        this.fn_SearchEnd_re = function()
        {
        	if( this.CALLBACK1 == "N" || this.CALLBACK2 == "N" || this.CALLBACK3 == "N" || this.CALLBACK4 == "N" ) {
        		return;
        	}
        	
        	// 발주가능금액관리 여부에 따른 발주가능금액 보이기.숨기기
        	if(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1") {
        		this.grd_ordHeader.setFormatColProperty(0,"size",260); 
        		this.grd_ordHeader.setFormatColProperty(1,"size",260);
        		this.grd_ordHeader.setFormatColProperty(2,"size",164);
        	} else {
        		this.grd_ordHeader.setFormatColProperty(0,"size",0); 
        		this.grd_ordHeader.setFormatColProperty(1,"size",260 + 130);
        		this.grd_ordHeader.setFormatColProperty(2,"size",164 + 130);	
        	}
        // 	this.div_info.sta_loan_amt.set_visible(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1" ? true:false);
        // 	this.div_info.msk_loan_amt.set_visible(this.ds_shop_info.getColumn(0,"ORD_ENABLE_AMT_MNG_YN")=="1" ? true:false);
        	
        	// 초기 발주가능금액 Setting
        	// 초기 총발주금액 Setting
        	this.LOAN_AMT     = nexacro.toNumber(this.ds_poss_info.getColumn(0,"AVB_LOAN_AMT"),0) - nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	this.AUTO_ORD_AMT = nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	this.ORD_AMT      = nexacro.toNumber(this.ds_ord_info.getColumn(0,"ORD_AMT"),0) + nexacro.toNumber(this.ds_poss_info.getColumn(0,"AUTO_ORD_TOTAL_AMT"),0);
        	
        	this.fn_OrdInfoCalc_re();

        	// 초기 Focus
        	this.div_main.grd_main.set_enableevent(true);
        	
        	if( this.ds_main.getRowCount() == 0 ) {
        	
        		if( this.CATE_DIRECTION == "PREV" ) {
        			this.btn_cate_next_onclick();
        		}
        		else {
        			this.btn_cate_next_onclick();
        		}
        	} else {
        		this.AUTO_SEARCH = "N";
        	}
        }

        // 조회
        this.fn_read = function(obj,e,sActionCd,sActionTypeCd) {
        	
        	if( !this.fn_checkValidation() ) return;  //필수값 체크
        		
        	var sSchText = new String(nexacro.trim(this.ds_cond.getColumn(0,"SCH_TEXT")));

        	this.ds_cond.set_enableevent(false);
        	this.ds_cond.setColumn(0, "SCH_TEXT",sSchText);
        	this.ds_cond.set_enableevent(true);
        	
            if( this.fn_mainUpdated() ) {
        		if( !NXCore.confirm("Qst.Q008") ) { // 작업 중인 자료가 있습니다. 저장 없이 진행하시겠습니까?
        			this.div_main.grd_main.setFocus();
        			return;
        		}
            }
        	
        	if( new String(obj) != "" ) {
        		this.CATE_DIRECTION = "NEXT";
        		if( this.basicDt != this.ds_cond.getColumn(0,"ORD_DT") ) {
        			NXCore.alert("Inf.I085", this.div_cond.cal_ord_dt.text); // 발주일자:20171216 당일 발주일자가 아닙니다. 확인 부탁드립니다.
        		}
        	}
        	
        	this.CALLBACK1 = "N";
        	this.CALLBACK2 = "N";
        	this.CALLBACK3 = "N";
        	this.CALLBACK4 = "N";
        	this.ENTER_IX = 0;
        	
        	// 전일자 매출 / 주간 매출 초기세팅
        // 	if(!application.getPrivateProfile("sale_pre_week")
        // 		|| application.getPrivateProfile("sale_pre_week") == "pre"){
        // 		this.div_cond_btn_sale_pre_onclick();
        // 	}else{
        // 		this.div_cond_btn_sale_week_onclick();
        // 	}
        	
        	this.div_main.grd_main.set_enableevent(false);  // 엔터계속누르고 있을 경우에 대비해 이벤트 막기
        	
        	var tx = new NXTransaction(this);
        // 		if( application.gv_runMode != "D" ) {
        // 			tx.setActionCd(sActionCd,sActionTypeCd);  // Log[필수]
        // 		}
        		
        		this.ds_main.clearData();
        		
        		NXGrid.unsort(this.div_main.grd_main);
        		
        		var sDtChanged = "N";
        		if( this.SCH_ORD_DT != this.ds_cond.getColumn(0,"ORD_DT") ) {
        			sDtChanged = "Y";
        		}
        		
        		// 기존 조회조건 기억가기
        		this.SCH_CO_CD    = this.ds_cond.getColumn(0,"CO_CD");
        		this.SCH_ORG_CD   = this.ds_cond.getColumn(0,"ORG_CD");
        		this.SCH_ORD_DT   = this.ds_cond.getColumn(0,"ORD_DT");
        		this.SCH_CATE_CD  = this.ds_cond.getColumn(0,"CATE_CD");
        		
        		this.cate_cd = this.ds_cond.getColumn(0,"CATE_CD");

        		tx.setParameter("CO_CD",  this.SCH_CO_CD);
        		tx.setParameter("ORG_CD", this.SCH_ORG_CD);
        		tx.setParameter("ORD_DT", this.SCH_ORD_DT);

        		tx.addInDataset( "inDs",         "ds_cond:A");  // IN
        		tx.addOutDataset("ds_shop_info", "outDs0");     // OUT : 매장정보
        		tx.addOutDataset("ds_main",      "outDs1");     // OUT : Main Query
        		
        		tx.setCallback("fn_callback");                  // CallBack
        		tx.setService("nm/or/go010/selectList.do");     // Url
        		tx.execute("mainList");
        		
        		this.fn_getOrdSum();
        		this.fn_getSelectOrdPoss();
        		
        		if( sDtChanged == "Y" ) {
        			this.fn_getHeadDt();
        		}
        		else {
        			this.CALLBACK4 = "Y";
        		}
        }

        this.fn_getOrdSum = function() {
        	var tx = new NXTransaction(this);

        		tx.addInDataset( "inDs", "ds_cond:A");
        		tx.addOutDataset("ds_ord_info", "outDs");
        		
        		tx.setCallback("fn_callback");
        		tx.setService("ns/cmm/ordSum.do");
        		tx.execute("ordSum");
        }

        // 정합성 체크
        this.fn_checkValidation = function () {
        	
        	var vd = new NXValidator(this);
        	
        //	@Deprecated(모바일 미사용)
        //	vd.add({type:'required', id:'div_cond.div_Str.edt_Cd', label:'점포코드'}); // 점포코드
        	vd.add({type:'required,date(yyyyMMdd)', id:'div_cond.cal_ord_dt', label:'@발주일자'});// 발주일자
        	if( !vd.execute() ) {
        		/**
        		 * 1) 오류가 있으면 첫번째 메시지를 alert창으로 보이고, 포커스를 설정한다.
        		 * 2) 모든 오류에 대해서 처리하고 싶으면 vd.errors 배열을 참조한다.
        		 */
        		var errs = vd.getErrors();
        		for(var i = 0; i < errs.length; i++) {
        			logger.debug("row=" + errs[i].row + ", id=" + errs[i].id + ", objects=" + errs[i].objects + ", errmsg=" + errs[i].errmsg);
        		}
        		return false;
        	}
        	
        	// 점포코드 체크
        	var ORG_CD = this.ds_cond.getColumn(0, "ORG_CD");
        	if(null == ORG_CD || ORG_CD.length < 1) {
        		NXCore.alert("Warn.W001", "점포코드");
        		return false;
        	}
        	
        	return true;
        }

        this.fn_mainUpdated = function() {
        	if( this.ds_main.findRowExpr("dataset.getRowType(rowidx)=='4' && nexacro.toNumber(ORG_ORD_QTY,0) != nexacro.toNumber(ORD_QTY,0)") > -1 ) {
        		return true;
        	}
        	return false;
        }

        this.fn_save = function(obj,e,sActionCd,sActionTypeCd) {
            
            if( !this.fn_mainUpdated() ) {
                NXCore.alert("Inf.I030"); //변경내역이 없습니다.
        	    this.div_main.grd_main.setFocus();
                return;
        	}
            
        	// 발주불가시간Check: 일반발주(10 ~ 11시불가), FF발주(09 ~ 11시불가)
        // 	if( !this.gfn_OrdTimeCheck() ) {
        // 	    this.div_main.grd_main.setFocus();
        // 		return;
        // 	}
        	// 발주일자시간Check: 일반발주(10 ~ 11시), FF발주(09 ~ 11시) 이전시간은 당일만 가능, 이후시간은 미래일만 가능.
        	if( !this.gfn_OrdEnblDtCheck(this.ds_cond.getColumn(0,"ORD_DT"),"NORMAL") ) {
        	    this.div_main.grd_main.setFocus();
        		return;
        	}
        	
        	// FF가 섞여있는지 체크
        	var iFindRow = this.ds_main.findRowExpr("dataset.getRowType(rowidx)=='4' && nexacro.toNumber(ORG_ORD_QTY,0) != nexacro.toNumber(ORD_QTY,0) && FF_YN=='1'");
        	if( iFindRow > -1 ) {
        		if( !this.gfn_OrdTimeCheck("FF") ) {  // 발주불가시간Check: 일반발주(10 ~ 11시불가), FF발주(09 ~ 11시불가)
        			this.div_main.grd_main.setFocus();
        			return;
        		}
        		if( !this.gfn_OrdEnblDtCheck(this.ds_cond.getColumn(0,"ORD_DT"),"FF") ) {  // 발주일자시간Check: FF발주(09 ~ 11시) 이전시간은 당일만 가능, 이후시간은 미래일만 가능.
        			this.div_main.grd_main.setFocus();
        			return;
        		}
        	}
        	
        //	this.sta_all_tooltip.set_visible(false);
        	
        	// if( !this.fn_saveValidation() ) return;  // validation 체크
            
        	//if( !NXCore.confirm("Com.C201") ) return;  // 저장하시겠습니까?
        	
        	if( new String(obj) != "" ) {  // 저장버튼으로 클릭시에는 다음 카테고리로 옮기지 않는다.
        		this.btnSaveClicked = true;
        	}

        	// 가져갈 dataset 세팅. 발주수량 수정된 데이터만 들고감.
        	this.ds_tran.copyData(this.ds_main);
        	this.ds_tran.clearData();
        	for( var i=0; i<this.ds_main.rowcount; i++ ) {
        		if( this.ds_main.getRowType(i)=="4" && nexacro.toNumber(this.ds_main.getColumn(i,"ORG_ORD_QTY"),0) != nexacro.toNumber(this.ds_main.getColumn(i,"ORD_QTY"),0) ) {
        			this.ds_tran.copyRow(this.ds_tran.addRow(),this.ds_main,i);
        		}
        	}
        	
        	this.ds_tran.applyChange();
        	for( var i=0; i<this.ds_tran.rowcount; i++ ) {
        		this.ds_tran.setColumn(i,"UPDATE_FLAG","UPDATE");  // update 로 변경
        	}
        	
        	var tx = new NXTransaction(this);
        		
        // 		if( application.gv_runMode != "D" ) {
        // 			tx.setActionCd(sActionCd,sActionTypeCd);
        // 		}
        		
        		// 기존 조회조건 들고가기
        		tx.setParameter("CO_CD",    this.SCH_CO_CD);
        		tx.setParameter("ORG_CD",   this.SCH_ORG_CD);
        		tx.setParameter("ORD_DT",   this.SCH_ORD_DT);
        		tx.setParameter("ORD_TP",   this.sORD_TP);  // 모바일전체발주
        		tx.setParameter("MENU_URL", NX.Frame.getCurMenuUrl());  // emart24Library > NXComm.js > MENU_URL
        		
        		tx.addInDataset("inDs", "ds_tran:U");  //
        		tx.addInDataset("etcDs","ds_main:U");  // 저장 성공후 Dataset Normal 로 변경을 위해 그냥 들고감.(재조회하기때문에 사실 의미는 없음)
        		
        		tx.setCallback("fn_callback");         // CallBack 함수
        		tx.setService("nm/or/go010/save.do");
        		tx.execute("mainSave");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_main.addEventHandler("oncolumnchanged", this.ds_main_oncolumnchanged, this);
            this.ds_main.addEventHandler("cancolumnchange", this.ds_main_cancolumnchange, this);
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_cond.addEventHandler("cancolumnchange", this.ds_cond_cancolumnchange, this);
            this.ds_dummy.addEventHandler("onvaluechanged", this.ds_cond_onvaluechanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_cond.edt_cate.addEventHandler("oneditclick", this.div_cond_edt_cate_oneditclick, this);
            this.div_cond.btn_cate_prev.addEventHandler("onclick", this.btn_cate_prev_onclick, this);
            this.div_cond.btn_cate_next.addEventHandler("onclick", this.btn_cate_next_onclick, this);
            this.div_main.grd_main.addEventHandler("onenterdown", this.div_main_grd_main_onenterdown, this);
            this.div_main.grd_main.addEventHandler("onselectchanged", this.div_main_grd_main_onselectchanged, this);
            this.div_main.grd_main.addEventHandler("onkeyup", this.div_main_grd_main_onkeyup, this);
            this.div_main.grd_main.addEventHandler("onkeydown", this.div_main_grd_main_onkeydown, this);

        };

        this.loadIncludeScript("RP_86602_NMORGO010.xfdl");

       
    };
}
)();
