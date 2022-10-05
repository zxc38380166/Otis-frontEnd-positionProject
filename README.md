執行專案步驟

1. 熱更新模式
  - npm run dev 
2. 打包
  - npm run build
3. 操作說明
  - 進入首頁導向至書本列表
      書本列表
      - 鼠標hover呈顯陰影效果
      - 點及個別書本, 導向至書本詳情頁
      - 右上角有新增的icon點擊出現新增彈窗, 表單內驗證為作者與標題為必填
      書本詳情頁
      - 頁面呈現書本詳情
      - 點擊右上角編輯icon, 出現編輯彈窗, 表單內驗證為作者與標題為必填
      - 點擊右上角刪除icon, 出現刪除確認彈窗
      - 點擊左上角返回icon, 導向書本列表頁

專案的架構、邏輯說明
  - layout採用header與main排版。
  - 路由採用進入首頁後重定向至books頁面。
  - api 在 src/api/index.js 做為統一進出點管理。
  - 增, 刪, 改使用的彈窗皆為個別彈窗。
  - 因使用ui框架搭配css框架, 因此在多數情境使用inline style, 將css關注點集中在一處。
  - 元件統一存放在views路徑, 以router name 為命名。

使用的套件
  - Element Plus 題目要求實做card當下想到的就是ui框架且剛好符合vue3的要求。
  - Tailwind Css 與bootstrap一樣為css框架, 兩者較大差異在於客製化, 相比bootstrap必須修改套件sass, Tailwind的客製化容易些。

遇到的困難、問題，以及解決的方法
  - header需要放入icon原本寫在layout.vue中後來發現嵌套路由在main中觸發若放在header會有傳值的問題, 解決方案為放在BookDetail.vue中再用相對定位調整位置。
  - Tailwind Css 為第一次使用較陌生, 解決方案為投入時間看文檔熟悉語法。