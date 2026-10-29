import React, { useState, useMemo } from 'react';
import { APP_MENU } from './data/menu';
import { CategoryId, MenuItem } from './types';

type TabType = 'home' | 'menu' | 'offers' | 'profile';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [selectedMilk, setSelectedMilk] = useState('كامل الدسم');
  const [selectedSweetness, setSelectedSweetness] = useState('مظبوط');
  const [trayItems, setTrayItems] = useState<MenuItem[]>([]);
  const [customerName, setCustomerName] = useState(() => localStorage.getItem('970spot_cust_name') || '');
  const [customerPhone, setCustomerPhone] = useState(() => localStorage.getItem('970spot_cust_phone') || '');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const filteredMenuItems = useMemo(() => {
    return APP_MENU.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleTrayItem = (item: MenuItem) => {
    if (trayItems.some((i) => i.id === item.id)) {
      setTrayItems((prev) => prev.filter((i) => i.id !== item.id));
      showToast(`تم حذف "${item.name}"`);
    } else {
      setTrayItems((prev) => [...prev, item]);
      showToast(`تمت إضافة "${item.name}" للطلب ☕`);
    }
  };

  const handleOrderSingleWhatsApp = () => {
    if (!selectedProduct) return;
    let msg = `مرحباً كافيه +970 SPOT المنصورة (فرع حي الجامعة)! ☕\n`;
    msg += `أود الاستفسار والطلب بخصوص: ${selectedProduct.name} (${selectedProduct.nameEn})\n`;
    msg += `• نوع الحليب: ${selectedMilk}\n`;
    msg += `• درجة الحلاوة: ${selectedSweetness}\n`;
    if (customerName.trim()) msg += `• الاسم: ${customerName.trim()}\n`;
    msg += `\nيرجى تأكيد السعر والجاهزية، شكراً لكم!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    setSelectedProduct(null);
    showToast('جارٍ فتح واتساب لإرسال طلبك...');
  };

  const handleOrderTrayWhatsApp = () => {
    if (trayItems.length === 0) return;
    let msg = `مرحباً كافيه +970 SPOT المنصورة (فرع حي الجامعة)! ☕\nأود الاستفسار والطلب للأصناف التالية:\n`;
    trayItems.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} (${item.nameEn})\n`;
    });
    if (customerName.trim()) msg += `• الاسم: ${customerName.trim()}\n`;
    msg += `\nيرجى تأكيد إجمالي السعر ووقت الاستلام بالفرع. شاكر لكم!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    setTrayItems([]);
    showToast('تم تجهيز طلبك عبر واتساب!');
  };

  const copyAddress = () => {
    const addr = 'كافيه +970 SPOT، المنصورة، حي الجامعة، في بداية شارع الإيمان، على ناصية هوت ميكس';
    navigator.clipboard.writeText(addr).then(() => {
      showToast('تم نسخ عنوان فرع المنصورة بنجاح 📍');
    });
  };

  return (
    <div className="app-shell">
      {/* App Header */}
      <header className="app-header">
        <div className="header-brand">
          <img src="/images/logo_official.jpg" alt="+970 SPOT Logo" className="brand-emblem-img" />
          <div className="brand-text-block">
            <span className="brand-title-ar">+970 SPOT</span>
            <span className="brand-subtitle-en">FROM OUR LAND TO YOUR CUP</span>
          </div>
        </div>

        <div className="header-actions">
          <div className="branch-badge-pill" title="فرع حي الجامعة - المنصورة">
            <span className="live-dot"></span>
            <span>حي الجامعة</span>
          </div>
        </div>
      </header>

      {/* Main Screens Viewport */}
      <main className="screens-viewport">
        {/* Screen 1: Home */}
        <section className={`app-screen ${activeTab === 'home' ? 'active' : ''}`} id="screen-home">
          <div className="welcome-banner">
            <div className="welcome-time-greeting">
              <span>طاب يومك ☕ • قهوتك المختصة بانتظارك</span>
            </div>
            <h2 className="welcome-title">أجواء وأصالة فلسطينية في قلب المنصورة</h2>
            <p className="welcome-desc">
              مرحباً بك في تطبيق +970 SPOT. نختار لك أرقى محاصيل القهوة المختصة والماتشا اليابانية والمخبوزات الطازجة يومياً.
            </p>
            <div className="welcome-actions">
              <button type="button" className="btn-primary-app" onClick={() => setActiveTab('menu')}>
                <span>تصفح المنيو الآن ←</span>
              </button>
              <a
                href="https://api.whatsapp.com/send?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%83%D8%A7%D9%81%D9%8A%D9%87%20+970%20SPOT"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-app"
              >
                <span>محادثة واتساب 💬</span>
              </a>
            </div>
          </div>

          <div className="hero-spotlight-card">
            <div className="spotlight-image-box">
              <img src="/images/iced_spanish.jpg" alt="Iced Spanish Latte" />
              <span className="spotlight-badge">توقيع المكان • Signature</span>
            </div>
            <div className="spotlight-body">
              <h3 className="spotlight-title">آيس سبانش لاتيه سبيشيال</h3>
              <div className="spotlight-subtitle">Iced Spanish Latte • بن أرابيكا مختص</div>
              <p className="spotlight-desc">
                المشروب البارد المفضل لرواد الكافيه في المنصورة، مع طبقات الإسبريسو الكثيف والحليب المخملي والنكهة الكراميلية المتوازنة.
              </p>
              <div className="spotlight-footer">
                <button
                  type="button"
                  className="btn-primary-app"
                  onClick={() => setSelectedProduct(APP_MENU[0])}
                >
                  <span>تخصيص وطلب الصنف</span>
                </button>
                <button
                  type="button"
                  className="btn-secondary-app"
                  onClick={() => toggleTrayItem(APP_MENU[0])}
                >
                  <span>+ أضف للطلب</span>
                </button>
              </div>
            </div>
          </div>

          <div className="section-header-compact">
            <h3 className="section-title-compact">مختارات الباريستا اليومية</h3>
            <span className="section-link-more" onClick={() => setActiveTab('menu')}>
              عرض الكل ←
            </span>
          </div>
          <div className="barista-picks-grid">
            {APP_MENU.slice(0, 4).map((item) => (
              <div key={item.id} className="compact-product-card" onClick={() => setSelectedProduct(item)}>
                <img src={item.image} alt={item.name} className="compact-card-thumb" />
                <div className="compact-card-name">{item.name}</div>
                <div className="compact-card-sub">{item.nameEn}</div>
                <div className="compact-card-footer">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>اسأل عن السعر</span>
                  <button
                    type="button"
                    className="btn-add-circle"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTrayItem(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="loyalty-club-card">
            <div className="loyalty-icon-box">🏆</div>
            <div className="loyalty-text-box">
              <h4>نادي رواد +970</h4>
              <p>برنامج المكافآت والنقاط الخاص برواد فرع المنصورة قيد التجهيز لمنحك تجربة ولاء مميزة مع كل فنجان.</p>
            </div>
          </div>

          <div className="store-quick-card">
            <div className="store-quick-text">
              <h5>فرع المنصورة - حي الجامعة</h5>
              <p>بداية شارع الإيمان (ناصية هوت ميكس) • 9:00 ص - 1:00 ص</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plus+970+Spot+Cafe+Mansoura"
              target="_blank"
              rel="noreferrer"
              className="btn-directions-link"
            >
              <span>الخريطة 📍</span>
            </a>
          </div>
        </section>

        {/* Screen 2: Menu */}
        <section className={`app-screen ${activeTab === 'menu' ? 'active' : ''}`} id="screen-menu">
          <div className="screen-header-block">
            <h2 className="screen-headline">قائمة المشروبات والبيكري</h2>
            <p className="screen-subline">محاصيل بن أرابيكا مختصة، ماتشا يابانية عضوية، ومخبوزات طازجة</p>
          </div>

          <div className="menu-search-bar">
            <input
              type="text"
              className="menu-search-input"
              placeholder="ابحث بالاسم العربي أو الإنجليزي..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-icon-app">🔍</span>
          </div>

          <div className="category-touch-strip">
            {(
              [
                { id: 'all', label: 'الكل' },
                { id: 'hot-coffee', label: 'قهوة ساخنة' },
                { id: 'iced-coffee', label: 'مشروبات مثلجة' },
                { id: 'matcha', label: 'ماتشا يابانية' },
                { id: 'bakery', label: 'بيكري ومخبوزات' },
                { id: 'refreshers', label: 'موخيتو ومنعشات' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`touch-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="menu-cards-feed">
            {filteredMenuItems.map((item) => {
              const isAdded = trayItems.some((i) => i.id === item.id);
              return (
                <div key={item.id} className="feed-product-item" onClick={() => setSelectedProduct(item)}>
                  <img src={item.image} alt={item.name} className="feed-thumb" />
                  <div className="feed-info">
                    <div className="feed-category-tag">{item.categoryName}</div>
                    <div className="feed-title">{item.name}</div>
                    <div className="feed-en-title">{item.nameEn}</div>
                    <div className="feed-desc">{item.desc}</div>
                  </div>
                  <div className="feed-price-action">
                    <button
                      type="button"
                      className="feed-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTrayItem(item);
                      }}
                    >
                      {isAdded ? '✓' : '+'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Screen 3: Offers */}
        <section className={`app-screen ${activeTab === 'offers' ? 'active' : ''}`} id="screen-offers">
          <div className="screen-header-block">
            <h2 className="screen-headline">عروض وتجارب خاصة</h2>
            <p className="screen-subline">عروض حقيقية مستمرة في فرع المنصورة</p>
          </div>

          <div className="offers-feed">
            <div className="offer-card">
              <span className="offer-badge">عرض الصباح والدوام ☀️</span>
              <h3 className="offer-title">كومبو قهوة الصباح مع بيكري طازج</h3>
              <p className="offer-desc">
                ابدأ يومك بنشاط مع اختيارك من قهوتك المختصة المفضلة مع فطيرة الجبنة التركية أو الكوكيز البلجيكي الطازج يومياً من 9:00 ص حتى 1:00 م.
              </p>
              <div className="offer-footer">
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>اسأل الباريستا بالفرع</span>
                <a
                  href="https://api.whatsapp.com/send?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%83%D8%A7%D9%81%D9%8A%D9%87%20+970%20SPOT"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-app"
                >
                  استفسر عبر واتساب 💬
                </a>
              </div>
            </div>

            <div className="offer-card">
              <span className="offer-badge">جلسات الأصدقاء والمذاكرة 👥</span>
              <h3 className="offer-title">طلب المجموعات وجلسات العمل</h3>
              <p className="offer-desc">
                تنسيق طلبات مجمعة لمجموعات الطلاب وجلسات المذاكرة في حي الجامعة مع خصومات خاصة عند الطلب المسبق عبر واتساب الكافيه.
              </p>
              <div className="offer-footer">
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>لفرع حي الجامعة</span>
                <a
                  href="https://api.whatsapp.com/send?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%83%D8%A7%D9%81%D9%8A%D9%87%20+970%20SPOT"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-app"
                >
                  تنسيق طلب مجمع
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 4: Profile */}
        <section className={`app-screen ${activeTab === 'profile' ? 'active' : ''}`} id="screen-profile">
          <div className="screen-header-block">
            <h2 className="screen-headline">حسابي والفرع</h2>
            <p className="screen-subline">بياناتك وعنوان كافيه +970 SPOT المنصورة</p>
          </div>

          <div className="profile-card">
            <div className="profile-avatar-circle">☕</div>
            <div className="profile-info-block" style={{ flex: 1 }}>
              <h3>عضو نادي رواد +970</h3>
              <p style={{ marginBottom: 8 }}>بياناتك محفوظة لتسريع الطلب والاستفسار</p>
              <input
                type="text"
                placeholder="اكتب اسمك الكريم هنا..."
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  localStorage.setItem('970spot_cust_name', e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontSize: '0.88rem',
                  marginBottom: 6,
                }}
              />
              <input
                type="tel"
                placeholder="رقم الهاتف (اختياري)..."
                value={customerPhone}
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                  localStorage.setItem('970spot_cust_phone', e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontSize: '0.88rem',
                }}
              />
            </div>
          </div>

          <div className="store-detail-box">
            <div className="store-detail-row">
              <div className="store-icon-cell">📍</div>
              <div className="store-detail-content">
                <h5>العنوان الدقيق للفرع</h5>
                <p>حي الجامعة - في بداية شارع الإيمان، على ناصية هوت ميكس، مدينة المنصورة، مصر.</p>
                <button
                  type="button"
                  onClick={copyAddress}
                  style={{
                    marginTop: 8,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(200,162,81,0.14)',
                    border: '1px solid var(--border-card)',
                    color: 'var(--gold-light)',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  <span>نسخ العنوان 📋</span>
                </button>
              </div>
            </div>

            <div className="store-detail-row">
              <div className="store-icon-cell">⏰</div>
              <div className="store-detail-content">
                <h5>ساعات العمل اليومية</h5>
                <p>يومياً من 9:00 صباحاً حتى 1:00 بعد منتصف الليل.</p>
              </div>
            </div>

            <div className="store-detail-row">
              <div className="store-icon-cell">🗺️</div>
              <div className="store-detail-content">
                <h5>خرائط Google ماب</h5>
                <p>عرض الاتجاهات المباشرة إلى الكافيه بنقرة واحدة.</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plus+970+Spot+Cafe+Mansoura"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-app"
                  style={{ marginTop: 8, padding: '6px 14px', fontSize: '0.82rem' }}
                >
                  فتح في Google Maps 🗺️
                </a>
              </div>
            </div>
          </div>

          <div className="profile-social-grid">
            <a href="https://www.instagram.com/plus970spot.eg/" target="_blank" rel="noreferrer" className="profile-social-btn" style={{ background: 'linear-gradient(45deg,#833ab4,#fd1d1d,#fcb045)' }}>
              <span>إنستغرام @plus970spot.eg</span>
            </a>
            <a href="https://api.whatsapp.com/send?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%83%D8%A7%D9%81%D9%8A%D9%87%20+970%20SPOT" target="_blank" rel="noreferrer" className="profile-social-btn" style={{ background: '#25d366', color: '#08140d' }}>
              <span>واتساب الكافيه</span>
            </a>
          </div>
        </section>
      </main>

      {/* Floating Order Tray */}
      <div className={`floating-order-tray ${trayItems.length > 0 ? 'visible' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="tray-counter-bubble">{trayItems.length}</span>
          <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#fff' }}>أصناف محددة في طلبك</span>
        </div>
        <button
          type="button"
          className="btn-primary-app"
          onClick={handleOrderTrayWhatsApp}
          style={{ padding: '8px 16px', fontSize: '0.84rem' }}
        >
          <span>طلب مجمع عبر واتساب 💬</span>
        </button>
      </div>

      {/* Product Bottom Sheet */}
      {selectedProduct && (
        <div className="modal-bottom-sheet open" onClick={() => setSelectedProduct(null)}>
          <div className="sheet-container" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-drag-handle"></div>
            <div className="sheet-product-head">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="sheet-product-img" />
              <div className="sheet-head-info">
                <h3 className="sheet-title">{selectedProduct.name}</h3>
                <div className="sheet-subtitle">{selectedProduct.nameEn} • {selectedProduct.categoryName}</div>
                <p className="sheet-desc">{selectedProduct.desc}</p>
              </div>
            </div>

            <div className="sheet-options-block">
              <div className="sheet-option-title">نوع الحليب المفضل:</div>
              <div className="sheet-chips-group">
                {['كامل الدسم', 'خالي الدسم', 'حليب شوفان', 'حليب لوز'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`sheet-chip ${selectedMilk === m ? 'selected' : ''}`}
                    onClick={() => setSelectedMilk(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="sheet-options-block">
              <div className="sheet-option-title">درجة الحلاوة:</div>
              <div className="sheet-chips-group">
                {['بدون سكر', 'سكر خفيف', 'مظبوط', 'حلو إضافي'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`sheet-chip ${selectedSweetness === s ? 'selected' : ''}`}
                    onClick={() => setSelectedSweetness(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="sheet-actions">
              <button type="button" className="btn-sheet-wa" onClick={handleOrderSingleWhatsApp}>
                <span>تأكيد والطلب عبر واتساب 💬</span>
              </button>
              <button type="button" className="btn-secondary-app" onClick={() => setSelectedProduct(null)} style={{ width: '100%' }}>
                <span>إغلاق</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Toast */}
      {toastMessage && <div className="mobile-toast show">{toastMessage}</div>}

      {/* Bottom Navigation */}
      <nav className="bottom-nav-bar" aria-label="شريط التنقل الرئيسي">
        <div className={`nav-tab-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <span className="nav-tab-icon">🏠</span>
          <span className="nav-tab-label">الرئيسية</span>
        </div>
        <div className={`nav-tab-item ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => setActiveTab('menu')}>
          <span className="nav-tab-icon">☕</span>
          <span className="nav-tab-label">المنيو</span>
        </div>
        <div className={`nav-tab-item ${activeTab === 'offers' ? 'active' : ''}`} onClick={() => setActiveTab('offers')}>
          <span className="nav-tab-icon">🏷️</span>
          <span className="nav-tab-label">العروض</span>
        </div>
        <div className={`nav-tab-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <span className="nav-tab-icon">👤</span>
          <span className="nav-tab-label">حسابي والفرع</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
