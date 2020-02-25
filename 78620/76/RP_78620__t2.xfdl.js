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
                this.set_name("_t1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aaaa", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoCoServerTimeDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N045", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N046", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N049", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N050", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N051", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N052", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N053", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N078", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N048", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N054", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N047", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N069", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N070", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N075", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N076", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N077", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N090", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N020", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N102", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N032", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N150", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N151", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N152", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N162", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N163", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_N164", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdKnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clmnMtdMap", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO", this);
            obj._setContents("<ColumnInfo><Column id=\"dbio_total_count_\" type=\"STRING\" size=\"256\"/><Column id=\"appNo\" type=\"STRING\" size=\"256\"/><Column id=\"polNo\" type=\"STRING\" size=\"256\"/><Column id=\"extrYn\" type=\"STRING\" size=\"256\"/><Column id=\"natNm\" type=\"STRING\" size=\"256\"/><Column id=\"rskNatYn\" type=\"STRING\" size=\"256\"/><Column id=\"appInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"custInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"addrInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rderInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"drvgInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"varOptCnt\" type=\"STRING\" size=\"256\"/><Column id=\"prodExplRefnInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"prodExplAddInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fndInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rdistInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"antyInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"agentRptInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"agentRptAddInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"uwqusAswCnt\" type=\"STRING\" size=\"256\"/><Column id=\"initmPayInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"nd2PayInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"isrdAddInfoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"polowSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"isrdSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtrttPrfpSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"hspztPrfpSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"dthtPrfpSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"payrSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"refnPayrSsnNomlYn\" type=\"STRING\" size=\"256\"/><Column id=\"orgTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dlvMsg\" type=\"STRING\" size=\"256\"/><Column id=\"compYn\" type=\"STRING\" size=\"256\"/><Column id=\"prodGrantDvsn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppBascInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppCustInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaCustBascInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppRderInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppCustDrvgInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppVarinsInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppFndInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppFndRdistInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppAntyInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppAgentRptInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppAgentRptAddInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppUwqusInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppFrstRcveInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppNd2AfRcveInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppIsrdAddInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppExplRefnInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaAppExplAddInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_NbNaCDDTransDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbNaCompInfoDtlInOutListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbSiCustInfoUseAgreeSearchInDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbSiUwqusResHisListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbSiUwqusQusHisListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbSiUwqusDisHisListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbNaCustInfoCheckDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbNaFATCAInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbNaKLTPDFDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbStSmartScriptInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_MyList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_MyList_hdn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiDBMProductOutListDTO_poPiDBMProductOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiDBMProductOutListDTO", this);
            obj._setContents("<ColumnInfo><Column id=\"dbio_total_count_\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_33", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_36", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_28", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiDBMPackageOutListDTO_poPiDBMPackageOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppDBMSvcInfoListDTO_NbNaAppDBMSvcInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiGenProdAttrbGrpMetaOutListDTO_poPiNormProdAttrGrpMetaOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppScrtListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppScrtListDTO_NbNaAppScrtInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiDBMPackageOutListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppDBMSvcInfoListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaProdUwqusItmOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaProdUwqusItmOutDTO_NbNaAppProdUwqusBascListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiOutDTO_rider", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiOutDTO_rider_riderOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiOutDTO_prpPrmList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiOutDTO_prpPrmList_nbSiPrpPrmDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO_nbNaUwqusAswInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO_nbNaNetmUwqusCdInfoListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO_nbNaNetmUwqusCdInfoListDTO_nbNaNetmUwqusCdInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO_nbNaUwqusAswListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppUwqusInfoMultiDTO_nbNaUwqusAswListDTO_nbNaUwqusAswDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaLLDPNSListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaLLDPNSListDTO_NbNaLLDPNSTableDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDrvgHobyListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDrvgHobyListDTO_NbNaDrvgHobyInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppCalcMtrtYmdRsltDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPrfpInfoInpDTO_poPiGenProdAttrbGrpBasicInDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiGenProdAttrbGrpMetaOutListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiOccupationInfoListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiOccupationInfoListDTO_nbSiOccupationInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiRiskgradeInDTO_drvgHobyInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiRiskgradeOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoPiGenProdAttrbGrpBasicOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaVldAppDtSrchInDTO_nbNaAppRderMattDataDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaVldAppDtSrchOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppVldChkRsltDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoCdCodeDetailListDTO_poCdCodeDetailDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PoCdCodeDetailListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_faceAmt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaActNoLenChkRsltDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaRegIDChkAppNoOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaNoCommonMultiOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiCustInfoUseAgreeOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiInDTO_rider", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiInDTO_rider_riderInput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiPremiumMultiOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_35", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_38", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param_15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_dbmInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_uwInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_custInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_optInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_fndInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_antyInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_univInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_prmInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_rderInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_nbseInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbNaKLPTXS100ProcDTO_klptxs100InDto", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_custInfoMain_custInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_custInfoMain_custInfo_drvgHobyInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_rderInfoMain_rderInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_optInfoMain_optInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_optInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_beneInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_beneInfoMain_beneInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_beneInfoMain_beneInfo_beneDetlInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_saleilstProdMattInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_saleilstProdMattInfoMain_grantBeneMattInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_surrefnInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_surrefnInfoMain_surrefnIntrInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_surrefnInfoMain_surrefnIntrInfo_surrefnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO1_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO1_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO2_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_NbSiRenePrmInfoByTermDTO2_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_mrRderInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_mrRderInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_mrRderInfoNew", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain_mrRderInfoNew_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_nbNaKLTPDFDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_rderInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_rderInfoMain_rderInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_dbmInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_prmInfoMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_optInfoMain_optInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppInfoInqRsltDTO_nbSiNoCenterCustDataDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppBascInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppCustInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaCustBascInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppRderInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppCustDrvgInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppVarinsInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppAgentRptInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppAgentRptAddInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppUwqusInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppFrstRcveInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppNd2AfRcveInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppProcLogDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppExplRefnInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppExplAddInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaCDDTransDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_NbNaAppExplReneMrInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbSiUwqusQusHisListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbSiUwqusQusHisListDTO_NbSiUwqusQusHisDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbSiUwqusDisHisListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbSiUwqusDisHisListDTO_NbSiUwqusDisHisDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbNaCustInfoCheckDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbNaFATCAInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaDBMAppContInfoInpDTO_nbNaKLTPDFDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPolVldOutListDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPolVldOutListDTO_nbNaPolVldOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPolVldOutListDTO_nbNaCompInfoDtlOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPolVldOutListDTO_nbNaSimpleExistAppOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaPolVldOutListDTO_infoMsgArr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppEpolChkInpDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppEpolChkInpDTO_NbNaAppRderInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppEpolChkInpDTO_pisdDrvgHobyInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaAppEpolChkInpDTO_sisrdDrvgHobyInfoDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaEpolChkOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaEpolChkOutDTO_nbNaEpolRsltCdDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaCompInfoInOutListDTO_nbNaCompInfoOutDTO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_renePrmInfoByTermInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_renePrmInfoByTermInfo_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbSiSaleilstMultiDTO_renePrmInfoByTermInfo_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo1_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo1_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo2_renePrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo2_renePrmInfo_reneRderPrmInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "29", "285", "674", "180", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("NbNaSaleilstMultiDTO_nbSiSaleilstMultiDTO_renePrmInfoByTermInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"parentIndex\"/><Cell col=\"1\" disptype=\"normal\" text=\"rowIndex\"/><Cell col=\"2\" disptype=\"normal\" text=\"chkSel\"/><Cell col=\"3\" disptype=\"normal\" text=\"reneTerm\"/><Cell col=\"4\" disptype=\"normal\" text=\"renePrmInfoCnt\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:parentIndex\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:rowIndex\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:chkSel\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:reneTerm\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:renePrmInfoCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "44", "218", "147", "37", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("[RP_78620] reload 실행시 form_onload가 발생 안됨.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "160", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1. 화면에서 런타임에서 마우스 우클릭 reload해도 onload 안탐...\r\n2. html5 버튼으로  this.reload(); 호출해도 onload 안탐..\r\n\r\n* 테스트 방법 *\r\n1. 런타임에서 폼을 실행 합니다.\r\n2. 마우스를 우클릭하여 reload 하여 봅니다.\r\n3. 현상 확인\r\n4. 폼을 html5로 호출 합니다.\r\n5. 버튼을 눌러 this.reload(); 를 합니다.\r\n6. 현상을 확인 합니다. -> REL_18.02.27.00 변경집합번호 44172번으로 발생되는 상황\r\n   런타임에서는 확인이 가능하고 html에서는 에러가 발생함\r\n   html은 REL_18.02.27.00 변경집합번호 44214 이후 부터 확인이 가능함");
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78620__t2.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this._t1_onload = function(obj,e)
        {
        	alert("_t1_onload");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this._t1_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_78620__t2.xfdl");

       
    };
}
)();
