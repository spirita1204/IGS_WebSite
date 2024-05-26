專案架構圖

```java
src
├── Components // 組件
    ├── [Wrapper]
        └── ViewPortWrapper.jsx // 重複Wrapper拉出共用
    ├── Navbar.jsx 
    ├── Sidebar.jsx
    └── ToDiListBtn.jsx // 代辦事項組件
├── Css 樣式
		├── NavBar.css  
		├── SideBar.css
		└── ToDoListBtn.css
├── i18n // 多語系設定檔
		└── i18n.js 
├── locales // 多語系
    ├── [zh-TW] // 根據語系做切包
        ├── common.json // 共用組件多語系
        └── toDoList.json	// 代辦事項多語系
    └── [zh-US]
        ├── common.json
        └── toDoList.json	
├── Pages // 畫面
		├── App.jsx // 共用畫面 路由
		└── ToDoList.jsx // 代辦事項畫面     
└── index.js // 根結點(進入點)
```

建置 啟動 build

```java
npx create-react-app igs_simple_website_project
npm start
npm run build
```

頁面路由(頁面錯誤url redirect) 避免無效訪問

```java
npm i react-router-dom

<Routes>
    {/* 當初使載入 重定向到ToDoList */}
    <Route path="/" element={<Navigate to="/ToDoList" />} />
    {/* 設定路由 */}
    <Route path='/ToDoList' element={<ToDoList />}></Route>
    {/* 匹配到未定義的路徑時，自動重定向 */}
    <Route path="*" element={<Navigate to="/" />}/>
    ...
    ...
</Routes>
```

多語系

```java
npm i react-i18next i18next
npm i i18next-browser-languagedetector

const { t } = useTranslation('toDoList');
t('COMPLETED')// 完成
```

uuid 作用於分辨每項代辦事項

```java
npm i uuid

 addToDoList({
     title: inputValue,
     checked: false,
     **uuid: uuidv4(),**
     createdAt: new Date().toLocaleString(),
     date: new Date().toString()
 });
```

icon  控制排序方向

```java
npm i react-icons
import { HiArrowDown, HiArrowUp  } from "react-icons/hi";

{/* 控制箭頭方向 作用排序(新增時間) */}
{dir === -1 && <HiArrowDown />}
```

LocalStorage 無後端 暫且keep資料在前端

```java
localStorage.setItem('key', 'value')：塞資料進去
localStorage.getItem('key')：取得資料這個key的資料
localStorage.key()：取得指定位置的key
localStorage.removeItem('key')：移除指定key的資料
localStorage.clear()：清除所有localStorage的資料
```

addLstener  “Enter” 鍵自動新增 增加使用體驗

```java
  useEffect(() => {
    // 監聽enter時自動新增代辦事項
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {// Enter鍵觸發
        addToDoList({ title: inputValue, checked: false, uuid: uuidv4() });
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    // 移除監聽事件
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [addToDoList, inputValue]);

```

雲端部屬 Render.com(free  mode startup may delay requests by 50 seconds)

```java
https://igs-website.onrender.com
```
