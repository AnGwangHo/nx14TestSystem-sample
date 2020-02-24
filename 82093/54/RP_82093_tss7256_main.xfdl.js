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
                this.set_name("tss7256_main");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "320", null, null, "0", "-320", this);
            obj.set_taborder("0");
            obj.style.set_border("3 solid #808080ff");
            obj.set_url("Base::RP_82093_tss7256_sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "1100", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_82093] Div로 연결된 폼안의 버튼의 defaultbutton속성이 true일때, Edit에 포커스가 있는 상태에서 엔터키를 입력해서 Div의 url변경시 스크립트에러가 발생합니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "1100", "270", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div 의 url 에 연결된 화면내에서 자기 자신의 url 을 변경시 url 변경은 되지만 개발자 콘솔에서 참조 오류(TypeError)가 발생합니다\r\n- 현상확인브라우저 : Chrome, IE11, FF (런타임은 오류 발생 안함)\r\n- 2018.05.29.01(14.0.1.2600) 브랜치 변경집합 45760 부터 오류가 발생합니다\r\n\r\n[현상]\r\n1. Div로 연결된 폼에 Edit, Button을 배치.\r\n2. 폼내에서 엔터키를 누르면 Button의 onclick이벤트가 실행되도록 Button의 defaultbutton속성을 true로 설정.\r\n3. Button의 onclick이벤트에서는 Div의 url을 변경.\r\n\r\n위의 설정으로 실행시, Edit에 포커스가 있는 상태에서 엔터키를 누르면 예상대로 화면전환(Div의 url변경)은 되지만,\r\n아래와 같은 스크립트 에러가 발생합니다.\r\n[스크립트에러]\r\nSCRIPT5007: 정의되지 않음 또는 null 참조인 '0' 속성을 가져올 수 없습니다.\r\n\r\nRuntime브라우저에서는 발생하지 않고, HTML5브라우저에서 발생합니다.\r\n\r\n[확인방법]\r\n1. 첨부폼들을 배치.\r\n2. tss7256_main.xfdl 폼을 실행.\r\n3. Edit에 포커스 주고 엔터키를 누름.\r\n4. 버튼이벤트에서 Div의 url을 변경 -> 변경된 폼이 로드됨 (OK)\r\n5. 브라우저의 개발자모드에서 확인시 스크립트에러가 발생함. (NG)");
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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::RP_82093_tss7256_sub.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RP_82093_tss7256_main.xfdl");
        this.loadPreloadList();
       
    };
}
)();
