import './style.css';
import { company, products, whatsappNumber } from './data/products.js';

document.querySelectorAll('[data-company]').forEach(el => el.textContent = company.name);
document.querySelectorAll('[data-email]').forEach(el => el.textContent = company.email);
document.querySelectorAll('[data-address]').forEach(el => el.textContent = company.address);
document.querySelectorAll('[data-about]').forEach(el => el.textContent = company.about);
document.title = `${company.name} | Solusi Pendidikan & Teknologi`;
document.getElementById('year').textContent = new Date().getFullYear();

const waUrl = (message = 'Halo, saya ingin bertanya tentang produk dan layanan Anda.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-wa]').forEach(el => el.href = waUrl());

const productGrid = document.getElementById('product-grid');
function renderProducts(filter = 'Semua') {
  const filtered = filter === 'Semua' ? products : products.filter(p => p.category === filter);
  productGrid.innerHTML = filtered.map((p, i) => `
    <article class="product-card reveal" style="--delay:${i * 60}ms">
      <div class="product-art art-${p.art}">
        <span class="product-category">${p.category}</span>
        <div class="product-illustration">${p.symbol}</div>
        <span class="art-caption">${p.artLabel}</span>
      </div>
      <div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div>
      <div class="product-bottom"><span class="price-label">Harga penawaran</span><button class="inquiry-btn" data-product="${p.name}" aria-label="Tanyakan ${p.name}">↗</button></div></div>
    </article>`).join('');
  productGrid.querySelectorAll('[data-product]').forEach(btn => btn.addEventListener('click', () => {
    window.open(waUrl(`Halo, saya ingin meminta informasi harga dan ketersediaan: ${btn.dataset.product}. Mohon informasinya.`,), '_blank', 'noopener');
  }));
  observeReveals();
}
document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filter-btn.active')?.classList.remove('active');
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
}));
renderProducts();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    `Halo ${company.name}, saya ingin meminta penawaran.`,
    `Nama/Instansi: ${form.get('name')}`,
    `Nomor telepon: ${form.get('phone')}`,
    `Jenis kebutuhan: ${form.get('service')}`,
    `Detail kebutuhan: ${form.get('message')}`
  ].join('\n');
  window.open(waUrl(message), '_blank', 'noopener');
});

function observeReveals() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}
observeReveals();
