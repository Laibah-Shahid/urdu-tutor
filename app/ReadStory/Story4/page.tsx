"use client";

import { StarIcon, EyeIcon } from '@heroicons/react/24/solid';

export default function Story4() {
  return (
    <div className="min-h-screen px-8 py-12 bg-indigo-50 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">پیارا سا ہاتھی</h1>

      {/* Rating and Views */}
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center text-yellow-500">
          {[...Array(4)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5" />
          ))}
          <span className="ml-2 text-gray-600 text-sm">(4.0)</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <EyeIcon className="w-5 h-5 mr-1" />
          1.2K Views
        </div>
      </div>

      {/* Divider */}
      <hr className="border-indigo-200 mb-6" />

      {/* Story Paragraph */}
      <p className="leading-relaxed text-lg">
      **ہاتھی اور چھوٹی چڑیا**  

ایک گھنے جنگل میں ایک بہت بڑا ہاتھی رہتا تھا۔ وہ اپنی طاقت پر بہت مغرور تھا اور چھوٹے جانوروں کو حقیر سمجھتا تھا۔ ایک دن، جب وہ دریا میں نہا رہا تھا، اس نے دیکھا کہ ایک چڑیا پانی میں ڈوب رہی ہے۔ ہاتھی نے اونچی آواز میں کہا، تمہارے جیسے چھوٹے جانوروں کا کیا فائدہ؟ تم تو اپنی حفاظت بھی نہیں کر سکتے!  
چڑیا نے گڑگڑاتے ہوئے کہا، طاقت کا غرور اچھی بات نہیں، کبھی کبھی چھوٹی مخلوق بھی بڑے کام کر دیتی ہے۔ ہاتھی ہنس پڑا اور چڑیا کو نظرانداز کر دیا۔  

کچھ دنوں بعد، ہاتھی جنگل میں پھنس گیا جب شکاریوں نے اسے جال میں پکڑ لیا۔ وہ زور زور سے چنگھاڑنے لگا، مگر کوئی بھی اس کی مدد کو نہیں آیا۔ تب وہی چھوٹی چڑیا آئی اور اپنی چونچ سے جال کے تار کاٹنا شروع کر دیے۔ تھوڑی ہی دیر میں ہاتھی آزاد ہو گیا۔  

شرمندہ ہو کر ہاتھی نے چڑیا سے معافی مانگی اور کہا، تم نے سچ کہا تھا، طاقت کا غرور انسان کو اندھا بنا دیتا ہے۔ آج تم نے مجھے سکھایا کہ چھوٹی مخلوق بھی بڑی مددگار ہو سکتی ہے۔ 

سبق: کبھی کسی کو چھوٹا یا کمزور نہ سمجھو، کیونکہ ہر کسی میں کوئی نہ کوئی خاص صلاحیت ہوتی ہے۔
      </p>
    </div>
  );
}
