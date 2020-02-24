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
                this.set_name("TERM_01_0210M");
                this.set_titletext("단말기/부가장비 주문");
                this._setFormPosition(0,0,480,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProdInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Gbn", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/><Column id=\"VALUE\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">설치</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">판매</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">할부판매</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">V판매</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Type1", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_COD\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/><Column id=\"ITEM_NAM\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/><Column id=\"GRP_COD2\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Type", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_COD\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/><Column id=\"ITEM_NAM\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/><Column id=\"GRP_COD2\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ExeptGrp", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ExeptProd", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_SubList", this);
            obj.getSetter("userdata").set("");
            obj.getSetter("domainid").set("");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_COD\" size=\"256\" prop=\"default\" type=\"STRING\" userdata=\"\" domainid=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("titleArea", "absolute", "0", "0", null, "50", "0", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff,0 none #808080ff,1 solid #e5e5e5ff,0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "23", "6", null, "38", "119", null, this);
            obj.set_taborder("1");
            obj.set_text("단말기 주문");
            obj.set_cssclass("sta_Title");
            this.addChild(obj.name, obj);

            obj = new Static("src_area_tit", "absolute", "0", "50", "181", "611", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f7f7f7ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle", "absolute", "13", "61", "161", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("단말기 모델");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle00", "absolute", "13", "108", "161", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("단위");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle01", "absolute", "13", "155", "161", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("수량");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle02", "absolute", "13", "202", "161", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("기준단가");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle03", "absolute", "13", "249", "161", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("총금액");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle04", "absolute", "13", "296", "161", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("단말 정책명");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle05", "absolute", "13", "343", "161", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("단말 그룹명");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle06", "absolute", "13", "390", "161", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("메모");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle07", "absolute", "13", "437", "161", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("주문담당자성명");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle08", "absolute", "13", "485", "161", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("배송처");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle09", "absolute", "13", "532", "161", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("판매/설치 여부");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle10", "absolute", "13", "579", "161", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("규격");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_srctitle11", "absolute", "13", "626", "161", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("제조사");
            obj.set_cssclass("sta_SrcTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboProdNam", "absolute", "191", "52", null, "42", "18", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");

            obj = new Static("staUNIT", "absolute", "189", "108", null, "25", "12", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_ResultTitle02");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOD_CNT", "absolute", "191", "146", null, "42", "92", null, this);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("staDLVY_AMT", "absolute", "189", "202", null, "25", "130", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_ResultTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("staTOT_AMT", "absolute", "189", "249", null, "25", "130", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_ResultTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("staPLCY_NM", "absolute", "188", "296", null, "25", "131", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_ResultTitle02");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGRP_NAME", "absolute", "191", "334", null, "42", "18", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");

            obj = new Edit("edtBigo", "absolute", "191", "381", null, "42", "20", null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edtORDER_NAM", "absolute", "191", "428", null, "42", "92", null, this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSEND_MANNUM", "absolute", "191", "475", null, "42", "18", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");

            obj = new Combo("cboCRTGBN", "absolute", "191", "523", null, "42", "18", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@ds_Gbn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");

            obj = new Combo("cboType", "absolute", "191", "570", null, "42", "18", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@ds_Type1");
            obj.set_codecolumn("ITEM_COD");
            obj.set_datacolumn("ITEM_NAM");

            obj = new Static("staFACTNM", "absolute", "189", "626", null, "25", "130", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_ResultTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("src_line00", "absolute", "0", "96", null, "1", "0", null, this);
            obj.set_taborder("29");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line01", "absolute", "0", "143", null, "1", "0", null, this);
            obj.set_taborder("30");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line02", "absolute", "0", "190", null, "1", "0", null, this);
            obj.set_taborder("31");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line03", "absolute", "0", "237", null, "1", "0", null, this);
            obj.set_taborder("32");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line04", "absolute", "0", "284", null, "1", "0", null, this);
            obj.set_taborder("33");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line05", "absolute", "0", "331", null, "1", "0", null, this);
            obj.set_taborder("34");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line06", "absolute", "0", "378", null, "1", "0", null, this);
            obj.set_taborder("35");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line07", "absolute", "0", "425", null, "1", "0", null, this);
            obj.set_taborder("36");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line08", "absolute", "0", "472", null, "1", "0", null, this);
            obj.set_taborder("37");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line09", "absolute", "0", "520", null, "1", "0", null, this);
            obj.set_taborder("38");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line10", "absolute", "0", "567", null, "1", "0", null, this);
            obj.set_taborder("39");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line11", "absolute", "0", "614", null, "1", "0", null, this);
            obj.set_taborder("40");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Static("src_line12", "absolute", "0", "661", null, "1", "0", null, this);
            obj.set_taborder("41");
            obj.style.set_background("#e6e6e6ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnOrder", "absolute", "49", "672", "185", "55", null, null, this);
            obj.set_taborder("42");
            obj.set_text("주문");
            obj.set_cssclass("Btn_Search");
            obj.getSetter("titletext").set("단말기/부가장비 주문");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "239", "672", "185", "55", null, null, this);
            obj.set_taborder("43");
            obj.set_text("취소");
            obj.set_cssclass("Btn_Cancel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlcyCdTerm", "absolute", "495", "381", null, "42", "-284", null, this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlcyNmTerm", "absolute", "495", "429", null, "42", "-284", null, this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlcyCdGrp", "absolute", "767", "381", null, "42", "-556", null, this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlcyNmGrp", "absolute", "767", "429", null, "42", "-556", null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "490", "40", "850", "120", null, null, this);
            obj.set_taborder("48");
            obj.set_text("1. 현상\r\n Combo.set_text 후 다른 콤포넌트로 포커스 이동 시 text 값이 사라지는 현상\r\n\r\n - Combo에 innerdataset은 없는 상태\r\n - 2017년 6월 정기 브랜치 38639에서 발생 (2017.05.23 - RP72868)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) form 이 onload 될때 cboProdNam 를 set_text 하고 있습니다.\r\n 3) edtOD_CNT 에 포커스를 가져가면 cboProdNam 에서 set_text 했던 값이 사라집니다.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "490", "10", "850", "30", null, null, this);
            obj.set_taborder("49");
            obj.set_text("[RP_80244] 디그라 개선 요청 , 콤보 set_text 해놓았지만 다른 컴퍼넌트에 포커스를 가져갔을시 set_text 해놓은 text 사라짐 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TERM_01_0210M");
            		p.set_titletext("단말기/부가장비 주문");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_80244_TERM_01_0210M.xfdl", function() {
        // /*
        //  프로그램ID 	: TERM_01_0210M.xfdl
        //  프로그램명 	: 단말기주문
        //  설명 			: 단말기주문
        //  작성자 		: 투비소프트
        //  최초작성일 	: 2015-03-17
        //  최종변경일 	: 
        // */
        // 
        // include "lib::lib_Com.xjs";
        // 
        // /*================================================================================
        //  * 1. 변수 선언
        // **===============================================================================*/
        // this.popGB = "";
        // this.trCntTot = 0;
        // this.trCntNow = 0;
        // 
        // /*================================================================================
        //  * 2. Form관련 Script
        // **===============================================================================*/
        // /******************************************************************************
        //  * Function명 : TERM_01_0210M_onload
        //  * 설명       : 화면 onload 처리
        // 				Form의 모든 컴포넌트가 생성되고, 모든 Object가 Load 되었을 때에 발생하는 Event
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.TERM_01_0210M_onload = function(obj:Form, e:nexacro.LoadEventInfo)
        // {
        // 	// 로그등록
        // 	this.gfn_RegLog(this);
        // 	
        // 	if (this.parent.div1.sel == "0210")
        // 	{
        // 		application.goMain.fn_action("SETTITLE", "단말기 주문");
        // 		this.sta_title.set_text("단말기 주문");
        // 		this.sta_srctitle.set_text("단말기 모델");
        // 		
        // 		this.gfn_ComcodeSearch("PF005", "", "ds_Type", "fn_callback");
        // // 		this.ds_Type.filter("GRP_COD2=='01'");
        // // 		this.ds_Type1.copyData(this.ds_Type, true);
        // 	}
        // 	else if (this.parent.div1.sel == "0220")
        // 	{
        // 		application.goMain.fn_action("SETTITLE", "부가장비 주문");
        // 		this.sta_title.set_text("부가장비 주문");
        // 		this.sta_srctitle.set_text("부가장비 모델");
        // 		
        // 		var arg = "01=01"
        // 				+" 02=02";
        // 		this.gfn_ComcodeSearch("PF024", arg, "ds_Type1", "fn_callback");
        // 	}
        // 	
        // 	// 주문제한그룹
        // 	this.gfn_CombocodeSearch("ds_ExeptGrp", "22", "02", "", "");
        // 	
        // 	// 주문제한단말기
        // 	//this.gfn_CombocodeSearch("ds_ExeptProd", "22", "03", "", "");
        // 	
        // 	
        // }
        // 
        // /*================================================================================
        //  * 3. DataSet관련 Script
        // **===============================================================================*/
        // 
        // 
        // /*================================================================================
        //  * 4. Component관련 Script
        // **===============================================================================*/
        // /******************************************************************************
        //  * Function명 : btnOrder_onclick
        //  * 설명       : 주문 버튼 클릭
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.btnOrder_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	if (this.parent.div1.sel == "0210")	// 단말기 주문
        // 	{
        // 		this.fn_setPlcyCd();
        // 		this.fn_SaveTerminal();
        // 	}
        // 	else if (this.parent.div1.sel == "0220")	// 부가장비 주문
        // 	{
        // 		this.fn_setPlcyCd();
        // 		this.fn_SaveEquipment();
        // 	}
        // }
        // 
        // /******************************************************************************
        //  * Function명 : btnCancel_onclick
        //  * 설명       : 취소 버튼 클릭
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.btnCancel_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	// 초기화
        // 	this.fn_init();
        // }
        // 
        // /******************************************************************************
        //  * Function명 : cboProdNam_ondropdown
        //  * 설명       : 단말기 모델 콤보 선택
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.cboProdNam_ondropdown = function(obj:Combo, e:nexacro.EventInfo)
        // {
        // 	this.popGB = "cbopopProdNam";
        // 	
        // 	this.setTimer(333, 300);
        // 	
        // // 	var prodgbn = "";
        // // 	if (this.parent.div1.sel == "0210")			// 단말기 주문
        // // 	{
        // // 		prodgbn = "10";
        // // 	}
        // // 	else if (this.parent.div1.sel == "0220")	// 부가장비 주문
        // // 	{
        // // 		prodgbn = "20";
        // // 	}
        // // 	
        // // 	var arg = {prodgbn:prodgbn};
        // // 	this.gfn_showModal("cbopopProdNam"
        // // 					,"COMMON::COMM_01_0310P.xfdl"
        // // 					,this.fn_callbackPOP
        // // 					,arg
        // // 					,true
        // // 					,this);
        // 					
        // 	return false;
        // }
        // 
        // /******************************************************************************
        //  * Function명 : cboGRP_NAME_ondropdown
        //  * 설명       : 단말그룹명 콤보 선택
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.cboGRP_NAME_ondropdown = function(obj:Combo, e:nexacro.EventInfo)
        // {
        // 	this.popGB = "cbopopGrpName";
        // 	this.setTimer(333, 300);
        // 	
        // // 	this.gfn_showModal("cbopopGrpName"
        // // 					,"COMMON::COMM_01_0320P.xfdl"
        // // 					,this.fn_callbackPOP
        // // 					,null
        // // 					,true
        // // 					,this);
        // 					
        // 	return false;
        // }
        // 
        // /******************************************************************************
        //  * Function명 : cboSEND_MANNUM_ondropdown
        //  * 설명       : 배송처 콤보 선택
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.cboSEND_MANNUM_ondropdown = function(obj:Combo, e:nexacro.EventInfo)
        // {
        // 	this.popGB = "cbopopSendManNum";
        // 	this.setTimer(333, 300);
        // 	
        // // 	this.gfn_showModal("cbopopSendManNum"
        // // 					,"COMMON::COMM_01_0400P.xfdl"
        // // 					,this.fn_callbackPOP
        // // 					,null
        // // 					,true
        // // 					,this);
        // 					
        // 	return false;
        // }
        // 
        // /******************************************************************************
        //  * Function명 : cboCRTGBN_ondropdown
        //  * 설명       : 판매/설치 여부 콤보 선택
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.cboCRTGBN_ondropdown = function(obj:Combo, e:nexacro.EventInfo)
        // {
        // 	this.popGB = "cbopopCrtgbn";
        // 	this.setTimer(333, 300);
        // 	
        // // 	var sParam  = {oDataset:this.ds_Gbn			// 바인딩되는 데이타셋					
        // // 				,  sTitle:"선택"				// 타이틀
        // // 				,  sGrdBodyColId:"VALUE"		// Grid의 Body에 binding 되는 columnID
        // // 				  }
        // // 		
        // // 	this.gfn_showModal("cbopopCrtgbn"
        // // 					,"com::comComboList.xfdl"
        // // 					,this.fn_callbackPOP
        // // 					,sParam
        // // 					,true
        // // 					,this);
        // 					
        // 	return false;
        // }
        // 
        // /******************************************************************************
        //  * Function명 : cboType_ondropdown
        //  * 설명       : 규격 콤보 선택
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.cboType_ondropdown = function(obj:Combo, e:nexacro.EventInfo)
        // {
        // 	this.popGB = "cbopopType";
        // 	this.setTimer(333, 300);
        // 	
        // // 	var sParam  = {oDataset:this.ds_Type1		// 바인딩되는 데이타셋					
        // // 				,  sTitle:"선택"				// 타이틀
        // // 				,  sGrdBodyColId:"ITEM_NAM"		// Grid의 Body에 binding 되는 columnID
        // // 				  }
        // // 		
        // // 	this.gfn_showModal("cbopopType"
        // // 					,"com::comComboList.xfdl"
        // // 					,this.fn_callbackPOP
        // // 					,sParam
        // // 					,true
        // // 					,this);
        // 					
        // 	return false;
        // }
        // 
        // /******************************************************************************
        //  * Function명 : edtOD_CNT_ontextchanged
        //  * 설명       : 수량 값이 변경될 때
        //  * Params     : obj : Event가 발생한 Object
        // 				e 	: Event Object
        //  * Return     : 없음
        // *******************************************************************************/
        // this.edtOD_CNT_ontextchanged = function(obj:Edit,  e:nexacro.TextChangedEventInfo)
        // {
        // 	var odcnt = nexacro.toNumber(this.gfn_Trim(e.posttext));
        // 	
        // 	if (odcnt <= 0)
        // 		this.staTOT_AMT.set_text("");
        // 	else
        // 	{
        // 		var dlvyamt = nexacro.toNumber(nexacro.replaceAll(this.staDLVY_AMT.text,",",""));
        // 		var totamt  = this.gfn_NumFormat2(odcnt * dlvyamt);
        // 		this.staTOT_AMT.set_text(totamt);
        // 	}
        // }
        // 
        // /*================================================================================
        //  * 5. UserFunction관련 Script
        // **===============================================================================*/
        // /******************************************************************************
        //  * Function명 : fn_init
        //  * 설명       : 입력값 초기화
        //  * Params     : 없음			
        //  * Return     : 없음
        // *******************************************************************************/
        // this.fn_init = function ()
        // {
        // 	this.cboProdNam.set_text("");
        // 	this.cboProdNam.PRODCOD = "";
        // 	this.staUNIT.set_text("");
        // 	this.edtOD_CNT.set_value("");
        // 	this.staDLVY_AMT.set_text("");
        // 	this.staTOT_AMT.set_text("");
        // 	this.staPLCY_NM.set_text("");
        // 	this.staPLCY_NM.PLCY_CD = "";
        // 	this.cboGRP_NAME.set_text("");
        // 	this.cboGRP_NAME.GRP_COD = "";
        // 	this.edtBigo.set_value("");
        // 	this.edtORDER_NAM.set_value("");
        // 	this.cboSEND_MANNUM.set_text("");
        // 	this.cboSEND_MANNUM.MANNUM = "";
        // 	this.cboCRTGBN.set_index(-1);
        // 	this.cboType.set_index(-1);
        // 	this.staFACTNM.set_text("");
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_SaveTerminal
        //  * 설명       : 단말기 주문
        //  * Params     : 없음			
        //  * Return     : 없음
        // *******************************************************************************/
        // this.fn_SaveTerminal = function ()
        // {
        // 	// Validation 체크
        // 	if(!this.fn_check()) return false;
        // 	
        // 	var mannum      = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 	var prodcod     = this.cboProdNam.PRODCOD;
        // 	var od_cnt      = this.gfn_Trim(this.edtOD_CNT.text);
        // 	var od_dlvy_dat = this.gfn_Today();
        // 	var order_nam   = this.gfn_Trim(this.edtORDER_NAM.text);
        // 	var send_mannum = this.cboSEND_MANNUM.MANNUM;
        // 	var crtgbn      = this.cboCRTGBN.value;
        // 	var type        = this.cboType.value;
        // 	var amount      = nexacro.replaceAll(this.staDLVY_AMT.text,",","");
        // 	var memo        = this.gfn_Trim(this.edtBigo.text);
        // 	var uakey       = "";
        // 	var grp_cod     = this.cboGRP_NAME.GRP_COD;
        // 	var plcy_cd     = this.staPLCY_NM.PLCY_CD;
        // 	
        // 	var strArg = "mannum="      + this.wrapQuoteNvl(mannum)		// 딜러코드[8]
        // 			   +" prodcod="     + this.wrapQuoteNvl(prodcod)		// 단말기모델코드[4]
        // 			   +" od_cnt="      + this.wrapQuoteNvl(od_cnt)		// 수량[256]
        // 			   +" od_dlvy_dat=" + this.wrapQuoteNvl(od_dlvy_dat)	// 출고희망일자[8]
        // 			   +" order_nam="   + this.wrapQuoteNvl(order_nam)	// 주문담당자성명[30]
        // 			   +" send_mannum=" + this.wrapQuoteNvl(send_mannum)	// 배송처(딜러코드)[8]
        // 			   +" crtgbn="      + this.wrapQuoteNvl(crtgbn)		// 유/무상여부[1]
        // 			   +" type="        + this.wrapQuoteNvl(type)			// 규격[4]
        // 			   +" amount="      + this.wrapQuoteNvl(amount)		// 출고단가[256]
        // 			   +" memo="        + this.wrapQuoteNvl(memo)			// 메모[100]
        // 			   +" uakey="       + this.wrapQuoteNvl(uakey)		// 수시주문등록을 위한 권한구분[5]
        // 			   +" grp_cod="     + this.wrapQuoteNvl(grp_cod)		// 목적코드 
        // 			   +" plcy_cd="     + this.wrapQuoteNvl(plcy_cd)		// 정책코드
        // 			   ;
        // 			
        // 	var svcId       = "SaveTerminal";
        // 	var svcUrl      = "term010200m/P1121.mo";
        // 	var strInDS     = "";
        // 	var strOutDS    = "";
        // 	var strCallback = "fn_callback";
        // 	
        // 	trace("svcUrl:"+svcUrl+"\nstrArg:"+strArg);
        // 	this.gfn_Transaction(svcId, svcUrl, strInDS, strOutDS, strArg, strCallback, true);
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_SaveEquipment
        //  * 설명       : 부가장비 주문
        //  * Params     : 없음			
        //  * Return     : 없음
        // *******************************************************************************/
        // this.fn_SaveEquipment = function ()
        // {
        // 	// Validation 체크
        // 	if(!this.fn_check()) return false;
        // 	
        // 	var mannum      = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 	var prodcod     = this.cboProdNam.PRODCOD;
        // 	var od_cnt      = this.gfn_Trim(this.edtOD_CNT.text);
        // 	var od_dlvy_dat = this.gfn_Today();
        // 	var order_nam   = this.gfn_Trim(this.edtORDER_NAM.text);
        // 	var send_mannum = this.cboSEND_MANNUM.MANNUM;
        // 	var crtgbn      = this.cboCRTGBN.value;
        // 	var type        = this.cboType.value;
        // 	var amount      = nexacro.replaceAll(this.staDLVY_AMT.text,",","");
        // 	var memo        = this.gfn_Trim(this.edtBigo.text);
        // 	var uakey       = "";
        // 	var grp_cod     = this.cboGRP_NAME.GRP_COD;
        // 	var plcy_cd     = this.staPLCY_NM.PLCY_CD;
        // 	
        // 	var strArg = "mannum="      + this.wrapQuoteNvl(mannum)		// 딜러코드[8]
        // 			   +" prodcod="     + this.wrapQuoteNvl(prodcod)		// 단말기모델코드[4]
        // 			   +" od_cnt="      + this.wrapQuoteNvl(od_cnt)		// 수량[256]
        // 			   +" od_dlvy_dat=" + this.wrapQuoteNvl(od_dlvy_dat)	// 출고희망일자[8]
        // 			   +" order_nam="   + this.wrapQuoteNvl(order_nam)	// 주문담당자성명[30]
        // 			   +" send_mannum=" + this.wrapQuoteNvl(send_mannum)	// 배송처(딜러코드)[8]
        // 			   +" crtgbn="      + this.wrapQuoteNvl(crtgbn)		// 유/무상여부[1]
        // 			   +" type="        + this.wrapQuoteNvl(type)			// 규격[4]
        // 			   +" amount="      + this.wrapQuoteNvl(amount)		// 출고단가[256]
        // 			   +" memo="        + this.wrapQuoteNvl(memo)			// 메모[100]
        // 			   +" uakey="       + this.wrapQuoteNvl(uakey)		// 수시주문등록을 위한 권한구분[5]
        // 			   +" grp_cod="     + this.wrapQuoteNvl(grp_cod)		// 목적코드 
        // 			   +" plcy_cd="     + this.wrapQuoteNvl(plcy_cd)		// 정책코드
        // 			   ;
        // 			
        // 	var svcId       = "SaveEquipment";
        // 	var svcUrl      = "term010200m/P1122.mo";
        // 	var strInDS     = "";
        // 	var strOutDS    = "";
        // 	var strCallback = "fn_callback";
        // 	
        // 	trace("svcUrl:"+svcUrl+"\nstrArg:"+strArg);
        // 	this.gfn_Transaction(svcId, svcUrl, strInDS, strOutDS, strArg, strCallback, true);
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_check
        //  * 설명       : Validation 체크
        //  * Params     : 없음
        //  * Return     : 없음
        //  ******************************************************************************/ 
        // this.fn_check = function()
        // {
        // 	// 단말기 모델
        // 	var val = this.gfn_Trim(this.cboProdNam.text);
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "모델을 먼저 선택하십시오");
        // 		return false;
        // 	}
        // 	
        // 	// 주문담당자 성명
        // 	val = this.gfn_Trim(this.edtORDER_NAM.text);
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "주문담당자명은 2자이상 4자이하 필수 입력사항입니다.");
        // 		return false;
        // 	}
        // 	
        // 	// 배송처
        // 	val = this.gfn_Trim(this.cboSEND_MANNUM.text);
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "단말기배송처(딜러코드)를 입력하십시오!");
        // 		return false;
        // 	}
        // 	
        // 	// 판매/설치 여부
        // 	val = this.gfn_Trim(this.cboCRTGBN.value);
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "단말기설치/판매 구분을 선택하십시오!");
        // 		return false;
        // 	}
        // 	
        // 	// 규격
        // 	val = this.gfn_Trim(this.cboType.value);
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "단말기규격을 입력하십시오!");
        // 		return false;
        // 	}
        // 	
        // 	// 수량
        // 	val = nexacro.toNumber(this.gfn_Trim(this.edtOD_CNT.text));
        // 	if (val <= 0)
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "수량이 0인것을 저장할수 없습니다.");
        // 		return false;
        // 	}
        // 	
        // 	// 그룹코드
        // 	val = this.cboGRP_NAME.GRP_COD;
        // 	if (this.gfn_IsNull(val))
        // 	{
        // 		this.gfn_Msg("errorInput", "메세지", "출고목적을 입력하십시오");
        // 		return false;
        // 	}
        // 
        // 	if (this.parent.div1.sel == "0210")		// 단말기 주문
        // 	{
        // 		var chk_prodcod = this.cboProdNam.PRODCOD;
        // 		var chk_grpCod  = this.cboGRP_NAME.GRP_COD;
        // 
        // 		//패키지 모델의 경우 출고목적의 강제. 201306 오윤미 대리 요청.
        // 		if (chk_prodcod == "0501" || chk_prodcod == "2902" || chk_prodcod == "3603" || chk_prodcod == "2406")
        // 		{
        // 			if (chk_grpCod != "176006")
        // 			{
        // 				this.ds_Terminal.setColumn(i, "GRP_COD", "");
        // 				this.ds_Terminal.setColumn(i, "GRP_NM1", "");
        // 				this.ds_Terminal.setColumn(i, "GRP_NM2", "");
        // 				this.ds_Terminal.setColumn(i, "PLCY_CD", "");
        // 				
        // 				this.cboGRP_NAME.set_text("");
        // 				this.cboGRP_NAME.GRP_COD = "";
        // 				this.staPLCY_NM.set_text("");
        // 				this.staPLCY_NM.PLCY_CD = "";
        // 				
        // 				this.gfn_Msg("errorInput", "메세지", "해당 모델은 출고목적이 [KT풀패키지]로만 주문이 가능합니다.");
        // 				return false;
        // 			}
        // 		}
        // 		
        // 		//한울정보(DC), 정훈정보통신(61) 대리점만 가능한 장비모델 - 단말그룹도 188610, 188DC2로 강제 함.
        // 		if (chk_prodcod == "1433" || chk_prodcod == "1434" || chk_prodcod == "1435" || chk_prodcod == "1436")
        // 		{
        // 			var adpPlaceCode = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 			var userId       = application.gds_UserInfo.getColumn(0, "USER_ID");
        // 			if (adpPlaceCode.substr(0,2) !="DC" && adpPlaceCode.substr(0,2) != "61" && userId.substr(0,2) != "03204")	//ASIS가 03204로 되어있음
        // 			{
        // 				this.gfn_Msg("cannotSelect", "메세지", "해당 모델은 선택 할 수 없습니다.");
        // 				return false;
        // 			}
        // 			
        // 			if (chk_grpCod != "188610" && chk_grpCod != "188DC2")
        // 			{
        // 				this.cboGRP_NAME.set_text("");
        // 				this.cboGRP_NAME.GRP_COD = "";
        // 				this.gfn_Msg("errorInput", "메세지", "해당 모델에 불가한 단말그룹입니다.");
        // 				return false;
        // 			}
        // 		}
        // 	}
        // 	
        // 	return true;
        // }
        // 
        // // 부가장비 여부 확인
        // this.fn_checkSubList = function ()
        // {
        // 	this.ds_SubList.clearData();
        // 	
        // 	var strArg = "item_cod=" + this.wrapQuoteNvl(this.cboProdNam.PRODCOD);
        // 	
        // 	var svcId       = "subList";
        // 	var svcUrl      = "term010200m/P1128.mo";
        // 	var strInDS     = "";
        // 	var strOutDS    = "ds_SubList=ds_SubList";
        // 	var strCallback = "fn_callback";
        // 	
        // 	trace("svcUrl:"+svcUrl+"\nstrArg:"+strArg);
        // 	this.gfn_Transaction(svcId, svcUrl, strInDS, strOutDS, strArg, strCallback, true);
        // }
        // 
        // this.fn_saveSubList = function ()
        // {
        // 	var code, strCrtGb;
        // 	var mannum, prodcod, od_cnt, od_dlvy_dat, order_nam, send_mannum, crtgbn, type, amount, memo, uakey, grp_cod, plcy_cd;
        // 	
        // 	mannum      = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 	od_cnt      = this.gfn_Trim(this.edtOD_CNT.text);
        // 	od_dlvy_dat = this.gfn_Today();
        // 	order_nam   = this.gfn_Trim(this.edtORDER_NAM.text);
        // 	send_mannum = this.cboSEND_MANNUM.MANNUM;
        // 	type        = this.cboType.value;
        // 	memo        = this.gfn_Trim(this.edtBigo.text);
        // 	uakey       = "";
        // 	grp_cod     = this.cboGRP_NAME.GRP_COD;
        // 	plcy_cd     = this.staPLCY_NM.PLCY_CD;
        // 	
        // 	code = this.ds_SubList.getColumn(this.trCntNow, "ITEM_COD");
        // 	strCrtGb = "2";
        // 	
        // 	if (this.gfn_Trim(this.ds_SubList.getColumn(this.trCntNow,"GRP_COD1")) == "M9")
        // 	{
        // 		strCrtGb = this.crtGbn;
        // 	}
        // 	
        // 	prodcod = code;
        // 	crtgbn = strCrtGb;
        // 	amount = "0";
        // 	
        // 	var strArg = "mannum="      + this.wrapQuoteNvl(mannum)		// 딜러코드[8]
        // 			   +" prodcod="     + this.wrapQuoteNvl(prodcod)		// 단말기모델코드[4]
        // 			   +" od_cnt="      + this.wrapQuoteNvl(od_cnt)		// 수량[256]
        // 			   +" od_dlvy_dat=" + this.wrapQuoteNvl(od_dlvy_dat)	// 출고희망일자[8]
        // 			   +" order_nam="   + this.wrapQuoteNvl(order_nam)		// 주문담당자성명[30]
        // 			   +" send_mannum=" + this.wrapQuoteNvl(send_mannum)	// 배송처(딜러코드)[8]
        // 			   +" crtgbn="      + this.wrapQuoteNvl(crtgbn)		// 유/무상여부[1]
        // 			   +" type="        + this.wrapQuoteNvl(type)			// 규격[4]
        // 			   +" amount="      + this.wrapQuoteNvl(amount)		// 출고단가[256]
        // 			   +" memo="        + this.wrapQuoteNvl(memo)			// 메모[100]
        // 			   +" uakey="       + this.wrapQuoteNvl(uakey)			// 수시주문등록을 위한 권한구분[5]
        // 			   +" grp_cod="     + this.wrapQuoteNvl(grp_cod)		// 목적코드 
        // 			   +" plcy_cd="     + this.wrapQuoteNvl(plcy_cd)		// 정책코드
        // 			   ;
        // 	
        // 	this.trCntNow++;
        // 	this.gfn_Transaction("SaveSubList", "term010200m/P1122.mo", "", "", strArg, "fn_callback");
        // 
        // 
        // // 	var cnt = this.ds_SubList.rowcount;
        // // 	
        // // 	if (cnt > 0)
        // // 	{
        // // 		var code, strCrtGb;
        // // 		var mannum, prodcod, od_cnt, od_dlvy_dat, order_nam, send_mannum, crtgbn, type, amount, memo, uakey, grp_cod, plcy_cd;
        // // 		
        // // 		mannum      = application.gds_UserInfo.getColumn(0, "MANNUM");
        // // 		od_cnt      = this.gfn_Trim(this.edtOD_CNT.text);
        // // 		od_dlvy_dat = this.gfn_Today();
        // // 		order_nam   = this.gfn_Trim(this.edtORDER_NAM.text);
        // // 		send_mannum = this.cboSEND_MANNUM.MANNUM;
        // // 		type        = this.cboType.value;
        // // 		memo        = this.gfn_Trim(this.edtBigo.text);
        // // 		uakey       = "";
        // // 		grp_cod     = this.cboGRP_NAME.GRP_COD;
        // // 		plcy_cd     = this.staPLCY_NM.PLCY_CD;
        // // 		
        // // 		for (var i=0; i<cnt; i++)
        // // 		{
        // // 			code = this.ds_SubList.getColumn(i, "ITEM_COD");
        // // 			strCrtGb = "2";
        // // 			
        // // 			if (this.gfn_Trim(this.ds_SubList.getColumn(i,"GRP_COD1")) == "M9")
        // // 			{
        // // 				strCrtGb = this.crtGbn;
        // // 			}
        // // 			
        // // 			prodcod = code;
        // // 			crtgbn = strCrtGb;
        // // 			amount = "0";
        // // 			
        // // 			var strArg = "mannum="      + mannum		// 딜러코드[8]
        // // 					   +" prodcod="     + prodcod		// 단말기모델코드[4]
        // // 					   +" od_cnt="      + od_cnt		// 수량[256]
        // // 					   +" od_dlvy_dat=" + od_dlvy_dat	// 출고희망일자[8]
        // // 					   +" order_nam="   + order_nam		// 주문담당자성명[30]
        // // 					   +" send_mannum=" + send_mannum	// 배송처(딜러코드)[8]
        // // 					   +" crtgbn="      + crtgbn		// 유/무상여부[1]
        // // 					   +" type="        + type			// 규격[4]
        // // 					   +" amount="      + amount		// 출고단가[256]
        // // 					   +" memo="        + memo			// 메모[100]
        // // 					   +" uakey="       + uakey			// 수시주문등록을 위한 권한구분[5]
        // // 					   +" grp_cod="     + grp_cod		// 목적코드 
        // // 					   +" plcy_cd="     + plcy_cd		// 정책코드
        // // 					   ;
        // // 			
        // // 			this.trCntNow++;
        // // 			this.gfn_Transaction("SaveSubList", "term010200m/P1122.mo", "", "", strArg, "fn_callback", false);
        // // 		}
        // // 	}
        // //	
        // //	this.gfn_Msg("successSave", "메세지", "주문되었습니다.");
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_back
        //  * 설명       : 뒤로 클릭시
        //  * Params     : 없음			
        //  * Return     : 없음
        // *******************************************************************************/
        // this.fn_back = function ()
        // {
        // 	this.parent.fn_actionContentsMain("TERM_01_0200F");
        // }
        // 
        // /******************************************************************************
        //  * Function명 : Transaction callback 함수
        //  * 설명       : 조회 처리
        //  * Params     : 없음
        //  * Return     : 없음
        // *******************************************************************************/ 
        // this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        // {
        // // 	trace("Transaction callback ---------------------");
        // // 	trace("-- strSvcID    : " + strSvcID);
        // // 	trace("-- nErrorCode  : " + nErrorCode);
        // // 	trace("-- strErrorMsg : " + strErrorMsg);
        // // 	trace("------------------------------------------");
        // 	
        // 	if(nErrorCode != 0)
        // 	{
        // 		if (strSvcID != "SaveSubList")
        // 		{
        // 			this.gfn_Msg("tranError"+strSvcID, "메세지", strErrorMsg);
        // 			return false;
        // 		}
        // 	}
        // 	else
        // 	{	
        // 		if (strSvcID == "SaveTerminal")
        // 		{
        // 			// 부가장비 여부 확인
        // 			this.fn_checkSubList();
        // 		}
        // 		else if (strSvcID == "SaveEquipment")
        // 		{
        // 			this.gfn_Msg("successSave", "메세지", "주문되었습니다.");
        // 		}
        // 		else if (strSvcID == "subList")
        // 		{
        // 			//trace(this.ds_SubList.saveXML());
        // 			
        // 			this.trCntTot = this.ds_SubList.rowcount;
        // 			this.trCntNow = 0;
        // 			if (this.trCntTot > 0)
        // 			{
        // 				this.fn_saveSubList();
        // 			}
        // 			else
        // 			{
        // 				this.gfn_Msg("successSave", "메세지", "주문되었습니다.");
        // 			}
        // 		}
        // 		else if (strSvcID == "SaveSubList")
        // 		{
        // 			if (this.trCntNow < this.trCntTot)
        // 			{
        // 				this.fn_saveSubList();
        // 			}
        // 			else
        // 			{
        // 				this.gfn_Msg("successSave", "메세지", "주문되었습니다.");
        // 			}
        // 		}
        // 		else if (strSvcID == "ds_ExeptGrp")
        // 		{
        // 			// 주문제한단말기
        // 			this.gfn_CombocodeSearch("ds_ExeptProd", "22", "03", "", "");
        // 		}
        // 		else if (strSvcID == "commCode_PF005")
        // 		{
        // 			this.ds_Type.filter("GRP_COD2=='01'");
        // 			this.ds_Type1.copyData(this.ds_Type, true);
        // 		}
        // 	}
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_callbackPOP
        //  * 설명       : 팝업 CallBack
        //  * Params     : popname	- 팝업을 구분짓는 id
        // 				variant - 팝업이 닫히면서 전달된 값
        //  * Return     : 각 id별 처리
        // *******************************************************************************/ 
        // this.fn_callbackPOP = function(popname,variant)
        // {
        // 	switch (popname)
        // 	{
        // 		case "cbopopProdNam":		// 단말기 모델
        // 			if (!this.gfn_IsNull(variant))
        // 			{
        // 				this.cboCRTGBN.set_index(-1);
        // 				this.dsProdInfo.loadXML(variant);
        // 				
        // 				/**** 2014-08
        // 				한울정보(DC), 정훈정보통신(61) 대리점만 주문가능한 특정 장비모델 추가요청 - 채널영업3팀 이진규과장
        // 				*****/
        // 				var prodCode = this.dsProdInfo.getColumn(0, "PRODCOD");
        // 				if (prodCode == "1433" || prodCode == "1434" || prodCode == "1435" || prodCode == "1436")
        // 				{
        // 					var adpPlaceCode = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 					var userId       = application.gds_UserInfo.getColumn(0, "USER_ID");
        // 					if (adpPlaceCode.substr(0,2) !="DC" && adpPlaceCode.substr(0,2) != "61" && userId.substr(0,2) != "03204")	//ASIS가 03204로 되어있음
        // 					{
        // 						this.gfn_Msg("cannotSelect", "메세지", "해당 모델은 선택 할 수 없습니다.");
        // 						return;
        // 					}
        // 				}
        // 				
        // 				// 단말기 모델
        // 				this.cboProdNam.set_text(this.dsProdInfo.getColumn(0, "VTTNM"));
        // 				this.cboProdNam.PRODCOD = prodCode;
        // 				
        // 				// 단위
        // 				this.staUNIT.set_text(this.dsProdInfo.getColumn(0, "UNIT"));
        // 				
        // 				// 기준단가
        // 				this.staDLVY_AMT.set_text(this.gfn_NumFormat2(this.dsProdInfo.getColumn(0, "DLVY_AMT")));
        // 				
        // 				// 수량에 값이 있으면
        // 				var odcnt = this.gfn_Trim(this.edtOD_CNT.text);
        // 				if (!this.gfn_IsNull(odcnt))
        // 				{
        // 					var dlvyamt = nexacro.toNumber(nexacro.replaceAll(this.staDLVY_AMT.text,",",""));
        // 					var totamt  = this.gfn_NumFormat2(odcnt * dlvyamt);
        // 					this.staTOT_AMT.set_text(totamt);
        // 				}
        // 				
        // 				// 제조사
        // 				this.staFACTNM.set_text(this.dsProdInfo.getColumn(0, "FACTNM"));
        // 				
        // 				// 단말 정책명
        // 				var plcy_cd = this.staPLCY_NM.PLCY_CD;
        // 				if (this.gfn_IsNull(plcy_cd) || plcy_cd == "101001")
        // 					this.staPLCY_NM.set_text(this.dsProdInfo.getColumn(0, "PLCY_NM"));
        // 			}
        // 			
        // 				this.edtPlcyCdTerm.set_value(this.dsProdInfo.getColumn(0, "PLCY_CD"));
        // 				this.edtPlcyNmTerm.set_value(this.dsProdInfo.getColumn(0, "PLCY_NM"));
        // 					
        // 			this.fn_setPlcyCd();
        // 									
        // 			break;
        // 			
        // 		case "cbopopGrpName":		// 단말그룹명
        // 			if (!this.gfn_IsNull(variant))
        // 			{
        // 				var arr = variant.split("|");
        // 				var groupCode = nexacro.replaceAll(arr[0],"-","");
        // 				var adpPlaceCode = application.gds_UserInfo.getColumn(0, "MANNUM");
        // 				
        // 				//주문제한 그룹(본사를 제외하고는 제한. 통합코드 22-02 에 등록된 그룹들) 제한.
        // 				if (this.ds_ExeptGrp.findRow("ITEM_NAM", groupCode) > 0 && adpPlaceCode != "0000000")
        // 				{
        // 					this.gfn_Msg("cannotSelect", "메세지", "선택 불가 항목입니다.\n해당 영업부서로 문의 바랍니다.");
        // 					return;
        // 				}
        // 				
        // 				
        // 				var arr = variant.split("|");
        // 				
        // 				var str = arr[1] + "-" + arr[2] + " " + arr[3];
        // 				this.cboGRP_NAME.set_text(str);
        // 				this.cboGRP_NAME.GRP_COD = groupCode;
        // 				
        // 				// 단말 정책명
        // 				this.staPLCY_NM.set_text(arr[5]);
        // 				this.staPLCY_NM.PLCY_CD = arr[4];	// PLCY_CD 값 임시 저장
        // 				
        // 				this.edtPlcyCdGrp.set_value(arr[4]);
        // 				this.edtPlcyNmGrp.set_value(arr[5]);
        // 				
        // 				
        // 				
        // 			}
        // 			
        // 			//20180403 sms
        // 			this.fn_setPlcyCd();
        // 			
        // 			break;
        // 			
        // 		case "cbopopSendManNum":	// 배송처 (지사/대리점/딜러코드 조회)
        // 			if (!this.gfn_IsNull(variant))
        // 			{
        // 				var arr = variant.split("|");
        // 				var str = arr[0] + " : " + arr[1];
        // 				this.cboSEND_MANNUM.set_text(str);
        // 				this.cboSEND_MANNUM.MANNUM = arr[0];
        // 			}
        // 			break;
        // 			
        // 		case "cbopopCrtgbn":		// 판매/설치 여부
        // 			if (!this.gfn_IsNull(variant))
        // 			{
        // 				this.cboCRTGBN.set_index(variant);
        // 			}
        // 			break;
        // 			
        // 		case "cbopopType":			// 규격
        // 			if (!this.gfn_IsNull(variant))
        // 			{
        // 				this.cboType.set_index(variant);
        // 			}
        // 			break;
        // 	}
        // }
        // 
        // /******************************************************************************
        //  * Function명 : fn_msg_callbackPOP
        //  * 설명       : comMsg 팝업 CallBack
        //  * Params     : popname	- 팝업을 구분짓는 id
        // 				variant	- 팝업이 닫히면서 전달된 값
        //  * Return     : 각 id별 처리
        //  ******************************************************************************/ 
        // this.fn_msg_callbackPOP = function (popname, variant)
        // {
        // 	if (popname == "successSave")			// 주문 성공
        // 	{
        // 		this.fn_back();
        // 	}
        // }
        // 
        // 
        // this.TERM_01_0210M_ontimer = function(obj:Form, e:nexacro.TimerEventInfo)
        // {
        // 	if (e.timerid == 333)
        // 	{
        // 		this.killTimer(333);
        // 		
        // 		switch (this.popGB)
        // 		{
        // 			case "cbopopProdNam":
        // 				var prodgbn = "";
        // 				if (this.parent.div1.sel == "0210")			// 단말기 주문
        // 				{
        // 					prodgbn = "10";
        // 				}
        // 				else if (this.parent.div1.sel == "0220")	// 부가장비 주문
        // 				{
        // 					prodgbn = "20";
        // 				}
        // 				
        // 				var arg = {prodgbn:prodgbn};
        // 				this.gfn_showModal("cbopopProdNam"
        // 								,"COMMON::COMM_01_0310P.xfdl"
        // 								,this.fn_callbackPOP
        // 								,arg
        // 								,true
        // 								,this);
        // 				break;
        // 				
        // 			case "cbopopGrpName":
        // 				this.gfn_showModal("cbopopGrpName"
        // 								,"COMMON::COMM_01_0320P.xfdl"
        // 								,this.fn_callbackPOP
        // 								,null
        // 								,true
        // 								,this);
        // 				break;
        // 				
        // 			case "cbopopSendManNum":
        // 				this.gfn_showModal("cbopopSendManNum"
        // 								,"COMMON::COMM_01_0400P.xfdl"
        // 								,this.fn_callbackPOP
        // 								,null
        // 								,true
        // 								,this);
        // 				break;
        // 				
        // 			case "cbopopCrtgbn":
        // 				var sParam  = {oDataset:this.ds_Gbn			// 바인딩되는 데이타셋					
        // 							,  sTitle:"선택"				// 타이틀
        // 							,  sGrdBodyColId:"VALUE"		// Grid의 Body에 binding 되는 columnID
        // 							  }
        // 					
        // 				this.gfn_showModal("cbopopCrtgbn"
        // 								,"com::comComboList.xfdl"
        // 								,this.fn_callbackPOP
        // 								,sParam
        // 								,true
        // 								,this);
        // 				break;
        // 				
        // 			case "cbopopType":
        // 				var sParam  = {oDataset:this.ds_Type1		// 바인딩되는 데이타셋					
        // 							,  sTitle:"선택"				// 타이틀
        // 							,  sGrdBodyColId:"ITEM_NAM"		// Grid의 Body에 binding 되는 columnID
        // 							  }
        // 					
        // 				this.gfn_showModal("cbopopType"
        // 								,"com::comComboList.xfdl"
        // 								,this.fn_callbackPOP
        // 								,sParam
        // 								,true
        // 								,this);
        // 				break;
        // 		}
        // 	}
        // }
        // 
        // 
        // //20180403 sms 추가
        // this.fn_setPlcyCd = function(){
        // 	
        // 	var ctrgbn = this.cboCRTGBN.value;   //판매설치여부...
        // 	var grp_cod = this.cboGRP_NAME.GRP_COD;  //단말기그룹
        // 	if(ctrgbn=="2"){
        // 		this.staPLCY_NM.PLCY_CD = "000000";
        // 		this.staPLCY_NM.set_text("판매");
        // 	}else if(ctrgbn=="3"){
        // 		this.staPLCY_NM.PLCY_CD = "200001";
        // 		this.staPLCY_NM.set_text("할부판매");
        // 	}else if(ctrgbn=="4"){
        // 		this.staPLCY_NM.PLCY_CD = "000014";
        // 		this.staPLCY_NM.set_text("V판매");
        // 	}else{
        // 		if(grp_cod=="101001"||this.gfn_IsNull(grp_cod)){
        // 			this.staPLCY_NM.PLCY_CD = this.edtPlcyCdTerm.value;
        // 			this.staPLCY_NM.set_text(this.edtPlcyNmTerm.value);
        // 		}else{
        // 			this.staPLCY_NM.PLCY_CD = this.edtPlcyCdGrp.value;
        // 			this.staPLCY_NM.set_text(this.edtPlcyNmGrp.value);
        // 		}
        // 
        // 	}
        // 	
        // }
        // 
        // 
        // 
        // this.cboProdNam_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
        // {
        // 	this.fn_setPlcyCd();
        // }
        // 
        // this.cboGRP_NAME_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
        // {
        // 	this.fn_setPlcyCd();
        // }
        // 
        // this.cboCRTGBN_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
        // {
        // 	this.fn_setPlcyCd();
        // }

        this.TERM_01_0210M_onload = function(obj,e)
        {
        	this.cboProdNam.set_text("test123");
        	//this.cboProdNam.PRODCOD = "zxcv1";
        }

        this.edtOD_CNT_onsetfocus = function(obj,e)
        {
        	trace(this.cboProdNam.text);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TERM_01_0210M_onload, this);
            this.addEventHandler("ontimer", this.TERM_01_0210M_ontimer, this);
            this.cboProdNam.addEventHandler("ondropdown", this.cboProdNam_ondropdown, this);
            this.cboProdNam.addEventHandler("onitemchanged", this.cboProdNam_onitemchanged, this);
            this.edtOD_CNT.addEventHandler("ontextchanged", this.edtOD_CNT_ontextchanged, this);
            this.edtOD_CNT.addEventHandler("onsetfocus", this.edtOD_CNT_onsetfocus, this);
            this.cboGRP_NAME.addEventHandler("ondropdown", this.cboGRP_NAME_ondropdown, this);
            this.cboGRP_NAME.addEventHandler("onitemchanged", this.cboGRP_NAME_onitemchanged, this);
            this.cboSEND_MANNUM.addEventHandler("ondropdown", this.cboSEND_MANNUM_ondropdown, this);
            this.cboCRTGBN.addEventHandler("ondropdown", this.cboCRTGBN_ondropdown, this);
            this.cboCRTGBN.addEventHandler("onitemchanged", this.cboCRTGBN_onitemchanged, this);
            this.cboType.addEventHandler("ondropdown", this.cboType_ondropdown, this);
            this.cboType.addEventHandler("ontextchanged", this.cboType_ontextchanged, this);
            this.btnOrder.addEventHandler("onclick", this.btnOrder_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);

        };

        this.loadIncludeScript("RP_80244_TERM_01_0210M.xfdl");

       
    };
}
)();
