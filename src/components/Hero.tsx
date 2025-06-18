import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 gradient-text"
          >
            ברוכים הבאים
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed"
          >
            <p className="text-xl md:text-2xl mb-8">
              שלוש הרצאות וסדנאות מרכזיות, המבוססות על ניסיון אישי רב שנים וידע מעמיק בתחומים שונים.
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              המטרה היא להעניק למשתתפים כלים מעשיים, ידע יישומי ותובנות שיסייעו להם בעסק ובחיים המקצועיים. 
              ההרצאות מועברות מתוך תשוקה אמיתית לתחומים, ובמטרה לתרום מהידע שצברתי.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;