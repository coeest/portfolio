// 作品数据
// 在此文件中添加你的作品，每添加一个作品只需编辑这一个文件

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

// === 个人信息 ===
export const profile = {
  name: '苏静怡',
  nameEn: "Hi, I'm 苏静怡.",
  bio: '厦门大学广告学本科在读，关注内容增长与品牌新媒体运营。',
  avatar: asset('assets/profile-photo.jpg'),
  skills: ['Photoshop', '剪映', 'Canva', '海报设计', 'AI辅助创作', '自媒体运营'],
  links: [
    { name: '查看作品', url: '#works', primary: true },
    { name: '联系我', url: 'mailto:example@email.com', primary: false }
  ]
}

// 海报作品
export const posters = [
  {
    id: 'p1',
    title: '海报1',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144851_1_8.jpg'),
    date: '2026-05-09',
    tags: ['校园', '活动']
  },
  {
    id: 'p3',
    title: '海报2',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144853_6_8.jpg'),
    date: '2026-05-09',
    tags: ['社团', '招募']
  },
  {
    id: 'p4',
    title: '海报3',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144856_7_8.png'),
    date: '2026-05-09',
    tags: ['比赛', '宣传']
  },
  {
    id: 'p5',
    title: '海报4',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144857_8_8.jpg'),
    date: '2026-05-09',
    tags: ['毕业', '横幅']
  },
  {
    id: 'p6',
    title: '海报5',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144858_9_8.jpg'),
    date: '2026-05-09',
    tags: ['周年', '活动']
  },
  {
    id: 'p8',
    title: '海报6',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144902_13_8.jpg'),
    date: '2026-05-09',
    tags: ['晚会', '宣传']
  },
  {
    id: 'p9',
    title: '海报7',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144903_14_8.jpg'),
    date: '2026-05-09',
    tags: ['分享会', '活动']
  },
  {
    id: 'p10',
    title: '海报8',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144905_15_8.jpg'),
    date: '2026-05-09',
    tags: ['分享', '活动']
  },
  {
    id: 'p11',
    title: '海报9',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144906_16_8.jpg'),
    date: '2026-05-09',
    tags: ['读书日', '宣传']
  },
  {
    id: 'p12',
    title: '海报10',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144907_17_8.jpg'),
    date: '2026-05-09',
    tags: ['读书', '活动']
  },
  {
    id: 'p13',
    title: '海报11',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144908_18_8.jpg'),
    date: '2026-05-09',
    tags: ['直播', '预告']
  },
  {
    id: 'p14',
    title: '海报12',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144909_19_8.jpg'),
    date: '2026-05-09',
    tags: ['直播', '宣传']
  },
  {
    id: 'p15',
    title: '海报13',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144910_20_8.jpg'),
    date: '2026-05-09',
    tags: ['赛事', '宣传']
  },
  {
    id: 'p16',
    title: '海报14',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144911_21_8.jpg'),
    date: '2026-05-09',
    tags: ['比赛', '活动']
  },
  {
    id: 'p17',
    title: '海报15',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144912_22_8.jpg'),
    date: '2026-05-09',
    tags: ['运动', '活动']
  },
  {
    id: 'p18',
    title: '海报16',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144913_23_8.jpg'),
    date: '2026-05-09',
    tags: ['赛事', '宣传']
  },
  {
    id: 'p19',
    title: '海报17',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144914_24_8.jpg'),
    date: '2026-05-09',
    tags: ['论坛', '宣传']
  },
  {
    id: 'p20',
    title: '海报18',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144915_25_8.jpg'),
    date: '2026-05-09',
    tags: ['研讨', '活动']
  },
  {
    id: 'p21',
    title: '海报19',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144916_26_8.jpg'),
    date: '2026-05-09',
    tags: ['展览', '宣传']
  },
  {
    id: 'p23',
    title: '海报20',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144918_28_8.jpg'),
    date: '2026-05-09',
    tags: ['市集', '宣传']
  },
  {
    id: 'p24',
    title: '海报21',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144918_29_8.png'),
    date: '2026-05-09',
    tags: ['市集', '活动']
  },
  {
    id: 'p25',
    title: '海报22',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144920_30_8.jpg'),
    date: '2026-05-09',
    tags: ['宣讲', '宣传']
  },
  {
    id: 'p26',
    title: '海报23',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144922_31_8.jpg'),
    date: '2026-05-09',
    tags: ['开幕', '活动']
  },
  {
    id: 'p27',
    title: '海报24',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144923_32_8.jpg'),
    date: '2026-05-09',
    tags: ['开幕', '宣传']
  },
  {
    id: 'p28',
    title: '海报25',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144924_33_8.jpg'),
    date: '2026-05-09',
    tags: ['迎新', '活动']
  },
  {
    id: 'p29',
    title: '海报26',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144924_34_8.jpg'),
    date: '2026-05-09',
    tags: ['迎新', '宣传']
  },
  {
    id: 'p30',
    title: '海报27',
    description: '',
    image: asset('assets/作业帮海报制作/微信图片_20260509144925_35_8.jpg'),
    date: '2026-05-09',
    tags: ['纳新', '宣传']
  }
]

// 公众号文章
export const articles = [
  {
    id: 'a2',
    title: '【美食合集】让你的味蕾来一次异国旅行！',
    description: 'Amoy杂货铺公众号文章：东南亚料理美食合集。',
    image: asset('assets/amoy-southeast-asia-food.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/jt9DmG-SaL3zY1xCNy6d8g',
    tags: ['公众号', '美食合集']
  },
  {
    id: 'a3',
    title: '49元双人餐！吃完变有钱人？！这家店在厦大附近！',
    description: 'Amoy杂货铺公众号文章：又能吃饱、又能打卡、又能消闲娱乐的 Blue Plus。',
    image: asset('assets/wx-article-extra-1.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/MjEC0PPVamXkEqC8V0Ax8w',
    tags: ['公众号', '探店']
  },
  {
    id: 'a4',
    title: '时光穿梭，畅饮不停！35.9元无限畅享酒水，让思绪回到∞年代~',
    description: 'Amoy杂货铺公众号文章：领取专属唱片，一起回到以前。',
    image: asset('assets/wx-article-extra-2.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/PXbhFMdob1BX1ATfvs37kA',
    tags: ['公众号', '探店']
  },
  {
    id: 'a5',
    title: '虾片甜品免费送，厦大学生67折！！',
    description: 'Amoy杂货铺公众号文章：面向厦大学生的餐饮优惠内容。',
    image: asset('assets/wx-article-extra-3.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/ExTRXa8fwWyIK_g6tnV3jw',
    tags: ['公众号', '餐饮优惠']
  },
  {
    id: 'a6',
    title: '【Amoy杂货铺x厦门与店x朗地】29.9元找回童年回忆，“童忆”请扣一！',
    description: 'Amoy杂货铺公众号文章：联名活动与童年主题体验内容。',
    image: asset('assets/wx-article-extra-4.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/o13N2eSn9p0nf_5cBsbfHA',
    tags: ['公众号', '联名活动']
  },
  {
    id: 'a7',
    title: '志愿者招募丨第八期同行助学如约而至！',
    description: '同行公益公众号文章：第八期同行助学志愿者招募。',
    image: asset('assets/wx-article-extra-5.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/rjxYVbAK8MpjWhwiQTzvJA',
    tags: ['公众号', '志愿招募']
  },
  {
    id: 'a8',
    title: '同行工作坊NO.2｜关于外派那些事',
    description: '同行公益公众号文章：企业出海与外派工作主题工作坊。',
    image: asset('assets/wx-article-extra-6.jpg'),
    date: '2026-05-09',
    link: 'https://mp.weixin.qq.com/s/zqo0O6XyvGYCEctHRyU0UA',
    tags: ['公众号', '活动推文']
  }
]

// 小红书文章
export const xiaohongshus = [
  {
    id: 'x2',
    title: '当搞笑高中生高考完…..',
    description: '浏览：149517；点赞：2.4万；收藏：1234；评论：292。',
    image: asset('assets/xiaohongshu-gaokao-trip.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/6300a9ea0000000019029813?source=webshare&xhsshare=pc_web&xsec_token=ABxJiuIYyaYJq1THxESI3U1tMtHVZSWekul_nle1p2x9U=&xsec_source=pc_share',
    tags: ['小红书', '毕业旅行']
  },
  {
    id: 'x3',
    title: '泉州自习推荐！超有氛围感的书店～',
    description: '浏览：34015；点赞：1398；收藏：901；评论：59。',
    image: asset('assets/xiaohongshu-quanzhou-study-bookstore.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/65201cae000000001a0140d8?source=webshare&xhsshare=pc_web&xsec_token=ABd7ZH6FOZv01333rGtrYFBVJxtezD07AMXqdGB0P3XeM=&xsec_source=pc_share',
    tags: ['小红书', '泉州探店']
  },
  {
    id: 'x4',
    title: '🇭🇰香港特种兵一日游保姆级攻略',
    description: '浏览：39118；点赞：1846；收藏：1730；评论：61。',
    image: asset('assets/xiaohongshu-hongkong-one-day-trip.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/6540fd510000000025008fe1?source=webshare&xhsshare=pc_web&xsec_token=ABlHoq_OshcMALkLbpteSKpTP_0R1f3SXuHNINFcH-ns8=&xsec_source=pc_share',
    tags: ['小红书', '旅行攻略']
  },
  {
    id: 'x5',
    title: '在厦门就能吃到印尼人开的正宗印尼餐厅！',
    description: '浏览：未公开；点赞：174；收藏：196；评论：29。',
    image: asset('assets/xiaohongshu-indonesia-restaurant.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/65f6e3b700000000120343a8?source=webshare&xhsshare=pc_web&xsec_token=ABVcGA1OXtLMdt6GWhJHoSovUEPVW-pPyLf2NzWkDE_HQ=&xsec_source=pc_share',
    tags: ['小红书', '餐厅探店']
  },
  {
    id: 'x6',
    title: '人均五十！是被越南人认证过的正宗越南餐厅',
    description: '浏览：未公开；点赞：90；收藏：58；评论：17。',
    image: asset('assets/xiaohongshu-vietnam-restaurant.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/65fa641a0000000014005640?source=webshare&xhsshare=pc_web&xsec_token=ABSFwh6X8NEMRcD0hkSRIL6XimwSRT-t0PHEt1GSMA3nk=&xsec_source=pc_share',
    tags: ['小红书', '餐厅探店']
  },
  {
    id: 'x7',
    title: '厦大附近！听说吃完能变有钱人的无国界料理',
    description: '浏览：未公开；点赞：54；收藏：32；评论：19。',
    image: asset('assets/xiaohongshu-blue-plus-fusion.jpg'),
    date: '2026-05-09',
    link: 'https://www.xiaohongshu.com/discovery/item/66068a8a000000001203186f?source=webshare&xhsshare=pc_web&xsec_token=ABj2jUQqB24ZM_rbWSxw1bfvbzsAS1J8wwXG6kJcDZAL8=&xsec_source=pc_share',
    tags: ['小红书', '餐厅探店']
  }
]

// 营销策划方案
export const marketings = [
  {
    id: 'm2',
    title: '纳爱斯牙膏策划案',
    description: '维维E笑很NICE 品牌营销策划案',
    image: asset('assets/weiwei-e-smile-nice-cover.png'),
    date: '2026-05-09',
    link: asset('assets/weiwei-e-smile-nice.pdf'),
    tags: ['策划案', '品牌营销']
  },
  {
    id: 'm3',
    title: '超能运动洗护液营销策划案',
    description: '超能满格，衣然能战品牌营销策划案',
    image: asset('assets/f11-13-001-0001-cover.png'),
    date: '2026-05-09',
    link: asset('assets/f11-13-001-0001.pdf'),
    tags: ['策划案', '品牌营销']
  },
  {
    id: 'm4',
    title: '毛铺草本光瓶酒营销策划案',
    description: '醒酒快一步营销策划案',
    image: asset('assets/xingjiu-fast-step-cover.png'),
    date: '2026-05-09',
    link: asset('assets/xingjiu-fast-step.pdf'),
    tags: ['策划案', '营销策划']
  },
  {
    id: 'm5',
    title: '中国邮储银行营销策划案',
    description: '邮圆梦想，π无止境营销策划案',
    image: asset('assets/youyuan-dream-final-cover.png'),
    date: '2026-05-09',
    link: asset('assets/youyuan-dream-final.pdf'),
    tags: ['策划案', '金融营销']
  }
]

// 视频作品
export const videos = [
  {
    id: 'v1',
    title: '不可能的组合-预告片',
    description: '',
    image: asset('assets/bilibili-video-1.jpg'),
    date: '2026-05-09',
    embed: 'https://player.bilibili.com/player.html?bvid=BV1oNRQBGENu&autoplay=1',
    tags: ['B站', '预告片']
  },
  {
    id: 'v2',
    title: '变形记VCR前',
    description: '',
    image: asset('assets/bilibili-video-2.jpg'),
    date: '2026-05-09',
    embed: 'https://player.bilibili.com/player.html?bvid=BV1oNRQBGENH&autoplay=1',
    tags: ['B站', 'VCR']
  },
  {
    id: 'v3',
    title: '不可能的组合-采访视频',
    description: '',
    image: asset('assets/bilibili-video-3.jpg'),
    date: '2026-05-09',
    embed: 'https://player.bilibili.com/player.html?bvid=BV1oNRQBGEJd&autoplay=1',
    tags: ['B站', '采访']
  },
  {
    id: 'v4',
    title: '城隍庙采访视频',
    description: '',
    image: asset('assets/bilibili-video-4.jpg'),
    date: '2026-05-09',
    embed: 'https://player.bilibili.com/player.html?bvid=BV1ZFRQB1EoZ&autoplay=1',
    tags: ['B站', '采访']
  }
]

export const categories = [
  { id: 'posters', name: '海报', data: posters },
  { id: 'articles', name: '公众号', data: articles },
  { id: 'xiaohongshus', name: '小红书', data: xiaohongshus },
  { id: 'marketings', name: '策划方案', data: marketings },
  { id: 'videos', name: '视频', data: videos }
]



