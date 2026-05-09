import { useState } from 'react'
import { categories, profile } from './data/works'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedWork, setSelectedWork] = useState(null)
  const [showContact, setShowContact] = useState(false)

  const activeCategory = categories[activeTab]
  const works = activeCategory.data

  return (
    <div className="app">
      {/* 第一屏：个人介绍区 */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {profile.nameEn}
            <span className="title-dot"></span>
          </h1>
          <p className="hero-bio">{profile.bio}</p>
          <p className="hero-intro">
            我擅长从 0 到 1 搭建内容阵地，围绕用户洞察、平台流量机制与数据反馈制定内容策略，并通过新媒体矩阵、活动策划与转化链路设计，帮助品牌获得可持续的内容曝光与用户增长。
          </p>
          <div className="hero-buttons">
            <a href="#works" className="btn btn-primary">查看作品</a>
            <button type="button" className="btn btn-outline" onClick={() => setShowContact(true)}>
              联系我
            </button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="portfolio-mark">
            <div className="mark-frame">
              <div className="mark-image"></div>
              <div className="mark-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="mark-sheet">
              <div className="mark-sheet-line"></div>
              <div className="mark-sheet-line short"></div>
            </div>
            <div className="mark-caption">PORTFOLIO</div>
          </div>
        </div>
      </section>

      {/* 第二屏：关于我 + 技能标签 */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContact(false)}>
              脳
            </button>
            <h2>联系我</h2>
            <div className="contact-list">
              <p><span>☎</span>TEL：15905990683</p>
              <p><span>@</span>E-mail：1934257268@qq.com</p>
              <p><span>◇</span>Wechat：15905990683</p>
            </div>
          </div>
        </div>
      )}

      <section className="about">
        <div className="about-kicker">关于我</div>
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">热爱内容，探索增长。</h2>
            <p className="about-desc">
              我是一名厦门大学广告学本科生，关注内容创作、新媒体运营与品牌流量增长。过往经历中，我曾从 0 到 1 搭建校园新媒体矩阵，并参与教育、金融等行业的内容运营与用户增长项目。
            </p>
            <p className="about-desc">
              在创作中，我会使用 Photoshop、Canva 完成视觉物料设计，使用剪映进行短视频剪辑，并结合 AI 工具进行选题发散、文案生成、素材延展与效率提升。
            </p>
            <p className="about-desc">
              我相信好的内容不只是表达创意，更是理解用户、适配平台、形成传播，并最终沉淀为品牌资产的过程。
            </p>
            <div className="skills">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={profile.avatar} alt={profile.name} />
          </div>
        </div>
      </section>

      {/* 作品Tab导航 */}
      <section className="works-section" id="works">
        <div className="works-kicker">
          <span>作品集</span>
        </div>
        <nav className="tabs">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </section>

      {/* 作品画廊 */}
      <main className="main">
        <div className={`gallery gallery-${activeCategory.id}`}>
          {works.map((work, index) => (
            <div
              key={work.id}
              className="card"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedWork(work)}
            >
              <div className="card-image">
                {work.video ? (
                  <video src={work.video} muted playsInline preload="metadata" />
                ) : (
                  <img src={work.image} alt={work.title} />
                )}
              </div>
              <div className="card-info">
                <h3 className="card-title">{work.title}</h3>
                <p className="card-date">{work.date}</p>
                {work.description && <p className="card-description">{work.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedWork && (
        <div className="modal-overlay" onClick={() => setSelectedWork(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedWork(null)}>
              ×
            </button>
            {selectedWork.embed ? (
              <iframe
                src={selectedWork.embed}
                title={selectedWork.title}
                className="modal-image modal-video"
                allow="fullscreen; autoplay"
                allowFullScreen
              />
            ) : selectedWork.video ? (
              <video src={selectedWork.video} className="modal-image modal-video" controls />
            ) : (
              <img src={selectedWork.image} alt={selectedWork.title} className="modal-image" />
            )}
            <div className="modal-info">
              <h2>{selectedWork.title}</h2>
              <p>{selectedWork.description}</p>
              <span className="modal-date">{selectedWork.date}</span>
              {selectedWork.link && !selectedWork.embed && (
                <a href={selectedWork.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                  查看原文 →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
