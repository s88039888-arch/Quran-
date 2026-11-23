const V='sakina-v1', SHELL=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request, u=new URL(r.url);
  if(r.method!=='GET'||u.hostname==='api.alquran.cloud') return;
  const ok=u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!ok) return;
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{ if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));} return res; }).catch(()=>hit||caches.match('./index.html'));
    return hit||net;
  }));
});
