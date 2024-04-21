// sw.js  
  
self.addEventListener('install', function(event) {  
    event.waitUntil(  
      caches.open('my-cache').then(function(cache) {  
        return cache.addAll([  
          '/',  // 根路径，确保页面本身被缓存  
          '/index.html',  // 首页  
          '/styles.css',  // 样式表  
          '/script.js',  // JavaScript 文件  
          // 更多需要缓存的资源...  
        ]);  
      })  
    );  
  });  
    
  self.addEventListener('fetch', function(event) {  
    event.respondWith(  
      caches.match(event.request)  
        .then(function(response) {  
          if (response) {  
            return response;  // 如果找到缓存，就返回缓存  
          }  
          return fetch(event.request);  // 否则，从网络获取  
        }  
      )  
    );  
  });