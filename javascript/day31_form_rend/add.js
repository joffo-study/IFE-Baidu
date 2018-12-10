

//定义checkbox选中的数据
var checkType = {
    region:[1,1,1],
    product:[1,11,1]
}
var regionArr = [
    {
        value: 'all',
        text: '全选',
    },
    {
        value:1,
        text:'华北',
    },{
        value:2,
        text:'华南',
    },{
        value:3,
        text:'华东',
    }
];
var productArr = [
    {
        value: 'all',
        text: '全选',
    },
    {
        value:1,
        text:'手机',
    },{
        value:2,
        text:'智能音箱',
    },{
        value:3,
        text:'笔记本',
    }
]

var table = document.querySelector("#table-wrapper");
var product = document.querySelector("#product-radio-wrapper");
var region = document.querySelector("#region-radio-wrapper");


rendTable(sourceData);
rendCheck(product, productArr);
rendCheck(region, regionArr);
