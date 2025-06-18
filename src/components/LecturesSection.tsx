import React from 'react';
import { motion } from 'framer-motion';
import LectureCard from './LectureCard';
import { Bot, Settings, Briefcase } from 'lucide-react';

const LecturesSection: React.FC = () => {
  const lectures = [
    {
      id: 1,
      icon: Bot,
      title: 'בינה מלאכותית (AI) – מהקצה לקצה',
      description: 'הרצאה מקיפה הסוקרת את עולם הבינה המלאכותית בצורה מקיפה, החל מהבסיס ועד ליישומים מתקדמים',
      targetAudience: 'בעלי עסקים, יזמים, אנשי שיווק, וכל מי שמעוניין להבין ולהשתמש בכוחה של הבינה המלאכותית',
      content: [
        'יצירת מערכים ומצגות באמצעות AI',
        'בניית אתרים מאפס למאה',
        'סקירת כלי AI רלוונטיים',
        'העלאת אתר לאוויר עם דומיין אישי',
        'כלים פרקטיים ליישום מיידי'
      ],
      valueAdded: 'המשתתפים יצאו עם הבנה טובה יותר של עולם ה-AI ועם כלים פרקטיים שיוכלו ליישם באופן מיידי בעבודתם',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Settings,
      title: 'כלים טכנולוגיים יעילים וטיפים דיגיטליים',
      description: 'אוסף של מיליון טיפים, טריקים וכלים טכנולוגיים שיכולים לשדרג משמעותית את היעילות והפרודוקטיביות',
      targetAudience: 'כל אדם המשתמש במחשב ובטכנולוגיה, בדגש על בעלי עסקים, עצמאים, ועובדים המעוניינים לייעל את עבודתם',
      content: [
        'תוספי כרום חיוניים',
        'טריקים וטיפים לשימוש יעיל במחשב',
        'עבודה חכמה עם כלי Google',
        'אוסף כלים טכנולוגיים מגוון',
        'כלים שימושיים למשתמשי מחשב'
      ],
      valueAdded: 'המשתתפים יקבלו ארגז כלים עשיר שיסייע להם לעבוד בצורה חכמה יותר, מהירה יותר ויעילה יותר',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'מדריך מקיף לעצמאים ועוסקים',
      description: 'הרצאה המספקת ידע מקיף ופרקטי בכל ההיבטים של ניהול עסק עצמאי, מבוססת על ניסיון אישי רב שנים',
      targetAudience: 'עצמאים, עוסקים פטורים, עוסקים מורשים, ויזמים בתחילת דרכם',
      content: [
        'הוצאות מוכרות - מה כן ומה לא',
        'כלים שימושיים וכספיים',
        'קרנות פנסיה והשתלמות',
        'היבטים משפטיים בסיסיים',
        'הסכמים וחוזים',
        'העסקת עובדים',
        'כלים דיגיטליים לניהול עסק'
      ],
      valueAdded: 'ההרצאה תעשה סדר בכל הנושאים הבירוקרטיים והניהוליים של עסק עצמאי, ותספק ידע חיוני שיכול לחסוך כסף, זמן וכאבי ראש',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="lectures" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            הרצאות וסדנאות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            שלוש הרצאות מרכזיות המבוססות על ניסיון רב שנים וידע מעמיק
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {lectures.map((lecture, index) => (
            <motion.div
              key={lecture.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <LectureCard lecture={lecture} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;