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
                this.set_name("ref21_1");
                this.set_titletext("바디,도어,주방상품,기타");
                this._setFormPosition(0,0,1060,367);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ordNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyFYmd\" type=\"STRING\" size=\"256\"/><Column id=\"inputFYmd\" type=\"STRING\" size=\"256\"/><Column id=\"inputTYmd\" type=\"STRING\" size=\"256\"/><Column id=\"venCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"itemGb\" type=\"STRING\" size=\"256\"/><Column id=\"vMdlcde\" type=\"STRING\" size=\"256\"/><Column id=\"vLotprint\" type=\"STRING\" size=\"256\"/><Column id=\"vPrtqty\" type=\"STRING\" size=\"256\"/><Column id=\"search\" type=\"STRING\" size=\"256\"/><Column id=\"sortGbcd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearchGb", this);
            obj._setContents("<ColumnInfo><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"cd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"nm\">그룹/색상기준</Col><Col id=\"cd\">0</Col></Row><Row><Col id=\"nm\">주문번호기준</Col><Col id=\"cd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrintList", this);
            obj._setContents("<ColumnInfo><Column id=\"coGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"ordNo\" type=\"STRING\" size=\"256\"/><Column id=\"makeDcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"poItmlCdAsMdlCd\" type=\"STRING\" size=\"256\"/><Column id=\"dprdQty\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"wdthLen\" type=\"STRING\" size=\"256\"/><Column id=\"hghtLen\" type=\"STRING\" size=\"256\"/><Column id=\"hghLen\" type=\"STRING\" size=\"256\"/><Column id=\"prordUprc\" type=\"STRING\" size=\"256\"/><Column id=\"bizpAdr\" type=\"STRING\" size=\"256\"/><Column id=\"bsntOshpNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgno\" type=\"STRING\" size=\"256\"/><Column id=\"reppNm\" type=\"STRING\" size=\"256\"/><Column id=\"dcstNm\" type=\"STRING\" size=\"256\"/><Column id=\"stogGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizMakeAskNo\" type=\"STRING\" size=\"256\"/><Column id=\"neocSplyGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"neocDprdSeqn\" type=\"STRING\" size=\"256\"/><Column id=\"poSeq\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pdcUprc\" type=\"STRING\" size=\"256\"/><Column id=\"ishpReqnDt\" type=\"STRING\" size=\"256\"/><Column id=\"branch\" type=\"STRING\" size=\"256\"/><Column id=\"boxCbm\" type=\"STRING\" size=\"256\"/><Column id=\"linkurl\" type=\"STRING\" size=\"256\"/><Column id=\"acptYn\" type=\"STRING\" size=\"256\"/><Column id=\"mophNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMaster", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rowFlag\" type=\"STRING\" size=\"256\"/><Column id=\"rowFlag1\" type=\"STRING\" size=\"256\"/><Column id=\"chkYn1\" type=\"STRING\" size=\"256\"/><Column id=\"chkYn\" type=\"STRING\" size=\"256\"/><Column id=\"grp\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"INT\" size=\"256\"/><Column id=\"grpColor\" type=\"STRING\" size=\"256\"/><Column id=\"mdlCd\" type=\"STRING\" size=\"256\"/><Column id=\"nstnHngdMdlCd\" type=\"STRING\" size=\"256\"/><Column id=\"mdlKorNm\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prordQty\" type=\"INT\" size=\"256\"/><Column id=\"prdqty\" type=\"INT\" size=\"256\"/><Column id=\"packWdthLen\" type=\"STRING\" size=\"256\"/><Column id=\"packHghtLen\" type=\"STRING\" size=\"256\"/><Column id=\"packHghLen\" type=\"STRING\" size=\"256\"/><Column id=\"prordDt\" type=\"STRING\" size=\"256\"/><Column id=\"ordNo\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnwkDt\" type=\"STRING\" size=\"256\"/><Column id=\"oshpPrrgDt\" type=\"STRING\" size=\"256\"/><Column id=\"ishpReqnDt\" type=\"STRING\" size=\"256\"/><Column id=\"addres\" type=\"STRING\" size=\"256\"/><Column id=\"prdtSpcfCntn\" type=\"STRING\" size=\"256\"/><Column id=\"atflId\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"posibleQty\" type=\"INT\" size=\"256\"/><Column id=\"dprdQty\" type=\"INT\" size=\"256\"/><Column id=\"dprdQty1\" type=\"INT\" size=\"256\"/><Column id=\"nonQty\" type=\"INT\" size=\"256\"/><Column id=\"aprvlQty\" type=\"INT\" size=\"256\"/><Column id=\"makeDcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"makeDcstNm\" type=\"STRING\" size=\"256\"/><Column id=\"dcstRgno\" type=\"STRING\" size=\"256\"/><Column id=\"coGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"poNo\" type=\"STRING\" size=\"256\"/><Column id=\"poSeq\" type=\"STRING\" size=\"256\"/><Column id=\"poItmlCd\" type=\"STRING\" size=\"256\"/><Column id=\"osrcGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"stogGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"ordQty\" type=\"INT\" size=\"256\"/><Column id=\"size1\" type=\"STRING\" size=\"256\"/><Column id=\"size2\" type=\"STRING\" size=\"256\"/><Column id=\"size3\" type=\"STRING\" size=\"256\"/><Column id=\"knbQty\" type=\"INT\" size=\"256\"/><Column id=\"knbSize\" type=\"STRING\" size=\"256\"/><Column id=\"prdtInfCntn\" type=\"STRING\" size=\"256\"/><Column id=\"dcstIdntNo\" type=\"STRING\" size=\"256\"/><Column id=\"ordRmrk\" type=\"STRING\" size=\"256\"/><Column id=\"prordUprc\" type=\"INT\" size=\"256\"/><Column id=\"balamt\" type=\"INT\" size=\"256\"/><Column id=\"locatn\" type=\"STRING\" size=\"256\"/><Column id=\"dprdReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"unitcd\" type=\"STRING\" size=\"256\"/><Column id=\"dcstNm\" type=\"STRING\" size=\"256\"/><Column id=\"reppNm\" type=\"STRING\" size=\"256\"/><Column id=\"dsrvCsmNm\" type=\"STRING\" size=\"256\"/><Column id=\"makeDcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"makeDcstNm\" type=\"STRING\" size=\"256\"/><Column id=\"dadlDt\" type=\"STRING\" size=\"256\"/><Column id=\"invenYn\" type=\"STRING\" size=\"256\"/><Column id=\"areaGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"prordChgYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptYn\" type=\"STRING\" size=\"256\"/><Column id=\"udtkPtlGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"rtnCarRtntYn\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen1\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen1\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen1\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty1\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen2\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen2\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen2\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty2\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen3\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen3\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen3\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty3\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen4\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen4\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen4\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty4\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen5\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen5\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen5\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty5\" type=\"STRING\" size=\"256\"/><Column id=\"nstnMdlYn\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen1\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen1\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen1\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty1\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen2\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen2\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen2\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty2\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen3\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen3\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen3\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty3\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen4\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen4\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen4\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty4\" type=\"STRING\" size=\"256\"/><Column id=\"stnWdthLen5\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghtLen5\" type=\"STRING\" size=\"256\"/><Column id=\"stnHghLen5\" type=\"STRING\" size=\"256\"/><Column id=\"ftgQty5\" type=\"STRING\" size=\"256\"/><Column id=\"nstnMdlYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMasterTmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdMaster", "absolute", "0", "215", null, null, "0", "-157", this);
            obj.set_taborder("40");
            obj.set_binddataset("dsMaster");
            obj.set_formatid("color");
            obj.set_cellsizebandtype("allband");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"color\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"66\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"99\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"63\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"162\"/><Column size=\"100\"/><Column size=\"45\"/><Column size=\"58\"/><Column size=\"40\"/><Column size=\"53\"/><Column size=\"40\"/><Column size=\"75\"/><Column size=\"155\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"23\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"그룹/색상\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"3\" rowspan=\"2\" text=\"모델코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"원모델코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"모델명\"/><Cell col=\"6\" rowspan=\"2\" text=\"색상\"/><Cell col=\"7\" rowspan=\"2\" text=\"발주&#13;&#10;수량\"/><Cell col=\"8\" rowspan=\"2\" text=\"부품&#13;&#10;제작&#13;&#10;수량\"/><Cell col=\"9\" rowspan=\"2\" text=\"발주일\"/><Cell col=\"10\" rowspan=\"2\" text=\"주문번호\"/><Cell col=\"11\" rowspan=\"2\" text=\"고객명\"/><Cell col=\"12\" rowspan=\"2\" text=\"시공설치\"/><Cell col=\"13\" rowspan=\"2\" text=\"출고예정\"/><Cell col=\"14\" rowspan=\"2\" text=\"입고요청\"/><Cell col=\"15\" rowspan=\"2\" text=\"시공설치&#13;&#10;자차여부\"/><Cell col=\"16\" rowspan=\"2\" text=\"현장주소\"/><Cell col=\"17\" rowspan=\"2\" text=\"정보\"/><Cell col=\"18\" rowspan=\"2\" text=\"첨부\"/><Cell col=\"19\" rowspan=\"2\" text=\"비고\"/><Cell col=\"20\" rowspan=\"2\" cssclass=\"input_edit\" text=\"납품&#13;&#10;신청\"/><Cell col=\"21\" rowspan=\"2\" text=\"미승인&#13;&#10;수량\"/><Cell col=\"22\" rowspan=\"2\" text=\"승인&#13;&#10;수량\"/><Cell col=\"23\" rowspan=\"2\" colspan=\"2\" text=\"거래선코드/명\"/><Cell col=\"25\" rowspan=\"2\" text=\"사업자등록번호\"/><Cell col=\"26\" rowspan=\"2\" cssclass=\"input_edit\" text=\"수량1\"/><Cell col=\"27\" colspan=\"3\" cssclass=\"input_edit\" text=\"규격\"/><Cell col=\"30\" rowspan=\"2\" cssclass=\"input_edit\" text=\"수량2\"/><Cell col=\"31\" colspan=\"3\" cssclass=\"input_edit\" text=\"규격\"/><Cell col=\"34\" rowspan=\"2\" cssclass=\"input_edit\" text=\"수량3\"/><Cell col=\"35\" colspan=\"3\" cssclass=\"input_edit\" text=\"규격\"/><Cell col=\"38\" rowspan=\"2\" cssclass=\"input_edit\" text=\"수량4\"/><Cell col=\"39\" colspan=\"3\" cssclass=\"input_edit\" text=\"규격\"/><Cell col=\"42\" rowspan=\"2\" cssclass=\"input_edit\" text=\"수량5\"/><Cell col=\"43\" colspan=\"3\" cssclass=\"input_edit\" text=\"규격\"/><Cell row=\"1\" col=\"27\" cssclass=\"input_edit\" text=\"(W)\"/><Cell row=\"1\" col=\"28\" cssclass=\"input_edit\" text=\"(H)\"/><Cell row=\"1\" col=\"29\" cssclass=\"input_edit\" text=\"(D)\"/><Cell row=\"1\" col=\"31\" cssclass=\"input_edit\" text=\"(W)\"/><Cell row=\"1\" col=\"32\" cssclass=\"input_edit\" text=\"(H)\"/><Cell row=\"1\" col=\"33\" cssclass=\"input_edit\" text=\"(D)\"/><Cell row=\"1\" col=\"35\" cssclass=\"input_edit\" text=\"(W)\"/><Cell row=\"1\" col=\"36\" cssclass=\"input_edit\" text=\"(H)\"/><Cell row=\"1\" col=\"37\" cssclass=\"input_edit\" text=\"(D)\"/><Cell row=\"1\" col=\"39\" cssclass=\"input_edit\" text=\"(W)\"/><Cell row=\"1\" col=\"40\" cssclass=\"input_edit\" text=\"(H)\"/><Cell row=\"1\" col=\"41\" cssclass=\"input_edit\" text=\"(D)\"/><Cell row=\"1\" col=\"43\" cssclass=\"input_edit\" text=\"(W)\"/><Cell row=\"1\" col=\"44\" cssclass=\"input_edit\" text=\"(H)\"/><Cell row=\"1\" col=\"45\" cssclass=\"input_edit\" text=\"(D)\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;normal&quot;:&quot;checkbox&quot;\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:chkYn\" suppress=\"2\" suppressalign=\"first\"/><Cell col=\"1\" expr=\"expr:dataset.getRowLevel(currow)==1?&quot;[소  계]&quot;:grpColor\" suppress=\"1\"/><Cell col=\"2\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;normal&quot;:&quot;checkbox&quot;\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:chkYn1\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:left;background:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);background2:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);selectbackground:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);\" text=\"bind:mdlCd\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:nstnHngdMdlCd\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:mdlKorNm\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:clrNm\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:prordQty\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:prdqty\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:prordDt\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" cssclass=\"cell_TextLink\" text=\"bind:ordNo\" mask=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;99-99-999999-9999&quot;\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:custNm\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:cnwkDt\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:oshpPrrgDt\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:ishpReqnDt\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" text=\"bind:rtnCarRtntYn\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:addres\"/><Cell col=\"17\" style=\"align:left;\" text=\"bind:prdtSpcfCntn\"/><Cell col=\"18\" text=\"bind:atflId\" expandshow=\"expr:dataset.getRowLevel(currow)==1?&quot;hide&quot;:&quot;show&quot;\" expandimage=\"expr:dataset.getRowLevel(currow) !=1 &amp;&amp; dataset.getColumn(currow, &quot;atflId&quot;)!=&quot;&quot;? &quot;image::ico_WF_fileattach.png&quot; : &quot;image::ico_WF_fileattach_empty.png&quot;\"/><Cell col=\"19\" style=\"align:left;\" text=\"bind:rmrk\"/><Cell col=\"20\" displaytype=\"number\" edittype=\"expr:chkYn1==&quot;1&quot; &amp;&amp; dataset.getRowLevel(currow)!=&quot;1&quot; ?  &quot;masknumber&quot;:&quot;none&quot;\" style=\"align:right;\" text=\"bind:dprdQty1\" mask=\"+#,##0\" editautoselect=\"true\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:nonQty\" mask=\"#,##0\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:aprvlQty\" mask=\"#,##0\"/><Cell col=\"23\" text=\"bind:makeDcstCd\"/><Cell col=\"24\" style=\"align:left;\" text=\"bind:makeDcstNm\"/><Cell col=\"25\" text=\"bind:dcstRgno\" mask=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;@@@-@@-@@@@@&quot;\"/><Cell col=\"26\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:ftgQty1\" mask=\"+###\" editautoselect=\"true\"/><Cell col=\"27\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnWdthLen1\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"28\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghtLen1\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"29\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghLen1\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"30\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:ftgQty2\" mask=\"+###\" editautoselect=\"true\"/><Cell col=\"31\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnWdthLen2\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"32\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghtLen2\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"33\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghLen2\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"34\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:ftgQty3\" mask=\"+###\" editautoselect=\"true\"/><Cell col=\"35\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnWdthLen3\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"36\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghtLen3\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"37\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghLen3\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"38\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:ftgQty4\" mask=\"+###\" editautoselect=\"true\"/><Cell col=\"39\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnWdthLen4\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"40\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghtLen4\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"41\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghLen4\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"42\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:ftgQty5\" mask=\"+###\" editautoselect=\"true\"/><Cell col=\"43\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnWdthLen5\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"44\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghtLen5\" mask=\"+###.#\" editautoselect=\"true\"/><Cell col=\"45\" displaytype=\"number\" edittype=\"expr:nstnMdlYn == 'Y' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:stnHghLen5\" mask=\"+###.#\" editautoselect=\"true\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;prordQty&quot;)\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;prdqty&quot;)\" mask=\"#,##0\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;dprdQty1&quot;)\" mask=\"#,##0\"/><Cell col=\"21\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;nonQty&quot;)\" mask=\"#,##0\"/><Cell col=\"22\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;aprvlQty&quot;)\" mask=\"#,##0\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/></Band></Format><Format id=\"order\"><Columns><Column size=\"71\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"71\" band=\"left\"/><Column size=\"66\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"95\" band=\"left\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"63\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"74\"/><Column size=\"73\"/><Column size=\"71\"/><Column size=\"162\"/><Column size=\"100\"/><Column size=\"45\"/><Column size=\"58\"/><Column size=\"40\"/><Column size=\"53\"/><Column size=\"40\"/><Column size=\"75\"/><Column size=\"155\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"입고요청\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"주문번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객명\"/><Cell col=\"4\" rowspan=\"2\" text=\"그룹/색상\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"6\" rowspan=\"2\" text=\"모델코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"원모델코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"모델명\"/><Cell col=\"9\" rowspan=\"2\" text=\"색상\"/><Cell col=\"10\" rowspan=\"2\" text=\"발주&#13;&#10;수량\"/><Cell col=\"11\" rowspan=\"2\" text=\"부품&#13;&#10;제작&#13;&#10;수량\"/><Cell col=\"12\" colspan=\"3\" text=\"규격\"/><Cell col=\"15\" rowspan=\"2\" text=\"발주일\"/><Cell col=\"16\" rowspan=\"2\" text=\"시공설치\"/><Cell col=\"17\" rowspan=\"2\" text=\"출고예정\"/><Cell col=\"18\" rowspan=\"2\" text=\"시공설치&#13;&#10;자차여부\"/><Cell col=\"19\" rowspan=\"2\" text=\"현장주소\"/><Cell col=\"20\" rowspan=\"2\" text=\"정보\"/><Cell col=\"21\" rowspan=\"2\" text=\"첨부\"/><Cell col=\"22\" rowspan=\"2\" text=\"비고\"/><Cell col=\"23\" rowspan=\"2\" text=\"납품&#13;&#10;신청\"/><Cell col=\"24\" rowspan=\"2\" text=\"미승인&#13;&#10;수량\"/><Cell col=\"25\" rowspan=\"2\" text=\"승인&#13;&#10;수량\"/><Cell col=\"26\" rowspan=\"2\" colspan=\"3\" text=\"업체코드/명\"/><Cell row=\"1\" col=\"12\" text=\"(W)\"/><Cell row=\"1\" col=\"13\" text=\"(H)\"/><Cell row=\"1\" col=\"14\" text=\"(D)\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:ishpReqnDt\" suppress=\"3\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;normal&quot;:&quot;checkbox&quot;\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:chkYn\" suppress=\"2\" suppressalign=\"first\"/><Cell col=\"2\" expr=\"expr:dataset.getRowLevel(currow)&gt;0?&quot;[소  계]&quot;:ordNo\" mask=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;99-99-999999-9999&quot;\" suppress=\"1\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:custNm\" suppress=\"2\"/><Cell col=\"4\" text=\"bind:grpColor\"/><Cell col=\"5\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&quot;normal&quot;:&quot;checkbox&quot;\" edittype=\"expr:dataset.getRowLevel(currow)&gt;0?&quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:chkYn1\"/><Cell col=\"6\" style=\"align:left;background:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);background2:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);selectbackground:EXPR(acptYn == &quot;Y&quot; || dataset.getRowLevel(currow) ==1 ? &quot;&quot; : &quot;yellow&quot;);\" text=\"bind:mdlCd\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:nstnHngdMdlCd\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:mdlKorNm\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:clrNm\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:prordQty\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:prdqty\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:packWdthLen\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:packHghtLen\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:packHghLen\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:prordDt\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:cnwkDt\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:oshpPrrgDt\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" text=\"bind:rtnCarRtntYn\"/><Cell col=\"19\" style=\"align:left;\" text=\"bind:addres\"/><Cell col=\"20\" style=\"align:left;\" text=\"bind:prdtSpcfCntn\"/><Cell col=\"21\" text=\"bind:atflId\"/><Cell col=\"22\" style=\"align:left;\" text=\"bind:rmrk\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"expr:chkYn1==&quot;1&quot; &amp;&amp; dataset.getRowLevel(currow)!=&quot;1&quot; ?  &quot;masknumber&quot;:&quot;none&quot;\" style=\"align:right;\" text=\"bind:dprdQty1\" mask=\"#,##0\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:nonQty\" mask=\"#,##0\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:aprvlQty\" mask=\"#,##0\"/><Cell col=\"26\" text=\"bind:makeDcstCd\"/><Cell col=\"27\" style=\"align:left;\" text=\"bind:makeDcstNm\"/><Cell col=\"28\" text=\"bind:dcstRgno\" mask=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;@@@-@@-@@@@@&quot;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;prordQty&quot;)\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;prdqty&quot;)\" mask=\"#,##0\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;dprdQty1&quot;)\" mask=\"#,##0\"/><Cell col=\"24\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;nonQty&quot;)\" mask=\"#,##0\"/><Cell col=\"25\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;aprvlQty&quot;)\" mask=\"#,##0\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "188", "169", "26", null, null, this);
            obj.set_taborder("41");
            obj.set_text("바디,도어,주방상품,기타");
            obj.set_cssclass("sta_WF_TitleLev1");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt00", "absolute", "181", "189", "89", "24", null, null, this);
            obj.set_taborder("42");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "177", "168", "18", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h18");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "206", "168", "8", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h8");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSearchGb", "absolute", "800", "188", "221", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_columncount("2");
            obj.set_innerdataset("@dsSearchGb");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_value("0");
            obj.set_index("-1");

            obj = new Static("Static01", "absolute", "712", "188", "58", "26", null, null, this);
            obj.set_taborder("48");
            obj.set_text("조회구분");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "320", "186", "118", "26", null, null, this);
            obj.set_taborder("49");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("50");
            obj.set_text("[RP_81175] 80076 처리 후 Grid의 binddataset에 copyData 시 에러 발생");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "130", null, null, this);
            obj.set_taborder("51");
            obj.set_text("1. 현상\r\n Grid의 binddataset에 copyData 시 에러 발생\r\n\r\n - RP 80076 처리로 발생함\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행 (MNCG641S.xfdl)\r\n 2) '조회' 클릭\r\n 3) 에러 발생 확인\r\n     TypeError: Cannot call method 'setElementTextVisible' of null");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1060, 367, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("ref21_1");
            		p.set_titletext("바디,도어,주방상품,기타");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","rdoSearchGb","value","dsCond","sortGbcd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_81175_MNCG641S.xfdl", function() {
        /***********************************************************************************
         * Script Include 
         ***********************************************************************************/
        //include "lib::lib_main.xjs";

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/

        this.form_onload = function(obj,e)
        {
        	// 화면 초기 세팅
        //	this.gfn_initForm(obj);
        	
        	//dsMaster.set_keystring("G:+grpColor");
        //	this.fn_init();
        	
        }

        
        this.fn_init = function()
        {

            // rowFlag처리를 위한 기본설정 API호출
        //    this.grdMaster.displayRowType();

        	// 조회조건 validation check 객체 생성
        // 	this.validDsComp = new Ex.vali.isCheckData();
        // 	this.validDsComp.setDataset(this.dsCond, false);
        // 	this.validDsComp.setValidProp(this, this.divSearch.calUsr00, "aplyFYmd|NULL" ,"발주기간From");
        // 	this.validDsComp.setValidProp(this, this.divSearch.calUsr01, "aplyTYmd|NULL" ,"발주기간To");
        // 	this.validDsComp.setValidProp(this, this.divSearch.calUsr00, "inputFYmd|NULL" ,"입고요청기간From");
        // 	this.validDsComp.setValidProp(this, this.divSearch.calUsr01, "inputTYmd|NULL" ,"입고요청기간To");

        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fn_search = function(obj,e)
        {	
        // 	var sortGbcd = this.rdoSearchGb.value;
        // 	if(Ex.isEmpty(sortGbcd)) sortGbcd ="0";
        // 	//trace(this.parent.parent.name);
        // 	this.dsCond.copyData(this.parent.parent.dsCond);
        // 	this.dsCond.addColumn("sortGbcd", "string", 256 );
        // 	this.dsCond.setColumn(0, "sortGbcd" , sortGbcd);
        // 	
        // 	this.dsMaster.clearData();
        //     //this.dsDetail.clearData();
        //     
        //     // 조회조건 Binding
        //     // this.dsCond.setColumn(0, "Column0", this.divSearch.Combo01.value);
        // 
        //  	// 조회필수 Check
        //  	//if (!this.validDsComp.isValidate(this)) {return;}
        //  	//this.dsCond.getColumn(0, "aplyFYmd");
        // 	if(this.rdoSearchGb.value == '0'){
        // 		this.dsMaster.set_keystring("G:grpColor");
        // 	}else if(this.rdoSearchGb.value == '1'){
        // 		this.dsMaster.set_keystring("G:ordNo");
        // 	}    
        // 
        //     //trace(">>>>>>>>>>>>>>>>>>>>>> selectOrdmDtForDueDt : one ");
        //     
        //     application.set_httptimeout(1800); // 콜백에서 600 으로 재설정 
        //     trace(">>>>>>>>>>>>>>>>>>>>>> application.set_httptimeout(1800) ");
        // 
        //     Ex.core.tran
        //     (
        //        this                              // transaction 실행스코프
        //      , "selectOrdmDtForDueDt"            // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        //      , "mncb/selectOrdmDtForDueDt.do"    // 서비스명
        //      , "dsCond=dsCond"                   // 서버로 전송할 데이타셋
        //      , "dsMaster=dsMaster"               // 서버에서 수신할 데이타셋
        //     );
        // 
        // 
        // 	 
        // 
        // 
        //     var strXml;
        // 	strXml = this.dsMaster.saveXML("dsMaster");
            //alert(strXml);
            
            this.dsMaster.copyData(this.dsMasterTmp, true);
        }

        // 저장
        this.fn_save = function(obj,e)
        {
        // 	var rCount = this.dsMaster.getRowCount();
        // 	if(rCount == 0){
        // 		Ex.core.alert(this, "pAlert", "I" , "ac.info.00004" , [""]); //조회된 내역이 없습니다.
        // 		return;
        // 	}
        //     // 변경여부 체크
        // 	var isUpdate00 = Ex.util.isUpdated(this.dsMaster);    // true:update , false:normal
        // 	if (isUpdate00 == false) {
        // 		Ex.core.alert(this,"pUpdate", "I", "cm.info.00013");    // 변경된 정보가 없습니다.
        // 		return;
        // 	}
        // 	
        // 	var makeDcstCd = "makeDcstCd_init";
        // 	for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 	{
        // 		if(this.dsMaster.getColumn(i,"chkYn1") == 1 || this.dsMaster.getColumn(i,"chkYn") == 1){
        // 			if (this.dsMaster.getColumn(i, "dprdQty1") > 
        // 			    this.dsMaster.getColumn(i, "posibleQty") ) {
        // 				this.dsMaster.set_rowposition(i)
        // 				this.grdMaster.setFocus();
        // 				this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body", "dprdQty1"));
        // 				// cg.info.00001: 납품신청수량이 신청가능수량 보다 클수 없습니다.
        // 				Ex.core.alert(this, "pAlert", "I" , "cg.info.00001" , [""]);
        // 				return;
        // 			}
        // 			if (this.dsMaster.getColumn(i, "dprdQty1") ==0){
        // 				this.dsMaster.set_rowposition(i)
        // 				this.grdMaster.setFocus();
        // 				this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body", "dprdQty1"));
        // 				// bc.info.07062: {0}는(은) {1} 보다 커야합니다.
        // 				Ex.core.alert(this, "pAlert", "I" , "bc.info.07062" , ["납품신청수량", "0"]);
        // 				return;
        // 			}
        // 			
        // 			if (makeDcstCd != "makeDcstCd_init" && makeDcstCd != this.dsMaster.getColumn(i, "makeDcstCd")){
        // 				this.dsMaster.set_rowposition(i)
        // 				this.grdMaster.setFocus();
        // 				this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body", "makeDcstCd"));
        // 				// mn.info.20175 : 거래처가 다릅니다.
        // 				Ex.core.alert(this, "pAlert", "I" , "mn.info.20175" );
        // 				return;
        // 			}
        // 		
        // 			makeDcstCd = this.dsMaster.getColumn(i,"makeDcstCd");
        // 		}
        // 		
        // 
        // 	}
        // 				
        // 	Ex.core.confirm(this,"pSave", "I", "cm.info.00100");    // 저장하시겠습니까?
        // 

        
        }

        // 출력
        this.fn_print = function(obj,e)
        {

        // 	var localDs = [];
        // 	var printId = "MNCG645R";
        // 	localDs.push(["dsPrintList", this.dsPrintList]);
        // 	
        // 	
        // 	var objReportInfo = {
        // 		 ubiReportFile : printId
        // 		,ubiLocalDs : localDs
        // 		,ubiArg : "A01#2#"
        // 		//,loadCallback : {scope:this,callback:"fn_reportAfter"}
        // 		,loadCallback : {scope:this,callback:"fn_reportAfter",callbackPrint:"fn_printEnd",callbackExport:"fn_exportEnd"}
        // 	};
        // 	
        // 	Ex.core.report(this, "popup", objReportInfo, "PRINT", "");
        	
        }
        /***********************************************************************************
         * CallBack Event 
         ***********************************************************************************/
        this.fn_CallBack = function (sSvcId,nErrorCode,sErrorMsg)
        {
        	// 에러메세지 처리
        // 	if (nErrorCode < 0) 
        // 	{
        // 		Ex.core.error(this,"error",sSvcId+"::"+nErrorCode+"::"+sErrorMsg);
        // 		return;
        // 	}
        // 			
        // 	// 각 Transaction별 CallBack 처리
        // 	switch (sSvcId)
        // 	{		
        // 		case "selectFileInfo" :
        // 			break;	
        //         case "selectOrdmDtForDueDt":
        // 			//trace(">>>>>>>>>>>>>>>>>>>>>> selectOrdmDtForDueDt :" + this.dsMaster.saveXML());
        // 			application.set_httptimeout(600); // 콜백에서 600 으로 재설정
        // 			trace(">>>>>>>>>>>>>>>>>>>>>> application.set_httptimeout(600) ");
        // 			
        //             this.stcCnt00.setDataCount(this.dsMaster);
        //             Ex.setmsgbar(this, "cm.info.00002", [this.dsMaster.rowcount]);  //{0}건이 조회되었습니다.
        //             
        //             if(this.rdoSearchGb.value == '0'){
        // 				this.dsMaster.set_keystring("G:grpColor");
        // 			}else if(this.rdoSearchGb.value == '1'){
        // 				this.dsMaster.set_keystring("G:ordNo");
        // 			}
        // 
        // 			var ordNo1 = this.parent.parent.mskUsr00.value;
        // 			var custNm1 = this.parent.parent.edtUsr00.value;
        // 			this.dsMaster_filter(ordNo1, custNm1);
        // 	
        //         break;
        //         case "multiOrdmDtForDueDt":
        //             Ex.core.alert(this,"pSaveSucc1", "I", "cm.info.00004");    // 성공적으로 저장하였습니다.
        //             Ex.setmsgbar(this, "cm.info.00004");                      // 성공적으로 저장하였습니다.
        //             
        //             //this.fn_print();
        //         break;
        // 	}
        }

        
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fn_msgAfter = function(mID,varValue)
        {
        // 	// TO DO
        // 	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        // 	// alert/error : 무조건 true 반환
        // 	// confirm     : true/false 선택적 반환
        // 	
        // 	if (mID == "pSave") {
        // 		if (varValue == true) {
        // 			Ex.core.tran
        // 			(
        // 			   this                              // transaction 실행스코프
        // 			 , "multiOrdmDtForDueDt"             // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        // 			 , "mncb/multiOrdmDtForDueDt.do"     // 서비스명
        // 			 , "dsMaster=dsMaster:U"               // 서버로 전송할 데이타셋
        // 			 , "dsPrintList=dsPrintList"          // 서버에서 수신할 데이타셋
        // 			);
        // 		}
        // 	} else if (mID == "pSaveSucc1") {
        //     	Ex.core.confirm(this,"pPrintConfirm", "I", "mn.info.20177", ["물품인수증"]);    // {0}을(를) 출력하시겠습니까?
        // 	} else if (mID == "pPrintConfirm") {
        // 		trace(" >>> varValue : " + varValue);
        // 		if (varValue == true) {
        //             this.fn_print();
        // 		}else{
        // 		    this.fn_search();
        // 		}
        // 	}

        }

        
        // 팝업 디폴트 콜백함수
        this.fn_popupAfter = function(pID,varValue)
        {
        // 	// TO DO
        // 	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        // 	if( pID == "pAddFilePopup" ) 
        // 	{
        // 		// varValue == undefined 면 x버튼으로 창을 닫은 상태
        // 		// 반환정보 구성
        // 		// 첨부파일아이디 +"|"+ 첨부파일수
        // 		// 첨부파일아이디가 없으면 "|0" 반환.
        // 		//var arrValue = varValue.split("|");
        // 		//this.edtResAtflId.set_value(arrValue[0]);
        // 	}else if( pID == "comUbiReport" ) 
        // 	{
        // 		this.fn_search();
        // 	}

        }

        
        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        this.rdoSearchGb_onitemchanged = function(obj,e)
        {
        		if(e.postvalue == "0"){
        			//this.dsMaster.set_keystring("G:grpColor");
        			this.dsMaster.set_keystring("G:grpColor, S:ishpReqnDt+grpColor+mdlCd");
        			this.grdMaster.set_formatid("color"); // set 
        		}else if(e.postvalue == "1"){
        			//this.dsMaster.set_keystring("G:ordNo");
        			this.dsMaster.set_keystring("G:ordNo, S:prordDt+ishpReqnDt+ordNo+mdlCd");
        			this.grdMaster.set_formatid("order"); // set 
        		}
        }

        
        this.grdMaster_oncellclick = function(obj,e)
        {
        // 		//trace("1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  grdMaster_oncellclick ");
        // 		//this.dsMaster.set_enableevent(false);
        // 		this.grdMaster.set_enableredraw(false);
        // 		if(this.rdoSearchGb.value == '0'){
        // 			//alert(" e.cell : " + e.cell + "  e.row : " + e.row ); //13
        // 			if( e.cell == this.grdMaster.getBindCellIndex("body", "ordNo")){ //'13'
        // 				var objParam = {};
        // 					objParam.type = "CD";
        // 					objParam.title = "주문계약 상세";	
        // 					objParam.p1 = this.dsMaster.getColumn(this.dsMaster.rowposition, "udtkPtlGbcd");
        // 					objParam.p2 = this.dsMaster.getColumn(this.dsMaster.rowposition, "ordNo");
        // 				
        // 					// 주문번호
        // 					Ex.core.popup(this,	"ORDCONTPOP", "bcna::BCNA340S.xfdl", objParam , 	"width=1080,height=500");
        // 					
        // 			}else if( e.cell == this.grdMaster.getBindCellIndex("body", "chkYn") && this.dsMaster.getRowLevel(e.row)==0){
        // 				var chk = this.dsMaster.getColumn(e.row,"chkYn");
        // 				var grpColor = this.dsMaster.getColumn(e.row,"grpColor");
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						//alert("grpColor : " + grpColor + " i_grpColor : " + this.dsMaster.getColumn(i,"grpColor"));
        // 						if(this.dsMaster.getColumn(i,"grpColor") == grpColor){
        // 							if( chk == "0" ){
        // 								this.dsMaster.setColumn(i,"chkYn",0);
        // 								this.dsMaster.setColumn(i,"chkYn1",0);
        // 								}
        // 							else{
        // 								this.dsMaster.setColumn(i,"chkYn",1);
        // 								this.dsMaster.setColumn(i,"chkYn1",1);
        // 								}
        // 						}
        // 
        // 				}
        // 			}
        // 			
        // 			
        // 			if(e.cell == this.grdMaster.getBindCellIndex("body", "chkYn1")&& this.dsMaster.getRowLevel(e.row)==0){
        // 				var chk0 =0;
        // 				var chk1 =0;
        // 				var grpColor = this.dsMaster.getColumn(e.row,"grpColor");
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						if(this.dsMaster.getColumn(i,"grpColor") == grpColor /*&& this.dsMaster.getRowLevel(i)==0*/){
        // 							if(this.dsMaster.getColumn(i,"chkYn1") == "0"){
        // 								chk0++;
        // 							}else if(this.dsMaster.getColumn(i,"chkYn1") == "1"){
        // 								chk1++;
        // 							}
        // 						}
        // 
        // 				}
        // 				
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						if(this.dsMaster.getColumn(i,"grpColor") == grpColor && this.dsMaster.getRowLevel(i)==0){
        // 							if( chk1 == 0){
        // 								this.dsMaster.setColumn(i,"chkYn",0);
        // 								this.dsMaster.setColumn(i,"chkYn1",0);
        // 								}
        // 							else if( chk0 == 0){
        // 								this.dsMaster.setColumn(i,"chkYn",1);
        // 								this.dsMaster.setColumn(i,"chkYn1",1);
        // 								}
        // 						}
        // 
        // 				}
        // 			}
        // 		} else if(this.rdoSearchGb.value == '1'){
        // 			//alert(" e.cell : " + e.cell + "  e.row : " + e.row ); //2
        // 			if( e.cell == this.grdMaster.getBindCellIndex("body", "ordNo")){ //'13'
        // 					var ordNo = this.dsCond.getColumn(0, "ordNo");
        // 					var fymd = this.dsCond.getColumn(0, "aplyFYmd");
        // 					var tymd = this.dsCond.getColumn(0, "aplyTYmd");
        // 					Ex.core.openLink(this,"1000402440",{ordNo:ordNo, fymd:fymd, tymd:tymd});
        // 			}else if( e.cell == this.grdMaster.getBindCellIndex("body", "chkYn") && this.dsMaster.getRowLevel(e.row)==0){
        // 				var chk = this.dsMaster.getColumn(e.row,"chkYn");
        // 				var ordNo = this.dsMaster.getColumn(e.row,"ordNo");
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						//alert("grpColor : " + grpColor + " i_grpColor : " + this.dsMaster.getColumn(i,"grpColor"));
        // 						if(this.dsMaster.getColumn(i,"ordNo") == ordNo){
        // 							if( chk == "0" ){
        // 								this.dsMaster.setColumn(i,"chkYn",0);
        // 								this.dsMaster.setColumn(i,"chkYn1",0);
        // 								}
        // 							else{
        // 								this.dsMaster.setColumn(i,"chkYn",1);
        // 								this.dsMaster.setColumn(i,"chkYn1",1);
        // 								}
        // 						}
        // 
        // 				}
        // 			}
        // 			
        // 			
        // 			if(e.cell == this.grdMaster.getBindCellIndex("body", "chkYn1")&& this.dsMaster.getRowLevel(e.row)==0){
        // 				var chk0 =0;
        // 				var chk1 =0;
        // 				var ordNo = this.dsMaster.getColumn(e.row,"ordNo");
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						if(this.dsMaster.getColumn(i,"ordNo") == ordNo /*&& this.dsMaster.getRowLevel(i)==0*/){
        // 							if(this.dsMaster.getColumn(i,"chkYn1") == "0"){
        // 								chk0++;
        // 							}else if(this.dsMaster.getColumn(i,"chkYn1") == "1"){
        // 								chk1++;
        // 							}
        // 						}
        // 
        // 				}
        // 				
        // 				
        // 				for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 				{
        // 						if(this.dsMaster.getColumn(i,"ordNo") == ordNo && this.dsMaster.getRowLevel(i)==0){
        // 							if( chk1 == 0){
        // 								this.dsMaster.setColumn(i,"chkYn",0);
        // 								this.dsMaster.setColumn(i,"chkYn1",0);
        // 								}
        // 							else if( chk0 == 0){
        // 								this.dsMaster.setColumn(i,"chkYn",1);
        // 								this.dsMaster.setColumn(i,"chkYn1",1);
        // 								}
        // 						}
        // 
        // 				}
        // 			}
        // 		}
        // 		
        // 		this.grdMaster.set_enableredraw(true);
        // 		//this.dsMaster.set_enableevent(true);
        // 		
        // 

        }

        this.grdMaster_onheadclick = function(obj,e)
        {
        // 		//trace("2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  grdMaster_onheadclick ");
        // 	//alert("getRowLevel : " + this.dsMaster.getRowLevel(e.row));
        // 	//alert("e.cell : " + e.cell + "    chkYn1 : " + this.grdMaster.getCellText(-1, 2));
        // 	this.grdMaster.set_enableredraw(false);
        // 	//this.dsMaster.set_enableevent(false);
        //  	if(e.cell == 2 ){
        // 		//alert(this.grdMaster.getCellText(-1, 2));
        // 		var chk = this.grdMaster.getCellText(-1, 2);
        // 
        // 		if( chk == "1" ){
        // 			this.grdMaster.setCellProperty( "Head", 0, "text", "0");
        // 			this.grdMaster.setCellProperty( "Head", 2, "text", "0");
        // 			}
        // 		else{
        // 			this.grdMaster.setCellProperty( "Head", 0, "text", "1");
        // 			this.grdMaster.setCellProperty( "Head", 2, "text", "1");
        // 		}
        // 				
        // 		for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 		{
        // 			if(this.dsMaster.getRowLevel(i)==0){
        // 				if( chk == "1" ){
        // 					this.dsMaster.setColumn(i,"chkYn",0);
        // 					this.dsMaster.setColumn(i,"chkYn1",0);
        // 					}
        // 				else{
        // 					this.dsMaster.setColumn(i,"chkYn",1);
        // 					this.dsMaster.setColumn(i,"chkYn1",1);
        // 					}
        // 				}
        // 		}
        //  	}else if(e.cell == 0 ){
        // 		var chk = this.grdMaster.getCellText(-1, 0);
        // 
        // 		if( chk == "1" ){
        // 			this.grdMaster.setCellProperty( "Head", 0, "text", "0");
        // 			this.grdMaster.setCellProperty( "Head", 2, "text", "0");
        // 
        // 			}
        // 		else{
        // 			this.grdMaster.setCellProperty( "Head", 0, "text", "1");
        // 			this.grdMaster.setCellProperty( "Head", 2, "text", "1");
        // 			}
        // 					
        // 		for(var i=0; i<this.dsMaster.rowcount ; i++)
        // 		{
        // 			if(this.dsMaster.getRowLevel(i)==0){
        // 				if( chk == "1" ){
        // 					this.dsMaster.setColumn(i,"chkYn",0);
        // 					this.dsMaster.setColumn(i,"chkYn1",0);
        // 					}
        // 				else{
        // 					this.dsMaster.setColumn(i,"chkYn",1);
        // 					this.dsMaster.setColumn(i,"chkYn1",1);
        // 					}
        // 				}
        // 		}
        //  	}
        //  	//this.dsMaster.set_enableevent(true);
        //  	this.grdMaster.set_enableredraw(true);
        }

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        // 	// rowFlag처리시
        //     obj.setUpdateRow(e);
        //     var strColid = e.columnid;
        //     
        //     trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>> strColid  : " + strColid);
        //     trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>> strColid.indexOf('ftgQty') : " + strColid.indexOf('ftgQty'));
        //     
        //     if(e.columnid == 'chkYn1'){
        // 		if(e.newvalue == '1'){
        // 		     this.dsMaster.setColumn(e.row, 'dprdQty1',this.dsMaster.getColumn(e.row, 'prordQty')); 
        // 		}else{
        // 		     this.dsMaster.setColumn(e.row, 'dprdQty1',""); 
        // 		}
        //     }else if(strColid.indexOf('stnWdthLen') != -1){
        // 		this.dsMaster.setColumn(e.row, 'rowFlag1',"U"); 
        //     }else if(strColid.indexOf('stnHghtLen') != -1){
        // 		this.dsMaster.setColumn(e.row, 'rowFlag1',"U"); 
        //     }else if(strColid.indexOf('stnHghLen') != -1){
        // 		this.dsMaster.setColumn(e.row, 'rowFlag1',"U"); 
        //     }else if(strColid.indexOf('ftgQty') != -1){
        // 		this.dsMaster.setColumn(e.row, 'rowFlag1',"U"); 
        //     }
        }

        this.dsMaster_filter = function(ordNo1,custNm1)
        {
        // 	this.dsMaster.set_enableevent(false);
        // 	
        // 	this.dsMaster.filter("");
        // 	//trace(">>>>>>>>>>>>>>> this.parent : " + this.parent.id + "  >>>>>>>>>>>>>>>>> this.parent.parent : " + this.parent.parent.id);
        // 	//trace(">>>>>>>>>>>>>>> this.parent.parent.mskUsr00 : " + this.parent.parent.mskUsr00.id + "  >>>>>>>>>>>>>>>>> this.parent.parent.edtUsr00 : " + this.parent.parent.edtUsr00.id);
        // 
        // 	//var ordNo1 = this.parent.parent.mskUsr00.value;
        // 	//var custNm1 = this.parent.parent.edtUsr00.value;
        // 	//trace(">>>>>>>>>>>>>>> ordNo : " + ordNo1 + "  >>>>>>>>>>>>>>>>> custNm : " + custNm1);
        // 
        // 	if(!Ex.isEmpty(ordNo1) && !Ex.isEmpty(custNm1)){
        // 	//trace(">>>>>>>>>>>>>>> ordNo.length : " + ordNo1.length + "  >>>>>>>>>>>>>>>>> custNm.length : " + custNm1.length);
        // 	//trace(">>>>>>>>>>>>>>> ordNo 444: " + ordNo1 + "  >>>>>>>>>>>>>>>>> custNm 444: " + custNm1);
        // 				this.dsMaster.filter("custNm.substr(0,'"+ custNm1.length + "').indexOf('" + custNm1 + "') != '-1' && ordNo.substr(0,'"+ ordNo1.length + "').indexOf('" + ordNo1 + "') != '-1' ");
        // 				//this.dsMaster.filter("custNm.substr(0,"+ custNm1.length + ") == '" + custNm1 + "'  || ordNo.substr(0,"+ ordNo1.length + ")  == '" + ordNo1 + "'");
        // 	}else if(!Ex.isEmpty(ordNo1)){
        // 	//trace(">>>>>>>>>>>>>>> !Ex.isEmpty(ordNo1) : " + ordNo1.length + "  >>>>>>>>>>>>>>>>> custNm.length : " + custNm1.length);
        // 				this.dsMaster.filter("ordNo.substr(0,'"+ ordNo1.length + "').indexOf('" + ordNo1 + "') != '-1' ");
        // 	} else if(!Ex.isEmpty(custNm1)){
        // 				this.dsMaster.filter("custNm.substr(0,'"+ custNm1.length + "').indexOf('" + custNm1 + "') != '-1' ");
        // 	}
        // 	this.dsMaster.set_enableevent(true);
        // 	this.stcCnt00.setDataCount(this.dsMaster);

        }
        this.grdMaster_onexpandup = function(obj,e)
        {
        // 	if(e.cell == this.grdMaster.getBindCellIndex("body", "atflId")){
        // 		if(this.dsMaster.getColumn(e.row, 'atflId') =="") return;
        // 			var pType = "0";
        // 			//alert("edtResAtflId : " + this.edtResAtflId.value||'');
        // 			var atflId = this.dsMaster.getColumn(e.row, 'atflId')||'';
        // 			
        // 			var objParam = {atflSaloCd:'1000' , atflId:atflId , type:pType , searchOnly:"Y"};
        // 			Ex.core.filePopup(this,"pAddFilePopup",objParam);
        // 	
        // 	}
        }

        this.dsMaster_cancolumnchange = function(obj,e)
        {
        	 if(e.columnid == 'chkYn1' && e.newvalue == '1'){
        		     if(this.dsMaster.getColumn(e.row, 'nonQty') > 0 ){
        				//this.dsMaster.set_rowposition(i)
        				//this.grdMaster.setFocus();
        				//this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body", "chkYn1"));
        				// cg.info.00002: 미승인 수량이 있습니다.
        				// Ex.core.alert(this, "pAlert", "I" , "cg.info.00002" , [""]);
        				//Ex.setmsgbar(this, "cg.info.00002");
        				//return false;
        		     } 
            }
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCond.addEventHandler("oncolumnchanged", this.dsFile_oncolumnchanged, this);
            this.dsMaster.addEventHandler("oncolumnchanged", this.dsMaster_oncolumnchanged, this);
            this.dsMaster.addEventHandler("cancolumnchange", this.dsMaster_cancolumnchange, this);
            this.dsMasterTmp.addEventHandler("oncolumnchanged", this.dsMaster_oncolumnchanged, this);
            this.dsMasterTmp.addEventHandler("cancolumnchange", this.dsMaster_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.grdMaster.addEventHandler("oncellclick", this.grdMaster_oncellclick, this);
            this.grdMaster.addEventHandler("onheadclick", this.grdMaster_onheadclick, this);
            this.grdMaster.addEventHandler("onexpandup", this.grdMaster_onexpandup, this);
            this.Static20.addEventHandler("onclick", this.Static20_onclick, this);
            this.rdoSearchGb.addEventHandler("onitemchanged", this.rdoSearchGb_onitemchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_81175_MNCG641S.xfdl");

       
    };
}
)();