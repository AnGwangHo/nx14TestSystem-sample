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
                this.set_name("PayRefCom005");
                this.set_titletext("연말정산신청관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1030,700);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"b_chk_00\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_01\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_02\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_03\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_04\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_05\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_06\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_07\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_08\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_09\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_10\" type=\"STRING\" size=\"256\"/><Column id=\"b_chk_11\" type=\"STRING\" size=\"256\"/><Column id=\"emp_no\" type=\"STRING\" size=\"256\"/><Column id=\"emp_id\" type=\"STRING\" size=\"256\"/><Column id=\"ec_year\" type=\"STRING\" size=\"256\"/><Column id=\"is_expand\" type=\"STRING\" size=\"256\"/><Column id=\"ref_list_id\" type=\"STRING\" size=\"256\"/><Column id=\"ref_base_item_id\" type=\"STRING\" size=\"256\"/><Column id=\"emp_nm\" type=\"STRING\" size=\"256\"/><Column id=\"householder_yn\" type=\"STRING\" size=\"256\"/><Column id=\"pay_tot_amt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ec_kind\" type=\"STRING\" size=\"256\"/><Column id=\"start_dt\" type=\"STRING\" size=\"256\"/><Column id=\"end_dt\" type=\"STRING\" size=\"256\"/><Column id=\"manager_yn\" type=\"STRING\" size=\"256\"/><Column id=\"h0110_yn\" type=\"STRING\" size=\"256\"/><Column id=\"h0210_yn\" type=\"STRING\" size=\"256\"/><Column id=\"k0110_yn\" type=\"STRING\" size=\"256\"/><Column id=\"h0120_yn\" type=\"STRING\" size=\"256\"/><Column id=\"paystaff_yn\" type=\"STRING\" size=\"256\"/><Column id=\"householder_change_yn\" type=\"STRING\" size=\"256\"/><Column id=\"cal_end_yn\" type=\"STRING\" size=\"256\"/><Column id=\"confirm_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"b_chk_00\">0</Col><Col id=\"b_chk_01\">0</Col><Col id=\"b_chk_02\">0</Col><Col id=\"b_chk_03\">0</Col><Col id=\"b_chk_04\">0</Col><Col id=\"b_chk_05\">0</Col><Col id=\"b_chk_06\">0</Col><Col id=\"b_chk_07\">0</Col><Col id=\"b_chk_08\">0</Col><Col id=\"b_chk_09\">0</Col><Col id=\"b_chk_10\">0</Col><Col id=\"b_chk_11\">0</Col><Col id=\"is_expand\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_top", this);
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

            obj = new Dataset("ds_detail_base", this);
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

            obj = new Dataset("ds_detail_00", this);
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

            obj = new Dataset("ds_ref_close_cd", this);
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

            obj = new Dataset("ds_detail_main", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ref_base_item_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"company_id\" type=\"string\" size=\"256\"/><Column id=\"ref_list_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"emp_nm\" type=\"string\" size=\"256\"/><Column id=\"ctz_no\" type=\"string\" size=\"256\"/><Column id=\"a0121\" type=\"string\" size=\"256\"/><Column id=\"a0139\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0132\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0133\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0134\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0135\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0136\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0112\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0131\" type=\"string\" size=\"256\"/><Column id=\"b0141\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0151\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0151_1\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0151_2\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0151_3\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0161\" type=\"string\" size=\"256\"/><Column id=\"c0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0122\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0123\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0124\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0132\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0141\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0151\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0260\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0270\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0280\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0290\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0122\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0141\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0151\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0161\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0162\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0171\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0172\" type=\"bigdecimal\" size=\"256\"/><Column id=\"j0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"j0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0171\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0172\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0173\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0174\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0175\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0176\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0177\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0190\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0195\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0200\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0241\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0242\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0243\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0244\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0245\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0246\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0247\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0248\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0249\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0122\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0123\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"file_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0110_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0120_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0210_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0220_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0230_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0240_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0250_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0260_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0270_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0280_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"h0290_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"d0130_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"k0110_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"k0120_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"k0130_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0110_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0120_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0130_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0150_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0160_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0170_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"m0190_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"reg_op_id\" type=\"string\" size=\"256\"/><Column id=\"reg_user_id\" type=\"string\" size=\"256\"/><Column id=\"reg_dt\" type=\"string\" size=\"256\"/><Column id=\"reg_ip\" type=\"string\" size=\"256\"/><Column id=\"update_op_id\" type=\"string\" size=\"256\"/><Column id=\"update_user_id\" type=\"string\" size=\"256\"/><Column id=\"update_dt\" type=\"string\" size=\"256\"/><Column id=\"update_ip\" type=\"string\" size=\"256\"/><Column id=\"emp_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ec_year\" type=\"string\" size=\"256\"/><Column id=\"a0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"div_00_amt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"div_03_amt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"emp_no\" type=\"string\" size=\"256\"/><Column id=\"is_new\" type=\"string\" size=\"256\"/><Column id=\"std_item_cd\" type=\"string\" size=\"256\"/><Column id=\"householder_yn\" type=\"string\" size=\"256\"/><Column id=\"pay_tot_amt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"manager_yn\" type=\"string\" size=\"256\"/><Column id=\"file_seq\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0110_yn\" type=\"string\" size=\"256\"/><Column id=\"h0210_yn\" type=\"string\" size=\"256\"/><Column id=\"k0110_yn\" type=\"string\" size=\"256\"/><Column id=\"h0120_yn\" type=\"string\" size=\"256\"/><Column id=\"org_nm\" type=\"string\" size=\"256\"/><Column id=\"org_cd\" type=\"string\" size=\"256\"/><Column id=\"ogrp_nm\" type=\"string\" size=\"256\"/><Column id=\"ogrp_cd\" type=\"string\" size=\"256\"/><Column id=\"emp_type_nm\" type=\"string\" size=\"256\"/><Column id=\"emp_type_cd\" type=\"string\" size=\"256\"/><Column id=\"job_class_nm\" type=\"string\" size=\"256\"/><Column id=\"job_class_cd\" type=\"string\" size=\"256\"/><Column id=\"duty_nm\" type=\"string\" size=\"256\"/><Column id=\"duty_cd\" type=\"string\" size=\"256\"/><Column id=\"d0110_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"spc_income_ded_amt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"etc_income_ded_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0130_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"spc_tax_ded_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"taxcut_start_dt\" type=\"string\" size=\"256\"/><Column id=\"taxcut_end_dt\" type=\"string\" size=\"256\"/><Column id=\"i0201\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0202\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0203\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0112\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0190\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0191\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0192\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0121_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0121_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0122_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0122_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0123_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0123_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0124_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0124_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0132_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0132_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0110_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0110_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0120_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0120_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0140_auyo_yn\" type=\"string\" size=\"256\"/><Column id=\"n0124\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0178\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"confirm_yn\" type=\"string\" size=\"256\"/><Column id=\"d0110_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"e0110_auto_yn\" type=\"string\" size=\"256\"/><Column id=\"i0123\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0124\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0163\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0164\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0173\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0174\" type=\"bigdecimal\" size=\"256\"/><Column id=\"in_start_dt\" type=\"string\" size=\"256\"/><Column id=\"in_end_dt\" type=\"string\" size=\"256\"/><Column id=\"ref_seq_kind\" type=\"string\" size=\"256\"/><Column id=\"chk_suborg_yn\" type=\"string\" size=\"256\"/><Column id=\"paystaff_yn\" type=\"string\" size=\"256\"/><Column id=\"in_office_yn\" type=\"string\" size=\"256\"/><Column id=\"ec_kind\" type=\"string\" size=\"256\"/><Column id=\"ec_kind_nm\" type=\"string\" size=\"256\"/><Column id=\"reg_seq\" type=\"bigdecimal\" size=\"256\"/><Column id=\"last_yn\" type=\"string\" size=\"256\"/><Column id=\"biz_cd\" type=\"string\" size=\"256\"/><Column id=\"biz_nm\" type=\"string\" size=\"256\"/><Column id=\"national_no\" type=\"string\" size=\"256\"/><Column id=\"spouse_yn\" type=\"string\" size=\"256\"/><Column id=\"nationality_nm\" type=\"string\" size=\"256\"/><Column id=\"nationality_cd\" type=\"string\" size=\"256\"/><Column id=\"start_dt\" type=\"string\" size=\"256\"/><Column id=\"end_dt\" type=\"string\" size=\"256\"/><Column id=\"resident_cd\" type=\"string\" size=\"256\"/><Column id=\"nation_nm\" type=\"string\" size=\"256\"/><Column id=\"nation_cd\" type=\"string\" size=\"256\"/><Column id=\"foreign_cd\" type=\"string\" size=\"256\"/><Column id=\"frgn_tax_type\" type=\"string\" size=\"256\"/><Column id=\"foreign_corp_yn\" type=\"string\" size=\"256\"/><Column id=\"foreign_start_dt\" type=\"string\" size=\"256\"/><Column id=\"d0120_x02\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0120_x01\" type=\"bigdecimal\" size=\"256\"/><Column id=\"child_cnt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"work_area_cd\" type=\"string\" size=\"256\"/><Column id=\"work_area_nm\" type=\"string\" size=\"256\"/><Column id=\"n0125\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"dataset_row_type\" type=\"string\" size=\"256\"/><Column id=\"check_delete\" type=\"string\" size=\"256\"/><Column id=\"check_select\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ref_base_item_id\">1512</Col><Col id=\"company_id\">NEPES</Col><Col id=\"ref_list_id\">1498</Col><Col id=\"emp_nm\">권효진</Col><Col id=\"ctz_no\"/><Col id=\"a0121\">0</Col><Col id=\"a0139\">0</Col><Col id=\"a0131\">0</Col><Col id=\"a0132\">0</Col><Col id=\"a0133\">0</Col><Col id=\"a0134\">0</Col><Col id=\"a0135\">0</Col><Col id=\"a0136\">0</Col><Col id=\"b0111\">0</Col><Col id=\"b0112\">0</Col><Col id=\"b0121\">0</Col><Col id=\"b0131\">0</Col><Col id=\"b0141\">0</Col><Col id=\"b0151\">0</Col><Col id=\"b0151_1\">0</Col><Col id=\"b0151_2\">0</Col><Col id=\"b0151_3\">0</Col><Col id=\"b0161\">0</Col><Col id=\"c0111\">0</Col><Col id=\"d0110\">1800000</Col><Col id=\"d0120\">0</Col><Col id=\"d0121\">0</Col><Col id=\"d0122\">0</Col><Col id=\"d0123\">0</Col><Col id=\"d0124\">0</Col><Col id=\"d0130\">0</Col><Col id=\"d0131\">0</Col><Col id=\"d0132\">0</Col><Col id=\"e0110\">1206090</Col><Col id=\"e0120\">281820</Col><Col id=\"e0130\">0</Col><Col id=\"e0140\">0</Col><Col id=\"f0110\">5000000</Col><Col id=\"f0120\">0</Col><Col id=\"f0130\">0</Col><Col id=\"f0140\">0</Col><Col id=\"f0210\">0</Col><Col id=\"g0110\">0</Col><Col id=\"g0120\">0</Col><Col id=\"g0121\">0</Col><Col id=\"g0130\">0</Col><Col id=\"g0131\">0</Col><Col id=\"g0140\">0</Col><Col id=\"g0141\">0</Col><Col id=\"g0150\">0</Col><Col id=\"g0151\">0</Col><Col id=\"h0110\">0</Col><Col id=\"h0120\">0</Col><Col id=\"h0130\">0</Col><Col id=\"h0210\">0</Col><Col id=\"h0220\">0</Col><Col id=\"h0230\">0</Col><Col id=\"h0240\">0</Col><Col id=\"h0250\">0</Col><Col id=\"h0260\">0</Col><Col id=\"h0270\">0</Col><Col id=\"h0280\">0</Col><Col id=\"h0290\">0</Col><Col id=\"i0110\">0</Col><Col id=\"i0120\">0</Col><Col id=\"i0121\">1000000</Col><Col id=\"i0122\">0</Col><Col id=\"i0130\">0</Col><Col id=\"i0131\">0</Col><Col id=\"i0140\">0</Col><Col id=\"i0141\">0</Col><Col id=\"i0150\">0</Col><Col id=\"i0151\">0</Col><Col id=\"i0160\">0</Col><Col id=\"i0161\">0</Col><Col id=\"i0162\">0</Col><Col id=\"i0170\">0</Col><Col id=\"i0171\">0</Col><Col id=\"i0172\">0</Col><Col id=\"j0110\">0</Col><Col id=\"j0120\">0</Col><Col id=\"k0110\">2000000</Col><Col id=\"k0120\">0</Col><Col id=\"k0130\">0</Col><Col id=\"k0140\">0</Col><Col id=\"l0110\">10000000</Col><Col id=\"l0120\">0</Col><Col id=\"l0130\">3000000</Col><Col id=\"l0140\">5000000</Col><Col id=\"l0150\">1000000</Col><Col id=\"l0160\">500000</Col><Col id=\"l0170\">0</Col><Col id=\"l0171\">0</Col><Col id=\"l0172\">0</Col><Col id=\"l0173\">0</Col><Col id=\"l0174\">0</Col><Col id=\"l0175\">0</Col><Col id=\"l0176\">0</Col><Col id=\"l0177\">0</Col><Col id=\"m0110\">0</Col><Col id=\"m0120\">0</Col><Col id=\"m0130\">0</Col><Col id=\"m0140\">0</Col><Col id=\"m0150\">0</Col><Col id=\"m0160\">0</Col><Col id=\"m0170\">0</Col><Col id=\"m0180\">0</Col><Col id=\"m0190\">0</Col><Col id=\"m0195\">1000000</Col><Col id=\"m0200\">0</Col><Col id=\"m0210\">0</Col><Col id=\"m0220\">0</Col><Col id=\"m0230\">0</Col><Col id=\"m0240\">0</Col><Col id=\"m0241\">0</Col><Col id=\"m0242\">0</Col><Col id=\"m0243\">0</Col><Col id=\"m0244\">0</Col><Col id=\"m0245\">0</Col><Col id=\"m0246\">0</Col><Col id=\"m0247\">0</Col><Col id=\"m0248\">0</Col><Col id=\"m0249\">0</Col><Col id=\"m0250\">0</Col><Col id=\"n0110\">0</Col><Col id=\"n0120\">0</Col><Col id=\"n0121\">0</Col><Col id=\"n0122\">0</Col><Col id=\"n0123\">0</Col><Col id=\"n0130\">0</Col><Col id=\"n0140\">0</Col><Col id=\"n0150\">0</Col><Col id=\"n0160\">0</Col><Col id=\"n0170\">0</Col><Col id=\"n0180\">0</Col><Col id=\"h0110_auto_yn\">N</Col><Col id=\"h0120_auto_yn\">N</Col><Col id=\"h0210_auto_yn\">N</Col><Col id=\"h0220_auto_yn\">N</Col><Col id=\"h0230_auto_yn\">N</Col><Col id=\"h0240_auto_yn\">N</Col><Col id=\"h0250_auto_yn\">N</Col><Col id=\"h0260_auto_yn\">N</Col><Col id=\"h0270_auto_yn\">N</Col><Col id=\"h0280_auto_yn\">N</Col><Col id=\"h0290_auto_yn\">N</Col><Col id=\"d0130_auto_yn\">N</Col><Col id=\"k0110_auto_yn\">N</Col><Col id=\"k0120_auto_yn\">N</Col><Col id=\"k0130_auto_yn\">N</Col><Col id=\"m0110_auto_yn\">N</Col><Col id=\"m0120_auto_yn\">N</Col><Col id=\"m0130_auto_yn\">N</Col><Col id=\"m0150_auto_yn\">N</Col><Col id=\"m0160_auto_yn\">N</Col><Col id=\"m0170_auto_yn\">N</Col><Col id=\"m0190_auto_yn\">N</Col><Col id=\"reg_op_id\">NEPES</Col><Col id=\"reg_user_id\">hradmin</Col><Col id=\"reg_dt\">20181228114535</Col><Col id=\"reg_ip\">127.0.0.1</Col><Col id=\"update_op_id\">NEPES</Col><Col id=\"update_user_id\">hradmin</Col><Col id=\"update_dt\">20190103101732</Col><Col id=\"update_ip\">127.0.0.1</Col><Col id=\"a0110\">0</Col><Col id=\"div_00_amt\">0</Col><Col id=\"div_03_amt\">0</Col><Col id=\"emp_no\">20180105</Col><Col id=\"is_new\">0</Col><Col id=\"pay_tot_amt\">0</Col><Col id=\"h0110_yn\">Y</Col><Col id=\"h0210_yn\">N</Col><Col id=\"k0110_yn\">Y</Col><Col id=\"h0120_yn\">N</Col><Col id=\"d0110_sum\">1800000</Col><Col id=\"spc_income_ded_amt\">2487910</Col><Col id=\"h0100_sum\">0</Col><Col id=\"h0200_sum\">0</Col><Col id=\"i0100_sum\">1000000</Col><Col id=\"k0100_sum\">2000000</Col><Col id=\"l0100_sum\">21600000</Col><Col id=\"m0200_sum\">0</Col><Col id=\"etc_income_ded_sum\">1000000</Col><Col id=\"d0130_sum\">0</Col><Col id=\"d0131_sum\">0</Col><Col id=\"e0000_sum\">0</Col><Col id=\"f0000_sum\">5000000</Col><Col id=\"g0000_sum\">0</Col><Col id=\"i0000_sum\">0</Col><Col id=\"spc_tax_ded_sum\">5000000</Col><Col id=\"i0201\">0</Col><Col id=\"i0202\">0</Col><Col id=\"i0203\">0</Col><Col id=\"l0111\">0</Col><Col id=\"l0112\">0</Col><Col id=\"n0190\">0</Col><Col id=\"n0191\">0</Col><Col id=\"n0192\">0</Col><Col id=\"d0110_x01\">0</Col><Col id=\"d0110_x02\">0</Col><Col id=\"d0121_x01\">0</Col><Col id=\"d0121_x02\">0</Col><Col id=\"d0122_x01\">0</Col><Col id=\"d0122_x02\">0</Col><Col id=\"d0123_x01\">0</Col><Col id=\"d0123_x02\">0</Col><Col id=\"d0124_x01\">0</Col><Col id=\"d0124_x02\">0</Col><Col id=\"d0131_x01\">0</Col><Col id=\"d0131_x02\">0</Col><Col id=\"d0132_x01\">0</Col><Col id=\"d0132_x02\">0</Col><Col id=\"e0110_x01\">0</Col><Col id=\"e0110_x02\">0</Col><Col id=\"e0120_x01\">0</Col><Col id=\"e0120_x02\">0</Col><Col id=\"n0124\">0</Col><Col id=\"l0178\">0</Col><Col id=\"k0111\">0</Col><Col id=\"k0131\">0</Col><Col id=\"confirm_yn\">N</Col><Col id=\"d0110_auto_yn\">N</Col><Col id=\"e0110_auto_yn\">N</Col><Col id=\"i0123\">0</Col><Col id=\"i0124\">0</Col><Col id=\"i0163\">0</Col><Col id=\"i0164\">0</Col><Col id=\"i0173\">0</Col><Col id=\"i0174\">0</Col><Col id=\"d0120_x02\">0</Col><Col id=\"d0120_x01\">0</Col><Col id=\"child_cnt\">0</Col><Col id=\"n0125\">0</Col><Col id=\"l0180\">2100000</Col><Col id=\"dataset_row_type\"/><Col id=\"check_delete\">0</Col><Col id=\"check_select\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_main2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ref_detail_list_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"company_id\" type=\"string\" size=\"256\"/><Column id=\"ref_list_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ec_year\" type=\"string\" size=\"256\"/><Column id=\"emp_id\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ec_kind\" type=\"string\" size=\"256\"/><Column id=\"reg_seq\" type=\"bigdecimal\" size=\"256\"/><Column id=\"last_yn\" type=\"string\" size=\"256\"/><Column id=\"ec_dt\" type=\"string\" size=\"256\"/><Column id=\"biz_cd\" type=\"string\" size=\"256\"/><Column id=\"biz_nm\" type=\"string\" size=\"256\"/><Column id=\"org_cd\" type=\"string\" size=\"256\"/><Column id=\"tax_no\" type=\"string\" size=\"256\"/><Column id=\"bef_com_cnt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"resident_cd\" type=\"string\" size=\"256\"/><Column id=\"nation_cd\" type=\"string\" size=\"256\"/><Column id=\"frgn_tax_type\" type=\"string\" size=\"256\"/><Column id=\"in_start_dt\" type=\"string\" size=\"256\"/><Column id=\"in_end_dt\" type=\"string\" size=\"256\"/><Column id=\"emp_nm\" type=\"string\" size=\"256\"/><Column id=\"foreign_cd\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ctz_no\" type=\"string\" size=\"256\"/><Column id=\"taxcut_start_dt\" type=\"string\" size=\"256\"/><Column id=\"taxcut_end_dt\" type=\"string\" size=\"256\"/><Column id=\"householder_yn\" type=\"string\" size=\"256\"/><Column id=\"x0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x01_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x02_nm\" type=\"string\" size=\"256\"/><Column id=\"x02_no\" type=\"string\" size=\"256\"/><Column id=\"x0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0260\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0300_nm\" type=\"string\" size=\"256\"/><Column id=\"x0300_no\" type=\"string\" size=\"256\"/><Column id=\"x0310\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0320\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0330\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0340\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0350\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0360\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0300_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0410\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0420\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0430\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0440\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0450\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0460\" type=\"bigdecimal\" size=\"256\"/><Column id=\"x0400_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"cd_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0139\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0112\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0141\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0151\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0161\" type=\"bigdecimal\" size=\"256\"/><Column id=\"c0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"c0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0101_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0102_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0001_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"f0002_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0141\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0151\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0101_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0102_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"j0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"j0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"j0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0101_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0102_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0103_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0104_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0190\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0195\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0200\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0241\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0242\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0243\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0244\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0245\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0246\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0247\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0248\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0249\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0250_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"o0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"o0101_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0310\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0320\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0110\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0120\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0310\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0320\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0330\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0300_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0410\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0420\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0430\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0400_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"reg_op_id\" type=\"string\" size=\"256\"/><Column id=\"reg_user_id\" type=\"string\" size=\"256\"/><Column id=\"reg_dt\" type=\"string\" size=\"256\"/><Column id=\"reg_ip\" type=\"string\" size=\"256\"/><Column id=\"update_op_id\" type=\"string\" size=\"256\"/><Column id=\"update_user_id\" type=\"string\" size=\"256\"/><Column id=\"update_dt\" type=\"string\" size=\"256\"/><Column id=\"update_ip\" type=\"string\" size=\"256\"/><Column id=\"emp_no\" type=\"string\" size=\"256\"/><Column id=\"ec_start_dt\" type=\"string\" size=\"256\"/><Column id=\"ec_end_dt\" type=\"string\" size=\"256\"/><Column id=\"org_nm\" type=\"string\" size=\"256\"/><Column id=\"pos_nm\" type=\"string\" size=\"256\"/><Column id=\"duty_nm\" type=\"string\" size=\"256\"/><Column id=\"check_list\" type=\"string\" size=\"256\"/><Column id=\"ogrp_nm\" type=\"string\" size=\"256\"/><Column id=\"ogrp_cd\" type=\"string\" size=\"256\"/><Column id=\"job_class_nm\" type=\"string\" size=\"256\"/><Column id=\"x03_nm\" type=\"string\" size=\"256\"/><Column id=\"x03_no\" type=\"string\" size=\"256\"/><Column id=\"x02_join_dt\" type=\"string\" size=\"256\"/><Column id=\"x02_retire_dt\" type=\"string\" size=\"256\"/><Column id=\"x02_dc_start_dt\" type=\"string\" size=\"256\"/><Column id=\"x02_dc_end_dt\" type=\"string\" size=\"256\"/><Column id=\"x03_join_dt\" type=\"string\" size=\"256\"/><Column id=\"x03_retire_dt\" type=\"string\" size=\"256\"/><Column id=\"x03_dc_start_dt\" type=\"string\" size=\"256\"/><Column id=\"x03_dc_end_dt\" type=\"string\" size=\"256\"/><Column id=\"y0170\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0190\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0260\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0270\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0280\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0290\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0310\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0320\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0330\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0340\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0350\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0360\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0370\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0380\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0390\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y0300_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"c0900\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0122\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0123\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0124\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0132\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0130\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0240\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0250\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0260\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0270\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0280\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0290\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0200\" type=\"bigdecimal\" size=\"256\"/><Column id=\"efghi_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"k0140\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0150\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0160\" type=\"bigdecimal\" size=\"256\"/><Column id=\"l0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0122\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0120_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0190\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0191\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0192\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0211\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0221\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0231\" type=\"bigdecimal\" size=\"256\"/><Column id=\"w0201_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0200\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0201\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0202\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0203\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0204\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0205\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0103_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0180\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0300_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"z0410\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0220\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0230\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0310\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0312\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0320\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0330\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0350\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0360\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0370\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0372\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0380\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0390\" type=\"bigdecimal\" size=\"256\"/><Column id=\"in_office_yn\" type=\"string\" size=\"256\"/><Column id=\"emp_type_cd\" type=\"string\" size=\"256\"/><Column id=\"emp_type_nm\" type=\"string\" size=\"256\"/><Column id=\"x02_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"y02_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0211\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0221\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0231\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0311\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0313\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0321\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0331\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0351\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0361\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0371\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0373\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0381\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0391\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0101\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0102\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0103\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0104\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0105\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0106\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0201\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0202\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0203\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0204\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0205\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0206\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0207\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0301\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0302\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0303\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0304\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0401\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0402\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0403\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0404\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0501\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0502\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0503\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0504\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0505\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0506\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0507\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0508\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0509\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0510\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"a0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"b0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"spc_income_ded_amt\" type=\"bigdecimal\" size=\"256\"/><Column id=\"h0100_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"etc_income_ded_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"m0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0200_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0130_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0131_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"spc_tax_ded_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"g0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"i0000_sum\" type=\"bigdecimal\" size=\"256\"/><Column id=\"foreign_corp_yn\" type=\"string\" size=\"256\"/><Column id=\"don0208\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0209\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0210\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0511\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0512\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0513\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0514\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0515\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0516\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0517\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0518\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0519\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0520\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0521\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0522\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ref_seq_kind\" type=\"string\" size=\"256\"/><Column id=\"ec_kind_nm\" type=\"string\" size=\"256\"/><Column id=\"duty_cd\" type=\"string\" size=\"256\"/><Column id=\"pos_cd\" type=\"string\" size=\"256\"/><Column id=\"job_class_cd\" type=\"string\" size=\"256\"/><Column id=\"addr\" type=\"string\" size=\"256\"/><Column id=\"resident_nm\" type=\"string\" size=\"256\"/><Column id=\"nation_nm\" type=\"string\" size=\"256\"/><Column id=\"foreign_nm\" type=\"string\" size=\"256\"/><Column id=\"nationality_cd\" type=\"string\" size=\"256\"/><Column id=\"nationality_nm\" type=\"string\" size=\"256\"/><Column id=\"pay_kind_cd\" type=\"string\" size=\"256\"/><Column id=\"pay_kind_nm\" type=\"string\" size=\"256\"/><Column id=\"paystaff_yn\" type=\"string\" size=\"256\"/><Column id=\"confirm_yn\" type=\"string\" size=\"256\"/><Column id=\"chk_suborg_yn\" type=\"string\" size=\"256\"/><Column id=\"n0123\" type=\"bigdecimal\" size=\"256\"/><Column id=\"n0124\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0211\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0212\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0213\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0214\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0215\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0216\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0523\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0524\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0525\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0526\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0527\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0528\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0529\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0530\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0531\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0532\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0533\" type=\"bigdecimal\" size=\"256\"/><Column id=\"don0534\" type=\"bigdecimal\" size=\"256\"/><Column id=\"work_area_cd\" type=\"string\" size=\"256\"/><Column id=\"work_area_nm\" type=\"string\" size=\"256\"/><Column id=\"n0125\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0110_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0120_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0121_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0122_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0123_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"d0124_t\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0111\" type=\"bigdecimal\" size=\"256\"/><Column id=\"e0121\" type=\"bigdecimal\" size=\"256\"/><Column id=\"installments_yn\" type=\"string\" size=\"256\"/><Column id=\"dataset_row_type\" type=\"string\" size=\"256\"/><Column id=\"check_delete\" type=\"string\" size=\"256\"/><Column id=\"check_select\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ref_detail_list_id\">1513</Col><Col id=\"company_id\">NEPES</Col><Col id=\"ref_list_id\">1498</Col><Col id=\"cd_sum\">46864000</Col><Col id=\"z0120\">34770800</Col><Col id=\"e0110\">1206090</Col><Col id=\"e0120\">281820</Col><Col id=\"f0000_sum\">539112</Col><Col id=\"h0110\">0</Col><Col id=\"h0120\">0</Col><Col id=\"h0200_sum\">0</Col><Col id=\"i0100_sum\">1000000</Col><Col id=\"j0110\">0</Col><Col id=\"j0120\">0</Col><Col id=\"k0100_sum\">800000</Col><Col id=\"l0100_sum\">3115200</Col><Col id=\"m0110\">0</Col><Col id=\"m0140\">0</Col><Col id=\"m0180\">0</Col><Col id=\"m0190\">0</Col><Col id=\"m0195\">400000</Col><Col id=\"n0130\">660000</Col><Col id=\"n0140\">0</Col><Col id=\"n0150\">0</Col><Col id=\"n0180\">0</Col><Col id=\"n0100_sum\">0</Col><Col id=\"h0130\">0</Col><Col id=\"n0200\">0</Col><Col id=\"n0202\">0</Col><Col id=\"n0204\">0</Col><Col id=\"z0410\">0</Col><Col id=\"a0000_sum\">1500000</Col><Col id=\"a0100_sum\">1500000</Col><Col id=\"b0100_sum\">0</Col><Col id=\"d0110_sum\">1800000</Col><Col id=\"spc_income_ded_amt\">2487910</Col><Col id=\"h0100_sum\">0</Col><Col id=\"etc_income_ded_sum\">400000</Col><Col id=\"m0200_sum\">0</Col><Col id=\"n0200_sum\">0</Col><Col id=\"d0130_sum\">0</Col><Col id=\"d0131_sum\">0</Col><Col id=\"spc_tax_ded_sum\">539112</Col><Col id=\"e0000_sum\">0</Col><Col id=\"g0000_sum\">0</Col><Col id=\"i0000_sum\">0</Col><Col id=\"don0211\">0</Col><Col id=\"don0212\">0</Col><Col id=\"don0213\">0</Col><Col id=\"don0214\">0</Col><Col id=\"don0215\">0</Col><Col id=\"don0216\">0</Col><Col id=\"don0523\">0</Col><Col id=\"don0524\">0</Col><Col id=\"don0525\">0</Col><Col id=\"don0526\">0</Col><Col id=\"don0527\">0</Col><Col id=\"don0528\">0</Col><Col id=\"don0529\">0</Col><Col id=\"don0530\">0</Col><Col id=\"don0531\">0</Col><Col id=\"don0532\">0</Col><Col id=\"don0533\">0</Col><Col id=\"don0534\">0</Col><Col id=\"dataset_row_type\"/><Col id=\"check_delete\">0</Col><Col id=\"check_select\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_item_org", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ret_pre_income_id\" type=\"STRING\" size=\"256\"/><Column id=\"company_id\" type=\"STRING\" size=\"256\"/><Column id=\"base_year\" type=\"STRING\" size=\"256\"/><Column id=\"group_cd\" type=\"STRING\" size=\"256\"/><Column id=\"item_cd\" type=\"STRING\" size=\"256\"/><Column id=\"item_nm\" type=\"STRING\" size=\"256\"/><Column id=\"limit_amt\" type=\"STRING\" size=\"256\"/><Column id=\"limit_help\" type=\"STRING\" size=\"256\"/><Column id=\"over_amt\" type=\"STRING\" size=\"256\"/><Column id=\"ref_rate\" type=\"STRING\" size=\"256\"/><Column id=\"item_help\" type=\"STRING\" size=\"256\"/><Column id=\"visible_yn\" type=\"STRING\" size=\"256\"/><Column id=\"column_nm\" type=\"STRING\" size=\"256\"/><Column id=\"start_dt\" type=\"STRING\" size=\"256\"/><Column id=\"end_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_item", this);
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

            obj = new Dataset("ds_detail_pay03004", this);
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

            obj = new Dataset("ds_family_cd", this);
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

            obj = new Dataset("ds_ref_excep_emp_no", this);
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

            obj = new Dataset("ds_ref_year_cd", this);
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

            obj = new Dataset("ds_ref_compute_yn", this);
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

            obj = new Dataset("ds_detail_error", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"error_message\" type=\"STRING\" size=\"256\"/><Column id=\"item_nm\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ref_don_cd", this);
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

            obj = new Dataset("ds_modify_yn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"comm_cd\" type=\"STRING\" size=\"256\"/><Column id=\"comm_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comm_cd\">Y</Col><Col id=\"comm_nm\">사용자입력</Col></Row><Row><Col id=\"comm_cd\">N</Col><Col id=\"comm_nm\">계속근로에의한 자동생성</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_pay03001", this);
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

            obj = new Dataset("ds_detail_feedback", this);
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


            
            // UI Components Initialize
            obj = new Div("div_top", "absolute", "0", "115", "995", "165", null, null, this);
            obj.set_taborder("25");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFIA_Savebg");
            obj.style.set_background("#f6f7faff");
            obj.style.set_border("1 solid #aaaaaaff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Combo("cob_foreign_cd", "absolute", "610", "35", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.getSetter("commCode").set("class_cd=PAY_REF_FOREIGN_CD");
            obj = new Combo("cob_nation_cd", "absolute", "365", "35", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_type("search");
            obj.getSetter("commCode").set("class_cd=SYS_NATIONALITY_CD");
            obj = new Combo("cob_resident_cd", "absolute", "120", "35", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.getSetter("commCode").set("class_cd=PAY_REF_RESIDENCE_CD");
            obj = new Combo("cob_frgn_tax_type", "absolute", "365", "60", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_frgn_tax_type_innerdataset = new Dataset("cob_frgn_tax_type_innerdataset", this.div_top.cob_frgn_tax_type);
            cob_frgn_tax_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">적용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미적용</Col></Row></Rows>");
            obj.set_innerdataset(cob_frgn_tax_type_innerdataset);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.getSetter("commCode").set("class_cd=REF_FRGN_TAX_TYPE,target_table=sys_01");
            obj = new Edit("edt_addr_ci", "absolute", "764", "154", "121", "20", null, null, this.div_top);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_line_man", "absolute", "896", "154", "97", "20", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_line_man_innerdataset = new Dataset("cob_line_man_innerdataset", this.div_top.cob_line_man);
            cob_line_man_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cob_line_man_innerdataset);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.getSetter("commCode").set("class_cd=REF_LINE_MAN_TYPE,target_table=sys_01");
            obj.set_visible("false");
            obj = new Edit("edt_addr_detail", "absolute", "120", "110", "610", "22", null, null, this.div_top);
            obj.set_taborder("15");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_foreign_cd", "absolute", "500", "35", "105", "22", null, null, this.div_top);
            obj.set_taborder("57");
            obj.set_text("내외국인구분");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_addr", "absolute", "10", "85", "105", "22", null, null, this.div_top);
            obj.set_taborder("59");
            obj.set_text("주소");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_resident_cd", "absolute", "10", "35", "105", "22", null, null, this.div_top);
            obj.set_taborder("60");
            obj.set_text("거주자구분");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_frgn_tax_type", "absolute", "255", "60", "105", "22", null, null, this.div_top);
            obj.set_taborder("61");
            obj.set_text("외국인단일세율");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_line_man", "absolute", "775", "155", "116", "20", null, null, this.div_top);
            obj.set_taborder("62");
            obj.set_text("현장기술인력여부");
            obj.set_cssclass("sta_WFIA_LabelBg");
            obj.set_visible("false");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_nation_cd", "absolute", "255", "35", "105", "22", null, null, this.div_top);
            obj.set_taborder("63");
            obj.set_text("거주지국코드");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_zip", "absolute", "220", "85", "22", "22", null, null, this.div_top);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.div_top.addChild(obj.name, obj);
            obj = new Edit("edt_addr_gu", "absolute", "831", "154", "121", "20", null, null, this.div_top);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_top.addChild(obj.name, obj);
            obj = new Edit("edt_addr_dong", "absolute", "858", "153", "121", "20", null, null, this.div_top);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_spouse_yn", "absolute", "10", "60", "105", "22", null, null, this.div_top);
            obj.set_taborder("73");
            obj.set_text("배우자여부");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_spouse_yn", "absolute", "120", "60", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_spouse_yn_innerdataset = new Dataset("cob_spouse_yn_innerdataset", this.div_top.cob_spouse_yn);
            cob_spouse_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">없음</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">있음</Col></Row></Rows>");
            obj.set_innerdataset(cob_spouse_yn_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Edit("edt_addr", "absolute", "255", "85", "475", "22", null, null, this.div_top);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div_top.addChild(obj.name, obj);
            obj = new Edit("msk_zip_cd", "absolute", "120", "85", "95", "22", null, null, this.div_top);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_line_man00", "absolute", "745", "110", "105", "22", null, null, this.div_top);
            obj.set_taborder("77");
            obj.set_text("분납신청여부");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_installments_yn", "absolute", "855", "110", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_installments_yn_innerdataset = new Dataset("cob_installments_yn_innerdataset", this.div_top.cob_installments_yn);
            cob_installments_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cob_installments_yn_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj = new Static("Static00", "absolute", "10", "140", null, "20", "370", null, this.div_top);
            obj.set_taborder("79");
            obj.set_text("※ 배우자여부는 기본공제대상자 등록여부와 관계없이 실제 배우자가 있는지 여부를 입력합니다.");
            obj.style.set_linespace("5");
            obj.style.set_color("red");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.div_top.addChild(obj.name, obj);
            obj = new Static("sta_nationality_cd", "absolute", "745", "35", "105", "22", null, null, this.div_top);
            obj.set_taborder("80");
            obj.set_text("국가코드");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_nationality_cd", "absolute", "855", "35", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_type("search");
            obj.getSetter("commCode").set("class_cd=SYS_NATIONALITY_CD");
            obj = new Static("sta_line_man01", "absolute", "500", "60", "150", "22", null, null, this.div_top);
            obj.set_taborder("82");
            obj.set_text("외국법인소속 파견근로자");
            obj.set_cssclass("sta_WFIA_LabelBg");
            obj.style.set_font("antialias 9 맑은 고딕");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_foreign_corp_yn", "absolute", "655", "60", "75", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_foreign_corp_yn_innerdataset = new Dataset("cob_foreign_corp_yn_innerdataset", this.div_top.cob_foreign_corp_yn);
            cob_foreign_corp_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cob_foreign_corp_yn_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("sta_line_man02", "absolute", "745", "85", "105", "22", null, null, this.div_top);
            obj.set_taborder("85");
            obj.set_text("인적공제 변동");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_top.addChild(obj.name, obj);
            obj = new Combo("cob_human_ded_chg_yn", "absolute", "855", "85", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            var cob_human_ded_chg_yn_innerdataset = new Dataset("cob_human_ded_chg_yn_innerdataset", this.div_top.cob_human_ded_chg_yn);
            cob_human_ded_chg_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">전년과동일</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">변동</Col></Row></Rows>");
            obj.set_innerdataset(cob_human_ded_chg_yn_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj = new Static("sta_foreign_start_dt", "absolute", "745", "60", "105", "22", null, null, this.div_top);
            obj.set_taborder("86");
            obj.set_text("국내근무시작일");
            obj.set_cssclass("sta_WFIA_LabelBg");
            obj.set_tooltiptext("외국인단일세율을 적용받기 위해서는 처음으로 국내에서 근무를 시작한 날짜를 입력해야 합니다.");
            this.div_top.addChild(obj.name, obj);
            obj = new Calendar("cal_foreign_start_dt", "absolute", "855", "60", "120", "22", null, null, this.div_top);
            this.div_top.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center");

            obj = new Div("div_income_ded", "absolute", "0", "660", "995", "635", null, null, this);
            obj.set_taborder("46");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFIA_Savebg2");
            this.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0000_sum_01", "absolute", "424", "50", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_01", "absolute", "10", "10", "414", "40", null, null, this.div_income_ded);
            obj.set_taborder("96");
            obj.set_text("공제항목명");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_linespace("4");
            obj.style.set_color("#ffffffff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_00", "absolute", "424", "10", "140", "40", null, null, this.div_income_ded);
            obj.set_taborder("97");
            obj.set_text("사용(납입)\r\n금액");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_02", "absolute", "564", "10", "140", "40", null, null, this.div_income_ded);
            obj.set_taborder("98");
            obj.set_text("소득공제액\r\n(①)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_03", "absolute", "704", "10", "140", "40", null, null, this.div_income_ded);
            obj.set_taborder("99");
            obj.set_text("공제한도\r\n(②)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_04", "absolute", "844", "10", "140", "40", null, null, this.div_income_ded);
            obj.set_taborder("100");
            obj.set_text("한도미달액\r\n(②-①)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_a0000_sum", "absolute", "11", "50", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("101");
            obj.set_text("인적공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_a0000_sum_mod", "absolute", "378", "53", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("102");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_a0100_sum", "absolute", "11", "76", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("103");
            obj.set_text("- 기본공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_b0100_sum", "absolute", "11", "102", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("105");
            obj.set_text("- 추가공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0000_sum_02", "absolute", "564", "50", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0000_sum_03", "absolute", "704", "50", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0000_sum_04", "absolute", "844", "50", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_a0100_sum_mod", "absolute", "375", "76", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("104");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_b0100_sum_mod", "absolute", "375", "102", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("106");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0100_sum_01", "absolute", "424", "76", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0100_sum_02", "absolute", "564", "76", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0100_sum_03", "absolute", "704", "76", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_a0100_sum_04", "absolute", "844", "76", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_b0100_sum_01", "absolute", "424", "102", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_b0100_sum_02", "absolute", "564", "102", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_b0100_sum_03", "absolute", "704", "102", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_b0100_sum_04", "absolute", "844", "102", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0110_sum", "absolute", "11", "128", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("107");
            obj.set_text("연금보험료공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0110_sum_mod", "absolute", "378", "131", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("108");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0110_sum_01", "absolute", "424", "128", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0110_sum_02", "absolute", "564", "128", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0110_sum_03", "absolute", "704", "128", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0110_sum_04", "absolute", "844", "128", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_spc_income_ded_amt", "absolute", "11", "154", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("314");
            obj.set_text("특별소득공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_spc_income_ded_amt_mod", "absolute", "375", "154", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("315");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_income_ded_amt_01", "absolute", "424", "154", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_income_ded_amt_02", "absolute", "564", "154", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_income_ded_amt_03", "absolute", "704", "154", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_income_ded_amt_04", "absolute", "844", "154", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0110", "absolute", "11", "180", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("320");
            obj.set_text("- 건강보험료");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0110_mod", "absolute", "375", "180", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("321");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0110_01", "absolute", "424", "180", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0110_02", "absolute", "564", "180", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0110_03", "absolute", "704", "180", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0110_04", "absolute", "844", "180", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0120", "absolute", "11", "206", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("326");
            obj.set_text("- 고용보험료");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0120_mod", "absolute", "375", "206", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("327");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0120_01", "absolute", "424", "206", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0120_02", "absolute", "564", "206", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0120_03", "absolute", "704", "206", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0120_04", "absolute", "844", "206", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0100_sum", "absolute", "11", "232", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("332");
            obj.set_text("- 주택자금");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0100_sum_mod", "absolute", "375", "232", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("333");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0100_sum_01", "absolute", "424", "232", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0100_sum_02", "absolute", "564", "232", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0100_sum_03", "absolute", "704", "232", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0100_sum_04", "absolute", "844", "232", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0110", "absolute", "11", "258", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("338");
            obj.set_text("- 주택임차차입금 원리금상환액 대출기관");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 36");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0110_mod", "absolute", "378", "261", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("339");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0110_01", "absolute", "424", "258", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0110_02", "absolute", "564", "258", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0110_03", "absolute", "704", "258", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0110_04", "absolute", "844", "258", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0130", "absolute", "11", "284", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("344");
            obj.set_text("- 주택임차차입금 원리금상환액 거주자");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 36");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0130_mod", "absolute", "378", "286", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("345");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0130_01", "absolute", "424", "284", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0130_02", "absolute", "564", "284", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0130_03", "absolute", "704", "284", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0130_04", "absolute", "844", "284", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0200_sum", "absolute", "11", "310", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("350");
            obj.set_text("- 장기주택 저당차입금 이자상환액");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 36");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0200_sum_mod", "absolute", "378", "312", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("351");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0200_sum_01", "absolute", "424", "310", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0200_sum_02", "absolute", "564", "310", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0200_sum_03", "absolute", "704", "310", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0200_sum_04", "absolute", "844", "310", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_i0100_sum", "absolute", "11", "336", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("356");
            obj.set_text("- 기부금(이월분)");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_i0100_sum_mod", "absolute", "378", "338", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("357");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0100_sum_01", "absolute", "424", "336", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0100_sum_02", "absolute", "564", "336", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0100_sum_03", "absolute", "704", "336", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0100_sum_04", "absolute", "844", "336", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_j0110", "absolute", "11", "362", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("362");
            obj.set_text("개인연금저축");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_j0110_mod", "absolute", "378", "364", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("363");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0110_01", "absolute", "424", "362", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0110_02", "absolute", "564", "362", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0110_03", "absolute", "704", "362", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("720000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0110_04", "absolute", "844", "362", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_k0100_sum", "absolute", "11", "388", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("368");
            obj.set_text("주택마련저축");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_k0100_sum_mod", "absolute", "378", "390", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("369");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_k0100_sum_01", "absolute", "424", "388", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_k0100_sum_02", "absolute", "564", "388", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_k0100_sum_03", "absolute", "704", "388", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_k0100_sum_04", "absolute", "844", "388", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_l0100_sum", "absolute", "11", "414", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("374");
            obj.set_text("신용카드");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_l0100_sum_mod", "absolute", "378", "416", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("375");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_l0100_sum_01", "absolute", "424", "414", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_l0100_sum_02", "absolute", "564", "414", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_l0100_sum_03", "absolute", "704", "414", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("3000000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_l0100_sum_04", "absolute", "844", "414", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_etc_income_ded_sum", "absolute", "11", "440", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("380");
            obj.set_text("그밖의 소득공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_etc_income_ded_sum_01", "absolute", "424", "440", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_etc_income_ded_sum_02", "absolute", "564", "440", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_etc_income_ded_sum_03", "absolute", "704", "440", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_etc_income_ded_sum_04", "absolute", "844", "440", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_etc_income_ded_sum_mod", "absolute", "378", "442", "42", "20", null, null, this.div_income_ded);
            obj.set_taborder("386");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0110", "absolute", "11", "466", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("387");
            obj.set_text("- 소기업·소상공인 공제부금");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0110_mod", "absolute", "375", "466", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("388");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0110_01", "absolute", "424", "466", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("68");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0110_02", "absolute", "564", "466", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0110_03", "absolute", "704", "466", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("3000000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0110_04", "absolute", "844", "466", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0200_sum", "absolute", "11", "492", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("393");
            obj.set_text("- 투자조합출자 등");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0200_sum_mod", "absolute", "375", "492", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("394");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0200_sum_01", "absolute", "424", "492", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0200_sum_02", "absolute", "564", "492", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("73");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0200_sum_03", "absolute", "704", "492", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0200_sum_04", "absolute", "844", "492", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("75");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0140", "absolute", "11", "518", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("399");
            obj.set_text("- 우리사주조합출연금");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0140_mod", "absolute", "375", "518", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("400");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0140_01", "absolute", "424", "518", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0140_02", "absolute", "564", "518", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0140_03", "absolute", "704", "518", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("4000000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0140_04", "absolute", "844", "518", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0180", "absolute", "11", "544", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("405");
            obj.set_text("- 고용유지 중소기업 근로자");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0180_mod", "absolute", "375", "544", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("406");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0180_01", "absolute", "424", "544", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("80");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0180_02", "absolute", "564", "544", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("81");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0180_03", "absolute", "704", "544", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("10000000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0180_04", "absolute", "844", "544", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("83");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0195", "absolute", "11", "570", "363", "25", null, null, this.div_income_ded);
            obj.set_taborder("417");
            obj.set_text("- 장기집합투자 증권저축");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_m0195_mod", "absolute", "375", "570", "48", "25", null, null, this.div_income_ded);
            obj.set_taborder("418");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0195_01", "absolute", "424", "570", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0195_02", "absolute", "564", "570", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0195_03", "absolute", "704", "570", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("90");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("2400000");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_m0195_04", "absolute", "844", "570", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_05", "absolute", "11", "596", "412", "25", null, null, this.div_income_ded);
            obj.set_taborder("423");
            obj.set_text("소계");
            obj.style.set_linespace("4");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_cssclass("sta_WFIA_LabelBg");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_income_ded_sum_01", "absolute", "424", "596", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("92");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_income_ded_sum_02", "absolute", "564", "596", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_income_ded_sum_04", "absolute", "844", "596", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_income_ded_sum_03", "absolute", "704", "596", "139", "25", null, null, this.div_income_ded);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_income_ded.addChild(obj.name, obj);

            obj = new Static("sta_up_title00", "absolute", "0", "635", "200", "20", null, null, this);
            obj.set_taborder("47");
            obj.set_text("소득공제");
            obj.set_cssclass("St_workTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_bottom", "absolute", "2", "1890", null, "10", "41", null, this);
            obj.set_taborder("48");
            obj.set_scrollbars("none");
            obj.set_dragscrolltype("all");
            obj.set_visible("true");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_up_title01", "absolute", "0", "1310", "200", "20", null, null, this);
            obj.set_taborder("49");
            obj.set_text("세액감면ㆍ공제");
            obj.set_cssclass("St_workTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_tax_ded", "absolute", "0", "1335", "995", "555", null, null, this);
            obj.set_taborder("50");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFIA_Savebg2");
            this.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0100_sum_01", "absolute", "424", "50", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_01", "absolute", "10", "10", "414", "40", null, null, this.div_tax_ded);
            obj.set_taborder("429");
            obj.set_text("공제항목명");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_00", "absolute", "424", "10", "140", "40", null, null, this.div_tax_ded);
            obj.set_taborder("430");
            obj.set_text("사용(납입)\r\n금액");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_02", "absolute", "564", "10", "140", "40", null, null, this.div_tax_ded);
            obj.set_taborder("431");
            obj.set_text("세액공제액\r\n(①)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_03", "absolute", "704", "10", "140", "40", null, null, this.div_tax_ded);
            obj.set_taborder("432");
            obj.set_text("공제한도\r\n(②)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_04", "absolute", "844", "10", "140", "40", null, null, this.div_tax_ded);
            obj.set_taborder("433");
            obj.set_text("한도미달액\r\n(②-①)");
            obj.set_cssclass("sta_WFIA_LabelBg2");
            obj.style.set_color("#ffffffff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0100_sum", "absolute", "11", "50", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("434");
            obj.set_text("세액감면");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0100_sum_mod", "absolute", "378", "52", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("435");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0100_sum_02", "absolute", "564", "50", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0100_sum_03", "absolute", "704", "50", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0100_sum_04", "absolute", "844", "50", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0130_mod", "absolute", "378", "79", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("441");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0200_sum_mod", "absolute", "378", "105", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("442");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0130_01", "absolute", "424", "76", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0130_02", "absolute", "564", "76", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0130_03", "absolute", "704", "76", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0130_04", "absolute", "844", "76", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_sum_01", "absolute", "424", "102", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_sum_02", "absolute", "564", "102", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_sum_03", "absolute", "704", "102", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_sum_04", "absolute", "844", "102", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0200_mod", "absolute", "375", "128", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("452");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_01", "absolute", "424", "128", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_02", "absolute", "564", "128", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_03", "absolute", "704", "128", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0200_04", "absolute", "844", "128", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0202_mod", "absolute", "375", "546", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("458");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0202_01", "absolute", "424", "546", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0202_02", "absolute", "564", "546", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0202_03", "absolute", "704", "546", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0202_04", "absolute", "844", "546", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0204", "absolute", "11", "154", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("463");
            obj.set_text("- 출생입양");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0204_mod", "absolute", "375", "154", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("464");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0204_01", "absolute", "424", "154", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0204_02", "absolute", "564", "154", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0204_03", "absolute", "704", "154", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0204_04", "absolute", "844", "154", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0130_sum_mod", "absolute", "378", "182", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("470");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0130_sum_01", "absolute", "424", "180", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0130_sum_02", "absolute", "564", "180", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0130_sum_03", "absolute", "704", "180", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0130_sum_04", "absolute", "844", "180", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0131_sum", "absolute", "11", "206", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("481");
            obj.set_text("- 퇴직연금계좌");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0131_sum_mod", "absolute", "375", "206", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("482");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0131_sum_01", "absolute", "424", "206", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0131_sum_02", "absolute", "564", "206", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0131_sum_03", "absolute", "704", "206", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_d0131_sum_04", "absolute", "844", "206", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_j0120", "absolute", "11", "232", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("487");
            obj.set_text("- 연금저축계좌");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_j0120_mod", "absolute", "375", "232", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("488");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0120_01", "absolute", "424", "232", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0120_02", "absolute", "564", "232", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0120_03", "absolute", "704", "232", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_j0120_04", "absolute", "844", "232", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_spc_tax_ded_sum", "absolute", "11", "258", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("511");
            obj.set_text("특별세액공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_spc_tax_ded_sum_mod", "absolute", "375", "258", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("512");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_tax_ded_sum_01", "absolute", "424", "258", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_tax_ded_sum_02", "absolute", "564", "258", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_tax_ded_sum_03", "absolute", "704", "258", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_spc_tax_ded_sum_04", "absolute", "844", "258", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0140", "absolute", "11", "414", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("517");
            obj.set_text("납세조합공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0140_mod", "absolute", "378", "416", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("518");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0140_01", "absolute", "424", "414", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0140_02", "absolute", "564", "414", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0140_03", "absolute", "704", "414", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0140_04", "absolute", "844", "414", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_title_05", "absolute", "11", "518", "412", "25", null, null, this.div_tax_ded);
            obj.set_taborder("565");
            obj.set_text("소계");
            obj.set_cssclass("sta_WFIA_LabelBg");
            obj.style.set_linespace("4");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_tax_ded_sum_01", "absolute", "424", "518", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_tax_ded_sum_02", "absolute", "564", "518", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_tax_ded_sum_04", "absolute", "844", "518", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_tax_ded_sum_03", "absolute", "704", "518", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.style.set_background("#fff7f7ff");
            obj.style.set_border("1 solid #f79e9cff");
            obj.style.set_color("#cf4b4fff");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0130", "absolute", "11", "76", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("570");
            obj.set_text("근로소득");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0200_sum", "absolute", "11", "102", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("571");
            obj.set_text("자녀");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0200", "absolute", "11", "128", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("572");
            obj.set_text("- 자녀");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0202", "absolute", "11", "546", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("573");
            obj.set_text("- 6세이하");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            obj.set_visible("false");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_d0130_sum", "absolute", "11", "180", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("574");
            obj.set_text("연금계좌");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0000_sum", "absolute", "11", "284", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("575");
            obj.set_text("- 보장성보험료");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_e0000_sum_mod", "absolute", "378", "286", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("576");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0000_sum_01", "absolute", "424", "284", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0000_sum_02", "absolute", "564", "284", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0000_sum_03", "absolute", "704", "284", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("270000");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_e0000_sum_04", "absolute", "844", "284", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_f0000_sum", "absolute", "11", "310", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("581");
            obj.set_text("- 의료비");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_f0000_sum_mod", "absolute", "378", "312", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("582");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_f0000_sum_01", "absolute", "424", "310", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_f0000_sum_02", "absolute", "564", "310", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_f0000_sum_03", "absolute", "704", "310", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_f0000_sum_04", "absolute", "844", "310", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_g0000_sum", "absolute", "11", "336", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("587");
            obj.set_text("- 교육비");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_g0000_sum_mod", "absolute", "378", "338", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("588");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_g0000_sum_01", "absolute", "424", "336", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_g0000_sum_02", "absolute", "564", "336", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_g0000_sum_03", "absolute", "704", "336", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_g0000_sum_04", "absolute", "844", "336", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_i0000_sum", "absolute", "11", "362", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("593");
            obj.set_text("- 기부금");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_i0000_sum_mod", "absolute", "378", "364", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("594");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0000_sum_01", "absolute", "424", "362", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0000_sum_02", "absolute", "564", "362", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0000_sum_03", "absolute", "704", "362", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_i0000_sum_04", "absolute", "844", "362", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_z0410", "absolute", "11", "388", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("599");
            obj.set_text("- 표준세액공제");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 24");
            obj.style.set_align("left middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_z0410_mod", "absolute", "375", "388", "48", "25", null, null, this.div_tax_ded);
            obj.set_taborder("600");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_align("center middle");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_z0410_01", "absolute", "424", "388", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_z0410_02", "absolute", "564", "388", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_z0410_03", "absolute", "704", "388", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_z0410_04", "absolute", "844", "388", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0150", "absolute", "11", "440", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("605");
            obj.set_text("주택차입금");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0150_mod", "absolute", "378", "442", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("606");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0150_01", "absolute", "424", "440", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0150_02", "absolute", "564", "440", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0150_03", "absolute", "704", "440", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0150_04", "absolute", "844", "440", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0180", "absolute", "11", "466", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("611");
            obj.set_text("외국납부세액");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_n0180_mod", "absolute", "378", "468", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("612");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0180_01", "absolute", "424", "466", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("68");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0180_02", "absolute", "564", "466", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0180_03", "absolute", "704", "466", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_n0180_04", "absolute", "844", "466", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("-");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0120", "absolute", "11", "492", "363", "25", null, null, this.div_tax_ded);
            obj.set_taborder("617");
            obj.set_text("월세액");
            obj.style.set_linespace("3");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_padding("0 0 0 12");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new Static("sta_h0120_mod", "absolute", "378", "494", "42", "20", null, null, this.div_tax_ded);
            obj.set_taborder("618");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #101113ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 4 4");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("linear 0,0 #56575bff 0,100 #212326ff [5% #b4b4b4ff]");
            obj.style.setStyleValue("border", "mouseover", "1 solid #7d7f80ff");
            obj.style.setStyleValue("color", "mouseover", "#444444ff");
            obj.style.setStyleValue("gradation", "mouseover", "linear 0,0 #ffffffff 0,100 #e4e4e4ff [75% #b4b4b4ff]");
            obj.set_text("수정");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0120_01", "absolute", "424", "492", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0120_02", "absolute", "564", "492", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("73");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0120_03", "absolute", "704", "492", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            obj.set_value("750000");
            this.div_tax_ded.addChild(obj.name, obj);
            obj = new MaskEdit("msk_h0120_04", "absolute", "844", "492", "139", "25", null, null, this.div_tax_ded);
            obj.set_taborder("75");
            obj.set_readonly("true");
            obj.set_mask("#,###,###,###,###");
            this.div_tax_ded.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "890", "635", "100", "20", null, null, this);
            obj.set_taborder("51");
            obj.set_text("(단위 : 원)");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "890", "1310", "100", "20", null, null, this);
            obj.set_taborder("52");
            obj.set_text("(단위 : 원)");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_file", "absolute", "0", "480", "995", "140", null, null, this);
            obj.set_taborder("53");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFIA_Savebg");
            obj.style.set_background("#f6f7faff");
            obj.style.set_border("1 solid #aaaaaaff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_file_id", "absolute", "923", "106", "64", "20", null, null, this.div_file);
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            obj.set_inputtype("number");
            obj.set_displaynulltext("file_seq");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_visible("false");
            obj.style.set_align("center");
            this.div_file.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", null, null, "10", "10", this.div_file);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>종이없는 연말정산 자료를 가져옵니다.</b> (<fc v='red'>조회한 항목 한번에 내려받기</fc>로 다운받은 자료만 가능합니다.)\r\n1. <fc v='red'>인적공제</fc> 사항을 먼저 작성후에 연말정산 자료를 등록합니다. 등록되지 않은 대상자의 자료는 등록되지 않습니다.\r\n2. <fc v='red'>주택자금</fc>에 관련된 공제내역이 있는 경우, 먼저 해당 신청화면에서 설문에 응답한 후에 자료를 등록합니다.\r\n   설문에 응답하지 않은 주택자금공제는 등록되지 않습니다. (<fc v='#1f73c0ff'>주택임차차입금원리금상환액, 장기주택저당차입금이자상환액, 주택마련저축, 월세액</fc>)\r\n3. 새로 국세청 전자문서를 첨부하거나, 첨부된 전자문서를 변경 또는 삭제시 국세청 전자문서로 등록된 모든 항목은 초기화됩니다.");
            obj.set_cssclass("div_WFIA_Savebg");
            obj.set_usedecorate("true");
            obj.style.set_linespace("6");
            obj.style.set_align("left middle");
            obj.set_wordwrap("english");
            this.div_file.addChild(obj.name, obj);

            obj = new Static("sta_up_title02", "absolute", "0", "455", "300", "20", null, null, this);
            obj.set_taborder("54");
            obj.set_text("국세청 전자문서 첨부");
            obj.set_cssclass("St_workTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_view", "absolute", "743", "455", "93", "20", null, null, this);
            obj.set_taborder("55");
            obj.set_text("첨부문서 확인");
            obj.set_cssclass("Btn_DeepGreenC");
            obj.set_visible("false");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file", "absolute", "840", "455", "150", "20", null, null, this);
            obj.set_taborder("56");
            obj.set_text("국세청 전자문서 첨부하기");
            obj.set_cssclass("Btn_DeepGreenC");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_up_title03", "absolute", "0", "295", "300", "20", null, null, this);
            obj.set_taborder("57");
            obj.set_text("주택자금관련 설문");
            obj.set_cssclass("St_workTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_house_check", "absolute", "0", "320", "995", "120", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("#f6f7faff");
            obj.style.set_border("1 solid #aaaaaaff");
            obj.style.set_bordertype("round 5 5");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFIA_Savebg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_file_id", "absolute", "923", "106", "64", "20", null, null, this.div_house_check);
            obj.set_taborder("9");
            obj.set_inputmode("upper");
            obj.set_inputtype("number");
            obj.set_displaynulltext("file_seq");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_visible("false");
            obj.style.set_align("center");
            this.div_house_check.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", null, null, "10", "27", this.div_house_check);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>주택자금관련 설문을 등록합니다.</b>\r\n1. <fc v='red'>인적공제</fc> 사항을 먼저 작성후에 주택자금관련 설문을 진행할 수 있습니다.\r\n2. 본인에게 해당하는 주택자금의 설문만 작성하시면 됩니다. (이미 설문이 작성된 경우 checkbox에 표시됩니다.)");
            obj.set_usedecorate("true");
            obj.set_wordwrap("english");
            obj.set_cssclass("div_WFIA_Savebg");
            obj.style.set_linespace("6");
            obj.style.set_align("left top");
            this.div_house_check.addChild(obj.name, obj);
            obj = new CheckBox("chk_h0110_yn", "absolute", "15", "90", "195", "20", null, null, this.div_house_check);
            obj.set_taborder("11");
            obj.set_text("주택임차차입금원리금상환액");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.style.set_color("#1f73c0ff");
            obj.style.set_font("bold antialias 10 맑은 고딕");
            obj.style.set_cursor("hand");
            obj.set_readonly("true");
            this.div_house_check.addChild(obj.name, obj);
            obj = new CheckBox("chk_h0210_yn", "absolute", "230", "90", "215", "20", null, null, this.div_house_check);
            obj.set_taborder("12");
            obj.set_text("장기주택저당차입금 이자상환액");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.style.set_color("#1f73c0ff");
            obj.style.set_font("bold antialias 10 맑은 고딕");
            obj.style.set_cursor("hand");
            this.div_house_check.addChild(obj.name, obj);
            obj = new CheckBox("chk_k0110_yn", "absolute", "462", "90", "105", "20", null, null, this.div_house_check);
            obj.set_taborder("13");
            obj.set_text("주택마련저축");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.style.set_color("#1f73c0ff");
            obj.style.set_font("bold antialias 10 맑은 고딕");
            obj.style.set_cursor("hand");
            this.div_house_check.addChild(obj.name, obj);
            obj = new CheckBox("chk_h0120_yn", "absolute", "582", "90", "100", "20", null, null, this.div_house_check);
            obj.set_taborder("14");
            obj.set_text("월세액");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.style.set_color("#1f73c0ff");
            obj.style.set_font("bold antialias 10 맑은 고딕");
            obj.style.set_cursor("hand");
            this.div_house_check.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "6", "48", "112", "56", null, null, this);
            obj.set_taborder("59");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "6", "8", "694", "37", null, null, this);
            obj.set_taborder("60");
            obj.set_text("RP 83404 IE에서 Dataset의 clearData 함수 실행시 스크롤이 튀는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "158", "48", "530", "61", null, null, this);
            obj.set_taborder("61");
            obj.set_text("테스트 방법\r\n\r\n 1. Button을 클릭\r\n 2. 스크롤이 아래로 내려갔다가 돌아오는 오동작 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 995, 165, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFIA_Savebg");
            		p.style.set_background("#f6f7faff");
            		p.style.set_border("1 solid #aaaaaaff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 995, 635, this.div_income_ded,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFIA_Savebg2");

            	}
            );
            this.div_income_ded.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 10, this.div_bottom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_scrollbars("none");
            		p.set_dragscrolltype("all");
            		p.set_visible("true");
            		p.style.set_background("transparent");
            		p.style.set_border("1 solid white");

            	}
            );
            this.div_bottom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 995, 555, this.div_tax_ded,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("50");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFIA_Savebg2");

            	}
            );
            this.div_tax_ded.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 995, 140, this.div_file,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFIA_Savebg");
            		p.style.set_background("#f6f7faff");
            		p.style.set_border("1 solid #aaaaaaff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.div_file.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 995, 120, this.div_house_check,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.style.set_background("#f6f7faff");
            		p.style.set_border("1 solid #aaaaaaff");
            		p.style.set_bordertype("round 5 5");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFIA_Savebg");

            	}
            );
            this.div_house_check.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1030, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frm_pay_01_001");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("연말정산신청관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item64","div_top.cob_nation_cd","value","ds_detail_top","nation_cd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","div_top.cob_resident_cd","value","ds_detail_top","resident_cd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","div_top.cob_foreign_cd","value","ds_detail_top","foreign_cd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","div_top.cob_frgn_tax_type","value","ds_detail_top","frgn_tax_type");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","div_top.cob_line_man","value","ds_detail_top","line_man");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","div_top.edt_addr_ci","value","ds_detail_top","addr_ci");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","div_top.edt_addr_detail","value","ds_detail_top","addr_detail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item152","div_top.div_top.edt_addr_ci","value","ds_detail_top","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item153","div_top.edt_addr_gu","value","ds_detail_top","addr_gu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item198","div_top.edt_addr_dong","value","ds_detail_top","addr_dong");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item219","div_top.div_top.cob_householder_yn","value","ds_detail_top","householder_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item220","div_top.cob_spouse_yn","value","ds_detail_top","spouse_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item227","div_top.edt_addr","value","ds_detail_top","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item240","div_top.msk_zip_cd","value","ds_detail_top","zip_cd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item245","div_top.cob_installments_yn","value","ds_detail_top","installments_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_top.cob_nationality_cd","value","ds_detail_top","nationality_cd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_income_ded.msk_d0110_sum_01","value","ds_detail_main","d0110_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_income_ded.msk_spc_income_ded_amt_01","value","ds_detail_main","spc_income_ded_amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_income_ded.msk_e0110_01","value","ds_detail_main","e0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_income_ded.msk_e0120_01","value","ds_detail_main","e0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_income_ded.msk_h0100_sum_01","value","ds_detail_main","h0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_income_ded.msk_h0110_01","value","ds_detail_main","h0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_income_ded.msk_h0130_01","value","ds_detail_main","h0130");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_income_ded.msk_h0200_sum_01","value","ds_detail_main","h0200_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_income_ded.msk_i0100_sum_01","value","ds_detail_main","i0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_income_ded.msk_j0110_01","value","ds_detail_main","j0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_income_ded.msk_k0100_sum_01","value","ds_detail_main","k0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_income_ded.msk_l0100_sum_01","value","ds_detail_main","l0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_income_ded.msk_etc_income_ded_sum_01","value","ds_detail_main","etc_income_ded_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_income_ded.msk_m0110_01","value","ds_detail_main","m0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_income_ded.msk_m0200_sum_01","value","ds_detail_main","m0200_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_income_ded.msk_m0140_01","value","ds_detail_main","m0140");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_income_ded.msk_m0180_01","value","ds_detail_main","m0180");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_income_ded.msk_m0195_01","value","ds_detail_main","m0195");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_tax_ded.msk_d0130_sum_01","value","ds_detail_main","d0130_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_tax_ded.msk_d0131_sum_01","value","ds_detail_main","d0131_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_tax_ded.msk_j0120_01","value","ds_detail_main","j0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_tax_ded.msk_spc_tax_ded_sum_01","value","ds_detail_main","spc_tax_ded_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_tax_ded.msk_e0000_sum_01","value","ds_detail_main","e0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_tax_ded.msk_f0000_sum_01","value","ds_detail_main","f0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_tax_ded.msk_g0000_sum_01","value","ds_detail_main","g0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_tax_ded.msk_i0000_sum_01","value","ds_detail_main","i0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_tax_ded.msk_n0140_01","value","ds_detail_main","n0140");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_tax_ded.msk_n0150_01","value","ds_detail_main","n0150");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_tax_ded.msk_n0180_01","value","ds_detail_main","n0180");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_tax_ded.msk_h0120_01","value","ds_detail_main","h0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_income_ded.msk_a0000_sum_02","value","ds_detail_main2","a0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_income_ded.msk_a0100_sum_02","value","ds_detail_main2","a0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_income_ded.msk_b0100_sum_02","value","ds_detail_main2","b0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_income_ded.msk_d0110_sum_02","value","ds_detail_main2","d0110_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_income_ded.msk_spc_income_ded_amt_02","value","ds_detail_main2","spc_income_ded_amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_income_ded.msk_e0110_02","value","ds_detail_main2","e0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_income_ded.msk_e0120_02","value","ds_detail_main2","e0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_income_ded.msk_h0100_sum_02","value","ds_detail_main2","h0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_income_ded.msk_h0110_02","value","ds_detail_main2","h0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_income_ded.msk_h0130_02","value","ds_detail_main2","h0130");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_income_ded.msk_h0200_sum_02","value","ds_detail_main2","h0200_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_income_ded.msk_i0100_sum_02","value","ds_detail_main2","i0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_income_ded.msk_j0110_02","value","ds_detail_main2","j0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_income_ded.msk_k0100_sum_02","value","ds_detail_main2","k0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_income_ded.msk_l0100_sum_02","value","ds_detail_main2","l0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_income_ded.msk_etc_income_ded_sum_02","value","ds_detail_main2","etc_income_ded_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_income_ded.msk_m0110_02","value","ds_detail_main2","m0110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_income_ded.msk_m0200_sum_02","value","ds_detail_main2","m0200_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_income_ded.msk_m0140_02","value","ds_detail_main2","m0140");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","div_income_ded.msk_m0180_02","value","ds_detail_main2","m0180");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_income_ded.msk_m0195_02","value","ds_detail_main2","m0195");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_tax_ded.msk_n0200_sum_02","value","ds_detail_main2","n0200_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","div_tax_ded.msk_n0200_02","value","ds_detail_main2","n0200");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","div_tax_ded.msk_n0202_02","value","ds_detail_main2","n0202");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","div_tax_ded.msk_n0204_02","value","ds_detail_main2","n0204");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","div_tax_ded.msk_d0130_sum_02","value","ds_detail_main2","d0130_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","div_tax_ded.msk_d0131_sum_02","value","ds_detail_main2","d0131_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","div_tax_ded.msk_j0120_02","value","ds_detail_main2","j0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","div_tax_ded.msk_spc_tax_ded_sum_02","value","ds_detail_main2","spc_tax_ded_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","div_tax_ded.msk_n0140_02","value","ds_detail_main2","n0140");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","div_tax_ded.msk_e0000_sum_02","value","ds_detail_main2","e0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","div_tax_ded.msk_f0000_sum_02","value","ds_detail_main2","f0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","div_tax_ded.msk_g0000_sum_02","value","ds_detail_main2","g0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item79","div_tax_ded.msk_i0000_sum_02","value","ds_detail_main2","i0000_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item80","div_tax_ded.msk_z0410_02","value","ds_detail_main2","z0410");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item81","div_tax_ded.msk_n0150_02","value","ds_detail_main2","n0150");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","div_tax_ded.msk_n0180_02","value","ds_detail_main2","n0180");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","div_tax_ded.msk_h0120_02","value","ds_detail_main2","h0120");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item85","div_tax_ded.msk_n0130_02","value","ds_detail_main2","n0130");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item86","div_tax_ded.msk_n0100_sum_02","value","ds_detail_main2","n0100_sum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item87","div_top.cob_foreign_corp_yn","value","ds_detail_top","foreign_corp_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_file.edt_file_id","value","ds_detail_main","file_id");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","div_file00.edt_file_id","value","ds_detail_main","file_id");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item88","div_file00.chk_h0110_yn","value","ds_detail_main","h0110_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item89","div_file00.chk_h0210_yn","value","ds_detail_main","h0210_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item90","div_file00.chk_k0110_yn","value","ds_detail_main","k0110_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item91","div_file00.chk_h0120_yn","value","ds_detail_main","h0120_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item92","div_house_check.chk_h0110_yn","value","ds_detail_main","h0110_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item93","div_house_check.chk_h0210_yn","value","ds_detail_main","h0210_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item94","div_house_check.chk_k0110_yn","value","ds_detail_main","k0110_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item95","div_house_check.chk_h0120_yn","value","ds_detail_main","h0120_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","div_top.cob_human_ded_chg_yn","value","ds_detail_top","human_ded_chg_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item96","div_top.cal_foreign_start_dt","value","ds_detail_top","foreign_start_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_83404_PayRefCom005_2018.xfdl", function() {
        /******************************************************
         * @author : 이창훈
         * @name : PayRefCom005.xfdl
         * @description : 연말정산신청관리
         ******************************************************/
        //include "js::hr_script.xjs"

        this.v_controller_url = "ServerURL::hr/pay/ref/com/controller/PayRefCom005XPController_2018.xp";

        this.v_ref_year = "2018" ;

        this.DS_M = "ds_master";
        this.DS_D = "ds_detail";

        this.isPop = "N"; //팝업여부
        this.manager_yn = "N"; //관리자 여부
        this.cal_close_yn = "N"; //마감여부

        this.v_search_ing = false;

        this.v_householder_yn = "";

        this.v_auth_admin = ""; //급여담당자여부
        this.v_auth_staff = ""; //부서별 연말정산담당자 여부

        this.v_curIncomeFlag = "N" ;		// 현근무지소득내역 flag

        this.is_new = null ;		// 최초 조회 여부 (1이면 최초조회)

        this.fn_afterOnChangedTopTab = function ()
        {
        	// 탭이동시 자동조회 하지 않는다. 
        }
        /*******************************************************
         * @name : fn_initForm
         * @description :
         *******************************************************/
        this.fn_initForm = function ()
        {
        return;
        	this.div_search.form_org_emp_input_search.setType("emp");
        	var v_ref_list_id = this.parent.parent.p_ref_list_id ;
        	
        	if (this.gf_isNull(v_ref_list_id)) {
        		// 메뉴에서 호출하는 경우
        		this.isPop = "N";
        		this.parent.gf_enableParentScrollbar(1);
        		this.ds_master.setColumn(0, "emp_no", this.gf_getEmpInfo("emp_no"));
        		this.div_search.form_org_emp_input_search.setCode(this.gf_getEmpInfo("emp_no"));
        		this.div_search.form_org_emp_input_search.setName(this.gf_getEmpInfo("emp_nm"));
        	} else {
        		// 소득공제신청서 화면에서 팝업
         		this.isPop = "Y"; // 팝업으로 판단하고 자동으로 검색하게 한다.
         		this.ds_master.setColumn(0, "emp_no", this.parent.parent.p_emp_no);
         		this.div_search.form_org_emp_input_search.setCode(this.parent.parent.p_emp_no);
         		this.div_search.form_org_emp_input_search.setName(this.parent.parent.p_emp_nm);
         		this.ds_master.setColumn(0, "ref_list_id", this.parent.parent.p_ref_list_id);
         		this.getOwnerFrame().set_openstatus("maximize");
        	}

        	this.ds_master.setColumn(0, "householder_change_yn", "N") ;

        	var search_idx = application.g_dataset_auth.findRow("auth_id", "PAY");
        	if (search_idx >= 0) {
        		this.v_auth_admin = true;
        		this.v_auth_staff = false;
        	} else {
        		this.v_auth_admin = false;

        		search_idx = application.g_dataset_auth.findRow("auth_id", "YEARENDSTAFF");
        		if (search_idx >= 0) {
        			this.v_auth_staff = true;
        		} else {
        			this.v_auth_staff = false;
        		}
        	}

        	if (this.v_auth_staff) 
        	{
        		this.ds_master.setColumn(0, "paystaff_yn", "Y");
        		this.div_search.form_org_emp_input_search.setProgramId(application.g_program_id) ;
        	}

        	this.ds_detail_main.clearData();
        	this.ds_detail_main.addRow();

        	this.ds_master.setColumn(0, "ec_year", this.v_ref_year);
        	this.g_comm_code_add_dt = this.v_ref_year + "1231"; 
        	
        	// 권한에 따라 설정
        	this.div_search.form_org_emp_input_search.set_enable(false);

        	if (this.gf_isContainUserAuth("PAY") || this.gf_isContainUserAuth("YEARENDSTAFF")) 
        	{
        		this.manager_yn = "Y";
        	}

        	if (this.manager_yn == "Y" && this.isPop == "N") 
        	{
        		this.div_search.form_org_emp_input_search.set_enable(true);
        	}
        	
        	this.ds_master.setColumn(0, "manager_yn", this.manager_yn);	
        	
        // 	this.gf_getMultiCode();	
        }

        this.fn_afterCommCode = function ()
        {
         	this.ds_ref_close_cd.assign(this.cob_ref_close_cd.getInnerDataset()); //연말정산신청마감
        	this.div_search.comb_ec_year.set_value(this.v_ref_year);		
        	
        	// 마감여부
        	var idx = this.ds_ref_close_cd.findRow("comm_cd", this.v_ref_year);
        	this.cal_close_yn = this.ds_ref_close_cd.getColumn(idx, "etc4_cd"); //마감여부
        	
        	// 입력가능 여부, 예외자 적용 적용해야 함.
         	this.ds_ref_excep_emp_no.assign(this.cob_ref_excep_emp_no.getInnerDataset()); //연말정산신청예외자
         	this.ds_family_cd.assign(this.cob_family_cd.getInnerDataset());
         	this.ds_ref_year_cd.assign(this.cob_ref_year_cd.getInnerDataset()); //연말정산대상년도구분
         	
        	if (!this.gf_isNull(this.ds_master.getColumn(0,"emp_no"))) {
        		this.fn_searchToolbar();
        	}
        }

        /*******************************************************
         * @name : fn_searchToolbar
         * @description :
         *******************************************************/
        this.fn_searchToolbar = function ()
        {
        	var emp_no = this.ds_master.getColumn(0, "emp_no");
        	if (this.gf_isNull(emp_no)) {
        		this.is_new = null ;
        		this.gf_message("SYSTEM028", ["사원"]);
        		return;
        	}

        	var str_inds = this.gf_getDs(this.DS_M);
        	var str_outds = this.gf_getDs(this.DS_D);

        	this.v_search_ing = true;	
        	
        	
        	// 디테일 마스터 클리어
        	this.ds_detail_main.clearData();
        	this.ds_detail_main2.clearData();
        	this.ds_detail_error.clearData();
        	
        	this.gf_send("list001", this.v_controller_url, str_inds, str_outds, "", "LIST");
        }

        /******************************************************
         * @name : fn_afterEtc
         * @description :
         ******************************************************/
        this.fn_afterEtc = function (sid)
        {
        	if (sid == "list001") {
        		// //trace(ds_detail_item_org.saveXML());
        		// 연말정산기초자료 데이터셋
        		// 조회 후 자료가 없다면 addrow 해줌.
        		if (this.ds_detail_main.getRowCount() == 0) 
        		{
        			this.ds_detail_main.clearData();
        			this.ds_detail_main.addRow();
        			this.ds_detail_main.setColumn(0, "file_id", -1); //파일없음
        			this.btn_file_view.set_visible(false);	
        		}
        		else 
        		{
        			var file_id = this.ds_detail_main.getColumn(0, "file_id");
        			if (file_id == 0 || file_id == -1 || isNaN(file_id) || this.gf_isNull(file_id)) 
        			{
        				this.btn_file_view.set_visible(false);
        			}
        			else 
        			{
        				this.btn_file_view.set_visible(true);
        			}
        		}
        		
        		this.is_new = this.ds_detail_main.getColumn(0, "is_new") ;
        		
        		this.v_householder_yn = this.ds_detail_top.getColumn(0, "householder_yn");
        	
        		// default setup
        		var frgn_tax_type = this.ds_detail_top.getColumn(0, "frgn_tax_type");
        		if (this.gf_isNull(frgn_tax_type)) {
        			this.ds_detail_top.setColumn(0, "frgn_tax_type", "2");
        		}
        		
        		var line_man = this.ds_detail_top.getColumn(0, "line_man");
        		if (this.gf_isNull(line_man)) {
        			this.ds_detail_top.setColumn(0, "line_man", "2");
        		}

        		var ref_list_id = this.ds_detail_top.getColumn(0, "ref_list_id");
        		this.ds_master.setColumn(0, "ref_list_id", ref_list_id);
        		
        		// 2017년 수정 시작
        		var foreign_start_dt = this.ds_detail_top.getColumn(0, "foreign_start_dt");
        		if (this.gf_isNull(foreign_start_dt)) {
        			this.ds_detail_top.setColumn(0, "foreign_start_dt", "");
        		}
        		// 2017년 수정 끝

        		if (this.is_new == 0) 
        		{
        			this.ds_detail_main.set_updatecontrol(false);
        			this.ds_detail_main.setRowType(0, Dataset.ROWTYPE_NORMAL);
        			this.ds_detail_main.set_updatecontrol(true);
        		}
        		
        		this.ds_detail_top.set_updatecontrol(false);
        		this.ds_detail_top.setRowType(0, Dataset.ROWTYPE_NORMAL);
        		this.ds_detail_top.set_updatecontrol(true);

        		this.v_search_ing = false;
        		
        		this.div_search.msk_pay_tot_amt.set_value(this.fn_getPayTotAmt());
        		this.div_search.msk_pay_tot_amt_tax.set_value(this.fn_getPayTotAmt_Tax());		

        		this.ds_detail_00.assign(this.ds_detail_base);
        		
        		// 계산확정,담당자확정 버튼 처리
        		if (this.v_auth_admin) {
        			var end_yn = this.ds_detail_top.getColumn(0, "end_yn") ;
        			var cal_end_yn = this.ds_detail_top.getColumn(0, "cal_end_yn") ;
        			var confirm_yn = this.ds_detail_top.getColumn(0, "confirm_yn") ;
        			
        			if (this.is_new == 1 || end_yn != "Y" || this.cal_close_yn == "Y") {
        				this.div_search.btn_cal_end_yn.set_visible(false);
        				this.div_search.btn_confirm_yn.set_visible(false);
        			} else {
        				this.div_search.btn_cal_end_yn.set_visible(true);
        				this.div_search.btn_confirm_yn.set_visible(true);			
        			
        				if (cal_end_yn == "Y") {
        					this.div_search.btn_cal_end_yn.set_text("계산확정 취소");
        				} else {
        					this.div_search.btn_cal_end_yn.set_text("계산확정");
        				}
        				
        				if (confirm_yn == "Y") {
        					this.div_search.btn_cal_end_yn.set_enable(false);
        					this.div_search.btn_confirm_yn.set_text("담당자확정 취소");
        				} else {
        					this.div_search.btn_cal_end_yn.set_enable(true);
        					this.div_search.btn_confirm_yn.set_text("담당자확정");
        				}				
        			}
        		}
        		
        		if (this.ds_detail_feedback.getRowCount() > 0) {		
        			this.div_search.btn_feedback.set_text("피드백("+this.ds_detail_feedback.getRowCount()+")");
        		} else {
        			this.div_search.btn_feedback.set_text("피드백");
        		}		
        		
        		this.ds_master.setColumn(0, "ec_kind", this.ds_detail_top.getColumn(0, "ec_kind"));
        		this.ds_master.setColumn(0, "start_dt", this.ds_detail_top.getColumn(0, "start_dt"));
        		this.ds_master.setColumn(0, "end_dt", this.ds_detail_top.getColumn(0, "end_dt"));
        		this.ds_master.setColumn(0, "manager_yn", this.manager_yn);		
        		
        		this.fn_afterSearchExtraSetup();
        	}
        	else if (sid == "saveAll") 
        	{
        		// 저장을 완료하였습니다.
        		// gf_message("SYSTEM034");
        		this.fn_searchToolbar();
        	}
        	else if (sid == "isEnableWorking") 
        	{
        		var file_id = this.ds_detail_main.getColumn(0, "file_id");
        		if (file_id == -1 || file_id == 0 || isNaN(file_id) || this.gf_isNull(file_id)) {
        			file_id = null ;
        		}
        		var reg_seq = this.ds_detail_top.getColumn(0, "reg_seq") ;	
        		if (this.gf_isNull(reg_seq)) {
        			reg_seq = 1 ;
        		}

        		var args = {
        		};
        		args.file_id = file_id;
        		args.multi_file_yn = "N";
        		args.p_title = "국세청 전자문서(PDF) 첨부";
        		if (this.cal_close_yn == "Y") 
        		{
        			args.read_only = "Y";
        		}
        		else 
        		{
        			args.read_only = "N";
        			
        			// 국세청문서를 첨부하기 전에 주택자금 관련 설문여부 확인.
        			if (!confirm("주택자금 관련 소득공제내역이 있는 경우, 먼저 해당 신청화면에서 설문에 응답한 후 자료를 등록해야 합니다.\n주택자금관련 설문에 응답하셨습니까?\n(주택자금관련 신청내역이 없는 경우 확인을 눌러주세요.)")) {
        				return false ;
        			}
        		}
        		args.save_file_nm = this.ds_master.getColumn(0, "emp_no") + "_" + reg_seq + ".pdf";
        		args.file_path = "repository/yearend/" + this.v_ref_year + "/"; //CONST.PAYREFCOM005_FILE_PATH; //파일패스

        		this.gf_showModal("common_pop::pop_fileManager.xfdl", args, false, null, null, null, null, "pop_fileManager", "fn_afterPopup");
        	}	
        	else if (sid == "loadYearEndSettlementXml") 
        	{
        		this.fn_afterLoadYearEndSettlementXml();
        //		this.fn_saveToolbar();
        	}
        	else if (sid == "clearYearEndSettlementXml") 
        	{
        		this.fn_searchToolbar();
        	}
        	else if (sid == "saveCalEndYn" || sid == "saveConfirmYn") 
        	{
        		this.fn_searchToolbar();
        	}

        }

        /******************************************************
         * @name : fn_afterSearchExtraSetup
         * @description : 조회 후 추가 설정
         ******************************************************/
        this.fn_afterSearchExtraSetup = function ()
        {
        	// 거주자인 경우 거주지국코드는 KR, 비활성화
        	var resident_cd = this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "resident_cd");
        	if (resident_cd == "1") {
        		this.div_top.cob_nation_cd.set_enable(false);
        		this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nation_cd", "KR");
        	} else {
        		this.div_top.cob_nation_cd.set_enable(true);
        		if (this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "nation_cd") == "KR") {
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nation_cd", "");		
        		}
        	}
        	
        	// 외국인의 경우 세대주구분은 세대원으로 고정하고, 비활성화
        	// 국가코드는 외국인인 경우에만 활성화, 내국인인 경우 KR로 고정 비활성화
        	// 2016년 추가 : 외국법인소속 파견근로자 여부는 외국인인 경우에만 활성화
        	// 2017년 수정 : 국내근무시작일은 외국인인 경우에만 활성화
        	var foreign_cd = this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "foreign_cd");
        	if (foreign_cd == "9") {
        		this.div_top.cob_householder_yn.set_enable(false);
        		this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "householder_yn", "2");
        		this.div_top.cob_nationality_cd.set_enable(true);
        		if (this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "nationality_cd") == "KR") {
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nationality_cd", "");		
        		}
        		
        		this.div_top.cob_foreign_corp_yn.set_enable(true) ;
        		this.div_top.cal_foreign_start_dt.set_enable(true) ;	// 2017년 수정
        		
        	} else {
        		this.div_top.cob_householder_yn.set_enable(true);
        		this.div_top.cob_nationality_cd.set_enable(false);
        		this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nationality_cd", "KR");
        		
        		this.div_top.cob_foreign_corp_yn.set_enable(false) ;
        		this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "foreign_corp_yn", "2");
        		
        		this.div_top.cal_foreign_start_dt.set_enable(false) ;	// 2017년 수정
        		this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "foreign_start_dt", "");	// 2017년 수정
        	}
        	
        	// 소계금액, 한도미달액 계산
        	if (this.ds_detail_main2.getRowCount() > 0) {
        		// 소득공제 소계금액
        		var income_ded_sum = 0 ;
        		income_ded_sum = nexacro.toNumber(this.ds_detail_main2.getColumn(0, "a0000_sum"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "d0110_sum"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "spc_income_ded_amt"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "j0110"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "k0100_sum"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "l0100_sum"),0)
        					   + nexacro.toNumber(this.ds_detail_main2.getColumn(0, "etc_income_ded_sum"),0) ;
        		this.div_income_ded.msk_income_ded_sum_02.set_value(income_ded_sum);
        		
        		// 세액공제 소계금액
        		var tax_ded_sum = 0 ;
        		tax_ded_sum = nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0100_sum"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0130"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0200_sum"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "d0130_sum"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "spc_tax_ded_sum"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0140"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0150"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "n0180"),0)
        					+ nexacro.toNumber(this.ds_detail_main2.getColumn(0, "h0120"),0) ;
        		this.div_tax_ded.msk_tax_ded_sum_02.set_value(tax_ded_sum);					
        		
        		// 신용카드 공제한도액 계산 : 기본 300만원 + 추가공제금액
        // 2018년 수정 시작		
        		var l0110 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0110"),0);
        		var l0130 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0130"),0);
        		var l0140 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0140"),0);
        		var l0150 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0150"),0);
        		var l0160 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0160"),0);		
        		var l0180 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0180"),0);		// 2018년 수정
        		
        		var l0171 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0171"),0);
        		var l0175 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0175"),0);
        		var l0176 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0176"),0);
        		var l0178 = nexacro.toNumber(this.ds_detail_main.getColumn(0, "l0178"),0);
        		var l0179 = 0;
        		if (l0171 < l0175) 
        		{
        			l0179 = Math.max((l0178 - Math.floor(l0176 * 0.5)), 0);
        		}		
        		
        		// 최저사용금액 : 총급여 * 25%
        		var cd_sum = nexacro.toNumber(this.fn_getPayTotAmt(),0);
        		var min_use_amt = Math.floor(cd_sum * 0.25);

        		// 공제제외금액
        		// 1. 최저사용금액 <= 신용카드 사용분 : 최저사용금액 * 15%
        		// 2. 최저사용금액 > 신용카드 사용분 : 신용카드 사용분 * 15% + (최저사용금액 - 신용카드 사용분) * 30%
        		var credit_use_amt = l0110;
        		var credit_use_amt_total = l0110 + l0130 + l0140 + l0150 + l0160 + l0180;	// 2018년 수정

        		var ded_except_amt = 0 ;
        		if (min_use_amt >= credit_use_amt_total) {
        			ded_except_amt = 0 ;
        		} else if (min_use_amt <= credit_use_amt) {
        			ded_except_amt = Math.floor(min_use_amt * 0.15);
        		} else  {
        			ded_except_amt = (Math.floor((credit_use_amt) * 0.15) + Math.floor((min_use_amt - credit_use_amt) * 0.3));
        		}
        		
        		if (min_use_amt <= credit_use_amt) {
        			ded_except_amt = Math.floor(min_use_amt * 0.15) ;

        		} else if (min_use_amt > credit_use_amt && min_use_amt <= (l0110 + l0130 + l0140 + l0180) ) {	// 2018년 수정
        			ded_except_amt = (l0110 * 0.15) + ((min_use_amt - l0110) * 0.3) ;
        			ded_except_amt = Math.floor(ded_except_amt) ;

        		} else if (min_use_amt > (l0110 + l0130 + l0140 + l0180) ) {	// 2018년 수정
        			ded_except_amt = (l0110 * 0.15) + ((l0130 + l0140 + l0180) * 0.3) + ((min_use_amt - (l0110 + l0130 + l0140 + l0180)) * 0.4) ;	// 2018년 수정
        			ded_except_amt = Math.floor(ded_except_amt) ;

        		} else {
        			ded_except_amt = 0 ;
        		}		
        		
        		// 공제가능금액
        		var ded_able_amt = 0;
        		if (min_use_amt >= credit_use_amt_total) {
        			ded_able_amt = 0 ;
        		} else {
        			ded_able_amt = (credit_use_amt * 0.15) + ((l0130 + l0140 + l0180) * 0.3) + ((l0150 + l0160) * 0.4) - ded_except_amt ;	// 2018년 수정
        			ded_able_amt = Math.max(ded_able_amt, 0);
        			ded_able_amt = Math.ceil(ded_able_amt) ;		// 2018년 수정
        		}
        		
        		// 공제한도
        		var ded_limit_amt = 0;
        		if (cd_sum <= 70000000) {
        			ded_limit_amt = Math.min(Math.floor(cd_sum * 0.2), 3000000);
        		} else if (cd_sum > 70000000 && cd_sum <= 120000000) {
        			ded_limit_amt = 2500000 ;		// 2018년 수정 2018년부터 2500000
        		} else {
        			ded_limit_amt = 2000000 ;
        		}

        		// 공제금액
        		var ded_amt_01 = 0 ;		// 일반공제금액
        		var ded_amt_02 = 0 ;		// 시장추가공제금액
        		var ded_amt_03 = 0 ;		// 교통추가공제금액
        		var ded_amt_04 = 0 ;		// 추가공제금액
        		var ded_amt_06 = 0 ;		// 도서공연추가공제금액 2018년 수정

        		if (min_use_amt < credit_use_amt_total) {
        			ded_amt_01 = Math.min(ded_able_amt, ded_limit_amt);
        			ded_amt_06 = Math.min(Math.max(ded_able_amt - ded_limit_amt, 0), (l0180 * 0.3), 1000000);
        			ded_amt_02 = Math.min(Math.max(ded_able_amt - ded_limit_amt - ded_amt_06, 0), (l0150 * 0.4), 1000000);
        			ded_amt_03 = Math.min(Math.max(ded_able_amt - ded_limit_amt - ded_amt_06 - ded_amt_02, 0), (l0160 * 0.4), 1000000);
        			ded_amt_04 = ded_amt_02 + ded_amt_03 + ded_amt_06 ;
        		}

        		// 신용카드 한도금액 계산
        		var l0100_sum_03 = ded_limit_amt ;

        		if (ded_amt_06 > 0 && cd_sum <= 70000000) {
        			l0100_sum_03 = l0100_sum_03 + 1000000 ;
        		}
        		if (ded_amt_02 > 0) {
        			l0100_sum_03 = l0100_sum_03 + 1000000 ;
        		}
        		
        		if (ded_amt_03 > 0) {
        			l0100_sum_03 = l0100_sum_03 + 1000000 ;
        		}			
        		
        		this.div_income_ded.msk_l0100_sum_03.set_value(l0100_sum_03) ;
        // 2018년 수정 끝

        		// 투자조합출자 공제한도액 계산 (근로소득금액의 50%)
        		var m0200_sum_03 = nexacro.ceil(nexacro.toNumber(this.ds_detail_main2.getColumn(0, "z0120"),0) * 0.5) ;
        		this.div_income_ded.msk_m0200_sum_03.set_value(m0200_sum_03) ;
        		
        		// 한도미달액 계산
        		var arr_ded_amt = new Array(720000, l0100_sum_03, m0200_sum_03, 3000000, 15000000, 10000000, 2400000) ;		// 2018년 수정
        		var arr_item = new Array("j0110", "l0100_sum", "m0200_sum", "m0110", "m0140", "m0180", "m0195") ;
        		
        		for (var i=0; i<arr_item.length; i++) {
        			var obj = eval("this.div_income_ded.msk_" + arr_item [i] + "_04") ;
        			var amt = arr_ded_amt[i] - nexacro.toNumber(this.ds_detail_main2.getColumn(0, arr_item[i]),0) ;
        			if (amt < 0) {
        				amt = 0 ;
        			}
        			obj.set_value(amt);
        		}
        		
        		// 2018년 수정 시작 : 월세액 세액공제 공제한도, 총급여 5,500만원 이하자는 90만원
        		var h0120_03 = 750000 ;
        		if (cd_sum <= 55000000) {
        			h0120_03 = 900000 ;
        		}
        		this.div_tax_ded.msk_h0120_03.set_value(h0120_03) ;
        		// 2018년 수정 끝
        		
        		arr_ded_amt = new Array(270000, h0120_03) ;		// 2018년 수정
        		arr_item = new Array("e0000_sum", "h0120") ;
        		
        		for (var i=0; i<arr_item.length; i++) {
        			var obj = eval("this.div_tax_ded.msk_" + arr_item [i] + "_04") ;
        			var amt = arr_ded_amt[i] - nexacro.toNumber(this.ds_detail_main2.getColumn(0, arr_item[i]),0) ;
        			if (amt < 0) {
        				amt = 0 ;
        			}
        			obj.set_value(amt);
        		}		
        	}
        	
        	// ds_detail_main Column Setting
        	// 본인기본공제
        	if (this.gf_isNull(this.ds_detail_main.getColumn(0, "a0110")) || this.ds_detail_main.getColumn(0, "a0110") == "0") 
        	{
        		var a0110 = this.ds_detail_item.getColumn(0, "a0110");
        		this.ds_detail_main.setColumn(0, "a0110", a0110);
        	}

        	// 국민연금보험료 
        	if (this.gf_isNull(this.ds_detail_main.getColumn(0, "d0110")) || this.ds_detail_main.getColumn(0, "d0110") == "0") 
        	{
        		// 2016년 국세청자료 추가로 국세청데이터가 업로드된 경우 집계하지 않음.
        		if (this.ds_detail_main.getColumn(0, "d0110_auto_yn") != "Y") {
        			var d0110 = this.ds_detail_pay03004.getColumn(0, "nat_annuity_amt");
        			this.ds_detail_main.setColumn(0, "d0110", d0110);
        		}
        	}

        	// 건강보험료
        	if (this.gf_isNull(this.ds_detail_main.getColumn(0, "e0110")) || this.ds_detail_main.getColumn(0, "e0110") == "0") 
        	{
        		// 2016년 국세청자료 추가로 국세청데이터가 업로드된 경우 집계하지 않음.
        		if (this.ds_detail_main.getColumn(0, "e0110_auto_yn") != "Y") {
        			var e0110 = this.ds_detail_pay03004.getColumn(0, "health_insu_amt");
        			this.ds_detail_main.setColumn(0, "e0110", e0110);
        		}
        	}

        	// 고용보험료
        	if (this.gf_isNull(this.ds_detail_main.getColumn(0, "e0120")) || this.ds_detail_main.getColumn(0, "e0120") == "0") 
        	{
        		var e0120 = this.ds_detail_pay03004.getColumn(0, "unemploy_insu_amt");
        		this.ds_detail_main.setColumn(0, "e0120", e0120);
        	}

        	// 자녀세액공제 : 2014년 변경
        	var a0132 = this.ds_detail_base.getSum("a0132_yn");
        	var amt = this.decode(a0132, 0, 0, 1, 150000, 2, 300000, 300000 + (a0132 - 2) * 300000);
        	this.ds_detail_main.setColumn(0, "div_00_amt", amt);

        	// 의료비합계
        	var f0110 = this.ds_detail_main.getColumn(0, "f0110");
        	var f0120 = this.ds_detail_main.getColumn(0, "f0120");
        	var f0130 = this.ds_detail_main.getColumn(0, "f0130");
        	var f0140 = this.ds_detail_main.getColumn(0, "f0140");
        	var f0210 = this.ds_detail_main.getColumn(0, "f0210");

        	var temp_ref_rate = this.ds_detail_item_org.lookup("item_cd", "F0210", "ref_rate") * 0.01;
        	var temp_limit_amt = this.ds_detail_item_org.lookup("item_cd", "F0210", "limit_amt");

        	var etc_amt = parseFloat(f0210) - Math.floor(parseFloat(this.fn_getPayTotAmt()) * temp_ref_rate);
        	var full_amt = nexacro.toNumber(f0110) + nexacro.toNumber(f0120) + nexacro.toNumber(f0130) + nexacro.toNumber(f0140);
        	if (etc_amt < 0) 
        	{
        		full_amt = full_amt + etc_amt;
        		etc_amt = 0;
        	}

        	etc_amt = Math.min(etc_amt, temp_limit_amt);

        	var div_03_amt = Math.max(full_amt + etc_amt, 0);

        	this.ds_detail_main.setColumn(0, "div_03_amt", div_03_amt);
        	
        	if (this.is_new == 1) {
        		this.gf_message("인적공제사항이 등록되지 않았습니다.\n인적공제사항을 확인후 반드시 저장해주세요.\n변경된 사항이 없어도 최초 1회는 저장해야 합니다.");
        		this.fn_modifyItem(this.div_income_ded.sta_a0000_sum_mod) ;
        	}
        }

        this.ds_detail_top_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "householder_yn") {
        		if (this.v_householder_yn != e.newvalue && this.is_new != 1) {	
        			if (!confirm("세대주구분을 변경하시면 주택자금, 주택마련저축, 월세액의 신청내용이 모두 초기화됩니다.\n세대주구분을 변경하시겠습니까?")) {
        				return false ;
        			}
        		}
        	}
        	
        	return true ;
        }

        this.ds_detail_top_oncolumnchanged = function (obj,e)
        {
        	if (e.columnid == "householder_yn") 
        	{
        		this.fn_setHouseHolderYn();
        	}

        	// 2014.01 김의순 추가
        	if (e.columnid == "spouse_yn") 
        	{
        		this.fn_setHouseHolderYn();
        	}
        	
        	// 거주자인 경우 거주지국코드는 KR, 비활성화
        	if (e.columnid == "resident_cd") 
        	{
        		if (e.newvalue == "1") {
        			this.div_top.cob_nation_cd.set_enable(false);
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nation_cd", "KR");
        		} else {
        			this.div_top.cob_nation_cd.set_enable(true);
        			if (this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "nation_cd") == "KR") {
        				this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nation_cd", "");		
        			}
        		}
        	}

        	// 외국인(9)인 경우 세대주구분은 세대원으로 고정
        	// 국가코드는 외국인인 경우에만 활성화, 내국인인 경우 KR로 고정 비활성화
        	// 2016년 추가 : 외국법인소속 파견근로자 여부는 외국인인 경우에만 활성화
        	// 2017년 수정 : 국내근무시작일은 외국인인 경우에만 활성화
        	if (e.columnid == "foreign_cd") 
        	{
        		if (e.newvalue == "9") {
        			this.div_top.cob_householder_yn.set_enable(false);
        			this.ds_detail_top.set_enableevent(false);
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "householder_yn", "2");
        			this.ds_detail_top.set_enableevent(true);
        			this.div_top.cob_nationality_cd.set_enable(true);
        			if (this.ds_detail_top.getColumn(this.ds_detail_top.rowposition, "nationality_cd") == "KR") {
        				this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nationality_cd", "");		
        			}
        			
        			this.div_top.cob_foreign_corp_yn.set_enable(true) ;
        			this.div_top.cal_foreign_start_dt.set_enable(true) ;	// 2017년 수정
        		} else {
        			this.div_top.cob_householder_yn.set_enable(true);
        			this.div_top.cob_nationality_cd.set_enable(false);
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "nationality_cd", "KR");
        			
        			this.div_top.cob_foreign_corp_yn.set_enable(false) ;
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "foreign_corp_yn", "2");
        			
        			this.div_top.cal_foreign_start_dt.set_enable(false) ;	// 2017년 수정
        			this.ds_detail_top.setColumn(this.ds_detail_top.rowposition, "foreign_start_dt", "");	// 2017년 수정
        		}
        	}
        }

        /******************************************************
         * @name : fn_saveToolbar
         * @description : 저장
         ******************************************************/
        this.fn_saveToolbar = function ()
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}

        	if (!this.fn_beforeSave()) 
        	{
        		return false;
        	}
        	
        	// 처음 조회때와 저장시에 세대주구분이 다르면 주택자금 내용 모두 삭제
        	var householder_yn = this.ds_detail_top.getColumn(0, "householder_yn") ;
        	if (this.v_householder_yn != householder_yn) {
        		this.ds_master.setColumn(0, "householder_change_yn", "Y") ;
        	} else {
        		this.ds_master.setColumn(0, "householder_change_yn", "N") ;
        	}

        	this.ds_master.setColumn(0, "ec_kind", this.ds_detail_top.getColumn(0, "ec_kind"));
        	this.ds_master.setColumn(0, "start_dt", this.ds_detail_top.getColumn(0, "start_dt"));
        	this.ds_master.setColumn(0, "end_dt", this.ds_detail_top.getColumn(0, "end_dt"));
        	this.ds_master.setColumn(0, "manager_yn", this.manager_yn);

        	var str_inds = "ds_master=ds_master ds_detail_top=ds_detail_top:U ds_detail_main=ds_detail_main" ;
        	if (this.is_new == 1) {
        		str_inds = "ds_master=ds_master ds_detail_top=ds_detail_top:U" ;
        	}
        	var str_outds = "";
        	this.gf_send("saveAll", this.v_controller_url, str_inds, str_outds, "", "SAVE");
        }

        /******************************************************
         * @name : fn_beforeSave
         * @description : 저장전 검증
         ******************************************************/
        this.fn_beforeSave = function ()
        {
        	// 국가코드 등 필수입력값 체크
        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "national_no"))) 
        	{
        		this.gf_message("기본사항의 주민등록번호는 필수입력사항입니다.");
        		return false;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "start_dt"))) 
        	{
        		this.gf_message("기본사항의 귀속시작일은 필수입력사항입니다.");
        		return false;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "end_dt"))) 
        	{
        		this.gf_message("기본사항의 귀속시작일은 필수입력사항입니다.");
        		return false;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "resident_cd"))) 
        	{
        		this.gf_message("기본사항의 거주자구분은 필수입력사항입니다.");
        		return false;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "nation_cd"))) 
        	{
        		this.gf_message("기본사항의 거주지국코드는 필수입력사항입니다.");
        		return false;
        	}
        	
        	if (this.ds_detail_top.getColumn(0, "resident_cd") == "2" && this.ds_detail_top.getColumn(0, "nation_cd") == "KR") {
        		this.gf_message("비거주자인 경우 거주지국은 한국외의 국가를 선택해야 합니다.");
        		return false ;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "foreign_cd"))) 
        	{
        		this.gf_message("기본사항의 내외국인구분은 필수입력사항입니다.");
        		return false;
        	}
        	
        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "nationality_cd"))) 
        	{
        		this.gf_message("기본사항의 국가코드는 필수입력사항입니다.");
        		return false;
        	}	

        	if (this.ds_detail_top.getColumn(0, "foreign_cd") == "9" && this.ds_detail_top.getColumn(0, "nationality_cd") == "KR") {
        		this.gf_message("외국인인 경우 국가코드는 한국외의 국가를 선택해야 합니다.");
        		return false ;
        	}

        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "householder_yn"))) 
        	{
        		this.gf_message("기본사항의 세대주구분은 필수입력사항입니다.");
        		return false;
        	}

        	// 2014.01 김의순 추가
        	if (this.gf_isNull(this.ds_detail_top.getColumn(0, "spouse_yn"))) 
        	{
        		this.gf_message("기본사항의 배우자여부는 필수입력사항입니다.");
        		return false;
        	}

        	// 배우자 여부 체크 (가족사항에 배우자가 있는데 배우자 여부가 없음인 경우 오류)
        	var spouse_yn = this.ds_detail_top.getColumn(0, "spouse_yn");
        	if (spouse_yn == "0") 
        	{
        		var findRow = this.ds_detail_base.findRow("taxrela_cd", "3");
        		if (findRow >= 0) 
        		{
        			this.gf_message("배우자가 있는 경우 배우자 여부를 '있음'으로 선택해주세요.");
        			this.div_top.cob_spouse_yn.setFocus();
        			return false;
        		}
        	}

        	// 연말정산대상자 입력완료여부 확인
        	this.ds_detail_top.setColumn(0, "end_yn", "Y");

        	return true;
        }

        /*******************************************************
         * @name : div_top_btn_zip_onclick
         * @description : 우편번호 팝업
         *******************************************************/
        this.div_top_btn_zip_onclick = function (obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}
        	
        	this.gf_openZipCodeSearch(obj.name, "afterPostSearch");
        }

        /*===============================================================
         =	afterPostSearch
         =	우편번호검색 콜백
         ===============================================================*/
        this.afterPostSearch = function (sPopupId,sPopupVal)
        {
        	this.ds_detail_top.setColumn(0, "zip_cd", this.gf_getPopupVal(sPopupVal, "zip_cd"));
        	this.ds_detail_top.setColumn(0, "addr", this.gf_getPopupVal(sPopupVal, "new_addr"));
        	this.ds_detail_top.setColumn(0, "addr_detail", this.gf_getPopupVal(sPopupVal, "addr_detail"));
        }

        /*******************************************************
         * @name : fn_validBase
         * @description : 기본검증
         *******************************************************/
        this.fn_validBase = function ()
        {
        	var emp_no = this.ds_master.getColumn(0, "emp_no");
        	if (this.gf_isNull(emp_no)) 
        	{
        		this.gf_message("SYSTEM028", ["사원"]);
        		return;
        	}

        	if (this.ds_detail_top.getRowCount() == 0) 
        	{
        		// 대상 사원의 기본사항을 조회 후 진행해 주십시오.
        		this.gf_message("PAYREFCOM006");
        		return false;
        	}

        	return true;
        }

        
        this.fn_modifyItem = function(obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}
        	
        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);

        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 저장 후 다시 시도해 주십시오.");
        		return false;
        	}
        	
        	var ref_list_id = this.ds_detail_top.getColumn(0, "ref_list_id") ;
        	var ec_year = this.ds_master.getColumn(0, "ec_year");
        	
        	if (this.gf_isNull(ref_list_id)) {
        		return false ;
        	}
        	
        	var arr_item = new Array ("sta_a0000_sum_mod"   // 인적공제
        							, "sta_d0110_sum_mod"   // 연금보험료공제
        							, "sta_h0110_mod"		// 주택임차차입금 원리금상환액 대출기관
        							, "sta_h0130_mod"		// 주택임차차입금 원리금상환액 거주자
        							, "sta_h0200_sum_mod"	// 장기주택저당차입금 이자상환액
        							, "sta_i0100_sum_mod"   // 기부금(이월분)
        							, "sta_j0110_mod"       // 개인연금저축
        							, "sta_k0100_sum_mod"   // 주택마련저축
        							, "sta_l0100_sum_mod"   // 신용카드
        							, "sta_etc_income_ded_sum_mod"	// 그밖의소득공제
        							, "sta_n0100_sum_mod"   // 세액감면
        							, "sta_n0130_mod"		// 근로소득세액공제
        							, "sta_n0200_sum_mod"   // 자녀
        							, "sta_d0130_sum_mod"   // 연금계좌
        							, "sta_e0000_sum_mod"   // 보장성보험료
        							, "sta_f0000_sum_mod"   // 의료비
        							, "sta_g0000_sum_mod"   // 교육비
        							, "sta_i0000_sum_mod"   // 기부금
        							, "sta_n0140_mod"       // 납세조합공제							
        							, "sta_n0150_mod"       // 주택차입금
        							, "sta_n0180_mod"       // 외국납부세액
        							, "sta_h0120_mod"       // 월세액
        							 );
        							 
        	var arr_url = new Array ( "101"   // 인적공제(기본공제)
        							, "102"   // 연금보험료공제
        							, "103"   // 주택임차차입금 원리금상환액 대출기관
        							, "103"   // 주택임차차입금 원리금상환액 거주자
        							, "109"   // 장기주택저당차입금 이자상환액
        							, "104"   // 기부금(이월분)
        							, "105"   // 개인연금저축
        							, "106"   // 주택마련저축
        							, "107"   // 신용카드
        							, "108"   // 그밖의소득공제
        							, "200"   // 세액감면
        							, "201"   // 근로소득세액공제
        							, "101"   // 자녀 - 인적공제 화면과 동일
        							, "202"   // 연금계좌
        							, "203"   // 보장성보험료
        							, "204"   // 의료비
        							, "205"   // 교육비
        							, "104"   // 기부금 - 소득공제 기부금 화면과 동일
        							, "206"   // 납세조합공제
        							, "206"   // 주택차입금
        							, "206"   // 외국납부세액
        							, "207"   // 월세액 - 주택임차차입금 원리금상환액 화면과 동일
        							 );							 

        	var idx = arr_item.indexOf(obj.name) ;
        	if (idx < 0) {
        		return false ;
        	}
        	
        	if (this.is_new != 0 && obj.name != "sta_a0000_sum_mod") 
        	{
        		this.gf_message("먼저 인적공제 사항을 확인하고 저장후에 작성할 수 있습니다.");
        		idx = 0 ;		// 인적공제팝업을 open
        //		return false;
        	}	

        	var argstr = new Array();
        	argstr["ref_list_id"] = ref_list_id;
        	this.gf_showModal("pay_ref_com::PayRefCom005Pop_" + arr_url[idx] + "_" + ec_year + ".xfdl", argstr, true);
        }

        /*******************************************************
         * @name : fn_getPayRefFamilyCd
         * @description : 국세청가족관계 값을 찾음.
         *******************************************************/
        this.fn_getPayRefFamilyCd = function (comm_cd)
        {
        	var findRow = this.ds_family_cd.findRow("comm_cd", comm_cd);
        	var code = this.ds_family_cd.getColumn(findRow, "etc1_cd");
        	return code;
        }

        /*******************************************************
         * @name : fn_getPayTotAmt
         * @description : 총급여
         PAY_TOT_AMT		급여총액
         BONUS_TOT_AMT		상여총액
         BONUS_Y_TOT_AMT	인정상여
         STOCK_AMT			주식미수선택권행사이익
         OFFICER_LIMIT_AMT	임원 퇴직금 한도 초과 금액
         JOB_INVENTION_AMT  직무발명보상금, 2018년 수정
         *******************************************************/
        this.fn_getPayTotAmt = function ()
        {
        	// 현근무지 소득
        	var pay_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "pay_tot_amt"),0);
        	var bonus_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "bonus_tot_amt"),0);
        	var bonus_y_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "bonus_y_tot_amt"),0);
        	var stock_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "stock_amt"),0);
        	var emp_stock_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "emp_stock_amt"),0);
        	var officer_limit_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "officer_limit_amt"),0);
        	var job_invention_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "job_invention_amt"),0);		// 2018년 수정

        	// 종전근무지 소득
        	var pay_tot_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "pay_amt"),0);
        	var bonus_tot_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "bonus_amt"),0);
        	var bonus_y_tot_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "allow_bonus_amt"),0);
        	var stock_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "stock_amt"),0);
        	var emp_stock_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "emp_stock_amt"),0);
        	var officer_limit_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "officer_limit_amt"),0);
        	var job_invention_amt_pre = nexacro.toNumber(this.ds_detail_pay03001.getColumn(0, "job_invention_amt"),0);		// 2018년 수정

        	var temp_amt = pay_tot_amt + bonus_tot_amt + bonus_y_tot_amt + stock_amt + emp_stock_amt + officer_limit_amt
                         + pay_tot_amt_pre + bonus_tot_amt_pre + bonus_y_tot_amt_pre + stock_amt_pre + emp_stock_amt_pre + officer_limit_amt_pre
                         + job_invention_amt + job_invention_amt_pre ;		// 2018년 수정

        	return temp_amt;
        }

        // 현근무지 소득금액
        this.fn_getPayTotAmtCur = function ()
        {
        	// 현근무지 소득
        	var pay_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "pay_tot_amt"),0);
        	var bonus_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "bonus_tot_amt"),0);
        	var bonus_y_tot_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "bonus_y_tot_amt"),0);
        	var stock_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "stock_amt"),0);
        	var emp_stock_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "emp_stock_amt"),0);
        	var officer_limit_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "officer_limit_amt"),0);
        	var job_invention_amt = nexacro.toNumber(this.ds_detail_pay03004.getColumn(0, "job_invention_amt"),0);		// 2018년 수정

        	var temp_amt = pay_tot_amt + bonus_tot_amt + bonus_y_tot_amt + stock_amt + emp_stock_amt + officer_limit_amt + job_invention_amt ;		// 2018년 수정

        	return temp_amt;
        }

        // 근로소득금액 계산 : 매년 세법이 변경되면 세법에 맞게 변경해주자.
        this.fn_getPayTotAmt_Tax = function ()
        {
        	var pay = this.fn_getPayTotAmt();
        	var dpay = 0;
        	var rpay = 0;

        	if (pay <= 5000000) 
        	{
        		dpay = nexacro.floor(pay * 0.7);
        	}
        	else if (pay > 5000000 && pay <= 15000000) 
        	{
        		dpay = nexacro.floor(3500000 + (pay - 5000000) * 0.40);
        	}
        	else if (pay > 15000000 && pay <= 45000000) 
        	{
        		dpay = nexacro.floor(7500000 + (pay - 15000000) * 0.15);
        	}
        	else if (pay > 45000000 && pay <= 100000000) 
        	{
        		dpay = nexacro.floor(12000000 + (pay - 45000000) * 0.05);
        	}
        	else if (pay > 100000000) 
        	{
        		dpay = nexacro.floor(14750000 + (pay - 100000000) * 0.02);
        	}
        	rpay = pay - dpay;
        	return rpay;
        }

        // 한부모소득 추가. 2014.01 김의순
        this.fn_setHouseHolderYn = function ()
        {
        	var findRow = this.ds_detail_base.findRow("taxrela_cd", "0");
        	var spouse_yn = this.ds_detail_top.getColumn(0, "spouse_yn");
        	var cnt2 = 0;
        	if (findRow > -1) 
        	{
        		// 먼저 한부모소득부터 판단. 부녀자공제와 중복공제 배제됨.
        		// 배우자가 없는 자로서 기본공제대상인 직계비속 또는 입양자가 있는 경우
        		cnt2 = 0;
        		for (var i = 0; i < this.ds_detail_base.getRowCount(); i++) 
        		{
        			var taxrela_cd = this.ds_detail_base.getColumn(i, "taxrela_cd");
        			var a0100_yn = this.ds_detail_base.getColumn(i, "a0100_yn");
        			// 직계비속, 입양자 (위탁아동은 아님)
        			if ((taxrela_cd == "4" || taxrela_cd == "5") && a0100_yn == "1") 
        			{
        				cnt2++;
        			}
        		}

        		if (spouse_yn != "1" && cnt2 > 0) 
        		{
        			this.ds_detail_base.setColumn(findRow, "b0161_yn", 1); //한부모 체크
        			this.ds_detail_base.setColumn(findRow, "b0131_yn", 0); //부녀자 체크해제

        			// 한부모공제 대상이 아니면 부녀자공제 여부 판단
        		}
        		else 
        		{
        			this.ds_detail_base.setColumn(findRow, "b0161_yn", 0); //한부모 체크해제

        			var national_no = this.ds_detail_top.getColumn(0, "national_no");
        			var sex_cd = this.gf_getSexCd(national_no);
        			var householder_yn = this.ds_detail_top.getColumn(0, "householder_yn");
        			var dpay = this.fn_getPayTotAmt_Tax();

        			// 근로자 본인이 여성인 경우로서 다음의 어느 하나에 해당하는 경우
        			// - 배우자가 있는 여성(남편의 소득유무와는 관계없음)
        			// - 배우자가 없는 여성의 경우 부양가족이 있는 세대주에 해당하는 경우
        			// 근로소득금액이 3000만원 이하자만 해당.
        			if (dpay <= 30000000 && sex_cd == "F") 
        			{
        				// 본인이 여자인 경우만 해당

        				if (spouse_yn == "1" || // 배우자 있음.
        					(householder_yn == "1"/*세대주*/ && this.ds_detail_main.getColumn(0, "a0139") > 0/*부양가족공제인원*/)) 
        				{
        					this.ds_detail_base.setColumn(findRow, "b0131_yn", 1);
        				}
        				else 
        				{
        					this.ds_detail_base.setColumn(findRow, "b0131_yn", 0);
        				}
        			}
        			else 
        			{
        				this.ds_detail_base.setColumn(findRow, "b0131_yn", 0);
        			}
        		}
        	}
        }

        /*===============================================================
         =	fn_afterPopup
         =	팝업 후 콜백
         ===============================================================*/
        this.fn_afterPopup = function(sPopupId,sPopupVal)
        {
        	// 현근무지팝업 (현근무지는 sPopupVal이 없음)
        	if (sPopupId == "pop_curIncome") {
        		if (this.v_curIncomeFlag == "Y") 
        		{
        			this.fn_saveToolbar();
        		}			
        	}

        //	trace( sPopupId + " : " + sPopupVal );
        	if(this.gf_isNull(sPopupVal)){ return; }

        	// 전근무지
        	if (sPopupId == "pop_preIncome") {
        		if (sPopupVal == "Y") 
        		{
        			this.fn_saveToolbar();
        		}	

        	//  첨부파일
        	} else if( sPopupId == "pop_fileManager" ){
        		var old_file_id = this.ds_detail_main.getColumn(0, "file_id");	
        		var file_id = this.gf_getPopupVal(sPopupVal, "file_id") ;
        		
        		if (old_file_id == -1 || old_file_id == 0 || isNaN(file_id) || this.gf_isNull(old_file_id)) {
        			old_file_id = -1 ;
        		}		
        		
        		if (!this.gf_isNull(file_id)) 
        		{
        			// 전후 파일아이디 비교하여 변경되었을경우 처리함.
        			if (old_file_id == file_id) 
        			{
        				return false;
        			}
        			
        			if (!this.fn_beforeSave()) 
        			{
        				return false;
        			}
        			
        			this.ds_detail_error.clearData();
        			
        			// file_id 를 저장
        			this.div_file.edt_file_id.set_value(file_id);

        			var str_inds = "ds_master=ds_master ds_detail_top=ds_detail_top ds_detail_main=ds_detail_main ds_detail_base=ds_detail_base";
        			var str_outds = this.gf_getDs(this.DS_D);
        			this.gf_send("loadYearEndSettlementXml", this.v_controller_url, str_inds, str_outds, "", "SAVE");
        		}
        	} else if(sPopupId == "pop_error") {
        	}
        	
        }

        /*******************************************************
         * @name : ds_master_oncolumnchanged
         * @description :
         *******************************************************/
        this.ds_master_oncolumnchanged = function (obj,e)
        {
        }

        /******************************************************
         * @name : fn_afterOrgEmpInputClear
         * @description : 사원 초기화시 emp_id 초기화
         ******************************************************/
        this.fn_afterOrgEmpInputClear = function (objComp)
        {
        	this.ds_master.setColumn(0, "emp_no", "");
        	this.ds_detail_main.setColumn(0, "emp_no", "");
        	this.ds_master.setColumn(0, "ref_list_id", "");
        	
        	this.fn_clearData();	
        }

        /*******************************************************
         * @name :
         * @description :
         *******************************************************/
        this.fn_afterOrgEmpInputSearch = function (objComp,type,value,resultDs)
        {
        	var emp_no = resultDs.getColumn(0, "emp_no");
        	this.ds_master.setColumn(0, "emp_no", emp_no);
        	this.ds_detail_main.setColumn(0, "emp_no", emp_no);
        	this.ds_master.setColumn(0, "ref_list_id", "");

        	this.fn_clearData();

        	if (!this.v_search_ing) 
        	{
        		this.fn_searchToolbar();
        	}
        }

        /*******************************************************
         * @name : ds_detail_base_oncolumnchanged
         * @description : 기본공제 데이터셋
         *******************************************************/
        this.ds_detail_base_oncolumnchanged = function (obj,e)
        {
        	this.fn_ds_detail_base_recalc();
        }

        this.ds_detail_base_onrowsetchanged = function (obj,e)
        {
        	this.fn_ds_detail_base_recalc();
        }

        this.fn_ds_detail_base_recalc = function ()
        {
        	// 부녀자 여부
        	this.fn_setHouseHolderYn();

        	var a0121 = this.ds_detail_base.getSum("a0121_yn");
        	this.ds_detail_main.setColumn(0, "a0121", a0121);

        	var a0131 = this.ds_detail_base.getSum("a0131_yn");
        	this.ds_detail_main.setColumn(0, "a0131", a0131);

        	// 자녀.입양자
        	var a0132 = this.ds_detail_base.getSum("a0132_yn");
        	this.ds_detail_main.setColumn(0, "a0132", a0132);
        	this.ds_detail_main.setColumn(0, "c0111", application.decode(a0132, 0, 0, 1, 0, a0132)); //다자녀 수

        	var a0133 = this.ds_detail_base.getSum("a0133_yn");
        	this.ds_detail_main.setColumn(0, "a0133", a0133);

        	var a0134 = this.ds_detail_base.getSum("a0134_yn");
        	this.ds_detail_main.setColumn(0, "a0134", a0134);

        	var a0135 = this.ds_detail_base.getSum("a0135_yn");
        	this.ds_detail_main.setColumn(0, "a0135", a0135);

        	var a0136 = this.ds_detail_base.getSum("a0136_yn");
        	this.ds_detail_main.setColumn(0, "a0136", a0136);

        	// 자녀세액공제 : 2014년
        	var amt = application.decode(a0132, 0, 0, 1, 150000, 2, 300000, 300000 + (a0132 - 2) * 300000);
        	this.ds_detail_main.setColumn(0, "div_00_amt", amt);
        }

        /*******************************************************
         * @name : ds_detail_00_oncolumnchanged
         * @description : 추가공제 데이터셋
         *******************************************************/
        this.ds_detail_00_oncolumnchanged = function (obj,e)
        {
        	this.fn_ds_detail_00_recalc();
        }
        this.ds_detail_00_onrowsetchanged = function (obj,e)
        {
        	this.fn_ds_detail_00_recalc();
        }
        this.fn_ds_detail_00_recalc = function ()
        {
        	var b0112 = this.ds_detail_00.getSum("b0112_yn");
        	this.ds_detail_main.setColumn(0, "b0112", b0112);

        	var b0121 = this.ds_detail_00.getSum("b0121_yn");
        	this.ds_detail_main.setColumn(0, "b0121", b0121);

        	var b0131 = this.ds_detail_00.getSum("b0131_yn");
        	this.ds_detail_main.setColumn(0, "b0131", b0131);

        	var b0141 = this.ds_detail_00.getSum("b0141_yn");
        	this.ds_detail_main.setColumn(0, "b0141", b0141);

        	var b0151 = this.ds_detail_00.getSum("b0151_yn");
        	this.ds_detail_main.setColumn(0, "b0151", b0151);

        	var b0161 = this.ds_detail_00.getSum("b0161_yn");
        	this.ds_detail_main.setColumn(0, "b0161", b0161);
        }

        /*******************************************************
         * @name : ds_detail_main_oncolumnchanged
         * @description :
         *******************************************************/
        this.ds_detail_main_oncolumnchanged = function (obj,e)
        {
        	var a0131 = obj.getColumn(0, "a0131");
        	var a0132 = obj.getColumn(0, "a0132");
        	var a0133 = obj.getColumn(0, "a0133");
        	var a0134 = obj.getColumn(0, "a0134");
        	var a0135 = obj.getColumn(0, "a0135");
        	var a0136 = obj.getColumn(0, "a0136");
        	var a0139 = a0131 + a0132 + a0133 + a0134 + a0135 + a0136;
        	obj.setColumn(0, "a0139", a0139);
        	// //trace("부양가족공제인원 : " + a0139);
        }

        // 소득공제신고서 출력
        this.div_search_btn_print_00_onclick = function (obj,e)
        {
        	if(this.gf_isNull(this.is_new)){
        		this.gf_message("먼저 조회를 해주세요.");
        		return false;
        	}
        	if (this.is_new == 1) 
        	{
        		this.gf_message("아직 소득공제신고서가 작성되지 않았습니다.");
        		return false;
        	}

        	var ref_list_id = this.ds_master.getColumn(e.row, "ref_list_id");
        	var emp_no = this.ds_master.getColumn(e.row, "emp_no");
        	var ec_year = this.ds_master.getColumn(e.row, "ec_year");
        	var ec_kind = this.ds_master.getColumn(e.row, "ec_kind");

        	if (this.gf_isNull(ref_list_id)) 
        	{
        		return false;
        	}

        	if (ec_year <= "2015") 
        	{
        		this.gf_message("소득공제신고서는 2016년부터 출력가능합니다.");
        		return false;
        	}

        	var reportName = "";
        	var paramArr = "";
        	var sToolbarVisible = "P";
        	var sSaveExtVisible = "P";

        	reportName = "pay/PayRetCom005_" + ec_year;
        	
        	paramArr = "COMPANY_ID=" + application.c_company_id
        			 + "&REF_LIST_ID=" + ref_list_id
        			 + "&EMP_NO=" + emp_no
        			 + "&EC_KIND=" + ec_kind
        			 + "&EC_YEAR=" + ec_year;

        		
        	// E : Excel, P : PDF , H : 한글
        	this.gf_openReport("popup", null, reportName, "", paramArr, "P", "PageWidth");
        }

        // 의료비명세서 출력
        this.div_search_btn_print_02_onclick = function (obj,e)
        {
        	if(this.gf_isNull(this.is_new)){
        		this.gf_message("먼저 조회를 해주세요.");
        		return false;
        	}
        	
        	if (this.is_new == 1) 
        	{
        		this.gf_message("아직 소득공제신고서가 작성되지 않았습니다.");
        		return false;
        	}

        	var ref_list_id = this.ds_master.getColumn(e.row, "ref_list_id");
        	var ec_year = this.ds_master.getColumn(e.row, "ec_year");
        	var emp_no = this.ds_master.getColumn(e.row, "emp_no");
        	var ec_kind = this.ds_master.getColumn(e.row, "ec_kind");

        	if (this.gf_isNull(ref_list_id)) 
        	{
        		return false;
        	}

        	if (ec_year <= "2014") 
        	{
        		this.gf_message("의료비명세서는 2015년부터 출력가능합니다.");
        		return false;
        	}

        	var reportName = "";
        	var paramArr = "";
        	var sToolbarVisible = "P";
        	var sSaveExtVisible = "P";

        	reportName = "pay/PayRetCom005_medi_" + ec_year;
        	
        	paramArr = "COMPANY_ID=" + application.c_company_id
        			 + "&REF_LIST_ID=" + ref_list_id
        			 + "&EMP_NO=" + emp_no
        			 + "&EC_KIND=" + ec_kind
        			 + "&EC_YEAR=" + ec_year;

        
        		
        		 // E : Excel, P : PDF , H : 한글
        		this.gf_openReport("popup", null, reportName, "", paramArr, "P", "PageWidth");
        	
        }

        // 기부금명세서 출력
        this.div_search_btn_print_03_onclick = function (obj,e)
        {
        	if(this.gf_isNull(this.is_new)){
        		this.gf_message("먼저 조회를 해주세요.");
        		return false;
        	}
        	
        	if (this.is_new == 1) 
        	{
        		this.gf_message("아직 소득공제신고서가 작성되지 않았습니다.");
        		return false;
        	}

        	var ref_list_id = this.ds_master.getColumn(e.row, "ref_list_id");
        	var ec_year = this.ds_master.getColumn(e.row, "ec_year");
        	var emp_no = this.ds_master.getColumn(e.row, "emp_no");
        	var ec_kind = this.ds_master.getColumn(e.row, "ec_kind");
        	
        	if (this.gf_isNull(ref_list_id)) 
        	{
        		return false;
        	}

        	if (ec_year <= "2014") 
        	{
        		this.gf_message("기부금명세서는 2015년부터 출력가능합니다.");
        		return false;
        	}
        	
        	var reportName = "";
        	var paramArr = "";
        	var sToolbarVisible = "P";
        	var sSaveExtVisible = "P";

        	reportName = "pay/PayRetCom005_don_" + ec_year;
        	
        	paramArr = "COMPANY_ID=" + application.c_company_id
        			 + "&REF_LIST_ID=" + ref_list_id
        			 + "&EMP_NO=" + emp_no
        			 + "&EC_KIND=" + ec_kind
        			 + "&EC_YEAR=" + ec_year;

        
        		
        		 // E : Excel, P : PDF , H : 한글
        		this.gf_openReport("popup", null, reportName, "", paramArr, "P", "PageWidth");
        	
        }

        // 전근무지입력
        this.div_search_btn_popup_01_onclick = function (obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}
        	
        	if (this.is_new == 1) 
        	{
        		this.gf_message("먼저 인적공제 사항을 확인하고 저장해주세요.");
        		this.fn_modifyItem(this.div_income_ded.sta_a0000_sum_mod) ;
        		return false;
        	}	

        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);

        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 저장 후 다시 시도해 주십시오.");
        		return false;
        	}
        	
        	var objParam = {
        	};
        	objParam.p_emp_id = this.ds_master.getColumn(0, "emp_id");
        	objParam.p_emp_no = this.ds_master.getColumn(0, "emp_no");
        	objParam.p_emp_nm = this.div_search.form_org_emp_input_search.getName();
        	objParam.p_ec_year = this.ds_master.getColumn(0, "ec_year");
        	objParam.p_ref_list_id = this.ds_master.getColumn(0, "ref_list_id");
        	objParam.program_url = "/hr/pay/ref/std/controller/PayRefStd002XPController.xp";
        	objParam.resizable = true;
        	objParam.resizableFlag = true;
        	objParam.height = 450;
        	this.gf_openPopup(this, objParam, "pop_preIncome");
        }

        // 정산대상급여관리 팝업
        this.div_search_btn_popup_02_onclick = function (obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}
        	
        	if (this.is_new == 1) 
        	{
        		this.gf_message("먼저 인적공제 사항을 확인하고 저장해주세요.");
        		this.fn_modifyItem(this.div_income_ded.sta_a0000_sum_mod) ;		
        		return false;
        	}	

        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);

        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 저장 후 다시 시도해 주십시오.");
        		return false;
        	}
        	
        	var objParam = {
        	};
        	objParam.p_ref_list_id = this.ds_master.getColumn(0, "ref_list_id");
        	objParam.p_emp_no = this.ds_master.getColumn(0, "emp_no");
        	objParam.p_emp_nm = this.div_search.form_org_emp_input_search.getName();
        	objParam.p_ec_year = this.ds_master.getColumn(0, "ec_year");
        	objParam.p_ec_kind = this.ds_detail_top.getColumn(0, "ec_kind");
        	objParam.p_reg_seq = this.ds_detail_top.getColumn(0, "reg_seq") ;
        	objParam.program_url = "/hr/pay/ref/com/controller/PayRefCom003XPController.xp";
        	objParam.resizable = true;
        	objParam.resizableFlag = true;
        	objParam.height = 600;
        	
        	this.v_curIncomeFlag = "N" ;
        	this.gf_openPopup(this, objParam, "pop_curIncome");
        }

        this.fn_callBackError = function (sid)
        {
        	if (sid == "loadYearEndSettlementXml") 
        	{
        		this.div_file.edt_file_id.set_value(-1);
        		this.fn_clearYearEndSettlementXml() ;
        	}
        }

        this.fn_clearData = function ()
        {
        	this.ds_detail_top.clearData();
        	this.ds_detail_base.clearData();
        	this.ds_detail_main.clearData();
        	this.ds_detail_main2.clearData();
        	this.ds_detail_00.clearData();	
        	
        	this.ds_detail_main.addRow();
        	this.ds_detail_main2.addRow();
        	this.div_income_ded.msk_income_ded_sum_02.set_value("");
        	this.div_tax_ded.msk_tax_ded_sum_02.set_value("");
        	this.div_search.msk_pay_tot_amt.set_value("");
        	this.div_search.msk_pay_tot_amt_tax.set_value("");
        	
        	this.div_search.btn_cal_end_yn.set_visible(false);
        	this.div_search.btn_confirm_yn.set_visible(false);	
        	
        	this.is_new = null ;
        }

        this.div_choice00_btn_file_down_onclick = function (obj,e)
        {
        	var file_id = this.ds_detail_main.getColumn(0, "file_id");
        	var file_seq = this.ds_detail_main.getColumn(0, "file_seq");

        	if (isNaN(file_id) || isNaN(file_seq)) 
        	{
        		return;
        	}

        	// 파일다운로드(IE)
        	this.gf_fileDownloadIE(file_id, file_seq);
        }

        this.PayRefCom005_onmousewheel = function (obj,e)
        {
        	try {
        		this.vscrollbar.set_pos(this.vscrollbar.pos - (e.amount / 2)); //<= 조절 범위 임의 지정
        	} catch (ex) {
        	}
        	
        	return true ;	
        }

        /*******************************************************
         * @name : div_choice00_btn_file_onclick
         * @description : 연말정산 pdf 첨부하여 파싱
         *******************************************************/
        this.div_file_btn_file_onclick = function (obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}

        	if (this.ds_detail_base.getRowCount() == 0) 
        	{
        		// 기본공제 대상이 존재하지 않아 처리할 수 없습니다.
        		this.gf_message("PAYREFCOM009");
        		return false;
        	}

        	if (this.is_new == 1) 
        	{
        		this.gf_message("먼저 인적공제 사항을 확인하고 저장후에 국세청 전자문서를 첨부해주세요.");
        		this.fn_modifyItem(this.div_income_ded.sta_a0000_sum_mod) ;
        		return false;
        	}

        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);
        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 먼저 저장후에 국세청 전자문서를 첨부해주세요.");
        		return false;
        	}
        	
        	// 계산, 담당자확정여부 확인
        	var str_inds = "ds_master=ds_master";
        	var str_outds = "";
        	this.gf_send("isEnableWorking", this.v_controller_url, str_inds, str_outds, "", "SAVE");
        }

        
        /*******************************************************
         * @name : fn_afterLoadYearEndSettlementXml
         * @description : 국세청 pdf 첨부 후 설정 작업
         *******************************************************/
        this.fn_afterLoadYearEndSettlementXml = function ()
        {
        	this.fn_afterEtc("list001") ;

        	if (this.ds_detail_error.getRowCount() > 0) 
        	{
        		this.fn_error_confirm();
        	} else {
        		var file_id = this.ds_detail_main.getColumn(0, "file_id") ;
        		
        		if (this.gf_isNull(file_id) || file_id == 0 || file_id == -1) {
        			this.gf_message("국세청 전자문서를 삭제하였습니다.") ;
        		} else {
        			this.gf_message("국세청 전자문서가 등록되었습니다.") ;
        		}
        	}
        }

        this.fn_error_confirm = function ()
        {
        	this.gf_message("국세청자료 업로드중 등록할 수 없는 자료가 있습니다.");
        	this.gf_showModal("pay_ref_com::PayRefCom005Pop2.xfdl", null, true, null, null, null, null, "pop_error", "fn_afterPopup");
        }

        /*******************************************************
         * @name : fn_clearYearEndSettlementXml
         * @description : 국세청 pdf 첨부 후 에러가 발생하면 국세청자료 모두 Clear
         *******************************************************/
        this.fn_clearYearEndSettlementXml = function ()
        {
        	this.ds_detail_error.clearData();
        	
        	var str_inds = "ds_master=ds_master ds_detail_top=ds_detail_top ds_detail_main=ds_detail_main ds_detail_base=ds_detail_base";
        	var str_outds = "";
        	this.gf_send("clearYearEndSettlementXml", this.v_controller_url, str_inds, str_outds, "", "SAVE");
        }

        
        // 계산확정/취소
        this.div_search_btn_cal_end_yn_onclick = function(obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}

        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);

        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 저장 후 다시 시도해 주십시오.");
        		return false;
        	}
        	
        	var cal_end_yn = this.ds_detail_top.getColumn(0, "cal_end_yn") ;
        	var confirm_yn = this.ds_detail_top.getColumn(0, "confirm_yn") ;
        	
        	if (confirm_yn == "Y") {
        		return false ;
        	}
        	
        	if (cal_end_yn == "Y") {
        		this.ds_master.setColumn(0, "cal_end_yn", "N") ;
        	} else {
        		this.ds_master.setColumn(0, "cal_end_yn", "Y") ;
        	}
        	
        	var str_inds = "ds_master=ds_master" ;
        	var str_outds = "";
        	this.gf_send("saveCalEndYn", this.v_controller_url, str_inds, str_outds, "", "");	
        }

        // 담당자확정/취소
        this.div_search_btn_confirm_yn_onclick = function(obj,e)
        {
        	if (!this.fn_validBase()) 
        	{
        		return false;
        	}

        	var arrDs = [];
        	arrDs.push(this.ds_detail_top);

        	if (this.gf_isModifyDataset(arrDs)) 
        	{
        		this.gf_message("수정된 항목이 존재합니다. 저장 후 다시 시도해 주십시오.");
        		return false;
        	}
        	
        	var confirm_yn = this.ds_detail_top.getColumn(0, "confirm_yn") ;
        	if (confirm_yn == "Y") {
        		this.ds_master.setColumn(0, "confirm_yn", "N") ;
        	} else {
        		this.ds_master.setColumn(0, "confirm_yn", "Y") ;
        	}
        	
        	var str_inds = "ds_master=ds_master" ;
        	var str_outds = "";
        	this.gf_send("saveConfirmYn", this.v_controller_url, str_inds, str_outds, "", "");	
        }

        this.fn_checkHouse = function(obj,e)
        {
        	if (this.is_new == 1) 
        	{
        		this.gf_message("먼저 인적공제 사항을 확인하고 저장후에 국세청 전자문서를 첨부해주세요.");
        		this.fn_modifyItem(this.div_income_ded.sta_a0000_sum_mod) ;
        	} else {
        		if (obj.name == "chk_h0110_yn") {			// 주택임차차입금원리금상환액
        			this.fn_modifyItem(this.div_income_ded.sta_h0110_mod) ;
        		
        		} else if (obj.name == "chk_h0210_yn") {	// 장기주택저당차입금 이자상환액	
        			this.fn_modifyItem(this.div_income_ded.sta_h0200_sum_mod) ;
        		
        		} else if (obj.name == "chk_k0110_yn") {	// 주택마련저축
        			this.fn_modifyItem(this.div_income_ded.sta_k0100_sum_mod) ;
        		
        		} else if (obj.name == "chk_h0120_yn") {	// 월세액
        			this.fn_modifyItem(this.div_tax_ded.sta_h0120_mod) ;
        		
        		}
        	}
        }

        this.btn_feedback_onclick = function(obj,e)
        {
        	if(this.gf_isNull(this.is_new)){
        		this.gf_message("먼저 조회를 해주세요.");
        		return false;
        	}

        	var ref_list_id = this.ds_detail_top.getColumn(0, "ref_list_id") ;	
        	
        	var param = new Array();
        	param.arg_ref_list_id = ref_list_id;
        	param.arg_manager_yn = this.manager_yn;
        	this.gf_showModal("pay_ref_com::PayRefCom013.xfdl", param, true);
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_detail_main.clearData();
        	this.ds_detail_main2.clearData();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_master.addEventHandler("oncolumnchanged", this.ds_master_oncolumnchanged, this);
            this.ds_detail_top.addEventHandler("oncolumnchanged", this.ds_detail_top_oncolumnchanged, this);
            this.ds_detail_top.addEventHandler("cancolumnchange", this.ds_detail_top_cancolumnchange, this);
            this.ds_detail_base.addEventHandler("oncolumnchanged", this.ds_detail_base_oncolumnchanged, this);
            this.ds_detail_base.addEventHandler("onrowsetchanged", this.ds_detail_base_onrowsetchanged, this);
            this.ds_detail_base.addEventHandler("onload", this.ds_detail_base_onload, this);
            this.ds_detail_00.addEventHandler("oncolumnchanged", this.ds_detail_00_oncolumnchanged, this);
            this.ds_detail_00.addEventHandler("onrowsetchanged", this.ds_detail_00_onrowsetchanged, this);
            this.ds_detail_main.addEventHandler("oncolumnchanged", this.ds_detail_main_oncolumnchanged, this);
            this.addEventHandler("onmousewheel", this.PayRefCom005_onmousewheel, this);
            this.div_top.btn_zip.addEventHandler("onclick", this.div_top_btn_zip_onclick, this);
            this.div_income_ded.sta_a0000_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_a0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_b0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_d0110_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_spc_income_ded_amt_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_e0110_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_e0120_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_h0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_h0110_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_h0130_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_h0200_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_i0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_j0110_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_k0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_l0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_etc_income_ded_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_m0110_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_m0200_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_m0140_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_m0180_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_income_ded.sta_m0195_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0100_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0130_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0200_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0200_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0202_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0204_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_d0130_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_d0131_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_j0120_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_spc_tax_ded_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0140_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_e0000_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_f0000_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_g0000_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_i0000_sum_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_z0410_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0150_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_n0180_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.div_tax_ded.sta_h0120_mod.addEventHandler("onclick", this.fn_modifyItem, this);
            this.btn_file_view.addEventHandler("onclick", this.div_choice00_btn_file_down_onclick, this);
            this.btn_file.addEventHandler("onclick", this.div_file_btn_file_onclick, this);
            this.div_house_check.chk_h0110_yn.addEventHandler("onclick", this.fn_checkHouse, this);
            this.div_house_check.chk_h0210_yn.addEventHandler("onclick", this.fn_checkHouse, this);
            this.div_house_check.chk_k0110_yn.addEventHandler("onclick", this.fn_checkHouse, this);
            this.div_house_check.chk_h0120_yn.addEventHandler("onclick", this.fn_checkHouse, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_83404_PayRefCom005_2018.xfdl");

       
    };
}
)();
