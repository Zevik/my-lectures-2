import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingProfile: React.FC = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const [headerBounds, setHeaderBounds] = useState({ width: 0, height: 0 });

  const wisdomQuotes = [
    // ציטוטי חוכמה
    { quote: "אדם אינו נולד חכם, הוא הופך לכזה", author: "מתיו ריקרד" },
    { quote: "חוכמה לא שואלת יותר כלום", author: "וולאס סטיבנס" },
    { quote: "לחכם שבאדם עוד נשאר משהו לדעת", author: "ג'ורג' סנטיאנה" },
    { quote: "אַל תִּמְנַע דִּבֵּר בָּעוֹלָם, וְאַל תַּצְפִּין אֶת חָכְמָתֶךָ", author: "בן סירא" },
    { quote: "אין בנמצא חוכמה ריקנית שבה שכלי לא יכשילני", author: "מישל דה מונטן" },
    { quote: "מרוב חוכמה אנו עלולים להיות ראויים לנזיפה", author: "מולייר" },
    { quote: "שתיקה שווה זהב... חוכמה שווה כסף", author: "אנונימי" },
    { quote: "השוטה מחפש את האושר במרחקים, החכם מטפח אותו תחת רגליו", author: "ג'יימס אופנהיים" },
    { quote: "שלושה דברים מאפיינים את החכם: קריאה, שיחה והרהורים", author: "שבליה דה מרה" },
    { quote: "הקשיים והמסתורין הכרוכים בחוכמה מורגשים רק על ידי מי שזכה להיכנס לאוהלה", author: "מישל דה מונטן" },
    { quote: "זכור נא שכל האנשים אומרים כי החוכמה היא הטוב שבדברים", author: "פיתגורס" },
    { quote: "הדרגה העליונה של החוכמה האנושית היא לדעת להתאים את עצמך לנסיבות", author: "דניאל דפו" },
    { quote: "להכיר את הזולת זו חוכמה. להכיר את עצמך זו חוכמה עליונה", author: "לאו דזה" },
    { quote: "החוכמה היא בתו של הניסיון", author: "לאונרדו דה וינצ'י" },
    { quote: "החוכמה מתחילה במחילה מסבירת פנים. אין בנמצא צדק ללא רחמים", author: "ז'ורז' קורטלין" },
    { quote: "הפשטות מהווה את החוכמה הגדולה ביותר", author: "מישל דה מונטן" },
    { quote: "החיפוש אחר חוכמה יכול להביא למסקנה שחוכמה אינה הדבר היחידי שנחוץ", author: "ליאו שטראוס" },
    { quote: "החוכמה היא להקשיב, לא לי אלא לעולם ולהודות בכך שכל הדברים הם אחד", author: "הרקליטוס" },
    { quote: "החוכמה מציבה גבולות אפילו לידע", author: "פרידריך ניטשה" },
    { quote: "חוכמה היא לשלוט בעצמך", author: "המרקיז דה וובנארג" },
    
    // ציטוטי תבונה
    { quote: "התבונה היא בת אלמוות; כל השאר הוא בן תמותה", author: "פיתגורס" },
    { quote: "לך בדרכה של התבונה", author: "זנון מקיטיון" },
    { quote: "תבונה או חבל תליה", author: "דיוגנס" },
    { quote: "התבונה היא נשק חודר יותר מאשר הברזל", author: "פילונידס" },
    { quote: "דבר אינו יכול להתבצע בפזיזות ובתבונה בעת ובעונה אחת", author: "פובליליוס סירוס" },
    { quote: "עלינו לעשות שימוש בבינתנו, ולא בתשוקותינו", author: "אפיכרמוס" },
    { quote: "התבונה האנושית היא חרב פיפיות מסוכנת, אם היא נמצאת ביד רפה", author: "מישל דה מונטן" },
    { quote: "אינטואיציה היא חלק של התבונה ושל המתמטיקה", author: "בלז פסקל" },
    { quote: "הסמכות מאלצת לציית, אך התבונה משכנעת", author: "הקרדינל רישלייה" },
    { quote: "התבונה והאהבה הן אויבות מושבעות", author: "פייר קורניי" },
    { quote: "אנשים מוגבלים על ידי רצונם העיוור יותר מאשר על ידי התבונה", author: "ברוך שפינוזה" },
    { quote: "התועלת היא חוקה של התבונה", author: "המרקיז דה וובנארג" },
    { quote: "התבונה מכווצת את החיים כפי שהמים מכווצים את הבגדים", author: "רנה בארז'אבל" },
    { quote: "התבונה היא בת הקול היחידה שניתנה לך מן השמים", author: "תומאס ג'פרסון" },
    { quote: "התבונה האנושית היא הבסיס לכל הצלחה", author: "צ'רלי צ'פלין" },
    { quote: "על התבונה להשלים את יצירתם של החושים", author: "רומן רולן" },
    { quote: "התבונה והפוליטיקה הולכות באותה דרך לעתים רחוקות", author: "סטפן צווייג" },
    { quote: "ההיסוס הוא סגולתה של התבונה", author: "אנרי דה מונטרלאן" },
    { quote: "להיות נבון משמעו לחשוד אפילו בעצמך", author: "פול לאוטו" },
    { quote: "לחשוש מן האירוניה משמעו לחשוש מן התבונה", author: "סשה גיטרי" },
    
    // ציטוטי גאונות
    { quote: "כוחה של הגאונות הוא הכוח המאסף, המחבר, המעבד והמחייה", author: "סמואל ג'ונסון" },
    { quote: "ההבדל בין גאונות לטיפשות הוא שלגאונות יש גבולות", author: "אלברט איינשטיין" },
    { quote: "גאונות ללא חינוך היא כמו זהב המצוי במכרה", author: "בנג'מין פרנקלין" },
    { quote: "הגאונות והכישרון הם באותו היחס שבין השלם וחלקו", author: "ז'אן דה לה ברייר" },
    { quote: "הגאון מתריס נגד המוסכמה ומסתכל בעצמו על הדברים", author: "סולי פרודהום" },
    { quote: "לגאונות יש משהו מהאינסטינקט של ציפורים נודדות", author: "ג'יקוב בושהארט" },
    { quote: "אם יש בך גאונות החריצות תשכללה, אם אין בך גאונות החריצות תמלא את מקומה", author: "ג'ושוע ריינולדס" },
    { quote: "כישרון פוגע במטרה שאיש אינו יכול לפגוע בה; גאונות פוגעת במטרה שאיש אינו יכול לראות אותה", author: "ארתור שופנהאואר" },
    { quote: "יש שני סוגים של גאונים. אלה שהם כמו כל אחד מאיתנו, רק הרבה יותר", author: "פול הלמוס" },
    
    // ציטוטי יצירתיות
    { quote: "דמיון הוא תחילת היצירה", author: "ג'ורג' ברנרד שו" },
    { quote: "כאשר הדברים נוגעים ליצירתיות, עדיף להיות לבד", author: "אייזק אסימוב" },
    { quote: "היה יצירתי – במחשבותיך, בתחושותיך ובכל פעולותיך", author: "ויין דייר" },
    { quote: "יצירתיות מחייבת אומץ לב", author: "אנרי מאטיס" },
    { quote: "ההזדקנות הופכת אותי ליותר יצירתי ולפחות חרד", author: "ארווין יאלום" },
    { quote: "כדי שיהיו לנו בראש מלכתחילה הרעיונות וחלקי המידע שייפגשו בתהליך היצירתי", author: "רקס יונג" },
    { quote: "האושר אינו טמון בהחזקת כסף, אלא בחדוות ההישג, והריגוש של מאמץ יצירתי", author: "פרנקלין דלאנו רוזוולט" },
    { quote: "בחיזיון הזה של חיי אנוש מה שנראה לי בעל ערך אמיתי איננו המדינה, אלא היחיד התבוני היצירתי", author: "אלברט איינשטיין" },
    { quote: "אנחנו יודעים שטיולים וסביבות לא מוכרות מעוררים יצירתיות", author: "רקס יונג" },
    { quote: "אין בנמצא דבר כה יפה כנפש עצמאית, משוחררת ובעלת יכולת עם רעיונות יצירתיים", author: "אלכסנדר קופרין" },
    { quote: "רעיונות נועזים הם כמו תנועה של כלי שחמט קדימה", author: "יוהאן וולפגנג פון גתה" },
    { quote: "מוזיקה, ארכיטקטורה, ספרות, לוחמה, פילוסופיה, מדינאות - כל אלה טבועים במין שלנו", author: "יחזקאל דרור" },
    { quote: "כל הדברים החשובים באמת – יופי, אהבה, יצירתיות, שמחה, שלווה פנימית", author: "אקהרט טולה" },
    { quote: "להיות אותנטים פירושו להפוך ליצירתיים ולתבוע בעלות על מי שאנחנו", author: "סימון דה בובואר" },
    { quote: "במשחק, ובמשחק בלבד, הילד או המבוגר מסוגלים להיות יצירתיים", author: "דונלד ויניקוט" },
    { quote: "האדם נחן בכוח יצירה והוא מסוגל ליצור עולמות", author: "יוסף דוב הלוי סולובייצ'יק" },
    
    // ציטוטי כישרון
    { quote: "כישרון טבעי, ללא השכלה, העלה תכופות יותר אנשים למרום ההצלחה", author: "מרקוס טוליוס קיקרו" },
    { quote: "כללים ועצות הם חסרי תועלת ללא כישרון טבעי", author: "קווינטיליאנוס" },
    { quote: "כישרון חבוי אינו מביא כל פרסום", author: "ארסמוס מרוטרדם" },
    { quote: "הכישרון והביטחון הם צבא שלא ינוצח", author: "ג'ורג' הרברט" },
    { quote: "לדעת להסתיר את הכישרון הוא כישרון גדול", author: "פרנסואה דה לה רושפוקו" },
    { quote: "הטבע יוצר את הכישרון והגורל מבליט אותו", author: "פרנסואה דה לה רושפוקו" },
    { quote: "כישרון מהו? מתנת אלוהים בסתר המתגלית בלא יודעים", author: "שארל לואי מונטסקייה" },
    { quote: "הרוח והגלים עומדים תמיד לצדם של הספנים המוכשרים", author: "אדוארד גיבון" },
    { quote: "לכישרון ערך מועט ביותר ללא ההזדמנויות המתאימות", author: "נפוליאון בונפרטה" },
    { quote: "הכישרון מטופח ביחידות, והאופי מעוצב במהלומות סער העולם", author: "יוהן וולפגנג פון גתה" },
    { quote: "הכישרון אינו מצוי לעיתים קרובות, השחיתות היא הכוח השולט בעולמנו", author: "אונורה דה בלזאק" },
    { quote: "כישרון בלבד אינו יכול ליצור סופר. צריך להיות אדם מאחורי הסופר", author: "אוסקר ויילד" },
    { quote: "הכישרון הגדול – על כורחו שגם פירותיו יהיו גדולים", author: "בנימין זאב הרצל" },
    { quote: "הכישרון מתמיד בעיקר במדרגה גבוהה של רצינות", author: "אמברוז בירס" },
    { quote: "לכל אדם יש כישרון בגיל 25. הקושי הוא להיות בעל כישרון בגיל 50", author: "אדגר דגה" },
    { quote: "העולם עומד תמיד בזרועות פתוחות לקראת בעלי הכישרון", author: "אוליבר ונדל הולמס" },
    { quote: "רק במידה שהכישרון מצטרף לאישיות, הנוגעת בנו בלי חציצה", author: "ברל כצנלסון" },
    { quote: "אנשים מוכשרים לעולם אינם חביבים על הבריות", author: "ג'ורג' ברנרד שו" },
    { quote: "יש צורך בכישרון מועט מאוד כדי לראות מה שמונח מתחת לאפך", author: "ויסטן יו אודן" },
    { quote: "ניכר האדם בעל הכישרון או חסר הכישרון לא רק במעשיו, אלא גם ברצונו", author: "דמוקריטוס" },
    
    // ציטוטים נוספים מהמקורות היהודיים
    { quote: "אין חכם כבעל ניסיון", author: "חז\"ל" },
    { quote: "הַחָכְמָה תָּעֹז לֶחָכָם מֵעֲשָׂרָה שַׁלִּיטִים אֲשֶׁר הָיוּ בָּעִיר", author: "ספר קהלת" },
    { quote: "השכל הוא אור גדול", author: "רבי נחמן מברסלב" },
    { quote: "זֶה עִקַּר הַחָכְמָה, שֶׁיַּשְׂכִּיל שֶׁרָחוֹק מִמֶּנּוּ הַחָכְמָה", author: "רבי נחמן מברסלב" },
    { quote: "כי עיקר האדם הוא השכל, ועל כן במקום שחושב בשכל, שם כל האדם", author: "רבי נחמן מברסלב" },
    { quote: "על ידי הכעס חכמתו מסתלקת הימנו", author: "רבי נחמן מברסלב" },
    { quote: "הערכת החוכמה משמעותה, התייחסות רצינית והשקעת מאמץ אמיתי על מנת להשיגה", author: "הרב נח וינברג" },
    
    // ציטוטים נוספים על חכמה וחיים
    { quote: "טובה חוכמה מכסף רב ויקרה היא מזהב", author: "דמוקריטוס" },
    { quote: "הניסיון הוא אבי החוכמה", author: "פתגם בלגי" },
    { quote: "דברי חכמים הם כקני סוכר שאנו מוצצים. טעמם אינו יכול להתכלות", author: "פתגם מלגשי" },
    { quote: "כפי שהטבע צייד אותנו ברגליים כדי שנוכל ללכת, כך הוא צייד אותנו בחוכמה", author: "מישל דה מונטן" },
    { quote: "החוכמה בלבד מתואמת כולה עם עצמה", author: "קיקרו" },
    { quote: "חוטב עצים בבינה מיטיב עושה מרב־כוח", author: "הומרוס" },
    { quote: "החוכמה והבינה מסירות את המכאובים", author: "הורטיוס" },
    { quote: "החוכמה משחררת. היא מלמדת אותנו לשאת בצרותינו באמצעות שביעות רצון", author: "אפיקטטוס" },
    { quote: "חוכמה משפרת את מערכת היחסים שלנו עם האמת", author: "דון מיגל רואיס" },
    { quote: "החכמה יוצרת אושר בהיותה חלק מכלל סגולתו הטובה של האדם", author: "אריסטו" },
    
    // ציטוטי תבונה נוספים
    { quote: "אין בנמצא תבונה אלא זו של מחשבה יוצרת", author: "אמילי נוטומב" },
    { quote: "אפלטון אמר כי התבונה היא נחלתם של כל האלים, אבל של בני אדם מועטים בלבד", author: "מישל דה מונטן" },
    { quote: "בינתנו כה עיוורת וצולעת, עד כי אפילו הקל שבדברים אינו ברור לה דיו", author: "מישל דה מונטן" },
    { quote: "אנו מעכבים בעד בינתנו, כשאנו נותנים לה לאחוז בדברים רבים מדי", author: "מישל דה מונטן" },
    { quote: "דרושה מידה מסוימת של תבונה כדי לדעת כי אין אנו יודעים דבר", author: "מישל דה מונטן" },
    { quote: "התפקיד של השכל הישר בתולדות המין האנושי אף פעם לא הרחיק לכת", author: "ז'וזה סאראמאגו" },
    
    // ציטוטי כישרון נוספים
    { quote: "ככל שגדולים יותר כישרונותיו של אדם, יותר יש ביכולתו להטעות את הזולת", author: "אלדוס האקסלי" },
    { quote: "כישרון הוא רק ההתחלה, בכל תחום בחיים", author: "קרלוס רואיס סאפון" }
  ];

  // Get header bounds on mount and resize
  useEffect(() => {
    const updateHeaderBounds = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        setHeaderBounds({
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateHeaderBounds();
    window.addEventListener('resize', updateHeaderBounds);
    
    return () => window.removeEventListener('resize', updateHeaderBounds);
  }, []);

  // Snake-like continuous movement within header bounds
  useEffect(() => {
    if (headerBounds.width === 0 || headerBounds.height === 0) return;

    const moveSnake = () => {
      setPosition(prevPos => {
        const speed = 1.5;
        const imageSize = 80;
        const maxX = headerBounds.width - imageSize;
        const maxY = headerBounds.height - imageSize;
        
        let newX = prevPos.x + (direction.x * speed);
        let newY = prevPos.y + (direction.y * speed);
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        // Check bounds and change direction
        if (newX <= 0 || newX >= maxX) {
          newDirectionX = -direction.x;
          newX = Math.max(0, Math.min(maxX, newX));
        }
        
        if (newY <= 0 || newY >= maxY) {
          newDirectionY = -direction.y;
          newY = Math.max(0, Math.min(maxY, newY));
        }

        // Update direction if changed
        if (newDirectionX !== direction.x || newDirectionY !== direction.y) {
          setDirection({ x: newDirectionX, y: newDirectionY });
        }

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(moveSnake, 30);
    return () => clearInterval(interval);
  }, [direction, headerBounds]);

  // Initialize random direction
  useEffect(() => {
    setDirection({
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1
    });
  }, []);

  // Auto-hide quote after 4 seconds
  useEffect(() => {
    if (showQuote) {
      const timer = setTimeout(() => {
        setShowQuote(false);
      }, 4000); // 4 שניות

      return () => clearTimeout(timer);
    }
  }, [showQuote]);

  const handleClick = () => {
    setCurrentQuote(Math.floor(Math.random() * wisdomQuotes.length));
    setCurrentAnimation((prev) => (prev + 1) % 15); // חזרה ל-0 אחרי 15 אנימציות
    setShowQuote(true);
  };

  // פונקציה להחזרת האנימציה הנכונה
  const getQuoteAnimation = () => {
    const animations = [
      // אנימציה 1: קפיצה ופרקדן
      {
        initial: { scale: 0, rotate: -180, y: 100 },
        animate: { scale: 1, rotate: 0, y: 0 },
        exit: { scale: 0, rotate: 180, opacity: 0, y: -100 },
        transition: { type: "spring", stiffness: 300, damping: 15 }
      },
      // אנימציה 2: גלישה מצד
      {
        initial: { x: -300, opacity: 0, rotate: -45 },
        animate: { x: 0, opacity: 1, rotate: 0 },
        exit: { x: 300, opacity: 0, rotate: 45 },
        transition: { type: "spring", stiffness: 250, damping: 20 }
      },
      // אנימציה 3: הופעה מלמעלה
      {
        initial: { y: -200, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -200, opacity: 0, scale: 0.5 },
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }
      },
      // אנימציה 4: פיצוץ מהמרכז
      {
        initial: { scale: 0, opacity: 0, rotate: 360 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        exit: { scale: 0, opacity: 0, rotate: -360 },
        transition: { type: "spring", stiffness: 200, damping: 10 }
      },
      // אנימציה 5: גלי אלסטיות
      {
        initial: { scaleX: 0, scaleY: 1.5, opacity: 0 },
        animate: { scaleX: 1, scaleY: 1, opacity: 1 },
        exit: { scaleX: 0, scaleY: 1.5, opacity: 0 },
        transition: { type: "spring", stiffness: 400, damping: 25 }
      },
      // אנימציה 6: טיפוח מתחת
      {
        initial: { y: 300, opacity: 0, rotateX: 90 },
        animate: { y: 0, opacity: 1, rotateX: 0 },
        exit: { y: 300, opacity: 0, rotateX: -90 },
        transition: { type: "spring", stiffness: 180, damping: 15 }
      },
      // אנימציה 7: סיבוב אלגנטי
      {
        initial: { rotate: 180, scale: 0, opacity: 0 },
        animate: { rotate: 0, scale: 1, opacity: 1 },
        exit: { rotate: -180, scale: 0, opacity: 0 },
        transition: { type: "tween", duration: 0.6, ease: "easeInOut" }
      },
      // אנימציה 8: זום מהפינה
      {
        initial: { scale: 0, x: -100, y: -100, opacity: 0 },
        animate: { scale: 1, x: 0, y: 0, opacity: 1 },
        exit: { scale: 0, x: 100, y: 100, opacity: 0 },
        transition: { type: "spring", stiffness: 220, damping: 18 }
      },
      // אנימציה 9: נדנדה חלקה
      {
        initial: { rotateY: 90, opacity: 0, scale: 0.8 },
        animate: { rotateY: 0, opacity: 1, scale: 1 },
        exit: { rotateY: -90, opacity: 0, scale: 0.8 },
        transition: { type: "spring", stiffness: 160, damping: 20 }
      },
      // אנימציה 10: גלש מלמטה
      {
        initial: { y: 200, opacity: 0, skewY: 15 },
        animate: { y: 0, opacity: 1, skewY: 0 },
        exit: { y: -200, opacity: 0, skewY: -15 },
        transition: { type: "spring", stiffness: 240, damping: 22 }
      },
      // אנימציה 11: פולס עדין
      {
        initial: { scale: 0, opacity: 0 },
        animate: { 
          scale: [0, 1.2, 1], 
          opacity: [0, 0.8, 1] 
        },
        exit: { scale: 0, opacity: 0 },
        transition: { 
          scale: { times: [0, 0.6, 1], duration: 0.8 },
          opacity: { duration: 0.5 }
        }
      },
      // אנימציה 12: מפרח כמו פרח
      {
        initial: { scale: 0, rotate: -90, transformOrigin: "bottom center" },
        animate: { scale: 1, rotate: 0 },
        exit: { scale: 0, rotate: 90, opacity: 0 },
        transition: { type: "spring", stiffness: 300, damping: 25 }
      },
      // אנימציה 13: גלישה אלכסונית
      {
        initial: { x: -200, y: -200, opacity: 0, rotate: 45 },
        animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
        exit: { x: 200, y: 200, opacity: 0, rotate: -45 },
        transition: { type: "spring", stiffness: 190, damping: 18 }
      },
      // אנימציה 14: נשימה רכה
      {
        initial: { scale: 0.3, opacity: 0 },
        animate: { 
          scale: [0.3, 1.1, 1], 
          opacity: [0, 0.7, 1] 
        },
        exit: { scale: 0.3, opacity: 0 },
        transition: { 
          scale: { times: [0, 0.7, 1], duration: 0.9 },
          opacity: { duration: 0.4 }
        }
      },
      // אנימציה 15: סיבוב תלת-ממדי
      {
        initial: { rotateX: 180, rotateY: 180, scale: 0, opacity: 0 },
        animate: { rotateX: 0, rotateY: 0, scale: 1, opacity: 1 },
        exit: { rotateX: -180, rotateY: -180, scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 150, damping: 20 }
      }
    ];

    return animations[currentAnimation];
  };

  // Only render if header bounds are available
  if (headerBounds.width === 0 || headerBounds.height === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Click-Me Image - positioned relative to header */}
      <motion.div
        className="absolute cursor-pointer z-50"
        style={{
          left: position.x,
          top: position.y,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1
        }}
        transition={{ 
          scale: { duration: 0.5, delay: 3 },
          opacity: { duration: 0.5, delay: 3 }
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-lg opacity-60 animate-pulse" />
          
          {/* Click-me emoji container */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
            <div className="text-4xl">👆</div>
          </div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Floating sparkles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"
              animate={{
                y: [-25, -45, -25],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: '-15px'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              {...getQuoteAnimation()}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl relative pointer-events-auto"
            >
              {/* Quote text */}
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed font-medium mb-4"
                >
                  "{wisdomQuotes[currentQuote].quote}"
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-500 text-left font-normal italic"
                >
                  - {wisdomQuotes[currentQuote].author}
                </motion.p>
              </div>

              {/* Sparkle effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingProfile;