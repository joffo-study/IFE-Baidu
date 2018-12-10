function filterData() {
    return sourceData.filter((item) => {
        return checkType.region.indexOf(item.region)!==-1 && (checkType.product.indexOf(item.product)!==-1);
    });
}


function rendTable(data){
    //console.log(data);
var rarr = checkType.region.length;
var parr = checkType.product.length;
var str = "<table><thead><tr><th>商品</th><th>地区</th>";
if(rarr===1 && parr>1){
    str = "<table><thead><tr><th>地区</th><th>商品</th>";
}
for(var i=1; i<13; i++){
    str += "<th>" +i + "月</th>"
}
str += "</tr></thead><tbody>";

if(rarr>=1 && parr===1){
        for(var i=0; i<data.length; i++){
            if(i==0){
                str += "<tr><th rowspan='" +data.length + "'> " + data[i].product +"</th><th>"+data[i].region+"</th>";
            }else {
                str += "<tr><th>" + data[i].region +"</th>";
            }
            for(var j=0; j<data[i].sale.length; j++){
                str += "<th>" + data[i].sale[j]+ "</th>";
            }
            str += "</tr>";
        }
    }else if(rarr===1 && parr>1){
        for(var i=0; i<data.length; i++){
            if(i==0){
                str += "<tr><th rowspan='" + data.length + "'> " + data[i].region +"</th><th>" + data[i].product +"</th>";
            }else {
                str += "<tr><th>" + data[i].product +"</th>";
            }
            for(var j=0; j<data[i].sale.length; j++){
                str += "<th>" + data[i].sale[j]+ "</th>";
            }
            str += "</tr>";
        }
    }else if(rarr>1 && parr>1){
        //按照商品名称排序
        /*data.sort(function(a, b){
            return a.product>b.product? 1:-1;
        });*/
       // console.log(data);
        var flag = data[0].product;
        var count =0;
        for(var i=0; i<data.length; i++){
            delete data[i].count;//清除上一次记录的count值
            if(flag!==data[i].product){
                flag = data[i].product;
                data[i-count].count = count;
                count = 1;
            }else {
                ++count;
            }
        }
        data[data.length-count].count=count;//定义最后一行

        for(var i=0; i<data.length; i++){
            if(data[i].count){
                str += "<tr><th rowspan='" +data[i].count + "'>" + data[i].product +"</th><th>"+data[i].region+"</th>";
            }else {
                str += "<tr><th>" + data[i].region +"</th>";
            }
            for(var j=0; j<data[i].sale.length; j++){
                str += "<th>" + data[i].sale[j]+ "</th>";
            }
            str += "</tr>";
        }
    }
    str += "</tbody></table>";
    table.innerHTML = str;
}
