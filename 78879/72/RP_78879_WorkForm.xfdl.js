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
                this.set_name("WorkForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">fdsafds</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">afdsaf</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">dsafds</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">afds</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">af</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">dsafds</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">afdsafdsa</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">fdsafdsa</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">fdsa</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">fdsadsafs</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "5.08%", "170", null, "647", "8.11%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[RP_78879] [nexacro14] Div 안에 있는 Form 변수 가져 올 경우 undefined 출력이 되는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "120", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 버그로 수정\r\n\r\n2. 2월 정기 변경집합 44172번 처리 후 발생 하고 있습니다.\r\n\r\n3. 샘플 프로젝트 실행하여 trace를 확인하면 \r\n   mainFrom---> undefined 가 찍히고 있음.\r\n   mainFrom---> 테스트입니다. 가 찍혀야 함.\r\n\r\n4. 이벤트 순서가 sub_From_onload 가 main_Form_onload 보다 먼저 발생해야 하는데 늦게 발생해서 발생하는 것으로 보임.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WorkForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_78879_WorkForm.xfdl", function() {
         
        this.WorkForm_onload = function(obj,e)
        {	
        	this.Div00.set_url("Base::RP_78879_main_Form.xfdl");  
        }

        this.WorkForm_onbeforeclose = function(obj,e)
        {
        	trace(e.fromobject.name + "    "+ obj.name  + " <><><><> " + this.name) 
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        	var childFrame = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();
        	
        	var popupWidth = 640;
        	var popupHeight = 480;
        	var popupLeft = 70;
        	var popupTop = 70;						
        	
        	childFrame.init("commPopMadal11", "absolute" , 0, 0, 200, 200, null,null, "Base::test1.xfdl");
        	//childFrame.style.set_overlaycolor("blue");
        	childFrame.showModal(parentFrame, "", this, "fn_callback"); 
        }

        this.Button00_onclick = function(obj,e)
        {
        	
        	//system.execBrowser("http://172.10.13.73:8080/nexacro14/Install/x_installAX_SMT.html");
        	//application.exit();
        }

        this.WorkForm_onrbuttondown = function(obj,e)
        {
        	
        }

        this.WorkForm_onlbuttondown = function(obj,e)
        {
        	//this.PopupMenu00.trackPopup(e.clientX+155, e.clientY+150);
        }

        this.WorkForm_onactivate = function(obj,e)
        {
        	trace("workForm");
        }

        this.Button01_onclick = function(obj,e)
        {
        	var childFrame = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();
        	
        	var popupWidth = 640;
        	var popupHeight = 480;
        	var popupLeft = 70;
        	var popupTop = 70;						
        	
        	childFrame.init("commPopMadal11", "absolute" , 0, 0, 200, 200, null,null, "Base::test1.xfdl");
        	//childFrame.style.set_overlaycolor("blue");
        	childFrame.showModal(parentFrame, "", this, "fn_callback"); 
        	//application.open("commPopMadal11", "Base::test1.xfdl", parentFrame, "", "", 0, 0);
        }

        this.fn_callback = function()
        {
        	var objFrame = application.mainframe.VFrameSet.HFrameSet.VFrameSet2.WorkFrameSet.all[1];
        		objFrame.setFocus();
        }
        this.Button02_onclick = function(obj,e)
        {
        	this.Plugin00.key = "nexacroTest";     
        	 this.Plugin00.bjson = "http://172.10.13.73:8080/nexacro14/MDI_PRO/start_dev.json";	 	 
        	 this.Plugin00.onlyone  = false;			 	 
        	 
        	 this.Plugin00.makeshortcut("test", "http://172.10.13.73:8080/nexacro14/Install/img/cstop.ico", "desktop", true);
        		 
        }

        this.Button03_onclick = function(obj,e)
        {
        	application.gv_test.fn_test();
        }

        this.WorkForm_onkeyup = function(obj,e)
        {	
        	if(e.keycode == 13)
        	{
        		this.close();
        	}
        }

        this.Static05_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WorkForm_onload, this);
            this.addEventHandler("onbeforeclose", this.WorkForm_onbeforeclose, this);
            this.addEventHandler("onlbuttondown", this.WorkForm_onlbuttondown, this);
            this.addEventHandler("onactivate", this.WorkForm_onactivate, this);
            this.addEventHandler("onkeyup", this.WorkForm_onkeyup, this);

        };

        this.loadIncludeScript("RP_78879_WorkForm.xfdl");

       
    };
}
)();
