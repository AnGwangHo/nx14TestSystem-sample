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
                this.set_name("parent_F");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cargo", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BLKVVD\" type=\"STRING\" size=\"32\"/><Column id=\"BLKBLP\" type=\"STRING\" size=\"32\"/><Column id=\"BLKBNO\" type=\"STRING\" size=\"32\"/><Column id=\"BLKSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKITM\" type=\"STRING\" size=\"32\"/><Column id=\"BLKITD\" type=\"STRING\" size=\"32\"/><Column id=\"BLKUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKKIN\" type=\"STRING\" size=\"32\"/><Column id=\"BLKRAT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKRCU\" type=\"STRING\" size=\"32\"/><Column id=\"BLKRRU\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKLEN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKTYP\" type=\"STRING\" size=\"32\"/><Column id=\"BLKBRE\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKHEI\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKGRW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKSQM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKMEA\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKBLK\" type=\"STRING\" size=\"32\"/><Column id=\"BLKBNK\" type=\"STRING\" size=\"32\"/><Column id=\"BLKSEK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKCLS\" type=\"STRING\" size=\"32\"/><Column id=\"BLKPER\" type=\"STRING\" size=\"32\"/><Column id=\"BLKRTN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKPCK\" type=\"STRING\" size=\"32\"/><Column id=\"BLKEXU\" type=\"STRING\" size=\"32\"/><Column id=\"BLKERU\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKAMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKUAM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKCOL\" type=\"STRING\" size=\"32\"/><Column id=\"BLKPTE\" type=\"STRING\" size=\"32\"/><Column id=\"BLKDOK\" type=\"STRING\" size=\"32\"/><Column id=\"BLKPRT\" type=\"STRING\" size=\"32\"/><Column id=\"BLKEXT\" type=\"STRING\" size=\"32\"/><Column id=\"BLKINO\" type=\"STRING\" size=\"32\"/><Column id=\"BLKMAN\" type=\"STRING\" size=\"32\"/><Column id=\"BLKTNO\" type=\"STRING\" size=\"32\"/><Column id=\"TOTKGS\" type=\"INT\" size=\"4\"/><Column id=\"TOTCBM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"FRTAUT\" type=\"STRING\" size=\"32\"/><Column id=\"CARAUT\" type=\"STRING\" size=\"32\"/><Column id=\"RTNUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMTUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLKRMK\" type=\"STRING\" size=\"32\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">1</Col><Col id=\"BLKITM\">VOWCC</Col><Col id=\"BLKITD\">VOLKSWAGEN CC</Col><Col id=\"BLKUNT\">866</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.8</Col><Col id=\"BLKTYP\">P2</Col><Col id=\"BLKBRE\">1.855</Col><Col id=\"BLKHEI\">1.42</Col><Col id=\"BLKGRW\">1691</Col><Col id=\"BLKSQM\">8.9</Col><Col id=\"BLKMEA\">12.644</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">866</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">394030</Col><Col id=\"BLKUAM\">394030</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">1464406</Col><Col id=\"TOTCBM\">10949.704</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">2</Col><Col id=\"BLKITM\">GO7VT</Col><Col id=\"BLKITD\">GOLF 7 VARIANT (WAGON)</Col><Col id=\"BLKUNT\">9</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.255</Col><Col id=\"BLKTYP\">P1</Col><Col id=\"BLKBRE\">1.8</Col><Col id=\"BLKHEI\">1.45</Col><Col id=\"BLKGRW\">1499</Col><Col id=\"BLKSQM\">7.65</Col><Col id=\"BLKMEA\">11.106</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">9</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">4095</Col><Col id=\"BLKUAM\">4095</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">13491</Col><Col id=\"TOTCBM\">99.954</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">3</Col><Col id=\"BLKITM\">GO7VT</Col><Col id=\"BLKITD\">GOLF 7 VARIANT (WAGON)</Col><Col id=\"BLKUNT\">5</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.255</Col><Col id=\"BLKTYP\">P1</Col><Col id=\"BLKBRE\">1.8</Col><Col id=\"BLKHEI\">1.45</Col><Col id=\"BLKGRW\">1482</Col><Col id=\"BLKSQM\">7.65</Col><Col id=\"BLKMEA\">11.106</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">5</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">2275</Col><Col id=\"BLKUAM\">2275</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">7410</Col><Col id=\"TOTCBM\">55.53</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">4</Col><Col id=\"BLKITM\">GO7VT</Col><Col id=\"BLKITD\">GOLF 7 VARIANT (WAGON)</Col><Col id=\"BLKUNT\">11</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.255</Col><Col id=\"BLKTYP\">P1</Col><Col id=\"BLKBRE\">1.8</Col><Col id=\"BLKHEI\">1.45</Col><Col id=\"BLKGRW\">1384</Col><Col id=\"BLKSQM\">7.65</Col><Col id=\"BLKMEA\">11.106</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">11</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">5005</Col><Col id=\"BLKUAM\">5005</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">15224</Col><Col id=\"TOTCBM\">122.166</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">5</Col><Col id=\"BLKITM\">GO7VT</Col><Col id=\"BLKITD\">GOLF 7 VARIANT (WAGON)</Col><Col id=\"BLKUNT\">266</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.255</Col><Col id=\"BLKTYP\">P1</Col><Col id=\"BLKBRE\">1.8</Col><Col id=\"BLKHEI\">1.45</Col><Col id=\"BLKGRW\">1471</Col><Col id=\"BLKSQM\">7.65</Col><Col id=\"BLKMEA\">11.106</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">266</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">121030</Col><Col id=\"BLKUAM\">121030</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">391286</Col><Col id=\"TOTCBM\">2954.196</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">6</Col><Col id=\"BLKITM\">BTL</Col><Col id=\"BLKITD\">VW BEETLE</Col><Col id=\"BLKUNT\">212</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">410</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.28</Col><Col id=\"BLKTYP\">P2</Col><Col id=\"BLKBRE\">1.81</Col><Col id=\"BLKHEI\">1.485</Col><Col id=\"BLKGRW\">1533</Col><Col id=\"BLKSQM\">7.74</Col><Col id=\"BLKMEA\">11.504</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">212</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">86920</Col><Col id=\"BLKUAM\">86920</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">324996</Col><Col id=\"TOTCBM\">2438.848</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKVVD\">LYN084</Col><Col id=\"BLKBLP\">EUKO</Col><Col id=\"BLKBNO\">KRDE1500850</Col><Col id=\"BLKSEQ\">7</Col><Col id=\"BLKITM\">VOWCC</Col><Col id=\"BLKITD\">VOLKSWAGEN CC</Col><Col id=\"BLKUNT\">2</Col><Col id=\"BLKKIN\">UNT</Col><Col id=\"BLKRAT\">455</Col><Col id=\"BLKRCU\">USD</Col><Col id=\"BLKRRU\">1</Col><Col id=\"BLKLEN\">4.8</Col><Col id=\"BLKTYP\">P2</Col><Col id=\"BLKBRE\">1.855</Col><Col id=\"BLKHEI\">1.42</Col><Col id=\"BLKGRW\">1641</Col><Col id=\"BLKSQM\">8.9</Col><Col id=\"BLKMEA\">12.644</Col><Col id=\"BLKBLK\"/><Col id=\"BLKBNK\"/><Col id=\"BLKSEK\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\">UNT</Col><Col id=\"BLKRTN\">2</Col><Col id=\"BLKPCK\">C</Col><Col id=\"BLKEXU\">USD</Col><Col id=\"BLKERU\">1</Col><Col id=\"BLKAMT\">910</Col><Col id=\"BLKUAM\">910</Col><Col id=\"BLKCOL\">WWG</Col><Col id=\"BLKPTE\">VAGT1A</Col><Col id=\"BLKDOK\">F</Col><Col id=\"BLKPRT\">Y</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">3282</Col><Col id=\"TOTCBM\">25.288</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/><Col id=\"ROW_TYPE\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row><Row><Col id=\"BLKITM\"/><Col id=\"BLKUNT\">0</Col><Col id=\"BLKRAT\">0</Col><Col id=\"BLKRCU\"/><Col id=\"BLKRRU\">0</Col><Col id=\"BLKLEN\">0</Col><Col id=\"BLKBRE\">0</Col><Col id=\"BLKHEI\">0</Col><Col id=\"BLKGRW\">0</Col><Col id=\"BLKSQM\">0</Col><Col id=\"BLKMEA\">0</Col><Col id=\"BLKCLS\"/><Col id=\"BLKPER\"/><Col id=\"BLKRTN\">0</Col><Col id=\"BLKERU\">0</Col><Col id=\"BLKAMT\">0</Col><Col id=\"BLKUAM\">0</Col><Col id=\"BLKEXT\"/><Col id=\"BLKINO\"/><Col id=\"BLKMAN\"/><Col id=\"BLKTNO\"/><Col id=\"TOTKGS\">0</Col><Col id=\"TOTCBM\">0</Col><Col id=\"FRTAUT\">Y</Col><Col id=\"CARAUT\">Y</Col><Col id=\"RTNUNT\">0</Col><Col id=\"AMTUNT\">0</Col><Col id=\"BLKRMK\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">test1</Col><Col id=\"Column1\">test2</Col><Col id=\"Column2\">test3</Col><Col id=\"Column3\">test4</Col><Col id=\"Column4\">test5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "50", "242", "176", "57", null, null, this);
            obj.set_taborder("0");
            obj.set_text("showModal");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "50", "320", "176", "57", null, null, this);
            obj.set_taborder("1");
            obj.set_text("showModeless");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "50", "392", "176", "57", null, null, this);
            obj.set_taborder("2");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "303", "263", "276", "54", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "289", "433", "415", "198", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column0\" editdisplay=\"display\" tooltiptext=\"32132132132123\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column1\" mask=\"#,##0\" editdisplay=\"display\" tooltiptext=\"32132132132123\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "47", "466", "178", "59", null, null, this);
            obj.set_taborder("5");
            obj.set_text("showmodalwindow");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "47", "550", "161", "51", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "653", "342", "203", "81", null, null, this);
            obj.set_taborder("7");
            obj.set_text("setFocus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "10", "800", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("[RP_79400] [nexacro14] 팝업창에서 부모창의 Dataset 을 copyData 한 뒤 값을 수정하면 모든 값이 사라지는 현상");
            obj.style.set_color("blueviolet");
            obj.style.set_font("bold 10 verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "40", "800", "180", null, null, this);
            obj.set_taborder("9");
            obj.set_text("1. 현상\r\n 팝업창에서 부모창의 Dataset 을 copyData 한 뒤 값을 수정하면 모든 값이 사라지는 현상이 발생이 됩니다.\r\n 수정된 값만 존재 하고 다른 값들은 모두 사라지게 됩니다.\r\n\r\n- RP 78530 처리 시 발생된 것으로 보임 (MAIN 44597까지는 정상)\r\n\r\n[테스트 방법]\r\n1. parent_F.xfdl 부모, Child_FT.xfdl 자식\r\n2. 부모창에서 showmodal 버튼을 클릭합니다.\r\n3. 팝업창에서 CopyData 버튼을 클릭합니다.\r\n4. saveXML 버튼을 클릭하여 데이터가 들어온 것을 확인합니다.\r\n5. 아무 Edit 창의 값을 수정합니다.\r\n6. 수정 후에 saveXML 버튼을 클릭합니다.\r\n7. 출력된 값을 확인하면 수정한 데이터만 들어가져 있고 다른 데이터는 사라지게 됩니다.");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("parent_F");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("RP_79400_parent_F.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();		
        		//objChild.init("Modal", "absolute", 0, 0, 350, 153, null, null, "PopUP::Child_FT.xfdl");
        		objChild.init("Modal", "absolute", 0, 0, 350, 153, null, null, "Base::RP_79400_Child_FT.xfdl");
        		//objChild.init("Modal", "absolute", 10, 10, 100, 100, null, null, "PopUP::Child_Web.xfdl");
        		
        		//objChild.style.set_overlaycolor("blue");
        		//objChild.set_autosize(false);	
        		objChild.set_showtitlebar(true);	
        		objChild.set_resizable(true);	
        		
        		objChild.showModal("Modal", parentFrame, {a:'전달값'}, this, "fn_PopCallback");
        }

        this.Button01_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();
        		objChild.init("Modeless", "absolute", 10, 10, 100, 100, null, null, "Base::RP_79400_Child_FT.xfdl");	
        		
        		//childFrame.set_autosize(false);	
        		//childFrame.set_showtitlebar(false);	
        		objChild.set_layered(true);	
        		
        		objChild.showModeless("Modeless", parentFrame, {a:'전달값'}, this);
        }

        this.Button02_onclick = function(obj,e)
        {	
        	application.open("open_Pop", "Base::RP_79400_Child_FT.xfdl", this.getOwnerFrame(), {a:'open 전달값'}, "resizable=false", 1000, 10);
        	//application.open("open_Pop", "PopUP::Child_Web.xfdl", this.getOwnerFrame(), {a:'open 전달값'}, "showontaskbar=true", 10, 10);
        	//application.open("open_Pop", "PopUP::Child_WebEdi.xfdl", this.getOwnerFrame(), {a:'open 전달값'}, "showontaskbar=true", 10, 10);
        	//application.open("open_Pop", "test_Group::test_171101.xfdl", this.getOwnerFrame(), {a:'open 전달값'}, "showontaskbar=true", 10, 10);
        }

        this.fn_PopCallback = function(a,b)
        {
        	trace(a); //Popup ID 값
        	trace(b); //Popup Close시 전달값
        	trace(this);
        	if(a == "Modal")
        	{
        		this.Dataset00.set_rowposition(0);
        		this.Grid00.setCellPos(1);
        		this.Grid00.showEditor();
        	}
        }

        
        this.parent_F_onkeydown = function(obj,e)
        {
        	trace("parent Enter");
        }

        this.Button03_onclick = function(obj,e)
        {	
        	
        	var cf = new ChildFrame;
        		cf.init("cf_modal", "absolute", 0, 0, 500, 500);
        		cf.set_formurl("Base::RP_79400_Child_FT.xfdl");
        		var ret = system.showModalWindow(cf, "cf_modal", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this);
        		//var ret = system.showModalSync(cf, "cf_modal", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this);
        }

        this.Button04_onclick = function(obj,e)
        {
        	application.popupframes["open_Pop"].form.set_enableevent(false);
        	application.popupframes["open_Pop"].form.close();
        }

        this.fn_test = function()
        {
        	this.reload();
        }

        this.Button05_onclick = function(obj,e)
        {
        	application.popupframes["open_Pop"].form.setFocus();
        	
        }

        this.Grid00_onenterdown = function(obj,e)
        {
        	this.Dataset00.insertRow(0);
        	var objChild = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();		
        		objChild.init("Modal", "absolute", 10, 10, 100, 100, null, null, "Base::RP_79400_Child_FT.xfdl");
        		
        		//objChild.style.set_overlaycolor("blue");
        		//objChild.set_autosize(false);	
        		objChild.set_showtitlebar(true);	
        		objChild.set_resizable(true);	
        		
        		objChild.showModal("Modal", parentFrame, {a:'전달값'}, this, "fn_PopCallback");
        }

        this.Edit00_onkeyup = function(obj,e)
        {
        	trace(e.keycode);
        }

        this.parent_F_onload = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cargo.addEventHandler("oncolumnchanged", this.ds_cargo_oncolumnchanged, this);
            this.addEventHandler("onload", this.parent_F_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Edit00.addEventHandler("onkeyup", this.Edit00_onkeyup, this);
            this.Grid00.addEventHandler("onenterdown", this.Grid00_onenterdown, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("RP_79400_parent_F.xfdl");

       
    };
}
)();
