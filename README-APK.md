# تحويل «سكينة» إلى APK

## الطريقة ١ (الأسهل، بلا Android Studio): PWABuilder
1. ارفع محتويات مجلد `www` كما هو إلى استضافة HTTPS مجانية (GitHub Pages أو Netlify أو Cloudflare Pages).
2. افتح https://www.pwabuilder.com وأدخل رابط موقعك.
3. اختر Package for stores ثم Android، ونزّل الحزمة.
4. ملف `.apk` الجاهز للتثبيت المباشر يكون ضمن الحزمة المنزّلة (وملف `.aab` لمتجر Google Play).

## الطريقة ٢: Capacitor + Android Studio
المتطلبات: Node.js 18+ وAndroid Studio (يشمل Android SDK وJDK).

    npm install
    npx cap add android
    npx cap sync android
    npx cap open android

ثم في Android Studio: Build ‹ Build Bundle(s) / APK(s) ‹ Build APK(s).
الملف الناتج: `android/app/build/outputs/apk/debug/app-debug.apk`.

لإصدار موقَّع للنشر: Build ‹ Generate Signed Bundle / APK.

## ملاحظات
- يحتاج التطبيق إلى الإنترنت **مرة واحدة** عند أول تشغيل لتحميل نص المصحف، ثم يعمل بلا إنترنت.
- الخطوط (Amiri وTajawal) تُحمَّل من Google Fonts. لتعمل دون إنترنت من أول مرة: نزّلها وضعها في `www/fonts` وبدّل رابط الخطوط في `index.html` بقواعد `@font-face` محلية.
- لتغيير الأيقونة استبدل ملفات `www/icons` (192 و512 و512-maskable).
