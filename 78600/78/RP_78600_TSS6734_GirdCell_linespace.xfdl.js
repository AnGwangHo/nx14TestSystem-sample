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
                this.set_name("PopupDivGrid");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROP\" type=\"STRING\" size=\"256\"/><Column id=\"NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL\">0</Col><Col id=\"PROP\">Appearance</Col><Col id=\"NOTE\"/><Col id=\"image\"/></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"PROP\">async</Col><Col id=\"NOTE\">urlにてFormファイルを参照する際の通信タイプ（同期・非同期）を設定します。&#10;asyncプロパティがtrueの場合は、PopupDivの子にアクセス可能な時点はurlのonloadイベントです。&#10;asyncプロパティがfalseの場合は、URLが変更された直後にDivの子にアクセスすることができます。</Col><Col id=\"image\"/></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"PROP\">scrollbars</Col><Col id=\"NOTE\">PopupDivのスクロールバー表示に関する設定。&#10;    （PopupDiv内部のコンテンツに応じて個別にスクロールバーが生成されます。）</Col><Col id=\"image\"/></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"PROP\">url</Col><Col id=\"NOTE\">Formファイルの参照先。例：&quot;Base::SampleForm.xfdl&quot;</Col><Col id=\"image\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid02", "absolute", "40", "326", "904", "232", null, null, this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_binddataset("ds00");
            obj.set_scrollbars("none");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_enable("false");
            obj.style.set_selectline("1 solid #808080ff");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"413\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell style=\"padding:3 0 3 0;background:whitesmoke;\" text=\"Property\"/><Cell col=\"1\" style=\"padding:3 0 3 0;background:whitesmoke;\" text=\"説明\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"padding:5 0 5 5;line:1 solid #808080ff ;background:white;background2:white;color:black;color2:black;font:10 Meiryo UI,Helvetica;selectbackground:white;selectcolor:black;selectfont:10 Meiryo UI,Helvetica;selectline:1 solid #808080ff ;controlborder:1 solid #808080ff ;\" text=\"bind:PROP\" treelevel=\"bind:LEVEL\" treeexpandimage=\"bind:image\" treecollapseimage=\"bind:image\" treeitemimage=\"bind:image\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;padding:5 0 5 5;line:1 solid #808080ff ;background:white;background2:white;color:black;color2:black;font:10 Meiryo UI,Helvetica;selectbackground:white;selectcolor:black;selectfont:10 Meiryo UI,Helvetica;selectline:1 solid #808080ff ;linespace: ;controlborder:1 solid #808080ff ;\" text=\"bind:NOTE\" wordwrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "40", "650", "904", "232", null, null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_binddataset("ds00");
            obj.set_scrollbars("none");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_enable("false");
            obj.style.set_selectline("1 solid #808080ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"413\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell style=\"padding:3 0 3 0;background:whitesmoke;\" text=\"Property\"/><Cell col=\"1\" style=\"padding:3 0 3 0;background:whitesmoke;\" text=\"説明\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"padding:5 0 5 5;line:1 solid #808080ff ;background:white;background2:white;color:black;color2:black;font:10 Meiryo UI,Helvetica;selectbackground:white;selectcolor:black;selectfont:10 Meiryo UI,Helvetica;selectline:1 solid #808080ff ;controlborder:1 solid #808080ff ;\" text=\"bind:PROP\" treelevel=\"bind:LEVEL\" treeexpandimage=\"bind:image\" treecollapseimage=\"bind:image\" treeitemimage=\"bind:image\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;padding:5 0 5 5;line:1 solid #808080ff ;background:white;background2:white;color:black;color2:black;font:10 Meiryo UI,Helvetica;selectbackground:white;selectcolor:black;selectfont:10 Meiryo UI,Helvetica;selectline:1 solid #808080ff ;linespace:10;controlborder:1 solid #808080ff ;\" text=\"bind:NOTE\" wordwrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.39%", "262", null, "60", "63.28%", null, this);
            obj.set_taborder("2");
            obj.set_text("cell>linespace 설정 안함");
            obj.style.set_font("bold 16 Meiryo UI");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4.2%", "582", null, "46", "43.75%", null, this);
            obj.set_taborder("3");
            obj.set_text("cell>linespace 설정：디그라데이션（IE,Edge）");
            obj.style.set_font("bold 16 Meiryo UI");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("[RP_78600] Grid Cell의 linespace를 설정하면, IE, Edge 브라우저에서 문자열이 겹쳐서 표시되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "220", null, null, this);
            obj.set_taborder("5");
            obj.set_text("[디그라데이션]\r\nGrid Cell의 linespace를 설정하면, IE, Edge 브라우저에서 문자열이 겹쳐서 표시되는 현상\r\n\r\n[참조]\r\nRP.77347 에서 Runtime 전용으로 linespace 프로퍼티가 추가된 것으로 보입니다만,\r\n해당 프로퍼티에 값을 설정하면, IE와 Edge브라우저에 영향이 발생 합니다.\r\n\r\n[발생브라우저]\r\nIE11, Edge에서 발생\r\nChrome, Firefox에서 발생하지 않음\r\n\r\n[확인방법]\r\n1. 첨부파일을 IE, Edge에서 실행\r\n2. Grid의 Cell에 linespace를 설정한 두번째 Grid의 문자열이 겹쳐서 표시되는 것을 확인\r\n3. Grid의 Cell에 linespace를 설정하지 않은 첫번째 Grid의 문자열은 정상적으로 표시되는 것을 확인\r\n\r\ncf)\r\n런타임 수정(RP.77347)으로 인해 IE11, Edge 에서 디그라데이션 발생");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_78600_TSS6734_GirdCell_linespace.xfdl");

       
    };
}
)();
