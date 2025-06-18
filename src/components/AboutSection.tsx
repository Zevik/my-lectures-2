import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6 shadow-lg"
              >
                <Heart size={32} className="text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              >
                הערה חשובה
              </motion.h2>
            </div>

            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mb-8 border-r-4 border-green-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500" />
              
              <div className="flex items-start gap-4 mb-4">
                <Award className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-3">
                    כל ההרצאות והסדנאות מועברות מתוך רצון אמיתי לתרום מהידע והניסיון שלי.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    המטרה היא להעצים ולסייע למשתתפים להצליח בעסקיהם ובחייהם המקצועיים.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">המטרה שלי</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                אני מאמין שהתכנים הללו יכולים להיות בעלי ערך רב לקהל היעד, 
                ואשמח לדון באפשרויות שילוב של הרצאות אלו בתוכנית שלכם.
              </p>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;