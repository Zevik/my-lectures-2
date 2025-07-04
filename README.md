# My Lectures - אתר הרצאות אישי 🎓

אתר אישי אלגנטי להצגת הרצאות ופרופיל מקצועי, עם דמות צפה אינטראקטיבית המציגה ציטוטי חכמה.

## ✨ תכונות עיקריות

### 🎭 דמות צפה אינטראקטיבית
- דמות אנימטורית הנעה ברקע כמו נחש
- 100 ציטוטי חכמה אמיתיים בעברית מפילוסופים וחכמים מפורסמים
- 15 אנימציות עדינות ומרהיבות המתחלפות בכל לחיצה
- הצגת שם המחבר עבור כל ציטוט

### 🎨 עיצוב מודרני
- עיצוב נקי ומודרני עם Tailwind CSS
- אנימציות חלקות עם Framer Motion
- רספונסיבי למכשירים שונים
- אפקטים ויזואליים מתקדמים

### 📚 ניהול תוכן
- סקציית הרצאות מסודרת
- מידע אישי ופרופיל מקצועי
- פרטי יצירת קשר

## 🛠️ טכנולוגיות

- **React 18** + **TypeScript** - המסגרת הראשית
- **Vite** - כלי פיתוח מהיר ומודרני
- **Tailwind CSS** - עיצוב מתקדם ורספונסיבי
- **Framer Motion** - אנימציות מתקדמות
- **ESLint** + **Prettier** - איכות קוד

## 🚀 התקנה והרצה

### דרישות מוקדמות
- Node.js (גרסה 16 ומעלה)
- npm או yarn

### שלבי התקנה

1. **שכפול הפרויקט:**
```bash
git clone https://github.com/[your-username]/my-lectures-2.git
cd my-lectures-2
```

2. **התקנת תלויות:**
```bash
npm install
```

3. **הרצת שרת פיתוח:**
```bash
npm run dev
```

4. **פתיחת הדפדפן:**
   הפרויקט יהיה זמין בכתובת: `http://localhost:5173`

## 📁 מבנה הפרויקט

```
my-lectures-2/
├── public/                 # קבצים סטטיים
│   ├── click-on-me.png    # תמונות הדמות הצפה
│   └── my-image.jpg       # תמונת פרופיל
├── src/
│   ├── components/        # רכיבי React
│   │   ├── FloatingProfile.tsx    # הדמות הצפה + ציטוטי חכמה
│   │   ├── Hero.tsx              # סקציית הפתיחה
│   │   ├── LecturesSection.tsx   # סקציית הרצאות
│   │   ├── AboutSection.tsx      # סקציית מידע אישי
│   │   ├── ContactSection.tsx    # פרטי יצירת קשר
│   │   └── ...
│   ├── App.tsx           # הרכיב הראשי
│   ├── main.tsx          # נקודת הכניסה
│   └── index.css         # עיצובים גלובליים
├── package.json          # הגדרות הפרויקט
├── tailwind.config.js    # הגדרות Tailwind
├── vite.config.ts        # הגדרות Vite
└── README.md            # הקובץ הזה
```

## 🎯 התכונות המיוחדות

### ציטוטי החכמה
הפרויקט כולל 100 ציטוטים אמיתיים מ:
- פילוסופים קלאסיים (אפלטון, אריסטו, סוקרטס)
- חכמי ישראל (חז"ל, רבי נחמן מברסלב, בן סירא)
- הוגי דעת מודרניים (איינשטיין, ניטשה, מונטן)
- אמנים ויצירתיים מפורסמים

### 15 האנימציות
כל לחיצה על הדמות הצפה מפעילה אחת מ-15 אנימציות שונות:
1. קפיצה ופרקדן עם סיבוב
2. גלישה מצדדים עם סיבוב
3. הופעה מלמעלה עם זום
4. פיצוץ מהמרכז עם סיבוב מלא
5. גלי אלסטיות אופקיים
6. טיפוח מתחת עם סיבוב תלת-ממדי
7. סיבוב אלגנטי עם זום
8. זום מהפינה באלכסון
9. נדנדה תלת-ממדית
10. גלישה מלמטה עם הטיה
11. פולס עדין עם קנה מידה מדרגתי
12. פריחה כמו פרח מלמטה
13. גלישה אלכסונית עם סיבוב
14. נשימה רכה עם קנה מידה מדרגתי
15. סיבוב תלת-ממדי מלא

## 🔧 פקודות נפוצות

```bash
# פיתוח
npm run dev

# בנייה לפרודקשן
npm run build

# תצוגה מקדימה של הבנייה
npm run preview

# בדיקת איכות קוד
npm run lint
```

## 🎨 התאמה אישית

### עריכת הציטוטים
לעריכת הציטוטים, פתח את `src/components/FloatingProfile.tsx` וערך את המערך `wisdomQuotes`.

### הוספת אנימציות
להוספת אנימציות חדשות, ערך את הפונקציה `getQuoteAnimation()` באותו קובץ.

### שינוי עיצוב
העיצוב מתבסס על Tailwind CSS. ערך את הקלאסים ב-JSX או הוסף עיצובים חדשים ב-`src/index.css`.

## 📱 תמיכה בדפדפנים

- Chrome (מומלץ)
- Firefox
- Safari
- Edge

## 🤝 תרומה לפרויקט

1. צור Fork של הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מופץ תחת רישיון MIT. ראה את הקובץ `LICENSE` לפרטים נוספים.

## 📞 יצירת קשר

עבור שאלות או הצעות לשיפור, אנא צור issue בפרויקט או צור קשר דרך האתר.

---

**נוצר עם ❤️ ו-React + TypeScript**
