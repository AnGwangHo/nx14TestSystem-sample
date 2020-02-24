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
                this.set_name("Progressbar_imageTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ProgressBar("ProgressBar00", "absolute", "5.57%", "138", null, "54", "61.52%", null, this);
            obj.set_taborder("0");
            obj.set_text("ProgressBar00");
            obj.set_pos("100");
            obj.style.set_smooth("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "6.15%", "240", null, "48", "76.95%", null, this);
            obj.set_taborder("1");
            obj.set_text("url image set");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "26.56%", "235", null, "60", "52.34%", null, this);
            obj.set_taborder("2");
            obj.set_text("theme image set");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "7.32%", "329", null, "49", "77.15%", null, this);
            obj.set_taborder("3");
            obj.set_text("pos 40");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "27.64%", "326", null, "57", "57.13%", null, this);
            obj.set_taborder("4");
            obj.set_text("pos 60");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_text("[RP_82158] [201809_Merge] Progressbar image에 url경로를 사용 할 경우 pos 변경시 이미지가 움직이지 않습니다.");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "80", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Progressbar image를 스크립트로 변경 시 제대로 적용되지 않습니다.\r\n\r\n<테스트>\r\n1. 첨부파일을 실행합니다.\r\n2. url image와 theme image 두 버튼을 번갈아 클릭합니다.\r\n3. 이미지가 변경되지 않습니다.");
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
        this.registerScript("RP_82158_Progressbar_imageTest.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ProgressBar00.style.set_endimage("http://172.10.13.91:8080/tomcat.gif");
        	this.ProgressBar00.style.set_startimage("http://172.10.13.91:8080/tomcat.gif");
        	this.ProgressBar00.style.set_progressimage("http://172.10.13.91:8080/tomcat.gif");
        	
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.ProgressBar00.style.set_endimage("theme://images/B_btn_Titlebar_max.png");
        	this.ProgressBar00.style.set_startimage("theme://images/B_btn_Titlebar_max.png");
        	this.ProgressBar00.style.set_progressimage("theme://images/B_btn_Titlebar_max.png");
        	
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.ProgressBar00.set_pos(40);
        	trace("40 pos set =>"+this.ProgressBar00.pos);
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.ProgressBar00.set_pos(60);
        	trace("60 pos set =>"+this.ProgressBar00.pos);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("RP_82158_Progressbar_imageTest.xfdl");

       
    };
}
)();
