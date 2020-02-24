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
                this.set_name("PopupMenu_M_isPopup_52575_01");
                this.set_titletext("PopupMenu_M_isPopup_52575_01");
                this._setFormPosition(0,0,480,480);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/><Column id=\"levelcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeycolumn\" type=\"STRING\" size=\"256\"/><Column id=\"userdatacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">File</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">F</Col><Col id=\"iconcolumn\">file</Col></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">New</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+N</Col><Col id=\"iconcolumn\">Images::new.png</Col><Col id=\"userdatacolumn\">u_New</Col></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"captioncolumn\">Open</Col><Col id=\"levelcolumn\">1</Col><Col id=\"hotkeycolumn\">CTRL+O</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">open</Col></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"captioncolumn\">Project</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+P</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">projectopen</Col><Col id=\"userdatacolumn\">u_Project</Col></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"captioncolumn\">File..</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+F</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">fileopen</Col><Col id=\"userdatacolumn\">u_File..</Col></Row><Row><Col id=\"idcolumn\">6</Col><Col id=\"captioncolumn\">Save</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+S</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">save</Col><Col id=\"userdatacolumn\">u_Save</Col></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"captioncolumn\">Exit</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+E</Col><Col id=\"iconcolumn\">exit</Col><Col id=\"userdatacolumn\">U_Exit</Col></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"captioncolumn\">Edit</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">E</Col><Col id=\"iconcolumn\">edit0</Col></Row><Row><Col id=\"idcolumn\">9</Col><Col id=\"captioncolumn\">Cut</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+X</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">cut</Col><Col id=\"userdatacolumn\">u_Cut</Col></Row><Row><Col id=\"idcolumn\">10</Col><Col id=\"captioncolumn\">Copy</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+C</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">copy</Col><Col id=\"userdatacolumn\">u_Copy</Col></Row><Row><Col id=\"idcolumn\">11</Col><Col id=\"captioncolumn\">Undo</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+U</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">undo</Col><Col id=\"userdatacolumn\">u_Undo</Col></Row><Row><Col id=\"idcolumn\">12</Col><Col id=\"captioncolumn\">1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col></Row><Row><Col id=\"idcolumn\">13</Col><Col id=\"captioncolumn\">1-1</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"userdatacolumn\">U_1-1</Col></Row><Row><Col id=\"idcolumn\">14</Col><Col id=\"captioncolumn\">1-2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col></Row><Row><Col id=\"idcolumn\">15</Col><Col id=\"captioncolumn\">1-2-1</Col><Col id=\"levelcolumn\">2</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"userdatacolumn\">u_1-2-1</Col></Row><Row><Col id=\"idcolumn\">16</Col><Col id=\"captioncolumn\">1-2-2</Col><Col id=\"levelcolumn\">2</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"enablecolumn\">true</Col></Row><Row><Col id=\"idcolumn\">17</Col><Col id=\"captioncolumn\">1-2-2-1</Col><Col id=\"levelcolumn\">3</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"enablecolumn\">true</Col><Col id=\"userdatacolumn\">u_1-2-2-1</Col></Row><Row><Col id=\"idcolumn\">18</Col><Col id=\"captioncolumn\">submenuX</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"userdatacolumn\">u_submenuX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "3", "7", "357", "37", null, null, this);
            obj.set_text("RP 83432 trackPopup 후 hotkey 동작 안하는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "6", "217", "298", "122", null, null, this);
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "241", "171", "63", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "15", "43", "243", "91", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_userdatacolumn("userdatacolumn");

            obj = new Button("btn_trackPopup", "absolute", "153", "173", "81", "33", null, null, this);
            obj.set_taborder("1");
            obj.set_text("trackPopup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "63", "173", "81", "33", null, null, this);
            obj.set_taborder("1");
            obj.set_text("isPopup()\r\nhotkey: F9");
            obj.set_hotkey("F9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "4", "347", "460", "125", null, null, this);
            obj.set_taborder("2");
            obj.set_text("테스트 방법\r\n\r\n 1. F9 키를 입력\r\n 2. 하단 Textarea에 'PopupMenu00.isPopup() 실행 : false' 문구 출력 확인\r\n 3. trackPopup Button 클릭\r\n 4. 다시 F9키를 입력\r\n 5. 하단 Textarea에 'PopupMenu00.isPopup() 실행 : true' 문구 출력 확인");
            obj.style.set_align("left top");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 480, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("PopupMenu_M_isPopup_52575_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_83432_PopupMenu_M_isPopup_52575_01.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::PopupMenu_menu4.xfdl");		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.btn_trackPopup_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopup(40,40);
        }
        this.Button00_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "PopupMenu00.isPopup() 실행 : " +this.PopupMenu00.isPopup());	
        }

        this.PopupMenu00_onlbuttonup = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "PopupMenu00.isPopup() 실행 : " +this.PopupMenu00.isPopup());
        }

        /*
        //touch device에서 해당 이벤트로 확인
        this.PopupMenu00_onlongpress = function(obj:PopupMenu, e:TOBE.LongPressEventInfo)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "PopupMenu00.isPopup() 실행 : " +this.PopupMenu00.isPopup());
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.PopupMenu00.addEventHandler("onlbuttonup", this.PopupMenu00_onlbuttonup, this);
            this.PopupMenu00.addEventHandler("onlongpress", this.PopupMenu00_onlongpress, this);
            this.btn_trackPopup.addEventHandler("onclick", this.btn_trackPopup_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("RP_83432_PopupMenu_M_isPopup_52575_01.xfdl");

       
    };
}
)();
