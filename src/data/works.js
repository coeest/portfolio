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
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fbfacbad34ed145d013848a17573b5a39e4ee443295f1bb1f3d844f150447ad55..jpeg?Expires=1778397074&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=3Wl70RkYGSUjaq1HJiRSl1y%2BEEE%3D',
    date: '2026-05-09',
    tags: ['校园', '活动']
  },
  {
    id: 'p3',
    title: '海报2',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fc19c827314a1cb1a1c2a053262808553aa095ba88ff42d880d9d387ea41f40d8..jpeg?Expires=1778397075&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=8XcA9Ce%2B%2Fn2MIFyy4%2FfYpNN%2FVGY%3D',
    date: '2026-05-09',
    tags: ['社团', '招募']
  },
  {
    id: 'p4',
    title: '海报3',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F651456b704466ec3a4feac217ee47a7d5373d688a72488a1896abeb21ae8838a..jpeg?Expires=1778397076&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=gKTsMIcotJphXuSqivpFHIARc3w%3D',
    date: '2026-05-09',
    tags: ['比赛', '宣传']
  },
  {
    id: 'p5',
    title: '海报4',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F7824a1f578ebc2604f010f53e0670316a86134b3e482f650d1962201a3c2415e..jpeg?Expires=1778397076&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=17GGvL2YgxkmDrjMGvYCkF3O%2B9A%3D',
    date: '2026-05-09',
    tags: ['毕业', '横幅']
  },
  {
    id: 'p6',
    title: '海报5',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fdbce4f920def5296b731a7704b9abf0f0e44a6c403b778b3bee450ae980f945b..jpeg?Expires=1778397077&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=AkpzxSXBmjrV%2BAjI%2FU57ww%2B2HUE%3D',
    date: '2026-05-09',
    tags: ['周年', '活动']
  },
  {
    id: 'p8',
    title: '海报6',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F76c46cce6468d3fa70b8ec2e365f57a70a000cb2b13638c56a42eb5a46ee3e02..jpeg?Expires=1778397078&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=d9AyRdG%2BzJ%2Bwz6EHNJ8WMe6cXRs%3D',
    date: '2026-05-09',
    tags: ['晚会', '宣传']
  },
  {
    id: 'p9',
    title: '海报7',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F190e23f4f10516178595c399648cb44ab758695c95e379a1253313ee6f9f0241..jpeg?Expires=1778397078&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=Hthp%2FlztHVHZbZC3Z3zYpUuWWcU%3D',
    date: '2026-05-09',
    tags: ['分享会', '活动']
  },
  {
    id: 'p10',
    title: '海报8',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fba584deacb835d8c3a4174feadc07db7279a7eefb14ad0b7bc7bf858e15ec923..jpeg?Expires=1778397079&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=Grd%2BMQ7YeFtIz%2BVrX62xil0xMOU%3D',
    date: '2026-05-09',
    tags: ['分享', '活动']
  },
  {
    id: 'p11',
    title: '海报9',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F45d8f305d173089b821acb77f31636e35f81b77a03fa339bd7a99aafe3ea73ed..jpeg?Expires=1778397340&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=EIHx1%2FvG4ooL6e3PN2LOuqoMkt8%3D',
    date: '2026-05-09',
    tags: ['读书日', '宣传']
  },
  {
    id: 'p12',
    title: '海报10',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fc7272578809f8bce4ce6e118d9ff4541aee8549482a0f3c90d3a1bbd52526288..jpeg?Expires=1778397340&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=p414wFsBUTWCFLm1cpYZ%2Fr3tOXA%3D',
    date: '2026-05-09',
    tags: ['读书', '活动']
  },
  {
    id: 'p13',
    title: '海报11',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F0593e0e5b43867c654f7ea70b514f2e3f58357369f9ada38c6dc46b88e6a6eb5..jpeg?Expires=1778397341&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=qnRx9ws9ocd%2B6vX5Te6Y6teCJO0%3D',
    date: '2026-05-09',
    tags: ['直播', '预告']
  },
  {
    id: 'p14',
    title: '海报12',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F543dee3302489ac7832d72248589be0d12e965a180db16b668158e6c70711892..jpeg?Expires=1778397341&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=4I0UvusG5nPFedR21SaU9RxH%2FCE%3D',
    date: '2026-05-09',
    tags: ['直播', '宣传']
  },
  {
    id: 'p15',
    title: '海报13',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F9e41096c5e2263f7cbc452fdf3891a40d7054d8497e0d0c54757dc95dc75b856..jpeg?Expires=1778397342&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=l2FFRHokQDnIO6ATBjov3X6Ay7w%3D',
    date: '2026-05-09',
    tags: ['赛事', '宣传']
  },
  {
    id: 'p16',
    title: '海报14',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Ff55511b6d284d630196753ad46334d82bc6221bd58fa858ce60379c7c7a81b99..jpeg?Expires=1778397342&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=x9n809UcuaEcazUmlMiLt80kOYU%3D',
    date: '2026-05-09',
    tags: ['比赛', '活动']
  },
  {
    id: 'p17',
    title: '海报15',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fca6671dd0a5c9f324933e3dca43e13c5fdecd503599ccb1e6370a55330fccdd3..jpeg?Expires=1778397414&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=NW%2BwuUtRJVtbB7YaUGO3QM1e0C4%3D',
    date: '2026-05-09',
    tags: ['运动', '活动']
  },
  {
    id: 'p18',
    title: '海报16',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F308341de3b4e90a0fafc14093308f246d6d675ae404cddc908006f4a3d6bee68..jpeg?Expires=1778397415&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=a3zYWEvBEbUw2065MatHPIKPxKQ%3D',
    date: '2026-05-09',
    tags: ['赛事', '宣传']
  },
  {
    id: 'p19',
    title: '海报17',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F0808bfde0b04b9f607d869e8f647b5d672a339583b9d0e15c95410e5effb5d10..jpeg?Expires=1778397416&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=KsIb0RfuDS9J%2BoiSrn7xW6LaOss%3D',
    date: '2026-05-09',
    tags: ['论坛', '宣传']
  },
  {
    id: 'p20',
    title: '海报18',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Feed68522732f662ca28b9d9c1ed56d0734029cccafc155c553ee1c43baf55f24..jpeg?Expires=1778397416&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=cZDSy8m0oWVuSUihgiUAjvvKqOg%3D',
    date: '2026-05-09',
    tags: ['研讨', '活动']
  },
  {
    id: 'p21',
    title: '海报19',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F0c463e54ef030420a9f2c7f98b00d7d3fd54ec5ca63ac7889c8331d286e1ecd9..jpeg?Expires=1778397417&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=emKaU%2FYZwY0PA8d6ONTTRFALfXM%3D',
    date: '2026-05-09',
    tags: ['展览', '宣传']
  },
  {
    id: 'p23',
    title: '海报20',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fabbe37728ac916b10dd474af6e2e7acb3c34793d855b9fa37b8c85736f8bcfbe..jpeg?Expires=1778397418&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=A1%2FXqC%2FCcGMf2Xv%2BABLwUt2bUJw%3D',
    date: '2026-05-09',
    tags: ['市集', '宣传']
  },
  {
    id: 'p24',
    title: '海报21',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Ff7511f76c5e41d33e3396b72faa693a1cc7fea4f6212a5782c93bd892641e2d5..jpeg?Expires=1778397419&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=CDmeJRrVcOs%2BMY3yl1AEwDz4JFk%3D',
    date: '2026-05-09',
    tags: ['市集', '活动']
  },
  {
    id: 'p25',
    title: '海报22',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fd9765eb98dd96c27faf4326fb0a2ddff8cf03dfe44956aa40baca9c4c7c650d9..jpeg?Expires=1778397516&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=rPRWX2pwRaRS5TJPfCS1XurgoAA%3D',
    date: '2026-05-09',
    tags: ['宣讲', '宣传']
  },
  {
    id: 'p26',
    title: '海报23',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F57a51f70df081106b59b5352d8eb25af3c7b5240d100c88eed82dd7349ba3acc..jpeg?Expires=1778397517&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=rN9b9sZfU7m0HQZslJUnf4BK5Ts%3D',
    date: '2026-05-09',
    tags: ['开幕', '活动']
  },
  {
    id: 'p27',
    title: '海报24',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Fcb2d433a7b5a028eb0f66842289d3d7ed2a33c0c6def3e2aba95d04e22501606..jpeg?Expires=1778397517&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=Hi05Cij%2FF%2BFNED5%2BBLPm51Ws%2FFE%3D',
    date: '2026-05-09',
    tags: ['开幕', '宣传']
  },
  {
    id: 'p28',
    title: '海报25',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F4d6f9fdd4a480b7f147ce992123e22e6851f3555d9c5003e41ac401f7581b8ee..jpeg?Expires=1778397518&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=QArKFgIR0wQYyzUwYUdWPvFxU6Q%3D',
    date: '2026-05-09',
    tags: ['迎新', '活动']
  },
  {
    id: 'p29',
    title: '海报26',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2F7bc8895871b6420d8c7fb33404544521cd29856fb6bdec61c47af6a8c47fa2e3..jpeg?Expires=1778397518&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=Dr%2BgUUjRrdcVZdNCguMlnn5Js0Y%3D',
    date: '2026-05-09',
    tags: ['迎新', '宣传']
  },
  {
    id: 'p30',
    title: '海报27',
    description: '',
    image: 'https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-05-09%2FMiniMax-M2.5%2F2024625063227036112%2Faa3bed345fbb2e511288f0510c57ebf7c6880bd080451492a0b492eb0d6f66d0..jpeg?Expires=1778397519&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=dwdR%2B%2BwtHVLSxNKdd3g3nSxtRQc%3D',
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



