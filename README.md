# progressBar_GSlides
在Google Slide中產生進度條的App Script

以下教學來自於官方影片：
[Making progress (bars) with Slides Add-ons (The G Suite Dev Show)](https://www.youtube.com/watch?v=mKuINIBrR1g&feature=emb_title)

## 操作說明
1. 用`slide.new`新增一個google 簡報
2. 選擇`工具`→`指令碼編輯器`
 ![](https://i.imgur.com/P8ytv5E.png)

4. 刪除所有預設文字，把`程式碼.gs`名稱改為`progress.gs`
5. 並把專案名稱改名為`產生進度條`
![](https://i.imgur.com/nIcPkAk.png)


## 發布
1. 從`progressBar_GSlides.gs`複制代碼則上，記得把原本預設的代碼都刪掉
2. 接著選擇`發布`→`部署為網頁應用程式`

![](https://i.imgur.com/WKsebG5.png)

3. 選擇`核對權限`、`選擇帳戶`、如果有跳出不安全警示，選`進階`→`前往`，最後選`允許`
![](https://i.imgur.com/CeN4huQ.png)
![](https://i.imgur.com/adq6Npy.png)
![](https://i.imgur.com/OWWfCap.png)
![](https://i.imgur.com/27JO1FD.png)

## 執行
1. 在`選取函式`中選擇onOpen，然後按一下左邊的播放符號，執行這個function
![](https://i.imgur.com/OTayLAe.png)
2. 回到slides，在`外掛程式`中就可以看到我們的函數了

![](https://i.imgur.com/sR7Dxru.png)

3. 完成

![](https://i.imgur.com/E1X7tNG.png)

## 如何修改顏色
1. 選擇一個條，按一下油漆桶工具，我將顏色預設為`輔色6`
![](https://i.imgur.com/YVTZV8L.png)

2. 按一下編輯背景主題的icon，會在右欄選`選擇主題顏色`→`輔色6`
![](https://i.imgur.com/qKJu5KU.png)
3. 就可以自行更改顏色了
![](https://i.imgur.com/903mmdj.png)
