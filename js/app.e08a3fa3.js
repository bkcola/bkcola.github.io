(function(){"use strict";var e={5422:function(e,t,n){var i=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"overall-style"},[n("HeaderBar",{staticClass:"sticky"}),n("v-main",{staticClass:"overall-style",attrs:{"fill-height":""}},[n("MainPage")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-img",{attrs:{fill:"#4267B2",src:n(8841),height:"200",contain:""}}),i("v-row",[i("v-col",{staticStyle:{"max-width":"750px","margin-left":"auto","margin-right":"auto","margin-top":"50px"}},[i("markdown-it-vue",{staticClass:"md-body",attrs:{content:e.$t("main_page_text_1"),options:e.options}}),i("a",{staticStyle:{color:"white","text-decoration":"none",background:"#4a148c"},attrs:{href:"#cases"}},[i("v-card",{staticStyle:{width:"100px",margin:"10px auto 10px auto"}},[i("v-card-title",{staticClass:"justify-center",staticStyle:{"font-size":"3em"}},[0===e.number?i("span",[e._v("--")]):i("span",[e._v(e._s(e.number))])])],1)],1),i("markdown-it-vue",{staticClass:"md-body",attrs:{content:e.$t("main_page_text_2"),options:e.options}})],1)],1),i("v-row",[i("v-col",{staticStyle:{"max-width":"750px",margin:"0 auto 0 auto"}},[i("a",{attrs:{name:"cases"}}),i("v-card",[i("v-card-title",[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:e.$t("search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.listData,"items-per-page":5,"sort-by":["time","location"],"sort-desc":[!0,!0],loading:0===e.listData.length,"loading-text":"Loading...",search:e.search,"mobile-breakpoint":0,expanded:e.expanded,"single-expand":!0,"show-expand":"","item-key":"id","footer-props":{"items-per-page-options":[20,30,50,100,-1]}},on:{"update:expanded":function(t){e.expanded=t},"click:row":function(e,t){return t.expand(!t.isExpanded)}},scopedSlots:e._u([{key:"item.link",fn:function(t){var n=t.value;return[i("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:n}},[e._v(" 🔗 ")])]}},{key:"item.screenshot",fn:function(t){var n=t.value;return[i("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:n}},[e._v(" 📸 ")])]}},{key:"item.backup_link",fn:function(t){var n=t.value;return[i("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:n}},[e._v(" "+e._s(0===n.length?"":"🔗")+" ")])]}},{key:"expanded-item",fn:function(t){var n=t.headers,a=t.item;return[i("td",{attrs:{colspan:n.length}},[i("p"),i("p",[e._v(e._s(e.$t("table_description"))+":")]),"zh-CN"===e.$i18n.locale?i("p",[e._v(e._s(a.description))]):i("p",[e._v(e._s(a.description_en))]),i("p",[e._v(e._s(e.$t("table_death_number"))+": "+e._s(a.death_number))]),i("p",[e._v(" "+e._s(e.$t("table_link"))+": "),i("a",{attrs:{href:a.link}},[e._v(e._s(a.link))])]),i("p",[e._v(e._s(e.$t("table_screenshot"))+":")]),i("div",{staticStyle:{"text-align":"center"}},[i("div",{staticClass:"click-zoom"},[i("label",[i("input",{attrs:{type:"checkbox"}}),i("img",{attrs:{src:a.screenshot}})])])]),i("p",[e._v(" "+e._s(e.$t("table_backup_link"))+": "),i("a",{attrs:{href:a.backup_link}},[e._v(e._s(a.backup_link))])])])]}}],null,!0)})],1)],1)],1),i("div",{staticStyle:{"text-align":"center","margin-top":"50px","margin-bottom":"50px"}},[i("a",{staticClass:"github-button",attrs:{href:"https://github.com/lockdemic/Lockdemic.ICU","data-size":"large","data-show-count":"true","aria-label":"Star lockdemic/Lockdemic.ICU on GitHub"}},[e._v("Star")]),i("p",[e._v(e._s(e.$t("submit")))])]),i("p"),i("v-row",{staticStyle:{"margin-left":"5px","margin-right":"5px"}},[e._v(" Icon by  "),i("a",{staticStyle:{color:"white"},attrs:{href:"https://www.flaticon.com/"}},[e._v("Flaticon")]),i("v-spacer"),e._v(" by 凤尾竹  Inspired by  "),i("a",{staticStyle:{color:"white"},attrs:{href:"https://996.icu/"}},[e._v("996.ICU")])],1),i("p")],1)},s=[],l=n(2541),c=n.n(l),h=n(9669),d=n.n(h),u={components:{MarkdownItVue:c()},data(){return{listData:[],number:0,search:"",expanded:[],options:{markdownIt:{linkify:!0},linkAttributes:{attrs:{target:"_blank",rel:"noopener"}}}}},computed:{headers(){return"zh-CN"===this.$i18n.locale?[{text:this.$t("table_time"),value:"time"},{text:this.$t("table_location"),value:"location"},{text:this.$t("table_title"),value:"title"}]:[{text:this.$t("table_time"),value:"time"},{text:this.$t("table_location"),value:"location_en"},{text:this.$t("table_title"),value:"title_en"}]}},created(){this.getData()},mounted(){let e=document.createElement("script");e.setAttribute("src","https://buttons.github.io/buttons.js"),document.head.appendChild(e)},methods:{async getData(){if(localStorage.getItem("listData")&&localStorage.getItem("listDataTime")>Date.now()-6e4)return this.listData=JSON.parse(localStorage.getItem("listData")),this.number=+localStorage.getItem("number"),void console.log("loading local data stored.");console.log("getting data from server.");const e=await d().get("https://api.github.com/repos/lockdemic/Lockdemic.ICU/issues?state=closed",{headers:{Authorization:"token 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"}});let t=e.data,n=[];for(let a=0;a<t.length;a++){let e=t[a],o=e.body.toString(),r=o.indexOf("**********");if(r>0){o=o.substring(0,r);let t=o.split("\r\n"),a={};try{a["id"]=e.id;for(let e=0;e<t.length;e++){let n=t[e].indexOf(":");if(n<0)continue;let i=t[e].substring(0,n).trim(),o=t[e].substring(n+1).trim();"death_number"==i&&(this.number+=+o),a[i]=o}0!==!Object.keys(a).length&&n.push(a)}catch(i){console.log(i)}}}this.listData=n,localStorage.setItem("listData",JSON.stringify(n)),localStorage.setItem("listDataTime",Date.now()),localStorage.setItem("number",this.number)}}},m=u,p=n(1001),f=n(3453),g=n.n(f),v=n(3237),b=n(7118),y=n(2102),w=n(9846),_=n(9030),k=n(7047),x=n(2877),S=n(9762),I=n(5978),C=(0,p.Z)(m,r,s,!1,null,null,null),O=C.exports;g()(C,{VCard:v.Z,VCardTitle:b.EB,VCol:y.Z,VContainer:w.Z,VDataTable:_.Z,VImg:k.Z,VRow:x.Z,VSpacer:S.Z,VTextField:I.Z});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"overall-style",attrs:{"px-12":"","py-6":"",fluid:""}},[n("v-row",[n("a",{staticStyle:{color:"white","text-decoration":"none",background:"#4A148C"},attrs:{href:"#cases"}},[e._v(e._s(e.$t("anchor_cases")))]),n("v-spacer"),n("button",{staticStyle:{color:"white","text-decoration":"none",background:"#4A148C"},on:{click:e.changeLanguage}},[e._v(e._s(e.$t("other_language")))])],1)],1)},$=[],j={methods:{changeLanguage(){this.$i18n.locale="en-US"===this.$i18n.locale?"zh-CN":"en-US",localStorage.setItem("lang",this.$i18n.locale)}}},A=j,T=(0,p.Z)(A,z,$,!1,null,null,null),Z=T.exports;g()(T,{VContainer:w.Z,VRow:x.Z,VSpacer:S.Z});var L={name:"App",components:{MainPage:O,HeaderBar:Z},created(){const e=localStorage.getItem("lang");e&&(this.$i18n.locale=e)},data:()=>({})},D=L,V=n(7524),U=n(1009),E=(0,p.Z)(D,a,o,!1,null,null,null),B=E.exports;g()(E,{VApp:V.Z,VMain:U.Z});var P=n(9132);i["default"].use(P.Z);var N,R,H,M,F=new P.Z({theme:{dark:!0}}),G=n(7152),W=n(8345),q={big_title:"Lockdemic",anchor_cases:"Great Lockdemic Death Cases",curr_language:"English",other_language:"简体中文",search:"Search",table_time:"Time",table_location:"Location",table_title:"Title",table_description:"Description",table_link:"Link",table_backup_link:"Backup Link",table_death_number:"Death Number",table_screenshot:"Screenshot",table_attr1:"Attr1",table_attr2:"Attr2",table_attr3:"Attr3",submit:"If you have unlisted cases, please submit in the github Issues",main_page_text_1:'\n# Lockdown ICU\nBasic principles of "disaster relief": secondary disasters caused by disaster relief should not exceed the disaster itself.\n\nThe secondary disasters caused by the extreme lockdown far exceeded Omicron itself.\n\n("Great Lockdemic", the Great Lockdown Pandemic)\n\n## Deaths from secondary disasters due to extreme lockdown measures:\n      ',main_page_text_2:'\n###### For the time being, only the public events that have been widely concerned by the public and the media and confirmed by the mainstream media are counted. It is difficult to unify the uncontroversial statistical caliber of the real number of civilian deaths in secondary disasters caused by the closure of the city. In the statistical sense of public health, the actual number of cases is generally much higher than the number of cases that have received widespread public and media attention.\n\nSince the spread of Omicron around the world, while the infectivity of the new crown variant has increased significantly, the virus toxicity, severe rate, and fatality rate have all shown a cliff-like decline. In countries with high rates of effective vaccination, the public health hazard and fatality rate have been "relatively lower than seasonal influenza"*. Economic recovery, shift of policy focus, and recovery of the job market have become the main themes of the global economy and people\'s livelihood in 2022.\n\nIn 2020, in the face of the original strain of the new crown with a very high fatality rate and a transmission rate far lower than that of Omicron, we effectively blocked the initial rampage of the original strain of the new crown by blocking the entire city of Wuhan with an iron fist. The heroic people of Wuhan paid a huge price, but they persevered and united to win the first battle against the epidemic in the face of the original strain of the new crown with a high lethality rate. It has maintained the normal and stable operation of the economy while ensuring the lives and health of the people across the country. The initial closure measures not only preserved the overall situation of preventing and controlling the original strain of the new crown, but also preserved the economic life on which thousands of households depended for their livelihoods, demonstrating my country\'s institutional advantages and the people\'s positive attitude towards scientific epidemic prevention.\n\nTime passes. In 2022, in the face of the influenza-grade variant Omikron, which has completely different characteristics from the original strain of the new crown, the one-size-fits-all city closure policy has not only not undergone major adjustments, but has even continued to increase layer by layer in major, medium and small cities across the country. The most ironic thing is that while the vast majority of patients infected with Omicron quickly recovered without leaving any sequelae, the number of secondary disaster victims and even the death toll caused by the increasingly extreme lockdown measures has risen sharply. , its damage is far higher than the seriousness and death caused by Omicron itself in most of the time.\n\nSecondary disasters caused by disaster relief should not exceed the disaster itself. The vast number of medical workers and many grass-roots medical staff who participated in the treatment in person on the front line raised their voices in the face of the unreasonable and unscientific extreme epidemic prevention measures against Omicron, but they were drowned in the mighty "clearing". "In anger. At the same time, some cities are actively or passively using iron-fisted measures against the original strain of the virus to prevent and control Omicron, which brings inefficient prevention and control, on-site aggregation of nucleic acids, material shortages, mass starvation, and separation of flesh and blood. , the unnatural deaths of residents and other malignant secondary disasters intensified. The economic source on which a large number of people at the lowest level depend for their survival has been interrupted, and they have lost their voices in the mainstream media, and have fallen into a real spiral survival crisis. And many middle-income families and even high-income families in areas where the city is strictly closed also have to worry about whether they can eat their next meal, whether the elderly at home can survive the food shortage, and the hospitals are distressed, angry, And helpless. It is hard to imagine this happening in the middle-income countries of the twenty-first century. However, effective anti-epidemic measures for the Omic Army, such as greatly increasing the rate of effective vaccination, graded diagnosis and treatment, home isolation, and new changes in popularizing the epidemic to eliminate unnecessary fears of the public, are not only not gradually implemented during 2021-2022, but even until There is no current intention to show any improvement in this direction either. Almost all the energy of middle-level and grass-roots staff is trapped in the repeated and strengthened city closure measures, and they are forced to fall into a vicious circle of tactical diligence and strategic laziness.\n\nAt the same time, some capital spokesmen and those in power who rely on additional lockdown measures to boost their wealth or power are controlling domestic public opinion, spreading rumors about the achievements of the Omicron International epidemic prevention, including the vast number of third world countries, and fully aware of the epidemic prevention measures. While morphological, the voices of the people at the bottom who are caught in the secondary disaster of the city closure cannot be heard or even actively blocked. A Chinese medicine manufacturer even joined hands to concoct fake news that the World Health Organization "recommends" the use of a Chinese medicine preparation to fight the epidemic. ** Others, especially in the small power centers at the grass-roots level, took the opportunity to seek rent-seeking power, block power, and disregard the basic principles of a rule-of-law society during the fight against the epidemic. All of these, while deceiving the public and deceiving the society, they also continue to delay the timely and effective adjustment of anti-epidemic measures in accordance with science, which not only kidnapped the people\'s health and economic life, but also kidnapped the national epidemic prevention policy.\n\nIn order to prevent the tragedy from continuing and leave a complete memory of history, the Lockdemic.ICU project will do its best to faithfully record the abnormal deaths caused by this excessive lockdown movement. It is hoped that this project will make more people realize that our opponent and partner in epidemic prevention is nature, and the enemy of epidemic prevention is by no means the demonized scientific means of epidemic prevention and the "Western" epidemic prevention model, let alone living in the next residential area or the next city. , relatives and compatriots in neighboring provinces! Omicron is not the original strain of the new crown. As the virus continues to decrease in toxicity and infectivity continues to increase, unnecessary fear will only bring endless repeated city closures and secondary disasters with no upper limit, so that the country is caught in fire and water, If you and I live in fire and water, and the economy collapses, people will starve to death on a large scale and die of disease. The current bad situation has just begun, and we still have the opportunity to make adjustments in time to save the building. Abandon politics in command, respect science, respect front-line medical personnel, and respect the opinions of professional medical workers. And if the madness continues, you and I will both become victims of this movement. The poor will lose their jobs, sources of income, and even seriously ill family members with various diseases, while the rich will fly away, abandoning this land and taking away capital and technical management experience. Next pile of mess. Even if someone is ultimately responsible for this crazy farce, the damage it causes will be irreparable.\n\nIt is hoped that scientific epidemic prevention, greatly increasing the effective vaccination rate, graded diagnosis and treatment, home isolation, and popularizing new changes in the epidemic will eliminate unnecessary fears of the public, and this can be realized as soon as possible in our land. At a critical moment, it is not shameful to "copy homework" from the public health sciences and the excellent people in Omicron\'s epidemic prevention.\n\n## Relevant laws and regulations\n### "Law of the People\'s Republic of China on the Prevention and Treatment of Infectious Diseases" [🔗](https://www.mee.gov.cn/ywgz/fgbz/fl/202002/t20200201_761166.shtml)\n#### Article 12, paragraph 2\n> If the health administrative department, other relevant departments, disease prevention and control institutions and medical institutions violate the lawful rights and interests of units and individuals by illegally implementing administrative management or prevention and control measures, the relevant units and individuals may apply for administrative reconsideration or file a lawsuit according to law.\n#### Article 58\n> Health administrative departments and their staff shall consciously accept the supervision of society and citizens when performing their duties. Units and individuals have the right to report violations of this Law to the people\'s government at a higher level and its health administrative department. The relevant people\'s government or its health administrative department that receives the report shall investigate and deal with it in a timely manner.\n\n## References\n\\*The UK took the lead in realizing "coexistence with the virus", and the death rate of the new crown has been lower than that of the flu [🔗](https://news.bioon.com/article/6796646.html)\n\n\\*\\* WHO "recommended" Lianhua Qingwen, who told you? [🔗](https://www.bilibili.com/video/BV1K34y1v7Bj)\n\n## Death cases caused by secondary disasters in the city closure:\n  '},K=q,J=(0,p.Z)(K,N,R,!1,null,null,null),Q=J.exports,X={anchor_cases:"封城次生灾害致死案例",big_title:"封城",curr_language:"简体中文",other_language:"English",search:"搜索",table_time:"时间",table_location:"地点",table_title:"标题",table_description:"描述",table_link:"链接",table_backup_link:"备份链接",table_death_number:"死亡人数",table_screenshot:"截图",submit:"如有未列出的案例线索，欢迎在Issues区投稿",main_page_text_1:"\n# 封城ICU (Lockdemic.ICU)\n救灾基本原则：救灾所造成的次生灾害，不能超过灾害本身。\n\n极端封城造成的次生灾害远超奥密克戎本身。\n\n(“Great Lockdemic”， the Great Lockdown Pandemic)\n\n## 极端封城措施次生灾害死亡人数: \n\n\n  ",main_page_text_2:"\n###### 暂仅统计受大众和媒体广泛关注并被主流媒体证实的公共事件。封城次生灾害真实平民死亡人数尚难以统一无争议统计口径。公共卫生统计学意义上，真实发生案例数目一般远远高于受大众和媒体广泛关注的案例数。\n\n自从奥密克戎在全球扩散，新冠变种在传染性大幅提升的同时，病毒毒性、重症率、致死率均呈现断崖式下跌。在有效疫苗接种率较高的国家，其公共健康危害性与致死率已“较为稳定地低于季节性流感”*。经济复苏、政策重心转移、就业市场回暖已成为2022年全球经济民生的主旋律。\n\n2020年，面对致死率极高、传播率远低于奥密克戎的新冠原始株，我们用封锁一整座武汉城的铁腕手段有效阻断了新冠原始株最初的肆虐。英雄的武汉人民付出了巨大的代价，但大家不折不挠、众志成城，面对高致死率的新冠原始株打赢了防疫攻坚第一仗。在保证全国人民生命健康的同时维持了经济的正常稳定运行。初期的封城措施，既保住了防控新冠原始株的大局、又保住了千家万户赖以生计的经济生活，展现了我国的体制优势与人民群众科学防疫的积极态度。\n\n时过境迁。2022年，面对与新冠原始株特性完全不同的流感级变种奥密克戎，一刀切的封城政策不仅没有发生重大调整、甚至在全国各大、中、小城市持续不断层层加码。最为讽刺的是，在绝大多数感染奥密克戎的患者很快自愈且没有留下任何后遗症的同时，因越发极端的封城防疫措施导致的次生灾害受害者乃至死亡人数却大幅攀升，其伤害在绝大多数时间内远高于奥密克戎本身带来的重症与死亡。\n\n救灾所带来的次生灾害，本不应超过灾害本身。广大医学工作者、一线亲身参与救治的众多基层医护人员，面对针对奥密克戎的不合理、不科学的极端防疫措施，发出了他们的声音，却被淹没在浩浩荡荡的“清零”怒喝之中。与此同时，一些城市或主动或被动地用针对病毒原始株的铁腕手段防控奥密克戎，其带来的低效防控、核酸现场聚集性传播、物资短缺、群体性饥饿、骨肉分离、居民非正常死亡等恶性次生灾害愈演愈烈。为数众多的最底层民众赖以生存的经济来源中断，在主流媒体失声，陷入实实在在的螺旋式生存危机。而众多严格封城地区的中等收入家庭、乃至高收入家庭，同样不得不为下一顿饭能不能吃上、家中老人是否能活过食物短缺、医院因核酸政策拒诊而愁困、愤怒、又无奈。很难想象这些真真切切发生在二十一世纪的中等收入国家。而大幅提升有效疫苗接种率、分级诊疗、居家隔离、科普疫情新变化消除公众不必要的恐惧等针对奥密克戎行之有效的防疫措施，不仅没有在2021-2022年期间逐步施展，甚至直至如今也未有在这一方向展现出任何改进的意图。中层与基层工作人员几乎所有的精力都被套在反复加强的封城措施中，被迫陷入战术性勤奋、战略性懒惰的工作怪圈。\n\n而与此同时，一些靠加码封城措施抬升财富或权力的资本代言人与当权者，在控制国内舆论、造谣包括广大第三世界国家在内的奥密克戎国际防疫成果，将防疫措施彻底意识形态化的同时，听不见、甚至主动封堵身陷封城次生灾害的最底层人民的呼声。某中药生产商甚至携手炮制世界卫生组织“推荐”使用某中药制剂抗疫的虚假新闻。** 而另一些人、尤其是在基层权力小中心，抗疫过程中趁机大肆权力寻租，拦权专权，罔顾法治社会基本原则，甚至试图将防疫特权模式化、固定化、长期化。凡此种种，他们在欺骗大众欺骗社会的同时，也在持续耽误抗疫措施遵循科学进行及时有效调整，既绑架了人民群众健康和经济生活，也绑架了国家防疫政策。\n\n为了避免悲剧持续，并留给历史完整的记忆，Lockdemic.ICU项目将尽最大努力忠实记录这场过度封城运动中导致的非正常死亡。希望这个项目能让更多人认识到，我们防疫的对手兼伙伴是大自然，而防疫敌人绝不是被妖魔化的科学防疫手段和“西方“防疫模式，更不是住在隔壁居民区、隔壁城市、隔壁省份的亲人同胞！奥密克戎不是新冠原始株.随着病毒毒性持续降低、传染性持续提高，不必要的恐惧只会带来无穷无尽的反复封城、没有上限的次生灾难，以至于陷国家于水火、陷你我生活于水火，经济崩溃是会实实在在大规模饿死人、病死人。当下这一恶劣局面刚刚开始，我们还有机会及时作出调整，挽大厦于将倾。摒弃政治挂帅，尊重科学，尊重一线医疗人员，尊重专业医学工作者的意见。而如果疯狂继续下去，你我都将成为这场运动的牺牲品，穷人失去工作、收入来源、乃至各种疾病的重病家人，而富人远走高飞，抛弃这片土地带走资金技术管理经验，任凭留下一堆烂摊子。即便终将有人为这场疯狂闹剧负责，其造成的伤害也将无法挽回。\n\n希望科学防疫、大幅提升有效疫苗接种率、分级诊疗、居家隔离、科普疫情新变化消除公众不必要的恐惧，能够尽早在我们这片土地实现。关键时刻，向公共卫生科学、向奥密克戎防疫优秀者“抄作业”并不可耻。\n\n## 相关法律法规\n### 《中华人民共和国传染病防治法》[🔗](https://www.mee.gov.cn/ywgz/fgbz/fl/202002/t20200201_761166.shtml)\n#### 第十二条第二款\n> 卫生行政部门以及其他有关部门、疾病预防控制机构和医疗机构因违法实施行政管理或者预防、控制措施，侵犯单位和个人合法权益的，有关单位和个人可以依法申请行政复议或者提起诉讼。\n#### 第五十八条\n> 卫生行政部门及其工作人员履行职责，应当自觉接受社会和公民的监督。单位和个人有权向上级人民政府及其卫生行政部门举报违反本法的行为。接到举报的有关人民政府或者其卫生行政部门，应当及时调查处理。\n\n## 引用\n\\*英国率先实现“与病毒共存”，新冠死亡率已低于流感 [🔗](https://news.bioon.com/article/6796646.html)\n\n\\*\\*世卫组织“推荐”连花清瘟，谁告诉你的？[🔗](https://www.bilibili.com/video/BV1K34y1v7Bj)\n\n## 封城次生灾害致死案例:\n\n\n\n      "},Y=X,ee=(0,p.Z)(Y,H,M,!1,null,null,null),te=ee.exports;i["default"].use(W.Z),i["default"].use(G.Z);const ne=new G.Z({locale:"zh-CN",messages:{"en-US":Q,"zh-CN":te}});i["default"].config.productionTip=!1,i["default"].config.devtools=!1;const ie=[{path:"/",component:O}];new i["default"]({router:new W.Z({routes:ie,mode:"history"}),i18n:ne,vuetify:F,render:e=>e(B)}).$mount("#app")},8841:function(e,t,n){e.exports=n.p+"img/lockdown-white.e1d8d09d.svg"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(h=0;h<e.length;h++){i=e[h][0],a=e[h][1],o=e[h][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(h--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var h=l(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(h)},i=self["webpackChunklddt"]=self["webpackChunklddt"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5422)}));i=n.O(i)})();
//# sourceMappingURL=app.e08a3fa3.js.map