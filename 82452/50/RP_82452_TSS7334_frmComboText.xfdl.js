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
                this.set_name("frmComboText");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,922);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">0</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">12</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">13</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">14</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">15</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">16</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">12</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">13</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">14</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">15</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">16</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">12</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">13</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">14</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">15</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">16</Col><Col id=\"Column2\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "38", "198", "300", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("8");

            obj = new PopupDiv("PopupDiv00", "absolute", "400", "295", "363", "778", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("black");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox00", "absolute", "30", "124", "300", "126", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj = new TextArea("TextArea00", "absolute", "30", "288", "300", "116", null, null, this.PopupDiv00);
            obj.set_taborder("1");
            obj.set_value("aaaa\r\nbbbb\r\ncccc\r\ndddd\r\neeee\r\nffff\r\ngggg\r\nhhhh\r\niiii\r\njjjj\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\n");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "30", "442", "300", "300", null, null, this.PopupDiv00);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "30", "29", "300", "54", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("8");

            obj = new Button("Button00", "absolute", "400", "201", "120", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "38", "373", "300", "126", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");

            obj = new TextArea("TextArea00", "absolute", "38", "521", "300", "116", null, null, this);
            obj.set_taborder("5");
            obj.set_value("aaaa\r\nbbbb\r\ncccc\r\ndddd\r\neeee\r\nffff\r\ngggg\r\nhhhh\r\niiii\r\njjjj\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\naaaa\r\n");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "38", "667", "300", "300", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("[RP_82452] [201809정기] Popup계 컴포넌트의 스크롤 동작오류");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "140", null, null, this);
            obj.set_taborder("8");
            obj.set_text("1. 현상\r\n 모바일 브라우저에서 Popup 류 콤포넌트가 스크롤이 되지 않는 현상\r\n\r\n - 9월정기 47624 에서 발생 (2018.08.08 - RP79702)\r\n\r\n2. 테스트방법\r\n 1) 첨부파일 실행\r\n 2) 화면 상단의 콤보 버튼 클릭 후 표시된 리스트를 터치 후 스크롤 동작 실행\r\n     => 스크롤 동작하지 않음 (NG)\r\n 3) [PopupDiv] 버튼 클릭 후 PopupDiv 및 ListBox, Grid에서 터치 후 스크롤 동작 실행\r\n     => 스크롤 동작하지 않음 (NG)");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 363, 778, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("black");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 922, this,
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
        this.registerScript("RP_82452_TSS7334_frmComboText.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj,0,0);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopupByComponent(obj,0,0);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_82452_TSS7334_frmComboText.xfdl");

       
    };
}
)();
