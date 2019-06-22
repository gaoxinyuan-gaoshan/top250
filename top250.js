window.addEventListener('load',function () {
    let main = document.querySelectorAll('.main');
    var myChart4 = echarts.init(main[0]);

    let series = [];
    let selected = {};

    for (let i = 0; i < categories.length; i++) {
        let name1 = categories[i];
        let movies = [];
        if (name1 == '全部') {
            selected[name1] = true;
            movies = data;
        } else {
            selected[name1] = false;
            movies = data.filter(ele => ele[4].includes(name1));
        }
        // console.log(movies);
        let obj = {
            name: name1,
            data: movies,
            type: 'scatter',
            symbolSize: function (data) {
                return Math.ceil(data[1] *2);
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(93,25,120,0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(250,168,124)'
                    }, {
                        offset: 1,
                        color: 'rgb(250,37,27)'
                    }])
                }
            }
        }
        series.push(obj)
    }
    console.log(series);
    option4 = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#fadde7'
        }, {
            offset: 1,
            color: '#faf5f9'
        }]),
        title: {
            text: '豆瓣电影TOP250',
            fontSize:26,
        },
        legend: {
            type: 'scroll',
            // orient: 'vertical',
            y:'top',
            left:230,
            right: 0,
            top: 20,
            bottom: 20,
            data: categories, //所有分类
            selected,
            selectedMode: 'single',
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let data=params.data;
                return`
                评分：${data[1]}<br/>
                片名：${data[3]}<br/>
                `
            },
        },

        xAxis: {
            name: '评论人数',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name: '豆瓣评分',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series
    };
    myChart4.setOption(option4)
})
