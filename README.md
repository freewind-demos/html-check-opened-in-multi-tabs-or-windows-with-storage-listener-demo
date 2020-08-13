Html Check Opened in Multi Tabs or Windows with Storage Listener Demo
=====================

巧妙利用了storage的listener来判断某个网页是否在多个tab中被打开。

1. 简单做法，可以在第一个tab中提醒有别的tab打开
2. 本demo中的做法，是通过再次向storage中写入，在新tab中提醒

```
open index.html
```

You will see `Hello, World!` on page.
