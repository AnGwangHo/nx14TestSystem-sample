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
                this.set_name("act_5003M");
                this.set_titletext("손익계산서");
                this._setFormPosition(0,0,1050,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSI_PLC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_LEV\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_L_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_R_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_L_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_R_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"L_LINK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"R_LINK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codeBusi", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_NM\">조회중</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codeUnitT", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_NM\">조회중</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fsForm", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FS_NM\">조회중</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gisu", this);
            obj._setContents("<ColumnInfo><Column id=\"THIS_GISU\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_GISU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_LEV\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_L_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_R_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_L_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_R_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"L_LINK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"R_LINK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GROUP_NM\">Ⅰ. 사업수익</Col><Col id=\"GROUP_CD\">1</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">26113612369</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">10507491205</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">1. 정부출연사업수익</Col><Col id=\"GROUP_CD\">2</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">19142900000</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">4758234919</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">2. 수탁사업수익</Col><Col id=\"GROUP_CD\">3</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">6729818569</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">5746842886</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">3. 기타사업수익</Col><Col id=\"GROUP_CD\">4</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">240893800</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">2413400</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅱ. 사업원가</Col><Col id=\"GROUP_CD\">5</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">19538526305</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">11873754717</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">1. 정부출연사업원가</Col><Col id=\"GROUP_CD\">6</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">16373748367</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">10044037103</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">2. 수탁사업원가</Col><Col id=\"GROUP_CD\">7</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">3164777938</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">1829717614</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅲ. 사업총이익</Col><Col id=\"GROUP_CD\">8</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">6575086064</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">-1366263512</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅳ. 운영비</Col><Col id=\"GROUP_CD\">9</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">3557715705</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">2683076542</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">1. 정규직급여</Col><Col id=\"GROUP_CD\">10</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">-252028597</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">2. 비정규직급여</Col><Col id=\"GROUP_CD\">11</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">22692350</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">3896422</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">3. 공공요금</Col><Col id=\"GROUP_CD\">12</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">10205661</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">6212660</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">4. 제세공과금</Col><Col id=\"GROUP_CD\">13</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">86395550</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">31585355</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">5. 시설장비유지비</Col><Col id=\"GROUP_CD\">14</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">12952253</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">32245316</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">6. 자산취득비</Col><Col id=\"GROUP_CD\">15</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">4596950</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">7. 임차료</Col><Col id=\"GROUP_CD\">16</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">2150662500</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">1060141870</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">8. 복리후생비</Col><Col id=\"GROUP_CD\">17</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">10065560</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">60729980</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">9. 특근매식비</Col><Col id=\"GROUP_CD\">18</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">11347200</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">7763700</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">10. 교육훈련비</Col><Col id=\"GROUP_CD\">19</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">39763391</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">4543680</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">11. 수용비</Col><Col id=\"GROUP_CD\">20</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">159976057</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">127516560</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">12. 전문가활용비</Col><Col id=\"GROUP_CD\">21</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">25620000</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">18419990</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">13. 여비</Col><Col id=\"GROUP_CD\">22</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">27925891</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">10798324</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">14. 외부용역비</Col><Col id=\"GROUP_CD\">23</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">15. 회의비</Col><Col id=\"GROUP_CD\">24</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">9182583</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">7271532</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">16. 업무추진비</Col><Col id=\"GROUP_CD\">25</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">134278800</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">63584910</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">17. 퇴직급여</Col><Col id=\"GROUP_CD\">26</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">856647909</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">1378338878</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">18. 감가상각비</Col><Col id=\"GROUP_CD\">27</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">117459012</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅴ. 사업이익(손실)</Col><Col id=\"GROUP_CD\">28</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">3017370359</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">-4049340054</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅵ. 사업외 수익</Col><Col id=\"GROUP_CD\">29</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">191868037</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">237152471</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">1. 이자수익</Col><Col id=\"GROUP_CD\">30</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">42220656</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">108188452</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">2. 고유목적사업준비금 환입</Col><Col id=\"GROUP_CD\">31</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">130045779</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">3. 연구개발적립금 환입</Col><Col id=\"GROUP_CD\">32</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">103279806</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">299200</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">4. 유형자산처분이익</Col><Col id=\"GROUP_CD\">33</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">18579000</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">5. 사업비정산차익</Col><Col id=\"GROUP_CD\">34</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">6. 잡이익</Col><Col id=\"GROUP_CD\">35</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">46367575</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">-19959960</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅶ. 사업외 비용</Col><Col id=\"GROUP_CD\">36</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">42394404</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">444815768</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">1. 고유목적사업준비금 전입</Col><Col id=\"GROUP_CD\">37</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">131561947</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">2. 연구개발적립금 전입</Col><Col id=\"GROUP_CD\">38</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">378796</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">232960680</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">3. 유형자산처분손실</Col><Col id=\"GROUP_CD\">39</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">4. 유형자산기부채납</Col><Col id=\"GROUP_CD\">40</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">5. 사업비정산차손</Col><Col id=\"GROUP_CD\">41</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">41340608</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">46171841</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">6. 잡손실</Col><Col id=\"GROUP_CD\">42</Col><Col id=\"GROUP_LEV\">2</Col><Col id=\"THIS_L_AMT\">675000</Col><Col id=\"THIS_R_AMT\">0</Col><Col id=\"PREV_L_AMT\">34121300</Col><Col id=\"PREV_R_AMT\">0</Col><Col id=\"L_LINK_YN\">Y</Col><Col id=\"R_LINK_YN\">N</Col></Row><Row><Col id=\"GROUP_NM\">Ⅷ. 당기순이익(손실)</Col><Col id=\"GROUP_CD\">43</Col><Col id=\"GROUP_LEV\">1</Col><Col id=\"THIS_L_AMT\">0</Col><Col id=\"THIS_R_AMT\">3166843992</Col><Col id=\"PREV_L_AMT\">0</Col><Col id=\"PREV_R_AMT\">-4257003351</Col><Col id=\"L_LINK_YN\">N</Col><Col id=\"R_LINK_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "15", "265", null, "43", "15", null, this);
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("div_WFSA_SearchBg");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "471", "0", "40", "42", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "690", "0", "40", "42", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "201", "153", "37", null, null, this);
            obj.set_taborder("11");
            obj.set_text("손익계산서");
            obj.set_cssclass("sta_WF_title01");
            obj.style.set_font("bold 12 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "244", "104", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "91", "323", "143", "14", null, null, this);
            obj.set_taborder("9");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_Number");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "201", "15", "750", null, null, this);
            obj.set_taborder("13");
            obj.set_text("W\r\n15");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "535", "201", "500", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1035", "201", "15", "750", null, null, this);
            obj.set_taborder("15");
            obj.set_text("W\r\n15");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "238", "1020", "10", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "260", "1020", "5", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "265", "20", "43", null, null, this);
            obj.set_taborder("18");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "308", "1020", "15", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "35", "275", "55", "22", null, null, this);
            obj.set_taborder("26");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchBusiPlcCd", "absolute", "84", "275", "180", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_codeBusi");
            obj.set_codecolumn("COMM_CD");
            obj.set_datacolumn("COMM_NM");
            obj.set_type("search");
            obj.style.set_font("9 Dotum");
            obj.set_index("0");

            obj = new Calendar("searchThisDt", "absolute", "591", "275", "115", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static14", "absolute", "526", "275", "55", "22", null, null, this);
            obj.set_taborder("53");
            obj.set_text("당기일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "319", "74", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchPrevDt", "absolute", "809", "275", "115", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static04", "absolute", "746", "275", "55", "22", null, null, this);
            obj.set_taborder("68");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchFsNo", "absolute", "337", "275", "150", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_fsForm");
            obj.set_codecolumn("FS_NO");
            obj.set_datacolumn("FS_NM");
            obj.set_type("search");
            obj.style.set_font("9 Dotum");
            obj.set_index("0");

            obj = new Static("Static09", "absolute", "303", "274", "55", "22", null, null, this);
            obj.set_taborder("70");
            obj.set_text("양식");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "74", "265", "10", "42", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "84", "265", "100", "10", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "84", "297", "100", "10", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "264", "265", "40", "42", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "924", "265", "20", "43", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "799", "265", "10", "42", null, null, this);
            obj.set_taborder("79");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "809", "265", "100", "10", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "809", "297", "100", "10", null, null, this);
            obj.set_taborder("81");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "581", "265", "10", "42", null, null, this);
            obj.set_taborder("83");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "591", "265", "100", "10", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "591", "297", "100", "10", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "327", "265", "10", "42", null, null, this);
            obj.set_taborder("88");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "337", "265", "100", "10", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "337", "297", "100", "10", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("fuchsia");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "335", "1020", "5", null, null, this);
            obj.set_taborder("91");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_color("blue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("70");
            this.addChild(obj.name, obj);

            obj = new Grid("grid1", "absolute", "15", "340", null, "602", "15", null, this);
            obj.set_taborder("92");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.style.set_font("9 Dotum");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"460\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"과목\"/><Cell col=\"2\" colspan=\"2\"/><Cell col=\"4\" colspan=\"2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"tree\" edittype=\"tree\" style=\"align:left;\" text=\"bind:GROUP_NM\" editimemode=\"hangul\" treestartlevel=\"1\" treelevel=\"bind:GROUP_LEV\" treestate=\"1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);color2:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);font:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);cursor:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;hand&quot; : &quot;&quot;);selectcolor:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);selectfont:EXPR((THIS_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);\" text=\"bind:THIS_L_AMT\" expr=\"expr:(THIS_L_AMT != null &amp;&amp; THIS_L_AMT &lt; 0) ? Math.abs(THIS_L_AMT) : THIS_L_AMT\" mask=\"expr:(THIS_L_AMT != null &amp;&amp; THIS_L_AMT &lt; 0) ? &quot;(###,###,###,###,###,###)&quot; : &quot;###,###,###,###,###,###&quot;\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);color2:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);font:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);cursor:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;hand&quot; : &quot;&quot;);selectcolor:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);selectfont:EXPR((THIS_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);\" text=\"bind:THIS_R_AMT\" expr=\"expr:(THIS_R_AMT != null &amp;&amp; THIS_R_AMT &lt; 0) ? Math.abs(THIS_R_AMT) : THIS_R_AMT\" mask=\"expr:(THIS_R_AMT != null &amp;&amp; THIS_R_AMT &lt; 0) ? &quot;(###,###,###,###,###,###)&quot; : &quot;###,###,###,###,###,###&quot;\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);color2:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);font:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);cursor:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;hand&quot; : &quot;&quot;);selectcolor:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);selectfont:EXPR((PREV_L_AMT != null &amp;&amp; L_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);\" text=\"bind:PREV_L_AMT\" expr=\"expr:(PREV_L_AMT != null &amp;&amp; PREV_L_AMT &lt; 0) ? Math.abs(PREV_L_AMT) : PREV_L_AMT\" mask=\"expr:(PREV_L_AMT != null &amp;&amp; PREV_L_AMT &lt; 0) ? &quot;(###,###,###,###,###,###)&quot; : &quot;###,###,###,###,###,###&quot;\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);color2:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);font:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);cursor:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;hand&quot; : &quot;&quot;);selectcolor:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;blue&quot; : &quot;&quot;);selectfont:EXPR((PREV_R_AMT != null &amp;&amp; R_LINK_YN == &quot;Y&quot;) ? &quot;underline 9 arial&quot; : &quot;&quot;);\" text=\"bind:PREV_R_AMT\" expr=\"expr:(PREV_R_AMT != null &amp;&amp; PREV_R_AMT &lt; 0) ? Math.abs(PREV_R_AMT) : PREV_R_AMT\" mask=\"expr:(PREV_R_AMT != null &amp;&amp; PREV_R_AMT &lt; 0) ? &quot;(###,###,###,###,###,###)&quot; : &quot;###,###,###,###,###,###&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_test", "absolute", null, "216", "54", "22", "204", null, this);
            obj.set_taborder("93");
            obj.set_text(" 조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("94");
            obj.set_text("[RP_82537] [디그라][Nexacro14]Css에 그리드 align속성이 지정되어 있지 않을시 에러발생합니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "10", "40", "800", "150", null, null, this);
            obj.set_taborder("95");
            obj.set_text("1. 현상\r\n tree Grid에서 css에 align 값이 빈값으로 되어 있을 때 오류 발생\r\n - align : ;\r\n\r\n - RP72791 처리 시 발생함 (9월정기 48370 - 2018.09.18)\r\n\r\n2. 테스트방법\r\n 1) 첨부된 css 적용\r\n 2) act_5003M.xfdl 실행\r\n 3) '조회' 클릭\r\n 4) 에러 확인\r\n     - TypeError: Cannot read property 'valign' of null");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("div_WFSA_SearchBg");
            		p.set_taborder("12");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1050, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("act_1002M");
            		p.set_titletext("손익계산서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item16","searchBusiPlcCd","value","ds_search","BUSI_PLC_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","searchThisDt","value","ds_search","THIS_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","searchPrevDt","value","ds_search","PREV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","searchFsNo","value","ds_search","FS_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_82537_act_5003M.xfdl", function() {
        /****************************************************************************************************
        * File Name   : act_5003M
        * Description : 손익계산서
        *---------------------------------------------------------------------------------------------------
        * Modify Date   Programer        Description
        *---------------------------------------------------------------------------------------------------
        * 2017.08.17    크리스피드            최초작성
        ****************************************************************************************************/

        /** 
        * FUNCTION NAME : fn_onload
        * DESCRIPTION : 화면 초기화
        */
        this.fn_onload = function(obj,e)
        {

        }

        
        this.btn_test_onclick = function(obj,e)
        {
        	this.ds_list.copyData(this.ds_temp);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.Static34.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static31_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static31.addEventHandler("onclick", this.Static31_onclick, this);
            this.searchThisDt.addEventHandler("onchanged", this.searchThisDt_onchanged, this);
            this.searchPrevDt.addEventHandler("onchanged", this.searchPrevDt_onchanged, this);
            this.searchFsNo.addEventHandler("onitemchanged", this.btn_search_onclick, this);
            this.grid1.addEventHandler("oncellclick", this.grid1_oncellclick, this);
            this.btn_test.addEventHandler("onclick", this.btn_test_onclick, this);

        };

        this.loadIncludeScript("RP_82537_act_5003M.xfdl");

       
    };
}
)();
