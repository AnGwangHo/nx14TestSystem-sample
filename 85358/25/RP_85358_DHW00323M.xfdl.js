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
                this.set_name("mainForm");
                this.set_titletext("측정결과 > 화학물질 사용실태");
                this._setFormPosition(0,0,975,612);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wm37a", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_NO\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CODE_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wm37b", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_NO\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CODE_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrem37", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"WEM_MNG_SN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USE_ACCDT_SEQ\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MNFCTUR_USE_YN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_QY\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_UNIT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REMARK\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MSDS_MANAGE_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"chmclsYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROCS_NM\">공정명</Col></Row><Row><Col id=\"PROCS_NM\">익스플로러에서</Col></Row><Row><Col id=\"PROCS_NM\">셀클릭시 </Col></Row><Row><Col id=\"PROCS_NM\">전체 선택만됨</Col></Row><Row><Col id=\"PROCS_NM\">선택이 풀리지 않고</Col></Row><Row><Col id=\"PROCS_NM\">글자의 커서이동불가</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrem37_bak", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"WEM_MNG_SN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USE_ACCDT_SEQ\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MNFCTUR_USE_YN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_QY\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_UNIT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REMARK\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MSDS_MANAGE_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrem37_exl", this);
            obj._setContents("<ColumnInfo><Column id=\"공정코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"공정명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"화학물질코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"화학물질명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"제조또는사용여부\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"사용용도코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"사용용도명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"월취급량\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSmplExlDwn", this);
            obj._setContents("<ColumnInfo><Column id=\"공정코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"공정명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"화학물질코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"화학물질명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"제조또는사용여부\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"사용용도코드\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"사용용도명\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"월취급량\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"공정코드\">28063</Col><Col id=\"공정명\">제조공정</Col><Col id=\"화학물질명\">디클로로메탄</Col><Col id=\"제조또는사용여부\">사용</Col><Col id=\"사용용도코드\">77</Col><Col id=\"사용용도명\">유동파라핀제거</Col><Col id=\"월취급량\">2000</Col><Col id=\"단위\">01</Col><Col id=\"비고\">단위코드는 아래 참고</Col></Row><Row><Col id=\"공정코드\">28063</Col><Col id=\"공정명\">제조공정</Col><Col id=\"화학물질명\">디클로로메탄</Col><Col id=\"제조또는사용여부\">사용</Col><Col id=\"사용용도코드\">77</Col><Col id=\"월취급량\">2000</Col><Col id=\"사용용도명\">유동파라핀제거</Col><Col id=\"단위\">01</Col><Col id=\"비고\">ton</Col></Row><Row><Col id=\"단위\">02</Col><Col id=\"비고\">Kg</Col></Row><Row><Col id=\"단위\">03</Col><Col id=\"비고\">g</Col></Row><Row><Col id=\"단위\">04</Col><Col id=\"비고\">m³</Col></Row><Row><Col id=\"단위\">05</Col><Col id=\"비고\">ℓ</Col></Row><Row><Col id=\"단위\">06</Col><Col id=\"비고\">mℓ</Col></Row><Row><Col id=\"단위\">07</Col><Col id=\"비고\">dB</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrem37_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"WEM_MNG_SN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USE_ACCDT_SEQ\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"CHMCLS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MNFCTUR_USE_YN\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"USEPRPS_NM\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_QY\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MT_TRTMNT_UNIT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REMARK\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"MSDS_MANAGE_CD\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"REGIST_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_ID\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"UPDATE_DT\" size=\"256\" summ=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"out_ds\" type=\"STRING\" size=\"256\"/><Column id=\"svc_param\" type=\"STRING\" size=\"256\"/><Column id=\"sql_params\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search_code", this);
            obj._setContents("<ColumnInfo><Column id=\"out_ds\" type=\"STRING\" size=\"256\"/><Column id=\"svc_param\" type=\"STRING\" size=\"256\"/><Column id=\"sql_params\" type=\"STRING\" size=\"256\"/><Column id=\"obj_id\" type=\"STRING\" size=\"256\"/><Column id=\"bind_column\" type=\"STRING\" size=\"256\"/><Column id=\"obj_code\" type=\"STRING\" size=\"256\"/><Column id=\"obj_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"svc_param\">COMMCODE</Col><Col id=\"sql_params\">CODE_ID=HW37A</Col><Col id=\"out_ds\">ds_wm37a</Col></Row><Row><Col id=\"svc_param\">COMMCODE</Col><Col id=\"sql_params\">CODE_ID=HW37B</Col><Col id=\"out_ds\">ds_wm37b</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rcv1", this);
            obj._setContents("<ColumnInfo><Column id=\"GONGJUNG_CODE\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"GONGJUNG_NAME\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"PROCESSHELP\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"GONGJUNG_STD_CODE\" size=\"256\" summ=\"default\" type=\"STRING\"/><Column id=\"BM_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "27", "500", "5", null, null, this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.style.set_background("khaki");
            obj.style.set_color("#46463dff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "28", "400", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("공정별 화학물질 사용실태");
            obj.set_cssclass("Sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "47", "500", "5", null, null, this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.style.set_background("khaki");
            obj.style.set_color("#46463dff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List", "absolute", "0", "52", null, null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_wrem37");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodataimage("URL('theme://images/img_nodata.png')");
            obj.getSetter("griduserproperty").set("no,checkbox");
            obj.getSetter("chkData").set("PROCS_CD:R:공정코드");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"58\"/><Column size=\"103\"/><Column size=\"137\"/><Column size=\"84\"/><Column size=\"58\"/><Column size=\"162\"/><Column size=\"69\"/><Column size=\"56\"/><Column size=\"109\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"25\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"부서 또는 공정\"/><Cell col=\"2\" text=\"화학물질명(상품명)\"/><Cell col=\"3\" rowspan=\"2\" text=\"제조 또는 사용여부\" wordwrap=\"english\"/><Cell col=\"4\" colspan=\"2\" text=\"사용용도\"/><Cell col=\"6\" colspan=\"2\" text=\"월 취급량 (Kg/톤)\"/><Cell col=\"8\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" text=\"공정코드\"/><Cell row=\"1\" col=\"1\" text=\"부서/공정명\"/><Cell row=\"1\" col=\"2\" text=\"물질명/상품명\"/><Cell row=\"1\" col=\"4\" text=\"용도코드\"/><Cell row=\"1\" col=\"5\" text=\"용도명\"/><Cell row=\"1\" col=\"6\" text=\"월 취급량\"/><Cell row=\"1\" col=\"7\" text=\"단위\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:PROCS_CD\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:PROCS_NM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"2\" edittype=\"expr:dataset.parent.setEdit()\" style=\"align:left;\" text=\"bind:CHMCLS_NM\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:MNFCTUR_USE_YN\" combodataset=\"ds_wm37b\" combocodecol=\"CODE_NO\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:USEPRPS_CD\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left;\" text=\"bind:USEPRPS_NM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"6\" edittype=\"masknumber\" editfilter=\"number\" style=\"align:center;\" text=\"bind:MT_TRTMNT_QY\" editautoselect=\"true\" editlimitbymask=\"none\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:MT_TRTMNT_UNIT\" combodataset=\"ds_wm37a\" combocodecol=\"CODE_NO\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMARK\" editautoselect=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" celltype=\"summary\" style=\"align:left;\" expr=\"expr:&quot; &quot;+dataset.rowcount+&quot;건이 조회 되었습니다.&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add", "absolute", null, "28", "9.23%", "22", "38.97%", null, this);
            obj.set_taborder("20");
            obj.set_text("추가");
            obj.set_cssclass("Btn_WF_Add2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert", "absolute", null, "28", "9.23%", "22", "29.23%", null, this);
            obj.set_taborder("21");
            obj.set_text("삽입");
            obj.set_cssclass("Btn_WF_Insert2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete", "absolute", null, "28", "9.23%", "22", "19.49%", null, this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.set_cssclass("Btn_WF_Del3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Report", "absolute", null, "28", "9.23%", "22", "9.74%", null, this);
            obj.set_taborder("23");
            obj.set_text("리포트");
            obj.set_cssclass("Btn_WF_Report2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "28", "9.23%", "21", "0%", null, this);
            obj.set_taborder("24");
            obj.set_text("저장");
            obj.set_cssclass("Btn_WF_Save3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_down", "absolute", "0", "628", null, null, "0", "-76", this);
            obj.set_taborder("25");
            obj.set_binddataset("dsSmplExlDwn");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"86\"/><Column size=\"119\"/><Column size=\"103\"/><Column size=\"153\"/><Column size=\"111\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"공정코드\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"화학물질코드\"/><Cell col=\"3\" text=\"화학물질명\"/><Cell col=\"4\" text=\"제조또는사용여부\"/><Cell col=\"5\" text=\"사용용도코드\"/><Cell col=\"6\" text=\"사용용도명\"/><Cell col=\"7\" text=\"월취급량\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:공정코드\"/><Cell col=\"1\" text=\"bind:공정명\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:화학물질코드\"/><Cell col=\"3\" text=\"bind:화학물질명\"/><Cell col=\"4\" text=\"bind:제조또는사용여부\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:사용용도코드\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:사용용도명\"/><Cell col=\"7\" text=\"bind:월취급량\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_UploadSample", "absolute", null, "0", "9.23%", "22", "38.97%", null, this);
            obj.set_taborder("26");
            obj.set_text("업로드양식");
            obj.set_cssclass("Btn_WF_Excel2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Upload00", "absolute", null, "0", "9.23%", "22", "29.23%", null, this);
            obj.set_taborder("27");
            obj.set_text("업로드");
            obj.set_cssclass("Btn_WF_Upload2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset", "absolute", null, "0", "9.23%", "22", "19.49%", null, this);
            obj.set_taborder("28");
            obj.set_text("초기화");
            obj.set_cssclass("Btn_WF_Reset2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 975, 612, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("측정결과 > 화학물질 사용실태");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_85358_DHW00323M.xfdl", function() {
        /******************************************************************************																																		
        * Name     	: DHW00323M.xfdl		KHW0440U.xfdl
        * Title    	: 측정결과 > 화학물질 사용실태
        * Desc     	: 측정결과 > 화학물질 사용실태
        * 작성자	: MBK
        * 작성일	: 2018-12-18
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018-12-18     	      MBK  	            	최초 생성 
        *******************************************************************************
        */

        var chmclsYn = 'YES';

        this.WEM_MNG_SN = this.parent.parent.WEM_MNG_SN;
        this.WEM_STTUS = this.parent.parent.WEM_STTUS;

        this.G_USER_ID = application.G_UNIQ_ID;
        this.WORK_CD = "010";

        
        /*
        //test용
        this.G_USER_ID = "test";
        this.WEM_MNG_SN = '2012131334490012395';
        this.WEM_STTUS = "";
        */

        // 로딩시
        this.mainForm_onload = function(obj,e){

        	this.gfn_FormOnLoad(obj);
        	this.setDisable(); //비활성화
        	
        	var codeParams = ""; // 검색시 공통으로 추가할 파라미터가 있을시 사용 
        /* @@ 테스트용 임시주석 
        	this.gfn_SearchCode("DHW", codeParams);
        */
        	// 검색영역 바인딩
        	//this.gfn_SetSearchDivBind(this.div_Search, this.DS_HOS_STATE);
        	
        	// 검색 초기화 ===========================================
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        /* @@ 테스트용 임시주석 
        	this.fn_Search();
        */
        	
        	this.parent.parent.chkUpdateStat = false; // 종료시 저장 체크
        }

        //비활성화
        this.setDisable = function()
        {
        	if(this.WEM_STTUS != "00"){
        		this.btn_Save.set_enable(false);
        		this.btn_Add.set_enable(false);
        		this.btn_Delete.set_enable(false);
        		this.btn_Insert.set_enable(false);
        	}
        }

        // 조회
        this.fn_Search = function()
        {
        	var params = "WEM_MNG_SN="+this.WEM_MNG_SN;
        	var outDs = "ds_wrem37";
        	this.ds_search.setColumn(0,"out_ds", outDs);
        	this.ds_search.setColumn(0,"svc_param", "DHW00323_R1");
        	this.gfn_Search("search", "DHW", outDs, params);
        }

        // callback
        this.fn_callBack = function(svcID,errorCode,errorMsg)
        {
        	//trace(svcID, errorCode, errorMsg);
        	if (errorCode < 0) 
        	{
        		Ex.core.showMsg(sErrorMsg);
        		return false;
        	}
        	
        	// 조회
        	if(svcID == "search"){
        		if(this.ds_wrem37.rowcount ==0){

        			this.ds_wrem37.copyData(this.ds_wrem37_bak);
        			this.ds_wrem37.setColumn(0, "WEM_MNG_SN", this.WEM_MNG_SN);
        			dsStats = 0;
        		}
        		cmbStats = true;
        	}
        	
        	if(svcID == "DHW00323_W1"){
        		this.parent.parent.chkUpdateStat = false; // 저장 체크 초기화
        		this.gfn_Alert("내용이 저장되었습니다.");
        		cmbStats = true;
        		this.fn_Search();
        	}
        }

        //단축키
        this.mainForm_onkeydown = function(obj,e)
        {
        	if(e.altKey){
        		if( e.keycode == 49 ) this.btn_Add_onclick();	//1 추가
        		if( e.keycode == 50 ) this.btn_Insert_onclick();//2 삽입
        		if( e.keycode == 51 ) this.btn_Delete_onclick();//3 삭제
        		if( e.keycode == 83 ) this.btn_Save_onclick();	//s 저장
        	}
        }

        // reset
        this.btn_Reset_onclick = function(obj,e)
        {
        	this.gfn_Confirm("새로 입력된 데이터가 모두 사라집니다.\n 초기화 하시겠습니까?", "", "", "", function (sId, sResult) {
        		if(sResult == "YES") {
        			this.reload();
        		}
        	});
        }

        // 추가
        this.btn_Add_onclick = function(obj,e)
        {
        	var objDs = this.ds_wrem37;
        	var nChkCnt = objDs.findRow("CHK_BOX", "1");

        	if(nChkCnt != -1){

        		objDs.set_updatecontrol(false);
        		var nRowCnt = objDs.rowcount;
        		
        		for(var i=0; i<nRowCnt; i++){

        			var iChk = objDs.getColumn(i, "CHK_BOX");
        			
        			if(iChk == "1"){
        				var iAddRow = objDs.addRow();
        				objDs.copyRow(iAddRow, objDs, i);
        				objDs.setColumn(iAddRow, "CHK_BOX", "0");
        			}
        		}
        		objDs.set_updatecontrol(true);
        		
        	} else {
        		this.ds_wrem37.addRow();
        	}

        	this.grd_List.setFocus();
        	this.grd_List.setCellPos(3);
        	this.grd_List.showEditor(true);
        }

        //삽입
        this.btn_Insert_onclick = function(obj,e)
        {
        	var objDs = this.ds_wrem37;
        	var objDsTmp = this.ds_wrem37_tmp;
        	var nChkCnt = objDs.findRow("CHK_BOX", "1");
        	
        	if(nChkCnt > 0){

        		objDsTmp.clearData();
        		var nRow = objDs.rowposition;
        		var nRowCnt = objDs.rowcount;
        		
        		for(var i=0; i<nRowCnt; i++){
        			var iChk = objDs.getColumn(i, "CHK_BOX");
        			
        			if(iChk == "1"){
        				var iAddRow = objDsTmp.addRow();
        				objDsTmp.copyRow(iAddRow, objDs, i);
        			}
        		}

        		objDs.set_updatecontrol(false);
        		var nTmpRowCnt = objDsTmp.rowcount;
        		
        		for(var i=0; i<nTmpRowCnt; i++){
        			var iInsRow = objDs.insertRow(nRow);
        			objDs.copyRow(iInsRow, objDsTmp, i);
        			nRow++;
        		}
        		
        		objDs.set_updatecontrol(true);
        		
        	} else {
        		var nRow = objDs.rowposition;
        		objDs.insertRow(nRow);
        	}

        	this.grd_List.setFocus();
        	this.grd_List.setCellPos(3);
        	this.grd_List.showEditor(true);
        }

        // 삭제
        this.btn_Delete_onclick = function(obj,e)
        {
        	if(this.ds_wrem37.rowcount > 0){
        		this.ds_wrem37.deleteRow(this.ds_wrem37.rowposition);
        	}
        }

        // 리포트
        this.btn_Report_onclick = function(obj,e)
        {
        	var sRptId = "reportPopup";
        	var sRptFile = "KHW0440R1.mrd";
        	var oArg = "["+this.WEM_MNG_SN+"]";
        	
        	var sRptCallBack = "fn_rptCallback";

        	this.gfn_OpenReport(sRptId, sRptFile, oArg);
        }

        // 저장
        this.btn_Save_onclick = function(obj,e)
        {
        	if(this.WEM_STTUS=="00"||this.WEM_STTUS==""||this.WEM_STTUS==null){

        		this.gfn_Confirm("저장하시겠습니까?", "", "", "", function (sId, sResult) {
        			if(sResult == "YES") {
        				// 그리드 필수체크
        				if(this.gfn_ChkGridData([this.grd_List])) return false;
        				this.fn_save();
        			}
        		});
        		
        	} else {
        		this.gfn_Alert("자료가 전송되었으므로\n"+ "새로 입력(수정)된 내용은 저장되지 않습니다.");
        		this.fn_Search();
        	}
        }

        this.fn_save = function()
        {
        	// 유효성검사 및 입력값 설정
        	var bErrYn = false;
        	var nErrRow = -1;
        	var strErrMsg = "";
        	var nRowCnt = this.ds_wrem37.rowcount;
        	var nSeq = 1;
        	
        	for(var i=0; i<nRowCnt; i++){

        		nErrRow = i;
        		strErrMsg = "";
        		
        		var iProcsCd = this.gfn_Trim(this.ds_wrem37.getColumn(i, "PROCS_CD"));
        		if(iProcsCd.length != 5 || !this.gfn_IsDigit(iProcsCd)){
        			strErrMsg = "잘못된 [공정코드] 입니다.";
        			break;
        		}
        		
        		var iProcsNm = this.gfn_Trim(this.ds_wrem37.getColumn(i, "PROCS_NM"));
        		if(iProcsNm.length < 1){
        			strErrMsg = "잘못된 [공정명] 입니다.";
        			break;
        		}

        		var iChmclsNm = this.gfn_Trim(this.ds_wrem37.getColumn(i, "CHMCLS_NM"));
        		if(iChmclsNm.length < 1){
        			strErrMsg = "잘못된 [화학물질명] 입니다.";
        			break;
        		}
        		
        		var iChmclsCd = this.gfn_Trim(this.ds_wrem37.getColumn(i, "CHMCLS_CD"));
        		if(iChmclsCd.length > 0){
        			if(iChmclsCd.length != 5 || !this.gfn_IsDigit(iChmclsCd)){
        				strErrMsg = "잘못된 [화학물질코드] 입니다.";
        				break;
        			}
        		}

        		var iMnfcturUseYn = this.gfn_Trim(this.ds_wrem37.getColumn(i, "MNFCTUR_USE_YN"));
        		if(iMnfcturUseYn.length < 1){
        			strErrMsg = "잘못된 [제조 또는 사용여부] 입니다.";
        			break;
        		}

        		var iUseprpsCd = this.gfn_Trim(this.ds_wrem37.getColumn(i, "USEPRPS_CD"));
        		if(iUseprpsCd.length != 2 || !this.gfn_IsDigit(iUseprpsCd)){
        			strErrMsg = "잘못된 [사용용도코드] 입니다.";
        			break;
        		}
        		
        		var iUseprpsNm = this.gfn_Trim(this.ds_wrem37.getColumn(i, "USEPRPS_NM"));
        		if(iUseprpsNm.length < 1){
        			strErrMsg = "잘못된 [사용용도명] 입니다.";
        			break;
        		}

        		this.ds_wrem37.setColumn(i, "USE_ACCDT_SEQ", nSeq);
        		this.ds_wrem37.setColumn(i, "REGIST_ID", this.G_USER_ID);
        		this.ds_wrem37.setColumn(i, "UPDATE_ID", this.G_USER_ID);
        		this.ds_wrem37.setColumn(i, "WEM_MNG_SN", this.WEM_MNG_SN);
        		nSeq++;
        	}
        	
        	if(strErrMsg != ""){
        		this.gfn_Alert(strErrMsg);
        		this.ds_wrem37.set_rowposition(nErrRow);
        		this.grd_List.setFocus();
        		return;
        	}

        	var sSvcID = "DHW00323_W1";
        	var sController = "DHW/DHW00323_W1.do";
        	var sInDatasets = "ds_wrem37=ds_wrem37:N";
        	var sOutDatasets  = "";
        	var sArgs = "WEM_MNG_SN="+this.WEM_MNG_SN;

        	this.gfn_Transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", true);

        }

        /****************************************************************
        	데이터셋 이벤트 관련
        ****************************************************************/
        this.ds_wrem37_onrowposchanged = function(obj,e)
        {
        	cmbStats = false;
        }

        this.ds_wrem37_oncolumnchanged = function(obj,e)
        {
        	cmbStats = false;
        	if(this.gfn_DsIsUpdated(obj)){
        		this.parent.parent.chkUpdateStat = true; // 종료시 저장 체크
        	}
        }
        this.ds_wrem37_onload = function(obj,e)
        {
        	dsStats = 0;
        }

        this.ds_wrem37_onrowsetchanged = function(obj,e)
        {
        	// insert 일때만 실행
        	if(e.reason != Dataset.REASON_APPEND) return;
        	
        	var nRow = e.row;
        	
        	if( this.ds_wrem37.getColumn(nRow,"USEPRPS_CD") == "" ||
        		this.ds_wrem37.getColumn(nRow,"USEPRPS_CD") == null){
        		
        		this.ds_wrem37.setColumn(nRow,"USEPRPS_CD", 77);
        	}

        	//this.ds_wrem37.addRow();
        	this.ds_wrem37.setColumn(nRow, "WEM_MNG_SN", this.WEM_MNG_SN);

        	if(this.ds_wrem37.rowcount > 0){
        		//this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_CD", this.ds_wrem37.getColumn(this.ds_wrem37.rowposition-1,"PROCS_CD"));
        		//this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_NM", this.ds_wrem37.getColumn(this.ds_wrem37.rowposition-1,"PROCS_NM"));
        		//this.ds_wrem37.setColumn(nRow, "MNFCTUR_USE_YN", this.ds_wrem37.getColumn(nRow-1,"MNFCTUR_USE_YN"));
        		//this.ds_wrem37.setColumn(nRow, "MT_TRTMNT_QY", this.ds_wrem37.getColumn(nRow-1,"MT_TRTMNT_QY"));
        		//this.ds_wrem37.setColumn(nRow, "MT_TRTMNT_UNIT", this.ds_wrem37.getColumn(nRow-1,"MT_TRTMNT_UNIT"));
        	}

        	if( this.ds_wrem37.getColumn(nRow,"MNFCTUR_USE_YN") == "" ||
        		this.ds_wrem37.getColumn(nRow,"MNFCTUR_USE_YN") == null){
        		this.ds_wrem37.setColumn(nRow, "MNFCTUR_USE_YN", 1);
        	}

        	//this.grd_List.setCellPos(2);
        	this.grd_List.setFocus();
        	this.grd_List.setCellPos(3);
        	this.grd_List.showEditor(true);
        }

        // 그리드 이벤트 =========================================================
        this.grd_List_onexpandup = function(obj,e)
        {
        	var nCell = e.cell;
        	
        	//공정조회
        	if(nCell==3) this.fn_getGongJungCd();
        	
        	// 유해물질코드
        	if(nCell==4){
        		this.gfn_Confirm("화학물질명은 '확인',\n"+" 상품입력명은 '취소'를 선택하세요", "", "", "", function (sId, sResult) {
        			//this.ds_wrem37.setColumn(e.row, "chmclsYn", sResult);
        			chmclsYn = sResult;
        			if(sResult == "YES") {
        				this.fn_getYHaeCd();

        			} else {
        				//상품명 입력
        				this.grd_List.setFocus();
        				this.grd_List.setCellPos(4);
        				this.grd_List.showEditor(true);
        			}
        			
        			//trace(this.ds_wrem37.saveXML());
        		});
        	}
        	
        	if(nCell == 7) this.fn_accdtCd(); //용도명
        }

        //상품명 입력
        this.setEdit = function()
        {
        	return chmclsYn == 'YES' ? "none" : "normal";
        }

        this.grd_List_onselectchanged = function(obj,e)
        {
        	if(e.oldcell == 7){ // MT_TRTMNT_QY,월취급량

        		if( this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "USEPRPS_CD") == "" ||
        			this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "USEPRPS_CD") == null){
        			
        			this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "USEPRPS_CD", 77); // USEPRPS_CD,용도코드
        		}
        	}
        }

        this.grd_List_onkeydown = function(obj,e)
        {
        	var nChar = e.keycode;
        	
        	if(nChar == 13){//엔터
        		if(this.grd_List.currentcell < (this.grd_List.getCellCount()-1)){
        			this.grd_List.moveToNextCell(); // Enter
        		} else {
        			//this.btn_Add_onclick(obj);
        		}
        	}else if(nChar == 120){   // F9
        		this.fn_getFormGridName("1-1");
        	}
        }

        this.grd_List_onchar = function(obj,e)
        {
        	var strPreText = e.pretext;
        	var strPostText = e.posttext;
        	var nRow = e.row;
        	
        	if(strPreText != strPostText){
        		this.ds_wrem37.setColumn(nRow, "CHMCLS_CD", "");
        	}
        }

        /************************************************************
        엑셀 업로드
        ************************************************************/
        this.btn_Upload_onclick = function(obj,e)
        {
        	this.ds_wrem37_exl.clearData();
        	
        	var excelParam = 
        	{
        		  sheet:""
        		, startrow:2
        		, bindcolumns:["공정코드" ,"공정명" ,"화학물질코드" ,"화학물질명" ,"제조또는사용여부" ,"사용용도코드" ,"사용용도명" ,"월취급량" ,"단위", "비고"]
        		, callback:"fn_callbackExcelImport"
        	};
        	
        	this.gfn_ExcelImport(this.ds_wrem37_exl, excelParam);
        }

        this.fn_callbackExcelImport = function()
        {
        	var nNxtUseAccdtSeq = nexacro.toNumber(this.ds_wrem37.getMax("WEM_PLAN_SEQ")) + 1;
        	var nRowCnt = this.ds_wrem37_exl.rowcount;

        	if(nRowCnt < 1){
        		var strErrMsg = "엑셀 업로드 양식에 입력된 데이터가 없습니다.";
        		this.gfn_Alert(strErrMsg);
        		return;
        	}

        	for(var i=0; i<nRowCnt; i++){

        		var iAddRow = this.ds_wrem37.addRow();

        		this.ds_wrem37.setColumn(iAddRow, "WEM_MNG_SN", this.WEM_MNG_SN);
        		this.ds_wrem37.setColumn(iAddRow, "WEM_PLAN_SEQ", nNxtUseAccdtSeq++);
        		this.ds_wrem37.setColumn(iAddRow, "PROCS_CD", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "공정코드")));
        		this.ds_wrem37.setColumn(iAddRow, "PROCS_NM", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "공정명")));
        		this.ds_wrem37.setColumn(iAddRow, "CHMCLS_CD", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "화학물질코드")));
        		this.ds_wrem37.setColumn(iAddRow, "CHMCLS_NM", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "화학물질명")));

        		var iMnfcturUseYnCd = null;
        		var iMnfcturUseYnNm = this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "제조또는사용여부"));
        		if(iMnfcturUseYnNm == "제조"){
        			iMnfcturUseYnCd = "1";
        		}
        		else if(iMnfcturUseYnNm == "사용"){
        			iMnfcturUseYnCd = "2";
        		}
        		
        		this.ds_wrem37.setColumn(iAddRow, "MNFCTUR_USE_YN", iMnfcturUseYnCd);
        		this.ds_wrem37.setColumn(iAddRow, "USEPRPS_CD", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "사용용도코드")));
        		this.ds_wrem37.setColumn(iAddRow, "USEPRPS_NM", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "사용용도명")));
        		this.ds_wrem37.setColumn(iAddRow, "MT_TRTMNT_QY", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "월취급량")));
        		this.ds_wrem37.setColumn(iAddRow, "MT_TRTMNT_UNIT", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "단위")));
        		this.ds_wrem37.setColumn(iAddRow, "REMARK", this.gfn_Trim(this.ds_wrem37_exl.getColumn(i, "비고")));
        		this.ds_wrem37.setColumn(iAddRow, "REGIST_ID", this.G_USER_ID);
        		this.ds_wrem37.setColumn(iAddRow, "UPDATE_ID", this.G_USER_ID);
        	}
        	
        	this.gfn_Alert("엑셀 업로드가 완료되었습니다.");
        }

        
        // 양식 다운로드
        this.btn_UploadSample_onclick = function(obj,e)
        {
        	this.gfn_ExcelExport(this.grd_down, "", "화학물질사용실태업로드양식");
        }

        
        // 그리드에서 F9 키를 눌렀을때...
        this.fn_getFormGridName = function(argGungun)
        {
        	var currCell;
        	
        	if(argGungun == "1-1"){

        		currCell = this.grd_List.currentcell;

        		// 공정코드
        		if((currCell == 2)||(currCell == 3)) this.fn_getGongJungCd(argGungun);
        		
        		if(currCell == 4){
        		
        			this.gfn_Confirm("화학물질명은 '예',\n"+" 상품입력명은 '아니오'를 선택하세요", "", "", "", function (sId, sResult) {
        				chmclsYn = sResult;
        				if(sResult == "YES") {
        					this.fn_getYHaeCd();
        					
        				} else {
        					//상품명 입력
        					this.grd_List.setFocus();
        					this.grd_List.setCellPos(4);
        					this.grd_List.showEditor(true);
        				}
        			});
        		}
        		
        		if((currCell == 6)||(currCell == 7)) this.fn_accdtCd(argGungun);
        	}
        }

        // 측정대상 공정 조회
        this.fn_getGongJungCd = function(gubun)
        {
        	this.ds_rcv1.clear();
        	
        	var strInArgument = "";
        	var vCurrCellText = this.gfn_Trim(this.grd_List.getEditText());
        	var vDsValue = this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "PROCS_NM");

        	if(vDsValue == null){
        		strInArgument = vCurrCellText;
        	}
        	else{
        		strInArgument = vDsValue;
        	}
        	
        	var sPopId = "DHW00331P05";
        	var oArg = { arggong_nm : strInArgument
        				 ,argOutDs:this.ds_rcv1
        			   };
        	var oOption = {title: "측정대상 공정조회"};
        	var sPopupCallBack = "fn_PopCallback";
        	
        	this.gfn_OpenComPopup(sPopId, oArg, sPopupCallBack, oOption);
        }

        // 측정대상 유해인자 조회
        this.fn_getYHaeCd = function()
        {
        	this.ds_rcv1.clear();
        	
        	var strInArgument = "";

        	var vCurrCellText = this.gfn_Trim(this.grd_List.getEditText());
        	var vDsValue = this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "CHMCLS_NM");
        	
        	if(this.gfn_IsNull(vDsValue)){
        		strInArgument = vCurrCellText;
        	}else{
        		strInArgument = vDsValue;
        	}

        	var sPopId = "DHW00900P02";
        	var sUrl = "dhw::DHW00900P02.xfdl";
        	var oArg = { strInArgument : strInArgument
        				,argOutDs:this.ds_rcv1
        				};
        	var oOption = {title:"DHW0900P2"};
        	var sPopupCallBack = "fn_PopCallback";
        	
        	this.gfn_OpenPopup(sPopId, sUrl, oArg, sPopupCallBack, oOption);
        }

        // 사용용도 조회
        this.fn_accdtCd = function()
        {
        	this.ds_rcv1.clear();
        	
        	var strInArgument = "";
        	
        	var vCurrCellText = this.gfn_Trim(this.grd_List.getEditText());
        	var vDsValue = this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "USEPRPS_NM");

        	if(this.gfn_IsNull(vDsValue)){
        		strInArgument = vCurrCellText;
        	}else{
        		strInArgument = vDsValue;
        	}

        	// 사용용도 조회
        	var sPopId = "DHW00323P01";
        	var oArg = { argedt_accdtNm : strInArgument
        				 ,argOutDs:this.ds_rcv1
        			   };
        	var oOption = {title: "사용용도 조회"};
        	var sPopupCallBack = "fn_PopCallback";
        	
        	this.gfn_OpenComPopup(sPopId, oArg, sPopupCallBack, oOption);
        }

        // 팝업 Callback
        this.fn_PopCallback = function(sPopupId,strVal)
        {	
        	trace(sPopupId + ": return Value=============="+strVal);
        	if(strVal == undefined) return;

        	if(sPopupId =="DHW00331P05"){
        		if(this.ds_rcv1.rowcount == 0) return;
        		
        		var PROCS_CD = this.ds_rcv1.getColumn(0, "GONGJUNG_CODE");
        		var PROCS_NM = this.ds_rcv1.getColumn(0, "GONGJUNG_NAME");

        		var curNm = this.ds_wrem37.getColumn(this.ds_wrem37.rowposition, "PROCS_NM");
        		
        		this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_CD", PROCS_CD);
         		if(curNm == undefined || curNm.length == 0) this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_NM", PROCS_NM);
         		/*
         		this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_CD", PROCS_CD);
         		this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "PROCS_NM", PROCS_NM);
         		*/
        	}
        	
        	if(sPopupId =="DHW00900P02"){
        		if(this.ds_rcv1.rowcount == 0) return;
        	
         		this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "CHMCLS_CD", this.ds_rcv1.getColumn(0, "MATTER"));
         		this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "CHMCLS_NM", this.ds_rcv1.getColumn(0, "BM_HNAME"));
        	}
        	
        	if(sPopupId =="DHW00323P01"){
        		if(this.ds_rcv1.rowcount == 0) return;
        		
        		//trace(this.ds_rcv1.saveXML());
        		var USEPRPS_CD = this.ds_rcv1.getColumn(0, "CODE");
        		var USEPRPS_NM = this.ds_rcv1.getColumn(0, "CODE_NM");
        		
        		if(USEPRPS_CD == "77"){
        			this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "USEPRPS_CD", USEPRPS_CD);
        			
        		} else {
        			this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "USEPRPS_CD", USEPRPS_CD);
        			this.ds_wrem37.setColumn(this.ds_wrem37.rowposition, "USEPRPS_NM", USEPRPS_NM);
        		}
        		
        	}

        }

        this.grd_list_onheadclick = function(obj,e)
        {
        	//gfn_FormOnLoad에서 onheadclick이 없으면 자동 추가하므로, 추가가 안되도록 빈이벤트 추가(정렬기능 불필요)
        	//전체 체크박스 기능추가
        	var sType = obj.getCellProperty("head", e.cell, "displaytype");
        	if(sType == "checkbox") this._gfnHeadCheckSelectAll(obj, e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_wrem37.addEventHandler("oncolumnchanged", this.ds_wrem37_oncolumnchanged, this);
            this.addEventHandler("onload", this.mainForm_onload, this);
            this.addEventHandler("onkeydown", this.mainForm_onkeydown, this);
            this.grd_List.addEventHandler("onheadclick", this.grd_list_onheadclick, this);
            this.grd_List.addEventHandler("onselectchanged", this.grd_List_onselectchanged, this);
            this.grd_List.addEventHandler("onexpandup", this.grd_List_onexpandup, this);
            this.grd_List.addEventHandler("onchar", this.grd_List_onchar, this);
            this.grd_List.addEventHandler("onkeydown", this.grd_List_onkeydown, this);
            this.btn_Add.addEventHandler("onclick", this.btn_Add_onclick, this);
            this.btn_Insert.addEventHandler("onclick", this.btn_Insert_onclick, this);
            this.btn_Delete.addEventHandler("onclick", this.btn_Delete_onclick, this);
            this.btn_Report.addEventHandler("onclick", this.btn_Report_onclick, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.grd_down.addEventHandler("onheadclick", this.grd_list_onheadclick, this);
            this.btn_UploadSample.addEventHandler("onclick", this.btn_UploadSample_onclick, this);
            this.btn_Upload00.addEventHandler("onclick", this.btn_Upload_onclick, this);
            this.btn_Reset.addEventHandler("onclick", this.btn_Reset_onclick, this);

        };

        this.loadIncludeScript("RP_85358_DHW00323M.xfdl");

       
    };
}
)();
