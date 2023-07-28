let 常用函数 = require('module.js');
常用函数.启用微信推送功能(true);
auto.waitFor();
let delay_time = 3E3;
//Hook所有sleep并随机增加时间
const _sleep = sleep;
sleep = function(n) {
    n += random(7, 120);
    _sleep(n);
}
device.wakeUpIfNeeded();
let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
let gmlkit = new MLKitOCR();
let paddle = $ocr.create();

// 读取自定义配置
let TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
let skipwarning = TTXS_PRO_CONFIG.get("skipwarning", null) == new Date().getDate() ? true : false;
let watchdog = TTXS_PRO_CONFIG.get("watchdog", "1800");
let slide_verify = TTXS_PRO_CONFIG.get("slide_verify", "1500");
let fast_mode = TTXS_PRO_CONFIG.get("fast_mode", false);
let ddtong = TTXS_PRO_CONFIG.get("ddtong", false);
let is_exit = TTXS_PRO_CONFIG.get("is_exit", false);
let pinglun = TTXS_PRO_CONFIG.get("pinglun", true);
let shipin = TTXS_PRO_CONFIG.get("shipin", true);
let wenzhang = TTXS_PRO_CONFIG.get("wenzhang", true);
let meiri = TTXS_PRO_CONFIG.get("meiri", true);
let zhuanxiang = TTXS_PRO_CONFIG.get("zhuanxiang", 1);
let tiaozhan = TTXS_PRO_CONFIG.get("tiaozhan", true);
let ocr_choice = TTXS_PRO_CONFIG.get("ocr_choice", 0);
let ocr_maxtime = TTXS_PRO_CONFIG.get("ocr_maxtime", "5000");
let duizhan_mode = TTXS_PRO_CONFIG.get("duizhan_mode", 0);
let jisu = TTXS_PRO_CONFIG.get("jisu", "0");
let siren = TTXS_PRO_CONFIG.get("siren", true);
let dacuo_num = TTXS_PRO_CONFIG.get("dacuo_num", "1");
let shuangren = TTXS_PRO_CONFIG.get("shuangren", true);
let bendi = TTXS_PRO_CONFIG.get("bendi", true);
let dingyue = TTXS_PRO_CONFIG.get("dingyue", 1);
let pushplus = TTXS_PRO_CONFIG.get("pushplus", "");
let yl_on = TTXS_PRO_CONFIG.get("yl_on", true);
let yinliang = TTXS_PRO_CONFIG.get("yinliang", "0");
let zhanghao = TTXS_PRO_CONFIG.get("zhanghao", "");

if (fast_mode) {
    auto.setMode("fast");
}
sleep(delay_time);
/*****************更新内容弹窗部分*****************/
let storage = storages.create('songgedodo');
// 脚本版本号
let last_version = "V10.11";
let engine_version = "V11.2";
let newest_version = "V11.5";
if (storage.get(engine_version, true)) {
    storage.remove(last_version);
    let gengxin_rows = ["最新版本强国APP不支持多人对战，切勿更新！",
        "强国APP版本v2.33.0以上不支持订阅，可以在豌豆荚中下载历史版本",
        "（点击取消不再提示）"
    ];
    let is_show = confirm(engine_version + "版更新内容", gengxin_rows.join("\n"));
    if (!is_show) {
        storage.put(engine_version, false);
    }
}
/******************初始化******************/
let w = fInit();
fInfo(getAppName(context.getPackageName()) + newest_version + "脚本初始化");
// 初始化宽高
let [device_w, device_h] = init_wh();

// 自动允许权限进程
threads.start(function() {
    //在新线程执行的代码
    //sleep(500);
    toastLog("开始自动获取截图权限");
    let btn = className("android.widget.Button").textMatches(/允许|立即开始|START NOW/).findOne(5E3);
    if (btn) {
        sleep(700);
        btn.click();
    }
    toastLog("结束获取截图权限");
});
fInfo("请求截图权限");
// 请求截图权限、似乎请求两次会失效
if (!requestScreenCapture(false)) { // false为竖屏方向
    fError('请求截图失败');
    exit();
}
// 防止设备息屏
fInfo("设置屏幕常亮");
device.keepScreenOn(36E5);
// 下载题库
fInfo("检测题库更新");
let tiku = [];
let dati_tiku = [];
let update_info = null;

try {
    update_info = get_tiku_by_http("https://gitcode.net/m0_64980826/songge_tiku/-/raw/master/info.json");
    fInfo("正在加载对战题库......请稍等\n题库版本:" + update_info.tiku_version);
    fInfo("如果不动就是正在下载，多等会");
    try {
        tiku = get_tiku_by_http(update_info.tiku_link);
    } catch (e) {
        tiku = get_tiku_by_http(update_info.tiku_link2);
    }
    fInfo("正在加载专项题库......请稍等\n题库版本:" + update_info.dati_tiku_version);
    try {
        dati_tiku = update_dati_tiku()
    } catch (e) {
        fError("网络原因未获取到在线题库，请尝试切换流量或者更换114DNS");
        dati_tiku = get_tiku_by_ct('http://mkdir.cc/XXQG/Better-Auto-XXQG/main/tiku/dati_tiku_20230121.txt');
    }
} catch (e) {
    log('加载题库发生错误：\n' + e);
}


// 设置资源保存路径
files.ensureDir(`/sdcard/${app.getAppName(context.getPackageName()).replace('.', '_')}/`);
// 调整音量
let yuan_yl = null;
if (yl_on) {
    fInfo("设置媒体音量");
    yuan_yl = device.getMusicVolume();
    let max_yl = device.getMusicMaxVolume();
    let yl = Math.ceil(yinliang * max_yl / 100);
    //同意修改系统设置
    let Tsmv = threads.start(() => {
        let smv = className("android.widget.Switch").id("switch_widget").findOne(5E3);
        if (smv && !smv.checked()) {
            smv.click();
            sleep(700);
            back();
        }
    });
    try {
        device.setMusicVolume(yl);
        Tsmv.interrupt();
    } catch (e) {
        sleep(2E3);
        device.setMusicVolume(yl);
        Tsmv.join(5E3);
    }
    fInfo("当前音量：" + device.getMusicVolume());
}
if (is_exit) {
    fInfo("运行前重置学习APP");
    exit_app("学习强国");
    sleep(1500);
}
// 检测地理位置权限代码，出现就点掉
fInfo("开始位置权限弹窗检测");
let nolocate_thread = threads.start(function() {
    //在新线程执行的代码
    id("title_text").textContains("地理位置").waitFor();
    fInfo("检测到位置权限弹窗");
    sleep(1E3);
    text("暂不开启").findOne().click();
    fInfo("已关闭定位");
});
//检测权限弹窗代码,出现就点击允许
fInfo("开始权限弹窗检测");
let noauthority_thread = threads.start(function() {
    //在新线程执行的代码
    textMatches(/允许/).waitFor();
    sleep(1E3);
    let packageName = getPackageName('学习强国');
    for (let i = 0; i < 2; i++) {
        if (currentPackage() != packageName) {
            fInfo("检测到权限弹窗，尝试点击允许");
            if (textMatches(/允许/).exists()) {
                textMatches(/允许/).findOne().click();
                fInfo("已允许权限申请");
            }
        }
        sleep(1E3);
    }
});
fInfo("跳转学习APP");
app.launchApp('学习强国');
sleep(2E3);
/*******************初始化完成******************/
/*******************主程序部分*******************/
/********定义全局变量*********/
let jifen_list, zhuanxiang_dao, dingyue_dao, storage_user, name, jinri, zongfen;
let jifen_map = {
    //jifen_map由AutoRefind_Map函数自动获取
}
let jifen_flag = "old";
let noverify_thread = noverify();
let zhanghao_list = [];
// 分割账号
if (zhanghao) {
    for (let zh of zhanghao.split("\n")) {
        zhanghao_list.push(zh.split(/[:+,， ：-]/));
    }
    while (zhanghao_list.length > 0) {
        main();
    }
    fClear();
} else {
    main();
}
if (noverify_thread.isAlive()) {
    noverify_thread.interrupt();
}

/*****************结束后配置*****************/
fInfo("已全部结束");
// 调回原始音量
if (yl_on) {
    fInfo("调回初始音量:" + yuan_yl);
    device.setMusicVolume(yuan_yl);
}
// 取消屏幕常亮
fInfo("取消屏幕常亮");
device.cancelKeepingAwake();
// 震动提示
device.vibrate(500);
gmlkit.release();
paddle.release();
fInfo("十秒后关闭悬浮窗");
sleep(1E4);
console.hide();
home();
exit();

function main() {
    let retry_time;
    if (!Number(watchdog)) {
        retry_time = 2E3;
    } else if (Number(watchdog) < 900) {
        fTips("建议重试延迟不要低于900s即15分钟，已设为1800s");
        retry_time = 1800;
    } else {
        retry_time = Number(watchdog);
    }
    for (let i = 0; i < 3; i++) {
        fClear();
        fInfo("开始第" + (i + 1) + "轮，最长运行时间为" + retry_time + "s");
        let xxqg_begin = new Date();
        let main_thread = threads.start(function() {
            xxqg();
        })
        main_thread.join(retry_time * 1E3);
        if (main_thread.isAlive()) {
            main_thread.interrupt();
            fError("运行超时，重试");
            exit_app("学习强国");
            sleep(1500);
            app.launchApp('学习强国');
            sleep(2E3);
        } else {
            let xxqg_end = new Date();
            let spent_time = ((xxqg_end - xxqg_begin) / 1E3).toFixed();
            fInfo("本轮已正常结束，花费时间" + spent_time + "s");
            return true
        }
    }
    fError("已重试3次，可能无障碍服务出现故障，退出脚本");
    exit();
}

function xxqg() {
    let sign_list = [];
    let my_phone = '';
    let phoneList = flatten(zhanghao_list);
    let username, pwd, token;
    fInfo("开始更新弹窗检测");
    let noupdate_thread = threads.start(function() {
        //在新线程执行的代码
        className("android.widget.Button").text("立即升级").waitFor();
        fInfo("检测到升级弹窗");
        sleep(1E3);
        let btn = className("android.widget.Button").text("取消").findOne();
        btn.click();
        fInfo("已取消升级");
    });
    fInfo("开始消息通知弹窗检测");
    let nonotice_thread = threads.start(function() {
        //在新线程执行的代码
        className("android.widget.Button").text("去开启").waitFor();
        fInfo("检测到消息通知弹窗");
        sleep(1E3);
        let btn = className("android.widget.Button").text("取消").findOne();
        btn.click();
        fInfo("已取消消息通知");
    });
    // 检测地理位置权限代码，出现就点掉
    fInfo("开始位置权限弹窗检测");
    if (!nolocate_thread.isAlive()) {
        nolocate_thread = threads.start(function() {
            //在新线程执行的代码
            id("title_text").textContains("地理位置").waitFor();
            fInfo("检测到位置权限弹窗");
            sleep(1E3);
            text("暂不开启").findOne().click();
            fInfo("已关闭定位");
        });
    }
    backTohomeOrid();
    if (zhanghao_list.length > 0) {
        //判断是否已在登录状态
        let begin_obj = idMatches(/.*comm_head_xuexi_mine|.*btn_next/).findOne();
        if (begin_obj.text() == "我的") {
            //已登录
            text("我的").findOne().click();
            sleep(random(120, 300));
            let cp = ['my_setting', 'setting_device_rl', 'setting_mobile'];
            clickProcess(cp, 360, 520);
            my_phone = id("tv_your_phone").findOne().text().replace(/[^\d]/g, '');
            back();
            sleep(random(210, 360));
            back();
            sleep(random(210, 360));
            back();
            sleep(random(210, 360));
            back();
            sleep(random(210, 360));
            //判断帐号是否在列表中
            if (phoneList.indexOf(my_phone) != -1) {
                //在列表中
                [username, pwd, token] = zhanghao_list[phoneList.indexOf(my_phone)];
            } else {
                //不在列表中也进行学习
                // let c = backTohomeOrid('setting_sign_out');
                // if (c) {
                //     fInfo('准备退出当前帐号');
                //     sleep(random(800, 1200));
                //     real_click(c);
                //     let out_login_ok = text('确认').findOne(12E3);
                //     if (out_login_ok) {
                //         sleep(random(800, 1200));
                //         real_click(out_login_ok);
                //     }
                // }
            }
        } else {
            //未登录
            [username, pwd, token] = zhanghao_list[random(0, zhanghao_list.length - 1)];
            login(username, pwd);
            sleep(random(1200, 2E3));
            my_phone = username;
        }
        backTohomeOrid();

        fInfo(`当前登录账号为：${my_phone}`);
    }
    /********获取用户姓名并读取本地数据*********/
    ran_sleep();
    text("我的").findOne().click();
    let my_display_name = id("my_display_name").findOne(5E3);
    if (!my_display_name) {
        f = confirm("无法识别内容", "检测到新版‘我的’界面，官方限制无法识别出内容，请不要升级最新版本\n点击确定跳转下载历史版本");
        sleep(800);
        back();
        if (f) {
            app.openUrl(常用函数.pan123('https://www.123pan.com/s/TTrtVv-Ug5V3.html提取码:594H'));
            exit();
        }
    }
    name = my_display_name.text();
    storage_user = storages.create('songgedodo:' + name);
    fSet("username", name);
    ran_sleep();
    back();
    if (zhuanxiang == 1) {
        zhuanxiang_dao = false;
    } else if (zhuanxiang == 0) {
        zhuanxiang_dao = true;
    }
    if (dingyue == 1) {
        dingyue_dao = false;
    } else if (dingyue == 2) {
        dingyue_dao = true;
    }
    //异常检测
    if (!skipwarning && jianceFunc(my_phone, pushplus, token)) {
        ran_sleep();
        id("comm_head_xuexi_score").findOne().click();
        className("android.view.View").text("登录").waitFor();
        let txt = SearchParentClickable(text('我知道了').findOne(1200));
        if (txt) {
            txt.click();
        }
        jifen_list = refind_jifen();
        AutoRefind_Map(jifen_list);
    } else {
        ran_sleep();
        id("comm_head_xuexi_score").findOne().click();
        className("android.view.View").text("登录").waitFor();
        let txt = SearchParentClickable(text('我知道了').findOne(1200));
        if (txt) {
            txt.click();
        }
        jifen_list = refind_jifen();
        AutoRefind_Map(jifen_list);
        //异常检测2
        if (!skipwarning && jianceFunc2(my_phone)) {
            // 震动提示
            device.vibrate(500);
        } else {
            nolocate_thread.isAlive() && (nolocate_thread.interrupt(), fInfo("终止位置权限弹窗检测"));
            noupdate_thread.isAlive() && (noupdate_thread.interrupt(), fInfo("终止更新弹窗检测"));
            nonotice_thread.isAlive() && (nonotice_thread.interrupt(), fInfo("终止消息通知检测"));
            noauthority_thread.isAlive() && (noauthority_thread.interrupt(), fInfo("终止权限申请弹窗检测"));
            //开始任务
            let func0 = () => {
                if (!jifen_map.发表观点) {
                    return
                }
                //发表观点
                true == pinglun && ("old" == jifen_flag && "0" == jifenlist.child(jifen_map.发表观点).child(2).text().match(/\d+/)[0] || "new1" == jifen_flag && "0" == jifen_list.child(jifen_map.发表观点).child(3).child(0).text() || "new2" == jifen_flag && "0" == jifen_list.child(jifen_map.发表观点).child(3).text().match(/\d+/)[0]) && (toastLog("开始评论"), entry_jifen_project("发表观点"), do_pinglun(), jifen_list = refind_jifen());
            };
            let func1 = () => {
                if (!jifen_map.我要视听学习) {
                    return
                }
                //我要视听学习
                true == shipin && ("old" == jifen_flag && "已完成" != jifen_list.child(jifen_map.我要视听学习).child(3).text() || "old" != jifen_flag && "已完成" != jifen_list.child(jifen_map.我要视听学习).child(4).text()) && (console.verbose("无障碍服务：" + auto.service), toastLog("开始视听次数"), entry_jifen_project("视听学习"), do_shipin(), jifen_list = refind_jifen());
            };
            let func2 = () => {
                if (!jifen_map.我要选读文章) {
                    return
                }
                //我要选读文章
                true == wenzhang && ("old" == jifen_flag && "已完成" != jifen_list.child(jifen_map.我要选读文章).child(3).text() || "old" != jifen_flag && "已完成" != jifen_list.child(jifen_map.我要选读文章).child(4).text()) && (console.verbose("无障碍服务：" + auto.service), toastLog("开始文章次数与时长"), entry_jifen_project("本地频道"), do_wenzhang(), jifen_list = refind_jifen());
            };
            let func3 = () => {
                if (!jifen_map.每日答题) {
                    return
                }
                //每日答题
                true == meiri && ("old" == jifen_flag && "已完成" != jifen_list.child(jifen_map.每日答题).child(3).text() || "old" != jifen_flag && "已完成" != jifen_list.child(jifen_map.每日答题).child(4).text()) && (toastLog("每日答题开始"), entry_jifen_project("每日答题"), do_meiri(), jifen_list = refind_jifen());
            };
            let func4 = () => {
                if (!jifen_map.趣味答题) {
                    return
                }
                let isCompleted = true;
                if ("old" != jifen_flag) {
                    isCompleted = "已完成" == jifen_list.child(jifen_map.趣味答题).child(4).text();
                } else if ("old" == jifen_flag) {
                    isCompleted = "已完成" == jifen_list.child(jifen_map.趣味答题).child(3).text();
                }
                if (isCompleted) {
                    fInfo('已完成趣味答题');
                } else {
                    entry_jifen_project("趣味答题");
                    ran_sleep();
                    let quwei = textMatches(/开始比赛|开始对战|挑战答题/).findOne();
                    if (quwei.findOne(text("挑战答题"))) {
                        fInfo('本次趣味答题：挑战答题');
                        if (true == tiaozhan) {
                            toastLog("挑战答题开始");
                            do_tiaozhan();
                        } else {
                            fInfo('已设置不做挑战答题');
                            sleep(1E3);
                            back();
                        }
                        jifen_list = refind_jifen();
                    } else {
                        //双人对战/四人答题
                        if (ocr_test()) {
                            if (quwei.findOne(text("开始对战"))) {
                                fInfo('本次趣味答题：双人对战');
                                if (true == shuangren) {
                                    toastLog("双人对战开始");
                                    do_duizhan1(2);
                                } else {
                                    fInfo('已设置不做双人对战');
                                    sleep(1E3);
                                    back();
                                    let txt = text("确定离开擂台吗？").findOne(1500);
                                    if (txt) {
                                        sleep(random(800, 1200));
                                        className("android.widget.Button").text("退出").findOne().click();
                                    }
                                }
                            } else if (quwei.findOne(text("开始比赛"))) {
                                fInfo('本次趣味答题：四人赛');
                                if (true == siren) {
                                    toastLog("四人赛开始");
                                    do_duizhan1(4);
                                } else {
                                    fInfo('已设置不做四人赛');
                                    sleep(1E3);
                                    back();
                                }
                            }
                        } else {
                            back();
                            true == siren && true == shuangren && sign_list.push("ocr_false");
                        }
                        jifen_list = refind_jifen();
                    }
                }
            };
            // let func5 = () => {
            // return
            // if (!jifen_map.专项答题) {
            // return
            // }
            // //专项答题
            // 2 != zhuanxiang && ("old" == jifen_flag && "0" == jifen_list.child(jifen_map.专项答题).child(2).text().match(/\d+/)[0] || "new1" == jifen_flag && "0" == jifen_list.child(jifen_map.专项答题).child(3).child(0).text() || "new2" == jifen_flag && "0" == jifen_list.child(jifen_map.专项答题).child(3).text().match(/\d+/)[0]) && (toastLog("专项答题开始"), do_zhuanxiang(), jifen_list = refind_jifen());
            // };
            // let func6 = () => {
            // return
            // if (!jifen_map.四人赛 && !jifen_map.双人对战) {
            // return
            // }
            // };
            let func7 = () => {
                if (!jifen_map.本地频道) {
                    return
                }
                //本地频道
                true == bendi && ("old" == jifen_flag && "已完成" != jifen_list.child(jifen_map.本地频道).child(3).text() || "old" != jifen_flag && "已完成" != jifen_list.child(jifen_map.本地频道).child(4).text()) && (toastLog("本地开始"), entry_jifen_project("本地频道"), do_bendi(), jifen_list = refind_jifen());
            };
            let func8 = () => {
                if (!jifen_map.强国运动) {
                    return
                }
                //进入强国运动
                ("old" == jifen_flag && "已完成" != jifen_list.child(jifen_map.强国运动).child(3).text() || "old" != jifen_flag && "已完成" != jifen_list.child(jifen_map.强国运动).child(4).text()) && (toastLog("进入强国运动"), entry_jifen_project("强国运动"), do_yundong(), jifen_list = refind_jifen());
            };
            let func9 = () => {
                if (!jifen_map.订阅) {
                    return
                }
                //订阅
                let d = 1;
                0 != dingyue && ("old" == jifen_flag && "0" == jifen_list.child(jifen_map.订阅).child(2).text().match(/\d+/)[0] || "new1" == jifen_flag && "0" == jifen_list.child(jifen_map.订阅).child(3).child(0).text() || "new2" == jifen_flag && "0" == jifen_list.child(jifen_map.订阅).child(3).text().match(/\d+/)[0]) && (toastLog("订阅开始"), entry_jifen_project("订阅"), d = do_dingyue(), jifen_list = refind_jifen());
                0 == dingyue || d || fError("未能识别出订阅界面，订阅不支持学习强国V2.33.0以上版本");
            };

            // 定义多个代码段和权重
            // 权重为0时，不会被执行
            let codeSegList = [];
            codeSegList.push({
                code: func0,
                weight: 1E3
            });
            codeSegList.push({
                code: func1,
                weight: 500
            });
            codeSegList.push({
                code: func2,
                weight: 250
            });
            codeSegList.push({
                code: func3,
                weight: 125
            });
            codeSegList.push({
                code: func4,
                weight: 63
            });
            // codeSegList.push({
            // code: func5,
            // weight: 32
            // });
            // codeSegList.push({
            // code: func6,
            // weight: 16
            // });
            codeSegList.push({
                code: func7,
                weight: 8
            });
            codeSegList.push({
                code: func8,
                weight: 4
            });
            codeSegList.push({
                code: func9,
                weight: 1
            });

            // 校验权重是否合法
            let totalWeight = 0;
            for (let i = 0; i < codeSegList.length;) {
                let seg = codeSegList[i];
                if (typeof seg.weight === 'undefined' || seg.weight < 0) {
                    seg.weight = 1; // 未设置或值小于0时，设置默认权重1
                }
                if (seg.weight === 0) {
                    codeSegList.splice(i, 1); // 权重为0时从数组中删除该项
                } else {
                    totalWeight += seg.weight;
                    i++;
                }
            }

            // 循环随机执行代码段
            for (let i = 0; i < codeSegList.length;) {
                let randNum = random(1, totalWeight);
                let index = 0;
                for (let j = 0; j < codeSegList.length; j++) {
                    let seg = codeSegList[j];
                    index += seg.weight;
                    if (randNum <= index) {
                        let codeSegment = seg.code;
                        //单任务出错重试1次
                        for (let k = 0; k < 2; k++) {
                            try {
                                codeSegment();
                                break;
                            } catch (e) {
                                console.error(e);
                                backTohomeOrid();
                                jifen_init();
                            }
                        }
                        totalWeight -= seg.weight; // 执行完毕后调整总权重
                        codeSegList.splice(j, 1); // 删除已执行代码段
                        break;
                    }
                }
            }
            //结束任务
        }
    }

    if (pushplus || token) {
        fInfo("推送前等待积分刷新5秒");
        sleep(5E3);
        token || (token = pushplus);
        try {
            send_pushplus(token, sign_list);
        } catch (h) {
            fError(h + ":push+推送失败，请尝试切换流量运行或者设置114DNS");
        }
    }
    back();
    //将学习完的账号从zhanghao_list中删除
    let arrIndex = phoneList.indexOf(my_phone);
    if (arrIndex != -1) {
        log(`\n\n已完成的帐号：${zhanghao_list.splice(arrIndex, 1)[0][0]}\n\n`);
    }
    if (!zhanghao || zhanghao_list.length < 1) {
        //未设置帐号或帐号学习完毕直接返回
        return !0
    }
    text("我的").findOne().click();
    let cp = ['my_setting', 'setting_sign_out', 'button1'];
    clickProcess(cp, 360, 520);
    log("点击确认退出登录");
    //id("button1").text("确认").findOne().click();
    return !0
}

//异常检测
function jianceFunc(my_phone, pushplus, token) {
    while (!id("home_bottom_tab_button_work").exists()); //等待加载出主页
    sleep(random(500, 1500));
    id("home_bottom_tab_button_message").findOne().click(); //点击左下角“强国通”按钮
    let session_title = id("session_title").text("学习强国助手").findOne(2E3);
    if (session_title) {
        let session_item = findParentWithId(session_title, "session_item");
        if (session_item) {
            let jiance = session_item.findOne(textContains("违规"));
            //学习助手消息日期(几点几分或几月几日或昨天)
            let jianceriqi = session_item.findOne(id("session_gmt")).text();
            let jianceinfo = session_item.findOne(id("session_content_tv")).text();
            if (jiance) {
                fInfo(`帐号：${my_phone}被违规警告！`);
                if (jianceriqi && (jianceriqi.indexOf(':') != -1 || jianceriqi.indexOf('昨天') != -1)) {
                    //发送警告信息
                    if (pushplus || token) {
                        常用函数.微信推送('警告：系统检测！', '<style>pre{background-color:#ccc;}</style><h6>系统检测到帐号：' + my_phone + '违规</h6><pre><code><font color=red>消息时间：' + jianceriqi + '\n消息内容：' + jianceinfo + '</font></code></pre>\n<h6>设备状态</h6><pre><code>充电状态：<font color=blue>' + (device.isCharging() ? '充电中' : '未充电') + '</font>\n电池电量：<font color=blue>' + device.getBattery() + '%</font></code></pre>', pushplus);
                    }
                    fInfo(`帐号：${my_phone}将跳过学习`);
                    // 震动提示
                    device.vibrate(500);
                    toastLog(`\n\n警告：检测到帐号：${my_phone}异常！\n将不会执行任务！！！\n消息时间：${jianceriqi}\n\n`);
                    id("home_bottom_tab_button_work").findOne().click(); //切换回工作
                    return true
                } else {
                    fInfo(`帐号：${my_phone}将继续学习，请留意后续警告！`);
                }
            } else {
                try {
                    log(`${jianceriqi}\n\n学习助手消息：` + session_item.findOne(id("session_content_tv")).text());
                } catch (e) {
                    log('\n\n获取系统检测功能失效：' + e);
                }
                //可以继续撸分
            }
        } else {
            log('\n\n获取系统检测功能失效！');
            if (pushplus || token) {
                常用函数.微信推送('系统检测！', '<style>pre{background-color:#ccc;}</style><h6>系统检测功能失效</h6><pre><code><font color=red>' + 格式化时间戳(k.getTime()) + '</font></code></pre>\n<h6>设备状态</h6><pre><code>充电状态：<font color=blue>' + (device.isCharging() ? '充电中' : '未充电') + '</font>\n电池电量：<font color=blue>' + device.getBattery() + '%</font></code></pre>', pushplus);
            }
        }
    }
    sleep(random(500, 800));
    id("home_bottom_tab_button_work").findOne().click(); //切换回工作
    return false
}

//异常检测2
function jianceFunc2(my_phone) {
    //积分页面
    //处罚检测
    let yichangtixing = id('alert').findOne(1800);
    if (yichangtixing && yichangtixing.findOne(text("账号异常提醒"))) {
        toastLog(`\n\n警告：检测到帐号：${my_phone}异常！\n将不会执行任务！！！\n\n`);
        fInfo(`帐号：${my_phone}被检测到异常！`);
        fInfo('将跳过学习！');
        // 震动提示
        device.vibrate(500);
        sleep(2000);
        return true
    } else {
        let sxwg = textContains('涉嫌违规，被系统封禁').findOne(1000);
        if (sxwg) {
            fInfo(`帐号：${my_phone}涉嫌违规，被系统封禁，将不会学习！`);
            toastLog(`\n\n警告：检测到帐号：${my_phone}被系统封禁！\n将不会执行任务！！！\n\n`);
            sxwg = SearchParentClickable(sxwg, 3);
            if (sxwg) {
                sxwg.click();
            }
            sleep(2000);
            return true
        }
        return false
    }
}

//返回主页或返回途中遇到指定ID返回指定ID的控件
function backTohomeOrid(ID) {
    for (let i = 0; i < 10; i++) {
        if (packageName("cn.xuexi.android").findOnce()) {
            let work = id("home_bottom_tab_button_work").findOnce();
            if (work) {
                sleep(random(500, 1500));
                let ztjy = findParentWithClass(className("android.widget.TextView").text("主题教育").findOne(), 'android.view.ViewGroup');
                if (ztjy && ztjy.childCount() > 30) {
                    ztjy.child(0).click();
                    sleep(random(500, 1500));
                }
                work.click();
                sleep(random(500, 1500));
                return false
            } else {
                if (ID) {
                    searchID = id(ID).findOnce();
                    if (searchID) {
                        return searchID
                    }
                }
                if (idMatches(/.*btn_next|.*nocaptcha/).findOnce()) {
                    return false
                }
                back();
                sleep(random(500, 800));
            }
        } else {
            app.launchApp('学习强国');
            ran_sleep();
            if (id("splash_content_layout").findOnce()) {
                idMatches(/.*home_bottom_tab_button_work|.*btn_next|.*nocaptcha/).findOne(7E3);
            }
        }
    }
}

//滑块验证
function noverify() {
    let noverify_thread = threads.start(function() {
        //在新线程执行的代码
        let verifySuccess = true;
        let delay = Number(slide_verify);
        if (!Number(slide_verify)) {
            fInfo("未开启自动验证");
            fInfo("检测到滑块将振动提醒");
            while (true) {
                text('请按照说明拖动滑块').waitFor();
                for (var i = 0; i < 3; i++) {
                    if (text('请按照说明拖动滑块').findOnce()) {
                        // 震动提示
                        device.vibrate(500);
                        sleep(1E3);
                    }
                }
                while (text('请按照说明拖动滑块').findOnce()) {
                    sleep(1E3);
                }
            }
        } else {
            let Num = 0;
            while (true) {
                if (text("当前功能使用人数过多，请稍后重试").findOne(1200)) {
                    click("确定");
                    sleep(random(1200, 1800));
                }
                if (id("btn_next").exists()) {
                    id("btn_next").findOne().click();
                    sleep(random(800, 1200));
                }
                if (verifySuccess) {
                    text('请按照说明拖动滑块').waitFor();
                    verifySuccess = false;
                    fInfo("检测到滑动验证");
                }
                try {
                    if (text("请按照说明拖动滑块").findOnce()) {
                        let slide_parent = null;
                        for (let i = 0; i < 7; i++) {
                            sleep(500);
                            slide_parent = text("请按照说明拖动滑块").findOne().parent();
                            if (slide_parent && slide_parent.childCount() > 1) {
                                break;
                            }
                        }
                        let bound = slide_parent.child(1).bounds();
                        let hua_bound = text("请按照说明拖动滑块").findOne().bounds();
                        let x_start = bound.centerX();
                        let dx = x_start - hua_bound.left;
                        let x_end = parseInt((hua_bound.right - dx) * random(5.1, 6.0) / 10); // “hua_bound.right - dx”表示拖动到最后，为了准确率更高点  拖动到一半左右即可
                        let x_mid = parseInt((x_end - x_start) * random(5, 7) / 10 + x_start);
                        let back_x = (x_end - x_start) * random(2, 3) / 10;
                        let y_start = random(bound.top, bound.bottom);
                        let y_end = random(bound.top, bound.bottom);
                        log("y_start:", y_start, "x_start:", x_start, "x_mid:", x_mid, "x_end:", x_end);
                        x_start = random(x_start - 7, x_start);
                        x_end = random(x_end, x_end + 10);
                        gesture(random(delay, delay + 200), [x_start, y_start], [x_end, y_end]);
                    }
                    while (textContains("滑动位置不对哦，请再试一次").exists()) {
                        text("请按照说明拖动滑块").waitFor();
                        text("icon/24/icon_Y_shuaxin").findOne().parent().click();
                        sleep(random(1E3, 1500));
                        continue;
                    }
                    if (textContains("刷新").exists()) {
                        click("刷新");
                        sleep(random(1E3, 1500));
                        continue;
                    }
                    if (textContains("网络开小差").exists()) {
                        click("确定");
                        sleep(random(1E3, 1500));
                        continue;
                    }
                    if (text("当前功能使用人数过多，请稍后重试").findOne(1200)) {
                        while (!textMatches(/当前功能使用人数过多，请稍后重试/).exists()) {
                            click("确定");
                            sleep(random(1200, 7200));
                            id("btn_next").findOne().click();
                            sleep(random(1200, 1800));
                        }
                        continue;
                    }
                    if (idMatches(/.*btn_next|.*contentPanel|.*nocaptcha/).findOne(1200)) {
                        Num = 0;
                    } else {
                        if (Num > 5) {
                            Num = 0;
                            fInfo("已完成滑动验证，若滑动失败请在Pro版配置中调整滑动时间");
                            fClear();
                            let packageName = getPackageName('学习强国');
                            if (currentPackage() != packageName) {
                                log("检测到弹窗，尝试返回");
                                if (textMatches(/取消/).exists()) {
                                    textMatches(/取消/).findOne().click();
                                } else {
                                    back();
                                }
                            }
                        }
                    }
                    sleep(1200);
                } catch (e) {
                    log(e);
                    sleep(2E3);
                }
            }
        }
        fInfo("滑块检测线程已退出！");
    });
    return noverify_thread
}

/**************************************下方为执行各任务函数*********************************************/
/********发表观点*******/
function do_pinglun() {
    backTohomeOrid();
    fSet("title", "发表观点…");
    fClear();
    sleep(random(800, 1200));
    swipe(device_w / 2, device_h * 0.7, device_w / 2, device_h * 0.4, 1E3);
    id("general_card_title_id").findOne().parent().parent();
    fInfo("尝试点击title:" + id("general_card_title_id").findOne().text());
    real_click(id("general_card_title_id").findOne().parent().parent());
    log("等待加载");
    idContains("image-text-content").waitFor();
    let text_edit = text("欢迎发表你的观点");
    log("查找评论框");
    text_edit.waitFor();
    sleep(random(1500, 1800));
    while (text_edit.exists()) {
        let pinglun_edit = text_edit.findOne(500);
        fInfo("尝试点击评论框中");
        log(pinglun_edit.click());
        sleep(random(1500, 1800));
        fRefocus();
    }
    fInfo("评论框click: true");
    let content_list = ["团结协作，永远跟党走", "全心全意为人民服务，努力奋斗", "守正创新，服务人民", "科学决策，造福人民", "依法治国，坚决拥护党的领导！", "同呼吸、共命运、心连心！", "不断向现代化强国前进", "建设中国特色社会主义，为人民服务", "坚持社会主义道路，永远跟党走", "全心全意为人民服务"];
    classNameEndsWith("EditText").findOne().setText(content_list[random(0, content_list.length - 1)]);
    sleep(random(800, 1200));
    text("发布").findOne().click();
    sleep(random(800, 1200));
    text("删除").findOne().click();
    sleep(random(800, 1200));
    text("确认").findOne().click();
    sleep(random(800, 1200));
    // 回到首页
    back();
    // 返回积分页
    jifen_init();
    ran_sleep();
    return true
}

/********视频时长部分*********/
function do_shipin() {
    jifen_list.child(jifen_map.我要视听学习).child(3).click();
    if (ddtong) {
        fSet("title", "视听(dd通)…");
    } else {
        fSet("title", "视听学习…");
    }
    fClear();
    desc("百灵").findOne().click();
    sleep(random(800, 1200));
    fInfo("检测温馨提示弹窗");
    if (text("温馨提示").findOne(1500)) {
        text("关闭").findOne().click();
        fInfo("检测到温馨提示并已关闭");
    }
    desc("百灵").findOne().click();
    let shu = text("竖").findOne();
    sleep(random(800, 1200));
    // 定位到整个百灵frame_box
    let frame_box = shu.parent().parent().parent().parent();
    textMatches(/\d{2}:\d{2}/).waitFor();
    let video_list = frame_box.findOne(className("android.widget.ListView"));
    video_list.child(1).child(1).child(0).click();
    text("分享").waitFor();
    if (idContains("guide_view").findOne(1500)) {
        fInfo("检测到引导遮罩");
        sleep(random(800, 1200));
        click(device_w / 2, device_h / 2);
        sleep(random(800, 1200));
        click(device_w / 2, device_h / 4);
    }
    sleep(800);
    if (textMatches(/刷新重试|继续播放/).exists()) {
        fInfo("检测到流量提醒");
        textMatches(/刷新重试|继续播放/).findOne().click();
    }
    sleep(random(8E3, 9500));
    let re_times = 6;
    if (ddtong) {
        re_times += 6;
    }
    let ClickContinuePlaying = threads.start(() => {
        while (true) {
            let p = text("继续播放").findOne();
            if (p) {
                p.click();
            }
            sleep(1E3);
        }
    });
    for (let i = 0; i < re_times; i++) {
        click(parseInt(device_w / 2) + random(-10, 10), parseInt(device_h / 2) + random(-10, 10));
        sleep(500);
        swipe(parseInt(device_w / 2) + random(-10, 10), device_h * 0.8 + random(-10, 10), (device_w / 2) + random(-10, 10), device_h * 0.1 + random(-10, 10), 1E3);
        sleep(random(8E3, 9500));
    }
    ClickContinuePlaying.interrupt();
    back();
    fInfo("视频个数已刷完");
    // 返回积分页
    jifen_init();
    ran_sleep();
    return true
}

/********文章阅读********/
function do_wenzhang() {
    // 点击进入本地
    let old_wen = storage_user.get("old_wen_list", []);
    if (ddtong) {
        fSet("title", "我要选读文章(dd通)…");
    } else {
        fSet("title", "选读文章…");
    }
    fClear();
    fInfo("切换地区为北京");
    text("切换地区").findOne(3E3);
    if (text("立即切换").exists()) {
        text("取消").findOne(3E3).click();
    }
    log("切换地区");
    text("切换地区").findOne().click();
    log("查找北京");
    text("北京").waitFor();
    sleep(500);
    log("切换北京");
    text("北京").findOne().parent().parent().click();
    log("查找banner");
    let banner = classNameContains("RecyclerView").findOne();
    fInfo("查找北京新闻广播");
    while (banner.findOne(text("北京新闻广播").boundsInside(0, 0, device_w, device_h)) == null) {
        banner.scrollForward();
        sleep(500);
    }
    last_obj = banner.findOne(text("北京新闻广播"));
    fInfo("点击北京新闻广播：" + last_obj.parent().click());
    fInfo("视听广播时长");
    sleep(random(8E3, 12E3));
    back();
    fClear();
    // 下面正式刷文章
    fInfo("开始文章");
    sleep(1500);
    banner = classNameContains("RecyclerView").findOne();
    while (banner.findOne(text("北京学习平台").boundsInside(0, 0, device_w, device_h)) == null) {
        banner.scrollBackward();
        sleep(500);
    }
    sleep(1E3);
    fInfo("查找北京学习平台，尝试点击");
    first_obj = banner.findOne(text("北京学习平台"));
    real_click(first_obj.parent());
    log("等待加载");
    sleep(1E3);
    text("新思想扎根京华").waitFor();
    sleep(1E3);
    let swipe_y = text("新思想扎根京华").findOne().parent().parent().bounds().bottom;
    log("识别出顶部：", swipe_y);
    fRefocus();
    let listview = className("android.widget.ListView").depth(17).findOne();
    // 先判断是否有可刷文章，没有则停止脚本
    for (i = 0; i < 2; i++) {
        listview.scrollForward();
        sleep(500);
    }
    // 自定义没有刷过的文章筛选器
    let wen_box_slt = className("android.view.ViewGroup").depth(20).filter(function(l) {
        let title = l.findOne(idContains("general_card_title_id"));
        let image = l.findOne(idContains("general_card_image_id"));
        let pic_num = l.findOne(idContains("st_feeds_card_mask_pic_num"));
        if (title && image && !pic_num) {
            return old_wen.indexOf(title.text()) == -1 && title.text().indexOf("【专题】") == -1;
        }
        return false
    });
    log("查找文章");
    while (!wen_box_slt.findOne(500)) {
        listview.scrollForward();
    }
    log("找到文章");
    // 下面那句会定位到新思想的文章，不能加载过新思想
    let wen_box = wen_box_slt.findOne();
    // 先做5次
    let wen_num = 0;
    let re_times = 6;
    if (ddtong) {
        re_times += 6;
    }
    while (true) {
        let title = wen_box.findOne(idContains("general_card_title_id")).text();
        old_wen.push(title);
        if (old_wen.length > 100) {
            old_wen.shift();
        }
        fClear();
        fInfo("点击文章：" + title);
        //wen_box.click();
        let title_click = wen_box.parent().parent().click();
        fInfo("点击：" + title_click);
        classNameContains("com.uc.webview.export").waitFor();
        fInfo("查找webview");
        let father_view = className("android.webkit.WebView").findOne(9E3);
        sleep(1E3);
        // 判断是否为专题而不是文章
        if (father_view && father_view.find(idContains("__next")).empty()) {
            fInfo("查找文章内容");
            let content = idContains("image-text-content").findOne(9E3);
            if (content) {
                // 不先点一下划不动
                idContains("xxqg-article-header").findOne().child(0).click();
            }
            swipe(device_w / 2, device_h * 0.7, device_w / 2, device_h * 0.3, 1E3);
            if (wen_num < re_times - 1) {
                sleep(random(9E3, 10500));
            } else {
                // 第6次停顿刷时间
                toastLog("正在刷时长程序未停止");
                let shichang = 6 * random(55, 60);
                fClear();
                fInfo("开始刷时长，总共" + shichang + "秒");
                let wait_time = 1;
                for (let i = 0; i < shichang; i++) { //*random(55, 60)
                    // 每15秒增加一次滑动防息屏
                    if (i % 15 == 0) {
                        swipe(device_w / 2, device_h * 0.6, device_w / 2, device_h * 0.6 - 100, 500);
                        sleep(500);
                    } else {
                        sleep(1E3);
                    }
                    fSet("info", "已观看文章" + wait_time + "秒，总共" + shichang + "秒");
                    wait_time++;
                }
                fSet("info", "已结束文章时长");
                console.hide();
                back();
                break;
            }
        } else {
            wen_num -= 1;
        }
        back();
        className("android.widget.ListView").scrollable().depth(17).waitFor();
        sleep(1E3);
        while (!wen_box_slt.exists()) {
            listview.scrollForward();
            sleep(200);
        }
        wen_box = wen_box_slt.findOne();
        wen_num += 1;
    }
    // 更新已读文章库
    storage_user.put("old_wen_list", old_wen);
    sleep(3E3);
    // 关闭音乐
    close_video();
    back();
    sleep(3E3);
    // 返回积分页
    jifen_init();
    ran_sleep();
    return true
}

/********每日答题*********/
function do_meiri() {
    fSet("title", "每日答题…");
    fClear();
    // 等待加载
    text("查看提示").waitFor();
    // 获取右上题号，如1 /5
    let tihao = className("android.view.View").depth(24).findOnce(1).text();
    let num = Number(tihao[0]);
    let sum = Number(tihao[tihao.length - 1]);
    let substr = tihao.slice(1);
    while (num <= sum) {
        fClear();
        fInfo("第" + num + "题");
        // 等待加载
        text(num + substr).waitFor();
        num++;
        do_exec();
        // 点击确定下一题
        depth(20).text("确定").findOne().click();
        ran_sleep();
        // 如果题做错了重来
        if (text("下一题").exists() || text("完成").exists()) {
            fInfo("答错重试");
            num = 1;
            restart(0);
            continue;
        }
    }
    // 循环结束完成答题
    text("返回").findOne().click();
    className("android.view.View").text("登录").waitFor();
    ran_sleep();
    return true
}

/********专项答题*********/
/*专项答题中提示的层次与每日每周的不一样
 * 专项答题出现的倒计时会影响22,23层的结构*/
function do_zhuanxiang() {
    entry_jifen_project("专项答题");
    fSet("title", "专项答题…");
    fClear();
    // 等待加载
    depth(23).waitFor();
    ran_sleep();
    let scoll = depth(21).indexInParent(1).scrollable().findOne();
    //let new_tihao = [];
    // 下面是倒序答题
    if (zhuanxiang_dao) {
        // 当出现已满分时，点击最后一个开始答题
        while (!text("已满分").exists()) {
            scoll.scrollForward();
            // 不加延迟会很卡
            sleep(200);
        }
        let clt = text("开始答题").find();
        if (clt.empty()) {
            fInfo("专项答题全部已作答。");
            back();
            className("android.view.View").text("登录").waitFor();
            ran_sleep();
            return true
        }
        // 点击最后一项
        clt[clt.length - 1].click();
    }
    // 下面是正序
    else {
        // 直到找到开始答题
        let dixian_slt = text("您已经看到了我的底线").filter(function(w) {
            return w.bounds().top <= device_h - 30;
        });
        while (!text("开始答题").exists()) { //开始答题
            // 如果到底则设置倒序为true
            if (dixian_slt.exists()) {
                //storage_user.put('zhuanxiang_dao', true); 自定义不用读取
                fInfo("专项答题全部已作答。");
                back();
                className("android.view.View").text("登录").waitFor();
                ran_sleep();
                return true
            }
            // 滚动15次
            for (i = 0; i < 15; i++) {
                scoll.scrollForward();
                // 不加延迟会很卡
                sleep(700);
            }
        }
        text("开始答题").findOne().click();
    }
    ran_sleep();
    // 等待加载
    text("查看提示").waitFor();
    sleep(2E3);
    // 获取右上题号，如1 /5
    let tihao = className("android.view.View").depth(24).findOnce(1).text();
    // 需要加个斜杠转义
    let reg = /(\d+) \/(\d+)/;
    let num = Number(tihao.match(reg)[1]);
    let sum = Number(tihao.match(reg)[2]);
    let substr = " /" + sum;
    while (num <= sum) {
        fClear();
        fInfo("第" + num + "题");
        // 等待加载
        text(num + substr).waitFor();
        num++;
        do_exec();
        // 点击确定下一题
        let next = className("android.view.View").filter(function(l) {
            return (l.text() == "下一题") || (l.text() == "完成");
        });
        next.findOne().click();
        ran_sleep();
    }
    // 循环结束完成答题
    text("查看解析").waitFor();
    sleep(1E3);
    // 如果题目答错，循环每一题并添加错题
    if (textMatches(/\d+分/).findOne().text() != "100分") {
        fInfo("有错题，尝试上传错题");
        text("查看解析").findOne().click();
        tihao = textMatches(reg).findOne().text();
        num = Number(tihao.match(reg)[1]);
        sum = Number(tihao.match(reg)[2]);
        substr = " /" + sum;
        sleep(1500);
        while (num <= sum) {
            // 等待加载
            text(num + substr).waitFor();
            num++;
            if (textEndsWith("回答错误").exists()) {
                upload_wrong_exec();
            }
            // 点击确定下一题
            let next = className("android.view.View").filter(function(l) {
                return (l.text() == "下一题") || (l.text() == "完成");
            });
            next.findOne().click();
            sleep(random(1E3, 1500));
        }
        storage.put('dati_tiku', dati_tiku);
    } else {
        back();
        ran_sleep();
    }
    back();
    className("android.view.View").text("登录").waitFor();
    ran_sleep();
    return true
}

/********挑战答题*********/
function do_tiaozhan() {
    if (ddtong) {
        fSet("title", "挑战答题(dd通)…");
    } else {
        fSet("title", "挑战答题…");
    }
    fClear();
    // 等待加载、积分页面也有Image和List，需要用depth筛选
    className("android.widget.Image").textMatches(/total.*|chanllenge.*/).waitFor();
    let tiaozhan_total = false;
    if (textStartsWith("total").exists()) {
        tiaozhan_total = true;
        let tzList = className("android.widget.ListView").rowCount(5).findOne();
        ran_sleep();
        tzList.child(random(0, tzList.childCount() - 1)).click();
        className("android.widget.Image").textStartsWith("chanllenge").waitFor();
    }
    let total = 0;
    let max_total = 5;
    if (ddtong) {
        max_total += 10;
    }
    while (true) {
        fClear();
        fInfo("第" + (total + 1) + "题");
        // 等待选项列表
        let xuan_list = className("android.widget.ListView").findOne().children();
        // 获取题目
        let que_txt = className("android.widget.ListView").findOne().parent().child(0).text();
        //log(que_txt);
        // 获取答案列表，可能找到多个答案
        let ans_list = get_ans_by_tiku(que_txt.replace(/[^\u4e00-\u9fa5\d]|来源：.+|出题单位：.+/g, ""));
        //     fInfo(que_txt.replace(/[^\u4e00-\u9fa5\d]|来源：.+|出题单位：.+/g, ""));
        //log("答案："+ans_list);
        ran_sleep();
        if (total >= max_total) {
            // 题数数够了随便选
            fInfo("已答对" + max_total + "题，全选A");
            xuan_list[0].child(0).click();
        } else if (ans_list.length != 0) {
            let max_simi = 0;
            let xuanxiang = null;
            // 循环对比所有选项和答案，选出相似度最大的
            for (let xuan_box of xuan_list) {
                let xuan_txt = xuan_box.child(0).child(1).text();
                //log(xuan_txt);
                for (let ans of ans_list) {
                    let similar = str_similar(ans.slice(2), xuan_txt);
                    //log(xuan_txt, similar);
                    if (similar > max_simi) {
                        max_simi = similar;
                        xuanxiang = xuan_box.child(0);
                    }
                }
            }
            if (xuanxiang != null) {
                fInfo("最终：" + xuanxiang.child(1).text());
                xuanxiang.click();
            } else {
                fInfo("无匹配答案");
                xuan_list[0].child(0).click();
            }
        }
        // 如果没找到答案
        else {
            fInfo("未找到答案");
            // 选第一个选项
            xuan_list[0].child(0).click();
        }
        sleep(2500);
        // 判断题是否答错
        if (text("结束本局").exists()) {
            sleep(5E3);
            click("结束本局");
            text("再来一局").waitFor();
            if (total < 5) {
                fInfo("答错重试");
                console.warn("warn:", que_txt);
                text("再来一局").findOne().click();
            } else {
                // 退出
                if (tiaozhan_total) {
                    back();
                    textStartsWith("total").waitFor();
                    sleep(2E3);
                }
                back();
                ran_sleep();
                className("android.view.View").text("登录").waitFor();
                ran_sleep();
                return true
            }
            total = 0;
            sleep(2E3);
            continue;
        }
        // 没答错总数加1
        total += 1;
    }
}

/********双人对战、四人赛*********/
function do_duizhan1(renshu) {
    //   jifen_list = refind_jifen();
    fClear();
    if (renshu == 2) {
        // 进入双人对战
        fSet("title", "双人对战");
        fInfo("等待随机匹配");
        text("随机匹配").waitFor();
        sleep(1E3);
        let start_click = text("随机匹配").findOne().parent().child(0).click();
        threads.start(() => {
            let iii = 0;
            while (!className("android.widget.ListView").exists() && iii < 3) {
                iii++;
                let sjpp = text("随机匹配").findOne(3E3);
                if (sjpp) {
                    sjpp.parent().child(0).click();
                    sleep(2E3);
                }
            }
        });
        fInfo("点击：" + start_click);
    } else {
        // 进入四人赛
        fSet("title", "四人赛");
        // 等待开始比赛并点击
        fInfo("等待开始比赛");
        text("开始比赛").waitFor();
        sleep(1E3);
        let start_click = text("开始比赛").findOne().click();
        threads.start(() => {
            let iii = 0;
            while (!className("android.widget.ListView").exists() && iii < 3) {
                iii++;
                let ksbs = text("开始比赛").findOne(5E3);
                if (ksbs) {
                    ksbs.click();
                    sleep(2E3);
                }
            }
        });
        fInfo("点击：" + start_click);
    }
    if (textContains('请明日再来').findOne(3E3)) {
        let zdl = text('知道了').findOne(3E3);
        if (zdl) {
            zdl.click();
            sleep(1E3);
            className("android.view.View").text("登录").waitFor();
            ran_sleep();
        }
        return false
    }
    let delay = Number(jisu);
    if (delay > 0 && duizhan_mode == 1) {
        ui.run(function() {
            let title = w.title.getText();
            w.title.setText(title + "(固定)");
            toastLog("这是废弃模式，没有正确率");
        });
    } else if (duizhan_mode == 2) {
        ui.run(function() {
            let title = w.title.getText();
            w.title.setText(title + "(手动)");
            toastLog("请手动点击答案");
        });
    }
    className("android.widget.ListView").waitFor();
    fClear();
    let num = 1;
    let err_flag = true;
    while (true) {
        //设置识别错误时保存图片的文件夹名
        let imgPath = app.getAppName(context.getPackageName()).replace('.', '_');
        // 如果是第一题或者下面出错，则跳过前面等待过渡
        if (num != 1 && err_flag) {
            // 检查到其中一个过渡界面为止
            while (true) {
                // 检测是否结束并退出
                if (text("继续挑战").exists()) {
                    sleep(1E3);
                    let tz_click = text("继续挑战").findOne().click();
                    fInfo("点击继续挑战:" + tz_click);
                    sleep(1500);
                    back();
                    if (renshu == 2) {
                        sleep(1E3);
                        fInfo("查找退出按钮");
                        if (fast_mode) {
                            winReshow();
                        }
                        let exit_click = text("退出").findOne().click();
                        fInfo("点击退出:" + exit_click);
                    }
                    sleep(1E3);
                    className("android.view.View").text("登录").waitFor();
                    ran_sleep();
                    return true
                } else if (text("第" + num + "题").exists()) {
                    fClear();
                    fInfo("第" + num + "题");
                    break;
                }
            }
            // 直到过渡界面消失，再匹配下一题
            while (text("第" + num + "题").exists()) {} //sleep(100);
            //fTips("题号过渡消失");
        } else if (!err_flag) {
            err_flag = true;
            if (text("继续挑战").exists()) {
                sleep(1E3);
                let tz_click = text("继续挑战").findOne().click();
                fInfo("点击继续挑战:" + tz_click);
                sleep(1500);
                back();
                if (renshu == 2) {
                    sleep(1E3);
                    fInfo("查找退出按钮");
                    if (fast_mode) {
                        winReshow();
                    }
                    let exit_click = text("退出").findOne().click();
                    fInfo("点击退出:" + exit_click);
                }
                sleep(1E3);
                className("android.view.View").text("登录").waitFor();
                ran_sleep();
                return true
            }
        }
        let listview = className("android.widget.ListView").findOne(1E3);
        if (!listview) {
            log("找不到listview");
            err_flag = false;
            sleep(200);
            continue;
        }
        sleep(100); // 追求极限速度，不知道会不会出错，会，截图宽度不够32
        let view_d28 = className("android.view.View").depth(28).indexInParent(0).findOne(1E3);
        if (!view_d28) {
            toastLog("找不到view_d28");
            err_flag = false;
            sleep(200);
            continue;
        }
        // 根据父框的孩子数
        if (view_d28.childCount() > 0) {
            que_x = view_d28.bounds().left;
            que_y = view_d28.bounds().top;
            que_w = view_d28.bounds().width();
            try {
                if (view_d28.child(0).text().length <= 4) { //有来源的是前面两个空格元素，文本为4个空格
                    que_h = view_d28.child(2).bounds().top - view_d28.bounds().top;
                } else { //无来源的是题目，文本为8个空格
                    que_h = view_d28.child(0).bounds().bottom - view_d28.bounds().top;
                }
            } catch (e) {
                toastLog("识别来源错误！");
                log(view_d28.childCount(), view_d28.bounds());
                err_flag = false;
                sleep(200);
                continue;
            }
        } else {
            toastLog("找不到框体");
            log(view_d28.childCount(), view_d28.bounds());
            err_flag = false;
            sleep(200);
            continue;
        }
        // 查找选项个数
        let radio_num = className("android.widget.RadioButton").find().length;
        if (!radio_num) {
            log("找不到选项");
            err_flag = false;
            sleep(200);
            continue;
        }
        //fTips("开始识别题目");
        let que_txt = null;
        for (let i = 0; i < 3; i++) {
            let img = captureScreen();
            // 裁剪题干区域，识别题干
            let que_img = images.clip(img, que_x, que_y, que_w, que_h);
            // 为了适配OCR插件改为下面这句
            console.time('题目识别');

            if (ocr_choice == 0) {
                que_txt = google_ocr_api(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
            } else if (ocr_choice == 1) {
                que_txt = paddle_ocr_api(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
            } else {
                que_txt = ocr.recognizeText(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
            }
            console.timeEnd('题目识别');
            if (!que_txt) {
                files.ensureDir(`/sdcard/${imgPath}/`);
                images.save(img, `/sdcard/${imgPath}/` + renshu + '-' + num + '.png', 'png', 50);
                images.save(que_img, `/sdcard/${imgPath}/` + renshu + '-' + num + '-q.png', 'png', 50);
                fError(`未识别出题目，图片保存至‘/sdcard/${imgPath}/’`);
                console.error("无障碍服务可能已失效" + auto.service);
                console.error("题目框体范围：", que_x, que_y, que_w, que_h);
                img.recycle();
                que_img.recycle();
            } else {
                fInfo("题目识别：" + que_txt);
                img.recycle();
                que_img.recycle();
                break;
            }
        }
        if (renshu == 0) {
            fInfo("由于第一局匹配对手较强，正在挂机中。");
            fInfo("经测试挂机不会扣积分局数，此功能可在配置中关闭");
            fTips("请不要点击任何选项，不要作答！！！");
            num++;
            text("继续挑战").waitFor();
            continue;
        }
        // 选项清洗标识
        let replace_sign = "default_ocr_replace";
        let question_reg = new RegExp(update_info.question_reg, "gi");
        let include_reg = new RegExp(update_info.include_reg, "gi");
        let que_key = question_reg.exec(que_txt);
        if (que_key) {
            replace_sign = "other_ocr_replace";
        } else {
            que_key = (/读音|词形/g).exec(que_txt)
            if (que_key) {
                replace_sign = "accent_ocr_replace";
            } else {
                que_key = include_reg.exec(que_txt)
                if (que_key) {
                    replace_sign = "include_ocr_replace";
                }
            }
        }
        let ans_list = get_ans_by_tiku(que_txt);
        //log(ans_list);
        let idx_dict = {
            "A": 0,
            "B": 1,
            "C": 2,
            "D": 3
        };
        /************以下是因为随机选项顺序后失效的代码*****************/
        try { //防止别人先答完出错
            let idx = 0;
            if (ans_list.length <= 1) {
                if (ans_list.length == 1 && idx_dict[ans_list[0][0]] != undefined) {
                    idx = idx_dict[ans_list[0][0]];
                    fTips("答案:" + ans_list[0].slice(2));
                    //           fInfo("答案:"+ ans_list[0]);
                } else if (ans_list.length == 0) {
                    fInfo("未找到答案");
                }
                if (duizhan_mode == 1) {
                    if (delay > 0 && num != 1) {
                        sleep(random(delay, delay + 50));
                    } else {
                        // 直到选项完全出现在屏幕
                        while (className("android.widget.ListView").findOne(1E3).indexInParent() == 0) {}
                    }
                    let is_click = className("android.widget.RadioButton").findOnce(idx).parent().click();
                    log(is_click);
                    if (!is_click) {
                        sleep(200);
                        log(className("android.widget.RadioButton").findOnce(idx).parent().click());
                    }
                    num++;
                    continue;
                } else if (duizhan_mode == 2) {
                    num++;
                    textMatches(/第.+题|继续挑战/).waitFor();
                    continue;
                }
            }
        } catch (e) {
            log("error1:", e);
        }
        /************以上是因为随机选项顺序后失效的代码*****************/


        // 如果上面答案不唯一或者不包含找到的选项，直到选项完全出现在屏幕
        try {
            while (className("android.widget.ListView").findOne(1E3).indexInParent() == 0) {}
            //fTips("选项显现");
        } catch (e) {
            log("error2:", e);
            err_flag = false;
            sleep(200);
            continue;
        }
        let xuanxiang_list = className("android.widget.ListView").findOne(1E3);
        let xuanxiang_index = xuanxiang_list.indexInParent();
        let xuanxiang_list_x = xuanxiang_list.bounds().left;
        let xuanxiang_list_y = xuanxiang_list.bounds().top;
        let xuanxiang_list_w = xuanxiang_list.bounds().width();
        let xuanxiang_list_h = xuanxiang_list.bounds().height();

        if (!xuanxiang_list || !xuanxiang_list.parent().childCount() || !xuanxiang_list.parent().child(0)) {
            log("xuan_box is null");
            err_flag = false;
            sleep(200);
            continue;
        }
        log("开始截选项");
        console.time("选项识别");
        img = captureScreen();
        // 裁剪所有选项区域
        img = images.clip(img, xuanxiang_list_x, xuanxiang_list_y, xuanxiang_list_w, xuanxiang_list_h);
        //images.save(img, '/sdcard/1/x_img' + num + '.png');
        let xuan_txt_list = [];
        let allx_txt = "";
        if (ocr_choice == 0) {
            // 排序顺序
            //     console.time('选项识别1');
            let x_results = Array.from(gmlkit.detect(img));
            allx_txt = ocr_rslt_to_txt(x_results).replace(/\s+/g, "");
            //     console.timeEnd('选项识别1');
        } else if (ocr_choice == 1) {
            let x_results = Array.from(paddle.detect(img));
            allx_txt = ocr_rslt_to_txt(x_results).replace(/\s+/g, "");
        } else {
            //     // 直接识别
            //     console.time('选项识别2');
            allx_txt = ocr.recognizeText(img);
            //     console.timeEnd('选项识别2');
        }
        console.timeEnd("选项识别");
        // log(allx_txt);
        if (!allx_txt) {
            files.ensureDir(`/sdcard/${imgPath}/`);
            images.save(img, `/sdcard/${imgPath}/${renshu}-${num}-a.png`, 'png', 50);
            img.recycle();
            log(`识别不出选项文本，图片保存至‘/sdcard/${imgPath}/`);
            err_flag = false;
            sleep(200);
            continue;
        }
        img.recycle();
        // 清洗选项文本
        log("replace_sign:" + replace_sign);
        log("清洗前：" + allx_txt);
        let replace_d = update_info[replace_sign];
        if (replace_sign == "include_ocr_replace") {
            let result = true;
            log("que_key:" + que_key);
            let [words, r, repl] = replace_d[que_key];
            for (let word of words) {
                let reg = new RegExp(word, "gi");
                if (!reg.test(allx_txt)) {
                    result = false;
                    break;
                }
            }
            if (result) {
                let reg = new RegExp(r, "gi");
                allx_txt = allx_txt.replace(reg, repl);
            }
        } else {
            for (let r of Object.keys(replace_d)) {
                let reg = new RegExp(r, "gi");
                allx_txt = allx_txt.replace(reg, replace_d[r]);
            }
        }
        // 获取选项列表
        xuan_txt_list = allx_txt.match(/[a-d][^a-z\u4e00-\u9fa5\d]?\s*.*?(?=[a-d][^a-z\u4e00-\u9fa5\d]?|$)/gi);
        if (!xuan_txt_list) {
            log("识别不出选项");
            err_flag = false;
            sleep(200);
            continue;
        }
        if (xuan_txt_list && xuan_txt_list.length != radio_num) {
            xuan_txt_list = allx_txt.match(/[a-d][^a-z\u4e00-\u9fa5\d]\s*.*?(?=[a-d][^a-z\u4e00-\u9fa5\d]|$)/gi);
        }
        log(xuan_txt_list.toString());

        if (xuan_txt_list.length != 0) {
            let max_simi = 0;
            let right_xuan = '';
            let right_xuan2 = '';
            let ans_txt = '';
            for (let xuan_txt of xuan_txt_list) {
                let txt = xuan_txt.replace(/^[A-Z]\.?/gi, "");
                for (let ans of ans_list) {
                    let similar = str_similar(ans.slice(2), txt);
                    if (similar > max_simi) {
                        max_simi = similar;
                        ans_txt = ans;
                        if (duizhan_mode == 1) {
                            // 答案默认顺序优先
                            right_xuan = ans[0];
                            right_xuan2 = xuan_txt[0].toUpperCase();
                        } else {
                            // 文本匹配优先
                            right_xuan2 = ans[0];
                            right_xuan = xuan_txt[0].toUpperCase();
                        }
                    }
                }
            }
            if (ans_list.length > 1) {
                fTips("匹配答案:" + ans_txt);
            }
            if (right_xuan != '' && duizhan_mode != 2) {
                let idx = idx_dict[right_xuan];
                fInfo("最终:" + right_xuan);
                try {
                    className("android.widget.RadioButton").findOnce(idx).parent().click();
                } catch (e) {
                    idx = idx_dict[right_xuan2];
                    fInfo("备选:" + right_xuan2);
                    try {
                        className("android.widget.RadioButton").findOnce(idx).parent().click();
                    } catch (e1) {
                        log("error3:", e1);
                        err_flag = false;
                        sleep(200);
                        continue;
                    }
                }
            } else if (duizhan_mode == 2) {
                textMatches(/第.+题|继续挑战/).waitFor();
            } else {
                try {
                    className("android.widget.RadioButton").findOnce().parent().click();
                } catch (e1) {
                    log("error4:", e1);
                    err_flag = false;
                    sleep(200);
                    continue;
                }
            }
        } else {
            console.warn("未识别出选项");
            err_flag = false;
            sleep(200);
            continue;
        }
        num++;
    }
}

// 对战答错版
function dacuo(renshu) {
    jifen_list = refind_jifen();
    if (renshu == 2) {
        // 点击进入双人对战
        entry_jifen_project("趣味答题");
        text("随机匹配").waitFor();
        sleep(1E3);
        text("随机匹配").findOne().parent().child(0).click();
        threads.start(() => {
            while (!className("android.widget.ListView").exists()) {
                let sjpp = text("随机匹配").findOne(5E3);
                if (sjpp) {
                    sjpp.parent().child(0).click();
                    sleep(2E3);
                }
            }
        });
    } else if (renshu == 4) {
        // 点击进入四人赛
        entry_jifen_project("趣味答题");
        // 等待开始比赛并点击
        fInfo("等待开始比赛");
        sleep(1E3);
        let start_click = text("开始比赛").findOne().click();
        threads.start(() => {
            while (!className("android.widget.ListView").exists()) {
                let ksbs = text("开始比赛").findOne(5E3);
                if (ksbs) {
                    ksbs.click();
                    sleep(2E3);
                }
            }
        });
        log("点击：" + start_click);
    }
    className("android.widget.ListView").waitFor();
    let num = 1;
    let err_flag = true;
    while (true) {
        // 如果是第一题或者下面出错，则跳过前面等待过渡
        if (num != 1 && err_flag) {
            // 检查到其中一个过渡界面为止
            while (true) {
                // 检测是否结束并退出
                if (text("继续挑战").exists()) {
                    fInfo("本轮结束");
                    sleep(1E3);
                    text("继续挑战").findOne().click();
                    sleep(1500);
                    back();
                    if (renshu == 2) {
                        text("退出").findOne().click();
                    }
                    className("android.view.View").text("登录").waitFor();
                    ran_sleep();
                    fClear();
                    return true
                } else if (text("第" + num + "题").exists()) {
                    break;
                }
            }
            // 直到过渡界面消失，再匹配下一题
            //log("等待题号过渡");
            while (text("第" + num + "题").exists()) {} //sleep(100);
        } else if (!err_flag) {
            err_flag = true;
            if (text("继续挑战").exists()) {
                fInfo("本轮结束");
                sleep(1E3);
                text("继续挑战").findOne().click();
                sleep(1500);
                back();
                if (renshu == 2) {
                    text("退出").findOne().click();
                }
                className("android.view.View").text("登录").waitFor();
                ran_sleep();
                return true
            }
        }
        //log("开始第"+num+"题，等待listview");
        //className("android.widget.ListView").waitFor();
        let listview = className("android.widget.ListView").findOne(1E3);
        if (!listview) {
            //log("找不到listview");
            err_flag = false;
            sleep(200);
            continue;
        }
        sleep(100); // 追求极限速度，不知道会不会出错
        // listview父框体
        let view_d28 = className("android.view.View").depth(28).indexInParent(0).findOne(1E3);
        if (!view_d28) {
            //log("找不到view_d28");
            //log('far:', listview.parent());
            //log('garfa', listview.parent().parent());
            err_flag = false;
            sleep(200);
            continue;
        }
        if (view_d28.childCount() > 0) {
            que_x = view_d28.bounds().left;
            que_y = view_d28.bounds().top;
            que_w = view_d28.bounds().width();
            que_h = view_d28.child(0).bounds().bottom - view_d28.bounds().top;
        } else {
            toastLog("找不到框体内容");
            //log(view_d28.childCount(), view_d28.bounds());
            err_flag = false;
            sleep(200);
            continue;
        }
        let idx_dict = {
            "A": 0,
            "B": 1,
            "C": 2,
            "D": 3
        };
        try { //防止别人先答完出错
            while (className("android.widget.ListView").findOne(1E3).indexInParent() == 0) {}
            sleep(random(2E3, 3E3));
            //log("选项显现");
            className("android.widget.RadioButton").findOnce(random(0, 3)).parent().click();
            num++;
            continue;
        } catch (e) {
            //log("error1:", e);
            err_flag = false;
            sleep(200);
            continue;
        }
        num++;
    }
}

/*********本地频道*********/
function do_bendi() {
    fSet("title", "本地频道…");
    fClear();
    text("切换地区").findOne(5E3);
    if (text("立即切换").exists()) {
        text("取消").findOne(3E3).click();
    }
    let banner = classNameContains("RecyclerView").findOne();
    let txt = banner.child(0).child(1).text();
    banner.child(0).click();
    className("android.widget.TextView").depth(11).text(txt).waitFor();
    sleep(1500);
    back();
    ran_sleep();
    jifen_init();
    ran_sleep();
    return true
}

/*********强国运动*********/
function do_yundong() {
    fSet("title", "强国运动…");
    fClear();
    sleep(1500);
    let packageName = getPackageName('学习强国');
    if (currentPackage() == packageName && text('授予').exists()) {
        sleep(random(800, 1500));
        text('授予').findOne().click();
        random(800, 1500);
    }
    if (currentPackage() != packageName) {
        fInfo("检测到弹窗，尝试点击允许");
        if (textMatches(/允许/).exists()) {
            textMatches(/允许/).findOne().click();
            sleep(1E3);
            let image_guide = id("image_guide").findOne(5E3);
            if (image_guide) {
                fInfo("检测到强国运动引导遮罩，尝试点击");
                for (let i = 0; i < 3; i++) {
                    image_guide.click();
                    sleep(1E3);
                }
            }
        }
    }
    let yunxu = id('confirm').textMatches(/允许|我知道了/).findOne(5E3);
    if (yunxu) {
        yunxu.click();
        ran_sleep();
    }
    backTohomeOrid('app');
    className("android.view.View").text("登录").waitFor();
    ran_sleep();
    return true
}

/********订阅*********/
function do_dingyue() {
    fSet("title", "订阅…");
    fClear();
    let tab1 = descContains("Tab").findOne(9E3);
    if (!tab1) {
        back();
        className("android.view.View").text("登录").waitFor();
        return false
    }
    let zuo1 = descContains("上新").findOne(9E3);
    if (!zuo1) {
        back();
        className("android.view.View").text("登录").waitFor();
        return false
    }
    // 上方标签
    let tab_clt = descContains("Tab").untilFind();
    let total_click = 0;
    for (let tab of tab_clt) {
        tab.click();
        sleep(500);
        // 左方分类
        let zuo_clt = className("android.view.View").depth(14).findOne().children();
        for (let zuo of zuo_clt) {
            if (dingyue_dao) {
                zuo = zuo_clt[zuo_clt.length - 1];
            }
            zuo.click();
            sleep(500);
            // 右方列表
            className("android.view.View").depth(14).waitFor();
            let you_clt = className("android.view.View").depth(14).findOnce(1);
            let last_desc = "";
            while (you_clt) {
                //let img = captureScreen();
                // 订阅按钮集合
                //fInfo("查找订阅集合");
                let dingyue_clt = className("android.widget.ImageView").indexInParent(2).untilFind();
                try {
                    //fInfo(dingyue_clt[dingyue_clt.length-1].parent().child(1).desc().slice(0,4)+" 旧:"+last_desc.slice(0,4));
                    if (dingyue_clt[dingyue_clt.length - 1].parent().child(1).desc() == last_desc) {
                        fClear();
                        fInfo("到底了");
                        break;
                    }
                    // 最底下订阅的名称
                    last_desc = dingyue_clt[dingyue_clt.length - 1].parent().child(1).desc();
                } catch (e) {
                    log(e);
                    continue;
                }
                let img = captureScreen();
                for (let dingyue of dingyue_clt) {
                    if (dingyue.bounds().bottom >= device_h) {
                        continue;
                    }
                    let pot = null;
                    try {
                        pot = findColorInRegion(img, "#E42417", dingyue.bounds().left, dingyue.bounds().top, dingyue.bounds().width(), dingyue.bounds().height(), 30);
                    } catch (e) {
                        console.error(dingyue.bounds());
                        console.error(dingyue.parent().child(1).desc());
                    }
                    if (pot) {
                        fInfo("找到一个订阅");
                        sleep(1E3);
                        let is_click = dingyue.click();
                        fInfo("点击：" + is_click);
                        sleep(1E3);
                        total_click += 1;
                    }
                    if (total_click >= 2) {
                        fInfo("订阅已完成");
                        back();
                        className("android.view.View").text("登录").waitFor();
                        ran_sleep();
                        return true
                    }
                }
                //img.recycle();
                let scr_result = you_clt.scrollForward();
                sleep(500);
            }
            if (dingyue_dao) {
                fInfo("只检查年度上新");
                break;
            }
        }
    }
    fInfo("无可订阅项目");
    back();
    className("android.view.View").text("登录").waitFor();
    ran_sleep();
    return true
}
/**************************************上方为执行各任务函数*********************************************/

// 重启每日、每周
function restart(restart_flag) {
    // 点击退出
    ran_sleep();
    back();
    text("退出").findOne().click();
    ran_sleep();
    switch (restart_flag) {
        // 0为每日答题
        case 0:
            text('登录').waitFor();
            entry_jifen_project("每日答题");
            break;
            // 1为每周答题
        case 1:
            // 等待列表加载
            text('本月').waitFor();
            //当出现已作答时，点击最后一个未作答
            while (!text("已作答").exists()) {
                depth(21).scrollable().findOne().scrollForward();
                sleep(200);
            }
            let clt = text("未作答").find();
            clt[clt.length - 1].parent().click();
            break;
    }
}

// 做一次题（专项和每日）
function do_exec(type) {
    // 等待加载
    let tishi = text("查看提示").findOne();
    //log(tishi);
    // 点击查看提示按钮
    tishi.click();
    // 随机延迟、等待提示
    ran_sleep();
    // 等待加载
    text("提示").waitFor();

    // 判断题型
    /******************单选题*******************/
    let ans = null;
    if (textStartsWith("单选题").exists()) {
        // 获取题目
        //let que_txt = className("android.view.View").depth(23).findOnce(1).text();
        // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
        let que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
        // log(que_txt);
        ans = get_ans_by_re(que_txt);
        if (ans && depth(26).text(ans).exists()) {
            // 定位选项并点击
            depth(26).text(ans).findOnce().parent().click();
        } else {
            if (type) {
                ans = get_ans_by_dati_tiku(que_txt, type);
            } else {
                ans = get_ans_by_dati_tiku(que_txt);
            }
            let reg = /[A-F]/;
            if (ans && reg.test(ans) && ans.length == 1) {
                ans = ans.match(reg)[0];
                let idx_dict = {
                    "A": 0,
                    "B": 1,
                    "C": 2,
                    "D": 3,
                    "E": 4,
                    "F": 5
                };
                className("android.widget.RadioButton").findOnce(idx_dict[ans[0]]).parent().click();
            }
            // 否则用ocr
            else {
                if (!ans) {
                    ans = get_ans_by_ocr1().replace(/\s/g, "");
                }
                if (depth(26).text(ans).exists()) {
                    depth(26).text(ans).findOne().parent().click();
                } else {
                    // 筛选出相似度最大的
                    let xuan_clt = className("android.widget.RadioButton").find();
                    let max_simi = 0;
                    let xuanxiang = null;
                    for (let n of xuan_clt) {
                        let similar = str_similar(ans, n.parent().child(2).text());
                        if (similar > max_simi) {
                            max_simi = similar;
                            xuanxiang = n.parent();
                        }
                    }
                    //点击选项
                    if (xuanxiang) {
                        xuanxiang.click();
                    } else {
                        className("android.widget.RadioButton").findOne().parent().click();
                    }
                    //log(xuanxiang.find().size());
                }
            }
        }
    }
    /******************填空题*******************/
    else if (textStartsWith("填空题").exists()) {
        // 填空题题干会被空格分割
        //let que = className("android.view.View").depth(23).findOnce(1).children();
        // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
        let que = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).children();
        // 第一个编辑框的父元素
        let text_edit = className("android.widget.EditText").findOne().parent().children();
        // 第一个空答案字数，后期考虑换成全部答案字数
        let word_num = text_edit.find(className("android.view.View")).length;
        // 填空数
        let kong_num = 0;
        let que_txt = "";
        for (let i of que) {
            // 如果没有text则加个空格
            if (i.text()) {
                que_txt = que_txt + i.text();
            } else {
                kong_num += 1;
                que_txt = que_txt + "    ";
            }
        }
        // log(que_txt);
        // log("kong_num:", kong_num);
        // 判断是否只有一个空，re只能得出第一空答案
        if (kong_num <= 1) {
            //一个空时，先正则匹配，再题库匹配，以防题库出错，最后OCR
            //let ans = get_ans_by_http_dati(que_txt);
            if (type) {
                ans = get_ans_by_dati_tiku(que_txt, type);
            } else {
                ans = get_ans_by_dati_tiku(que_txt);
            }
            if (!ans) {
                ans = get_ans_by_re(que_txt);
            }
            //长度和空格数相等才会填充
            if (ans && word_num == ans.length) {
                // 定位填空并填入
                depth(25).className("android.widget.EditText").findOne().setText(ans);
            } else {
                ans = get_ans_by_ocr1().replace(/\s/g, "");
                if (!ans) {
                    ans = "未识别出文字";
                }
                depth(25).className("android.widget.EditText").setText(ans);
            }
        }
        // 如果多个空，直接ocr按顺序填入
        else {
            //ans = get_ans_by_http_dati(que_txt);
            if (type) {
                ans = get_ans_by_dati_tiku(que_txt, type);
            } else {
                ans = get_ans_by_dati_tiku(que_txt);
            }
            if (!ans) {
                ans = get_ans_by_ocr1().replace(/\s/g, "");
            }
            if (!ans) {
                ans = "未识别出文字";
            }
            edit_clt = className("android.widget.EditText").find();
            let ans_txt = ans;
            for (let edit of edit_clt) {
                let n = edit.parent().children().find(className("android.view.View")).length;
                edit.setText(ans_txt.slice(0, n));
                ans_txt = ans_txt.slice(n);
            }
        }
    }
    /******************多选题*******************/
    else if (textStartsWith("多选题").exists()) {
        // 获取题目
        // let que_txt = className("android.view.View").depth(23).findOnce(1).text();
        // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
        let que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
        // log(que_txt);
        // 这里匹配出全部挖空
        let reg1 = /\s{3,}/g;
        let res = que_txt.match(reg1);
        // log(res);
        // 先看挖空数量和选项数量是否一致，判断是否全选
        let collect = className("android.widget.CheckBox").find();
        // 如果全选
        if (res.length == collect.length) {
            ans = "全选";
            for (let n of collect) {
                // 直接点击会点不上全部
                n.parent().click();
            }
        }
        //else if (ans = get_ans_by_http_dati(que_txt)) {
        else {
            if (type) {
                ans = get_ans_by_dati_tiku(que_txt, type);
            } else {
                ans = get_ans_by_dati_tiku(que_txt);
            }
            let reg = /[A-F]{1,6}/;
            if (ans && reg.test(ans)) {
                ans = ans.match(reg)[0];
                let idx_dict = {
                    "A": 0,
                    "B": 1,
                    "C": 2,
                    "D": 3,
                    "E": 4,
                    "F": 5
                };
                for (let n of ans) {
                    className("android.widget.CheckBox").findOnce(idx_dict[n]).parent().click();
                }
            }
            // 如果不是全选
            else {
                ans = get_ans_by_ocr1();
                // 下面为匹配子串法
                ans = ans.replace(/[^\u4e00-\u9fa5\w]/g, "");
                log(ans);
                for (let n of collect) {
                    let xuan_txt = n.parent().child(2).text().replace(/[^\u4e00-\u9fa5\w]/g, "");
                    if (ans.indexOf(xuan_txt) >= 0) {
                        n.parent().click();
                    }
                }
            }
        }
    }
    fInfo("答案：" + ans);
    // 返回退出查看提示界面
    back();
    sleep(1E3);
    return true
}

// 通过re匹配答案
function get_ans_by_re(que_txt) {
    // 定位挖空两侧字符，限制在两个标点符号内
    let reg1 = /([^，。？、；：” ]*?)\s{3,}([^，。？、；：” ]*)/;
    let res = que_txt.match(reg1);
    if (res[1] == '' && res[2] == '') {
        reg1 = /([^，。？、；：” ]*?[，。？、；：” ]*?)\s{3,}([，。？、；：” ]*?[^，。？、；：” ]*)/;
        res = que_txt.match(reg1);
    }
    // log(res);
    // 生成正则表达式
    let reg2_str = `/${res[1]}([^，。？、；：” ]*)${res[2]}/`;
    let reg2 = new RegExp(reg2_str);
    // log(reg2);
    // 获取试题信息、匹配答案
    // let tishi_txt = className("android.view.View").depth(23).findOnce(6).text();
    // 上面的查找方式会被出题方干扰
    // let tishi_txt = className("android.view.View").depth(22).findOnce(2).child(0).text();
    // 上面的层次在专项答题中出现变化
    let tishi_txt = text("提示").findOne().parent().parent().child(1).child(0).text();
    //log(tishi_txt);
    // 如果匹配到答案
    if (tishi_txt.match(reg2)) {
        let ans = tishi_txt.match(reg2)[1];
        log(ans);
        return ans
    } else {
        return 0
    }
}

// 通过ocr匹配答案
function get_ans_by_ocr1() {
    // 定位提示框位置
    //let tishi_box = className("android.view.View").depth(22).findOnce(2).child(0).bounds();
    // 上面的层次在专项答题中出现变化
    fRefocus();
    let tishi_box = text("提示").findOne().parent().parent().child(1).child(0).bounds();
    fInfo('开始截屏');
    let img = captureScreen();
    // 控制截图范围
    img = images.clip(img, tishi_box.left - 10, tishi_box.top - 10, tishi_box.width() + 20, tishi_box.height());
    //images.save(img, '/sdcard/1/1.png');
    // 二值化
    img = images.interval(img, "#FD1111", 120); //比inRange()好用多了
    //images.save(img, '/sdcard/1/2.png');
    let ans = "";
    //   let resp = ocr.recognize(img).results;
    //   ans = ocr_rslt_to_txt(resp);
    // 为适配第三方OCR改动
    if (ocr_choice == 0) {
        ans = google_ocr_api(img);
    } else if (ocr_choice == 1) {
        ans = paddle_ocr_api(img);
    } else {
        ans = ocr.recognizeText(img);
    }
    if (!ans) {
        fInfo("未识别出文字");
    } else {
        log(ans);
    }
    img.recycle();
    return ans
}

// 通过http请求匹配答案（暂时未使用）
function get_ans_by_http(que_txt) {
    // 匹配题空两边汉字、字母及数字
    let reg = /[\u4e00-\u9fa5\d]+/g;
    //let reg = /(\S*)\s{2,}(\S*)/;
    let res = que_txt.match(reg);
    if (res == null) {
        return []
    }
    // 此处可以加个判断，不然截图没截好时会有bug
    // 选取长的一边并控制在十个字
    let longest = '';
    for (let r of res) {
        if (r.length > longest.length && r.indexOf("中华人民共和") < 0 && r.indexOf("习近平总书记") < 0) {
            longest = r;
        }
    }
    let keyword = longest.slice(0, 6);
    log(keyword);
    // 获取答案html并解析
    let req = http.get('http://www.syiban.com/search/index/init.html?modelid=1&q=' + encodeURI(keyword));
    let resp_str = req.body.string();
    let resp_list = resp_str.match(/答案：(.*?)<\/span><\/p>/g);
    let ans_list = [];
    if (resp_list != null) {
        for (let a of resp_list) {
            // 查找出来后答案中有不可见的ZERO WIDTH SPACE，需要清洗
            ans = a.match(/答案：(.*?)<\/span><\/p>/)[1].replace(/[\u200B-\u200D\uFEFF]/g, "");
            //log(ans);
            ans_list.push(ans);
        }
    }
    //log(ans_list);
    return ans_list
}

// 通过离线答题题库匹配答案
function get_ans_by_dati_tiku(que_txt, type) {
    let keyword = que_txt.replace(/\s/g, "");
    let ans_list = [];
    let ans = null;
    if (dati_tiku.length == 0) {
        return false
    }
    //for (let ti of dati_tiku) {
    for (let i = dati_tiku.length - 1; i >= 0; i--) {
        let ti = dati_tiku[i];
        if (ti[0].indexOf(keyword) > -1) {
            ans = ti[1];
            if (ans != "None") {
                ans_list.push(ans);
            }
        }
    }
    if (!ans_list) {
        return false
    }
    if (type) { // && ans_list.length > 1
        for (let a of ans_list) {
            if (a.indexOf(type) > -1) {
                ans = a.replace(type, "");
                break;
            }
        }
    }
    log("匹配题库：", ans);
    return ans
}

// 通过http请求匹配答题答案（暂时未使用）
function get_ans_by_http_dati(que_txt) {
    // 获取答案html并解析
    let keyword = que_txt.replace(/\s/g, "");
    let req = http.get('https://tiku.3141314.xyz/search?table_name=tiku&page=1&rows=20&keyword=' + encodeURI(keyword));
    let resp_json = req.body.json();
    if (resp_json.total == 0) {
        return false
    }
    let rows = resp_json.rows;
    log(rows[0]);
    let ans_list = [];
    let ans = rows[0].answer;
    if (ans == "None") {
        return false
    }
    //log(ans_list);
    return ans
}

// 检测|更新离线题库
function update_dati_tiku() {
    //   let total_req = http.get("https://tiku.3141314.xyz/tableCount");
    let total = 1;
    let last_dati_tiku_link = storage.get("dati_tiku_link", "");
    let dati_tiku = storage.get('dati_tiku', []);
    try {
        if (update_info.dati_tiku_link != last_dati_tiku_link) {
            try {
                dati_tiku = get_tiku_by_http(update_info.dati_tiku_link);
            } catch (e) {
                dati_tiku = get_tiku_by_http(update_info.dati_tiku_link2);
            }
            storage.put("dati_tiku_link", update_info.dati_tiku_link);
            storage.put('dati_tiku', dati_tiku);
            fInfo("已更新离线题库");
        } else {
            fInfo("未检测到题库更新，已用历史题库");
        }
        return dati_tiku
    } catch (e) {
        console.warn(e);
        if (dati_tiku) {
            fInfo("未识别出离线题库，已用历史题库");
            return dati_tiku
        }
    }
    //log("update total:", total);
    if (!dati_tiku || dati_tiku.length != total) {
        let req = http.get("https://tiku.3141314.xyz/getAnswer");
        if (req.statusCode == 200) {
            dati_tiku = req.body.json();
            storage.put('dati_tiku', dati_tiku);
            fInfo("题库已更新");
        } else {
            fInfo("网络问题识别不出在线题库");
        }
    }
    return dati_tiku
}

//专项答题错题矫正
function upload_wrong_exec(endstr) {
    text("答案解析").waitFor();
    let que_txt = "";
    if (textStartsWith("填空题").exists()) {
        let que = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).children();
        for (let i of que) {
            // 如果没有text则加个空格
            if (i.text()) {
                que_txt = que_txt + i.text();
            } else {
                que_txt = que_txt + "    ";
            }
        }
    } else {
        que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
    }
    let ans_txt = textStartsWith("正确答案：").findOne().text().replace(/正确答案：|\s+/g, "");
    let question = que_txt.replace(/\s/g, "");
    if (endstr) {
        ans_txt += endstr;
    }
    fError("错题:" + question + ans_txt);
    dati_tiku.push([question, ans_txt, null, null, null]);
}

// 通过缓存题库获取答案
function get_ans_by_tiku(que_txt) {
    console.time('答案搜索时间');
    let ans_list = [];
    let max_simi = 0;
    for (let ti of Object.keys(tiku)) {
        let ti_txt = ti.replace(/\[.+\]|^\d+\./g, "").replace(/[^\u4e00-\u9fa5\d]/g, "");
        let len = que_txt.length;
        let simi = str_similar(ti_txt.slice(0, len), que_txt);
        if (simi >= 0.25) {
            if (simi > max_simi) {
                ans_list.length = 0;
                ans_list.push(tiku[ti][1]);
                max_simi = simi;
            } else if (simi == max_simi) {
                ans_list.push(tiku[ti][1]);
            }
        }
    }
    console.timeEnd('答案搜索时间');
    return ans_list
}

// 获取直链json
function get_tiku_by_http(link) {
    // 通过gitee的原始数据保存题库
    if (!link) {
        link = "https://mart-17684809426.coding.net/p/tiku/d/tiku/git/raw/master/tiku_json.txt"
    }
    let req = http.get(link, {
        headers: {
            "Accept-Language": "zh-cn,zh;q=0.5",
            "User-Agent": 'Mozilla/5.0 (Linux; Android 10; BMH-AN10 Build/HUAWEIBMH-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36'
        },
    });
    log(req.statusCode);
    // 更新题库时若获取不到，则文件名+1
    if (req.statusCode != 200) {
        throw "网络原因未获取到题库，请尝试切换流量或者更换114DNS，退出脚本";
        //return false
    }
    return req.body.json()
}

// 获取城通网盘题库
function get_tiku_by_ct(link) {
    // 获取答案html并解析
    // 城通网盘解析
    if (!link) {
        link = "https://webapi.ctfile.com/get_file_url.php?uid=35157972&fid=546999609&file_chk=e83f4b72a2f142cca6ee87c64baba15c&app=0&acheck=2&rd=0.9023931062078081"
    }
    let req = http.get(link);
    let result = req.body.json();
    let file = http.get(result.downurl);
    return file.body.json()
}

function google_ocr_api(img) {
    try {
        console.log('GoogleMLKit文字识别中');
        let list = Array.from(gmlkit.detect(img)); // 识别文字，并得到results
        let resultList = [];
        for (let i = 0; i < list.length; i++) {
            try {
                resultList.push(list[i].text);
            } catch (e) {}
        }
        list = null;
        return resultList.join('')
    } catch (e) {
        return ''
    }
}

function paddle_ocr_api() {
    try {
        console.log('PaddleOCR文字识别中');
        let list = Array.from(paddle.detect(arguments[0])); // 识别文字，并得到results
        let resultList = [];
        for (let i = 0; i < list.length; i++) {
            try {
                resultList.push(list[i].text);
            } catch (e) {}
        }
        list = null;
        return resultList.join('')
    } catch (e) {
        return ''
    }
}

// 测试ocr功能
function ocr_test() {
    let test_limit = 5E3
    if (Number(ocr_maxtime)) {
        test_limit = Number(ocr_maxtime);
    }
    try {
        fInfo("测试ocr功能，开始截图");
        let img_test = captureScreen();
        img_test = images.clip(img_test, 0, 100, device_w, 250);
        log("开始识别");
        //console.time("OCR识别结束");
        let begin = new Date();

        if (ocr_choice == 0) {
            let test_txt = google_ocr_api(img_test);
        } else if (ocr_choice == 1) {
            let test_txt = paddle_ocr_api(img_test);
        } else {
            let test_txt = ocr.recognizeText(img_test);
        }
        img_test.recycle();
        let end = new Date();
        let test_time = end - begin;
        fInfo("OCR识别结束:" + test_time + "ms");
        if (test_time > test_limit) {
            fError("OCR识别过慢(>" + test_limit + "ms)，已跳过多人对战，可在配置中设置跳过阈值");
            fError("如偶然变慢，可能为无障碍服务抽风，建议重启强国助手后重试");
            sleep(3E3);
            return false
        } else {
            fInfo("OCR功能正常");
            return true
        }
    } catch (e) {
        fError(e + "：ocr功能异常，退出脚本");
        exit();
        return false
    }
}

// 把ocr结果转换为正序的字符串
function ocr_rslt_to_txt(result) {
    let top = 0;
    let previous_left = 0;
    let txt = "";
    let txt_list = [];
    for (let idx in result) {
        if (top == 0) {
            top = result[idx].bounds.top;
        }
        if (previous_left == 0) {
            previous_left = result[idx].bounds.left;
        }
        if (result[idx].bounds.top >= top - 10 && result[idx].bounds.top <= top + 10) {
            if (result[idx].bounds.left > previous_left) {
                txt = txt + "   " + result[idx].text;
            } else {
                txt = result[idx].text + "   " + txt;
            }
        } else {
            top = result[idx].bounds.top;
            txt_list.push(txt);
            txt = result[idx].text;
        }
        if (idx == result.length - 1) {
            txt_list.push(txt);
        }
        previous_left = result[idx].bounds.left;
    }
    //每行直接加个换行
    let ans = txt_list.join("\n");
    //log(ans);
    return ans
}

// 屏幕宽高、方向初始化
function init_wh() {
    fInfo("屏幕方向检测");
    log(device.width + "*" + device.height);
    let device_w = depth(0).findOne().bounds().width();
    let device_h = depth(0).findOne().bounds().height();
    log(device_w + "*" + device_h);
    if (device.width == device_h && device.height == device_w) {
        fError("设备屏幕方向检测为横向，后续运行很可能会报错，建议调整后重新运行脚本");
        sleep(1E4);
    } else if (device.width == 0 || device.height == 0) {
        fError("识别不出设备宽高，建议重启强国助手后重新运行脚本");
        sleep(1E4);
    }
    return [device_w, device_h]
}

// 强行退出应用名称
function exit_app(name) {
    // fClear();
    fInfo("尝试结束" + name + "APP");
    let packageName = getPackageName(name);
    if (!packageName) {
        if (getAppName(name)) {
            packageName = name;
        } else {
            return false
        }
    }
    log("打开应用设置界面");
    app.openAppSetting(packageName);
    let appName = app.getAppName(packageName);
    //log(appName);
    log("等待加载界面")
    text(appName).findOne(5E3);
    sleep(1500);
    log("查找结束按钮")
    let stop = textMatches(/(强.停止$|.*停止$|结束运行|停止运行|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp])/).findOne();
    log("stop:", stop.enabled())
    if (stop.enabled()) {
        //log("click:", stop.click());
        real_click(stop);
        sleep(1E3);
        log("等待确认弹框")
        let sure = textMatches(/(确定|.*停止.*|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp]|O[Kk])/).clickable().findOne(1500);
        if (!sure) {
            fInfo(appName + "应用已关闭");
            back();
            return false
        }
        log("sure click:", sure.click());
        fInfo(appName + "应用已被关闭");
        sleep(1E3);
        back();
    } else {
        fInfo(appName + "应用不能被正常关闭或不在后台运行");
        sleep(1E3);
        back();
    }
    return true
}

// 登录
function login(username, pwd) {
    let begin_obj = idMatches(/.*comm_head_xuexi_mine|.*btn_next/).findOne(5000);
    while (!begin_obj) {
        if (currentPackage() != getPackageName('学习强国')) {
            click(random(1, 10), random(1, 10));
        }
        begin_obj = idMatches(/.*comm_head_xuexi_mine|.*btn_next/).findOne(5000);
        sleep(500);
    }
    if (begin_obj.text() == "登录") {
        log("查找ab");
        let a = className("EditText").id("et_phone_input").findOne();
        let b = className("EditText").id("et_pwd_login").findOne();
        a.setText(username);
        sleep(1E3);
        b.setText(pwd);
        sleep(1E3);
        begin_obj.click();
        sleep(3E3);
        if (className("android.view.View").text("同意并继续").exists()) {
            fInfo("检测到隐私政策通知，尝试同意并继续");
            sleep(1E3);
            className("android.view.View").text("同意并继续").findOne().click();
            sleep(3E3);
        }
        let packageName = getPackageName('学习强国');
        if (currentPackage() != packageName) {
            log("检测到弹窗，尝试返回");
            if (textMatches(/取消/).exists()) {
                textMatches(/取消/).findOne().click();
            } else {
                back();
            }
        }
    }
}

// 从首页进入积分界面初始化
function jifen_init() {
    id("comm_head_xuexi_score").findOne().click();
    while (!className("android.view.View").text("登录").findOne(7E3)) {
        back();
        sleep(1E3);
        id("comm_head_xuexi_score").findOne().click();
    }
    fRefocus();
    className("android.webkit.WebView").scrollable().findOne().scrollForward();
}

function entry_jifen_project(a) {
    className("android.view.View").text("登录").waitFor();
    let b = ("old" == jifen_flag ? 3 : 4);
    jifen_list.findOne(textEndsWith(a)).parent().child(b).click();
}

function refind_jifen() {
    className("android.webkit.WebView").scrollable().findOne().scrollForward();
    let a = className("android.widget.ListView").filter(function(b) {
        return b.rowCount() == 9
    }).findOne();
    if (21 == a.depth()) {
        jifen_flag = "old";
        fInfo("检测为旧版界面");
    } else if (23 == a.depth()) {
        if (0 < a.child(0).child(3).childCount()) {
            jifen_flag = "new1";
        } else {
            jifen_flag = "new2";
        }
        fInfo("检测为新版界面");
    }
    return a
}

function AutoRefind_Map(a) {
    a.children().forEach((child, index) => {
        if (child.child(0).text() != '登录') {
            jifen_map[child.child(0).text()] = index;
        }
    });
}

function winReshow() {
    for (i = 0; i < 4; i++) {
        recents();
        sleep(1E3);
    }
}

// 关闭音乐浮动插件
function close_video() {
    let imv = className("android.widget.ImageView").find();
    //log(imv.empty());
    let swtch = imv[imv.length - 1];
    swtch.click();
    sleep(1E3);
    swtch.click();
    return true
}

// pushplus推送
function send_pushplus(token, sign_list) {
    zongfen = "old" == jifen_flag ? text("成长总积分").findOne().parent().child(3).text() : text("成长总积分").findOne().parent().child(1).text();
    jinri = jifen_list.parent().child(1).text().replace(" ", "").replace("累积", "累积:");
    let style_str = '<style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}.item .bar{width:100px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>';
    let content_str = "<h6>" + jinri + " 总积分:" + zongfen + "</h6><div>";
    jinri.match(/\d+/g) || (content_str += "由于网络原因，未识别出总分，请自行查看");
    for (let sign of sign_list) {
        if (sign == "ocr_false") {
            content_str = '由于ocr过慢，已跳过多人对战' + content_str;
        }
    }
    let title, score, total;
    for (let option of jifen_list.children()) {
        if ("old" == jifen_flag) {
            title = option.child(0).child(0).text();
            score = option.child(2).text().match(/\d+/g)[0];
            total = option.child(2).text().match(/\d+/g)[1];
        } else {
            "new1" == jifen_flag ? ((title = option.child(0).text()), (score = option.child(3).child(0).text()), (total = option.child(3).child(2).text().match(/\d+/g)[0])) : ("new2" == jifen_flag && (title = option.child(0).text(), score = option.child(3).text().match(/\d+/g)[0], total = option.child(3).text().match(/\d+/g)[1]));
        }
        "专项答题" == title && (total = 10);
        let percent = (Number(score) / Number(total) * 100).toFixed() + '%';
        let detail = title + ": " + score + "/" + total;
        content_str += '<div class="item"><div class="bar"><div style="width: ' + percent + ';"></div></div><span>' + detail + '</span></div>';
    }
    content_str += '</div>' + style_str;
    let r = http.postJson("http://www.pushplus.plus/send", {
        token: token,
        title: getAppName(context.getPackageName()) + "：" + name,
        content: content_str + "</div><style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}.item .bar{width:100px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style><!--屏蔽广告--><textarea style=\"display:none\">",
        template: "markdown",
    });
    if (r.body.json().code == 200) {
        fInfo("推送成功");
    } else {
        log(r.body.json());
    }
}

/*******************悬浮窗*******************/
function fInit() {
    // ScrollView下只能有一个子布局
    let w = floaty.rawWindow(
        <card cardCornerRadius='8dp' alpha="0.8">
            <vertical>
                <horizontal bg='#FF000000' padding='10 5'>
                    <text id='version' textColor="#FFFFFF" textSize="18dip">getAppName(context.getPackageName())</text>
                    <text id='title' h="*" textColor="#FFFFFF" textSize="13dip" layout_weight="1" gravity="top|right">
                    </text>
                </horizontal>
                <ScrollView>
                    <vertical bg='#AA000000' id='container' minHeight='20' gravity='center'>
                    </vertical>
                </ScrollView>
            </vertical>
            <relative  gravity="right|bottom">
                <text id="username" textColor="#FFFFFF" textSize="12dip" padding='5 0'>
                </text>
            </relative>
        </card>
    );
    ui.run(function() {
        //w.title.setFocusable(true);
        w.version.setText(getAppName(context.getPackageName()) + " " + newest_version);
    });
    w.setSize(720, -2);
    w.setPosition(10, 10);
    w.setTouchable(false);
    return w
}

function fSet(id, txt) {
    ui.run(function() {
        w.findView(id).setText(txt);
    });
}

function fInfo(str) {
    ui.run(function() {
        let textView = ui.inflate(
            <text id="info" maxLines="2" textColor="#7CFC00" textSize="15dip" padding='5 0'>
                    </text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
}

function fError(str) {
    ui.run(function() {
        let textView = ui.inflate(
            <text id="error" maxLines="2" textColor="#FF0000" textSize="15dip" padding='5 0' />,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.error(str);
}

function fTips(str) {
    ui.run(function() {
        let textView = ui.inflate(
            <text id="tips" maxLines="2" textColor="#FFFF00" textSize="15dip" padding='5 0' />,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
}

function fClear() {
    ui.run(function() {
        w.container.removeAllViews();
    });
}

function fRefocus() {
    threads.start(function() {
        ui.run(function() {
            w.requestFocus();
            w.title.requestFocus();
            ui.post(function() {
                w.title.clearFocus();
                w.disableFocus();
            }, 200);
        });
    });
    sleep(500);
}

// 比较两个字符串相似度
function str_similar(str1, str2) {
    // 转换为小写字母以进行大小写不敏较
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    // 初始化计数器和最大长度
    let counter = 0;
    let maxLen = Math.max(s1.length, s2.length);

    // 遍历第一个字符串的字符
    for (let i = 0; i < s1.length; i++) {
        // 检查每个字符是否存在于第二个字符串中
        if (s2.indexOf(s1.charAt(i)) !== -1) {
            // 如果存在，则增加计数器并将其从第二个字符串中移除，以避免重复计数
            counter++;
            s2 = s2.replace(s1.charAt(i), '');
        }
    }

    // 计算相似度百分比
    let similarity = (counter / maxLen);
    return similarity.toFixed(2);
}

/*ID点击流
将按顺序依次点击control_ids数组中的ID控件
*/
function clickProcess(control_ids, _sleepR_Min, _sleepR_Max) {
    control_ids.forEach((control_id) => {
        real_click(SearchParentClickable(id(control_id).findOne()));
        sleep(random(_sleepR_Min, _sleepR_Max));
    });
}

// 尝试成功点击
function real_click(obj) {
    for (let i = 1; i <= 3; i++) {
        if (obj.click()) {
            log("real click: true");
            return true
        }
        sleep(300);
    }
    console.warn("控件无法正常点击：", obj);
    log("尝试再次点击");
    click(obj.bounds().centerX(), obj.bounds().centerY());
    return false
}

// 模拟随机时间1-3秒，后期可以用户自定义
function ran_sleep() {
    return sleep(random(1E3, 3E3))
}

//查找指定id的父控件
function findParentWithId(widget, _id) {
    while (widget.parent()) {
        widget = widget.parent();
        if (widget.id() && widget.id().indexOf(_id) != -1) {
            return widget
        }
    }
    return null
}

//查找指定类名的父控件
function findParentWithClass(widget, _className) {
    while (widget.parent()) {
        widget = widget.parent();
        if (widget.className() && widget.className().indexOf(_className) != -1) {
            return widget
        }
    }
    return null
}

//向上查找可点击的父窗口
function SearchParentClickable(obj, deph) {
    deph = deph || 7;
    for (let i = 0; i < deph; i++) {
        if (obj && !obj.clickable()) {
            if (obj.parent()) {
                obj = obj.parent();
            }
        } else {
            return obj
        }
    }
    return null
}

/********展开数组账号列表********/
function flatten(arr) {
    let result = [];
    arr.forEach((userInfo) => {
        result.push(userInfo[0]);
    });
    return result
}