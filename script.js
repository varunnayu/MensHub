/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const PRODS = [
  {id:1,brand:'DRIP',name:'Structured Oxford Shirt',price:2499,old:3999,cat:'tops',badge:'hot',rating:5,
   img:'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600&q=80',
   colors:['#f5f5f0','#2a2a2a','#8B8B8B'],strip:'linear-gradient(90deg,#FF6B35,#FF3E9D)',
   desc:'Crafted from premium 100% cotton oxford weave. Features a structured collar, chest pocket and a relaxed yet tailored silhouette perfect for both casual and semi-formal occasions.',
   tags:['Cotton','Slim Fit','Oxford Weave','Machine Washable']},
  {id:2,brand:'ESSENTIAL',name:'Slim Tapered Chinos',price:3299,old:null,cat:'bottoms',badge:'new',rating:4,
   img:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
   colors:['#2a2a2a','#1a1a1a'],strip:'linear-gradient(90deg,#00D4AA,#3B82F6)',
   desc:'Modern slim taper fit chinos made from a breathable cotton-twill blend. Versatile enough for the office or the weekend.',
   tags:['Cotton Twill','Slim Fit','Stretch','All Season']},
  {id:3,brand:'DRIP',name:'Wool Blend Overcoat',price:8999,old:11999,cat:'outerwear',badge:'sale',rating:5,
   img:'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80',
   colors:['#1a1a1a','#4a4a4a'],strip:'linear-gradient(90deg,#7C3AED,#EC4899)',
   desc:'A statement overcoat in a luxurious wool-polyester blend. Features a clean lapel, single-breasted silhouette and full lining for exceptional warmth without bulk.',
   tags:['Wool Blend','Full Lining','Water Resistant','Dry Clean']},
  {id:4,brand:'NOIR',name:'Ribbed Crewneck Sweater',price:2799,old:null,cat:'tops',badge:'new',rating:4,
   img:'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80',
   colors:['#f5f5f0','#1a1a1a'],strip:'linear-gradient(90deg,#FFD23F,#FF6B35)',
   desc:'A relaxed crewneck sweater with pronounced ribbed texture and dropped shoulders. Made from a soft cotton-acrylic blend for everyday warmth.',
   tags:['Ribbed Knit','Relaxed Fit','Soft Acrylic','Machine Washable']},
  {id:5,brand:'DRIP',name:'Cargo Utility Pants',price:3799,old:4799,cat:'bottoms',badge:'sale',rating:4,
   img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80',
   colors:['#2a2a2a','#888'],strip:'linear-gradient(90deg,#00D4AA,#7C3AED)',
   desc:'Six-pocket cargo pants with zip closures and adjustable drawstring at the ankle. Durable ripstop fabric that holds up through heavy use.',
   tags:['Ripstop Fabric','6 Pockets','Relaxed Fit','Adjustable Hem']},
  {id:6,brand:'ESSENTIAL',name:'Structured Blazer',price:6999,old:null,cat:'outerwear',badge:null,rating:5,
   img:'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80',
   colors:['#1a1a1a','#f5f5f0'],strip:'linear-gradient(90deg,#3B82F6,#7C3AED)',
   desc:'A modern single-breasted blazer with a structured shoulder and slim lapel. Tailored in a wrinkle-resistant polyester-viscose blend, perfect for work or evening wear.',
   tags:['Structured Shoulder','Single Breasted','Wrinkle Resistant','Slim Fit']},
  {id:7,brand:'DRIP',name:'Canvas Tote Bag',price:1499,old:null,cat:'accessories',badge:null,rating:4,
   img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
   colors:['#1a1a1a','#f5f5f0'],strip:'linear-gradient(90deg,#FF3E9D,#FFD23F)',
   desc:'Heavy-duty 14oz canvas tote with reinforced handles and an interior zip pocket. The perfect everyday carry.',
   tags:['14oz Canvas','Reinforced Handles','Interior Pocket','Unisex']},
  {id:8,brand:'NOIR',name:'Premium Leather Belt',price:1299,old:1799,cat:'accessories',badge:'sale',rating:5,
   img:'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80',
   colors:['#1a1a1a','#888'],strip:'linear-gradient(90deg,#FFD23F,#FF6B35)',
   desc:'Full-grain leather belt with a brushed silver roller buckle. Hand-burnished edges for a refined finish.',
   tags:['Full-Grain Leather','Roller Buckle','Hand-Burnished','Width: 35mm']},
  {id:9,brand:'ESSENTIAL',name:'Slim Fit Linen Shirt',price:1899,old:null,cat:'tops',badge:null,rating:4,
   img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
   colors:['#f5f5f0','#888','#2a2a2a'],strip:'linear-gradient(90deg,#00D4AA,#3B82F6)',
   desc:'Pure linen shirt with a point collar, chest pocket and mother-of-pearl buttons. Lightweight and breathable for warm weather.',
   tags:['100% Linen','Slim Fit','Breathable','Chest Pocket']},
  {id:10,brand:'DRIP',name:'Wide Leg Denim',price:3499,old:null,cat:'bottoms',badge:'new',rating:5,
   img:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
   colors:['#2a2a2a','#4a4a4a'],strip:'linear-gradient(90deg,#3B82F6,#FF3E9D)',
   desc:'Vintage-washed wide leg denim in a 12oz selvedge-inspired weave. High-rise waist with relaxed thigh and straight wide leg opening.',
   tags:['12oz Denim','Wide Leg','High Rise','Vintage Wash']},
  {id:11,brand:'NOIR',name:'Technical Shell Jacket',price:7499,old:9999,cat:'outerwear',badge:'sale',rating:5,
   img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
   colors:['#0a0a0a','#888'],strip:'linear-gradient(90deg,#7C3AED,#3B82F6)',
   desc:'3-layer bonded shell jacket with DWR coating, sealed seams and YKK zippers. Packable into its own chest pocket.',
   tags:['3-Layer Shell','DWR Coated','Sealed Seams','Packable']},
  {id:12,brand:'DRIP',name:'Knit Beanie',price:799,old:null,cat:'accessories',badge:null,rating:4,
   img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
   colors:['#1a1a1a','#f5f5f0'],strip:'linear-gradient(90deg,#FFD23F,#FF3E9D)',
   desc:'Chunky rib-knit beanie in a merino wool blend. Features a fold-up cuff and a subtle embroidered logo.',
   tags:['Merino Blend','Ribbed Knit','Fold-Up Cuff','One Size']},
  {id:13,brand:'ESSENTIAL',name:'French Terry Hoodie',price:2999,old:null,cat:'tops',badge:'new',rating:4,
   img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
   colors:['#888','#1a1a1a'],strip:'linear-gradient(90deg,#FF6B35,#7C3AED)',
   desc:'Heavyweight 380gsm French terry hoodie with a relaxed fit, kangaroo pocket and metal drawstring tips.',
   tags:['380gsm French Terry','Relaxed Fit','Kangaroo Pocket','Drawcord Hood']},
  {id:14,brand:'DRIP',name:'Pleated Chino Trousers',price:2699,old:3299,cat:'bottoms',badge:'sale',rating:4,
   img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
   colors:['#888','#f5f5f0'],strip:'linear-gradient(90deg,#00D4AA,#FFD23F)',
   desc:'Single-pleat chinos with a relaxed high-rise waist and tapered leg. Made from a cotton-linen blend that develops character with wear.',
   tags:['Cotton-Linen','Single Pleat','High Rise','Tapered Leg']},
  {id:15,brand:'NOIR',name:'Padded Liner Vest',price:4299,old:null,cat:'outerwear',badge:null,rating:5,
   img:'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600&q=80',
   colors:['#1a1a1a','#f5f5f0'],strip:'linear-gradient(90deg,#FF3E9D,#7C3AED)',
   desc:'Lightweight padded vest with recycled 80g fill. Streamlined fit designed to be worn as a mid-layer or standalone piece.',
   tags:['Recycled Fill','80g Padding','Sleeveless','YKK Zippers']},
  {id:16,brand:'ESSENTIAL',name:'Canvas Low-Top Sneakers',price:2299,old:null,cat:'accessories',badge:'new',rating:4,
   img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
   colors:['#f5f5f0','#1a1a1a'],strip:'linear-gradient(90deg,#3B82F6,#00D4AA)',
   desc:'Classic low-top sneaker in washed canvas with a vulcanized rubber sole and leather toe cap. A wardrobe staple that gets better with age.',
   tags:['Washed Canvas','Vulcanized Sole','Leather Toe Cap','Removable Insole']},
];

const fmt = n => '₹' + n.toLocaleString('en-IN');
const SIZES = ['XS','S','M','L','XL','XXL'];

// State
let cart     = JSON.parse(localStorage.getItem('drip_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('drip_wish') || '[]');
let orders   = JSON.parse(localStorage.getItem('drip_orders') || '[]');
let user     = JSON.parse(localStorage.getItem('drip_user') || 'null');
let selSize  = '';
let selProd  = null;

/* ═══════════════════ PAGE ROUTING — see goTo() in CHECKOUT section ═══════════════════ */

/* ═══════════════════ NAV ═══════════════════ */
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mmenu').classList.toggle('open', menuOpen);
  document.getElementById('ham').classList.toggle('open', menuOpen);
}
function closeMenu() {
  menuOpen = false;
  document.getElementById('mmenu').classList.remove('open');
  document.getElementById('ham').classList.remove('open');
}
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});
function onAcc() {
  if (user) goTo('profile');
  else showLoginForm();
}

/* ═══════════════════ SIDEBAR ═══════════════════ */
function openSidebar() {
  document.getElementById('shopSide').classList.add('open');
  document.getElementById('sBack').classList.add('open');
}
function closeSidebar() {
  document.getElementById('shopSide').classList.remove('open');
  document.getElementById('sBack').classList.remove('open');
}

/* ═══════════════════ FILTERS ═══════════════════ */
function setFCat(f) {
  document.querySelectorAll('input[name="fcat"]').forEach(r => r.checked = r.value === f);
}
function updatePriceR() {
  const v = document.getElementById('priceR').value;
  document.getElementById('priceRlbl').textContent = fmt(parseInt(v));
  doFilter();
}
function getFiltered() {
  const cat   = document.querySelector('input[name="fcat"]:checked')?.value || 'all';
  const maxP  = parseInt(document.getElementById('priceR')?.value || 12000);
  const brnds = [...document.querySelectorAll('#shopSide input[type=checkbox]:checked')].map(c => c.value);
  const q     = (document.getElementById('sSearch')?.value || '').toLowerCase().trim();
  const sort  = document.getElementById('sSort')?.value || 'default';
  let list = [...PRODS];
  if (cat !== 'all') list = cat === 'sale' ? list.filter(p => p.old) : list.filter(p => p.cat === cat);
  list = list.filter(p => p.price <= maxP);
  if (brnds.length) list = list.filter(p => brnds.includes(p.brand));
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sort === 'newest')     list.sort((a,b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
  if (sort === 'rating')     list.sort((a,b) => b.rating - a.rating);
  return list;
}
function doFilter() { renderShop(); renderActiveTags(); }
function clearF() {
  document.querySelectorAll('input[name="fcat"]')[0].checked = true;
  document.getElementById('priceR').value = 12000;
  document.getElementById('priceRlbl').textContent = '₹12,000';
  document.querySelectorAll('#shopSide input[type=checkbox]').forEach(c => c.checked = false);
  document.querySelectorAll('.cswatch').forEach(c => c.classList.remove('on'));
  if (document.getElementById('sSearch')) document.getElementById('sSearch').value = '';
  if (document.getElementById('sSort')) document.getElementById('sSort').value = 'default';
  doFilter(); toast('Filters cleared', 'info');
}
function renderActiveTags() {
  const cat   = document.querySelector('input[name="fcat"]:checked')?.value || 'all';
  const brnds = [...document.querySelectorAll('#shopSide input[type=checkbox]:checked')].map(c => c.value);
  const q     = document.getElementById('sSearch')?.value || '';
  let tags = [];
  if (cat !== 'all') tags.push({l: cat.charAt(0).toUpperCase() + cat.slice(1), k: 'cat'});
  brnds.forEach(b => tags.push({l: b, k: 'b:' + b}));
  if (q) tags.push({l: `"${q}"`, k: 'q'});
  const el = document.getElementById('aTags');
  if (el) el.innerHTML = tags.map(t => `<div class="atag">${t.l}<button onclick="removeTag('${t.k}')">×</button></div>`).join('');
}
function removeTag(k) {
  if (k === 'cat') document.querySelectorAll('input[name="fcat"]')[0].checked = true;
  else if (k.startsWith('b:')) document.querySelectorAll('#shopSide input[type=checkbox]').forEach(c => { if (c.value === k.slice(2)) c.checked = false; });
  else if (k === 'q' && document.getElementById('sSearch')) document.getElementById('sSearch').value = '';
  doFilter();
}
function setV(v) {
  document.getElementById('gvb').classList.toggle('on', v === 'grid');
  document.getElementById('lvb').classList.toggle('on', v === 'list');
  document.getElementById('shopGrid').style.gridTemplateColumns = v === 'list' ? '1fr' : '';
  renderShop();
}

/* ═══════════════════ PRODUCT CARD ═══════════════════ */
function mkCard(p) {
  const bMap = {new:'pb-new', sale:'pb-sale', hot:'pb-hot'};
  const bLbl = {new:'New', sale:'Sale', hot:'Hot'};
  const badge = p.badge ? `<div class="pbadge ${bMap[p.badge]}">${bLbl[p.badge]}</div>` : '';
  const disc = p.old ? Math.round((1 - p.price/p.old)*100) : 0;
  const wished = wishlist.includes(p.id);
  return `
  <div class="pcard" onclick="openPdp(${p.id})" style="cursor:pointer">
    <div class="pcard-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div class="pcard-img-overlay"></div>
      ${badge}
      <div class="pcard-actions">
        <button class="padd" onclick="event.stopPropagation();quickAdd(${p.id})">+ Quick Add</button>
        <button class="pwish ${wished ? 'on' : ''}" onclick="event.stopPropagation();toggleWish(${p.id},this)">
          <svg width="15" height="15" fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
    </div>
    <div class="pcard-bar" style="background:${p.strip}"></div>
    <div class="pcard-body">
      <div class="pbrand">${p.brand}</div>
      <div class="pname">${p.name}</div>
      <div class="pfoot">
        <div class="pprice">${p.old ? `<span class="pold">${fmt(p.old)}</span>` : ''}${fmt(p.price)}${disc > 0 ? ` <span class="pdiscount">(${disc}% off)</span>` : ''}</div>
        <div><span class="pstars">${'★'.repeat(p.rating) + '☆'.repeat(5-p.rating)}</span><span class="pcount">(${p.rating*40+60})</span></div>
      </div>
    </div>
  </div>`;
}

function renderHome() {
  const g = document.getElementById('homeGrid');
  if (!g) return;
  g.innerHTML = PRODS.filter(p => p.badge === 'hot' || p.rating === 5).slice(0, 8).map(mkCard).join('');
}
function renderShop() {
  const list = getFiltered();
  const rc = document.getElementById('rCount');
  if (rc) rc.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
  const g = document.getElementById('shopGrid');
  if (!g) return;
  g.innerHTML = list.length ? list.map(mkCard).join('') :
    `<div class="no-res"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>No products found. Try adjusting your filters.</p></div>`;
}

/* ═══════════════════ PRODUCT DETAIL MODAL ═══════════════════ */
function openPdp(id) {
  selProd = PRODS.find(p => p.id === id);
  if (!selProd) return;
  selSize = '';
  const p = selProd;
  const save = p.old ? p.old - p.price : 0;
  const disc = p.old ? Math.round((1 - p.price/p.old)*100) : 0;
  const bMap = {new:'pb-new', sale:'pb-sale', hot:'pb-hot'};
  const bLbl = {new:'New', sale:'Sale', hot:'Hot'};
  const badge = p.badge ? `<div class="pdp-badge ${bMap[p.badge]}" style="z-index:5">${bLbl[p.badge]}</div>` : '';
  const wished = wishlist.includes(p.id);

  document.getElementById('pdpBox').innerHTML = `
    <button class="pdp-modal-close" onclick="closePdp()">✕</button>
    <div class="pdp-modal-img">
      <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block"/>
      ${badge}
    </div>
    <div class="pdp-modal-body">
      <div class="pdp-brand">${p.brand}</div>
      <div class="pdp-name">${p.name}</div>
      <div class="pdp-rating-row">
        <span class="pdp-stars">${'★'.repeat(p.rating) + '☆'.repeat(5-p.rating)}</span>
        <span class="pdp-rcount">${p.rating * 40 + 60} reviews</span>
      </div>
      <div class="pdp-price-row">
        <div class="pdp-price">${fmt(p.price)}</div>
        ${p.old ? `<div class="pdp-old">${fmt(p.old)}</div><div class="pdp-disc">${disc}% off</div>` : ''}
      </div>
      ${save > 0 ? `<div style="font-size:.78rem;color:var(--cyan);font-weight:500">✓ You save ${fmt(save)} on this item</div>` : ''}
      <div class="pdp-div"></div>
      <div>
        <div class="pdp-label" style="margin-bottom:10px">Available Colors</div>
        <div class="pdp-swatches">
          ${p.colors.map((c,i) => `<div class="pdswatch ${i===0?'on':''}" style="background:${c};${c==='#f5f5f0'?'border:2px solid #555':''}" onclick="this.parentElement.querySelectorAll('.pdswatch').forEach(x=>x.classList.remove('on'));this.classList.add('on')"></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="pdp-label">Select Size <span id="selSzLbl" style="color:var(--cyan);font-size:.72rem;font-weight:500;text-transform:none;letter-spacing:0">— choose one</span></div>
        <div class="pdp-sizes" id="pdpSizes">
          ${SIZES.map(s => `<button class="szbtn" onclick="pickSize('${s}')">${s}</button>`).join('')}
        </div>
      </div>
      <div class="pdp-actions">
        <button class="pdp-add" onclick="addFromPdp()">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Add to Cart
        </button>
        <button class="pdp-wish ${wished ? 'on' : ''}" id="pdpWishBtn" onclick="toggleWish(${p.id}, document.getElementById('pdpWishBtn'))" style="${wished ? 'background:rgba(255,62,157,.12);border-color:var(--pink);color:var(--pink)' : ''}">
          <svg width="18" height="18" fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
      <div class="pdp-div"></div>
      <div class="pdp-desc-sec">
        <div class="pdp-desc-title">Product Description</div>
        <div class="pdp-desc-text">${p.desc}</div>
        <div class="pdp-tags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
      </div>
      <div class="pdp-div"></div>
      <div class="pdp-perks">
        <div class="pperk"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/></svg>Free shipping on orders ₹999+</div>
        <div class="pperk"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>Free returns within 30 days</div>
        <div class="pperk"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>100% secure checkout</div>
      </div>
    </div>`;

  const ov = document.getElementById('pdpOv');
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
  ov.scrollTop = 0;
}

function closePdp(e) {
  if (e && e.target !== document.getElementById('pdpOv') && e.type !== 'click') return;
  if (e && e.type === 'click' && e.target !== document.getElementById('pdpOv') && !e.currentTarget?.classList?.contains('pdp-modal-close')) return;
  document.getElementById('pdpOv').classList.remove('open');
  document.body.style.overflow = '';
}
function pickSize(s) {
  selSize = s;
  document.querySelectorAll('#pdpSizes .szbtn').forEach(b => b.classList.toggle('on', b.textContent === s));
  const l = document.getElementById('selSzLbl');
  if (l) l.textContent = `— ${s} selected`;
}
function addFromPdp() {
  if (!selSize) { toast('Please select a size first', 'error'); return; }
  addToCart(selProd.id, selSize);
  document.getElementById('pdpOv').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════ CART ═══════════════════ */
function saveCart()    { localStorage.setItem('drip_cart', JSON.stringify(cart)); }
function saveWish()    { localStorage.setItem('drip_wish', JSON.stringify(wishlist)); }
function saveOrders()  { localStorage.setItem('drip_orders', JSON.stringify(orders)); }

function syncBadge() {
  const n = cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById('cartDot').textContent = n;
  const cb = document.getElementById('cartPageBadge');
  if (cb) cb.textContent = n;
  // bump animation
  const dot = document.getElementById('cartDot');
  dot.style.transform = 'scale(1.5)';
  setTimeout(() => dot.style.transform = '', 250);
}

function addToCart(id, size) {
  const p = PRODS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id && x.size === size);
  if (ex) ex.qty++;
  else cart.push({id, name:p.name, brand:p.brand, price:p.price, old:p.old, size, qty:1, img:p.img});
  saveCart(); syncBadge();
  toast(`${p.name} added to bag`, 'success');
}
function quickAdd(id) { addToCart(id, 'M'); }

function toggleWish(id, btn) {
  const p = PRODS.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    toast(`Removed from wishlist`, 'info');
  } else {
    wishlist.push(id);
    toast(`${p.name} saved to wishlist`, 'success');
  }
  saveWish();
  if (btn) {
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', wishlist.includes(id) ? 'currentColor' : 'none');
    btn.classList.toggle('on', wishlist.includes(id));
    if (wishlist.includes(id)) {
      btn.style.background = 'rgba(255,62,157,.12)';
      btn.style.borderColor = 'var(--pink)';
      btn.style.color = 'var(--pink)';
    } else {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }
  }
}

function changeQty(id, size, d) {
  const item = cart.find(x => x.id === id && x.size === size);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeItem(id, size);
  else { saveCart(); syncBadge(); renderCart(); }
}
function removeItem(id, size) {
  cart = cart.filter(x => !(x.id === id && x.size === size));
  saveCart(); syncBadge(); renderCart();
}

function renderCart() {
  syncBadge();
  const main = document.getElementById('cartMain');
  const summ = document.getElementById('cartSumm');
  if (!main) return;

  if (!cart.length) {
    main.innerHTML = `<div class="empty-bag"><div class="empty-ico">🛍️</div><div class="empty-t">Your bag is empty</div><p class="empty-s">Looks like you haven't added anything yet.</p><button class="btn btn-primary" onclick="goTo('shop')">Start Shopping →</button></div>`;
    summ.innerHTML = '';
    return;
  }

  const sub    = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const orig   = cart.reduce((s,i) => s + (i.old || i.price) * i.qty, 0);
  const saving = orig - sub;
  const ship   = sub >= 999 ? 0 : 99;
  const total  = sub + ship;

  main.innerHTML = `
    <div class="clist">
      ${cart.map(item => `
        <div class="citem">
          <img class="cthumb" src="${item.img}" alt="${item.name}"/>
          <div>
            <div class="ci-brand">${item.brand}</div>
            <div class="ci-name">${item.name}</div>
            <div class="ci-attrs">
              <span class="ci-tag">Size: ${item.size}</span>
              ${item.old ? '<span class="ci-tag" style="color:var(--pink);border-color:rgba(255,62,157,.2)">On Sale</span>' : ''}
            </div>
            <div class="qtywrap">
              <button class="qbtn" onclick="changeQty(${item.id},'${item.size}',-1)">−</button>
              <input class="qval" type="text" value="${item.qty}" readonly/>
              <button class="qbtn" onclick="changeQty(${item.id},'${item.size}',1)">+</button>
            </div>
          </div>
          <div class="ci-right">
            <div>
              <div class="ci-total">${fmt(item.price * item.qty)}</div>
              ${item.old ? `<div class="ci-old">${fmt(item.old * item.qty)}</div>` : ''}
            </div>
            <button class="ci-del" onclick="removeItem(${item.id},'${item.size}')">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
            </button>
          </div>
        </div>`).join('')}
    </div>
    <div class="coupon-box">
      <div class="clbl">Have a coupon code?</div>
      <div class="crow">
        <input class="cinp" type="text" id="couponInp" placeholder="Enter code (e.g. DRIP40)"/>
        <button class="cbtn" onclick="applyCoupon()">Apply</button>
      </div>
    </div>`;

  summ.innerHTML = `
    <div class="summ-card">
      <div class="summ-t">Price Details</div>
      ${saving > 0 ? `<div class="savings-row"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="14" height="14"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>You save ${fmt(saving)} on this order!</div>` : ''}
      <div class="srow"><span class="slbl">Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span><span class="sval">${fmt(sub)}</span></div>
      ${saving > 0 ? `<div class="srow"><span class="slbl" style="color:var(--cyan)">Discount</span><span class="sval" style="color:var(--cyan)">− ${fmt(saving)}</span></div>` : ''}
      <div class="srow"><span class="slbl">Shipping</span><span class="sval" style="color:${ship === 0 ? 'var(--cyan)' : 'inherit'}">${ship === 0 ? 'FREE' : fmt(ship)}</span></div>
      ${ship > 0 ? `<div style="font-size:.7rem;color:var(--muted);margin-top:-3px;padding-bottom:4px">Add ${fmt(999-sub)} more for free shipping</div>` : ''}
      <div class="sdiv"></div>
      <div class="stotal"><span class="stlbl">Total Amount</span><span class="stval">${fmt(total)}</span></div>
    </div>
    <div class="summ-card">
      <button class="checkout-btn" onclick="doCheckout()">Proceed to Checkout →</button>
      <button class="cont-btn" onclick="goTo('shop')">← Continue Shopping</button>
      <div class="pays">
        <span style="font-size:.67rem;color:var(--muted)">Secure:</span>
        <span class="pay-b">UPI</span><span class="pay-b">Visa</span><span class="pay-b">MC</span><span class="pay-b">GPay</span><span class="pay-b">PayTM</span>
      </div>
      <div class="tmini">
        <div class="tmini-i"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>SSL Secured Checkout</div>
        <div class="tmini-i"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>30-Day Easy Returns</div>
        <div class="tmini-i"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/></svg>Delivery in 2–5 business days</div>
      </div>
    </div>`;
}

function applyCoupon() {
  const c = (document.getElementById('couponInp')?.value || '').trim().toUpperCase();
  const m = {DRIP40:'40% discount applied!', SAVE10:'₹10 off applied!', FIRST20:'20% off applied!'};
  toast(m[c] || 'Invalid coupon code', m[c] ? 'success' : 'error');
}

function doCheckout() {
  if (!user) { showLoginForm(); toast('Please sign in to checkout', 'error'); return; }
  goTo('checkout');
}

/* ═══════════════════ CHECKOUT ═══════════════════ */

let coAddress = null;
let coPayMethod = 'upi';

function goTo(page, filter='') {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  document.querySelectorAll('.nv-link').forEach(l => l.classList.remove('active'));
  const nl = document.getElementById('nl-' + page);
  if (nl) nl.classList.add('active');
  closeMenu();
  if (page === 'home')     renderHome();
  if (page === 'shop')   { if (filter) setFCat(filter); renderShop(); }
  if (page === 'cart')     renderCart();
  if (page === 'profile')  renderProfile();
  if (page === 'checkout') renderCheckout();
}

function renderCheckout() {
  if (!user) { showLoginForm(); return; }
  // Reset to step 1
  setCoStep('address');
  renderCoSummary();
  // Pre-fill from user profile
  const fn = user.name ? user.name.split(' ')[0] : '';
  const ln = user.name ? user.name.split(' ').slice(1).join(' ') : '';
  if (document.getElementById('co_fn')) document.getElementById('co_fn').value = fn;
  if (document.getElementById('co_ln')) document.getElementById('co_ln').value = ln;
  // Show saved address chips if exists
  renderSavedAddr();
}

function renderSavedAddr() {
  const saved = JSON.parse(localStorage.getItem('drip_saved_addr') || 'null');
  const el = document.getElementById('coSavedAddr');
  if (!el) return;
  if (saved) {
    el.innerHTML = `
      <div class="saved-addr-label">Saved Addresses</div>
      <div class="saved-addr-chips">
        <div class="saved-addr-chip on" id="useSavedAddr" onclick="fillSavedAddr()">
          <span class="sac-ico">${saved.type === 'Work' ? '💼' : saved.type === 'Other' ? '📍' : '🏠'}</span>
          <div>
            <div class="sac-lbl">${saved.type} — ${saved.city}</div>
            <div class="sac-sub">${saved.a1}${saved.a2 ? ', ' + saved.a2 : ''}</div>
          </div>
        </div>
      </div>
      <div class="sac-or">or add a new address below</div>`;
    // Auto-fill form
    fillSavedAddr();
  } else {
    el.innerHTML = '';
  }
}

function fillSavedAddr() {
  const saved = JSON.parse(localStorage.getItem('drip_saved_addr') || 'null');
  if (!saved) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  set('co_fn', saved.fn); set('co_ln', saved.ln); set('co_ph', saved.ph);
  set('co_a1', saved.a1); set('co_a2', saved.a2 || '');
  set('co_city', saved.city); set('co_pin', saved.pin); set('co_state', saved.state);
  // Set addr type radio
  document.querySelectorAll('input[name="addrType"]').forEach(r => r.checked = r.value === saved.type);
}

function setCoStep(step) {
  // Update stepper UI
  const steps = ['address', 'payment', 'confirm'];
  const idx = steps.indexOf(step);
  steps.forEach((s, i) => {
    const el = document.getElementById('cstep-' + s);
    if (!el) return;
    el.classList.remove('active', 'done');
    if (i < idx) el.classList.add('done');
    else if (i === idx) el.classList.add('active');
  });
  // Update lines
  const lines = document.querySelectorAll('.cstep-line');
  lines.forEach((l, i) => l.classList.toggle('done', i < idx));
  // Show correct panel
  ['address', 'payment', 'confirm'].forEach(p => {
    const el = document.getElementById('co-panel-' + p);
    if (el) el.classList.toggle('hidden', p !== step);
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderCoSummary() {
  const panel = document.getElementById('coOrderSummaryPanel');
  if (!panel) return;
  const sub    = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const orig   = cart.reduce((s,i) => s + (i.old || i.price) * i.qty, 0);
  const saving = orig - sub;
  const ship   = sub >= 999 ? 0 : 99;
  const total  = sub + ship;
  panel.innerHTML = `
    <div class="co-summ-head">
      <span>Order Summary</span>
      <span style="font-size:.78rem;color:var(--muted2);font-family:'DM Sans',sans-serif;font-weight:400">${cart.reduce((s,i)=>s+i.qty,0)} items</span>
    </div>
    <div class="co-summ-items">
      ${cart.map(item => `
        <div class="co-summ-item">
          <img class="co-si-img" src="${item.img}" alt="${item.name}"/>
          <div class="co-si-body">
            <div class="co-si-name">${item.name}</div>
            <div class="co-si-meta">Size: ${item.size} <span class="co-si-qty">×${item.qty}</span></div>
          </div>
          <div class="co-si-price">${fmt(item.price * item.qty)}</div>
        </div>`).join('')}
    </div>
    ${saving > 0 ? `<div class="co-savings-pill"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>You're saving ${fmt(saving)} on this order!</div>` : ''}
    <div class="co-summ-totals">
      <div class="co-tot-row"><span class="co-tot-lbl">Subtotal</span><span class="co-tot-val">${fmt(sub)}</span></div>
      ${saving > 0 ? `<div class="co-tot-row"><span class="co-tot-lbl" style="color:var(--cyan)">Discount</span><span class="co-tot-val" style="color:var(--cyan)">− ${fmt(saving)}</span></div>` : ''}
      <div class="co-tot-row"><span class="co-tot-lbl">Delivery</span><span class="co-tot-val" style="color:${ship===0?'var(--cyan)':'inherit'}">${ship===0?'FREE':fmt(ship)}</span></div>
      <div class="co-tot-divider"></div>
      <div class="co-grand-total"><span class="co-gt-lbl">Total</span><span class="co-gt-val">${fmt(total)}</span></div>
    </div>
    <div class="co-secure-strip">
      <div class="co-ss-item"><svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>SSL Secured</div>
      <div class="co-ss-item"><svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>Easy Returns</div>
      <div class="co-ss-item"><svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/></svg>Fast Delivery</div>
    </div>`;
}

function coGoPayment() {
  const fn    = document.getElementById('co_fn')?.value.trim();
  const ln    = document.getElementById('co_ln')?.value.trim();
  const ph    = document.getElementById('co_ph')?.value.trim();
  const a1    = document.getElementById('co_a1')?.value.trim();
  const city  = document.getElementById('co_city')?.value.trim();
  const pin   = document.getElementById('co_pin')?.value.trim();
  const state = document.getElementById('co_state')?.value;
  if (!fn || !ph || !a1 || !city || !pin || !state) {
    toast('Please fill all required fields', 'error'); return;
  }
  if (!/^\d{6}$/.test(pin)) { toast('Enter a valid 6-digit pincode', 'error'); return; }
  if (!/^[6-9]\d{9}$/.test(ph.replace(/[\s+\-()]/g, ''))) { toast('Enter a valid Indian mobile number', 'error'); return; }

  const type = document.querySelector('input[name="addrType"]:checked')?.value || 'Home';
  coAddress = { fn, ln, ph, a1, a2: document.getElementById('co_a2')?.value.trim() || '', city, pin, state, type };

  if (document.getElementById('co_default')?.checked) {
    localStorage.setItem('drip_saved_addr', JSON.stringify(coAddress));
  }
  // Show address summary in payment panel
  const sumEl = document.getElementById('coAddrSummary');
  if (sumEl) sumEl.innerHTML = `
    <div class="addr-summ-row">
      <div class="addr-summ-ico"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
      <div style="flex:1">
        <div class="addr-summ-title">Delivering to</div>
        <div class="addr-summ-text">${fn} ${ln} • ${ph}<br>${a1}${coAddress.a2 ? ', ' + coAddress.a2 : ''}, ${city} – ${pin}, ${state}</div>
      </div>
      <button class="addr-summ-edit" onclick="coGoAddress()">Edit</button>
    </div>`;
  setCoStep('payment');
}

function coGoAddress() {
  setCoStep('address');
}

function selectPayTab(tab) {
  coPayMethod = tab;
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('on'));
  document.getElementById('ptab-' + tab)?.classList.add('on');
  document.querySelectorAll('.pay-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('ppanel-' + tab)?.classList.remove('hidden');
}

function selectUpiApp(app) {
  document.querySelectorAll('.upi-app-btn').forEach(b => b.classList.remove('on'));
  document.getElementById('uapp-' + app)?.classList.add('on');
  document.getElementById('co_upi').value = '';
  document.getElementById('upiMsg').classList.add('hidden');
}

function verifyUpi() {
  const v = document.getElementById('co_upi')?.value.trim();
  const msg = document.getElementById('upiMsg');
  if (!v || !v.includes('@')) { toast('Enter a valid UPI ID (e.g. name@upi)', 'error'); return; }
  if (msg) {
    msg.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> UPI ID verified successfully`;
    msg.classList.remove('hidden');
  }
  toast('UPI ID verified!', 'success');
}

function fmtCard(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = v.replace(/(.{4})/g, '$1  ').trim();
  const ci = document.getElementById('ci-visa');
  const cm = document.getElementById('ci-mc');
  if (ci && cm) {
    const starts = v[0];
    ci.style.opacity = starts === '4' ? '1' : '0.3';
    cm.style.opacity = (starts === '5' || starts === '2') ? '1' : '0.3';
  }
}

function fmtExpiry(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 2) v = v.slice(0, 2) + ' / ' + v.slice(2);
  input.value = v;
}

function coPlaceOrder() {
  // Validate payment
  if (coPayMethod === 'upi') {
    const upiVal = document.getElementById('co_upi')?.value.trim();
    const upiApp = document.querySelector('.upi-app-btn.on');
    if (!upiVal && !upiApp) { toast('Please enter a UPI ID or select a payment app', 'error'); return; }
  } else if (coPayMethod === 'card') {
    const num   = document.getElementById('co_cardnum')?.value.replace(/\s/g,'');
    const cname = document.getElementById('co_cname')?.value.trim();
    const exp   = document.getElementById('co_exp')?.value.trim();
    const cvv   = document.getElementById('co_cvv')?.value.trim();
    if (!num || num.length < 16) { toast('Enter a valid 16-digit card number', 'error'); return; }
    if (!cname)                   { toast('Enter cardholder name', 'error'); return; }
    if (!exp || exp.length < 7)   { toast('Enter a valid expiry date (MM / YY)', 'error'); return; }
    if (!cvv || cvv.length < 3)   { toast('Enter a valid CVV', 'error'); return; }
  } else if (coPayMethod === 'netbanking') {
    if (!document.querySelector('input[name="nbBank"]:checked')) {
      toast('Please select your bank', 'error'); return;
    }
  }
  // Show loading
  const ov = document.getElementById('payLoadingOv');
  if (ov) ov.classList.add('show');
  setTimeout(() => {
    if (ov) ov.classList.remove('show');
    placeOrderFinal();
  }, 2400);
}

function placeOrderFinal() {
  const sub    = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const ship   = sub >= 999 ? 0 : 99;
  const total  = sub + ship + (coPayMethod === 'cod' ? 49 : 0);
  const orderId = 'ORD' + Math.floor(Math.random() * 9000000 + 1000000);
  const order = {
    id: orderId,
    items: [...cart],
    total,
    address: coAddress,
    payMethod: coPayMethod,
    status: 'Processing',
    date: new Date().toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'}),
  };
  orders.unshift(order);
  saveOrders();
  cart = []; saveCart(); syncBadge();
  renderCoSummary();
  // Show confirmation
  setCoStep('confirm');
  const cc = document.getElementById('co-confirm-content');
  if (!cc) return;
  const payLabel = {upi:'UPI Payment', card:'Card Payment', netbanking:'Net Banking', cod:'Cash on Delivery'};
  cc.innerHTML = `
    <div class="co-confirm-wrap">
      <div class="co-confirm-burst">✓</div>
      <div class="co-confirm-title">Order Confirmed!</div>
      <div class="co-confirm-sub">Thank you, ${user.name.split(' ')[0]}! Your order has been successfully placed and is now being processed by our team.</div>

      <div class="co-email-alert">
        <div class="co-ea-icon">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div>
          <div class="co-ea-title">Confirmation Email Sent</div>
          <div class="co-ea-msg">A detailed order confirmation has been sent to <span class="co-ea-email">${user.email}</span>. Please check your inbox (and spam folder).</div>
        </div>
      </div>

      <div class="co-confirm-details">
        <div class="co-cd-head">
          <span class="co-cd-label">Order Details</span>
          <span class="co-cd-val">#${orderId}</span>
        </div>
        <div class="co-cd-row"><span class="co-cdl">Order Total</span><span class="co-cdv" style="color:var(--orange)">${fmt(total)}</span></div>
        <div class="co-cd-row"><span class="co-cdl">Payment Method</span><span class="co-cdv" style="color:var(--cyan)">${payLabel[coPayMethod]} ✓</span></div>
        <div class="co-cd-row"><span class="co-cdl">Delivering to</span><span class="co-cdv">${coAddress.city}, ${coAddress.state}</span></div>
        <div class="co-cd-row"><span class="co-cdl">Estimated Delivery</span><span class="co-cdv">2–5 Business Days</span></div>
      </div>

      <div class="co-track-box">
        <div class="co-track-lbl">Order Status</div>
        <div class="co-track-steps">
          <div class="co-tstep done"><div class="co-tdot">✓</div><div class="co-tlbl">Ordered</div></div>
          <div class="co-tline done"></div>
          <div class="co-tstep active"><div class="co-tdot" style="animation:pulse 1.5s infinite">⟳</div><div class="co-tlbl">Processing</div></div>
          <div class="co-tline"></div>
          <div class="co-tstep"><div class="co-tdot">→</div><div class="co-tlbl">Shipped</div></div>
          <div class="co-tline"></div>
          <div class="co-tstep"><div class="co-tdot">🏠</div><div class="co-tlbl">Delivered</div></div>
        </div>
      </div>

      <div class="co-confirm-btns">
        <button class="btn btn-primary" onclick="goTo('profile');showTab('orders')">Track My Order</button>
        <button class="btn btn-outline" onclick="goTo('shop')">Continue Shopping →</button>
      </div>
    </div>`;
}

/* ═══════════════════ PROFILE ═══════════════════ */
function renderProfile() {
  if (!user) { goTo('home'); showLoginForm(); return; }
  const initials = user.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('profAva').textContent = initials;
  document.getElementById('profName').textContent = user.name;
  document.getElementById('profEmail').textContent = user.email;
  document.getElementById('sname1').value = user.name.split(' ')[0] || '';
  document.getElementById('sname2').value = user.name.split(' ')[1] || '';
  document.getElementById('semail').value = user.email;
  document.getElementById('mobAccTxt').textContent = user.name;
  renderOrders();
  renderWishGrid();
}

function showTab(tab) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.pni').forEach(b => b.classList.remove('on'));
  document.getElementById('tab-' + tab)?.classList.add('on');
  document.getElementById('pni-' + tab)?.classList.add('on');
  if (tab === 'orders')   renderOrders();
  if (tab === 'wishlist') renderWishGrid();
}

function renderOrders() {
  const el = document.getElementById('ordersList');
  if (!el) return;
  if (!orders.length) {
    el.innerHTML = `<div class="estate"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg><h4>No orders yet</h4><p>Your orders will appear here after you checkout.</p><button class="btn btn-primary" style="font-size:.82rem;padding:10px 22px" onclick="goTo('shop')">Start Shopping</button></div>`;
    return;
  }
  const sc = {Processing:'os-proc', Shipped:'os-ship', Delivered:'os-del'};
  el.innerHTML = orders.map(o => `
    <div class="ocard">
      <div class="ocard-head">
        <div>
          <div class="oid">Order #${o.id}</div>
          <div class="odate">${o.date}</div>
        </div>
        <span class="osbadge ${sc[o.status] || 'os-proc'}">${o.status}</span>
      </div>
      <div class="ocard-body">
        <div class="oitems">${o.items.slice(0,4).map(i => `<img class="oithumb" src="${i.img}" alt="${i.name}"/>`).join('')}${o.items.length > 4 ? `<div class="oithumb" style="display:flex;align-items:center;justify-content:center;font-size:.72rem;color:var(--muted2);font-weight:600">+${o.items.length-4}</div>` : ''}</div>
        <div class="ometa">
          <div class="ometa-i">${o.items.length} item${o.items.length>1?'s':''}</div>
          <div class="ometa-i">Total: <strong>${fmt(o.total)}</strong></div>
        </div>
      </div>
    </div>`).join('');
}

function renderWishGrid() {
  const g = document.getElementById('wishGrid');
  if (!g) return;
  const items = PRODS.filter(p => wishlist.includes(p.id));
  if (!items.length) {
    g.innerHTML = `<div class="estate" style="grid-column:1/-1"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg><h4>Your wishlist is empty</h4><p>Save items you love and find them here.</p><button class="btn btn-primary" style="font-size:.82rem;padding:10px 22px" onclick="goTo('shop')">Browse Products</button></div>`;
    return;
  }
  g.innerHTML = items.map(p => `
    <div class="wcard">
      <img class="wimg" src="${p.img}" alt="${p.name}" onclick="openPdp(${p.id})" style="cursor:pointer"/>
      <div class="wbody">
        <div class="wname">${p.name}</div>
        <div class="wprice">${fmt(p.price)}</div>
        <div class="wacts">
          <button class="wadd" onclick="quickAdd(${p.id})">Add to Cart</button>
          <button class="wrem" onclick="rmWish(${p.id})">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>
          </button>
        </div>
      </div>
    </div>`).join('');
}

function rmWish(id) {
  wishlist = wishlist.filter(x => x !== id);
  saveWish(); renderWishGrid();
  toast('Removed from wishlist', 'info');
}

function saveSettings() {
  const fn = document.getElementById('sname1')?.value || '';
  const ln = document.getElementById('sname2')?.value || '';
  const em = document.getElementById('semail')?.value || '';
  if (!fn || !em) { toast('Please fill required fields', 'error'); return; }
  user.name = (fn + ' ' + ln).trim();
  user.email = em;
  localStorage.setItem('drip_user', JSON.stringify(user));
  document.getElementById('profName').textContent = user.name;
  document.getElementById('profAva').textContent = user.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  toast('Settings saved!', 'success');
}

/* ═══════════════════ AUTH ═══════════════════ */
function showLoginForm() {
  document.getElementById('authContent').innerHTML = `
    <div class="auth-logo"><span class="auth-logo-t">DRIP</span></div>
    <div class="auth-t">Welcome back</div>
    <div class="auth-s">Sign in to your account</div>
    <div class="fg"><label class="flbl">Email Address</label><input class="finp" id="li_e" type="email" placeholder="you@example.com"/></div>
    <div class="fg"><label class="flbl">Password</label><input class="finp" id="li_p" type="password" placeholder="••••••••"/></div>
    <button class="btn btn-primary" style="width:100%;padding:14px;margin-top:6px" onclick="doLogin()">Sign In →</button>
    <div class="auth-sub-link">Don't have an account? <button onclick="showRegForm()">Create one free</button></div>`;
  document.getElementById('authOv').classList.add('open');
}
function showRegForm() {
  document.getElementById('authContent').innerHTML = `
    <div class="auth-logo"><span class="auth-logo-t">DRIP</span></div>
    <div class="auth-t">Create account</div>
    <div class="auth-s">Join the DRIP community</div>
    <div class="fgrow">
      <div class="fg"><label class="flbl">First Name</label><input class="finp" id="rg_fn" type="text" placeholder="Ravi"/></div>
      <div class="fg"><label class="flbl">Last Name</label><input class="finp" id="rg_ln" type="text" placeholder="Kumar"/></div>
    </div>
    <div class="fg"><label class="flbl">Email Address</label><input class="finp" id="rg_e" type="email" placeholder="you@example.com"/></div>
    <div class="fg"><label class="flbl">Password</label><input class="finp" id="rg_p" type="password" placeholder="Min. 6 characters"/></div>
    <button class="btn btn-primary" style="width:100%;padding:14px;margin-top:6px" onclick="doRegister()">Create Account →</button>
    <div class="auth-sub-link">Already have an account? <button onclick="showLoginForm()">Sign in</button></div>`;
}
function closeAuth(e) {
  if (!e || e.target === document.getElementById('authOv'))
    document.getElementById('authOv').classList.remove('open');
}
function doLogin() {
  const e = document.getElementById('li_e')?.value;
  const p = document.getElementById('li_p')?.value;
  if (!e || !p) { toast('Please fill all fields', 'error'); return; }
  user = {email: e, name: e.split('@')[0]};
  localStorage.setItem('drip_user', JSON.stringify(user));
  closeAuth();
  document.getElementById('mobAccTxt').textContent = user.name;
  toast(`Welcome back, ${user.name}!`, 'success');
}
function doRegister() {
  const fn = document.getElementById('rg_fn')?.value;
  const ln = document.getElementById('rg_ln')?.value;
  const e  = document.getElementById('rg_e')?.value;
  const p  = document.getElementById('rg_p')?.value;
  if (!fn || !e || !p) { toast('Please fill all fields', 'error'); return; }
  user = {email: e, name: (fn + ' ' + ln).trim()};
  localStorage.setItem('drip_user', JSON.stringify(user));
  closeAuth();
  document.getElementById('mobAccTxt').textContent = user.name;
  toast(`Welcome to DRIP, ${fn}! 🎉`, 'success');
}
function doLogout() {
  user = null;
  localStorage.removeItem('drip_user');
  document.getElementById('mobAccTxt').textContent = 'My Account';
  toast('Signed out successfully', 'info');
  goTo('home');
}

/* ═══════════════════ TOAST ═══════════════════ */
function toast(msg, type='default') {
  const cols = {success:'var(--cyan)', error:'var(--red)', info:'var(--blue)', default:'var(--orange)'};
  const icons = {success:'✓', error:'✕', info:'i', default:'●'};
  const el = document.createElement('div');
  el.className = 'tst';
  el.style.borderLeftColor = cols[type] || cols.default;
  el.innerHTML = `<span class="tico" style="color:${cols[type]}">${icons[type]}</span><span>${msg}</span><button class="tclose" onclick="this.parentElement.remove()">×</button>`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 260); }, 3200);
}

/* ═══════════════════ NEWSLETTER ═══════════════════ */
function nlSub() {
  const v = document.getElementById('nlEmail')?.value;
  if (!v || !v.includes('@')) { toast('Enter a valid email', 'error'); return; }
  toast('You\'re subscribed! Welcome to the squad 💧', 'success');
  document.getElementById('nlEmail').value = '';
}

/* ═══════════════════ INIT ═══════════════════ */
renderHome();
renderShop();
syncBadge();
if (user) document.getElementById('mobAccTxt').textContent = user.name;

// ESC key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('pdpOv').classList.remove('open');
    document.getElementById('authOv').classList.remove('open');
    document.body.style.overflow = '';
  }
});