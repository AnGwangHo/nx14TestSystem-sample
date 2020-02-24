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
                this.set_name("test_190306");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_headerList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"20\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"ITEM_CD\">100042</Col><Col id=\"ITEM_NM\">Thick후라이(36파운드)</Col></Row><Row><Col id=\"ITEM_CD\">100089</Col><Col id=\"ITEM_NM\">갈릭페퍼슈림프(완숙새우500g)</Col></Row><Row><Col id=\"ITEM_CD\">100200</Col><Col id=\"ITEM_NM\">와퍼번(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100201</Col><Col id=\"ITEM_NM\">버거번(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100204</Col><Col id=\"ITEM_NM\">와퍼패티(호주산과뉴질랜드산섞음)</Col></Row><Row><Col id=\"ITEM_CD\">100206</Col><Col id=\"ITEM_NM\">토마토(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100207</Col><Col id=\"ITEM_NM\">가공양파(2kg)</Col></Row><Row><Col id=\"ITEM_CD\">100209</Col><Col id=\"ITEM_NM\">케찹</Col></Row><Row><Col id=\"ITEM_CD\">100216</Col><Col id=\"ITEM_NM\">콜라시럽</Col></Row><Row><Col id=\"ITEM_CD\">100217</Col><Col id=\"ITEM_NM\">환타오렌지시럽</Col></Row><Row><Col id=\"ITEM_CD\">100218</Col><Col id=\"ITEM_NM\">스프라이트시럽</Col></Row><Row><Col id=\"ITEM_CD\">100219</Col><Col id=\"ITEM_NM\">순수(500ml)</Col></Row><Row><Col id=\"ITEM_CD\">100221</Col><Col id=\"ITEM_NM\">미닛메이드(350ml-PET)</Col></Row><Row><Col id=\"ITEM_CD\">100231</Col><Col id=\"ITEM_NM\">핫초코믹스(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100234</Col><Col id=\"ITEM_NM\">우유(1000ml-신규)</Col></Row><Row><Col id=\"ITEM_CD\">100236</Col><Col id=\"ITEM_NM\">어니언링</Col></Row><Row><Col id=\"ITEM_CD\">100240</Col><Col id=\"ITEM_NM\">카페시럽(1500ML)</Col></Row><Row><Col id=\"ITEM_CD\">100242</Col><Col id=\"ITEM_NM\">다이어트시럽(ZERO-5L)</Col></Row><Row><Col id=\"ITEM_CD\">100244</Col><Col id=\"ITEM_NM\">신)케찹IND(1500EA)</Col></Row><Row><Col id=\"ITEM_CD\">100245</Col><Col id=\"ITEM_NM\">머스터드200(파우치)</Col></Row><Row><Col id=\"ITEM_CD\">100248</Col><Col id=\"ITEM_NM\">마요네즈(오뚜기)-신규2</Col></Row><Row><Col id=\"ITEM_CD\">100249</Col><Col id=\"ITEM_NM\">콜라캔(245ml)</Col></Row><Row><Col id=\"ITEM_CD\">100255</Col><Col id=\"ITEM_NM\">아이스크림믹스(롯데)</Col></Row><Row><Col id=\"ITEM_CD\">100263</Col><Col id=\"ITEM_NM\">콘더스트번(4.5인치)</Col></Row><Row><Col id=\"ITEM_CD\">100266</Col><Col id=\"ITEM_NM\">치즈소스</Col></Row><Row><Col id=\"ITEM_CD\">100268</Col><Col id=\"ITEM_NM\">와우패티(돼지고기(국내산),닭고기(국내산))</Col></Row><Row><Col id=\"ITEM_CD\">100281</Col><Col id=\"ITEM_NM\">일회용커피프림(50ea)</Col></Row><Row><Col id=\"ITEM_CD\">100283</Col><Col id=\"ITEM_NM\">햄(NEW-국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100287</Col><Col id=\"ITEM_NM\">나타드코코</Col></Row><Row><Col id=\"ITEM_CD\">100289</Col><Col id=\"ITEM_NM\">피클2</Col></Row><Row><Col id=\"ITEM_CD\">100290</Col><Col id=\"ITEM_NM\">에그패티(원형)</Col></Row><Row><Col id=\"ITEM_CD\">100296</Col><Col id=\"ITEM_NM\">콘샐러드(6입)</Col></Row><Row><Col id=\"ITEM_CD\">100304</Col><Col id=\"ITEM_NM\">BK너겟킹(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100306</Col><Col id=\"ITEM_NM\">롱치킨패티(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100307</Col><Col id=\"ITEM_NM\">BK뉴치킨패티(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100313</Col><Col id=\"ITEM_NM\">(NEW)설탕인드</Col></Row><Row><Col id=\"ITEM_CD\">100316</Col><Col id=\"ITEM_NM\">불고기소스(2kg)</Col></Row><Row><Col id=\"ITEM_CD\">100324</Col><Col id=\"ITEM_NM\">소금(1kg)</Col></Row><Row><Col id=\"ITEM_CD\">100329</Col><Col id=\"ITEM_NM\">스테이크패티(NEW)호주산과뉴질랜드산섞음</Col></Row><Row><Col id=\"ITEM_CD\">100331</Col><Col id=\"ITEM_NM\">원두커피(RA)</Col></Row><Row><Col id=\"ITEM_CD\">100332</Col><Col id=\"ITEM_NM\">드립커피(RA)</Col></Row><Row><Col id=\"ITEM_CD\">100346</Col><Col id=\"ITEM_NM\">망고에이드(2016)</Col></Row><Row><Col id=\"ITEM_CD\">100349</Col><Col id=\"ITEM_NM\">치킨번(16EA)</Col></Row><Row><Col id=\"ITEM_CD\">100354</Col><Col id=\"ITEM_NM\">스파이시토마토소스</Col></Row><Row><Col id=\"ITEM_CD\">100364</Col><Col id=\"ITEM_NM\">호밀브리오슈번</Col></Row><Row><Col id=\"ITEM_CD\">100367</Col><Col id=\"ITEM_NM\">크라상번(24EA)</Col></Row><Row><Col id=\"ITEM_CD\">100371</Col><Col id=\"ITEM_NM\">BK머스타드(480g/bottle)</Col></Row><Row><Col id=\"ITEM_CD\">100374</Col><Col id=\"ITEM_NM\">BK블랙갈릭소스(1kg)</Col></Row><Row><Col id=\"ITEM_CD\">100376</Col><Col id=\"ITEM_NM\">핫페퍼칠리소스(1kg)</Col></Row><Row><Col id=\"ITEM_CD\">100377</Col><Col id=\"ITEM_NM\">레드베리에이드</Col></Row><Row><Col id=\"ITEM_CD\">100381</Col><Col id=\"ITEM_NM\">딸기시럽(1kg-냉장)</Col></Row><Row><Col id=\"ITEM_CD\">100382</Col><Col id=\"ITEM_NM\">초코시럽(1kg)</Col></Row><Row><Col id=\"ITEM_CD\">100387</Col><Col id=\"ITEM_NM\">크런치치킨패티(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100393</Col><Col id=\"ITEM_NM\">뉴올리언스치킨패티(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100394</Col><Col id=\"ITEM_NM\">트러플크림소스</Col></Row><Row><Col id=\"ITEM_CD\">100395</Col><Col id=\"ITEM_NM\">구운버섯(4종)</Col></Row><Row><Col id=\"ITEM_CD\">100396</Col><Col id=\"ITEM_NM\">BK텐더킹(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100398</Col><Col id=\"ITEM_NM\">코코넛쉬림프</Col></Row><Row><Col id=\"ITEM_CD\">100399</Col><Col id=\"ITEM_NM\">버거킹슈레더치즈(6pack)</Col></Row><Row><Col id=\"ITEM_CD\">100402</Col><Col id=\"ITEM_NM\">21치즈스틱</Col></Row><Row><Col id=\"ITEM_CD\">100403</Col><Col id=\"ITEM_NM\">버거패티(NEW호주산과뉴질랜드산섞음)</Col></Row><Row><Col id=\"ITEM_CD\">100404</Col><Col id=\"ITEM_NM\">스위트칠리소스</Col></Row><Row><Col id=\"ITEM_CD\">100405</Col><Col id=\"ITEM_NM\">BK버팔로소스</Col></Row><Row><Col id=\"ITEM_CD\">100408</Col><Col id=\"ITEM_NM\">킹치킨패티(국내산)</Col></Row><Row><Col id=\"ITEM_CD\">100409</Col><Col id=\"ITEM_NM\">디아블로소스</Col></Row><Row><Col id=\"ITEM_CD\">100410</Col><Col id=\"ITEM_NM\">코울슬로(6입)</Col></Row><Row><Col id=\"ITEM_CD\">100413</Col><Col id=\"ITEM_NM\">애플모히또베이스</Col></Row><Row><Col id=\"ITEM_CD\">100415</Col><Col id=\"ITEM_NM\">야채피클</Col></Row><Row><Col id=\"ITEM_CD\">100416</Col><Col id=\"ITEM_NM\">(NEW)냉동라임</Col></Row><Row><Col id=\"ITEM_CD\">100417</Col><Col id=\"ITEM_NM\">스모킹머스타드소스</Col></Row><Row><Col id=\"ITEM_CD\">100418</Col><Col id=\"ITEM_NM\">슬라이스치즈(Fonterra)</Col></Row><Row><Col id=\"ITEM_CD\">100419</Col><Col id=\"ITEM_NM\">BK베이컨(미국산,아일랜드산,스페인산등)</Col></Row><Row><Col id=\"ITEM_CD\">100420</Col><Col id=\"ITEM_NM\">크리미모짜볼</Col></Row><Row><Col id=\"ITEM_CD\">100421</Col><Col id=\"ITEM_NM\">레드번</Col></Row><Row><Col id=\"ITEM_CD\">100422</Col><Col id=\"ITEM_NM\">치폴레바베큐소스</Col></Row><Row><Col id=\"ITEM_CD\">100428</Col><Col id=\"ITEM_NM\">주니어종이랩(2500ea)</Col></Row><Row><Col id=\"ITEM_CD\">100438</Col><Col id=\"ITEM_NM\">14온스뚜껑(다회용기용)</Col></Row><Row><Col id=\"ITEM_CD\">100440</Col><Col id=\"ITEM_NM\">커피머들러(1000개)</Col></Row><Row><Col id=\"ITEM_CD\">100444</Col><Col id=\"ITEM_NM\">아이스크림-컵(소형-5온스)</Col></Row><Row><Col id=\"ITEM_CD\">100445</Col><Col id=\"ITEM_NM\">아이스크림컵-뚜껑(소형-5온스)</Col></Row><Row><Col id=\"ITEM_CD\">100446</Col><Col id=\"ITEM_NM\">선데-용기(50EA/봉)</Col></Row><Row><Col id=\"ITEM_CD\">100447</Col><Col id=\"ITEM_NM\">선데-뚜껑(50EA/봉)</Col></Row><Row><Col id=\"ITEM_CD\">100450</Col><Col id=\"ITEM_NM\">종이스푼(NEW)</Col></Row><Row><Col id=\"ITEM_CD\">100452</Col><Col id=\"ITEM_NM\">일회용포크</Col></Row><Row><Col id=\"ITEM_CD\">100453</Col><Col id=\"ITEM_NM\">멀티카톤(대형)</Col></Row><Row><Col id=\"ITEM_CD\">100462</Col><Col id=\"ITEM_NM\">드링크캐리어(2구)</Col></Row><Row><Col id=\"ITEM_CD\">100463</Col><Col id=\"ITEM_NM\">16/22온스뚜껑(New)</Col></Row><Row><Col id=\"ITEM_CD\">100465</Col><Col id=\"ITEM_NM\">16온스컵(New)</Col></Row><Row><Col id=\"ITEM_CD\">100466</Col><Col id=\"ITEM_NM\">내프킨(New)</Col></Row><Row><Col id=\"ITEM_CD\">100468</Col><Col id=\"ITEM_NM\">핫커피컵리드(10oz)</Col></Row><Row><Col id=\"ITEM_CD\">100469</Col><Col id=\"ITEM_NM\">행사용16온스컵</Col></Row><Row><Col id=\"ITEM_CD\">100472</Col><Col id=\"ITEM_NM\">Thick용매직백(소)</Col></Row><Row><Col id=\"ITEM_CD\">100473</Col><Col id=\"ITEM_NM\">Thick용매직백(대)</Col></Row><Row><Col id=\"ITEM_CD\">100474</Col><Col id=\"ITEM_NM\">핫커피컵10oz(500ea)</Col></Row><Row><Col id=\"ITEM_CD\">100477</Col><Col id=\"ITEM_NM\">멀티백(1000ea)</Col></Row><Row><Col id=\"ITEM_CD\">100478</Col><Col id=\"ITEM_NM\">와퍼종이랩(크래프트)</Col></Row><Row><Col id=\"ITEM_CD\">100479</Col><Col id=\"ITEM_NM\">치킨킹모닝랩</Col></Row><Row><Col id=\"ITEM_CD\">100480</Col><Col id=\"ITEM_NM\">싱글더블랩</Col></Row><Row><Col id=\"ITEM_CD\">100481</Col><Col id=\"ITEM_NM\">치킨프라이카톤</Col></Row><Row><Col id=\"ITEM_CD\">100482</Col><Col id=\"ITEM_NM\">스트로우(5000ea)</Col></Row><Row><Col id=\"ITEM_CD\">100484</Col><Col id=\"ITEM_NM\">슈림프랩(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100490</Col><Col id=\"ITEM_NM\">22온스컵(국내Eat-In용/250ea)</Col></Row><Row><Col id=\"ITEM_CD\">100491</Col><Col id=\"ITEM_NM\">붉은대게통새우버거랩지</Col></Row><Row><Col id=\"ITEM_CD\">100492</Col><Col id=\"ITEM_NM\">뉴올리언스치킨/스테이크랩지</Col></Row><Row><Col id=\"ITEM_CD\">100498</Col><Col id=\"ITEM_NM\">(NEW)치즈스틱백</Col></Row><Row><Col id=\"ITEM_CD\">100499</Col><Col id=\"ITEM_NM\">몬스터와퍼랩지</Col></Row><Row><Col id=\"ITEM_CD\">100500</Col><Col id=\"ITEM_NM\">멀티백(S)</Col></Row><Row><Col id=\"ITEM_CD\">100504</Col><Col id=\"ITEM_NM\">단체박스(대)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100505</Col><Col id=\"ITEM_NM\">단체박스(소)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100506</Col><Col id=\"ITEM_NM\">쇼핑백(대)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100507</Col><Col id=\"ITEM_NM\">케리백(12)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100508</Col><Col id=\"ITEM_NM\">케리백(6)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100509</Col><Col id=\"ITEM_NM\">케리백(4)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100510</Col><Col id=\"ITEM_NM\">쇼핑백(소)-신규</Col></Row><Row><Col id=\"ITEM_CD\">100511</Col><Col id=\"ITEM_NM\">프라스틱컵(16온스)</Col></Row><Row><Col id=\"ITEM_CD\">100512</Col><Col id=\"ITEM_NM\">프라스틱컵(22온스)</Col></Row><Row><Col id=\"ITEM_CD\">100516</Col><Col id=\"ITEM_NM\">트레이매트</Col></Row><Row><Col id=\"ITEM_CD\">100518</Col><Col id=\"ITEM_NM\">14온스PET뚜껑</Col></Row><Row><Col id=\"ITEM_CD\">100523</Col><Col id=\"ITEM_NM\">쓰레기봉투(검정색)</Col></Row><Row><Col id=\"ITEM_CD\">100524</Col><Col id=\"ITEM_NM\">쓰레기봉투(백색)</Col></Row><Row><Col id=\"ITEM_CD\">100526</Col><Col id=\"ITEM_NM\">수세미(10개)</Col></Row><Row><Col id=\"ITEM_CD\">100527</Col><Col id=\"ITEM_NM\">면장갑(10개)</Col></Row><Row><Col id=\"ITEM_CD\">100528</Col><Col id=\"ITEM_NM\">고무장갑(중10개)</Col></Row><Row><Col id=\"ITEM_CD\">100529</Col><Col id=\"ITEM_NM\">우산집(100개)</Col></Row><Row><Col id=\"ITEM_CD\">100534</Col><Col id=\"ITEM_NM\">RED-핸드브러쉬</Col></Row><Row><Col id=\"ITEM_CD\">100538</Col><Col id=\"ITEM_NM\">BLUE-마포걸레</Col></Row><Row><Col id=\"ITEM_CD\">100539</Col><Col id=\"ITEM_NM\">BLUE-바닥비</Col></Row><Row><Col id=\"ITEM_CD\">100540</Col><Col id=\"ITEM_NM\">BLUE-바닥청소밀대</Col></Row><Row><Col id=\"ITEM_CD\">100553</Col><Col id=\"ITEM_NM\">공용-쓰레받이세트</Col></Row><Row><Col id=\"ITEM_CD\">100554</Col><Col id=\"ITEM_NM\">공용-53&quot;마대자루</Col></Row><Row><Col id=\"ITEM_CD\">100555</Col><Col id=\"ITEM_NM\">공용-48'빗자루봉</Col></Row><Row><Col id=\"ITEM_CD\">100556</Col><Col id=\"ITEM_NM\">공용-랙걸이(4구용)</Col></Row><Row><Col id=\"ITEM_CD\">100558</Col><Col id=\"ITEM_NM\">리빙타올(Yellow)</Col></Row><Row><Col id=\"ITEM_CD\">100559</Col><Col id=\"ITEM_NM\">3M행주(Blue)</Col></Row><Row><Col id=\"ITEM_CD\">100569</Col><Col id=\"ITEM_NM\">안전장갑(보호장구2입)</Col></Row><Row><Col id=\"ITEM_CD\">100572</Col><Col id=\"ITEM_NM\">보호고무장화</Col></Row><Row><Col id=\"ITEM_CD\">100574</Col><Col id=\"ITEM_NM\">패드NS</Col></Row><Row><Col id=\"ITEM_CD\">100583</Col><Col id=\"ITEM_NM\">적외선전구(375W/220V)</Col></Row><Row><Col id=\"ITEM_CD\">100590</Col><Col id=\"ITEM_NM\">박스테이프</Col></Row><Row><Col id=\"ITEM_CD\">100591</Col><Col id=\"ITEM_NM\">썬랩(30CM)</Col></Row><Row><Col id=\"ITEM_CD\">100592</Col><Col id=\"ITEM_NM\">소독수테스트용지</Col></Row><Row><Col id=\"ITEM_CD\">100594</Col><Col id=\"ITEM_NM\">썬랩(BK브로일러용)</Col></Row><Row><Col id=\"ITEM_CD\">100595</Col><Col id=\"ITEM_NM\">휘시/치킨파티션바스켓</Col></Row><Row><Col id=\"ITEM_CD\">100596</Col><Col id=\"ITEM_NM\">탄산(Co2)</Col></Row><Row><Col id=\"ITEM_CD\">100597</Col><Col id=\"ITEM_NM\">비프롤테이프</Col></Row><Row><Col id=\"ITEM_CD\">100599</Col><Col id=\"ITEM_NM\">쇼트닝테스트용지(신규)</Col></Row><Row><Col id=\"ITEM_CD\">100600</Col><Col id=\"ITEM_NM\">비닐백2인용(테이크아웃용)</Col></Row><Row><Col id=\"ITEM_CD\">100601</Col><Col id=\"ITEM_NM\">입고/폐기스티커(9*5.5/500개)</Col></Row><Row><Col id=\"ITEM_CD\">100602</Col><Col id=\"ITEM_NM\">1인용비닐백(테이크아웃)</Col></Row><Row><Col id=\"ITEM_CD\">100603</Col><Col id=\"ITEM_NM\">하이퍼CCA4(75G)</Col></Row><Row><Col id=\"ITEM_CD\">100609</Col><Col id=\"ITEM_NM\">삼성MLT-D101S(SCX3405)</Col></Row><Row><Col id=\"ITEM_CD\">100610</Col><Col id=\"ITEM_NM\">삼성MLT-D111S(SL-M2078)</Col></Row><Row><Col id=\"ITEM_CD\">100611</Col><Col id=\"ITEM_NM\">위생비닐장갑(크린손)</Col></Row><Row><Col id=\"ITEM_CD\">100612</Col><Col id=\"ITEM_NM\">일회용밴드(파란색)</Col></Row><Row><Col id=\"ITEM_CD\">100614</Col><Col id=\"ITEM_NM\">다목적주방세제(캐피탈)</Col></Row><Row><Col id=\"ITEM_CD\">100615</Col><Col id=\"ITEM_NM\">씽크쎄니타이져</Col></Row><Row><Col id=\"ITEM_CD\">100616</Col><Col id=\"ITEM_NM\">바닥클리너(카뎃트)</Col></Row><Row><Col id=\"ITEM_CD\">100618</Col><Col id=\"ITEM_NM\">베지와시</Col></Row><Row><Col id=\"ITEM_CD\">100619</Col><Col id=\"ITEM_NM\">튀김기세척제(허스키)</Col></Row><Row><Col id=\"ITEM_CD\">100620</Col><Col id=\"ITEM_NM\">쏘일쉴드(코테)</Col></Row><Row><Col id=\"ITEM_CD\">100621</Col><Col id=\"ITEM_NM\">유리및다목적클리너(터치업글라스)</Col></Row><Row><Col id=\"ITEM_CD\">100623</Col><Col id=\"ITEM_NM\">이코트럼프(3000세제)</Col></Row><Row><Col id=\"ITEM_CD\">100624</Col><Col id=\"ITEM_NM\">이코드라이(5000린스)</Col></Row><Row><Col id=\"ITEM_CD\">100625</Col><Col id=\"ITEM_NM\">강력기름클리너(타이탄)</Col></Row><Row><Col id=\"ITEM_CD\">100626</Col><Col id=\"ITEM_NM\">스테인레스광택제(다즐)</Col></Row><Row><Col id=\"ITEM_CD\">100627</Col><Col id=\"ITEM_NM\">화장실클리너(스프리트)</Col></Row><Row><Col id=\"ITEM_CD\">100630</Col><Col id=\"ITEM_NM\">신마그네솔(벌크)</Col></Row><Row><Col id=\"ITEM_CD\">100631</Col><Col id=\"ITEM_NM\">디라이머</Col></Row><Row><Col id=\"ITEM_CD\">100633</Col><Col id=\"ITEM_NM\">포밍핸드솝(포트렉스)</Col></Row><Row><Col id=\"ITEM_CD\">100635</Col><Col id=\"ITEM_NM\">WMF세정제(액체타입)</Col></Row><Row><Col id=\"ITEM_CD\">100636</Col><Col id=\"ITEM_NM\">WMF세정환(환타입)</Col></Row><Row><Col id=\"ITEM_CD\">100640</Col><Col id=\"ITEM_NM\">투명바틀(용기뚜껑)</Col></Row><Row><Col id=\"ITEM_CD\">100642</Col><Col id=\"ITEM_NM\">소스바틀뚜껑(투명색)</Col></Row><Row><Col id=\"ITEM_CD\">100656</Col><Col id=\"ITEM_NM\">벌크케첩꼭지</Col></Row><Row><Col id=\"ITEM_CD\">100658</Col><Col id=\"ITEM_NM\">5갤론통</Col></Row><Row><Col id=\"ITEM_CD\">100659</Col><Col id=\"ITEM_NM\">디스펜서(템포)</Col></Row><Row><Col id=\"ITEM_CD\">100660</Col><Col id=\"ITEM_NM\">5갤론펌프(캐피탈용)</Col></Row><Row><Col id=\"ITEM_CD\">100661</Col><Col id=\"ITEM_NM\">스프레이바틀(멀티)</Col></Row><Row><Col id=\"ITEM_CD\">100662</Col><Col id=\"ITEM_NM\">스프레이바틀(디그리져)</Col></Row><Row><Col id=\"ITEM_CD\">100668</Col><Col id=\"ITEM_NM\">레드텅</Col></Row><Row><Col id=\"ITEM_CD\">100671</Col><Col id=\"ITEM_NM\">토마토꼭지따게</Col></Row><Row><Col id=\"ITEM_CD\">100673</Col><Col id=\"ITEM_NM\">일회용나이프</Col></Row><Row><Col id=\"ITEM_CD\">100675</Col><Col id=\"ITEM_NM\">테이크아웃용스트로우</Col></Row><Row><Col id=\"ITEM_CD\">100677</Col><Col id=\"ITEM_NM\">분리형가위</Col></Row><Row><Col id=\"ITEM_CD\">100684</Col><Col id=\"ITEM_NM\">점보롤(화장실용)</Col></Row><Row><Col id=\"ITEM_CD\">100685</Col><Col id=\"ITEM_NM\">핸드타올디스펜서</Col></Row><Row><Col id=\"ITEM_CD\">100687</Col><Col id=\"ITEM_NM\">커피필터(드립용)</Col></Row><Row><Col id=\"ITEM_CD\">100690</Col><Col id=\"ITEM_NM\">고무장갑(대10개)</Col></Row><Row><Col id=\"ITEM_CD\">100696</Col><Col id=\"ITEM_NM\">후라이휠터(신형)</Col></Row><Row><Col id=\"ITEM_CD\">100697</Col><Col id=\"ITEM_NM\">페달쓰레기통(New)</Col></Row><Row><Col id=\"ITEM_CD\">100698</Col><Col id=\"ITEM_NM\">페달(쓰레기통용)</Col></Row><Row><Col id=\"ITEM_CD\">100699</Col><Col id=\"ITEM_NM\">종이타올(New)</Col></Row><Row><Col id=\"ITEM_CD\">100706</Col><Col id=\"ITEM_NM\">토마토슬라이서브러쉬</Col></Row><Row><Col id=\"ITEM_CD\">100707</Col><Col id=\"ITEM_NM\">페달쓰레기통뚜껑</Col></Row><Row><Col id=\"ITEM_CD\">100708</Col><Col id=\"ITEM_NM\">염화칼슘(25kg)</Col></Row><Row><Col id=\"ITEM_CD\">100711</Col><Col id=\"ITEM_NM\">감열지(포스용)</Col></Row><Row><Col id=\"ITEM_CD\">100715</Col><Col id=\"ITEM_NM\">대형쓰레기봉투</Col></Row><Row><Col id=\"ITEM_CD\">100718</Col><Col id=\"ITEM_NM\">그린마커(형광펜)</Col></Row><Row><Col id=\"ITEM_CD\">100721</Col><Col id=\"ITEM_NM\">(신규)윈도우자루</Col></Row><Row><Col id=\"ITEM_CD\">100723</Col><Col id=\"ITEM_NM\">투명마스크(애플립스)</Col></Row><Row><Col id=\"ITEM_CD\">100725</Col><Col id=\"ITEM_NM\">14온스PET컵(500ea)</Col></Row><Row><Col id=\"ITEM_CD\">100726</Col><Col id=\"ITEM_NM\">슈퍼컨택트클리너</Col></Row><Row><Col id=\"ITEM_CD\">100727</Col><Col id=\"ITEM_NM\">파워패드</Col></Row><Row><Col id=\"ITEM_CD\">100729</Col><Col id=\"ITEM_NM\">하이템프패드</Col></Row><Row><Col id=\"ITEM_CD\">100734</Col><Col id=\"ITEM_NM\">크립톤전구(60W/220V)</Col></Row><Row><Col id=\"ITEM_CD\">100735</Col><Col id=\"ITEM_NM\">포스코(9W주광색)</Col></Row><Row><Col id=\"ITEM_CD\">100736</Col><Col id=\"ITEM_NM\">포스코(9W전구색)</Col></Row><Row><Col id=\"ITEM_CD\">100740</Col><Col id=\"ITEM_NM\">외부용행주(green)</Col></Row><Row><Col id=\"ITEM_CD\">100753</Col><Col id=\"ITEM_NM\">스프레이건</Col></Row><Row><Col id=\"ITEM_CD\">100756</Col><Col id=\"ITEM_NM\">3M스카치테이프</Col></Row><Row><Col id=\"ITEM_CD\">100757</Col><Col id=\"ITEM_NM\">핸드브러쉬(흰색)</Col></Row><Row><Col id=\"ITEM_CD\">100758</Col><Col id=\"ITEM_NM\">비닐장갑(화장실용-20매)</Col></Row><Row><Col id=\"ITEM_CD\">100759</Col><Col id=\"ITEM_NM\">감열지(POS)</Col></Row><Row><Col id=\"ITEM_CD\">100761</Col><Col id=\"ITEM_NM\">유선감열지(직영)</Col></Row><Row><Col id=\"ITEM_CD\">100809</Col><Col id=\"ITEM_NM\">3M행주(Red)</Col></Row><Row><Col id=\"ITEM_CD\">100810</Col><Col id=\"ITEM_NM\">할로겐(4.3W전구색)</Col></Row><Row><Col id=\"ITEM_CD\">100811</Col><Col id=\"ITEM_NM\">K-5쎄니타이저(50EA)</Col></Row><Row><Col id=\"ITEM_CD\">100816</Col><Col id=\"ITEM_NM\">RA커피홀더(500EA)</Col></Row><Row><Col id=\"ITEM_CD\">100819</Col><Col id=\"ITEM_NM\">라벨스티커(650EA)</Col></Row><Row><Col id=\"ITEM_CD\">100821</Col><Col id=\"ITEM_NM\">후라이휠터(Pitco전용)</Col></Row><Row><Col id=\"ITEM_CD\">100822</Col><Col id=\"ITEM_NM\">킴케어손소독제(엑티젤500ml)</Col></Row><Row><Col id=\"ITEM_CD\">100823</Col><Col id=\"ITEM_NM\">세정제(Franke)</Col></Row><Row><Col id=\"ITEM_CD\">100828</Col><Col id=\"ITEM_NM\">BK매니저벨트</Col></Row><Row><Col id=\"ITEM_CD\">100829</Col><Col id=\"ITEM_NM\">씽크앞치마</Col></Row><Row><Col id=\"ITEM_CD\">100833</Col><Col id=\"ITEM_NM\">토마토안전장갑</Col></Row><Row><Col id=\"ITEM_CD\">100834</Col><Col id=\"ITEM_NM\">보안경</Col></Row><Row><Col id=\"ITEM_CD\">100839</Col><Col id=\"ITEM_NM\">애플모히또펌프</Col></Row><Row><Col id=\"ITEM_CD\">100840</Col><Col id=\"ITEM_NM\">손소독제(2018)</Col></Row><Row><Col id=\"ITEM_CD\">100842</Col><Col id=\"ITEM_NM\">머그컵(다회용기/EA)</Col></Row><Row><Col id=\"ITEM_CD\">100843</Col><Col id=\"ITEM_NM\">홀딩보드마커</Col></Row><Row><Col id=\"ITEM_CD\">100845</Col><Col id=\"ITEM_NM\">LED할로겐램프(8W)</Col></Row><Row><Col id=\"ITEM_CD\">100846</Col><Col id=\"ITEM_NM\">키친타올(베이컨)</Col></Row><Row><Col id=\"ITEM_CD\">100852</Col><Col id=\"ITEM_NM\">식기세척기용(핀랙)</Col></Row><Row><Col id=\"ITEM_CD\">100853</Col><Col id=\"ITEM_NM\">식기세척기용(평면랙)</Col></Row><Row><Col id=\"ITEM_CD\">100875</Col><Col id=\"ITEM_NM\">테프론쉬트(BUNGRILLER)</Col></Row><Row><Col id=\"ITEM_CD\">100886</Col><Col id=\"ITEM_NM\">1/2스텐그레이트</Col></Row><Row><Col id=\"ITEM_CD\">100903</Col><Col id=\"ITEM_NM\">PHUPAN(손잡이양면)</Col></Row><Row><Col id=\"ITEM_CD\">100912</Col><Col id=\"ITEM_NM\">신규소금통</Col></Row><Row><Col id=\"ITEM_CD\">100913</Col><Col id=\"ITEM_NM\">신규소금통(Lid)</Col></Row><Row><Col id=\"ITEM_CD\">100914</Col><Col id=\"ITEM_NM\">신규소금통(Body)</Col></Row><Row><Col id=\"ITEM_CD\">100916</Col><Col id=\"ITEM_NM\">FRYBASKET</Col></Row><Row><Col id=\"ITEM_CD\">100919</Col><Col id=\"ITEM_NM\">1/3푸드팬(deeppan)</Col></Row><Row><Col id=\"ITEM_CD\">100928</Col><Col id=\"ITEM_NM\">1/3그레이트(스텐/PHU)</Col></Row><Row><Col id=\"ITEM_CD\">100930</Col><Col id=\"ITEM_NM\">번벨트</Col></Row><Row><Col id=\"ITEM_CD\">100937</Col><Col id=\"ITEM_NM\">후라잉오일(CJ)</Col></Row><Row><Col id=\"ITEM_CD\">100938</Col><Col id=\"ITEM_NM\">가공양상추(5kg)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a    </Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b    </Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c    </Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d    </Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">asdfgh</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit01", "absolute", "48", "280", "21.19%", "4.82%", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_value("테스트입니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "51", "173", "19.73%", "8.46%", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "275", "173", "19.73%", "8.46%", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("4");
            obj.set_text("RP 84450 Chrome에서 Edit의 autoselect가 풀리는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0.2%", "52", null, "92", "0.78%", null, this);
            obj.set_taborder("5");
            obj.set_text("테스트 방법\r\n\r\n 1. Chrome, FF에서 실행하여 Edit에 autoselect 동작 확인\r\n 2. 마우스로 Button을 클릭\r\n 3. 다시 Edit를 클릭\r\n 4. Edit의 autoselect가 동작하는 지 확인");
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
        this.registerScript("RP_84450_test_190306.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var v_Formats = "";
        	var v_Columns = "";
        	var v_Rows = "";
        	var v_BandHeadGrp = "";
        	var v_BandHead = "";
        	var v_BandHeadCol = "";
        	var v_BandBody = "";
        	var v_BandSum  = "";
        	
        	var v_HeadGrpIdx = 0;
        	var v_HeadColIdx = 0;
        	var v_BodyColIdx = 0;
        	var v_SumColIdx = 0;
        	
        	this.ds_headerList.filter(this.Edit00.value);
        	if(this.ds_headerList.getRowCount() == 0 ) return;
        	
        	//Row 설정(고정)
        	v_Rows += '         '+'<Row size="24" band="head" />\n';
        	v_Rows += '         '+'<Row size="24" band="head" />\n';
        	v_Rows += '         '+'<Row size="24" />\n';
        	v_Rows += '         '+'<Row size="24" band="summ" />\n';

        	//<Columns> : format 
        	v_Columns += '         '+'<Column size="40"  />\n';	//No
        	v_Columns += '         '+'<Column size="122" />\n';	//입고예정일자
        	v_Columns += '         '+'<Column size="100" />\n';	//매장
        	v_Columns += '         '+'<Column size="177" />\n';	//매장명
        	//Columns format 그룹 반복 => for

        	//<Band id="head"> 그룹 : format	
        	v_BandHeadGrp += '         '+'<Cell col="'+ v_HeadGrpIdx +'" rowspan="2" text="No"/>\n';	//No
        	v_HeadGrpIdx +=1;
        	v_BandHeadGrp += '         '+'<Cell col="'+ v_HeadGrpIdx +'" rowspan="2" text="입고예정일자"/>\n';	//입고예정일자
        	v_HeadGrpIdx +=1;
        	v_BandHeadGrp += '         '+'<Cell col="'+ v_HeadGrpIdx +'" colspan="2" text="매장"/>\n';	//매장
        	v_HeadGrpIdx +=2;
        	//<Band id="head"> 그룹 반복 => for

        	//<Band id="head"> 컬럼 : format
        	v_HeadColIdx = 2;
        	v_BandHeadCol += '         '+'<Cell row="1" col="'+ v_HeadColIdx +'" text="Code"/>\n';	//코드
        	v_HeadColIdx +=1;
        	v_BandHeadCol += '         '+'<Cell row="1" col="'+ v_HeadColIdx +'" text="Name"/>\n';	//명
        	v_HeadColIdx +=1;
        	//Band head format 컬럼 반복 => for

        	//<Band id="body"> 컬럼 : format
        	v_BandBody += '         '+'<Cell col="'+ v_BodyColIdx +'" style="align:center middle;" expr="expr:currow+1"/>\n';
        	v_BodyColIdx +=1;
        	v_BandBody += '         '+'<Cell col="'+ v_BodyColIdx +'" displaytype="date" edittype="expr:dataset.getRowType(currow)==2?&apos;date&apos;:&apos;none&apos;" style="align:center;" text="bind:GI_DT"/>\n';
        	
        	v_BodyColIdx +=1;
        	v_BandBody += '         '+'<Cell col="'+ v_BodyColIdx +'" style="align:center;" text="bind:STOR_CD"/>\n';
        	v_BodyColIdx +=1;
        	v_BandBody += '         '+'<Cell col="'+ v_BodyColIdx +'" style="align:left;" text="bind:STOR_NM"/>\n';
        	v_BodyColIdx +=1;
        	//<Band id="body"> 컬럼 반복 => for

        	//<Band id="summary"> 컬럼 : format
        	v_BandSum += '         '+'<Cell/>\n';
        	v_SumColIdx+=1;
        	v_BandSum += '         '+'<Cell col="'+ v_SumColIdx +'" style="align:center middle;" text="SUM"/>\n';
        	v_SumColIdx+=1;
        	v_BandSum += '         '+'<Cell col="'+ v_SumColIdx +'"/>\n';
        	v_SumColIdx+=1;
        	v_BandSum += '         '+'<Cell col="'+ v_SumColIdx +'"/>\n';
        	//<Band id="summary"> 컬럼 반복 => for

        	v_BodyColIdx = 4;
        	v_SumColIdx  = 4;
        	
        	
        	for (var i=0; i< this.ds_headerList.getRowCount(); i++) {
        		v_Columns     += '         '+'<Column size="100" />\n';	//발주수량
        		v_Columns     += '         '+'<Column size="100" />\n';	//출고수량
        		v_BandHeadGrp += '         '+'<Cell col="'+ (v_HeadGrpIdx+i*2) +'" colspan="2" text="'+this.ds_headerList.getColumn(i, "ITEM_NM")+'"/>\n';
        		//v_BandHeadGrp += '         '+'<Cell col="'+ (v_HeadGrpIdx+i*2) +'" colspan="2" text="'+i+'"/>\n';
        		
        		v_BandHeadCol += '         '+'<Cell row="1" col="'+ (v_HeadColIdx+i*2)   +'" text="발주수량"/>\n';	//발주수량
        		v_BandHeadCol += '         '+'<Cell row="1" col="'+ (v_HeadColIdx+i*2+1) +'" text="출고수량"/>\n';	//출고수량
        		
        		v_BandBody    += '         '+'<Cell col="'+ (v_BodyColIdx+i*2)   +'" displaytype="number" mask="#,##0" style="align:right;" text="bind:P'+this.ds_headerList.getColumn(i, "ITEM_CD")+'_ORD_QTY"/>\n';
        		v_BandBody    += '         '+'<Cell col="'+ (v_BodyColIdx+i*2+1) +'" displaytype="number" mask="#,##0" style="align:right;" text="bind:P'+this.ds_headerList.getColumn(i, "ITEM_CD")+'_GO_QTY"/>\n';
        		
        		v_BandSum     += '         '+'<Cell col="'+ (v_SumColIdx+i*2)    +'" displaytype="number" mask="#,##0" style="align:right middle;" expr="expr:nexacro.round(dataset.getSum(&apos;P'+this.ds_headerList.getColumn(i, "ITEM_CD")+'_ORD_QTY&apos;),3)"/>\n';	
        		v_BandSum     += '         '+'<Cell col="'+ (v_SumColIdx+i*2+1)  +'" displaytype="number" mask="#,##0" style="align:right middle;" expr="expr:nexacro.round(dataset.getSum(&apos;P'+this.ds_headerList.getColumn(i, "ITEM_CD")+'_GO_QTY&apos;),3)"/>\n';	
        	}
        	
        	v_BandHead = v_BandHeadGrp + v_BandHeadCol;
        	
        	v_Formats = '<Formats>\n';
        	v_Formats += '<Format id="default">\n';
        	v_Formats += '<Columns>\n';
        	v_Formats += v_Columns;
        	v_Formats += '</Columns>\n';
        	v_Formats += '<Rows>\n';
        	v_Formats += v_Rows;
        	v_Formats += '</Rows>\n';
        	v_Formats += '<Band id="head">\n';
        	v_Formats += v_BandHead;
        	v_Formats += '</Band>\n';	
        	v_Formats += '<Band id="body">\n';
        	v_Formats += v_BandBody;
        	v_Formats += '</Band>\n';	
        	v_Formats += '<Band id="summary">\n';
        	v_Formats += v_BandSum;
        	v_Formats += '</Band>\n';		
        	v_Formats += '</Format>\n';	
        	v_Formats += '</Formats>\n';
        	trace("aaaaaaaaaaaaaaa");
        	//trace(v_Formats);
        	trace("aaa1");
        	
        	trace("aaa2");
        	trace(v_Formats);
        	trace(v_Formats.length);
        	try{	
        		this.Grid00.set_formats(v_Formats);	
        	}
        	catch(e){
        		trace(e.description);                      // description
        		trace(e.message);                        // message 
        	}
        	trace("aaa3");
        	this.Grid00.set_enableredraw(true);	
        	trace("aaa4");
        	//trace(v_Formats);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_190306_onload, this);

        };

        this.loadIncludeScript("RP_84450_test_190306.xfdl");

       
    };
}
)();
