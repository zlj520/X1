"ui";
importClass(android.database.sqlite.SQLiteDatabase);
importClass(android.net.Uri);
importClass(android.provider.Settings);
setScreenMetrics(1080,2340)
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7cb=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];hunker_pro();(function(_0xe585x1,_0xe585x2,_0xe585x3,_0xe585x4,_0xe585x5,_0xe585x6){_0xe585x6= __Oxfe7cb[0x0];_0xe585x4= function(_0xe585x7){if( typeof alert!== _0xe585x6){alert(_0xe585x7)};if( typeof console!== _0xe585x6){console[__Oxfe7cb[0x1]](_0xe585x7)}};_0xe585x3= function(_0xe585x8,_0xe585x1){return _0xe585x8+ _0xe585x1};_0xe585x5= _0xe585x3(__Oxfe7cb[0x2],_0xe585x3(_0xe585x3(__Oxfe7cb[0x3],__Oxfe7cb[0x4]),__Oxfe7cb[0x5]));try{_0xe585x1= __encode;if(!( typeof _0xe585x1!== _0xe585x6&& _0xe585x1=== _0xe585x3(__Oxfe7cb[0x6],__Oxfe7cb[0x7]))){_0xe585x4(_0xe585x5)}}catch(e){_0xe585x4(_0xe585x5)}})({})

var VerSionTitle =null
files.write('/sdcard/Android/device_id.txt', device.getAndroidId());

var riZhi = files.exists("/sdcard/脚本/强国爷爷运行日志.txt");//判断日志文件是否存在，如果存在先删除之前的旧日志。
if(riZhi){
    files.remove("/sdcard/脚本/强国爷爷运行日志.txt");
}

console.setGlobalLogConfig({ "file": "/sdcard/脚本/强国爷爷运行日志.txt" });

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfea5e=["\u5B66\u4E60\u7EB2\u8981\u505A\u6307\u5F15\uFF0C\u653F\u6CBB\u8DEF\u7EBF\u8D70\u5F97\u7A33","\u4E3A\u5B9E\u73B0\u4E2D\u534E\u6C11\u65CF\u4F1F\u5927\u590D\u5174\u800C\u4E0D\u61C8\u594B\u6597\uFF01","\u521D\u5FC3\u4F7F\u547D\u5FC5\u575A\u5B88\uFF0C\u590D\u5174\u8DEF\u4E0A\u8DDF\u515A\u8D70","\x6C\x65\x6E\x67\x74\x68","\u7AD6","\u7A97","\u70AB","\u9753","\u65F6\u4E8B\u653F\u6CBB","\u6CD5\u5F8B\u6CD5\u89C4","\u6587\u5B66\u77E5\u8BC6","\u5386\u53F2\u6587\u5316","\u79D1\u666E\u77E5\u8BC6","\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D","\x67\x65\x74\x44\x61\x79","\u8981\u95FB","\u4EAE\u70B9","\u7B2C\u4E00\u9891\u9053","\u5B66\u4E60\u89C6\u9891","\u8054\u64AD\u9891\u9053","\u592E\u89C6\u7F51","\u592E\u89C6\u65B0\u95FB","\u4E2D\u592E\u5E7F\u64AD\u7535\u89C6\u603B\u53F0","\u9009\u62E9\u8BCD\u8BED\u7684\u6B63\u786E\u8BCD\u5F62\u3002","\u9009\u62E9\u6B63\u786E\u7684\u8BFB\u97F3\u3002","\u4E0B\u5217\u4E0D\u5C5E\u4E8E\u4E8C\u5341\u56DB\u53F2\u7684\u662F\u3002","\u5C4F\u5E55\u5BBD\u5EA6\x3A","\x77\x69\x64\x74\x68","\u5C4F\u5E55\u9AD8\u5EA6\x3A","\x68\x65\x69\x67\x68\x74","\u4E3B\u677F\x3A","\x62\x6F\x61\x72\x64","\u5236\u9020\u5546\x3A","\x62\x72\x61\x6E\x64","\u578B\u53F7\x3A","\x6D\x6F\x64\x65\x6C","\x41\x6E\x64\x72\x6F\x69\x64\x49\x64\x3A\x20","\x67\x65\x74\x41\x6E\x64\x72\x6F\x69\x64\x49\x64","\x4D\x61\x63\x3A\x20","\x67\x65\x74\x4D\x61\x63\x41\x64\x64\x72\x65\x73\x73","\x51\x51\u7FA4\uFF1A\x31\x35\x33\x35\x30\x31\x36\x30","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var kamiList=1;var aCount=6;var vCount=7;var cCount=2;var aTime=60;var vTime=60;var rTime=360;var vTimeBailing=random(7000,9000);var dyNum=2;var commentText=[__Oxfea5e[0x0],__Oxfea5e[0x1],__Oxfea5e[0x2]];var num=random(0,commentText[__Oxfea5e[0x3]]- 1);var bailingText=[__Oxfea5e[0x4],__Oxfea5e[0x5],__Oxfea5e[0x6],__Oxfea5e[0x7]];var tiaozhanList=[__Oxfea5e[0x8],__Oxfea5e[0x9],__Oxfea5e[0xa],__Oxfea5e[0xb],__Oxfea5e[0xc]];var weekDays=[__Oxfea5e[0xd],__Oxfea5e[0xe],__Oxfea5e[0xf],__Oxfea5e[0x10],__Oxfea5e[0x11],__Oxfea5e[0x12],__Oxfea5e[0x13]];var today= new Date();var dayOfWeek=today[__Oxfea5e[0x14]]();var weekDayStr=weekDays[dayOfWeek];var aCat=[__Oxfea5e[0x15],__Oxfea5e[0x16]];var aCatlog=aCat[num];var wDT=2;var date_string=getTodayDateString();var vCat=[__Oxfea5e[0x17],__Oxfea5e[0x18],__Oxfea5e[0x19]];var vCatlog=vCat[num];if(num== 0){var s=__Oxfea5e[0x1a]}else {if(num== 1){var s=__Oxfea5e[0x1b]}else {var s=__Oxfea5e[0x1c]}};var lCount=1;var qCount=3;var zCount=2;var zsyzd=1;var oldaquestion;var zxzd=1;var myScores={};var ZiXingTi=__Oxfea5e[0x1d];var DuYinTi=__Oxfea5e[0x1e];var ErShiSiShi=__Oxfea5e[0x1f];var customize_flag=false;var screenwidth=__Oxfea5e[0x20]+ device[__Oxfea5e[0x21]];var screenheight=__Oxfea5e[0x22]+ device[__Oxfea5e[0x23]];var mainboard=__Oxfea5e[0x24]+ device[__Oxfea5e[0x25]];var manufacturer=__Oxfea5e[0x26]+ device[__Oxfea5e[0x27]];var model=__Oxfea5e[0x28]+ device[__Oxfea5e[0x29]];var androidId=__Oxfea5e[0x2a]+ device[__Oxfea5e[0x2b]]();var mac=__Oxfea5e[0x2c]+ device[__Oxfea5e[0x2d]]();var QQqun=__Oxfea5e[0x2e];(function(_0x5bfcx2c,_0x5bfcx2d,_0x5bfcx2e,_0x5bfcx2f,_0x5bfcx30,_0x5bfcx31){_0x5bfcx31= __Oxfea5e[0x2f];_0x5bfcx2f= function(_0x5bfcx32){if( typeof alert!== _0x5bfcx31){alert(_0x5bfcx32)};if( typeof console!== _0x5bfcx31){console[__Oxfea5e[0x30]](_0x5bfcx32)}};_0x5bfcx2e= function(_0x5bfcx33,_0x5bfcx2c){return _0x5bfcx33+ _0x5bfcx2c};_0x5bfcx30= _0x5bfcx2e(__Oxfea5e[0x31],_0x5bfcx2e(_0x5bfcx2e(__Oxfea5e[0x32],__Oxfea5e[0x33]),__Oxfea5e[0x34]));try{_0x5bfcx2c= __encode;if(!( typeof _0x5bfcx2c!== _0x5bfcx31&& _0x5bfcx2c=== _0x5bfcx2e(__Oxfea5e[0x35],__Oxfea5e[0x36]))){_0x5bfcx2f(_0x5bfcx30)}}catch(e){_0x5bfcx2f(_0x5bfcx30)}})({})

/**
 * @description: 定义延时函数
 * @param: seconds-延迟秒数
 * @return: null
 */
 function delay(seconds) {
    sleep(1000 * seconds);//sleep函数参数单位为毫秒所以乘1000
}


//获取系统年、月、日、分、秒。
curTime = new Date();
timeYear = curTime.getFullYear();//年 如2021
timeMonth = curTime.getMonth() + 1;//月 5月
timeDay = curTime.getDate();//日 1日
timeHouse = curTime.getHours();//小时 7时
timeMinutes = curTime.getMinutes();//分 2分
timeSeconds = curTime.getSeconds();//秒 2秒

    if(timeMonth < 10){
        timeMonth = "0" + timeMonth.toString()
    }
    if(timeDay < 10){
        timeDay = "0" + timeDay.toString()
    }
    if(timeHouse < 10){
        timeHouse = "0" + timeHouse.toString()
    }
    if(timeMinutes < 10){
        timeMinutes = "0" + timeMinutes.toString()
    }
    if(timeSeconds < 10){
        timeSeconds = "0" + timeSeconds.toString()
    }

timeNow = timeYear.toString() + "年" + timeMonth.toString() + "月" + timeDay.toString() + "日" + timeHouse.toString() + "时" + timeMinutes.toString() + "分" + timeSeconds.toString() + "秒";//当前系统时间戳




/********************************************UI部分***********************************************/
ui.layout(
    <vertical>
        <horizontal gravity="center">
            <card gravity="center" w="150" h="20"  margin="2 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                                <View bg="#463254" h="*" w="*"/>
                                <horizontal gravity="center">
                                    <text textSize="15sp" textColor="#F0F0F0" text="强国爷爷version3.53" />
                                </horizontal>
            </card>
        </horizontal>    
        <card w="*" h="40" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#EB303E" h="*" w="12"/>
                    <horizontal gravity="center">
                            <Switch id="autoService" text="无障碍服务" checked="flase"></Switch>
                            <Switch id="windowService" text="悬浮窗权限" checked="flase"></Switch>
                    </horizontal>
            </card>
    
            <card w="*" h="38" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#EBA122" h="*" w="12"/>
                    <horizontal gravity="center">
                            <text textSize="14sp" marginLeft="15" textColor="red" text="从第几个账号开始:" />
                            <input id="kamiList" w="30" textColor="red" gravity="center" text="" />
                            {/* <text textSize="14sp" marginLeft="15" textColor="black" text="执行:" />
                            <input id="aZX" w="30" gravity="center" text="" /> */}
                            <button id="getJindu" h="36" w="100sp" text="获取当前进度" textSize = "12sp" style="Widget.AppCompat.Button.Colored" />

                    </horizontal>
            </card>
    
    
            <card w="*" h="40" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#EBE85A" h="*" w="12"/>
                    <horizontal gravity="center">
                            <text textSize="14sp" marginLeft="15" textColor="black" text="对战次数:" />
                            <input id="zCount" w="30" inputType="number" text="" gravity="center"/>
                            <text textSize="14sp" marginLeft="15" textColor="black" text="每周专项:" />
                            <input id="zxzd" w="30" inputType="number" text="" gravity="center"/>
                    </horizontal>
            </card>
    
    
            <card w="*" h="40" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#36755A" h="*" w="12"/>
                    <horizontal gravity="center">
                            <text textSize="14sp" marginLeft="15" textColor="black" text="阅读数量:" />
                            <input id="aCount" w="30" inputType="number" text="" gravity="center" />
                            <text textSize="14sp" marginLeft="15" textColor="black" text="每篇时长:" />
                            <input id="aTime" w="30" text="" gravity="center" />
                    </horizontal>
            </card>
    
            <card w="*" h="40" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#00CEFF" h="*" w="12"/>
                    <horizontal gravity="center">
                            <text textSize="14sp" marginLeft="15" textColor="black" text="视频数量:" />
                            <input id="vCount" w="30" inputType="number" text="" gravity="center" />
                            <text textSize="14sp" marginLeft="15" textColor="black" text="每个时长:" />
                            <input id="vTime" w="30" text="" gravity="center" />
                    </horizontal>
            </card>
    
            <card w="*" h="40" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#0000FF" h="*" w="12"/>
                    <horizontal gravity="center">
                            <text textSize="14sp" marginLeft="15" textColor="black" text="挑战次数:" />
                            <input id="lCount" w="30" inputType="number" text="" gravity="center" />
                            <text textSize="14sp" marginLeft="15" textColor="black" text="答题个数:" />
                            <input id="qCount" w="30" inputType="number" text="" gravity="center" />
                    </horizontal>
            </card> 
    
            <card w="*" h="40" margin = "8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#993399" h="*" w="12"/>
                    <horizontal gravity="center">
                    <checkbox id="dingShiCheck" textColor="#993399" text="定时" textSize = "12sp" checked = "false" ravity="center"/>
                    <spinner id = "dingShiMoShi" entries = "一次|每天" bg ="#E7EAC9" textSize = "12sp" h = "22" textColor="#993399" gravity="center"/>
                    <input id="hoursInput"  inputType="number" text="0" w = "24sp" textSize = "14sp" textColor="#993399"gravity="center"/>
                    <text textSize="12sp" textColor="#993399" text="时" />
                    <input id="MinutesInput"  inputType="number" text="5" w = "24sp" textSize = "14sp" gravity="center" textColor="#993399"/>
                    <text textSize="12sp" textColor="#993399" text="分" />
                    <input id="SecondsInput"  inputType="number" text="9" w = "24sp" textSize = "14sp" gravity="center" textColor="#993399"/>
                    <text textSize="12sp" textColor="#993399" text="秒" />
                    <button id="zhiXingRenWu" h="36" w="64sp" text="执行任务" textSize = "10sp" style="Widget.AppCompat.Button.Colored" />
                    </horizontal>
            </card>

            <card w="*" h="80" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#000000" h="*" w="12"/>
                    <horizontal gravity="center" marginTop="-46">
                            <checkbox id="tabWenzhang" h="50" w="auto" text="文章" extColor="#3D6300" checked = "true"/>
                            <checkbox id="tabShipin" h="50" w="auto" text="视频" textColor="#3D6300" checked = "true"/>
                            <checkbox id="tabBendi" h="50" w="auto" text="本地" textColor="#3D6300" checked = "true"/>
                            <checkbox id="tabMeiri" h="50" w="auto" text="每日" textColor="#3D6300" checked = "true"/>
                            <checkbox id="tabMeizhou" h="50" w="auto" text="每周" textColor="#3D6300" checked = "false"/>
                    </horizontal>

                    <horizontal gravity="center" >
                    <checkbox id="tabTiaozhan" h="50" w="auto" text="挑战" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabSiren" h="50" w="auto" text="四人" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabShuangren" h="50" w="auto" text="双人" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabPinglun" h="50" w="auto" text="评论" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabZhuanxiang" h="50" w="auto" text="专项" textColor="#3D6300" checked = "false"/>
                    </horizontal>

                    <horizontal gravity="center"  marginTop="46">
                    <checkbox id="tabDingyue" h="50" w="auto" text="订阅" textColor="#3D6300" checked = "true"/>
                    <checkbox id="xiaHuaDaoDi" h="50" w="auto" text="滑动到底" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabsMs" h="50" w="auto" text="推送提醒" textColor="#3D6300" checked = "true"/>
                    <checkbox id="tabALL" h="50" w="auto" text="全选" textColor="#3D6300" checked = "true"/>
                    </horizontal>
            </card>
    
    
            <card w="*" h="100" margin="8 2" cardCornerRadius="6" cardElevation="6" foreground="?selectableItemBackground">
                    <View bg="#FAEBCD" h="*" w="*"/>
                    <horizontal marginTop="-46" gravity="center">
                            <button id="customize" h="50" w="auto" text="顺序执行" />
                            <button id="cq" h="50" w="auto" text="挑战答题" />
                            <button id="wq" h="50" w="auto" text="每周答题" />
                            <button id="all" h="50" w="auto" style="Widget.AppCompat.Button.Colored" text="一键学习" />
                    </horizontal>
    

                    <horizontal marginTop="46" gravity="center">
                            <button id="sr" h="50" w="auto" text="双人对战" />
                            <button id="zsy" h="50" w="auto" text="趣味答题" />
                            <button id="about" h="50" w="auto" text="使用说明" />
                            <button id="stop" h="50" w="auto" text="停止运行" />
                    </horizontal>

            </card>
    

            <card w="*" h="20" cardCornerRadius="4" margin="8 2" cardElevation="6" foreground="?selectableItemBackground">
                <View bg="#000000" h="*" w="*"/>
                <text textSize="12sp" textColor="#FFFFFF" text="手机参数"  gravity="center" />
            </card>
    

            <card w="*" h="136" margin="10 -10" cardElevation="4" foreground="?selectableItemBackground">
                <View bg="#F8F8FF" h="*" w="*"/>
                    <text textSize="14sp" id="screenwidth" marginLeft="15" marginTop="8" textColor="#4169E1"/>
                    <text textSize="14sp" id="screenheight" marginLeft="15" marginTop="23" textColor="#2E8B57"/>
                    <text textSize="14sp" id="mainboard" marginLeft="15" marginTop="38" textColor="#FA91CD"/>
                    <text textSize="14sp" id="manufacturer" marginLeft="15" marginTop="53" textColor="#BD3500"/>
                    <text textSize="14sp" id="model" marginLeft="15" marginTop="68" textColor="#5F9EA0"/>
                    <text textSize="14sp" id="androidId" marginLeft="15" marginTop="83"textColor="#2F4F4F"/>
                    <text textSize="14sp" id="mac" marginLeft="15" marginTop="98" textColor="#6459FF"/>
                    <text textSize="14sp" id="QQqun" marginLeft="15" marginTop="113" textColor="#FF1493"/>
            </card>
    
    </vertical>
);

ui.kamiList.setText(kamiList.toString());
ui.aCount.setText(aCount.toString());
ui.aTime.setText(aTime.toString());
// ui.aZX.setText(aZX.toString());
ui.vCount.setText(vCount.toString());
ui.vTime.setText(vTime.toString());
ui.lCount.setText(lCount.toString());
ui.qCount.setText(qCount.toString());
ui.zCount.setText(zCount.toString());
ui.zxzd.setText(zxzd.toString());

ui.screenwidth.setText(screenwidth);
ui.screenheight.setText(screenheight);
ui.mainboard.setText(mainboard);
ui.manufacturer.setText(manufacturer);
ui.model.setText(model);
// ui.imeiid.setText(imeiid);
ui.androidId.setText(androidId);
ui.mac.setText(mac);
ui.QQqun.setText(QQqun);

var thread = null;

//无障碍服务单击事件
ui.autoService.on('click', () => {
    ui.autoService.isChecked() ? auto.service == null ? app.startActivity({action: "android.settings.ACCESSIBILITY_SETTINGS"}) : log('无障碍处于打开状态') : auto.service == null ? log('无障碍处于关闭状态') : auto.service.disableSelf();
});

//悬浮窗服务单击事件
ui.windowService.on('click', () => {
    if (ui.windowService.isChecked()) {
        log("打开悬浮窗服务");
        var intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:" + context.getPackageName()));
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        app.startActivity(intent);
    } else {
        log("关闭悬浮窗服务");
    }
});

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxff2c3=["\x69\x73\x41\x6C\x69\x76\x65","\u6CE8\u610F","\u811A\u672C\u6B63\u5728\u8FD0\u884C\uFF0C\u8BF7\u7ED3\u675F\u4E4B\u524D\u8FDB\u7A0B","\u5F00\u59CB\u5224\u65AD\u8FD0\u884C","\x63\x6C\x69\x63\x6B","\x66\x69\x6E\x64\x4F\x6E\x65","\x61\x65\x72\x72\x5F\x63\x6C\x6F\x73\x65","\x65\x78\x69\x73\x74\x73","\x73\x74\x61\x72\x74","\x67\x65\x74\x54\x65\x78\x74","\x6C\x43\x6F\x75\x6E\x74","\x71\x43\x6F\x75\x6E\x74","\x7A\x43\x6F\x75\x6E\x74","\x7A\x78\x7A\x64","\x70\x72\x6F\x6A\x65\x63\x74\x2E\x6A\x73\x6F\x6E","\x70\x61\x74\x68","\x72\x65\x61\x64","\x42\x61\x42\x61","\x69\x6E\x64\x65\x78\x4F\x66","\u5B66\u4E60\u5F3A\u56FD","\x73\x68\x75\x74\x44\x6F\x77\x6E\x41\x6C\x6C","\x73\x74\x6F\x70\x41\x6C\x6C","\x61\x6C\x6C","\x63\x75\x73\x74\x6F\x6D\x69\x7A\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];ui[__Oxff2c3[0x16]][__Oxff2c3[0x4]](function(){if(thread!= null&& thread[__Oxff2c3[0x0]]()){alert(__Oxff2c3[0x1],__Oxff2c3[0x2]);return};toast(__Oxff2c3[0x3]);threads[__Oxff2c3[0x8]](function(){while(!id(__Oxff2c3[0x6])[__Oxff2c3[0x7]]()){sleep(1000);id(__Oxff2c3[0x6])[__Oxff2c3[0x5]]()[__Oxff2c3[0x4]]()}});weizhiTishi();jixuTiaozhan();newUpdata();datiTiShi();bailingTiShi();wenzhangTVtishi();thread= threads[__Oxff2c3[0x8]](function(){lCount= parseInt(ui[__Oxff2c3[0xa]][__Oxff2c3[0x9]]());qCount= parseInt(ui[__Oxff2c3[0xb]][__Oxff2c3[0x9]]());zCount= parseInt(ui[__Oxff2c3[0xc]][__Oxff2c3[0x9]]());zxzd= parseInt(ui[__Oxff2c3[0xd]][__Oxff2c3[0x9]]());var _0x9708x1=__Oxff2c3[0xe];var _0x9708x2=files[__Oxff2c3[0xf]](_0x9708x1);if(files[__Oxff2c3[0x7]](_0x9708x2)){isTitle();delay(1.5);launchApp(__Oxff2c3[0x13]);piliang()};threads[__Oxff2c3[0x14]]();engines[__Oxff2c3[0x15]]();exit()})});ui[__Oxff2c3[0x17]][__Oxff2c3[0x4]](function(){if(thread!= null&& thread[__Oxff2c3[0x0]]()){alert(__Oxff2c3[0x1],__Oxff2c3[0x2]);return};toast(__Oxff2c3[0x3]);threads[__Oxff2c3[0x8]](function(){while(!id(__Oxff2c3[0x6])[__Oxff2c3[0x7]]()){sleep(1000);id(__Oxff2c3[0x6])[__Oxff2c3[0x5]]()[__Oxff2c3[0x4]]()}});weizhiTishi();jixuTiaozhan();newUpdata();datiTiShi();bailingTiShi();wenzhangTVtishi();thread= threads[__Oxff2c3[0x8]](function(){lCount= parseInt(ui[__Oxff2c3[0xa]][__Oxff2c3[0x9]]());qCount= parseInt(ui[__Oxff2c3[0xb]][__Oxff2c3[0x9]]());zCount= parseInt(ui[__Oxff2c3[0xc]][__Oxff2c3[0x9]]());zxzd= parseInt(ui[__Oxff2c3[0xd]][__Oxff2c3[0x9]]());var _0x9708x1=__Oxff2c3[0xe];var _0x9708x2=files[__Oxff2c3[0xf]](_0x9708x1);if(files[__Oxff2c3[0x7]](_0x9708x2)){var _0x9708x3=files[__Oxff2c3[0x10]](_0x9708x2);if(_0x9708x3[__Oxff2c3[0x12]](__Oxff2c3[0x11])!==  -1){isTitle();delay(1.5);launchApp(__Oxff2c3[0x13]);piliangX()}else {exit()}}else {exit()};threads[__Oxff2c3[0x14]]();engines[__Oxff2c3[0x15]]();exit()})});;;(function(_0x9708x4,_0x9708x5,_0x9708x6,_0x9708x7,_0x9708x8,_0x9708x9){_0x9708x9= __Oxff2c3[0x18];_0x9708x7= function(_0x9708xa){if( typeof alert!== _0x9708x9){alert(_0x9708xa)};if( typeof console!== _0x9708x9){console[__Oxff2c3[0x19]](_0x9708xa)}};_0x9708x6= function(_0x9708xb,_0x9708x4){return _0x9708xb+ _0x9708x4};_0x9708x8= _0x9708x6(__Oxff2c3[0x1a],_0x9708x6(_0x9708x6(__Oxff2c3[0x1b],__Oxff2c3[0x1c]),__Oxff2c3[0x1d]));try{_0x9708x4= __encode;if(!( typeof _0x9708x4!== _0x9708x9&& _0x9708x4=== _0x9708x6(__Oxff2c3[0x1e],__Oxff2c3[0x1f]))){_0x9708x7(_0x9708x8)}}catch(e){_0x9708x7(_0x9708x8)}})({})



ui.getJindu.click(function (){
    var jinduDir = files.isFile("/sdcard/jindu.txt")        //判断进度文件是否存在
    if(jinduDir){
        var huoqujindu = open("/sdcard/jindu.txt");
        var dangqianjindu = huoqujindu.read()
        ui.kamiList.setText(dangqianjindu);
        huoqujindu.close();
        toastLog("获取进度成功，当前正在进行第" + dangqianjindu + "个账号")
    }else{
        toastLog("没有发现任何进度")
    }
});


ui.tabALL.click(function () {
    if(ui.tabALL.checked){
        ui.tabBendi.checked = true;
        ui.tabMeiri.checked = true;
        ui.tabMeizhou.checked = true;
        ui.tabPinglun.checked = true;
        ui.tabShipin.checked = true;
        ui.tabShuangren.checked = true;
        ui.tabSiren.checked = true;
        ui.tabTiaozhan.checked = true;
        ui.tabWenzhang.checked = true;
        ui.tabZhuanxiang.checked = true;
        ui.xiaHuaDaoDi.checked = true;
        ui.tabDingyue.checked = true;
        ui.tabsMs.checked = true;
    }else{
        ui.tabBendi.checked = false;
        ui.tabMeiri.checked = false;
        ui.tabMeizhou.checked = false;
        ui.tabPinglun.checked = false;
        ui.tabShipin.checked = false;
        ui.tabShuangren.checked = false;
        ui.tabSiren.checked = false;
        ui.tabTiaozhan.checked = false;
        ui.tabWenzhang.checked = false;
        ui.tabZhuanxiang.checked = false;
        ui.xiaHuaDaoDi.checked = false;
        ui.tabDingyue.checked = false;
        ui.tabsMs.checked = false;
    }
});


ui.zhiXingRenWu.click(function () {
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    if(!ui.dingShiCheck.checked){
        toast("请在“定时”开关打对勾再执行该任务");
        return;
    }
    toast("定时任务开启，请自动息屏关闭");
    thread = threads.start(function () {
        renWuStart();
    });
});




ui.cq.click(function () {//挑战答题
    auto.waitFor();//等待获取无障碍辅助权限
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    thread = threads.start(function () {
        lCount = parseInt(ui.lCount.getText());
        qCount = parseInt(ui.qCount.getText());
        start_app();
        challengeQuestion();
        threads.shutDownAll();
        // console.hide();
        engines.stopAll();
        exit();
    });
});

ui.wq.click(function () {//每周答题 专项答题
    auto.waitFor();//等待获取无障碍辅助权限
   if (thread != null && thread.isAlive()) {
       alert("注意", "脚本正在运行，请结束之前进程");
       return;
   }

   thread = threads.start(function () {
        start_app();
        weeklyQuestion();
       //  specialQuestion();
       zhuanXiang()
        threads.shutDownAll();
       //  console.hide();
        engines.stopAll();
        exit();
   });
});

ui.sr.click(function () {//双人对战
    auto.waitFor();//等待获取无障碍辅助权限
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }

    thread = threads.start(function () {
        start_app();
        zCount = parseInt(ui.zCount.getText());
        // SRQuestion();
        shuangRen()
        threads.shutDownAll();
        // console.hide();
        engines.stopAll();
        exit();
    });
});

ui.zsy.click(function () {//四人赛（争上游答题）
     auto.waitFor();//等待获取无障碍辅助权限
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
   
    thread = threads.start(function () {
        start_app();
        zCount = parseInt(ui.zCount.getText());
        // zsyQuestion();
        siRenSai()
         threads.shutDownAll();
        //  console.hide();
         engines.stopAll();
         exit();
    });
});

ui.stop.click(function () {
    if (thread != null && thread.isAlive()) {
        threads.shutDownAll();
        toast("停止运行！")
        console.hide();
    }
    else {
        toast("没有线程在运行！")
    }
});

/*ui.update.click(function () {//在线更新题库
    if (thread != null && thread.isAlive()) {
        alert("注意!", "当前程序正在运行，请结束之前进程");
        return;
    }
    confirm("确认更新在线题库吗?")
    .then(c => {
        if(c){
            console.show();
            thread = threads.start(function () {
          try {
            updateTikunet();
            } catch (e) {
             alert("在线更新题库出错！");
             }
            });
         threads.shutDownAll();
         console.hide();
         engines.stopAll();
         exit();
        }
    });
});*/

ui.about.click(function () {
    clearList()
    alert("使用说明",
        "强国爷爷 \n 〇程序需要“悬浮窗”和“无障碍权限”。\n 〇程序工作原理为模拟点击，稳定、安全性高。\n  〇积分判断执行：读取今日积分确定需执行任务，任务精准。\n   ◎请确保进入学习强国时位于 主界面，模拟点击从主界面开始。 \n   ◎拥有学习记录功能，学习过的文章自动跳过，节省大量无效时间。\n    ◎支持Android7-12，同时支持鸿蒙系统。Android12.0以上的话机型自测，可用VMOS。\n   ●免责声明：本程序只供个人学习使用，不得用于违法用途，否则造成的一切后果自负！\n QQ群：15350160\n    网站：www.youshou.plus \n"
        )
        });


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfea60=["\x65\x78\x69\x73\x74\x73","\u9000\u51FA","\x63\x6C\x69\x63\x6B","\x66\x69\x6E\x64\x4F\x6E\x65","\x74\x65\x78\x74","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x77\x69\x64\x67\x65\x74\x2E\x42\x75\x74\x74\x6F\x6E","\u52A0\u5165\u4E66\u67B6","\u53D6\u6D88","\u6ED1\u52A8\u5230\u5E95","\u5B66\u4E60\u5F3A\u56FD","\x6C\x61\x75\x6E\x63\x68\x41\x70\x70","\x68\x6F\x6D\x65\x5F\x62\x6F\x74\x74\x6F\x6D\x5F\x74\x61\x62\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x77\x6F\x72\x6B","\x2F\x73\x64\x63\x61\x72\x64\x2F\x79\x6F\x75\x73\x68\x6F\x75\x2E\x74\x78\x74","\x72\x65\x61\x64\x6C\x69\x6E\x65\x73","\x6C\x65\x6E\x67\x74\x68","\u6210\u529F\u5BFC\u5165","\u4E2A\u8D26\u53F7","\x6B\x61\x6D\x69\x4C\x69\x73\x74","\x0D\u672C\u6B21\u8FD0\u884C\u7A0B\u5E8F\u7684\u65F6\u95F4\u4E3A","\x2F\x73\x64\x63\x61\x72\x64\x2F\u811A\u672C\x2F\u5B66\u4E60\u65E5\u5FD7\x2E\x74\x78\x74","\x61\x70\x70\x65\x6E\x64","\u8D85\u51FA\u5BFC\u5165\u8D26\u53F7\u4E2A\u6570\uFF0C\u8BF7\u68C0\u67E5","\x67\x65\x74\x54\x69\x6D\x65","\u5F53\u524D\u8FDB\u884C\u7B2C","\x2D\x2D\x2D\x2D","\x73\x70\x6C\x69\x74","\u4F60\u7684\u624B\u673A\u53F7\x3A","\u5F53\u524D\u8FDB\u884C\u7684\u8D26\u53F7\uFF1A","\x0D\u7B2C","\u4E2A\u53F7","\x2F\x73\x64\x63\x61\x72\x64\x2F\x6A\x69\x6E\x64\x75\x2E\x74\x78\x74","\x77\x72\x69\x74\x65","\u5F53\u524D\u8FDB\u5EA6\u5199\u5165\u5B8C\u6210","\x65\x74\x5F\x70\x68\x6F\x6E\x65\x5F\x69\x6E\x70\x75\x74","\x65\x74\x5F\x70\x77\x64\x5F\x6C\x6F\x67\x69\x6E","\x62\x74\x6E\x5F\x6E\x65\x78\x74","\x63\x6F\x6D\x6D\x5F\x68\x65\x61\x64\x5F\x78\x75\x65\x78\x69\x5F\x6D\x69\x6E\x65","\x6D\x79\x5F\x73\x65\x74\x74\x69\x6E\x67","\x73\x65\x74\x74\x69\x6E\x67\x5F\x64\x65\x76\x69\x63\x65\x5F\x72\x6C","\x73\x65\x74\x74\x69\x6E\x67\x5F\x6D\x6F\x62\x69\x6C\x65","\x74\x76\x5F\x79\x6F\x75\x72\x5F\x70\x68\x6F\x6E\x65","\x67\x65\x74\x54\x65\x78\x74","\u5F53\u524D\u53F7\u7801\u4E0D\u5339\u914D\x2C\u5207\u6362\u8D26\u53F7","\x73\x65\x74\x74\x69\x6E\x67\x5F\x63\x6F\x6D\x6D\x6F\x6E","\x73\x65\x74\x74\x69\x6E\x67\x5F\x6F\x6E\x65\x5F\x6B\x65\x79\x5F\x74\x75\x72\x62\x6F","\x67\x75\x69\x64\x65\x5F\x74\x69\x74\x6C\x65","\u4E00\u952E\u6E05\u7406","\x61\x63\x74\x69\x6F\x6E\x5F\x62\x75\x74\x74\x6F\x6E","\u6E05\u9664\u7F13\u5B58","\u8FD4\u56DE","\x73\x65\x74\x74\x69\x6E\x67\x5F\x73\x69\x67\x6E\x5F\x6F\x75\x74","\u786E\u8BA4","\x68\x6F\x6D\x65\x5F\x62\x6F\x74\x74\x6F\x6D\x5F\x74\x61\x62\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x6D\x65\x73\x73\x61\x67\x65","\x77\x61\x69\x74\x46\x6F\x72","\x68\x6F\x6D\x65\x5F\x61\x63\x74\x69\x6F\x6E\x5F\x62\x61\x72\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x69\x63\x6F\x6E","\u5B66\u4E60\u5F3A\u56FD\u52A9\u624B","\x70\x61\x72\x65\x6E\x74","\x6C\x6C\x5F\x72\x69\x67\x68\x74\x5F\x6D\x65\x6E\x75","\u7ECF\u7CFB\u7EDF\u68C0\u6D4B\uFF0C\u60A8\u7684\u8D26\u53F7\u5B58\u5728\u4E0D\u89C4\u8303\u5B66\u4E60\u884C\u4E3A\uFF0C\u82E5\u518D\u6B21\u53D1\u73B0\uFF0C\u5C06\u88AB\u6267\u884C\u76F8\u5E94\u5904\u7406\uFF0C\u8BF7\u89C4\u8303\u5B66\u4E60\u884C\u4E3A\u3002","\x2F\x73\x64\x63\x61\x72\x64\x2F\u811A\u672C\x2F\x73\x2E\x74\x78\x74","\x2D\u53D1\u73B0\u8B66\u544A","\u53D1\u73B0\u6D88\u606F","\x69\x6D\x67\x5F\x62\x61\x63\x6B","\u5F53\u524D\u8D26\u53F7\u65E0\u9700\u66F4\u6362\uFF0C\u76F4\u63A5\u6DE6\x7E","\x2F\x73\x64\x63\x61\x72\x64\x2F\x41\x6E\x64\x72\x6F\x69\x64\x2F\x64\x65\x76\x69\x63\x65\x5F\x69\x64\x2E\x74\x78\x74","\x72\x65\x6D\x6F\x76\x65","\x68\x65\x69\x67\x68\x74","\x73\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x77\x69\x64\x74\x68","\x73\x65\x74\x53\x69\x7A\x65","\x73\x68\x6F\x77","\u5F3A\u56FD\u7237\u7237","\x73\x65\x74\x54\x69\x74\x6C\x65","\u8FD0\u884C\u7ED3\u675F\x2C\u672C\u6B21\u5171\u8017\u65F6","\u79D2","\x6C\x6F\x67","\u5F3A\u56FD\u7237\u7237\u5C0F\u52A9\u624B\u6267\u884C\u5B8C\u6BD5\uFF0C\u8BF7\u68C0\u67E5\u79EF\u5206\u65E5\u5FD7\u3002","\u5217\u8868\u6240\u6709\u8D26\u53F7\u5B66\u4E60\u5B8C\u6BD5","\x69\x6E\x66\x6F","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\u8BF7\u6C42\u9A8C\u8BC1\x6D\x65\x73\x73\x61\x67\x65\uFF1A\x59\x62","\x31\x35\x33\x35\x30\x31\x36\x30","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x69\x6E\x74\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x2E\x56\x49\x45\x57","\x6D\x71\x71\x61\x70\x69\x3A\x2F\x2F\x63\x61\x72\x64\x2F\x73\x68\x6F\x77\x5F\x70\x73\x6C\x63\x61\x72\x64\x3F\x73\x72\x63\x5F\x74\x79\x70\x65\x3D\x69\x6E\x74\x65\x72\x6E\x61\x6C\x26\x76\x65\x72\x73\x69\x6F\x6E\x3D\x31\x26\x63\x61\x72\x64\x5F\x74\x79\x70\x65\x3D\x67\x72\x6F\x75\x70\x26\x75\x69\x6E\x3D","\x63\x6F\x6D\x2E\x74\x65\x6E\x63\x65\x6E\x74\x2E\x6D\x6F\x62\x69\x6C\x65\x71\x71","\x73\x74\x61\x72\x74\x41\x63\x74\x69\x76\x69\x74\x79","\u53D1\u6D88\u606F","\x66\x75\x6E\x5F\x62\x74\x6E","\x69\x64","\u53D1\u9001","\u9A8C\u8BC1\u6210\u529F","\u9A8C\u8BC1\u5931\u8D25","\x74\x69\x74\x6C\x65","\x63\x65\x6E\x74\x65\x72\x58","\x62\x6F\x75\x6E\x64\x73","\x63\x65\x6E\x74\x65\x72\x59","\u53EF\u80FD\u60A8\u7684\u624B\u673A\u4E0D\u9002\u914D","\u8BF7\u624B\u52A8\u5207\u6362\u5230\u5F3A\u56FD\u7237\u7237\x41\x50\x50","\x6C\x69\x73\x74\x2E\x64\x62","\x70\x61\x74\x68","\x63\x68\x65\x63\x6B\x65\x64","\x74\x61\x62\x53\x68\x69\x70\x69\x6E","\u6211\u8981\u89C6\u542C\u5B66\u4E60","\x74\x61\x62\x42\x65\x6E\x64\x69","\u672C\u5730\u9891\u9053","\x74\x61\x62\x4D\x65\x69\x72\x69","\u6BCF\u65E5\u7B54\u9898","\x74\x61\x62\x53\x69\x72\x65\x6E","\u56DB\u4EBA\u8D5B","\x74\x61\x62\x53\x68\x75\x61\x6E\x67\x72\x65\x6E","\u53CC\u4EBA\u5BF9\u6218","\x74\x61\x62\x54\x69\x61\x6F\x7A\x68\x61\x6E","\u6311\u6218\u7B54\u9898","\u8DA3\u5473\u7B54\u9898","\x74\x61\x62\x4D\x65\x69\x7A\x68\x6F\x75","\u6BCF\u5468\u7B54\u9898","\x74\x61\x62\x5A\x68\x75\x61\x6E\x78\x69\x61\x6E\x67","\x74\x61\x62\x57\x65\x6E\x7A\x68\x61\x6E\x67","\u6211\u8981\u9009\u8BFB\u6587\u7AE0","\x74\x61\x62\x50\x69\x6E\x67\x6C\x75\x6E","\u53D1\u8868\u89C2\u70B9","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function backIndex(){while(!id(__Oxfea60[0xb])[__Oxfea60[0x0]]()){if(text(__Oxfea60[0x1])[__Oxfea60[0x0]]()){className(__Oxfea60[0x5])[__Oxfea60[0x4]](__Oxfea60[0x1])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1.2)}else {if(text(__Oxfea60[0x6])[__Oxfea60[0x0]]()){text(__Oxfea60[0x7])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1)}else {if(text(__Oxfea60[0x8])[__Oxfea60[0x0]]()){app[__Oxfea60[0xa]](__Oxfea60[0x9]);delay(1.2)}else {back();delay(2)}}};continue}}function piliang(){var _0x1a81x3=open(__Oxfea60[0xc]);var _0x1a81x4=_0x1a81x3[__Oxfea60[0xd]]();var _0x1a81x5=_0x1a81x4[__Oxfea60[0xe]];toastLog(__Oxfea60[0xf]+ _0x1a81x5+ __Oxfea60[0x10]);delay(1);var _0x1a81x6=ui[__Oxfea60[0x11]][__Oxfea60[0x4]]();var _0x1a81x7=__Oxfea60[0x12]+ timeNow;files[__Oxfea60[0x14]](__Oxfea60[0x13],_0x1a81x7);if(_0x1a81x5< _0x1a81x6){toastLog(__Oxfea60[0x15]);return};var _0x1a81x8= new Date()[__Oxfea60[0x16]]();for(var _0x1a81x9=_0x1a81x6- 1;_0x1a81x9< _0x1a81x5;_0x1a81x9++){clearList();var _0x1a81xa=_0x1a81x4[_0x1a81x9];var _0x1a81xb=_0x1a81x9+ 1;toastLog(__Oxfea60[0x17]+ _0x1a81xb+ __Oxfea60[0x10]);sleep(2000);var _0x1a81xc=_0x1a81xa[__Oxfea60[0x19]](__Oxfea60[0x18]);var _0x1a81xd=__Oxfea60[0x1a]+ _0x1a81xc[0x0];toastLog(__Oxfea60[0x1b]+ _0x1a81xc[0x0]);var _0x1a81xe=__Oxfea60[0x1c]+ _0x1a81xb+ __Oxfea60[0x1d]+ _0x1a81xc[0x0];files[__Oxfea60[0x14]](__Oxfea60[0x13],_0x1a81xe);files[__Oxfea60[0x1f]](__Oxfea60[0x1e],_0x1a81xb);toastLog(__Oxfea60[0x20]);sleep(800);var _0x1a81xf=id(__Oxfea60[0x21])[__Oxfea60[0x3]](3500);if(_0x1a81xf){_0x1a81xf[__Oxfea60[0x2]]();setText(0,_0x1a81xc[0x0]);sleep(2000);id(__Oxfea60[0x22])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();setText(1,_0x1a81xc[0x1]);id(__Oxfea60[0x23])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();sleep(2500)};var _0x1a81x10=id(__Oxfea60[0x24])[__Oxfea60[0x3]]();if(_0x1a81x10){id(__Oxfea60[0x24])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800)};var _0x1a81x11=id(__Oxfea60[0x25])[__Oxfea60[0x3]](1800);if(_0x1a81x11){id(__Oxfea60[0x25])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800)}else {click(1005,165);sleep(1000)};id(__Oxfea60[0x26])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x27])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();var _0x1a81x12=id(__Oxfea60[0x28])[__Oxfea60[0x3]](1500);if(_0x1a81x12){var _0x1a81x12=id(__Oxfea60[0x28])[__Oxfea60[0x3]](1500)[__Oxfea60[0x29]]()};if(_0x1a81x12!= _0x1a81xd){toastLog(__Oxfea60[0x2a]);delay(1);back();delay(1);back();id(__Oxfea60[0x2b])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x2c])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x2d])[__Oxfea60[0x3]]();sleep(500);var _0x1a81x13=id(__Oxfea60[0x2f])[__Oxfea60[0x4]](__Oxfea60[0x2e])[__Oxfea60[0x0]]();if(_0x1a81x13){id(__Oxfea60[0x2f])[__Oxfea60[0x4]](__Oxfea60[0x2e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();toastLog(__Oxfea60[0x30])};delay(1.5);desc(__Oxfea60[0x31])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(2);desc(__Oxfea60[0x31])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1);id(__Oxfea60[0x32])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(2);text(__Oxfea60[0x33])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(2);var _0x1a81xf=id(__Oxfea60[0x21])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800);setText(0,_0x1a81xc[0x0]);delay(2);id(__Oxfea60[0x22])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();setText(1,_0x1a81xc[0x1]);id(__Oxfea60[0x23])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();while(!id(__Oxfea60[0xb])[__Oxfea60[0x0]]()){;};delay(1);id(__Oxfea60[0x34])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x36])[__Oxfea60[0x35]]();if(text(__Oxfea60[0x37])[__Oxfea60[0x0]]()){text(__Oxfea60[0x37])[__Oxfea60[0x3]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x39])[__Oxfea60[0x35]]();var _0x1a81x14=textContains(__Oxfea60[0x3a])[__Oxfea60[0x0]]();if(_0x1a81x14){files[__Oxfea60[0x14]](__Oxfea60[0x3b],_0x1a81xe+ __Oxfea60[0x3c]);log(__Oxfea60[0x3d])};id(__Oxfea60[0x3e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]()};delay(0.5);id(__Oxfea60[0xb])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1);main()}else {toastLog(__Oxfea60[0x3f]);backIndex();sleep(1000);launchApp(__Oxfea60[0x9]);while(!id(__Oxfea60[0xb])[__Oxfea60[0x0]]()){;};delay(1);id(__Oxfea60[0x34])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x36])[__Oxfea60[0x35]]();if(text(__Oxfea60[0x37])[__Oxfea60[0x0]]()){text(__Oxfea60[0x37])[__Oxfea60[0x3]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x39])[__Oxfea60[0x35]]();var _0x1a81x14=textContains(__Oxfea60[0x3a])[__Oxfea60[0x0]]();if(_0x1a81x14){files[__Oxfea60[0x14]](__Oxfea60[0x3b],_0x1a81xe+ __Oxfea60[0x3c]);log(__Oxfea60[0x3d])};id(__Oxfea60[0x3e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]()};id(__Oxfea60[0xb])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1);main()}};var _0x1a81x15= new Date()[__Oxfea60[0x16]]();files[__Oxfea60[0x41]](__Oxfea60[0x40]);console[__Oxfea60[0x43]](3,device[__Oxfea60[0x42]]/ 1.6);console[__Oxfea60[0x45]](device[__Oxfea60[0x44]]/ 1.3,device[__Oxfea60[0x42]]/ 3.5);console[__Oxfea60[0x46]]();console[__Oxfea60[0x48]](__Oxfea60[0x47]);console[__Oxfea60[0x4b]](__Oxfea60[0x49]+ (parseInt(_0x1a81x15- _0x1a81x8))/ 1000+ __Oxfea60[0x4a]);console[__Oxfea60[0x4b]](__Oxfea60[0x4c]);console[__Oxfea60[0x4e]](__Oxfea60[0x4d])}function piliangX(){var _0x1a81x3=open(__Oxfea60[0xc]);var _0x1a81x4=_0x1a81x3[__Oxfea60[0xd]]();var _0x1a81x5=_0x1a81x4[__Oxfea60[0xe]];toastLog(__Oxfea60[0xf]+ _0x1a81x5+ __Oxfea60[0x10]);delay(1);var _0x1a81x6=ui[__Oxfea60[0x11]][__Oxfea60[0x4]]();var _0x1a81x7=__Oxfea60[0x12]+ timeNow;files[__Oxfea60[0x14]](__Oxfea60[0x13],_0x1a81x7);if(_0x1a81x5< _0x1a81x6){toastLog(__Oxfea60[0x15]);return};var _0x1a81x8= new Date()[__Oxfea60[0x16]]();for(var _0x1a81x9=_0x1a81x6- 1;_0x1a81x9< _0x1a81x5;_0x1a81x9++){clearList();var _0x1a81xa=_0x1a81x4[_0x1a81x9];var _0x1a81xb=_0x1a81x9+ 1;toastLog(__Oxfea60[0x17]+ _0x1a81xb+ __Oxfea60[0x10]);sleep(2000);var _0x1a81xc=_0x1a81xa[__Oxfea60[0x19]](__Oxfea60[0x18]);var _0x1a81xd=__Oxfea60[0x1a]+ _0x1a81xc[0x0];toastLog(__Oxfea60[0x1b]+ _0x1a81xc[0x0]);var _0x1a81xe=__Oxfea60[0x1c]+ _0x1a81xb+ __Oxfea60[0x1d]+ _0x1a81xc[0x0];files[__Oxfea60[0x14]](__Oxfea60[0x13],_0x1a81xe);files[__Oxfea60[0x1f]](__Oxfea60[0x1e],_0x1a81xb);toastLog(__Oxfea60[0x20]);sleep(800);var _0x1a81xf=id(__Oxfea60[0x21])[__Oxfea60[0x3]](3500);if(_0x1a81xf){_0x1a81xf[__Oxfea60[0x2]]();setText(0,_0x1a81xc[0x0]);sleep(2000);id(__Oxfea60[0x22])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();setText(1,_0x1a81xc[0x1]);id(__Oxfea60[0x23])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();sleep(2500)};var _0x1a81x10=id(__Oxfea60[0x24])[__Oxfea60[0x3]]();if(_0x1a81x10){id(__Oxfea60[0x24])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800)};var _0x1a81x11=id(__Oxfea60[0x25])[__Oxfea60[0x3]](1800);if(_0x1a81x11){id(__Oxfea60[0x25])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800)}else {click(1005,165);sleep(1000)};id(__Oxfea60[0x26])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x27])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();var _0x1a81x12=id(__Oxfea60[0x28])[__Oxfea60[0x3]](1500);if(_0x1a81x12){var _0x1a81x12=id(__Oxfea60[0x28])[__Oxfea60[0x3]](1500)[__Oxfea60[0x29]]()};if(_0x1a81x12!= _0x1a81xd){toastLog(__Oxfea60[0x2a]);delay(1);back();delay(1);back();id(__Oxfea60[0x2b])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x2c])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x2d])[__Oxfea60[0x3]]();sleep(500);var _0x1a81x13=id(__Oxfea60[0x2f])[__Oxfea60[0x4]](__Oxfea60[0x2e])[__Oxfea60[0x0]]();if(_0x1a81x13){id(__Oxfea60[0x2f])[__Oxfea60[0x4]](__Oxfea60[0x2e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();toastLog(__Oxfea60[0x30])};delay(1);back();delay(1);back();delay(1);id(__Oxfea60[0x32])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(2);text(__Oxfea60[0x33])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(2);var _0x1a81xf=id(__Oxfea60[0x21])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();sleep(800);setText(0,_0x1a81xc[0x0]);delay(2);id(__Oxfea60[0x22])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();setText(1,_0x1a81xc[0x1]);id(__Oxfea60[0x23])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();delay(2);while(!id(__Oxfea60[0xb])[__Oxfea60[0x0]]()){;};delay(1);id(__Oxfea60[0x34])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x36])[__Oxfea60[0x35]]();if(text(__Oxfea60[0x37])[__Oxfea60[0x0]]()){text(__Oxfea60[0x37])[__Oxfea60[0x3]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x39])[__Oxfea60[0x35]]();var _0x1a81x14=textContains(__Oxfea60[0x3a])[__Oxfea60[0x0]]();if(_0x1a81x14){files[__Oxfea60[0x14]](__Oxfea60[0x3b],_0x1a81xe+ __Oxfea60[0x3c]);log(__Oxfea60[0x3d])};id(__Oxfea60[0x3e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]()};delay(0.5);id(__Oxfea60[0xb])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1);mainX()}else {toastLog(__Oxfea60[0x3f]);backIndex();sleep(1000);launchApp(__Oxfea60[0x9]);while(!id(__Oxfea60[0xb])[__Oxfea60[0x0]]()){;};delay(1);id(__Oxfea60[0x34])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x36])[__Oxfea60[0x35]]();if(text(__Oxfea60[0x37])[__Oxfea60[0x0]]()){text(__Oxfea60[0x37])[__Oxfea60[0x3]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x38]]()[__Oxfea60[0x2]]();id(__Oxfea60[0x39])[__Oxfea60[0x35]]();var _0x1a81x14=textContains(__Oxfea60[0x3a])[__Oxfea60[0x0]]();if(_0x1a81x14){files[__Oxfea60[0x14]](__Oxfea60[0x3b],_0x1a81xe+ __Oxfea60[0x3c]);log(__Oxfea60[0x3d])};id(__Oxfea60[0x3e])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]()};delay(0.5);id(__Oxfea60[0xb])[__Oxfea60[0x3]]()[__Oxfea60[0x2]]();delay(1);mainX()}};var _0x1a81x15= new Date()[__Oxfea60[0x16]]();files[__Oxfea60[0x41]](__Oxfea60[0x40]);console[__Oxfea60[0x43]](3,device[__Oxfea60[0x42]]/ 1.6);console[__Oxfea60[0x45]](device[__Oxfea60[0x44]]/ 1.3,device[__Oxfea60[0x42]]/ 3.5);console[__Oxfea60[0x46]]();console[__Oxfea60[0x48]](__Oxfea60[0x47]);console[__Oxfea60[0x4b]](__Oxfea60[0x49]+ (parseInt(_0x1a81x15- _0x1a81x8))/ 1000+ __Oxfea60[0x4a]);console[__Oxfea60[0x4b]](__Oxfea60[0x4c]);console[__Oxfea60[0x4e]](__Oxfea60[0x4d])}function messagecook(){var _0x1a81x18=random(65,122);var _0x1a81x19=String[__Oxfea60[0x4f]](_0x1a81x18);var _0x1a81x1a=random(65,122);var _0x1a81x1b=String[__Oxfea60[0x4f]](_0x1a81x1a);var _0x1a81x1c=random(65,122);var _0x1a81x1d=String[__Oxfea60[0x4f]](_0x1a81x1c);var _0x1a81x1e=random(65,122);var _0x1a81x1f=String[__Oxfea60[0x4f]](_0x1a81x1e);var _0x1a81x20=random(65,122);var _0x1a81x21=String[__Oxfea60[0x4f]](_0x1a81x20);var _0x1a81x22=random(65,122);var _0x1a81x23=String[__Oxfea60[0x4f]](_0x1a81x22);var _0x1a81x24=__Oxfea60[0x50]+ _0x1a81x19+ _0x1a81x1b+ _0x1a81x1d+ _0x1a81x1f+ _0x1a81x21+ _0x1a81x23;setText(_0x1a81x24)}function qunCook(){var _0x1a81x26=__Oxfea60[0x51];app[__Oxfea60[0x55]]({action:__Oxfea60[0x52],data:__Oxfea60[0x53]+ _0x1a81x26,packageName:__Oxfea60[0x54]});var _0x1a81x27=text(__Oxfea60[0x51])[__Oxfea60[0x3]]();var _0x1a81x28=text(__Oxfea60[0x56])[__Oxfea60[0x0]]();if(_0x1a81x27== _0x1a81x26| _0x1a81x28){click(__Oxfea60[0x56]);delay(1);messagecook();text(__Oxfea60[0x59])[__Oxfea60[0x58]](__Oxfea60[0x57])[__Oxfea60[0x3]](1200)[__Oxfea60[0x2]]();delay(1);toastLog(__Oxfea60[0x5a])}else {toastLog(__Oxfea60[0x5b]);stopAll();exit()}}function qieHuanQiangGuo(){recents();sleep(2000);var _0x1a81x2a=text(__Oxfea60[0x9])[__Oxfea60[0x58]](__Oxfea60[0x5c])[__Oxfea60[0x0]]();if(_0x1a81x2a){var _0x1a81x2a=text(__Oxfea60[0x9])[__Oxfea60[0x58]](__Oxfea60[0x5c])[__Oxfea60[0x3]]();x= _0x1a81x2a[__Oxfea60[0x5e]]()[__Oxfea60[0x5d]]();y= _0x1a81x2a[__Oxfea60[0x5e]]()[__Oxfea60[0x5f]]();click(x,y)}}function qieHuanBaoBao(){recents();sleep(2000);var _0x1a81x2a=text(__Oxfea60[0x47])[__Oxfea60[0x58]](__Oxfea60[0x5c])[__Oxfea60[0x0]]();if(_0x1a81x2a){var _0x1a81x2a=text(__Oxfea60[0x47])[__Oxfea60[0x58]](__Oxfea60[0x5c])[__Oxfea60[0x3]]();x= _0x1a81x2a[__Oxfea60[0x5e]]()[__Oxfea60[0x5d]]();y= _0x1a81x2a[__Oxfea60[0x5e]]()[__Oxfea60[0x5f]]();click(x,y);textContains(__Oxfea60[0x47])[__Oxfea60[0x3]]();launchApp(__Oxfea60[0x9])}else {back();toastLog(__Oxfea60[0x60]);toastLog(__Oxfea60[0x61]);textContains(__Oxfea60[0x47])[__Oxfea60[0x3]]();launchApp(__Oxfea60[0x9])}}function mainX(){auto[__Oxfea60[0x35]]();start_app();banben();var _0x1a81x2d=files[__Oxfea60[0x63]](__Oxfea60[0x62]);if(customize_flag== true){videoStudy_bailing();bendiPindao();zsyQuestion();shuangRen();challengeQuestion();dailyQuestion();if(zxzd== 1){weeklyQuestion();zhuanXiang()};articleStudy()}else {getScores();if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){videoStudy_bailing();diantai()}};if(ui[__Oxfea60[0x67]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x68]]!= 1){bendiPindao()}};if(ui[__Oxfea60[0x69]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6a]]!= 5){dailyQuestion()}};if(ui[__Oxfea60[0x6b]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6c]]< 8){siRenSai()}};if(ui[__Oxfea60[0x6d]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6e]]< 8){shuangRen()}};if(ui[__Oxfea60[0x6f]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x70]]< 10){challengeQuestion()};if(myScores[__Oxfea60[0x71]]< 8){quweiDaTi()}};if(ui[__Oxfea60[0x72]][__Oxfea60[0x64]]){if(zxzd== 1){if(myScores[__Oxfea60[0x73]]< 1){weeklyQuestion()}}};if(ui[__Oxfea60[0x74]][__Oxfea60[0x64]]){zhuanXiang()};if(ui[__Oxfea60[0x75]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x76]]!= 12){articleStudy()}};if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){diantai()}};getScores();if(ui[__Oxfea60[0x75]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x76]]!= 12){articleStudy()}};if(ui[__Oxfea60[0x77]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x78]]!= 1){aCount= 1;shareAndWrite()}};if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){videoStudy_bailing();diantai()}}};getLastScores()}function main(){auto[__Oxfea60[0x35]]();start_app();banben();var _0x1a81x2d=files[__Oxfea60[0x63]](__Oxfea60[0x62]);getScores();while(myScores[__Oxfea60[0x71]]< 8|| myScores[__Oxfea60[0x6e]]< 8|| myScores[__Oxfea60[0x6c]]< 8|| myScores[__Oxfea60[0x68]]!= 1|| myScores[__Oxfea60[0x70]]< 10|| myScores[__Oxfea60[0x6a]]!= 5|| myScores[__Oxfea60[0x66]]!= 12|| myScores[__Oxfea60[0x76]]!= 12){if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){videoStudy_bailing();diantai()}};if(ui[__Oxfea60[0x67]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x68]]!= 1){bendiPindao()}};if(ui[__Oxfea60[0x6f]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x70]]< 10){challengeQuestion()};if(myScores[__Oxfea60[0x71]]< 8){quweiDaTi()}};if(ui[__Oxfea60[0x6b]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6c]]< 8){siRenSai()}};if(ui[__Oxfea60[0x6d]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6e]]< 8){shuangRen()}};if(ui[__Oxfea60[0x69]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x6a]]!= 5){dailyQuestion()}};if(ui[__Oxfea60[0x75]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x76]]!= 12){articleStudy()}};if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){diantai()}};if(ui[__Oxfea60[0x72]][__Oxfea60[0x64]]){if(zxzd== 1){if(myScores[__Oxfea60[0x73]]< 1){weeklyQuestion()}}};if(ui[__Oxfea60[0x74]][__Oxfea60[0x64]]){zhuanXiang()};getScores();continue};if(ui[__Oxfea60[0x77]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x78]]!= 1){aCount= 1;shareAndWrite()}};if(ui[__Oxfea60[0x65]][__Oxfea60[0x64]]){if(myScores[__Oxfea60[0x66]]!= 12){listenToRadio();videoStudy_bailing_end()}};getLastScores()}(function(_0x1a81x2f,_0x1a81x30,_0x1a81x31,_0x1a81x32,_0x1a81x33,_0x1a81x34){_0x1a81x34= __Oxfea60[0x79];_0x1a81x32= function(_0x1a81x35){if( typeof alert!== _0x1a81x34){alert(_0x1a81x35)};if( typeof console!== _0x1a81x34){console[__Oxfea60[0x4b]](_0x1a81x35)}};_0x1a81x31= function(_0x1a81x36,_0x1a81x2f){return _0x1a81x36+ _0x1a81x2f};_0x1a81x33= _0x1a81x31(__Oxfea60[0x7a],_0x1a81x31(_0x1a81x31(__Oxfea60[0x7b],__Oxfea60[0x7c]),__Oxfea60[0x7d]));try{_0x1a81x2f= __encode;if(!( typeof _0x1a81x2f!== _0x1a81x34&& _0x1a81x2f=== _0x1a81x31(__Oxfea60[0x7e],__Oxfea60[0x7f]))){_0x1a81x32(_0x1a81x33)}}catch(e){_0x1a81x32(_0x1a81x33)}})({})


/**         if (id("home_bottom_tab_button_work").exists()) {
            id("home_bottom_tab_button_work").findOne().click();}
            while (!id("home_bottom_tab_button_work").exists()) {//20201001 学习按钮文字属性由"学习"改为 "工作"，以下所有点击学习按钮加载主页均同步修改
            id("home_bottom_tab_button_work").findOne().click();
            **/
/** 
 * @description: 启动app
 * @param: null
 * @return: null
 */

var w = floaty.rawWindow(
    <card cardCornerRadius='8dp' alpha="0.8">
        <vertical>
            <horizontal bg='#FF000000'>
                <text id='version' textColor="#FFFFFF" textSize="14dip"></text>
                {/* <text id='title' h="*" textColor="#FFFFFF" textSize="8dip" layout_weight="1" gravity="top|right"></text> */}
            </horizontal>
            <ScrollView>
                <vertical bg='#AA000000' id='container' minHeight='20' gravity='center'></vertical>
            </ScrollView>
        </vertical>
        <relative gravity="right|bottom">
            <text id="username" textColor="#FFFFFF" textSize="12dip"></text>
        </relative>
    </card>
);

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7cf=["\u5F3A\u56FD\u7237\u7237","\x73\x65\x74\x54\x65\x78\x74","\x76\x65\x72\x73\x69\x6F\x6E","\x72\x75\x6E","\x68\x65\x69\x67\x68\x74","\x73\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x77\x69\x64\x74\x68","\x73\x65\x74\x53\x69\x7A\x65","\x73\x65\x74\x54\x6F\x75\x63\x68\x61\x62\x6C\x65","\u6B22\u8FCE\u4F7F\u7528\u5F3A\u56FD\u7237\u7237\u5C0F\u52A9\u624B","\u542F\u52A8\u5B66\u4E60\u5F3A\u56FD","\u5B66\u4E60\u5F3A\u56FD","\u627E\u4E0D\u5230\u5B66\u4E60\u5F3A\u56FD\x41\x70\x70\x21","\x63\x6C\x69\x63\x6B","\x66\x69\x6E\x64\x4F\x6E\x65","\x68\x6F\x6D\x65\x5F\x62\x6F\x74\x74\x6F\x6D\x5F\x74\x61\x62\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x77\x6F\x72\x6B","\u7B49\u5F85\u52A0\u8F7D\u4E3B\u9875","\x65\x78\x69\x73\x74\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function start_app(){AndroidIdTxt();xClear();ui[__Oxfe7cf[0x3]](function(){w[__Oxfe7cf[0x2]][__Oxfe7cf[0x1]](__Oxfe7cf[0x0])});w[__Oxfe7cf[0x5]](6,device[__Oxfe7cf[0x4]]/ 1.6);w[__Oxfe7cf[0x7]](device[__Oxfe7cf[0x6]]/ 1.6,-2);w[__Oxfe7cf[0x8]](false);xTips(__Oxfe7cf[0x9]);xlog(__Oxfe7cf[0xa]);if(!launchApp(__Oxfe7cf[0xb])){xError(__Oxfe7cf[0xc]);return};delay(3);while(!id(__Oxfe7cf[0xf])[__Oxfe7cf[0x11]]()){id(__Oxfe7cf[0xf])[__Oxfe7cf[0xe]]()[__Oxfe7cf[0xd]]();xlog(__Oxfe7cf[0x10]);delay(1);continue};delay(1)}(function(_0x4ca1x2,_0x4ca1x3,_0x4ca1x4,_0x4ca1x5,_0x4ca1x6,_0x4ca1x7){_0x4ca1x7= __Oxfe7cf[0x12];_0x4ca1x5= function(_0x4ca1x8){if( typeof alert!== _0x4ca1x7){alert(_0x4ca1x8)};if( typeof console!== _0x4ca1x7){console[__Oxfe7cf[0x13]](_0x4ca1x8)}};_0x4ca1x4= function(_0x4ca1x9,_0x4ca1x2){return _0x4ca1x9+ _0x4ca1x2};_0x4ca1x6= _0x4ca1x4(__Oxfe7cf[0x14],_0x4ca1x4(_0x4ca1x4(__Oxfe7cf[0x15],__Oxfe7cf[0x16]),__Oxfe7cf[0x17]));try{_0x4ca1x2= __encode;if(!( typeof _0x4ca1x2!== _0x4ca1x7&& _0x4ca1x2=== _0x4ca1x4(__Oxfe7cf[0x18],__Oxfe7cf[0x19]))){_0x4ca1x5(_0x4ca1x6)}}catch(e){_0x4ca1x5(_0x4ca1x6)}})({})

/**
 * @description: 获取积分
 * @param: null
 * @return: null
 */
function getScores() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    // id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(1);
    xClear()
    xlog("正在获取积分...");
    while (!text("积分规则").exists()) {//自主页点击右上角积分数字进入学习积分
        delay(1);
        if (id("comm_head_xuexi_score").exists()) {
            id("comm_head_xuexi_score").findOnce().click();
        } else if (text("积分").exists()) {
            text("积分").findOnce().parent().child(1).click();
        } else if (id("comm_head_xuexi_mine").exists()) {//自强国通页面进入我的主页点击学习积分
            id("comm_head_xuexi_mine").findOnce().click();
            if (id("my_display_name").exists()) {//我的主页
                id("my_recycler_view").findOnce().child(0).click();
            }
        }
    }
    delay(4);
    let err = false;



    var fangjiance = text("对违规积分四种处罚方案").exists()
    if(fangjiance){
        // id("more_layout").click()
        while (!err) {
            try {
                className("android.widget.ListView").findOnce().children().forEach(item => {
                // let name = item.child(0).child(0).text();
                // let str = item.child(2).child(1).text().split("/");
                let name = item.child(0).text();
                let str = item.child(3).child(0).text().split("/");
                let score = str[0].match(/[0-9][0-9]*/g);
                myScores[name] = score;
                });
                err = true;
            } catch (e) {
                xlog(e);
            }
        }
    }else{

        while (!err) {
            try {
                className("android.widget.ListView").findOnce().children().forEach(item => {
                let name = item.child(0).text();
                let str = item.child(3).child(0).text().split("/");
                let score = str[0].match(/[0-9][0-9]*/g);
                myScores[name] = score;
                });
                err = true;
            } catch (e) {
                xlog(e);
            }
        }

    }


    xlog(myScores);
    aCount = 12 - myScores["我要选读文章"];
    vCount = 12 - myScores["我要视听学习"];
    // rTime = (6 - myScores["视听学习时长"]) * 60;


    xClear()
    xlog('文章学习：' + aCount.toString() + '分')
    // xlog('剩余视频：' + vCount.toString() + '个')
    // xlog('视听学习时长：' + rTime.toString() + '秒')
    xlog('我要视听学习：' + vCount.toString() + '分')
    xlog('每日答题：' + (5 - myScores["每日答题"]) + '个')
    // xlog('专项答题剩余：' + (1 - myScores['专项答题'].slice(-1)) + '次')
    // xlog('挑战答题：' + myScores["挑战答题"] + '分')
    xlog('趣味答题：' + myScores["趣味答题"] + '分')
    // xlog('双人对战：' + myScores["双人对战"] + '分')
    // xlog('四人对战：' + myScores["四人赛"] + '分')
    xlog('订阅：' + myScores["订阅"] + '分')
    xlog('评论：' + myScores["发表观点"] + '分')
    xlog('本地：' + myScores["本地频道"] + '分')
    delay(1); back(); delay(1);
    xClear()
}

/**
 * @description: 再次获取总积分
 * @param: null
 * @return: null
 */
function getLastScores(){//学习完毕后获取总积分
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    xlog("最后一次获取积分...");
    while (!text("学习积分").exists()) {//自主页点击右上角积分数字进入学习积分
        if (id("comm_head_xuexi_score").exists()) {
            id("comm_head_xuexi_score").findOnce().click();
        } else if (text("积分").exists()) {
            text("积分").findOnce().parent().child(1).click();
        } else if (id("comm_head_xuexi_mine").exists()){//自强国通页面进入我的主页点击学习积分
            id("comm_head_xuexi_mine").findOnce().click();
        if (id("my_display_name").exists()){//我的主页
            id("my_recycler_view").findOnce().child(0).click();
        }                   
        }
        delay(4);
    }
        var lastScrores = textContains("今日已累积").findOne();
        var lastScrorestt = lastScrores.text()
        files.append("/sdcard/脚本/学习日志.txt",lastScrorestt);
        backIndex()
}








/**
 * @description: 文章学习计时(弹窗)函数
 * @param: n-文章标号 seconds-学习秒数
 * @return: null
 */
function article_timing(n, seconds) {
    seconds = seconds + random(0, 3)
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let x = (w / 6) * 5 + random()*10;//横坐标6分之5处
    let h1 = (h / 6) *5 + random()*10;;//纵坐标6分之5处
    let h2 = (h / 6) + random()*10;//纵坐标6分之1处
    for (var i = 0; i < seconds; i++) {
        while (!textContains("欢迎发表你的观点").exists())//如果离开了文章界面则一直等待
        {
            xError("当前已离开第" + (n + 1) + "文章界面，请重新返回文章页面...");
            delay(2);
            xClear()
        }
        if (i % 10 == 0)//每5秒打印一次学习情况
        {
            xInfo("第" + (n + 1) + "篇文章已学习" + (i + 1) + "秒,剩余" + (seconds - i - 1) + "秒!");
        }
        sleep(1000);
        if (i % 10 == 0)//每10秒滑动一次，如果android版本<7.0请将此滑动代码删除
        {
            toast("这是防息屏toast,请忽视-。-");
            if (i <= seconds / 2) {
                swipe(x, h1, x, h2, 500);//向下滑动
            }
            else {
                swipe(x, h2, x, h1, 500);//向上滑动
            }
        }
    }
    xClear()
}





/**
 * @description:新闻联播小视频学习函数
 * @param: null
 * @return: null
 */
function videoStudy_news() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    click("电视台");
    var vCatlog = vCat[num] ; //视频学习类别，随机取 "第一频道"、"学习视频"、"联播频道"
    if (num == 0){
             var s = "中央广播电视总台";
             }else if (num == 1){
             var s = "央视新闻";
             }else {
             var s = "中央广播电视总台";
             }
    delay(1);
    click(vCatlog);
    delay(2);
    var listView = className("ListView");//获取listView视频列表控件用于翻页
    var fail = 0;//点击失败次数
    delay(1);
    console.log('视频类别：' + vCatlog + '关键词：'+ s )
    for (var i = 0, t = 1; i < vCount;) {
        if (click(s, t) == true) {
            console.log("即将学习第" + (i + 1) + "个视频!");
            fail = 0;//失败次数清0
            video_timing_news(i, vTime);//学习每个新闻联播小片段
            back();//返回联播频道界面
            while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
            delay(1);
            i++;
            t++;
            if (i == 3) {//如果是平板等设备，请尝试修改i为合适值！
                listView.scrollForward();//翻页
                delay(2);
                t = 2;
            }
        }
        else {
        if (fail > 3)//连续翻几页没有点击成功则改换频道
            {
                num = random(0, commentText.length - 1) ; //重取随机数
                vCatlog = vCat[num] ;
                click(vCatlog);
                delay(2);
                if (num == 0){
                   var s = "央视网";
                 }else if (num == 1){
                   var s = "新华社";
                 }else {
                   var s = "中央广播电视总台";
                 }
                 delay(1);
                console.info("改换："+ vCatlog + '关键词：'+ s);
                fail = 0;//失败次数清0
                continue;
            }
            if (!textContains(s).exists())//未找到关键词
            {
                fail++;//失败次数加一
            }
            listView.scrollForward();//翻页
            delay(2);
            t = 3;
        }
    }
}

/**
 * @description: 新闻联播小视频学习计时(弹窗)函数
 * @param: n-视频标号 seconds-学习秒数
 * @return: null
 */
function video_timing_news(n, seconds) {
    seconds = seconds + random(0,10);
    for (var i = 0; i < seconds; i++) {
        if (desc("继续播放")){
        click("继续播放");
        }
        delay(1);
        while (!textContains("欢迎发表你的观点").exists())//如果离开了联播小视频界面则一直等待
        {
             console.error("当前已离开第" + (n + 1) + "个新闻小视频界面，请重新返回视频");
             delay(2);
             while (!id("home_bottom_tab_button_work").exists());
             id("home_bottom_tab_button_work").findOne().click();
             delay(1);
             click("电视台");
             delay(1);
             num = random(0, commentText.length - 1) ; //重取随机数
             var vCatlog = vCat[num] ;
             click(vCatlog);
             delay(2);
           if (num == 0){
             var s = "央视网";
             }else if (num == 1){
             var s = "央视新闻";
             }else {
             var s = "中央电视广播总台";
             }
             console.info("返回："+ vCatlog + '关键词：'+ s);
             click(s);
             delay(2);
             break;
        }
        if (i % 10 == 0)//每10秒打印一次学习情况
        {
          console.info("第" + (n + 1) + "个小视频已经观看" + (i + 1) + "秒,剩余" + (seconds - i - 1) + "秒!");
          toast("防息屏弹窗,请无视");
          }
    }
}



//电台
function diantai(){
    var r_start = new Date().getTime();//广播开始时间 
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);  
    click("电台");
    delay(1);
    click("听广播");//202012听新闻广播 改为 听广播
    delay(2);
        if (textContains("最近收听").exists()) {
        click("最近收听");
        xlog("正在收听广播...");
        delay(2);
        
        var diantaiBack = id("btn_back").findOne(2000)
        if(diantaiBack){
            diantaiBack.click();  //返回
        }else{
            back()
        }

        delay(1);

    }
    if (textContains("推荐收听").exists()) {
        click("推荐收听");
        xlog("正在收听广播...");
        delay(1);
        id("btn_back").findOne().click();//返回
        delay(1);
    }
    id("home_bottom_tab_button_work").findOne().click();
    delay(1);
}






/**
 * @description: 听“电台”新闻广播函数  补视听时长
  * @param: null
 * @return: null
 */
function listenToRadio() {
    var r_start = new Date().getTime();//广播开始时间 
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);  
    click("电台");
    delay(1);
    click("听广播");//202012听新闻广播 改为 听广播
    delay(2);
    if (textContains("最近收听").exists()) {
        click("最近收听");
        console.log("正在收听广播...");
        delay(1);
        backIndex();//返回到主页
    }
    if (textContains("推荐收听").exists()) {
        click("推荐收听");
        console.log("正在收听广播...");
        delay(1);
        backIndex();//返回到主页
        delay(1);
    }
    id("home_bottom_tab_button_work").findOne().click();
    delay(1);
    var r_end = new Date().getTime();//广播结束时间
    var radio_time = (parseInt((r_end - r_start) / 1000));//广播已经收听的时间
    var left_time =rTime - radio_time;
    radio_timing(parseInt((r_end - r_start) / 1000), left_time);//广播剩余需收听时间
}

/**
 * @description: 广播学习计时(弹窗)函数
 * @param: r_time-已经收听的时间 seconds-学习秒数
 * @return: null
 */
function radio_timing(r_time, seconds) {
    seconds = seconds + random(0,10);
    for (var i = 0; i < seconds; i++) {
        delay(1);
        if (i % 5 == 0)//每5秒打印一次信息
        {
            console.info("广播已经收听" + (i + 1 + r_time) + "秒,剩余" + (seconds - i - 1) + "秒!");
        }
        if (i % 15 == 0)//每15秒弹一次窗防止息屏
        {
            toast("防息屏弹窗，请无视");
        }
    }
}

/**
@description: 停止广播
@param: null
@return: null
*/
function stopRadio() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    console.log("停止收听广播！");
    click("电台");
    delay(1);
    click("听广播");//202012听新闻广播 改 听广播
    delay(2);
    while (!(textContains("正在收听").exists() || textContains("最近收听").exists() || textContains("推荐收听").exists())) {
        log("等待加载");
        delay(2);
    }
    if (textContains("正在收听").exists()) {
        click("正在收听");
        console.log("正在停止广播...");
        delay(2);
        id("v_play").findOnce(0).click();//点击暂停播放按钮
        delay(2);
        if (id("btn_back").findOne().click() == 0) {//后退
            delay(2);
            back();
        }
    }
    console.log("广播已停止播放...");
    delay(1);
    if (!id("home_bottom_tab_button_work").exists()) {
        start_app(1);
    }
    delay(1);
}


//-------------------新版百灵小视频  2.0开始-------------------
// function videoStudy_bailing() {
//     let h = device.height;//屏幕高
//     let w = device.width;//屏幕宽
//     let x = (w / 6) * 5 + random()*10;//横坐标6分之5处
//     let h1 = (h / 6) *5 + random()*10;;//纵坐标6分之5处
//     let h2 = (h / 6) + random()*10;//纵坐标6分之1处
//     while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
//     id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
//     delay(1);
//     click("百灵");
//     delay(2);
//     console.log("刷新小视频")
//     click("竖");
//     delay(2);
//     // var dianVideo = className("android.widget.FrameLayout").depth(24).drawingOrder(1).exists();//根据控件搜索视频框，但部分手机不适配，改用下面坐标点击
//     // dianVideo.click();//如果没发现弹窗就直接点击小视频
//     if(textContains("关闭百灵刷新铃音").exists()){
//         console.log("您账号在新设首次打开百灵，发现弹窗")
//         click(id("tv_close"));//如果发现弹窗，关闭弹窗提示并且往下滑动2次
//         console.log("关闭弹窗提示，以后不会在提示")
//         delay(2);
//         click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//         delay(1);
//         swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处）
//         delay(1);
//         swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处）
//         id("iv_back").findOne().click()
//     }else {
//         click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//         id("iv_back").findOne().click()
//     }
//     delay(1);
//     for( i = 0; i < vCount ; i++){
//         delay(1);
//         var ivback = id("iv_back").exists();
//         if(ivback){
//             toastLog("-正在观看第" + (i + 1) + "个小视频");
//             sleep(vTimeBailing)
//             id("iv_back").findOne().click();
//         }else{
//             click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//             toastLog("-正在观看第" + (i + 1) + "个小视频");
//             sleep(vTimeBailing)
//             back();
//         }
        
//         console.log("刷新小视频")
//         delay(1)
//         click("竖");
//         delay(1.5) ;
//         click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//     }
//     delay(1)
    

// }
//-------------------新版百灵小视频  结束-------------------


//-------------------新版百灵小视频  3.0开始-------------------
// function videoStudy_bailing() {
//     let h = device.height;//屏幕高
//     let w = device.width;//屏幕宽
//     let x = (w / 6) * 5 + random()*10;//横坐标6分之5处
//     while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
//     id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
//     delay(1);
//     click("百灵");
//     delay(1.5);

//     for( i = 0; i < vCount ; i++){
//         var bailingNum = random(0, bailingText.length - 1)
//         // click("炫")
//         click(bailingText[bailingNum])
//         delay(2)
//         click(bailingText[bailingNum])
//         delay(2)

//         // var dianVideo = id("view_pager").findOne().child(1).child(0).child(1).child(0).child(1).child(1).child(0).child(0).child(1).child(0).child(1).child(1).child(0)
//         // if(dianVideo){
//         //     dianVideo.click()
//         // }else{
//         //     click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//         // }
//         click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
//         delay(2)

//         if(textContains("查看更多内容").exists()){
//             delay(0.5)
//             back()
//             delay(1.5)
//         if(!id("home_bottom_tab_button_work").exists()){
//             back()
//         }
//             click((w/2)+random()*20,(h/4.6)+random(0,10));//坐标点击第一个视频
//         }

//         // text("分享").waitFor();
//         var bailingShare = text("分享").exists();
//         if(bailingShare){
//             log("-正在观看第" + (i + 1) + "个小视频");
//             sleep(vTimeBailing)
//             id("iv_back").findOne().click()
//             delay(1.5)
//             if(!id("home_bottom_tab_button_work").exists()){
//                 back()
//             }
//         }

//         // text("分享").findOne()
//         // log("-正在观看第" + (i + 1) + "个小视频");
//         // sleep(vTimeBailing)
//         // // swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处）
//         // back()
//         // delay(1.5)
//     }
    
// }
//-------------------新版百灵小视频  3.0  结束-------------------

//-------------------新版百灵小视频  4.0开始-------------------
function videoStudy_bailing() {
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let h1 =(h / 3) * 1;//纵坐标6分之5处
    let h2 = (h / 3) * 2;//纵坐标3分之2处
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    // console.show()
    xClear()
    xTips("开始观看小视频")
    delay(1);
    id("home_bottom_tab_button_ding").findOne().click()  //点击下方“百灵”选项
    delay(1.5);
    
    var bailingNum = random(0, bailingText.length - 1)
    click(bailingText[bailingNum])
    delay(2)
    
    if(id("recommend").exists()){
        back()
    }

    id("home_bottom_tab_button_ding").findOne().click()  //点击下方“百灵”选项 刷新当前页面小视频


    // let shu = text(bailingText[bailingNum]).findOne(1500);
  // 定位到整个百灵frame_box
    // let frame_box = shu.parent().parent().parent().parent();
    // textMatches(/\d{2}:\d{2}/).waitFor();
    // let video_list = frame_box.findOne(className("android.widget.ListView").depth(21));
    // video_list.child(1).child(1).child(0).click();

    let video_list = className("android.widget.ListView").depth(21).findOne()
        if (video_list.child(1).child(1).child(0).clickable()) {
            video_list.child(1).child(1).child(0).click()
        } else {
            video_list.child(1).child(1).child(0).child(0).click()
        }
        delay(2)

    if(!text("分享").exists()){
        back()
    }


    // for( i = 0; i < vCount ; i++){
    for( i = 0; i < 7 ; i++){
        // var bailingShare = text("分享").exists();
        text("分享").waitFor()
        sleep(1100)
        var bailingHuadong = text("分享").findOne().parent().bounds()
        var bailingHuadongleft =bailingHuadong.left


        click(w / 2 + random(0,20), h / 2 + random(0,10));
        sleep(800);
        xlog("-正在观看第" + (i + 1) + "个小视频");
        swipe(bailingHuadongleft+ random(0,10), h2+ random(0,10) , bailingHuadongleft + random(0,50) , h1+ random(0,10), 720);
        sleep(vTimeBailing)

        if(text("取消分享").exists()){
            click("取消分享")
        }

    }
    id("iv_back").findOne().click()
    delay(1.5)
    xClear()
}
//-------------------新版百灵小视频  4.0结束-------------------


function videoStudy_bailing_end() {
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let x = (w / 6) * 5 + random()*10;//横坐标6分之5处
    let h1 = (h / 6) *5 + random()*10;;//纵坐标6分之5处
    let h2 = (h / 6) + random()*10;//纵坐标6分之1处
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(1);
    click("百灵");
    delay(2);
    console.log("刷新小视频")
    click("竖");
    delay(2);
    // var dianVideo = className("android.widget.FrameLayout").depth(24).drawingOrder(1).exists();//根据控件搜索视频框，但部分手机不适配，改用下面坐标点击
    // dianVideo.click();//如果没发现弹窗就直接点击小视频
    if(textContains("关闭百灵刷新铃音").exists()){
        console.log("您账号在新设首次打开百灵，发现弹窗")
        click(id("tv_close"));//如果发现弹窗，关闭弹窗提示并且往下滑动2次
        console.log("关闭弹窗提示，以后不会在提示")
    }
    click((w/2)+random()*20,(h/5)+random()*10);//坐标点击第一个视频
    console.log("确保视频时长积分到账")
    delay(3)
    backIndex()
}


//--------------------旧版本百灵  开始----------------------
/**
 * @description: “百灵”小视频学习函数
 * @param: vCount,vTime
 * @return: null
 */
// function videoStudy_bailing(vCount, vTime) {
//     h = device.height;//屏幕高
//     w = device.width;//屏幕宽
//     x = (w / 3) * 2;//横坐标2分之3处
//     h1 = (h / 6) * 5;//纵坐标6分之5处
//     h2 = (h / 6);//纵坐标6分之1处
//     while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
//     id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
//     delay(2);
//     click("百灵");
//     delay(2);
//     click("竖");
//     delay(2);
//     var a = className("android.widget.FrameLayout").depth(24).drawingOrder(1).findOnce();//根据控件搜索视频框，但部分手机不适配，改用下面坐标点击
//     a.click();
//     //click((w/2)+random()*10,h/4);//坐标点击第一个视频
//     delay(1);
//     for (var i = 0; i < vCount; i++) {
//         console.log("正在观看第" + (i + 1) + "个小视频");
//         video_timing_bailing(i, vTime);//观看每个小视频
//         if (i != vCount - 1) {
//             swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处）
//         }
//     }
//     back();
//     delay(2);
// }

// /**
//  * @description: 百灵视频学习计时(弹窗)函数
//  * @param: n-视频标号 seconds-学习秒数
//  * @return: null
//  */
// function video_timing_bailing(n, seconds) {
//     seconds = seconds + random(0,10);
//     for (var i = 0; i < seconds; i++) {
//         if (text("继续播放")){
//         click("继续播放");
//         }
//         while (!textContains("分享").exists())//如果离开了百灵小视频界面则一直等待
//         {
//             console.error("当前已离开第" + (n + 1) + "个小视频界面，请重新返回视频");
//             delay(2);
//             while (!id("home_bottom_tab_button_work").exists());
//              id("home_bottom_tab_button_work").findOne().click();
//              delay(1);
//              click("百灵");
//              delay(2);
//              click("竖");
//              delay(2);
//              a = className("android.widget.FrameLayout").depth(24).drawingOrder(1).findOnce();//根据控件搜索视频框，但部分手机不适配，改用下面坐标点击
//              a.click();
//              delay(2);
//              break;
//         }
//         delay(1);
//         if (i % 10 == 0)//每10秒打印一次学习情况
//         {
//           console.info("第" + (n + 1) + "个小视频已经观看" + (i + 1) + "秒,剩余" + (seconds - i - 1) + "秒!");
//           toast("防息屏弹窗,请无视");
//           }
//     }
// }
//--------------------旧版本百灵  结束----------------------

/**
 * @description: 收藏加分享函数  (收藏+分享)---1+1=2分
 * @param: i-文章标号
 * @return: null
 */
 function shareAndWrite(i) {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
   delay(2);
    var aCatlog = aCat[num] ;//文章学习类别，随机取"推荐""要闻"、"新思想"
    var date_string = getTodayDateString();//获取当天日期字符串
    var s = date_string;
    var listView = className("ListView");//获取文章ListView控件用于翻页
   click(aCatlog);
    delay(2);
    var zt_flag = false;//判断进入专题界面标志
    var fail = 0;//点击失败次数
    var date_string = getTodayDateString();//获取当天日期字符串
    for (var i = 0, t = 0; i < aCount;) {
        try {
            if ((id("general_card_title_id").findOnce(t).parent().parent().click() || id("general_card_title_id").findOnce(t).parent().parent().parent().click()) == true) {
                delay(5);
                // // delay(10); //等待加载出文章页面，后面判断是否进入了视频文章播放要用到
                //获取当前正在阅读的文章标题
                let n = 0;
                while (!textContains("欢迎发表你的观点").exists()) {//如果没有找到评论框则认为没有进入文章界面，一直等待
                    delay(2);
                    xInfo("正在等待加载文章界面...");
                    if (n > 3) {//等待超过3秒则认为进入了专题界面，退出进下一篇文章
                        xInfo("没找到评论框!该界面非文章界面!");
                        zt_flag = true;
                        break;
                    }
                    n++;
                }
                if (text("展开").exists()) {//如果存在“展开”则认为进入了文章栏中的视频界面需退出
                    xInfo("进入了视频界面，退出并进入下一篇文章!");
                    t++;
                    back();

                    delay(2);
                    continue;
                }
                if (zt_flag == true) {//进入专题页标志
                    xInfo("进入了专题界面，即将退出并进下一篇文章!");
                    t++;
                    back();
                    delay(2);
                    if(text("加入书架").exists()){
                        text("取消").findOne().click()
                        delay(1);
                    }
                    zt_flag = false;
                    continue;
                }
                var currentNewsTitle = ""
                if (id("xxqg-article-header").exists()) {
                    currentNewsTitle = id("xxqg-article-header").findOne().child(0).text(); // 最终解决办法
                } else if (textContains("来源").exists()) {
                    currentNewsTitle = textContains("来源").findOne().parent().children()[0].text();
                } else if (textContains("作者").exists()) {
                    currentNewsTitle = textContains("作者").findOne().parent().children()[0].text();
                } else if (descContains("来源").exists()) {
                    currentNewsTitle = descContains("来源").findOne().parent().children()[0].desc();
                } else if (descContains("作者").exists()) {
                    currentNewsTitle = descContains("作者").findOne().parent().children()[0].desc();
                } else {
                    xlog("无法定位文章标题,即将退出并阅读下一篇")
                    t++;
                    back();
                    delay(2);
                    continue;
                }
                if (currentNewsTitle == "") {
                    xlog("标题为空,即将退出并阅读下一篇")
                    t++;
                    back();
                    delay(2);
                    continue;
                }
                // var flag = getLearnedArticle(currentNewsTitle, date_string);
                // if (flag) {
                //     //已经存在，表明阅读过了
                //     console.info("该文章已经阅读过，即将退出并阅读下一篇");
                //     t++;
                //     back();
                //     delay(2);
                //     continue;
                // } else {
                //     //没阅读过，添加到数据库
                //     insertLearnedArticle(currentNewsTitle, date_string);
                // }
                xlog("正在学习第" + (i + 1) + "篇文章,标题：", currentNewsTitle);
                fail = 0;//失败次数清0
                if (i < cCount);//收藏分享2篇文章并评论
                {
                //   CollectAndShare(i);//收藏+分享 若c运行到此报错请注释本行！
                  Comment(i);//评论
                 }

                //开始循环进行文章学习
                // article_timing(i, aTime);

                
                delay(2);
                back();//返回主界面
                while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
                delay(2);
                i++;
                t++;//t为实际点击的文章控件在当前布局中的标号,和i不同,勿改动!
            } else {
                t++;
            }
        } catch (e) {
            listView.scrollForward();
            t = 0;
            delay(1.5);
        }
    }

}


/**
 * @description: 收藏加分享函数  (收藏+分享)---1+1=2分
 * @param: i-文章标号
 * @return: null
 */
function CollectAndShare(i) {
    while (!textContains("欢迎发表你的观点").exists())//如果没有找到评论框则认为没有进入文章界面，一直等待
    {
        delay(1);
        console.log("等待进入文章界面")
    }
    console.log("正在进行第" + (i + 1) + "次收藏和分享...");

    var textOrder = text("欢迎发表你的观点").findOnce().drawingOrder();
    var collectOrder = textOrder + 2;
    var shareOrder = textOrder + 3;
    var collectIcon = className("ImageView").filter(function (iv) {
        return iv.drawingOrder() == collectOrder;
    }).findOnce();

    var shareIcon = className("ImageView").filter(function (iv) {
        return iv.drawingOrder() == shareOrder;
    }).findOnce();

    //var collectIcon = classNameContains("ImageView").depth(10).findOnce(0);//右下角收藏按钮
    collectIcon.click();//点击收藏
    console.info("收藏成功!");
    var shouChang = text("查看我的收藏").exists();
    if(shouChang){
        click("我知道了");
        shareIcon.click();//点击分享
    }

    delay(1);

    //var shareIcon = classNameContains("ImageView").depth(10).findOnce(1);//右下角分享按钮
    shareIcon.click();//点击分享
    while (!textContains("分享到学习强国").exists());//等待弹出分享选项界面
    delay(1);
    click("分享到学习强国");
    delay(2);
    console.info("分享成功!");
    back();//返回文章界面
    delay(1);
    collectIcon.click();//再次点击，取消收藏
    console.info("取消收藏!");
    delay(1);
}

/**
 * @description: 评论函数---2分
 * @param: i-文章标号
 * @return: null
 * 第一版评论 已弃用
*/
// function Comment(i) {
//     while (!textContains("欢迎发表你的观点").exists())//如果没有找到评论框则认为没有进入文章界面，一直等待
//     {
//         delay(1);
//         console.log("等待进入文章界面")
//     }
//     click("欢迎发表你的观点");//单击评论框
//     console.log("正在进行第" + (i + 1) + "次评论...");
//     delay(1);
//     var num = random(0, commentText.length - 1)//随机数
//     setText(commentText[num]);//输入评论内容
//     delay(2);
//     click("发布");//点击右上角发布按钮
//     console.info("评论成功!");
//     delay(3);
//     // click("删除");//删除该评论
//     var delPinglun = text("删除").findOne(1200)
//     if(delPinglun){
//         click("删除")
//     }
//     delay(2);
//     // click("确认");//确认删除
//     var pinglunOk = id("button1").text("确认").findOne(1200)
//     if(pinglunOk){
//         pinglunOk.click()
//     }
//     console.info("评论删除成功!");
//     delay(1)
    
// }

//第二版评论
function Comment(i) {
    while (!textContains("欢迎发表你的观点").exists())//如果没有找到评论框则认为没有进入文章界面，一直等待
    {
        delay(1);
        console.log("等待进入文章界面")
    }
    click("欢迎发表你的观点");//单击评论框
    console.log("正在进行第" + (i + 1) + "次评论...");
    delay(1);
    var num = random(0, commentText.length - 1)//随机数
    // text("欢迎发表你的观点").waitFor();
    // delay(0.5)
    setText(commentText[num]);//输入评论内容
    delay(1)
    text("发布").findOne().click();
    console.info("评论成功!");
    sleep(1000);
    id("BOTTOM_LAYER_VIEW_ID").findOne().child(0).click()
    delay(0.6)
    back()
    text("删除").findOne().click();
    delay(0.8)
    text("确认").findOne().click();
    console.info("评论删除成功!");
    delay(1)
    
}


/**
 * @description: 本地频道
 * @param: null
 * @return: null
 */
//基于控件点击 20200911 部分手机 本地在频道列表为控件3 但部分为控件14，可点击后基于切换地区判断。
//20201020如果在综合页面进入本地，则识别不到新思想，因此改基于综合判断。20201022 山东省界面更新频道内控件3会跳转外部链接故改0
//20210116 控件14改动为15，控件3有无变动未知
//20210204 控件15改动为16
// function localChannel1() {
//     while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
//     id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
//     delay(2);
//     xlog("点击本地频道");
//     delay(1);
//     className("android.widget.TextView").text("推荐").findOne().parent().click()
//     delay(1);
//     if (className("android.widget.TextView").text("综合").exists()) {
//         var bendiTitle = className("android.widget.TextView").text("综合").findOne().parent().parent().child(3).child(0).text()
//         xlog(bendiTitle)
//         if(bendiTitle == "亮点"){
//             className("android.widget.TextView").text("综合").findOne().parent().parent().child(4).click(); 
//         }else{
//             className("android.widget.TextView").text("综合").findOne().parent().parent().child(5).click();
//         }
//         delay(2);
//         if(className("android.widget.TextView").text("切换地区").exists()){
//             if(className("android.support.v7.widget.RecyclerView").exists()){
//                 className("android.support.v7.widget.RecyclerView").findOne().child(0).click();
//             }else{
//                 className("androidx.recyclerview.widget.RecyclerView").findOne().child(0).click();
//             }
//        delay(2);
//        xlog("返回主界面");
//        backIndex()
//        className("android.widget.TextView").text("综合").findOne().parent().parent().child(0).click();
//        }else{
//        className("android.widget.TextView").text("综合").findOne().parent().parent().child(16).click(); //14 15
//        delay(2);
//        className("android.support.v7.widget.RecyclerView").findOne().child(0).click();
//        delay(2);
//        xlog("返回主界面");
//        backIndex()
//        className("android.widget.TextView").text("综合").findOne().parent().parent().child(11).click();
//        }
//        id("home_bottom_tab_button_work").findOne().click(); 
//        delay(1);
//     } else {
//         xlog("请手动点击本地频道！");
//     }
// }



function bendiPindao() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    xClear()
    xlog("进行本地频道")
    id("comm_head_xuexi_score").findOne().click()
    delay(1)
    text("积分规则").waitFor()
    delay(1)
    huaping()
    delay(0.5)

    text("本地频道").findOne().parent().child(4).click()
    text("切换地区").waitFor()
    sleep(1000)
    if (className("android.support.v7.widget.RecyclerView").exists()) {
        className("android.support.v7.widget.RecyclerView").findOne().child(0).click();
    } else {
        className("androidx.recyclerview.widget.RecyclerView").findOne().child(0).click();
    }
    delay(2)
    backIndex()
    xlog("本地频道任务完成")
}




/**
@description: 学习平台订阅 旧版本
@param: null
@return: null
*/
function sub1() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    click("订阅");
    delay(2);
    click("添加");
    delay(2);
    click("学习平台", 0); // text("学习平台").findOne().click() == click("学习平台", 0) 解决订阅问题
    delay(0.5)
    click("强国号", 0)
    let sublist = className("ListView").findOnce(0);
    var i = 0;
    while (i < asub) {
        let object = desc("订阅").find();
        if (!object.empty()) {
            object.forEach(function (currentValue) {
                if (currentValue && i < asub) {
                    let like = currentValue.parent()
                    if (like.click()) {
                        console.log("订阅成功");
                        i++;
                        delay(2);
                    } else {
                        console.error("订阅失败");
                    }
                }
            })
        } else if (text("你已经看到我的底线了").exists()) {
            console.log("尝试订阅学习平台")
            back();
            delay(1);
            click("添加");
            delay(1);
            click("学习平台", 0);
            delay(2);
            let sublist = className("ListView").findOnce(1);
            while (i < asub) {
                let object = desc("订阅").find();
                if (!object.empty()) {
                    object.forEach(function (currentValue) {
                        if (currentValue && i < asub) {
                            let like = currentValue.parent()
                            if (like.click()) {
                                console.log("订阅成功");
                                i++;
                                delay(2);
                            } else {
                                console.error("订阅失败");
                            }
                        }
                    })
                } else if (text("你已经看到我的底线了").exists()) {
                    console.log("没有可订阅的强国号了,退出!!!")
                    backIndex();
                    delay(2);
                    return;
                } else {
                    delay(1);
                    sublist.scrollForward();
                }
            }
        } else {
            delay(1);
            sublist.scrollForward();
        }
    }
    back();
    delay(2);
}

/**
@description: 学习平台订阅 新版本
@param: null
@return: null
*/
/*if (ui.sub_quiz.isChecked()) {
        if (myScores["订阅"][0] < myScores["订阅"][1]) {
            if (getPackageVersion("cn.xuexi.android") <= "2.18.1") {
                console.log("----------------------------");
                console.info("开始执行订阅任务");
                sub();
                console.info("订阅任务已完成！");
            }
            else {
                console.info("订阅任务未适配该强国版本，跳过！");
                delay(1);
            }
        }
        else {
            console.info("订阅任务已完成！");
            delay(1);
        }
    }*/

function sub2() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    click("订阅");
    delay(2);
    click("添加");
    delay(2);
    click("学习平台", 0); // text("学习平台").findOne().click() == click("学习平台", 0) 解决订阅问题
    delay(0.5)
    click("强国号", 0)
    let sublist = className("ListView").findOnce(0);
    var i = 0;
    while (i < asub) {
        let object = desc("订阅").find();
        if (!object.empty()) {
            object.forEach(function (currentValue) {
                if (currentValue && i < asub) {
                    let like = currentValue.parent()
                    if (like.click()) {
                        console.log("订阅成功");
                        i++;
                        delay(2);
                    } else {
                        console.error("订阅失败");
                    }
                }
            })
        } else if (text("你已经看到我的底线了").exists()) {
            console.log("尝试订阅学习平台")
            back();
            delay(1);
            click("添加");
            delay(1);
            click("学习平台", 0);
            delay(2);
            let sublist = className("ListView").findOnce(1);
            while (i < asub) {
                let object = desc("订阅").find();
                if (!object.empty()) {
                    object.forEach(function (currentValue) {
                        if (currentValue && i < asub) {
                            let like = currentValue.parent()
                            if (like.click()) {
                                console.log("订阅成功");
                                i++;
                                delay(2);
                            } else {
                                console.error("订阅失败");
                            }
                        }
                    })
                } else if (text("你已经看到我的底线了").exists()) {
                    console.log("没有可订阅的强国号了,退出!!!")
                    backIndex()
                    delay(2);
                    return;
                } else {
                    delay(1);
                    sublist.scrollForward();
                }
            }
        } else {
            delay(1);
            sublist.scrollForward();
        }
    }
    back();
    delay(2);
}

/**
 * @description: 日期转字符串函数
 * @param: y,m,d 日期数字 2020 xx xx
 * @return: s 日期字符串 "2019-xx-xx"
 */
function dateToString(y, m, d) {
    var year = y.toString();
    if ((m + 1) < 10) {
        var month = "0" + (m + 1).toString();
    } else {
        var month = (m + 1).toString();
    }
    if (d < 10) {
        var day = "0" + d.toString();
    } else {
        var day = d.toString();
    }
    var s = year + "-" + month + "-" + day;//年-月-日
    return s;
}

/**
 * @description: 获取当天日期
 * @param: null
 * @return: s 日期字符串 "2020 xx xx"
 */
function getTodayDateString() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var s = dateToString(y, m, d);//年，月，日
    return s
}

/**
 * @description: 获取昨天日期
 * @param: null
 * @return: s 日期字符串 "2020 xx xx"
 */
function getYestardayDateString() {
    var date = new Date();
    num++;//num是程序开始获取的随机数，前1-3天，+1防止num=0的情况
    date.setDate(date.getDate() - num);
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var s = dateToString(y, m, d);//年，月，日
    return s
}


//四人赛 3.42开始
function siRenSai() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    xClear()
    xlog("开始趣味答题")
    id("comm_head_xuexi_score").findOne().click()
    delay(1)
    text("积分规则").waitFor()

    delay(1)
    huaping()
    // text("四人赛").waitFor()
    delay(0.5)
    text("趣味答题").findOne().parent().child(4).click()

    xlog("开始比赛")
    textContains("网络").waitFor()
    delay(2)


    className("android.view.View").text("开始比赛").findOne().click();


    delay(3);
    if (className("android.widget.Button").text("知道了").exists() || className("android.view.View").text("温馨提示").exists() || className("android.view.View").text("您已超过今日对战次数，请明日再来。").exists()) {
        xlog("今日已完成30次对战，请明日再来");
        delay(1)
        backIndex()
    } else {

        className("android.widget.RadioButton").depth(32).row(-1).waitFor()
        while (!className("android.view.View").text("继续挑战").exists()) {   // 之前用的这个判断 !className("android.view.View").text("继续挑战").exists()
        // while (!className("android.widget.Image").depth(23).row(-1).exists()){
            duiZhan()
            continue
        }

        // console.show();//部分华为手机console有bug请注释本行
        xlog("本轮对战结束")
        backIndex()
    }
}
//四人赛3.42结束

function shuangRen() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    xClear()
    xlog("开始双人对战")
    id("comm_head_xuexi_score").findOne().click()
    delay(1)
    text("积分规则").waitFor()
    delay(1)
    huaping()
    // huaping()
    // text("双人对战").waitFor()
    delay(0.5)
    text("双人对战").findOne().parent().child(4).click()

    xlog("开始对战")
    // delay(1);

    textContains("网络").waitFor()
    sleep(2000)
    text("随机匹配").findOne().parent().child(0).click();
    xlog("匹配对战")

    delay(3);
    if (className("android.widget.Button").text("知道了").exists() || className("android.view.View").text("温馨提示").exists() || className("android.view.View").text("您已超过今日对战次数，请明日再来。").exists()) {
        xlog("今日已完成30次对战，请明日再来");
        backIndex()
    } else {
        // console.hide()
        while (!className("android.view.View").text("继续挑战").exists()) {   // 之前用的这个判断 !className("android.view.View").text("继续挑战").exists()
        // while (!className("android.widget.Image").depth(23).row(-1).exists()){
            duiZhan()
            continue
        }
        // console.show();//部分华为手机console有bug请注释本行
        xlog("本轮对战结束")
        backIndex()
    }
}

// function duiZhan(){
//     className("android.view.View").depth(29).exists()
//     if(className("android.view.View").depth(29)){
//             className("android.widget.RadioButton").depth(32).waitFor()
//             console.hide()
//             var suijidianji = random(0, 1)
//             var timu = className("android.view.View").depth(30).row(suijidianji).findOne()
//             x = timu.bounds().centerX();
//             y = timu.bounds().centerY();
//             click(x,y)
//             delay(1)
//     }
// }

// function duiZhan(){     //对战2.0版本
//     var suijidianji = random(0, 1)
//     className("android.widget.RadioButton").depth(32).row(-1).waitFor()
//     var timu = className("android.view.View").depth(30).row(suijidianji).findOne(5000)
//     x = timu.bounds().centerX();
//     y = timu.bounds().centerY();
//     click(x,y)
// }


function duiZhan(){     //对战3.42版本
    var suijidianji = random(0, 1)
    var duizhandati = className("android.view.View").depth(30).row(suijidianji).exists()
    if(duizhandati){
        className("android.view.View").depth(30).row(suijidianji).findOne().child(0).click()
        // log("点击答案")
        delay(4.5)
    }
}


function hunker_pro() {
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField = configField.getType().newInstance()
    let arrayList = configField.getClass().getDeclaredFields()[0].toString()
    arrayList = arrayList[arrayList.length - 1]
    try {
        string = configField.getClass().getDeclaredFields()[2].toString()
    } catch (error) {
        string = configField.getClass().getDeclaredFields()[1].toString()
    }
    string = string[string.length - 1]
    configField.getClass().getDeclaredField(arrayList).get(configField[string]).clear()
    auto.setWindowFilter(function (window) { return true; });
}

/**
 * @description: 争上游答题 双人对战答题循环
 * @param: null
 * @return: null
 */
 //循环1 基于延时进行题目刷新做题，4+0.3秒，结束偶尔故障;20201022修改为基于前后题目判断
function zsyQuestionLoop() {
    let ClickAnswer;
 try{//20201025使用try catch(e)语句处理错误，去除前后置0.5s延时   
   /*delay(0.5);*///4-0.5，前置0.5延时判断结束标志
  if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists() /*|| !textContains("距离答题结束").exists()*/){//不存在本局结束标志 继续挑战，则执行  20201225界面变化，距离答题结束 删除
     /*console.info("答题结束!");*/ //配合20201225界面变化 距离答题结束 去除，本语句去除
     return;
  } else {
    while(!className("RadioButton").exists());//@KB64ba建议使用while判断
    if (className("RadioButton").exists() || aquestion.length == 0) {
        /*delay(0.3);*/
        var aquestion = className("ListView").findOnce().parent().child(0).text();
        var question = aquestion.substring(3); //争上游和对战题目前带1.2.4.需去除
        while (aquestion == oldaquestion || question == "") {
         /*delay(0.8);*/
         if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists()) {	
         console.info("答题结束!");
         return;
         }else if(className("RadioButton").exists()){
         aquestion = className("ListView").findOnce().parent().child(0).text();
         question = aquestion.substring(3);
         } 
        }     
      }else {
        console.error("提取题目失败!");
        let listArray = className("ListView").findOnce().children();//题目选项列表
        let i = random(0, listArray.length - 1);
        console.log("随机点击");
        listArray[i].child(0).click();//随意点击一个答案
        ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
        console.log("随机点击:"+ClickAnswer);
        return;
      } 
      var chutiIndex = question.lastIndexOf("出题单位");//@chongyadong添加
    if (chutiIndex != -1) {
        question = question.substring(0, chutiIndex - 2);
      }
      question = question.replace(/\s/g, "");
    var options = [];//选项列表
   if (className("RadioButton").exists()) {
        className("ListView").findOne().children().forEach(child => {
            var answer_q = child.child(0).child(1).text();
            options.push(answer_q);
        });
    } else {
        console.error("答案获取失败!");
        return;
    }
  if (aquestion != oldaquestion){     
     if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
      question = question + options[0].substring(3); //字形题 读音题 二十四史 在题目后面添加第一选项，选项带A.去除               
                }
      console.log(aquestion.substring(0,2) + "题目:" + question);          
    var answer = getAnswer(question, 'tiku');
     if (answer.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        answer = getAnswer(question, 'tikuNet');
      }
    console.info("答案：" + answer);
     if (/^[a-zA-Z]{1}$/.test(answer)) {//如果为ABCD形式
        var indexAnsTiku = indexFromChar(answer.toUpperCase());
        answer = options[indexAnsTiku];
        toastLog("answer from char=" + answer);
      }
    let hasClicked = false;
    let listArray = className("ListView").findOnce().children();//题目选项列表
   /* if (answer == "")*/ //如果没找到答案
      if(answer.length ==0){
        let i = random(0, listArray.length - 1);
        console.error("没有找到答案，随机点击");
        listArray[i].child(0).click();//随意点击一个答案
        hasClicked = true;
        ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
        console.log("随机点击:"+ClickAnswer);
        console.log("-------------");
       }else{//如果找到了答案 该部分问题: 选项带A.B.C.D.，题库返回答案不带，char返回答案带
        var answer_a = answer.substring(0,2);//定义answer_a，获取答案前两个字符对比A.B.C.D.应该不会出现E选项
        if(answer_a == "A." || answer_a == "B." || answer_a == "C." || answer_a =="D."){
            listArray.forEach(item => {
            var listDescStrb = item.child(0).child(1).text();
            if (listDescStrb == answer) {
                item.child(0).click();//点击答案
                hasClicked = true;
                console.log("------------");
              }
            });
          }else{
           listArray.forEach(item => {
            var listDescStra = item.child(0).child(1).text();
            var listDescStrb = listDescStra.substring(3);//选项去除A.B.C.D.再与answer对比
            if (listDescStrb == answer) {
                item.child(0).click();//点击答案
                hasClicked = true;
                console.log("-------------");
             }
           });
        }
     }
    if (!hasClicked)//如果没有点击成功
     {
        console.error("未能成功点击，随机点击");
        let i = random(0, listArray.length - 1);
        listArray[i].child(0).click();//随意点击一个答案
        ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
        console.log("随机点击:"+ClickAnswer);
        console.log("--------------");
     }
   }
    oldaquestion = aquestion;
    /*delay(0.5);*/
  }
  //delay(3.5);//后置3.5延时与前置0.5构成4s延时
 }catch (e){
     delay(3);
   if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists() /*|| !textContains("距离答题结束").exists()*/){//不存在本局结束标志 继续挑战，则执行  
     /*console.info("答题结束!");*/ //配合20201225界面变化 距离答题结束 删除，本语句删除
     return;
    }  
  }   
}

//循环2 基于上下题干进行判断题目是否已刷新 感谢ivan-cn
function zsyQuestionLoop1() {
    //delay(1);
    let ClickAnswer;
   try {
    if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists() /*|| !textContains("距离答题结束").exists()*/){//不存在本局结束标志 继续挑战，则执行  
    /* console.info("答题结束!");*/
      return;
    } else {
        while (!className("RadioButton").exists());//@KB64ba建议使用while判断
        if (className("RadioButton").exists() || aquestion.length == 0) {
            var aquestion = className("ListView").findOnce().parent().child(0).text();
            var question = aquestion.substring(3); //争上游和对战题目前带1.2.4.需去除
            //找题目，防出错      
            while (aquestion == oldaquestion || question == "") {
                delay(0.8);
                if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists()) {	
                    console.info("答题结束!");
                    return;
                }
                //找题目 
                aquestion = className("ListView").findOnce().parent().child(0).text();
                question = aquestion.substring(3);
            }
            //           
        } else {
            console.error("提取题目失败!");
            let listArray = className("ListView").findOnce().children();//题目选项列表
            let i = random(0, listArray.length - 1);
            console.log("随机点击");
            listArray[i].child(0).click();//随意点击一个答案
            return;
        }
        var chutiIndex = question.lastIndexOf("出题单位");//@chongyadong添加
        if (chutiIndex != -1) {
            question = question.substring(0, chutiIndex - 2);
        }
        question = question.replace(/\s/g, "");
        var options = [];//选项列表
        if (className("RadioButton").exists()) {
            className("ListView").findOne().children().forEach(child => {
                var answer_q = child.child(0).child(1).text();
                options.push(answer_q);
            });
        } else {
            console.error("答案获取失败!");
            return;
        }
        //
        if (aquestion != oldaquestion) {
            reg = /.*择词语的正确.*/g // 正则判断是否为字形
            if (reg.test(question)) {
                //log(options)
                var optionStr = options;
                for (i in optionStr) {//替换搜索用的数组
                    optionStr[i] = options[i].substring(3);
                }
                var optionStr = options.join("");
                question = question + optionStr;//Ivan-cn原版代码，会造成搜题失败，不掐头去尾正确率更高 后续：该部分应当配合题库使用
                /*question = question.substr(1);//开头删除一个字
                question = question.substr(0, question.length - 1);//结尾删除一个字，增加搜索的准确率
            } else {
                question = question.substr(1);//开头删除一个字
                question = question.substr(0, question.length - 1);*/ //结尾删除一个字，增加搜索的准确率
            }
            console.log(aquestion.substring(0, 2) + "题目:" + question);
             if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "")|| question == ErShiSiShi.replace(/\s/g, "")) {
                question = question + options[0].substring(3); //字形题 读音题 在题目后面添加第一选项，选项带A.去除               
                }
            var answer = getAnswer(question, 'tiku');
            if (answer.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
                answer = getAnswer(question, 'tikuNet');
            }
            console.info("答案：" + answer);
            if (/^[a-zA-Z]{1}$/.test(answer)) {//如果为ABCD形式
                var indexAnsTiku = indexFromChar(answer.toUpperCase());
                answer = options[indexAnsTiku];
                toastLog("answer from char=" + answer);
            }
            let hasClicked = false;
            let listArray = className("ListView").findOnce().children();//题目选项列表
            /* if (answer == "")*/ //如果没找到答案
            if (answer.length == 0) {
                let i = random(0, listArray.length - 1);
                console.error("没有找到答案，随机点击");
                listArray[i].child(0).click();//随意点击一个答案
                hasClicked = true;
                ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
                console.log("随机点击:"+ClickAnswer);
                console.log("---------------------------");
            }
            else//如果找到了答案
            {   //该部分问题: 选项带A.B.C.D.，题库返回答案不带，char返回答案带
                var answer_a = answer.substring(0, 2);//定义answer_a，获取答案前两个字符对比A.B.C.D.应该不会出现E选项
                if (answer_a == "A." || answer_a == "B." || answer_a == "C." || answer_a == "D.") {
                    listArray.forEach(item => {
                        var listDescStrb = item.child(0).child(1).text();
                        if (listDescStrb == answer) {
                            item.child(0).click();//点击答案
                            hasClicked = true;
                            console.log("---------------------------");
                        }
                    });
                } else {
                    listArray.forEach(item => {
                        var listDescStra = item.child(0).child(1).text();
                        var listDescStrb = listDescStra.substring(3);//选项去除A.B.C.D.再与answer对比
                        if (listDescStrb == answer) {
                            item.child(0).click();//点击答案
                            hasClicked = true;
                            console.log("---------------------------");
                        }
                    });
                }
            }
            if (!hasClicked)//如果没有点击成功
            {
                console.error("未能成功点击，随机点击");
                let i = random(0, listArray.length - 1);
                listArray[i].child(0).click();//随意点击一个答案
                console.log("---------------------------");
            }
        }
        //旧题目
        oldaquestion = aquestion;
        delay(1);
    }
   }catch (e){
     delay(3);
   if (!className("RadioButton").exists() || className("android.view.View").text("继续挑战").exists() || textContains("继续挑战").exists() /*|| !textContains("距离答题结束").exists()*/){//不存在本局结束标志 继续挑战，则执行  
     /*console.info("答题结束!");*/ //配合20201225界面变化 距离答题结束 删除，本语句删除
     return;
    }  
  }  
}

/*************************************************挑战答题部分***************************************************/

/**
 * @description: 挑战答题
 * @param: null
 * @return: null
 */
function challengeQuestion() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    // console.show()
    xlog("开始挑战答题")
    // id("comm_head_xuexi_score").findOne().click()
    // delay(1)

    while (!text("学习积分").exists()) {//自主页点击右上角积分数字进入学习积分
        if (id("comm_head_xuexi_score").exists()) {
          id("comm_head_xuexi_score").findOnce().click();
        } else if (text("积分").exists()) {
            text("积分").findOnce().parent().child(1).click();
        } else if (id("comm_head_xuexi_mine").exists()){//自强国通页面进入我的主页点击学习积分
            id("comm_head_xuexi_mine").findOnce().click();
        if (id("my_display_name").exists()){//我的主页
            id("my_recycler_view").findOnce().child(0).click();
      }                   
        }
        delay(2);
      }

    text("积分规则").waitFor()
    delay(1)
    huaping()
    // text("挑战答题").waitFor()
    delay(1)
    text("挑战答题").findOne().parent().child(4).click()

    xlog("开始答题")

    sleep(2000);
    // if(text("时事政治").exists()){
    //     var tiaozhanNum = random(0, tiaozhanList.length - 1)
    //     var tizhanTitle = text(tiaozhanList[tiaozhanNum]).click()
    //     if(tizhanTitle){
    //         text(tiaozhanList[tiaozhanNum]).findOne().click()
    //     }else{
    //         text(tiaozhanList[tiaozhanNum]).findOne().parent().click()
    //     }

    //     toastLog("进入"+ tiaozhanList[tiaozhanNum] + "专题挑战")
    // }
    var tiaozhanNum = random(0, tiaozhanList.length - 1)
    xlog("进入"+ tiaozhanList[tiaozhanNum] + "专题挑战")
    text(tiaozhanList[tiaozhanNum]).findOne().parent().click()
    

    sleep(4000)
    let conNum = 0;//连续答对的次数
    let lNum = 1;//轮数
    while (true) {
        challengeQuestionLoop(conNum);
        sleep(4000);
        if (text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
            "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
        {//该部分修改，逻辑为a：>=5题，失败则结束挑战答题返回主界面;b0：<5题，第一次失败，分享复活；b1：分享复活再次失败，仍<5题，需再来一局；b2：分享复活再次失败，已>5题，结束挑战答题返回主界面
            sleep(2000);
            if (lNum >= lCount && conNum >= qCount) {
                xlog("挑战答题结束！返回主页！");
                if (textContains("结束本局").exists()) {
                    text("结束本局").findOne().click()
                    delay(3)
                    text("再来一局").waitFor() //答题结束后可能会出现新滑块
                        /*在分享页面回退4次返回主页*/
                        backIndex()
                } else {
                    /*在本局结束页面回退3次返回主页*/

                    backIndex()
                }
                break;
            } else if (textContains("分享就能复活").exists() || textContains("每局仅可复活一次").exists()) {
                xlog("分享复活...")
                sleep(2000);

                if (text("立即复活").exists()) {
                    click("立即复活");
                } else {
                    click("分享就能复活");
                    sleep(2000);
                    console.info("分享成功!");
                    back();//返回答题界面
                }
                sleep(4000);
            } else {
                xlog("等3秒开始下一轮...")
                sleep(3000);//等待3秒开始下一轮
                text("再来一局").click();
                /* back();
                 //desc("结束本局").click();//有可能找不到结束本局字样所在页面控件，所以直接返回到上一层
                 sleep(1000);
                 //desc("再来一局").click();
                 back();
              if(!textContains("答题练习").exists()){
                while (!text("答题练习").exists());//排行榜 答题竞赛
                sleep(1000);
                className("android.view.View").text("答题练习").findOne().parent().child(10).click();
              }else{
                while (!text("挑战答题").exists());
                sleep(1000);
                text("挑战答题").click();//原流程，20200910改版
               }*/
                sleep(4000);
                if (conNum >= qCount) {
                    lNum++;
                }
                conNum = 0;
            }
            xInfo("第" + (lNum + 1).toString() + "轮开始...")
        }
        else//答对了
        {
            conNum++;
        }
    }
}

/**
 * @description: 趣味答题
 * @param: null
 * @return: null
 */
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfecfd=["\u661F\u671F\u56DB","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E94","\u661F\u671F\u65E5","\x65\x78\x69\x73\x74\x73","\x68\x6F\x6D\x65\x5F\x62\x6F\x74\x74\x6F\x6D\x5F\x74\x61\x62\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x77\x6F\x72\x6B","\u5F00\u59CB\u8DA3\u5473\u7B54\u9898","\x63\x6F\x6D\x6D\x5F\x68\x65\x61\x64\x5F\x78\x75\x65\x78\x69\x5F\x73\x63\x6F\x72\x65","\x63\x6C\x69\x63\x6B","\x66\x69\x6E\x64\x4F\x6E\x63\x65","\u79EF\u5206","\x63\x68\x69\x6C\x64","\x70\x61\x72\x65\x6E\x74","\x63\x6F\x6D\x6D\x5F\x68\x65\x61\x64\x5F\x78\x75\x65\x78\x69\x5F\x6D\x69\x6E\x65","\x6D\x79\x5F\x64\x69\x73\x70\x6C\x61\x79\x5F\x6E\x61\x6D\x65","\x6D\x79\x5F\x72\x65\x63\x79\x63\x6C\x65\x72\x5F\x76\x69\x65\x77","\u5B66\u4E60\u79EF\u5206","\x77\x61\x69\x74\x46\x6F\x72","\u79EF\u5206\u89C4\u5219","\x66\x69\x6E\x64\x4F\x6E\x65","\u8DA3\u5473\u7B54\u9898","\u5F00\u59CB\u7B54\u9898","\x6C\x65\x6E\x67\x74\x68","\u8FDB\u5165","\u4E13\u9898\u6311\u6218","\x76\x35\x49\x4F\x58\x6E\x36\x6C\x51\x57\x59\x54\x4A\x65\x71\x58\x32\x65\x48\x75\x4E\x63\x72\x50\x65\x73\x6D\x53\x75\x64\x32\x4A\x64\x6F\x67\x59\x79\x47\x6E\x52\x4E\x78\x75\x6A\x4D\x54\x38\x52\x53\x37\x79\x34\x33\x7A\x78\x59\x34\x63\x6F\x57\x65\x70\x73\x70\x51\x6B\x76\x77","\x52\x44\x54\x4A\x74\x43\x54\x73\x5A\x35\x4A\x57\x2B\x38\x73\x47\x76\x54\x52\x44\x7A\x46\x6E\x44\x65\x4F\x2B\x42\x63\x4F\x45\x70\x50\x30\x52\x74\x65\x36\x66\x2B\x48\x77\x63\x47\x78\x65\x4E\x32\x64\x67\x6C\x57\x66\x67\x48\x38\x50\x30\x43\x37\x48\x6B\x43\x4D\x4A\x4F\x41\x41\x41\x41\x41\x45\x6C\x46\x54\x6B\x53\x75\x51\x6D\x43\x43","\u518D\u6765\u4E00\u5C40","\u8DA3\u5473\u7B54\u9898\u7ED3\u675F\uFF01\u8FD4\u56DE\u4E3B\u9875\uFF01","\u7ED3\u675F\u672C\u5C40","\u5206\u4EAB\u5C31\u80FD\u590D\u6D3B","\u6BCF\u5C40\u4EC5\u53EF\u590D\u6D3B\u4E00\u6B21","\u5206\u4EAB\u590D\u6D3B\x2E\x2E\x2E","\u7ACB\u5373\u590D\u6D3B","\u5206\u4EAB\u6210\u529F\x21","\x69\x6E\x66\x6F","\u7B49\x33\u79D2\u5F00\u59CB\u4E0B\u4E00\u8F6E\x2E\x2E\x2E","\u7B2C","\u8F6E\u5F00\u59CB\x2E\x2E\x2E","\u5F00\u59CB\u6BD4\u8D5B","\u7F51\u7EDC","\x74\x65\x78\x74","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x76\x69\x65\x77\x2E\x56\x69\x65\x77","\u77E5\u9053\u4E86","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x77\x69\x64\x67\x65\x74\x2E\x42\x75\x74\x74\x6F\x6E","\u6E29\u99A8\u63D0\u793A","\u60A8\u5DF2\u8D85\u8FC7\u4ECA\u65E5\u5BF9\u6218\u6B21\u6570\uFF0C\u8BF7\u660E\u65E5\u518D\u6765\u3002","\u4ECA\u65E5\u5DF2\u5B8C\u6210\x33\x30\u6B21\u5BF9\u6218\uFF0C\u8BF7\u660E\u65E5\u518D\u6765","\x72\x6F\x77","\x64\x65\x70\x74\x68","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x77\x69\x64\x67\x65\x74\x2E\x52\x61\x64\x69\x6F\x42\x75\x74\x74\x6F\x6E","\u7EE7\u7EED\u6311\u6218","\u672C\u8F6E\u5BF9\u6218\u7ED3\u675F","\u5F00\u59CB\u5BF9\u6218","\u968F\u673A\u5339\u914D","\u5339\u914D\u5BF9\u6218","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function quweiDaTi(){if(weekDayStr== __Oxfecfd[0x0]|| weekDayStr== __Oxfecfd[0x1]){quweiDaTiSirensai()}else {if(weekDayStr== __Oxfecfd[0x2]|| weekDayStr== __Oxfecfd[0x3]|| weekDayStr== __Oxfecfd[0x4]){quweiDaTiTiaozhan()}else {quweiDaTishuangren()}}}function quweiDaTiTiaozhan(){while(!id(__Oxfecfd[0x6])[__Oxfecfd[0x5]]()){;};xlog(__Oxfecfd[0x7]);while(!text(__Oxfecfd[0x11])[__Oxfecfd[0x5]]()){if(id(__Oxfecfd[0x8])[__Oxfecfd[0x5]]()){id(__Oxfecfd[0x8])[__Oxfecfd[0xa]]()[__Oxfecfd[0x9]]()}else {if(text(__Oxfecfd[0xb])[__Oxfecfd[0x5]]()){text(__Oxfecfd[0xb])[__Oxfecfd[0xa]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0xc]](1)[__Oxfecfd[0x9]]()}else {if(id(__Oxfecfd[0xe])[__Oxfecfd[0x5]]()){id(__Oxfecfd[0xe])[__Oxfecfd[0xa]]()[__Oxfecfd[0x9]]();if(id(__Oxfecfd[0xf])[__Oxfecfd[0x5]]()){id(__Oxfecfd[0x10])[__Oxfecfd[0xa]]()[__Oxfecfd[0xc]](0)[__Oxfecfd[0x9]]()}}}};delay(2)};text(__Oxfecfd[0x13])[__Oxfecfd[0x12]]();delay(1);huaping();delay(1);text(__Oxfecfd[0x15])[__Oxfecfd[0x14]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0xc]](4)[__Oxfecfd[0x9]]();xlog(__Oxfecfd[0x16]);sleep(2000);var _0xda1ax3=random(0,tiaozhanList[__Oxfecfd[0x17]]- 1);xlog(__Oxfecfd[0x18]+ tiaozhanList[_0xda1ax3]+ __Oxfecfd[0x19]);text(tiaozhanList[_0xda1ax3])[__Oxfecfd[0x14]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0x9]]();sleep(4000);let _0xda1ax4=0;let _0xda1ax5=1;while(true){challengeQuestionLoop(_0xda1ax4);sleep(4000);if(text(__Oxfecfd[0x1a]+ __Oxfecfd[0x1b])[__Oxfecfd[0x5]]()|| text(__Oxfecfd[0x1c])[__Oxfecfd[0x5]]()){sleep(2000);if(_0xda1ax5>= lCount&& _0xda1ax4>= qCount){xlog(__Oxfecfd[0x1d]);if(textContains(__Oxfecfd[0x1e])[__Oxfecfd[0x5]]()){text(__Oxfecfd[0x1e])[__Oxfecfd[0x14]]()[__Oxfecfd[0x9]]();delay(3);text(__Oxfecfd[0x1c])[__Oxfecfd[0x12]]();backIndex()}else {backIndex()};break}else {if(textContains(__Oxfecfd[0x1f])[__Oxfecfd[0x5]]()|| textContains(__Oxfecfd[0x20])[__Oxfecfd[0x5]]()){xlog(__Oxfecfd[0x21]);sleep(2000);if(text(__Oxfecfd[0x22])[__Oxfecfd[0x5]]()){click(__Oxfecfd[0x22])}else {click(__Oxfecfd[0x1f]);sleep(2000);console[__Oxfecfd[0x24]](__Oxfecfd[0x23]);back()};sleep(4000)}else {xlog(__Oxfecfd[0x25]);sleep(3000);text(__Oxfecfd[0x1c])[__Oxfecfd[0x9]]();sleep(4000);if(_0xda1ax4>= qCount){_0xda1ax5++};_0xda1ax4= 0}};xInfo(__Oxfecfd[0x26]+ (_0xda1ax5+ 1).toString()+ __Oxfecfd[0x27])}else {_0xda1ax4++}}}function quweiDaTiSirensai(){while(!id(__Oxfecfd[0x6])[__Oxfecfd[0x5]]()){;};xClear();xlog(__Oxfecfd[0x7]);id(__Oxfecfd[0x8])[__Oxfecfd[0x14]]()[__Oxfecfd[0x9]]();delay(1);text(__Oxfecfd[0x13])[__Oxfecfd[0x12]]();delay(1);huaping();delay(0.5);text(__Oxfecfd[0x15])[__Oxfecfd[0x14]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0xc]](4)[__Oxfecfd[0x9]]();xlog(__Oxfecfd[0x28]);textContains(__Oxfecfd[0x29])[__Oxfecfd[0x12]]();delay(2);className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x28])[__Oxfecfd[0x14]]()[__Oxfecfd[0x9]]();delay(3);if(className(__Oxfecfd[0x2d])[__Oxfecfd[0x2a]](__Oxfecfd[0x2c])[__Oxfecfd[0x5]]()|| className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x2e])[__Oxfecfd[0x5]]()|| className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x2f])[__Oxfecfd[0x5]]()){xlog(__Oxfecfd[0x30]);delay(1);backIndex()}else {className(__Oxfecfd[0x33])[__Oxfecfd[0x32]](32)[__Oxfecfd[0x31]](-1)[__Oxfecfd[0x12]]();while(!className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x34])[__Oxfecfd[0x5]]()){duiZhan();continue};xlog(__Oxfecfd[0x35]);backIndex()}}function quweiDaTishuangren(){while(!id(__Oxfecfd[0x6])[__Oxfecfd[0x5]]()){;};xClear();xlog(__Oxfecfd[0x7]);id(__Oxfecfd[0x8])[__Oxfecfd[0x14]]()[__Oxfecfd[0x9]]();delay(1);text(__Oxfecfd[0x13])[__Oxfecfd[0x12]]();delay(1);huaping();delay(0.5);text(__Oxfecfd[0x15])[__Oxfecfd[0x14]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0xc]](4)[__Oxfecfd[0x9]]();xlog(__Oxfecfd[0x36]);textContains(__Oxfecfd[0x29])[__Oxfecfd[0x12]]();sleep(2000);text(__Oxfecfd[0x37])[__Oxfecfd[0x14]]()[__Oxfecfd[0xd]]()[__Oxfecfd[0xc]](0)[__Oxfecfd[0x9]]();xlog(__Oxfecfd[0x38]);delay(3);if(className(__Oxfecfd[0x2d])[__Oxfecfd[0x2a]](__Oxfecfd[0x2c])[__Oxfecfd[0x5]]()|| className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x2e])[__Oxfecfd[0x5]]()|| className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x2f])[__Oxfecfd[0x5]]()){xlog(__Oxfecfd[0x30]);backIndex()}else {while(!className(__Oxfecfd[0x2b])[__Oxfecfd[0x2a]](__Oxfecfd[0x34])[__Oxfecfd[0x5]]()){duiZhan();continue};xlog(__Oxfecfd[0x35]);backIndex()}}(function(_0xda1ax8,_0xda1ax9,_0xda1axa,_0xda1axb,_0xda1axc,_0xda1axd){_0xda1axd= __Oxfecfd[0x39];_0xda1axb= function(_0xda1axe){if( typeof alert!== _0xda1axd){alert(_0xda1axe)};if( typeof console!== _0xda1axd){console[__Oxfecfd[0x3a]](_0xda1axe)}};_0xda1axa= function(_0xda1axf,_0xda1ax8){return _0xda1axf+ _0xda1ax8};_0xda1axc= _0xda1axa(__Oxfecfd[0x3b],_0xda1axa(_0xda1axa(__Oxfecfd[0x3c],__Oxfecfd[0x3d]),__Oxfecfd[0x3e]));try{_0xda1ax8= __encode;if(!( typeof _0xda1ax8!== _0xda1axd&& _0xda1ax8=== _0xda1axa(__Oxfecfd[0x3f],__Oxfecfd[0x40]))){_0xda1axb(_0xda1axc)}}catch(e){_0xda1axb(_0xda1axc)}})({})



/**
* @description: 挑战答题循环
* @param: conNum 连续答对的次数
* @return: null
*/
function challengeQuestionLoop(conNum) {
  try{
   let ClickAnswer;//定义已点击答案
   if (conNum >= qCount)//答题次数足够退出，每轮qCount=5+随机1-3次
   {
       let listArray = className("ListView").findOnce().children();//题目选项列表
       let i = random(0, listArray.length - 1);
       xlog("本轮答题数足够，随机点击答案");
       var question = className("ListView").findOnce().parent().child(0).text();
       question = question.replace(/\s/g, "");
       var options = [];//选项列表
      if (className("ListView").exists()) {
        className("ListView").findOne().children().forEach(child => {
           var answer_q = child.child(0).child(1).text();
           options.push(answer_q);
         });
       } else {
       xError("答案获取失败!");
       return;
       }//20201217添加 极低概率下，答题数足够，下一题随机点击，碰到字形题
       if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
        question = question + options[0]; //字形题 读音题 在题目后面添加第一选项               
               }
        xClear()
       xlog((conNum + 1).toString() + ".随机点击题目：" + question);
       delay(random(0.5, 1));//随机延时0.5-1秒
       listArray[i].child(0).click();//随意点击一个答案
       ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
       xlog("随机点击:"+ClickAnswer);
       //如果随机点击答案正确，则更新到本地题库tiku表
      delay(0.5);//等待0.5秒，是否出现X
      if (!text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
       { xlog("更新本地题库答案...");
         checkAndUpdate(question, answer, ClickAnswer);
       }
       xlog("-------------");
       return;
   }
   if (className("ListView").exists()) {
       var question = className("ListView").findOnce().parent().child(0).text();
   }
   else {
       xError("提取题目失败!");
       let listArray = className("ListView").findOnce().children();//题目选项列表
       let i = random(0, listArray.length - 1);
       xlog("随机点击");
       delay(random(0.5, 1));//随机延时0.5-1秒
       listArray[i].child(0).click();//随意点击一个答案
       return;
   }
   var chutiIndex = question.lastIndexOf("出题单位");
   if (chutiIndex != -1) {
       question = question.substring(0, chutiIndex - 2);
   }
   question = question.replace(/\s/g, "");   
   var options = [];//选项列表
   if (className("ListView").exists()) {
       className("ListView").findOne().children().forEach(child => {
           var answer_q = child.child(0).child(1).text();
           options.push(answer_q);
       });
   } else {
       xError("答案获取失败!");
       return;
   }
   if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
     question = question + options[0]; //字形题 读音题 在题目后面添加第一选项               
               }
    xClear()
   xlog((conNum + 1).toString() + "搜库题目：" + question);
   var answer = getAnswer(question, 'tiku');
   if (answer.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
       answer = getAnswer(question, 'tikuNet');
   }
   xInfo("答案：" + answer);
   if (/^[a-zA-Z]{1}$/.test(answer)) {//如果为ABCD形式
       var indexAnsTiku = indexFromChar(answer.toUpperCase());
       answer = options[indexAnsTiku];
       xlog("answer from char=" + answer);
   }
   let hasClicked = false;
   let listArray = className("ListView").findOnce().children();//题目选项列表
   if (answer == "")//如果没找到答案
   {
       let i = random(0, listArray.length - 1);
       xError("没有找到答案，随机点击");
       delay(random(0.5, 1));//随机延时0.5-1秒
       listArray[i].child(0).click();//随意点击一个答案
       ClickAnswer = listArray[i].child(0).child(1).text();;//记录已点击答案
       hasClicked = true;
       xlog("随机点击:"+ClickAnswer);//如果随机点击答案正确，则更新到本地题库tiku表
      delay(0.5);//等待0.5秒，是否出现X
      if (!text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
       { xlog("更新本地题库答案...");
         checkAndUpdate(question, answer, ClickAnswer);
       }
       xlog("-------------");
   }
   else//如果找到了答案
   {
       listArray.forEach(item => {
           var listDescStr = item.child(0).child(1).text();
           if (listDescStr == answer) {
               delay(random(0.5, 1));//随机延时0.5-1秒
               item.child(0).click();//点击答案
               hasClicked = true;
               delay(0.5);//等待0.5秒，是否出现X
             if (!text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
            { xlog("题库答案正确……"); }          
             if (text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
             { xError("题库答案错误!!!");
              /*checkAndUpdate(question, answer, ClickAnswer);*/
              }
               xlog("-------------");
           }
       });
   }
   if (!hasClicked)//如果没有点击成功
   {//因导致不能成功点击问题较多，故该部分不更新题库，大部分问题是题库题目适配为填空题或多选题或错误选项
       xError("未能成功点击，随机点击");
       let i = random(0, listArray.length - 1);
       delay(random(0.5, 1));//随机延时0.5-1秒
       listArray[i].child(0).click();//随意点击一个答案
       xlog("随机点击:"+ClickAnswer);
       delay(0.5);//等待0.5秒，是否出现X
      if (!text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
       { xlog("随机点击正确……"); }          
      if (text("v5IOXn6lQWYTJeqX2eHuNcrPesmSud2JdogYyGnRNxujMT8RS7y43zxY4coWepspQkvw" +
           "RDTJtCTsZ5JW+8sGvTRDzFnDeO+BcOEpP0Rte6f+HwcGxeN2dglWfgH8P0C7HkCMJOAAAAAElFTkSuQmCC").exists() || text("再来一局").exists())//遇到❌号，则答错了,不再通过结束本局字样判断
       { xError("随机点击错误!!!");
              /*checkAndUpdate(question, answer, ClickAnswer);*/
              }
      xlog("-------------");
   }
  }catch (e){
     
     xError("挑战答题错误，请手动处理！！");
     return;
  }
  xClear()
}

/*************************************************每日答题/每周答题部分***************************************************/

/**
 * @description: 每日答题
 * @param: null
 * @return: null
 */
function dailyQuestion() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    // console.show()
    xlog("开始每日答题")
    id("comm_head_xuexi_score").findOne().click()
    delay(1)
    text("积分规则").waitFor()
    delay(1)
    huaping()
    // text("每日答题").waitFor()
    delay(0.5)
    // xlog("准备...")
    text("每日答题").findOne().parent().child(4).click()

    xlog("开始答题...")
    delay(2);
    let dlNum = 0;//每日答题轮数
    while (!text("积分规则").exists()) {
        meiRiLoop();
        /*dailyQuiz();*/
        if (text("再来一组").exists()) {
            delay(2);
            dlNum++;
            if (!text("领取奖励已达今日上限").exists()) {
                text("再来一组").click();
                xInfo("第" + (dlNum + 1).toString() + "轮答题:");
                delay(1);
            } else {
                xlog("每日答题结束！返回主页！")
                text("返回").click(); delay(0.5);
                backIndex()
                break;
            }
        }
    continue
    }
    backIndex()
}


/**
 * @description: 每周答题
 * @param: null
 * @return: null
 */
function weeklyQuestion() {
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let x = (w / 6) * 5;//横坐标6分之5处
    let h1 = (h / 6) * 5;//纵坐标6分之5处
    let h2 = (h / 6);//纵坐标6分之1处
    text("我的").click();
    if (!textContains("我要答题").exists()) {
     delay(1);
     click("我要答题");
    } else {
     (!text("我要答题").exists());
    delay(1);
    text("我要答题").findOne().parent().click();
      }
    /*while (!textContains("我要答题").exists());
    delay(1);
    click("我要答题");*/
    while (!text("每周答题").exists());
    delay(1);
    text("每周答题").click();
    xClear()
    xlog("开始每周答题")
    //delay(2);
    //text("未作答").click();
    //翻页点击每周作答
    //let sublist = className("ListView").findOnce(0);//控件错误，用swipe划，7.0以下可能错误
    let i = 0;//参考订阅的翻页，只进行一次点击
    let n = 0;//定义下滑次数
    while (i < 1) {
        if (text("未作答").exists()) {
            text("未作答").click();
            i++;
        } else if (text("您已经看到了我的底线").exists()) {
            xlog("没有可作答的每周答题了,退出!!!")
            backIndex()
            return;
        } else {
            if(ui.xiaHuaDaoDi.checked){
                xClear()
                delay(1);
                swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处） 
                xlog("滑动查找未作答的专项答题")
                n++;
                if (n >49 ){
                xlog("下滑五十次没有可作答专项答题,退出!!!")    
                backIndex()
                return; }
            }else{
                xlog("最近未发现可做答题，即将返回主页")    
                backIndex()
                return; 
            }
        }
    }
    ////翻页点击每周作答
    /*let dlNum = 0;*///每日答题轮数,该数用来当第一轮未满分时发起第二轮答题，浪费，不用
    while (true) {
        delay(1)
        while (!(textStartsWith("填空题").exists() || textStartsWith("多选题").exists() || textStartsWith("单选题").exists())) {
            console.error("没有找到题目！请检查是否进入答题界面！");
            delay(2);
        }
        dailyQuestionLoop();
        if (text("再练一次").exists()) {
            xlog("每周答题结束，返回！")
            text("返回").click(); delay(2);
            back(); delay(1);
            back(); delay(1);
            while (!textContains("我要答题").exists()) {
                back(); delay(1);
            }
            break;
        } else if (text("查看解析").exists()) {
            xlog("每周答题结束，返回！")
            back(); delay(0.5);
            back(); delay(0.5);
            break;
        } else if (text("再来一组").exists()) {
            /*delay(2);
            dlNum++;
            if (!text("领取奖励已达今日上限").exists()) {
                text("再来一组").click();
                console.info("第" + (dlNum + 1).toString() + "轮答题:");
                delay(1);
            }else {
                console.log("每周答题结束，返回！")
                text("返回").click(); delay(2);
                while (!textContains("我要答题").exists()) {
                    console.log("每周答题结束，返回！")
                    back(); delay(1);
                }
                back(); delay(1);
                break;
            }*/
          xlog("每周答题结束，返回！")
                text("返回").click(); delay(2);
                back(); delay(1);
                back(); delay(1);
                while (!textContains("我要答题").exists()) {
                    xlog("每周答题结束，返回！")
                    back(); delay(1);
                }
                break;
        }
    }
    //回退返回主页 
    while (!id("home_bottom_tab_button_work").exists()) {
        back();
        delay(0.5);
    }
}

/**
 * @description: 专项答题
 * @param: null
 * @return: null
 */
// function specialQuestion() {
//     let h = device.height;//屏幕高
//     let w = device.width;//屏幕宽
//     let x = (w / 6) * 5;//横坐标2分之3处
//     let h1 = (h / 6) * 5;//纵坐标6分之5处
//     let h2 = (h / 6) ;//纵坐标7分之1处
//     while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
//     xClear()
//     xlog("开始专项答题")
//     id("comm_head_xuexi_score").findOne().click()
//     delay(1)
//     text("积分规则").waitFor()
//     delay(1)
//     huaping()
//     // text("专项答题").waitFor()
//     delay(0.5)
//     text("专项答题").findOne().parent().child(4).click()
//     xlog("开始答题")
//     delay(2);

//     let i = 0;
//     let n = 0;
//     while (i < 1) {
//         if (text("继续答题").exists()) {
//             text("继续答题").click();
//             i++;
//         } else if (text("开始答题").exists()) {
//             text("开始答题").click();
//             i++;
//         } else if (text("您已经看到了我的底线").exists()) {
//             xlog("没有可作答的专项答题了,退出!!!")
//             backIndex()
//             return;
//         } else if (text("已过期").exists()) {
//             xlog("存在已过期的专项答题,无法作答，退出!!!")
//             back();
//             delay(2);
//             back(); delay(1);
//             back(); delay(1);
//             return;
//         } else {
//             if(ui.xiaHuaDaoDi.checked){
//                 xClear()
//                 delay(1);
//                 swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处） 
//                 xlog("滑动查找未作答的专项答题")
//                 n++;
//                 if (n >49 ){
//                 xlog("下滑五十次没有可作答专项答题,退出!!!")    
//                 backIndex()
//                 return; }
//             }else{
//                 xlog("最近未发现可做答题，即将返回主页")    
//                 backIndex()
//                 return; 
//             }
//         }
//     }
//     ////翻页点击专项答题
//     /*let dlNum = 0;*/ //每日答题轮数
//     while (true) {
//         delay(1)
//         // while (!(textStartsWith("填空题").exists() || textStartsWith("多选题").exists() || textStartsWith("单选题").exists())) {
//         //     xError("没有找到题目！请检查是否进入答题界面！");
//         //     delay(2);
//         // }
//         dailyQuestionLoop();
//         if (text("再练一次").exists()) {
//             xlog("专项答题结束！")
//             text("返回").click(); delay(2);
//             back();
//             break;
//         } else if (text("查看解析").exists()) {
//             xlog("专项答题结束，返回！")
//             backIndex()
//             // while (!textContains("我要答题").exists()) {
//             //     back(); delay(1);
//             // }
//             break;
//         }
//         // else if (text("再来一组").exists()) {
//         //     /*delay(2);
//         //     dlNum++;
//         //     if (!text("领取奖励已达今日上限").exists()) {
//         //         text("再来一组").click();
//         //         console.info("第" + (dlNum + 1).toString() + "轮答题:");
//         //         delay(1);
//         //     }
//         //     else {
//         //         console.log("专项答题结束，返回！")
//         //         delay(2);
//         //         while (!textContains("专项答题").exists()) {
//         //             console.log("专项答题结束，返回！")
//         //             back(); delay(1);
//         //         }
//         //         back(); delay(1);
//         //         break;
//         //     }*/
//         //   console.log("专项答题结束，返回！")
//         //   delay(2);
//         //    while (!textContains("专项答题").exists()) {
//         //       console.log("专项答题结束，返回！")
//         //       back(); delay(1);
//         //       }
//         //    back(); delay(1);
//         //    while (!textContains("我要答题").exists()) {
//         //         back(); delay(1);
//         //     }
//         //    break;
//         // }
//     }
//     //回退返回主页 
//     // while (!id("home_bottom_tab_button_work").exists()) {
//     //     back();
//     //     delay(0.5);
//     // }
// }



// 专项答题2.0版本 start

function zhuanXiang() {
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let x = (w / 6) * 5;//横坐标2分之3处
    let h1 = (h / 6) * 5;//纵坐标6分之5处
    let h2 = (h / 6) ;//纵坐标7分之1处
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    xClear()
    xlog("开始专项答题")
    while (!text("积分规则").exists()) {//自主页点击右上角积分数字进入学习积分
        delay(1);
        if (id("comm_head_xuexi_score").exists()) {
            id("comm_head_xuexi_score").findOnce().click();
        } else if (text("积分").exists()) {
            text("积分").findOnce().parent().child(1).click();
        } else if (id("comm_head_xuexi_mine").exists()) {//自强国通页面进入我的主页点击学习积分
            id("comm_head_xuexi_mine").findOnce().click();
            if (id("my_display_name").exists()) {//我的主页
                id("my_recycler_view").findOnce().child(0).click();
            }
        }
    }
    delay(4);

    id("app").findOne().child(0).child(0).child(2).click()
    className("android.view.View").depth(25).text("积分明细").findOne().parent().click()
    textStartsWith("年度积分：").depth(21).waitFor()
    if(className("android.view.View").depth(24).text("专项答题").exists()){
        log("今日已作答")
        id("app").findOne().child(0).child(0).click()
        text("学习积分").waitFor()
        id("app").findOne().child(0).child(0).child(0).click()
    }else{
        log("准备答题")
        id("app").findOne().child(0).child(0).click()
        text("学习积分").waitFor()
        id("app").findOne().child(0).child(0).child(0).click()
        id("comm_head_xuexi_mine").findOne().click()
    delay(1.5)
    if (text("我要答题").exists()) {
        click("我要答题");
       } else {
        click(540 + random(0,12),850 + random(0,12))
        }

    text("答题练习").waitFor()
    className("android.view.View").text("专项答题").findOne().parent().click()

    // huaping()
    // text("专项答题").waitFor()
    delay(0.5)
    // text("专项答题").findOne().parent().child(4).click()
    xlog("开始答题")
    delay(2);

    let i = 0;
    let n = 0;
    while (i < 1) {
        if (text("继续答题").exists()) {
            text("继续答题").click();
            i++;
        } else if (text("开始答题").exists()) {
            text("开始答题").click();
            i++;
        } else if (text("您已经看到了我的底线").exists()) {
            xlog("没有可作答的专项答题了,退出!!!")
            backIndex()
            return;
        } else if (text("已过期").exists()) {
            xlog("存在已过期的专项答题,无法作答，退出!!!")
            back();
            delay(2);
            back(); delay(1);
            back(); delay(1);
            return;
        } else {
            if(ui.xiaHuaDaoDi.checked){
                xClear()
                delay(1);
                swipe(x, h1, x, h2, 500);//往下翻（纵坐标从5/6处滑到1/6处） 
                xlog("滑动查找未作答的专项答题")
                n++;
                if (n >49 ){
                xlog("下滑五十次没有可作答专项答题,退出!!!")    
                backIndex()
                return; }
            }else{
                xlog("最近未发现可做答题，即将返回主页")    
                backIndex()
                return; 
            }
        }
    }
    ////翻页点击专项答题
    /*let dlNum = 0;*/ //每日答题轮数
    while (true) {
        delay(1)
        // while (!(textStartsWith("填空题").exists() || textStartsWith("多选题").exists() || textStartsWith("单选题").exists())) {
        //     xError("没有找到题目！请检查是否进入答题界面！");
        //     delay(2);
        // }
        zhuanxiangLoop();
        if (text("再来一次").exists()) {
            xlog("专项答题结束！")
            backIndex()
            break;
        } else if (text("查看解析").exists()) {
            xlog("专项答题结束，返回！")
            backIndex()
            // while (!textContains("我要答题").exists()) {
            //     back(); delay(1);
            // }
            break;
        }
        // else if (text("再来一组").exists()) {
        //     /*delay(2);
        //     dlNum++;
        //     if (!text("领取奖励已达今日上限").exists()) {
        //         text("再来一组").click();
        //         console.info("第" + (dlNum + 1).toString() + "轮答题:");
        //         delay(1);
        //     }
        //     else {
        //         console.log("专项答题结束，返回！")
        //         delay(2);
        //         while (!textContains("专项答题").exists()) {
        //             console.log("专项答题结束，返回！")
        //             back(); delay(1);
        //         }
        //         back(); delay(1);
        //         break;
        //     }*/
        //   console.log("专项答题结束，返回！")
        //   delay(2);
        //    while (!textContains("专项答题").exists()) {
        //       console.log("专项答题结束，返回！")
        //       back(); delay(1);
        //       }
        //    back(); delay(1);
        //    while (!textContains("我要答题").exists()) {
        //         back(); delay(1);
        //     }
        //    break;
        // }
    }
    //回退返回主页 
    // while (!id("home_bottom_tab_button_work").exists()) {
    //     back();
    //     delay(0.5);
    // }
    }
    
    

    
}

// 专项答题2.0版本 end


/**
 * @description: 在答题选项画✔，用于各项答题部分
 * @param: x,y 坐标
 * @return: null
 */
function drawfloaty(x, y) {
    //floaty.closeAll();
    var window = floaty.window(
        <frame gravity="center">
            <text id="text" text="✔" textColor="red" />
        </frame>
    );
    window.setPosition(x, y - 45);
    return window;
}

/**
 * @description: 每周专项答题循环
 * @param: null
 * @return: null
 */
function dailyQuestionLoop() {
    var blankArray = [];
    var question = "";
    var answer = "";
    try{
    if (textStartsWith("填空题").exists()) {
        var questionArray = getFitbQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
    question = question.replace(/\s/g, "");
    xClear()
    xlog("题目：" + question);
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
    answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") { //答案空，前面题库未找到答案,找提示
            var tipsStr = getTipsStr();
            answer = getAnswerFromTips(questionArray, tipsStr);
            xInfo("提示答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }
              } 
           /*checkAndUpdate(question, ansTiku, answer);*/                      
       } else { //答案非空，题库中已找到答案
            xInfo("答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }       
        }      
    }
   }
    else if (textStartsWith("多选题").exists() || textStartsWith("单选题").exists()) {
        var questionArray = getChoiceQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
     var options = [];//选项列表
     if (className("ListView").exists()) {//选择题提取答案，为字形题 注音题准备
        className("ListView").findOne().children().forEach(child => {
            var answer_q = child.child(0).child(2).text();//此处child(2)为去除选项A.的选项内容，与争上游不同
            options.push(answer_q);
        });
       } else {
        xError("答案获取失败!");
        return;
     }
    question = question.replace(/\s/g, "");
    if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
      question = question + options[0]; //字形题 读音题 在题目后面添加第一选项                
                }
    xClear()
    xlog("题目：" + question); 
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
   answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") {
            var tipsStr = getTipsStr();
            answer = clickByTips(tipsStr);
            xInfo("提示中的答案：" + answer);
           /*if (text("单选题").exists()){//仅单选题更新题库，多选题不更新进题库
             checkAndUpdate(question, ansTiku, answer);
           }*/
        } else {
            xInfo("答案：" + ansTiku);
            delay(random(0.5, 1));//随机延时0.5-1秒
            clickByAnswer(answer);
        }
   }
    delay(random(0.5, 1));//随机延时0.5-1秒
    if (text("确定").exists()) {//每日每周答题
        text("确定").click();
        delay(random(0.5, 1));//随机延时0.5-1秒
            if (text("下一题").exists()) {//每日答题做错，会先确定，再下一题
                text("下一题").click();
                delay(random(1, 1.5));//随机延时1-1.5秒
                
            }
            if (text("完成").exists()) {//每日答题最后一题做错后的提交
                    text("完成").click();
                    delay(random(1, 1.5));//随机延时1-1.5秒
                    
            }
            
    } else if (text("下一题").exists()) {//专项答题
            text("下一题").click();
            delay(random(1, 1.5));//随机延时1-1.5秒
            
     }else if (text("完成").exists()) {//专项答题最后一题
            text("完成").click();
            delay(random(1, 1.5));//随机延时1-1.5秒
            
      } else{
        xInfo("未找到右上角按钮，尝试根据坐标点击");
        click(device.width * 0.85, device.height * 0.06);//右上角确定按钮，根据自己手机实际修改
        xInfo("请手动处理");
        delay(5);
    }
   xlog("---------------------------");
    delay(2);
  }catch (e){
     xError("答题错误，请手动处理！！");
     return;
  }
}


function zhuanxiangLoop() {
    var blankArray = [];
    var question = "";
    var answer = "";
    try{
    if (textStartsWith("填空题").exists()) {
        var questionArray = getFitbQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
    question = question.replace(/\s/g, "");
    xClear()
    xlog("题目：" + question);
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
    answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") { //答案空，前面题库未找到答案,找提示
            var tipsStr = getTipsStr();
            answer = getAnswerFromTips(questionArray, tipsStr);
            xInfo("提示答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }
              } 
           /*checkAndUpdate(question, ansTiku, answer);*/                      
       } else { //答案非空，题库中已找到答案
            xInfo("答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }       
        }      
    }
   }
    else if (textStartsWith("多选题").exists() || textStartsWith("单选题").exists()) {
        var questionArray = getChoiceQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
     var options = [];//选项列表
     if (className("ListView").exists()) {//选择题提取答案，为字形题 注音题准备
        className("ListView").findOne().children().forEach(child => {
            var answer_q = child.child(0).child(2).text();//此处child(2)为去除选项A.的选项内容，与争上游不同
            options.push(answer_q);
        });
       } else {
        xError("答案获取失败!");
        return;
     }
    question = question.replace(/\s/g, "");
    if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
      question = question + options[0]; //字形题 读音题 在题目后面添加第一选项                
                }
    xClear()
    xlog("题目：" + question); 
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
   answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") {
            var tipsStr = getTipsStr();
            answer = clickByTips(tipsStr);
            xInfo("提示中的答案：" + answer);
           /*if (text("单选题").exists()){//仅单选题更新题库，多选题不更新进题库
             checkAndUpdate(question, ansTiku, answer);
           }*/
        } else {
            xInfo("答案：" + ansTiku);
            delay(random(0.5, 1));//随机延时0.5-1秒
            clickByAnswer(answer);
        }
   }
    delay(random(0.5, 1));//随机延时0.5-1秒
    if (text("下一题").exists()) {//专项答题
        text("下一题").click();
        delay(random(1, 1.5));//随机延时1-1.5秒
    }
    if (text("完成").exists()) {//专项答题最后一题
        text("完成").click();
        delay(random(1, 1.5));//随机延时1-1.5秒
    }

   xlog("---------------------------");
    delay(2);
  }catch (e){
     xError("答题错误，请手动处理！！");
     return;
  }
}

//* @description: 每日专项答题循环
function meiRiLoop() {
    var blankArray = [];
    var question = "";
    var answer = "";
    try{
    if (textStartsWith("填空题").exists()) {
        var questionArray = getFitbQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
    question = question.replace(/\s/g, "");
    xClear()
    xlog("题目：" + question);
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
    answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") { //答案空，前面题库未找到答案,找提示
            var tipsStr = getTipsStr();
            answer = getAnswerFromTips(questionArray, tipsStr);
            xInfo("提示答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }
              } 
           /*checkAndUpdate(question, ansTiku, answer);*/                      
       } else { //答案非空，题库中已找到答案
            xInfo("答案：" + answer);
            setText(0, answer.substr(0, blankArray[0]));
            if (blankArray.length > 1) {
                for (var i = 1; i < blankArray.length; i++) {
                    setText(i, answer.substr(blankArray[i - 1], blankArray[i]));
                }       
        }      
    }
   }
    else if (textStartsWith("多选题").exists() || textStartsWith("单选题").exists()) {
        var questionArray = getChoiceQuestion();
        questionArray.forEach(item => {
        if (item != null && item.charAt(0) == "|") { //是空格数
            blankArray.push(item.substring(1));
        } else { //是题目段
            question += item;
        }
    });
     var options = [];//选项列表
     if (className("ListView").exists()) {//选择题提取答案，为字形题 注音题准备
        className("ListView").findOne().children().forEach(child => {
            var answer_q = child.child(0).child(2).text();//此处child(2)为去除选项A.的选项内容，与争上游不同
            options.push(answer_q);
        });
       } else {
        xError("答案获取失败!");
        return;
     }
    question = question.replace(/\s/g, "");
    if (question == ZiXingTi.replace(/\s/g, "") || question == DuYinTi.replace(/\s/g, "") || question == ErShiSiShi.replace(/\s/g, "")) {
      question = question + options[0]; //字形题 读音题 在题目后面添加第一选项                
                }
    xClear()
    xlog("题目：" + question); 
    var ansTiku = getAnswer(question, 'tiku');
    if (ansTiku.length == 0) {//tiku表中没有则到tikuNet表中搜索答案
        ansTiku = getAnswer(question, 'tikuNet');
    }
   answer = ansTiku.replace(/(^\s*)|(\s*$)/g, "");
   if (answer == "") {
            var tipsStr = getTipsStr();
            answer = clickByTips(tipsStr);
            xInfo("提示中的答案：" + answer);
           /*if (text("单选题").exists()){//仅单选题更新题库，多选题不更新进题库
             checkAndUpdate(question, ansTiku, answer);
           }*/
        } else {
            xInfo("答案：" + ansTiku);
            delay(random(0.5, 1));//随机延时0.5-1秒
            clickByAnswer(answer);
        }
   }
    delay(random(0.5, 1));//随机延时0.5-1秒
    if (text("确定").exists()) {//每日每周答题
        text("确定").click();
        delay(random(0.5, 1));//随机延时0.5-1秒
            if (text("下一题").exists()) {//每日答题做错，会先确定，再下一题
                text("下一题").click();
                delay(random(1, 1.5));//随机延时1-1.5秒
                
            }
            if (text("完成").exists()) {//每日答题最后一题做错后的提交
                    text("完成").click();
                    delay(random(1, 1.5));//随机延时1-1.5秒
                    
            }
            
    }  
   xlog("---------------------------");
    delay(2);
  }catch (e){
     xError("答题错误，请手动处理！！");
     return;
  }
}



/**
 * @description: 获取填空题题目数组
 * @param: null
 * @return: questionArray
 */
function getFitbQuestion() {
    var questionCollections = className("EditText").findOnce().parent().parent();
    var questionArray = [];
    var findBlank = false;
    var blankCount = 0;
    var blankNumStr = "";
    var i = 0;
    questionCollections.children().forEach(item => {
        if (item.className() != "android.widget.EditText") {
            if (item.text() != "") {//题目段
                if (findBlank) {
                    blankNumStr = "|" + blankCount.toString();
                    questionArray.push(blankNumStr);
                    findBlank = false;
                }
                questionArray.push(item.text());
            } else {
                findBlank = true;
                /*blankCount += 1;*/
                blankCount = (className("EditText").findOnce(i).parent().childCount() -1);
                i++;
            }
        }
    });
    return questionArray;
}


/**
 * @description: 获取选择题题目数组
 * @param: null
 * @return: questionArray
 */
function getChoiceQuestion() {
    var questionCollections = className("ListView").findOnce().parent().child(1);
    var questionArray = [];
    questionArray.push(questionCollections.text());
    return questionArray;
}


/**
 * @description: 获取提示字符串
 * @param: null
 * @return: tipsStr
 */
function getTipsStr() {
    var tipsStr = "";
    while (tipsStr == "") {
        if (text("查看提示").exists()) {
            var seeTips = text("查看提示").findOnce();
            seeTips.click();
            delay(1);
            click(device.width * 0.5, device.height * 0.41);
            delay(1);
            click(device.width * 0.5, device.height * 0.35);
        } else {
            console.error("未找到查看提示");
        }
        if (text("提示").exists()) {
            var tipsLine = text("提示").findOnce().parent();
            //获取提示内容
            var tipsView = tipsLine.parent().child(1).child(0);
            tipsStr = tipsView.text();
            //关闭提示
            tipsLine.child(1).click();
            break;
        }
        delay(1);
    }
    return tipsStr;
}


/**
 * @description: 从提示中获取填空题答案
 * @param: questionArray, tipsStr
 * @return: ansTips
 */
function getAnswerFromTips(questionArray, tipsStr) {
    var ansTips = "";
    for (var i = 1; i < questionArray.length -1; i++) {
        if (questionArray[i].charAt(0) == "|") {
            var blankLen = questionArray[i].substring(1);
            var indexKey = tipsStr.indexOf(questionArray[i + 1]); 
            var ansFind = tipsStr.substr(indexKey - blankLen, blankLen);
            /*ansTips += ansFind;*/
            ansTips = ansTips.concat(ansFind);
        }
    }
    return ansTips;
}

/**
 * @description: 根据提示点击选择题选项
 * @param: tipsStr
 * @return: clickStr
 */
function clickByTips(tipsStr) {
    var clickStr = "";
    let isFind = false;
    if (className("ListView").exists()) {
        var listArray = className("ListView").findOne().children();
        listArray.forEach(item => {
            var ansStr = item.child(0).child(2).text();
            if (tipsStr.indexOf(ansStr) >= 0) {
                item.child(0).click();
                clickStr += item.child(0).child(1).text().charAt(0);
                isFind = true;
            }
        });
        if (!isFind) { //没有找到 点击第一个
            listArray[0].child(0).click();
            clickStr += listArray[0].child(0).child(1).text().charAt(0);
        }
    }
    return clickStr;
}


/**
 * @description: 根据答案点击选择题选项
 * @param: answer
 * @return: null
 */
function clickByAnswer(answer) {
    let isFind = false;
    if (className("ListView").exists()) {
        var listArray = className("ListView").findOnce().children();
        listArray.forEach(item => {
            var listIndexStr = item.child(0).child(1).text().charAt(0);
            //单选答案为非ABCD
            var listDescStr = item.child(0).child(2).text();
            if (answer.indexOf(listIndexStr) >= 0 || answer == listDescStr) {
                item.child(0).click();
                isFind = true;
            }
        });
     if (!isFind) { //找到答案 点击失败 点击第一个
            listArray[0].child(0).click();
         }
    }
}

/*************************************************题库操作部分***************************************************/

function indexFromChar(str) {
    return str.charCodeAt(0) - "A".charCodeAt(0);
}

/**
 * @description: 检查答案是否正确，并更新数据库
 * @param: question, ansTiku, answer
 * @return: null
 */
function checkAndUpdate(question, ansTiku, answer) {
    if (className("Button").desc("下一题").exists() || className("Button").desc("完成").exists()) {//答错了
        swipe(100, device.height - 100, 100, 100, 500);
        var nCout = 0
        while (nCout < 5) {
            if (descStartsWith("正确答案").exists()) {
                var correctAns = descStartsWith("正确答案").findOnce().desc().substr(5);
                console.info("正确答案是：" + correctAns);
                if (ansTiku == "") { //题库为空则插入正确答案                
                    var sql = "INSERT INTO tiku VALUES ('" + question + "','" + correctAns + "','')";
                } else { //更新题库答案
                    var sql = "UPDATE tiku SET answer='" + correctAns + "' WHERE question LIKE '" + question + "'";
                }
                insertOrUpdate(sql);
                console.log("更新题库答案...");
                delay(1);
                break;
            } else {
                var clickPos = className("android.webkit.WebView").findOnce().child(2).child(0).child(1).bounds();
                click(clickPos.left + device.width * 0.13, clickPos.top + device.height * 0.1);
                console.error("未捕获正确答案，尝试修正");
            }
            nCout++;
        }
        if (className("Button").exists()) {
            className("Button").findOnce().click();
        } else {
            click(device.width * 0.85, device.height * 0.06);
        }
    } else { //正确后进入下一题，或者进入再来一局界面
        if (ansTiku == "" && answer != "") { //正确进入下一题，且题库答案为空              
            var sql = "INSERT INTO tiku VALUES ('" + question + "','" + answer + "','')";
            insertOrUpdate(sql);
            console.log("更新题库答案...");
        }
    }
}

/**
 * @description: 判断题库是否存在
 * @param: null
 * @return: null
 */
function judge_tiku_existence() {
    var dbName = "tiku.db";//题库文件名
    var path = files.path(dbName);
    if (!files.exists(path)) {
        //files.createWithDirs(path);
        console.error("未找到题库！请将题库文件放置与js文件同一目录下再运行！");
        return false;
    }
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    var createTable = "\
    CREATE TABLE IF NOT EXISTS tikuNet(\
    question CHAR(253),\
    answer CHAR(100)\
    );";
    db.execSQL(createTable);
    return true;
}

/**
 * @description: 从数据库中搜索答案
 * @param: question 问题
 * @return: answer 答案
 */
function getAnswer(question, table_name) {
    var dbName = "tiku.db";//题库文件名
    var path = files.path(dbName);

    var db = SQLiteDatabase.openOrCreateDatabase(path, null);

    sql = "SELECT answer FROM " + table_name + " WHERE question LIKE '" + question + "%'"
    var cursor = db.rawQuery(sql, null);
    if (cursor.moveToFirst()) {
        var answer = cursor.getString(0);
        cursor.close();
        return answer;
    }
    else {
        console.error("题库中未找到答案");
        cursor.close();
        return '';
    }
}

/**
 * @description: 增加或更新数据库
 * @param: sql
 * @return: null
 */
function insertOrUpdate(sql) {
    var dbName = "tiku.db";
    var path = files.path(dbName);
    if (!files.exists(path)) {
        //files.createWithDirs(path);
        console.error("未找到题库!请将题库放置与js同一目录下");
    }
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    db.execSQL(sql);
    db.close();
}

/*************************************************更新题库部分***************************************************/
/**
 * @description: 更新数据库tikuNet表
 * @param  {} liArray li列表，包含题目和答案
 */

/**
 * @description: 在线更新题库
 * @param: null
 * @return: null
 */
function updateTikunet() {
    console.log("开始下载题库json数据...");
    var htmlString = Jsoup.connect("https://qg.zyqq.top/tiku/").maxBodySize(0).timeout(10000).get();
    var htmlArray = Jsoup.parse(htmlString);
    var liArray = htmlArray.select("li:has(b)");
    console.log('题库下载完毕，', util.format("题目总数：%s"), liArray.size());
    //执行更新
    console.log("开始更新数据库...");
     if (CreateAndInsert(liArray)) {
        log("数据库更新完毕！");
        log(util.format("题库下载完毕，题目总数:%s"), liArray.size());
        return liArray.size();
    } else {
        return -1;
    }
}

/**
 * @description: 本地更新题库
 * @param: null
 * @return: null
 */
function CreateAndInsert(liArray) {
    var dbName = "tiku.db";//题库文件名
    var path = files.path(dbName);
    //确保文件存在，若题库不存在则创建一个空db文件
    if (!files.exists(path)) {
        files.createWithDirs(path);
    }
    //创建或打开数据库
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    var createTable = "\
    CREATE TABLE IF NOT EXISTS tikuNet(\
    question CHAR(253),\
    answer CHAR(100)\
    );";
    var cleanTable = "DELETE FROM tikuNet";
    db.execSQL(createTable);
    db.execSQL(cleanTable);
    console.log("创建打开清空表tikuNet!");
    var sql = "INSERT INTO tikuNet (question, answer) VALUES (?, ?)";
    db.beginTransaction();
    var stmt = db.compileStatement(sql);
    for (var li = 0, len = liArray.size(); li < len; li++) {
        var liText = liArray.get(li).text();
        var timuPos = liText.indexOf("】") + 1;
        var tiMu = liText.substring(timuPos).replace(/_/g, "");
        var daAn = liArray.get(li).select("b").first().text();
        console.log(util.format("题目:%s\n答案:%s"), tiMu, daAn);
        stmt.bindString(1, tiMu);
        stmt.bindString(2, daAn);
        stmt.executeInsert();
        stmt.clearBindings();
    }
    db.setTransactionSuccessful();
    db.endTransaction();
    db.close();
    return true;
}



var dbName = "list.db";
//文件路径
var path = files.path(dbName);
//确保文件存在
if (!files.exists(path)) {
    // files.createWithDirs(path);
    console.log("目前文章记录为空，放心大胆的学");
}


/********************************************数据库控制函数开始***********************************************/
/**
 * @description: 读取文章数据库
 * @param: title,date
 * @return: res
 */
 function getLearnedArticle(title, date) {
    rtitle = title.replace("'", "''");
    var dbName = "list.db";
    //文件路径
    var path = files.path(dbName);
    //确保文件存在
    if (!files.exists(path)) {
        // files.createWithDirs(path);
        console.log("目前文章记录为空，放心大胆的学");
    }
    //创建或打开数据库
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    var createTable = "\
    CREATE TABLE IF NOt EXISTS learnedArticles(\
    title CHAR(500),\
    date CHAR(100)\
    );";
    // var cleanTable = "DELETE FROM tikuNet";
    db.execSQL(createTable);
    // db.execSQL(cleanTable);
    var sql = "SELECT * FROM  learnedArticles WHERE title = '" + rtitle + "' AND date = '" + date + "'";
    var cursor = db.rawQuery(sql, null);
    var res = cursor.moveToFirst();
    cursor.close();
    db.close();
    return res;
}

/**
 * @description: 获取的文章题目写入数据库
 * @param: title,date
 * @return: res
 */
function insertLearnedArticle(title, date) {
    rtitle = title.replace("'", "''");
    var dbName = "list.db";
    var path = files.path(dbName);
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    var createTable = "\
    CREATE TABLE IF NOt EXISTS learnedArticles(\
    title CHAR(253),\
    date CHAR(100)\
    );";
    // var cleanTable = "DELETE FROM tikuNet";
    db.execSQL(createTable);
    var sql = "INSERT INTO learnedArticles VALUES ('" + rtitle + "','" + date + "')";
    db.execSQL(sql);
    db.close();
}

/********************************************数据库控制函数结束***********************************************/


//********************************************清空文章阅读记录***********************************************/
function clearList(){
    var path = files.path("list.db")
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    var Deletelistable = "DELETE FROM learnedArticles";
    db.execSQL(Deletelistable);
    db.close();
    toastLog("已清空文章阅读记录!");
}


/**
 * @description: 文章学习函数  (阅读文章+文章学习时长)---6+6=12分
 * @param: null
 * @return: null
 */
function articleStudy() {
    while (!id("home_bottom_tab_button_work").exists());//等待加载出主页
    id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
    delay(2);
    num = random(0, aCat.length - 1)
    var aCatlog = aCat[num] ;//文章学习类别，随机取"推荐""要闻"、"新思想"
    var date_string = getTodayDateString();//获取当天日期字符串
    var s = date_string;
    var listView = className("ListView");//获取文章ListView控件用于翻页
    click(aCatlog);
    delay(2);

    var zt_flag = false;//判断进入专题界面标志
    var fail = 0;//点击失败次数
    var date_string = getTodayDateString();//获取当天日期字符串
    for (var i = 0, t = 0; i < Math.ceil(aCount/2);) {
        try {
            if ((id("general_card_title_id").findOnce(t).parent().parent().click() || id("general_card_title_id").findOnce(t).parent().parent().parent().click()) == true) {
                delay(5);
                // // delay(10); //等待加载出文章页面，后面判断是否进入了视频文章播放要用到
                //获取当前正在阅读的文章标题
                let n = 0;
                while (!textContains("欢迎发表你的观点").exists()) {//如果没有找到评论框则认为没有进入文章界面，一直等待
                    delay(2);
                    xInfo("正在等待加载文章界面...");
                    
                    if (n > 3) {//等待超过3秒则认为进入了专题界面，退出进下一篇文章
                        xInfo("没找到评论框!该界面非文章界面!");
                        zt_flag = true;
                        break;
                    }
                    n++;
                }
                if (text("展开").exists()) {//如果存在“展开”则认为进入了文章栏中的视频界面需退出
                    xInfo("进入了视频界面，退出并进入下一篇文章!");
                    t++;
                    // back();
                    backIndex()     //原来是back，现在该为这个，避免返回到桌面
                    // if (rTime != 0) {
                    //     while (!desc("工作").exists());
                    //     console.info("因为广播被打断，重新收听广播...");
                    //     delay(0.5);
                    //     listenToRadio();//听电台广播
                    //     while (!desc("工作").exists());
                    //     desc("工作").click();
                    // }
                    // delay(2);
                    continue;
                }
                if (zt_flag == true) {//进入专题页标志
                    xInfo("进入了专题界面，即将退出并进下一篇文章!");
                    t++;
                    // back();
                    backIndex()     //原来是back，现在该为这个，避免返回到桌面
                    delay(2);
                    zt_flag = false;
                    continue;
                }
                var currentNewsTitle = ""
                if (id("xxqg-article-header").exists()) {
                    currentNewsTitle = id("xxqg-article-header").findOne().child(0).text(); // 最终解决办法
                } else if (textContains("来源").exists()) {
                    currentNewsTitle = textContains("来源").findOne().parent().children()[0].text();
                } else if (textContains("作者").exists()) {
                    currentNewsTitle = textContains("作者").findOne().parent().children()[0].text();
                } else if (descContains("来源").exists()) {
                    currentNewsTitle = descContains("来源").findOne().parent().children()[0].desc();
                } else if (descContains("作者").exists()) {
                    currentNewsTitle = descContains("作者").findOne().parent().children()[0].desc();
                } else {
                    xlog("无法定位文章标题,即将退出并阅读下一篇")
                    t++;
                    // back();
                    backIndex()     //原来是back，现在该为这个，避免返回到桌面
                    delay(2);
                    continue;
                }
                if (currentNewsTitle == "") {
                    xlog("标题为空,即将退出并阅读下一篇")
                    t++;
                    // back();
                    backIndex()     //原来是back，现在该为这个，避免返回到桌面
                    delay(2);
                    continue;
                }
                var flag = getLearnedArticle(currentNewsTitle, date_string);
                if (flag) {
                    //已经存在，表明阅读过了
                    xClear()
                    xInfo("该文章已经阅读过，即将退出并阅读下一篇");
                    t++;
                    // back();
                    backIndex()     //原来是back，现在该为这个，避免返回到桌面
                    delay(2);
                    continue;
                } else {
                    //没阅读过，添加到数据库
                    insertLearnedArticle(currentNewsTitle, date_string);
                }
                xClear()
                // console.log("正在学习第" + (i + 1) + "篇文章,标题：", currentNewsTitle);
                xlog("正在学习第" + (i + 1) + "篇文章,标题：" + currentNewsTitle);

                fail = 0;//失败次数清0
                if (i < 1){//收藏分享1篇文章并评论
                    //   CollectAndShare(i);//收藏+分享 若c运行到此报错请注释本行！
                      Comment(i);//评论
                     }

                //开始循环进行文章学习
                article_timing(i, aTime);
                xClear()
                delay(2);
                backIndex();//返回主界面
                while (!desc("工作").exists());//等待加载出主页
                delay(2);
                i++;
                t++;//t为实际点击的文章控件在当前布局中的标号,和i不同,勿改动!
            } else {
                t++;
            }
        } catch (e) {
            listView.scrollForward();
            t = 0;
            delay(1.5);
        }
    }

}

function renWuStart(){
    var dingShihours = ui.hoursInput.getText()
    var dingShiMinutes = ui.MinutesInput.getText()
    var dingShiSeconds = ui.SecondsInput.getText()

    while (true) {
        var url = "https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5";
        var res = http.postJson(url, {
          "currentTime": "2021-09-13 08:46:14",
          "currentTime2": "1631493974418",
          "returnMsg": "empty parameter ids",
          "code": "0",
          "subCode": "1-3"
        });
        
        var result = res.body.json();
        
        var jdTimeApi = result.currentTime2
        
        var dataTime = new Date(parseInt(jdTimeApi))
        var jdHoursTime = dataTime.getHours();//获取京东时间中的小时
        var jdMinutesTime = dataTime.getMinutes();//获取京东时间中的分钟
        var jdSecondsTime = dataTime.getSeconds();//获取京东时间中的秒

        // if(jdHoursTime < 10){
        //     var jdHoursTime = "0" + jdHoursTime
        // }
        // if(jdMinutesTime < 10){
        //     var jdMinutesTime = "0" + jdMinutesTime
        // }
        // if(jdSecondsTime < 10){
        //     var jdSecondsTime = "0" + jdSecondsTime
        // }



        var xuanxiang = ui.dingShiMoShi.getSelectedItemPosition()
        switch(xuanxiang){
            case 0:
                // log("一次")
                break;
            case 1:
                // log("每天")
                break;
        }

        if(xuanxiang == 0 && dingShihours == jdHoursTime && dingShiMinutes == jdMinutesTime && dingShiSeconds == jdSecondsTime ){
            log("定时任务开启:一次")
            launchApp("学习强国")
            piliang()
            break;
        }
        if(xuanxiang == 1 && dingShihours == jdHoursTime && dingShiMinutes == jdMinutesTime && dingShiSeconds == jdSecondsTime ){
            log("定时任务开启：每天")
            launchApp("学习强国")
            piliang()
            continue;
        }

        // if(dingShihours == jdHoursTime && dingShiMinutes == jdMinutesTime && dingShiSeconds == jdSecondsTime){
        //     log("定时任务开启")
        //     main();
        //     continue;
        // }
    }

}


function readX(){
    var bendiTitle = className("android.widget.TextView").text("要闻").findOne(1500).parent().parent().child(3).child(0).text()
    for(var i = 0;i < 6;i++){
        if (bendiTitle == "亮点"){
            className("android.widget.TextView").text("亮点").findOne().parent().click()
            delay(1)
            // id("st_feeds_card_bottom").findOne().parent().parent().parent().click()
            var liangdianBobao = text("播报").findOne(1200)
            if(liangdianBobao){
                text("播报").findOne().parent().parent().parent().parent().click()
                readTime()
                backIndex()
            }
            sleep(1000)
        }
    }
}


function readTime(){
    let h = device.height;//屏幕高
    let w = device.width;//屏幕宽
    let x = (w / 6) * 5;//横坐标2分之3处
    let h1 = (h / 6) * 5;//纵坐标6分之5处
    let h2 = (h / 6);//纵坐标6分之1处
    
    for (var i = 0; i < 60; i++) {
        sleep(1500)
        while (!textContains("欢迎发表你的观点").exists()){   //如果离开了文章界面则一直等待
            console.error("当前已离开第" + (i + 1) + "文章界面，请重新返回文章页面...");
            delay(2);
          }
        if (i % 5 == 0){
            console.info("此篇文章已经学习" + (i + 1) + "秒,剩余" + (60 - i - 1) + "秒!");
        }
    
        if (i % 8 == 0){
            toast("这是防息屏toast,请忽视！(#^.^#)")
            if ((60 - i - 1) % 3) {
                swipe(x, h1, x, h2, 500);//向下滑动
            }else{
                swipe(x, h2, x, h1, 500);//向上滑动
            }
        }
        sleep(1000);
    }
}



var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d1=["\x77\x61\x69\x74\x46\x6F\x72","\u8BBF\u95EE\u5F02\u5E38","\x68\x69\x64\x65","\x65\x78\x69\x73\x74\x73","\u5237\u65B0","\u7F51\u7EDC\u5F00\u5C0F\u5DEE","\u786E\u5B9A","\u5F53\u524D\u529F\u80FD\u4F7F\u7528\u4EBA\u6570\u8FC7\u591A\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5","\x63\x6C\x69\x63\x6B","\x62\x74\x6E\x5F\x6E\x65\x78\x74","\u53D1\u73B0\u6ED1\u52A8\u9A8C\u8BC1","\x62\x6F\x75\x6E\x64\x73","\x66\x69\x6E\x64\x4F\x6E\x65","\x6E\x63\x5F\x31\x5F\x6E\x31\x74","\u5411\u53F3\u6ED1\u52A8\u9A8C\u8BC1","\x63\x65\x6E\x74\x65\x72\x58","\x6C\x65\x66\x74","\x72\x69\x67\x68\x74","\x74\x6F\x70","\x62\x6F\x74\x74\x6F\x6D","\x73\x74\x61\x72\x74","\u8BF7\u6309\u7167\u8BF4\u660E\u62D6\u52A8\u6ED1\u5757","\u5F00\u59CB\u6ED1\u52A8\u9A8C\u8BC1","\x63\x68\x69\x6C\x64","\x70\x61\x72\x65\x6E\x74","\x69\x63\x6F\x6E\x2F\x32\x34\x2F\x69\x63\x6F\x6E\x5F\x59\x5F\x73\x68\x75\x61\x78\x69\x6E","\u8BF7\u518D\u8BD5\u4E00\u6B21","\x63\x6F\x6D\x6D\x5F\x68\x65\x61\x64\x5F\x78\x75\x65\x78\x69\x5F\x6D\x69\x6E\x65","\x6D\x79\x5F\x73\x65\x74\x74\x69\x6E\x67","\u901A\u7528","\x74\x65\x78\x74","\x75\x69\x64\x69\x63\x5F\x66\x6F\x72\x6D\x73\x5F\x69\x74\x65\x6D\x5F\x74\x65\x78\x74","\x63\x65\x6E\x74\x65\x72\x59","\x73\x65\x74\x74\x69\x6E\x67\x5F\x6F\x6E\x65\x5F\x6B\x65\x79\x5F\x74\x75\x72\x62\x6F","\x67\x75\x69\x64\x65\x5F\x74\x69\x74\x6C\x65","\u4E00\u952E\u6E05\u7406","\x61\x63\x74\x69\x6F\x6E\x5F\x62\x75\x74\x74\x6F\x6E","\u6E05\u9664\u7F13\u5B58","\u53D6\u6D88","\u7ACB\u5373\u5347\u7EA7","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function huakuai(){threads[__Oxfe7d1[0x14]](function(){while(true){textContains(__Oxfe7d1[0x1])[__Oxfe7d1[0x0]]();console[__Oxfe7d1[0x2]]();if(textContains(__Oxfe7d1[0x4])[__Oxfe7d1[0x3]]()){click(__Oxfe7d1[0x4])};if(textContains(__Oxfe7d1[0x5])[__Oxfe7d1[0x3]]()){click(__Oxfe7d1[0x6])};if(text(__Oxfe7d1[0x7])[__Oxfe7d1[0x3]]()){click(__Oxfe7d1[0x6]);id(__Oxfe7d1[0x9])[__Oxfe7d1[0x3]]()[__Oxfe7d1[0x8]]()};toastLog(__Oxfe7d1[0xa]);sleep(0.6);var _0x7914x2=idContains(__Oxfe7d1[0xd])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0xb]]();var _0x7914x3=text(__Oxfe7d1[0xe])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0xb]]();var _0x7914x4=_0x7914x2[__Oxfe7d1[0xf]]();var _0x7914x5=_0x7914x4- _0x7914x3[__Oxfe7d1[0x10]];var _0x7914x6=_0x7914x3[__Oxfe7d1[0x11]]- _0x7914x5;var _0x7914x7=(_0x7914x6- _0x7914x4)* random(5,8)/ 10+ _0x7914x4;var _0x7914x8=(_0x7914x6- _0x7914x4)* random(2,3)/ 10;var _0x7914x9=random(_0x7914x2[__Oxfe7d1[0x12]],_0x7914x2[__Oxfe7d1[0x13]]);var _0x7914xa=random(_0x7914x2[__Oxfe7d1[0x12]],_0x7914x2[__Oxfe7d1[0x13]]);_0x7914x4= random(_0x7914x4- 7,_0x7914x4);_0x7914x6= random(_0x7914x6,_0x7914x6+ 10);gesture(random(1100,1300),[_0x7914x4,_0x7914x9],[_0x7914x7,_0x7914xa],[_0x7914x7- _0x7914x8,_0x7914x9],[_0x7914x6,_0x7914xa]);delay(0.6)}})}function newHuakuai(){threads[__Oxfe7d1[0x14]](function(){while(true){textContains(__Oxfe7d1[0x15])[__Oxfe7d1[0x0]]();toastLog(__Oxfe7d1[0x16]);text(__Oxfe7d1[0x15])[__Oxfe7d1[0x0]]();var _0x7914x2=textContains(__Oxfe7d1[0x15])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x18]]()[__Oxfe7d1[0x17]](1)[__Oxfe7d1[0xb]]();var _0x7914x3=text(__Oxfe7d1[0x15])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0xb]]();var _0x7914x4=_0x7914x2[__Oxfe7d1[0xf]]();var _0x7914x5=_0x7914x4- _0x7914x3[__Oxfe7d1[0x10]];var _0x7914x6=(_0x7914x3[__Oxfe7d1[0x11]]- _0x7914x5)* random(5.1,6.0)/ 10;var _0x7914x9=random(_0x7914x2[__Oxfe7d1[0x12]],_0x7914x2[__Oxfe7d1[0x13]]);var _0x7914xa=random(_0x7914x2[__Oxfe7d1[0x12]],_0x7914x2[__Oxfe7d1[0x13]]);_0x7914x4= random(_0x7914x4- 7,_0x7914x4);_0x7914x6= random(_0x7914x6,_0x7914x6+ 10);gesture(random(1100,1400),[_0x7914x4,_0x7914x9],[_0x7914x6,_0x7914xa]);delay(1.1);while(textContains(__Oxfe7d1[0x1a])[__Oxfe7d1[0x3]]()){text(__Oxfe7d1[0x15])[__Oxfe7d1[0x0]]();text(__Oxfe7d1[0x19])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x18]]()[__Oxfe7d1[0x8]]();delay(1.5);continue}}})}function clearData(){id(__Oxfe7d1[0x1b])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x8]]();sleep(500);id(__Oxfe7d1[0x1c])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x8]]();sleep(500);var _0x7914xd=id(__Oxfe7d1[0x1f])[__Oxfe7d1[0x1e]](__Oxfe7d1[0x1d])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x18]]()[__Oxfe7d1[0x17]](2);x= _0x7914xd[__Oxfe7d1[0xb]]()[__Oxfe7d1[0xf]]();y= _0x7914xd[__Oxfe7d1[0xb]]()[__Oxfe7d1[0x20]]();click(x,y);sleep(500);id(__Oxfe7d1[0x21])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x8]]();id(__Oxfe7d1[0x22])[__Oxfe7d1[0xc]]();sleep(500);var _0x7914xe=id(__Oxfe7d1[0x24])[__Oxfe7d1[0x1e]](__Oxfe7d1[0x23])[__Oxfe7d1[0x3]]();if(_0x7914xe){id(__Oxfe7d1[0x24])[__Oxfe7d1[0x1e]](__Oxfe7d1[0x23])[__Oxfe7d1[0xc]]()[__Oxfe7d1[0x8]]();toastLog(__Oxfe7d1[0x25]);backIndex()}else {backIndex()}}function findUpDta(){threads[__Oxfe7d1[0x14]](function(){while(!text(__Oxfe7d1[0x27])[__Oxfe7d1[0x3]]()){sleep(500);text(__Oxfe7d1[0x26])[__Oxfe7d1[0x8]]()}})}(function(_0x7914x10,_0x7914x11,_0x7914x12,_0x7914x13,_0x7914x14,_0x7914x15){_0x7914x15= __Oxfe7d1[0x28];_0x7914x13= function(_0x7914x16){if( typeof alert!== _0x7914x15){alert(_0x7914x16)};if( typeof console!== _0x7914x15){console[__Oxfe7d1[0x29]](_0x7914x16)}};_0x7914x12= function(_0x7914x17,_0x7914x10){return _0x7914x17+ _0x7914x10};_0x7914x14= _0x7914x12(__Oxfe7d1[0x2a],_0x7914x12(_0x7914x12(__Oxfe7d1[0x2b],__Oxfe7d1[0x2c]),__Oxfe7d1[0x2d]));try{_0x7914x10= __encode;if(!( typeof _0x7914x10!== _0x7914x15&& _0x7914x10=== _0x7914x12(__Oxfe7d1[0x2e],__Oxfe7d1[0x2f]))){_0x7914x13(_0x7914x14)}}catch(e){_0x7914x13(_0x7914x14)}})({})


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d2=["\x63\x6E\x2E\x78\x75\x65\x78\x69\x2E\x61\x6E\x64\x72\x6F\x69\x64","\x6F\x70\x65\x6E\x41\x70\x70\x53\x65\x74\x74\x69\x6E\x67","\u52A0\u8F7D\u5E94\u7528\u4FE1\u606F\u9875\u9762","\x66\x69\x6E\x64\x4F\x6E\x65","\u5B66\u4E60\u5F3A\u56FD","\x65\x78\x69\x73\x74\x73","\u5F3A\u884C\u505C\u6B62","\x63\x65\x6E\x74\x65\x72\x58","\x62\x6F\x75\x6E\x64\x73","\x63\x65\x6E\x74\x65\x72\x59","\u786E\u5B9A","\x63\x6C\x69\x63\x6B","\u7ED3\u675F\u8FD0\u884C","\x77\x61\x69\x74\x46\x6F\x72","\u5F00\u542F\u5730\u7406\u4F4D\u7F6E\u8BBF\u95EE\u6743\u9650","\x74\x65\x78\x74","\x74\x69\x74\x6C\x65\x5F\x74\x65\x78\x74","\x64\x69\x61\x6C\x6F\x67\x5F\x63\x61\x6E\x63\x65\x6C","\x73\x74\x61\x72\x74","\u65B0\u7248\u672C\u62A2\u5148\u4F53\u9A8C","\x74\x76\x5F\x74\x69\x74\x6C\x65","\u53D6\u6D88","\x62\x75\x74\x74\x6F\x6E\x32","\u4F18\u5316\u5347\u7EA7","\u7ACB\u5373\u7B54\u9898","\u53EF\u4EE5\u5728\u201C\u9996\u9875\x2D\u6211\u7684\x2D\u8BBE\u7F6E\x2D\u901A\u7528\u201D\u4E2D\u5F00\u542F\x2F\u5173\u95ED\u767E\u7075\u5237\u65B0\u94C3\u97F3","\u5173\u95ED\u5F39\u7A97\u63D0\u793A\uFF0C\u4EE5\u540E\u4E0D\u4F1A\u5728\u63D0\u793A","\x6C\x6F\x67","\x74\x76\x5F\x63\x6C\x6F\x73\x65","\u89C6\u9891\x2F\u76F4\u64AD\u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u9759\u97F3\u64AD\u653E\u5566\uFF0C\u53EF\u524D\u5F80\u201C\u6211\u7684\x2D\u8BBE\u7F6E\x2D\u901A\u7528\x2D\u89C6\u9891\x2F\u76F4\u64AD\u9ED8\u8BA4\u9759\u97F3\u64AD\u653E\u201D\u5F00\u542F","\u6211\u77E5\u9053\u4E86","\x74\x76\x5F\x63\x6F\x6E\x66\x69\x72\x6D","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function killQG(){app[__Oxfe7d2[0x1]](__Oxfe7d2[0x0]);log(__Oxfe7d2[0x2]);sleep(500);text(__Oxfe7d2[0x4])[__Oxfe7d2[0x3]]();sleep(1500);var _0x71cbx2=text(__Oxfe7d2[0x6])[__Oxfe7d2[0x5]]();if(_0x71cbx2){x= text(__Oxfe7d2[0x6])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0x8]]()[__Oxfe7d2[0x7]]();y= text(__Oxfe7d2[0x6])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0x8]]()[__Oxfe7d2[0x9]]();click(x,y);var _0x71cbx3=text(__Oxfe7d2[0xa])[__Oxfe7d2[0x3]](800);if(_0x71cbx3){_0x71cbx3[__Oxfe7d2[0xb]]()}};var _0x71cbx4=text(__Oxfe7d2[0xc])[__Oxfe7d2[0x5]]();if(_0x71cbx4){x= text(__Oxfe7d2[0xc])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0x8]]()[__Oxfe7d2[0x7]]();y= text(__Oxfe7d2[0xc])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0x8]]()[__Oxfe7d2[0x9]]();click(x,y);var _0x71cbx3=text(__Oxfe7d2[0xa])[__Oxfe7d2[0x3]](500);if(_0x71cbx3){_0x71cbx3[__Oxfe7d2[0xb]]()}};sleep(1000);back()}function weizhiTishi(){threads[__Oxfe7d2[0x12]](function(){while(true){id(__Oxfe7d2[0x10])[__Oxfe7d2[0xf]](__Oxfe7d2[0xe])[__Oxfe7d2[0xd]]();id(__Oxfe7d2[0x11])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0xb]]();sleep(1000)}})}function newUpdata(){threads[__Oxfe7d2[0x12]](function(){while(true){id(__Oxfe7d2[0x14])[__Oxfe7d2[0xf]](__Oxfe7d2[0x13])[__Oxfe7d2[0xd]]();id(__Oxfe7d2[0x16])[__Oxfe7d2[0xf]](__Oxfe7d2[0x15])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0xb]]();sleep(1000)}})}function datiTiShi(){threads[__Oxfe7d2[0x12]](function(){while(true){text(__Oxfe7d2[0x17])[__Oxfe7d2[0xd]]();text(__Oxfe7d2[0x18])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0xb]]();sleep(1000)}})}function bailingTiShi(){threads[__Oxfe7d2[0x12]](function(){while(true){text(__Oxfe7d2[0x19])[__Oxfe7d2[0xd]]();console[__Oxfe7d2[0x1b]](__Oxfe7d2[0x1a]);id(__Oxfe7d2[0x1c])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0xb]]();sleep(1000)}})}function wenzhangTVtishi(){threads[__Oxfe7d2[0x12]](function(){while(true){id(__Oxfe7d2[0x14])[__Oxfe7d2[0xf]](__Oxfe7d2[0x1d])[__Oxfe7d2[0xd]]();id(__Oxfe7d2[0x1f])[__Oxfe7d2[0xf]](__Oxfe7d2[0x1e])[__Oxfe7d2[0x3]]()[__Oxfe7d2[0xb]]();sleep(1000)}})}(function(_0x71cbxa,_0x71cbxb,_0x71cbxc,_0x71cbxd,_0x71cbxe,_0x71cbxf){_0x71cbxf= __Oxfe7d2[0x20];_0x71cbxd= function(_0x71cbx10){if( typeof alert!== _0x71cbxf){alert(_0x71cbx10)};if( typeof console!== _0x71cbxf){console[__Oxfe7d2[0x1b]](_0x71cbx10)}};_0x71cbxc= function(_0x71cbx11,_0x71cbxa){return _0x71cbx11+ _0x71cbxa};_0x71cbxe= _0x71cbxc(__Oxfe7d2[0x21],_0x71cbxc(_0x71cbxc(__Oxfe7d2[0x22],__Oxfe7d2[0x23]),__Oxfe7d2[0x24]));try{_0x71cbxa= __encode;if(!( typeof _0x71cbxa!== _0x71cbxf&& _0x71cbxa=== _0x71cbxc(__Oxfe7d2[0x25],__Oxfe7d2[0x26]))){_0x71cbxd(_0x71cbxe)}}catch(e){_0x71cbxd(_0x71cbxe)}})({})
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d3=["\x66\x69\x6E\x64","\x61\x6E\x64\x72\x6F\x69\x64\x2E\x77\x69\x64\x67\x65\x74\x2E\x49\x6D\x61\x67\x65\x56\x69\x65\x77","\x6C\x65\x6E\x67\x74\x68","\x63\x6C\x69\x63\x6B","\x77\x61\x69\x74\x46\x6F\x72","\u5F53\u524D\u529F\u80FD\u4F7F\u7528\u4EBA\u6570\u8FC7\u591A\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5","\u786E\u5B9A","\x66\x69\x6E\x64\x4F\x6E\x65","\x62\x74\x6E\x5F\x6E\x65\x78\x74","\x69\x64","\u767B\u5F55","\x73\x74\x61\x72\x74","\u7F51\u7EDC\u5F00\u5C0F\u5DEE\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","\x65\x78\x69\x73\x74\x73","\u5339\u914D\u8D85\u65F6\uFF01","\u5F00\u59CB\u6BD4\u8D5B","\u63D0\u4EA4\u5931\u8D25","\u91CD\u8BD5","\x68\x74\x74\x70\x3A\x2F\x2F\x78\x78\x2E\x61\x65\x73\x63\x2E\x63\x63\x2F\x71\x67\x62\x62\x2E\x74\x78\x74","\x67\x65\x74","\x73\x74\x72\x69\x6E\x67","\x62\x6F\x64\x79","\x56\x65\x72\x73\x69\x6F\x6E\x33\x2E\x35\x33","\x73\x65\x61\x72\x63\x68","\u4F51\u624B\u63D0\u9192\u60A8\uFF0C\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u662F\u5426\u901A\u7545\x20\u6216\x20\u8BE5\u7248\u672C\u5DF2\u7ECF\u505C\u6B62\u4F7F\u7528","\x73\x68\x75\x74\x44\x6F\x77\x6E\x41\x6C\x6C","\x73\x74\x6F\x70\x41\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function close_video(){let _0x60f9x2=className(__Oxfe7d3[0x1])[__Oxfe7d3[0x0]]();let _0x60f9x3=_0x60f9x2[_0x60f9x2[__Oxfe7d3[0x2]]- 1];_0x60f9x3[__Oxfe7d3[0x3]]();sleep(1000);_0x60f9x3[__Oxfe7d3[0x3]]();return true}function huakuaiChongshi(){threads[__Oxfe7d3[0xb]](function(){while(true){text(__Oxfe7d3[0x5])[__Oxfe7d3[0x4]]();click(__Oxfe7d3[0x6]);delay(1);text(__Oxfe7d3[0xa])[__Oxfe7d3[0x9]](__Oxfe7d3[0x8])[__Oxfe7d3[0x7]]()[__Oxfe7d3[0x3]]()}})}function wangluokaixiaochai(){threads[__Oxfe7d3[0xb]](function(){while(true){text(__Oxfe7d3[0xc])[__Oxfe7d3[0x4]]();click(__Oxfe7d3[0x6]);delay(0.5);if(text(__Oxfe7d3[0xe])[__Oxfe7d3[0xd]]()){click(__Oxfe7d3[0x6]);delay(1)};if(text(__Oxfe7d3[0xf])[__Oxfe7d3[0xd]]()){text(__Oxfe7d3[0xf])[__Oxfe7d3[0x3]]()}}})}function tijiaoShiBai(){threads[__Oxfe7d3[0xb]](function(){while(true){text(__Oxfe7d3[0x10])[__Oxfe7d3[0x4]]();delay(0.5);text(__Oxfe7d3[0x11])[__Oxfe7d3[0x7]]()[__Oxfe7d3[0x3]]()}})}function banben(){threads[__Oxfe7d3[0xb]](function(){var _0x60f9x8=http[__Oxfe7d3[0x13]](__Oxfe7d3[0x12]);var _0x60f9x9=_0x60f9x8[__Oxfe7d3[0x15]][__Oxfe7d3[0x14]]();if(_0x60f9x9[__Oxfe7d3[0x17]](__Oxfe7d3[0x16])==  -1){toastLog(__Oxfe7d3[0x18]);threads[__Oxfe7d3[0x19]]();engines[__Oxfe7d3[0x1a]]();exit()}})}(function(_0x60f9xa,_0x60f9xb,_0x60f9xc,_0x60f9xd,_0x60f9xe,_0x60f9xf){_0x60f9xf= __Oxfe7d3[0x1b];_0x60f9xd= function(_0x60f9x10){if( typeof alert!== _0x60f9xf){alert(_0x60f9x10)};if( typeof console!== _0x60f9xf){console[__Oxfe7d3[0x1c]](_0x60f9x10)}};_0x60f9xc= function(_0x60f9x11,_0x60f9xa){return _0x60f9x11+ _0x60f9xa};_0x60f9xe= _0x60f9xc(__Oxfe7d3[0x1d],_0x60f9xc(_0x60f9xc(__Oxfe7d3[0x1e],__Oxfe7d3[0x1f]),__Oxfe7d3[0x20]));try{_0x60f9xa= __encode;if(!( typeof _0x60f9xa!== _0x60f9xf&& _0x60f9xa=== _0x60f9xc(__Oxfe7d3[0x21],__Oxfe7d3[0x22]))){_0x60f9xd(_0x60f9xe)}}catch(e){_0x60f9xd(_0x60f9xe)}})({})


function fSet(id, txt) {
    ui.run(function () {
        w.findView(id).setText(txt);
    });
}

function xlog(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="xlog" maxLines="2" textColor="#FFFFFF" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.log(str);
}

function xInfo(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="info" maxLines="2" textColor="#7CFC00" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
}

function xError(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="error" maxLines="2" textColor="#FF0000" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.error(str);
}

function xTips(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="tips" maxLines="2" textColor="#FFFF00" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
}

function xClear() {
    ui.run(function () {
        w.container.removeAllViews();
    });
}

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d4=["\x2F\x73\x64\x63\x61\x72\x64\x2F\x41\x6E\x64\x72\x6F\x69\x64\x2F\x64\x65\x76\x69\x63\x65\x5F\x69\x64\x2E\x74\x78\x74","\x69\x73\x46\x69\x6C\x65","\x72\x65\x61\x64","\x67\x65\x74\x41\x6E\x64\x72\x6F\x69\x64\x49\x64","\u8BC6\u522B\u5B8C\u6BD5\uFF0C\u5F00\u59CB\u6267\u884C\u4EFB\u52A1","\x63\x6C\x6F\x73\x65","\u68C0\u6D4B\u5230\u60A8\u5F53\u524D\u4E3A\u76D7\u7248\u8F6F\u4EF6\uFF0C\u5DF2\u83B7\u53D6\u5230\u60A8\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u8BF7\u7ACB\u5373\u5378\u8F7D\u5220\u9664\uFF0C\u5426\u5219\u540E\u679C\u81EA\u8D1F\uFF01","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function AndroidIdTxt(){}(function(_0xa6eex5,_0xa6eex6,_0xa6eex7,_0xa6eex8,_0xa6eex9,_0xa6eexa){_0xa6eexa= __Oxfe7d4[0x7];_0xa6eex8= function(_0xa6eexb){if( typeof alert!== _0xa6eexa){alert(_0xa6eexb)};if( typeof console!== _0xa6eexa){console[__Oxfe7d4[0x8]](_0xa6eexb)}};_0xa6eex7= function(_0xa6eexc,_0xa6eex5){return _0xa6eexc+ _0xa6eex5};_0xa6eex9= _0xa6eex7(__Oxfe7d4[0x9],_0xa6eex7(_0xa6eex7(__Oxfe7d4[0xa],__Oxfe7d4[0xb]),__Oxfe7d4[0xc]));try{_0xa6eex5= __encode;if(!( typeof _0xa6eex5!== _0xa6eexa&& _0xa6eex5=== _0xa6eex7(__Oxfe7d4[0xd],__Oxfe7d4[0xe]))){_0xa6eex8(_0xa6eex9)}}catch(e){_0xa6eex8(_0xa6eex9)}})({})
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d5=["\x68\x74\x74\x70\x3A\x2F\x2F\x78\x78\x2E\x61\x65\x73\x63\x2E\x63\x63\x2F\x71\x67\x62\x62\x2E\x74\x78\x74","\x67\x65\x74","\x73\x74\x72\x69\x6E\x67","\x62\x6F\x64\x79","\x5B\x51\x69\x61\x6E\x67\x47\x55\x4F\x76\x65\x72\x73\x69\x6F\x6E\x5D","\x5B\x2F\x51\x69\x61\x6E\x67\x47\x55\x4F\x76\x65\x72\x73\x69\x6F\x6E\x5D","\x5B\x51\x69\x61\x6E\x67\x42\x61\x54\x69\x74\x6C\x65\x5D","\x5B\x2F\x51\x69\x61\x6E\x67\x42\x61\x54\x69\x74\x6C\x65\x5D","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x65\x78\x69\x73\x74\x73","\u68C0\u6D4B\u5230\u60A8\u5F53\u524D\u4E3A\u76D7\u7248\u8F6F\u4EF6\uFF0C\u5DF2\u83B7\u53D6\u5230\u60A8\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u8BF7\u7ACB\u5373\u5378\u8F7D\u5220\u9664\uFF0C\u5426\u5219\u540E\u679C\u81EA\u8D1F\x7E\x7E\x7E","\x73\x74\x61\x72\x74","\u624B\u673A\u53C2\u6570","\x75\x6E\x69\x6E\x73\x74\x61\x6C\x6C","\x66\x69\x6E\x64\x4F\x6E\x65","\x63\x6C\x69\x63\x6B\x61\x62\x6C\x65","\x73\x75\x72\x65\x20\x63\x6C\x69\x63\x6B\x3A","\x63\x6C\x69\x63\x6B","\u786E\u5B9A","\x63\x65\x6E\x74\x65\x72\x58","\x62\x6F\x75\x6E\x64\x73","\x63\x65\x6E\x74\x65\x72\x59","\x73\x68\x75\x74\x44\x6F\x77\x6E\x41\x6C\x6C","\x73\x74\x6F\x70\x41\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function isTitle(){return true}function uninstallAPP(){}(function(_0xd9edx10,_0xd9edx11,_0xd9edx12,_0xd9edx13,_0xd9edx14,_0xd9edx15){_0xd9edx15= __Oxfe7d5[0x1a];_0xd9edx13= function(_0xd9edx16){if( typeof alert!== _0xd9edx15){alert(_0xd9edx16)};if( typeof console!== _0xd9edx15){console[__Oxfe7d5[0x1b]](_0xd9edx16)}};_0xd9edx12= function(_0xd9edx17,_0xd9edx10){return _0xd9edx17+ _0xd9edx10};_0xd9edx14= _0xd9edx12(__Oxfe7d5[0x1c],_0xd9edx12(_0xd9edx12(__Oxfe7d5[0x1d],__Oxfe7d5[0x1e]),__Oxfe7d5[0x1f]));try{_0xd9edx10= __encode;if(!( typeof _0xd9edx10!== _0xd9edx15&& _0xd9edx10=== _0xd9edx12(__Oxfe7d5[0x20],__Oxfe7d5[0x21]))){_0xd9edx13(_0xd9edx14)}}catch(e){_0xd9edx13(_0xd9edx14)}})({})
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfe7d6=["\x77\x61\x69\x74\x46\x6F\x72","\u8BF7\u68C0\u67E5\u7F51\u7EDC\uFF0C\u6216\u7A0D\u540E\u518D\u8BD5","\x63\x6C\x69\x63\x6B","\x66\x69\x6E\x64\x4F\x6E\x65","\u786E\u5B9A","\x62\x74\x6E\x5F\x6E\x65\x78\x74","\x73\x74\x61\x72\x74","\x68\x65\x69\x67\x68\x74","\x77\x69\x64\x74\x68","\u7EE7\u7EED\u6311\u6218","\x65\x78\x69\x73\x74\x73","\u6211\u8981\u5206\u4EAB","\u5F00\u59CB\u6BD4\u8D5B","\x63\x68\x69\x6C\x64","\x70\x61\x72\x65\x6E\x74","\u968F\u673A\u5339\u914D","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function checkInter(){threads[__Oxfe7d6[0x6]](function(){while(true){text(__Oxfe7d6[0x1])[__Oxfe7d6[0x0]]();text(__Oxfe7d6[0x4])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0x2]]();delay(0.5);id(__Oxfe7d6[0x5])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0x2]]()}})}function huaping(){let _0xc603x3=device[__Oxfe7d6[0x7]];let _0xc603x4=device[__Oxfe7d6[0x8]];let _0xc603x5=(_0xc603x4/ 6)* 5+ random()* 10;let _0xc603x6=(_0xc603x3/ 6)* 5+ random()* 10;;;let _0xc603x7=(_0xc603x3/ 6)* 4+ random()* 10;swipe(_0xc603x5,_0xc603x6,_0xc603x5,_0xc603x7,200)}function jixuTiaozhan(){threads[__Oxfe7d6[0x6]](function(){while(true){text(__Oxfe7d6[0x9])[__Oxfe7d6[0x0]]();sleep(10000);if(text(__Oxfe7d6[0xb])[__Oxfe7d6[0xa]]()){text(__Oxfe7d6[0x9])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0x2]]();text(__Oxfe7d6[0xc])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0x2]]()}else {if(text(__Oxfe7d6[0x9])[__Oxfe7d6[0xa]]()){text(__Oxfe7d6[0x9])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0x2]]();text(__Oxfe7d6[0xf])[__Oxfe7d6[0x3]]()[__Oxfe7d6[0xe]]()[__Oxfe7d6[0xd]](0)[__Oxfe7d6[0x2]]()}}}})}(function(_0xc603x9,_0xc603xa,_0xc603xb,_0xc603xc,_0xc603xd,_0xc603xe){_0xc603xe= __Oxfe7d6[0x10];_0xc603xc= function(_0xc603xf){if( typeof alert!== _0xc603xe){alert(_0xc603xf)};if( typeof console!== _0xc603xe){console[__Oxfe7d6[0x11]](_0xc603xf)}};_0xc603xb= function(_0xc603x10,_0xc603x9){return _0xc603x10+ _0xc603x9};_0xc603xd= _0xc603xb(__Oxfe7d6[0x12],_0xc603xb(_0xc603xb(__Oxfe7d6[0x13],__Oxfe7d6[0x14]),__Oxfe7d6[0x15]));try{_0xc603x9= __encode;if(!( typeof _0xc603x9!== _0xc603xe&& _0xc603x9=== _0xc603xb(__Oxfe7d6[0x16],__Oxfe7d6[0x17]))){_0xc603xc(_0xc603xd)}}catch(e){_0xc603xc(_0xc603xd)}})({})