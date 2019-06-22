window.addEventListener('load',function () {
    let main=document.querySelectorAll('.echarts');
    let bar=echarts.init(main[0]);
    let barOption = {
        xAxis: {
            type: 'category',
            data: ['A','X','Y','B','T','Z']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [12, 8, 15, 3, 5, 1],
            type: 'bar'
        }]
    };

    bar.setOption(barOption);

    let line=echarts.init(main[1]);
    let lineOption= {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };

    line.setOption(lineOption);

    let arr=echarts.init(main[2]);
    let arrOption= {
        title : {
            text: 'wuif1905男女比例',
            subtext: '啦啦啦',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男生','女生']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:35, name:'男生'},
                    {value:21, name:'女生'},

                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    arr.setOption(arrOption);


},false)