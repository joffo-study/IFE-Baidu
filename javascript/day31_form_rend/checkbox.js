

function rendCheck(dom, data) {
    //var arr =data || [];
    var type = dom.dataset.type;//看的是html中input的data-type
    var str ="";
    //arr.unshift();
    for(var i=0; i<data.length; i++){
        str += "<label><input type=checkbox data-text='" + data[i].text + "' value='"+ data[i].value + "'>" +data[i].text+ "</label>";
    }
    dom.innerHTML = str;
    dom.onclick = function(e) {
        if (!e.target.value) {
            return;
        }
        var vel = e.target.value;
        var check = dom.querySelectorAll("input");
        var checkArr = [];
        //console.log(vel);
        if(vel === "all") {
            if(e.target.checked) {
                for(var i=0; i<check.length; i++){
                    check[i].checked = true;
                    if(check[i].value!=='all'){
                        checkArr.push(check[i].dataset.text);
                    } 
                }
            }else {
                for(var i=0; i<check.length; i++){
                    check[i].checked = false;
                }
            }
        }else {
            for(var i=1; i<check.length; i++){
                if(check[i].checked){
                    //if(check[i].value!=="all"){}
                    checkArr.push(check[i].dataset.text);
                }
            }
        }

        if(vel!=="all" && checkArr.length===0){//当只有一个选中,再按一次就没有一个选中,长度为0
            e.target.checked = true;
            //console.log(e.target.dataset.text);
            checkArr.push(e.target.dataset.text); 
        }
        checkType[type] = checkArr;
        rendTable(filterData());

        if(checkArr.length+1===check.length){
            check[0].checked = true;
        }else {
            check[0].checked = false;
        }
        
    }

}