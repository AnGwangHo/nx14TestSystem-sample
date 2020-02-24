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
                this.set_name("TEST0517_1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid02", "absolute", "22", "151", "366", "273", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "442", "141", "90", "39", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "442", "224", "94", "40", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "442", "316", "97", "44", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "3", "7", "547", "37", null, null, this);
            obj.set_taborder("4");
            obj.set_text("RP 85230 DeleteMultiRows 동작시 에러");
            obj.style.set_color("blueviolet");
            obj.style.set_font("verdana,10,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0.2%", "52", null, "92", "0.78%", null, this);
            obj.set_taborder("5");
            obj.set_text("테스트 방법\r\n\r\n 1. Button00을 2번이상 클릭하여 addrow 처리\r\n 2. Button01을 클릭하여 DeleteMultiRows 실행\r\n 3. 브라우저의 콘솔화면에서 오류 발생하는지 확인");
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
        this.registerScript("RP_85230_TEST0517_1.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        		var nRow = this.Dataset02.addRow();
        		this.Dataset02.setColumn(nRow, "CHK", 1);
        }

        this.Button01_onclick = function(obj,e)
        {
        	//this.Dataset02.applyChange();
        		var chk = 0;
        	var arrDel = new Array();
        	for(var k = 0; k<this.Dataset02.getRowCount(); k++){// - 1 ; k > -1 ; k--){		
        		if(this.Dataset02.getColumn(k,"CHK") == "1"){
        			arrDel[chk] = k;
        			chk++;
        		}
        	}
        	
        	if(chk == 0){
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}
        	trace("==arrDel==="+arrDel);
        	this.Dataset02.deleteMultiRows(arrDel);
        }

        this.Button02_onclick = function(obj,e)
        {
        	var chk = 0;
        	var arrDel = new Array();
        	//for(var k = 0; k<this.Dataset02.getRowCount(); k++){// - 1 ; k > -1 ; k--){		
        	for(var k = this.Dataset02.getRowCount(); k > -1 ; k--){		
        		if(this.Dataset02.getColumn(k,"CHK") == "1"){
        			this.Dataset02.deleteRow(k);
        			arrDel[chk] = k;
        			chk++;
        		}
        	}
        	
        	if(chk == 0){
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}
        	trace("==arrDel==="+arrDel);
        //	this.Dataset02.deleteMultiRows(arrDel);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("RP_85230_TEST0517_1.xfdl");

       
    };
}
)();
