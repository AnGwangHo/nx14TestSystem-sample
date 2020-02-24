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
                this.set_name("grid1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Excel", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_MANNAM\" type=\"STRING\" size=\"255\"/><Column id=\"SEND_MANNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"MANNUM\" type=\"STRING\" size=\"255\"/><Column id=\"SEND_FACTNM\" type=\"STRING\" size=\"255\"/><Column id=\"PRODCOD\" type=\"STRING\" size=\"255\"/><Column id=\"VTTNM\" type=\"STRING\" size=\"255\"/><Column id=\"TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"ITEM_NAM\" type=\"STRING\" size=\"255\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"33\"/><Column id=\"CRTGBN\" type=\"STRING\" size=\"255\"/><Column id=\"FACTCOD\" type=\"STRING\" size=\"255\"/><Column id=\"FACTNM\" type=\"STRING\" size=\"255\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"255\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"FULL_NAM\" type=\"STRING\" size=\"255\"/><Column id=\"ETC_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"PLCY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"255\"/><Column id=\"HPHONE_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ORDER_DELIVER_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"SEND_MANNAM\">한국카드시스템(대구)</Col><Col id=\"SEND_MANNUM\">05000000</Col><Col id=\"ADDR\">대구 수성구 만촌동 636-24번지 2층</Col><Col id=\"MANNUM\">00000000</Col><Col id=\"SEND_FACTNM\">신흥정밀</Col><Col id=\"PRODCOD\">4102</Col><Col id=\"VTTNM\">SMT-T281(Scolor)패키지</Col><Col id=\"TYPE\">1001</Col><Col id=\"ITEM_NAM\">일반</Col><Col id=\"CNT\">1</Col><Col id=\"CRTGBN\">2</Col><Col id=\"FACTCOD\">1041</Col><Col id=\"FACTNM\">신흥정밀</Col><Col id=\"ORDER_NO\">18071700000004102636</Col><Col id=\"REQ_NO\">201905281041001</Col><Col id=\"FLAG\">1</Col><Col id=\"FULL_NAM\"/><Col id=\"ETC_FLAG\"/><Col id=\"PLCY_CD\">000000</Col><Col id=\"GRP_CD\">101001</Col><Col id=\"PHONE_NO\">053 768 0700</Col><Col id=\"HPHONE_NO\">01035262122</Col><Col id=\"ORDER_DELIVER_YN\"/><Col id=\"DAMDANG\">이남수님</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Pivot", this);
            obj._setContents("<ColumnInfo><Column id=\"CRTGBN\" type=\"STRING\" size=\"256\"/><Column id=\"VTTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CRTGBN\">1</Col><Col id=\"VTTNM\">1</Col><Col id=\"ITEM_NAM\">1</Col></Row><Row><Col id=\"CRTGBN\">1</Col><Col id=\"VTTNM\">2</Col><Col id=\"ITEM_NAM\">1</Col></Row><Row><Col id=\"CRTGBN\">1</Col><Col id=\"VTTNM\">2</Col><Col id=\"ITEM_NAM\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid0", "absolute", "1.56%", "112", null, "354", "18.95%", null, this);
            obj.set_taborder("0");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "8", "6", "547", "37", null, null, this);
            obj.set_taborder("1");
            obj.set_text("RP 85727 잘못된 format 설정시 grid 오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "40", null, "70", "54.49%", null, this);
            obj.set_taborder("2");
            obj.set_text("테스트 방법\r\n\r\n 1. 화면이 로드되지 않고 무한대기 (HTML5) 또는 비정상 종료됨(Runtime) 확인");
            obj.style.set_align("left top");
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
        this.registerScript("RP_85727_grid0.xfdl", function() {

        this.grid1_onload = function(obj,e)
        {
        	pCnt = 1;

        	var sRow = -1;		
        	var nRow = -1;		
        	var arrSum = new Array();
        	

        	//var fullNam  = this.ds_Excel.getColumn(0, "FULL_NAM");
        	var fullNam = "";
        	var strNo    = this.xfn_split(fullNam, " ");
        	
        	var grdFormat = "";
        	grdFormat += " <Format id='default'>\n";
        	grdFormat += "   <Columns>\n";
        	grdFormat += "     <Column size='120' />\n";
        	grdFormat += "     <Column size='84' />\n";
        	grdFormat += "     <Column size='300' />\n";
        	grdFormat += "     <Column size='110' />\n";
        	grdFormat += "     <Column size='110' />\n";
        	grdFormat += "     <Column size='80' />\n";
        	grdFormat += "     <Column size='110' />\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Column size='80' />\n";
        	
        	grdFormat += "   </Columns>\n";
        	grdFormat += "   <Rows>\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='24' band='head' />\n";
        	grdFormat += "     <Row size='18' band='head' />\n";
        	grdFormat += "     <Row size='18' band='head' />\n";
        	grdFormat += "     <Row size='18' band='head' />\n";
        	grdFormat += "     <Row size='18' />\n";
        	grdFormat += "     <Row size='18' band='summ' />\n";
        	grdFormat += "     <Row size='24' band='summ' />\n";
        	grdFormat += "     <Row size='24' band='summ' />\n";
        	grdFormat += "     <Row size='24' band='summ' />\n";
        	grdFormat += "     <Row size='24' band='summ' />\n";
        	grdFormat += "   </Rows>\n";
        	grdFormat += "   <Band id='head'>\n";
        	grdFormat += "     <Cell         colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"발주번호       : "  + this.ds_Excel.getColumn(0, "REQ_NO")+"'/>\n";
        	grdFormat += "     <Cell row='1' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"수신           : " + this.ds_Excel.getColumn(0, "FACTNM")+"' />\n";
        	grdFormat += "     <Cell row='2' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"발신           : 스마트로"+"' />\n";
        	grdFormat += "     <Cell row='3' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"발주일자       : "  + this.xfn_subString(this.xfn_today(), 0, 4)+ "-" + this.xfn_subString(this.xfn_today(), 4, 2)+ "-" + this.xfn_subString(this.xfn_today(), 6, 2)+"' />\n";
        	grdFormat += "     <Cell row='4' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"제조사전화번호 : " + strNo[0]+"' />\n";
        	grdFormat += "     <Cell row='5' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"제조사Fax번호  : "  + strNo[1]+"' />\n";
        	grdFormat += "     <Cell row='6' colspan='"+(k+7)+"' style='align:left;font:bold&#32;10&#32;굴림체;' text='"+"제조사담당자   : " + this.ds_Excel.getColumn(0, "ETC_FLAG")+"' />\n";
        	grdFormat += "     <Cell row='7'         rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='배송처'/>\n";
        	grdFormat += "     <Cell row='7' col='1' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='배송처&#32;코드'/>\n";
        	grdFormat += "     <Cell row='7' col='2' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='지역'/>\n";
        	grdFormat += "     <Cell row='7' col='3' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='전화번호'/>\n";
        	grdFormat += "     <Cell row='7' col='4' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='휴대폰번호'/>\n";
        	grdFormat += "     <Cell row='7' col='5' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='지사코드'/>\n";
        	grdFormat += "     <Cell row='7' col='6' rowspan='3' displaytype='text' style='background:white;font:굴림체,10,bold;' text='별도수령처'/>\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Cell row='7' col='"+(k+7)+"' displaytype='text' autosizecol='limitmin' style='background:white;font:굴림체,10,bold;' text='"+this.xfn_decode(this.ds_Pivot.getColumn(k, 'CRTGBN'), "1", "설치", "판매")+"'/>\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Cell row='8' col='"+(k+7)+"' displaytype='text' autosizecol='limitmin' style='background:white;font:굴림체,10,bold;' text='"+this.ds_Pivot.getColumn(k, 'VTTNM')+"'/>\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Cell row='9' col='"+(k+7)+"' displaytype='text' autosizecol='limitmin' style='background:white;font:굴림체,10,bold;' text='"+this.ds_Pivot.getColumn(k, 'ITEM_NAM')+"'/>\n";
        	
        	grdFormat += "   </Band>\n";
        	grdFormat += "   <Band id='body'>\n";
        	grdFormat += "     <Cell         displaytype='text' style='font:굴림체,10;align:left;' text='bind:SEND_MANNAM'/>\n";
        	grdFormat += "     <Cell col='1' displaytype='text' style='font:굴림체,10;align:left;' text='bind:SEND_MANNUM'/>\n";
        	grdFormat += "     <Cell col='2' displaytype='text' style='font:굴림체,10;align:left;' text='bind:ADDR' wordwrap='char'/>\n";
        	grdFormat += "     <Cell col='3' displaytype='text' style='font:굴림체,10;align:left;' expr='expr:comp.parent.gfn_formatPhoneNo(PHONE_NO)'/>\n";
        	grdFormat += "     <Cell col='4' displaytype='text' style='font:굴림체,10;align:left;' expr='expr:comp.parent.gfn_formatHphoneNo(HPHONE_NO)'/>\n";
        	grdFormat += "     <Cell col='5' displaytype='text' style='font:굴림체,10;align:left;' text='bind:MANNUM'/>\n";
        	grdFormat += "     <Cell col='6' displaytype='text' style='align:center;' expr='expr:comp.parent.xfn_iif(ORDER_DELIVER_YN==&apos;Y&apos;,&apos;가맹점배송&apos;,&apos;&apos;)'/>\n";
        	grdFormat += "     <Cell col='7' displaytype='text' style='align:center;' text='bind:ITEM_NAM'/>\n";
        	grdFormat += "     <Cell col='8' displaytype='text' style='align:left;' text='bind:VTTNM'/>\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Cell col='"+(k+7)+"' displaytype='expr:comp.parent.gfn_isNull(COL"+k+")&apos;?&quot;none&quot;?&quot;number&quot;' style='align:right;font:굴림체,10;' expr='expr:comp.parent.xfn_iif(COL"+k+"==0,&quot;&quot;,COL"+k+")' />\n";
        	
        	grdFormat += "   </Band>\n";
        	grdFormat += "   <Band id='summary'>\n";
        	grdFormat += "     <Cell displaytype='text' style='align:center;background:white;font:굴림체,11;' text='합계'/>\n";
        	grdFormat += "     <Cell col='1' displaytype='text' style='background:white;font:굴림체,11;align:left;'/>\n";
        	grdFormat += "     <Cell col='2' displaytype='text' style='background:white;font:굴림체,11;align:left;'/>\n";
        	grdFormat += "     <Cell col='3' displaytype='text' style='background:white;font:굴림체,11;align:left;'/>\n";
        	grdFormat += "     <Cell col='4' displaytype='text' style='background:white;font:굴림체,11;align:left;'/>\n";
        	grdFormat += "     <Cell col='5' displaytype='text' style='background:white;font:굴림체,11;align:left;'/>\n";
        	grdFormat += "     <Cell col='6' displaytype='text' style='background:white;align:left;'/>\n";
        	grdFormat += "     <Cell col='7' displaytype='text' style='background:white;align:left;'/>\n";
        	grdFormat += "     <Cell col='8' displaytype='text' style='background:white;align:left;'/>\n";
        	
        	for(var k=0; k<pCnt; k++) grdFormat += "     <Cell col='"+(k+7)+"' displaytype='number' style='align:right;background:white;font:굴림체,10;' text='"+arrSum[k]+"'/>\n";
        	
        	grdFormat += "     <Cell row='1' colspan='"+(pCnt+7)+"' style='align:left;background:white;font:bold&#32;10&#32;arial;' text='' />\n";
        	grdFormat += "     <Cell row='2' colspan='"+(pCnt+7)+"' style='align:left;background:white;font:bold&#32;10&#32;arial;' text='"+"납기     : 발주후 익일"+"' />\n";
        	grdFormat += "     <Cell row='3' colspan='"+(pCnt+7)+"' style='align:left;background:white;font:bold&#32;10&#32;arial;' text='"+"            일정에 차질 없도록 배송 바랍니다."+"' />\n";
        	grdFormat += "     <Cell row='4' colspan='"+(pCnt+7)+"' style='align:left;background:white;font:bold&#32;10&#32;arial;' text='"+"발주부서 : 경영지원부                    담당자:                 인"+"' />\n";
        	grdFormat += "   </Band>\n";
        	grdFormat += " </Format>\n";
        trace("this.fn_MakeExcelGrid step~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~6 ");
        	this.Grid0.set_binddataset("ds_Excel_3");
        trace("this.fn_MakeExcelGrid step~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7 ");
        trace("this.fn_MakeExcelGrid step~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~grdFormat\n"+ grdFormat);

        	this.Grid0.set_formats(grdFormat); //<------------------문제의 부분

        trace("this.fn_MakeExcelGrid step~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~8 ");
        }

        

        

        

        

        

        
        this.xfn_replace = function(sOrg,sRepFrom,sRepTo){

            return String(this.nvl(sOrg, "") ).split(sRepFrom).join(this.nvl(sRepTo, ""));
        }

        
        //mip의 substr 대체함수
        this.xfn_subString = function(stringValue,nStart,nLength){

            if(this.xfn_subString.arguments.length == 3){   
                if(!this.isNull(stringValue)){
                    return String(stringValue).substr(nStart, nLength);
                }else{
                    return "";
                }       
            }else{
                if(!this.isNull(stringValue)){
                    return String(stringValue).substr(nStart);
                }else{
                    return "";
                }
            }
        }
        this.nvl = function(strValue,strValue2){       

            if(this.isNull(strValue)) return strValue2;     
            return strValue;
        }

        

        this.xfn_today = function(){
            
            application.g_ICS_Date = "2019-06-14";
            
            /*  오늘일자는 서버일자로..
            var objDate = new Date();
            var sToday  = objDate.getFullYear().toString();
                sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
                sToday += objDate.getDate().toString().padLeft(2, "0"); 
            
            */
            //trace("sToday:::::"+sToday+"    "+this.xfn_replace(application.g_ICS_Date,"-",""));

            sToday = this.xfn_replace(application.g_ICS_Date,"-","");

            return sToday;
        }

        

        this.isNull = function(sValue){

            if(sValue == null||sValue == "undefined" || sValue.length == 0) return true;
            
            var v_ChkStr = new String(sValue);
            
            if(v_ChkStr == null) return true;
            if(v_ChkStr.trim().length == 0 ) return true;

            return false;
        }

        

        //mip의 split 대체함수
        this.xfn_split = function(stringValue,strDelimiter){
            //return String(nexacro.stripQuote(stringValue)).split(strDelimiter);   
            
            var arr = new Array();
            arr = String(stringValue).split(strDelimiter);
            for (i = 0; i < arr.length; i++)
            {
               arr[i] = nexacro.stripQuote(arr[i]);
            }
            return arr;
        }

        
        this.xfn_decode = function(){   
            for(var i = 1 ; i < this.xfn_decode.arguments.length-1; i+=2 ){
                if( this.xfn_decode.arguments[0] == this.xfn_decode.arguments[i] ){         
                    return this.xfn_decode.arguments[i+1];
                }
            }
            return this.xfn_decode.arguments[this.xfn_decode.arguments.length-1];
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.grid1_onload, this);

        };

        this.loadIncludeScript("RP_85727_grid0.xfdl");

       
    };
}
)();
