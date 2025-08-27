"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  Globe,
  MessageSquare,
  Users,
  Eye,
  BookOpen,
  Palette,
  Languages,
  ExternalLink,
  AlertCircle,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Heart,
  Star,
  Lightbulb,
  Target,
  Zap,
  Trophy,
  Clock,
  Play,
  Headphones,
  Monitor,
  Smartphone,
  Wifi
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900" dir="rtl">
      {/* إشعار أن الموقع غير رسمي */}
      <div className="bg-red-900/20 border-b border-red-800/30 py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center text-red-400">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs md:text-sm font-medium text-center">
              هذا الموقع غير رسمي ولا يتبع لأحمد أبو زيد أو قناة دروس أونلاين بشكل مباشر - مجرد عمل تطوعي من معجب بالمحتوى
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header Section with Logo */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-800 p-3 md:p-4 rounded-2xl shadow-2xl">
              <img 
                src="https://droosonline.com/wp-content/uploads/2020/10/logo-1-300x77.png" 
                alt="دروس أونلاين"
                className="h-12 md:h-16 object-contain filter brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Main Card */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white overflow-hidden relative border-gray-700">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <Badge className="bg-red-600 hover:bg-red-700 text-white w-fit mb-3 md:mb-4 shadow-lg">
                    <Youtube className="w-4 h-4 mr-2" />
                    قناة تعليمية شاملة
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">أحمد أبو زيد</h1>
                  <h2 className="text-lg md:text-xl font-semibold mb-3 text-red-400">دروس أونلاين</h2>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                    قناة مهتمة بتعليم اللغة الإنجليزية والجرافيك ونصائح في أي مجال أو تعليم كيفية عمل أي شيء.
                    ببساطة هذه قناة للتعلم.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>مصر</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>منذ 2012</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center order-1 md:order-2">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-red-600/20 to-gray-800/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-gray-600 shadow-2xl">
                    <img 
                      src="https://droosonline.com/wp-content/uploads/2022/09/Artboard-21-copy-2-8-768x827.jpg" 
                      alt="أحمد أبو زيد"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white border-red-500 shadow-2xl">
            <CardContent className="p-4 md:p-6">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Youtube className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">9.24M</h3>
                <p className="text-red-100 mb-2">مشترك</p>
                <div className="text-xs md:text-sm text-red-100 space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>659 فيديو</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>520M مشاهدة</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specializations */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            التخصصات والمجالات
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-blue-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Languages className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">اللغة الإنجليزية</h3>
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                  دروس شاملة لتعلم اللغة الإنجليزية من الصفر حتى الاحتراف مع أساليب تعليمية مبتكرة.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-purple-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Palette className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">الجرافيك ديزاين</h3>
                <p className="text-purple-100 text-xs md:text-sm leading-relaxed">
                  تعلم أساسيات ومتقدمات التصميم الجرافيكي وبرامج التصميم المختلفة.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-green-500 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">نصائح تعليمية</h3>
                <p className="text-green-100 text-xs md:text-sm leading-relaxed">
                  نصائح وإرشادات في مختلف المجالات وتعليم كيفية عمل أي شيء بطريقة مبسطة.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            إنجازات القناة
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white text-center p-3 md:p-4 border-red-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
              <div className="text-lg md:text-2xl font-bold">12+</div>
              <div className="text-xs md:text-sm text-red-100">سنة خبرة</div>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center p-3 md:p-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
              <div className="text-lg md:text-2xl font-bold">9.24M</div>
              <div className="text-xs md:text-sm text-blue-100">مشترك</div>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white text-center p-3 md:p-4 border-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Play className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
              <div className="text-lg md:text-2xl font-bold">659</div>
              <div className="text-xs md:text-sm text-green-100">فيديو</div>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white text-center p-3 md:p-4 border-purple-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Eye className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
              <div className="text-lg md:text-2xl font-bold">520M</div>
              <div className="text-xs md:text-sm text-purple-100">مشاهدة</div>
            </Card>
          </div>
        </section>

        {/* Content Types */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            أنواع المحتوى المقدم
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">دروس تعليمية</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  شروحات مفصلة ومبسطة في مختلف المجالات
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Monitor className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">تطبيقات عملية</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  أمثلة عملية وتطبيقات حقيقية للمفاهيم
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Headphones className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">بودكاست</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  حلقات صوتية ومناقشات تفاعلية
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">محتوى تفاعلي</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  تفاعل مباشر مع المتابعين والإجابة على الأسئلة
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why This Channel */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            لماذا دروس أونلاين؟
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">محتوى هادف</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  محتوى تعليمي مدروس ومفيد يهدف لتطوير المهارات الشخصية والمهنية
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">أسلوب مبسط</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  شرح المفاهيم المعقدة بطريقة بسيطة وسهلة الفهم للجميع
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">تحديث مستمر</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  محتوى جديد ومحدث باستمرار ليواكب التطورات الحديثة
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">مجتمع داعم</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  مجتمع كبير من المتعلمين والداعمين في رحلة التعلم
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">خبرة عملية</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  خبرة أكثر من 12 سنة في التعليم والتدريب
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-500">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">جودة عالية</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  محتوى عالي الجودة من ناحية الإنتاج والمعلومات المقدمة
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wisdom & Life Insights */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            حكم ونصائح للحياة
          </h2>
          <p className="text-gray-400 text-center mb-6 md:mb-8 text-sm md:text-base">
            مجموعة من الحكم والنصائح المستوحاة من تجارب الحياة والتعلم المستمر
          </p>
          
          <div className="grid gap-4 md:gap-6">
            {/* Quote 1 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      لو مر عليك يوم وأنت وأهلك في صحة وعافية وهناك سقف فوق رأسك وقد أكلت وشربت فأنت في نعمة كبيرة جداً والله.
                    </p>
                    <p className="text-green-400 font-semibold text-xs md:text-sm">
                      الانسان يألف النعم فينسى شكرها. لا تنسى شكر النعم.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 2 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      تخيل إن مديرك بيحبك، أو حد صاحب جاه وسلطان بيحبك، انت متخيل حياتك ممكن تكون افضل بشكل عامل إزاي؟
                    </p>
                    <p className="text-blue-400 font-semibold text-xs md:text-sm">
                      طيب ماذا لو إن خالق هذا الكون هو اللي بيحبك، تخيل بس كدا.... الله تعالى في الحديث القدسي قال: "لا يزال عبدي يتقرب إلى بالنوافل حتى أحبه".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 3 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      هو لو الواحد حط لسانه جوا بقه، هيجرى حاجة….! لازم نتفلحس يعني… ماتسكت ياعم، خلص شغلك وروح بيتك…
                    </p>
                    <p className="text-purple-400 font-semibold text-xs md:text-sm">
                      الصمت بيستر والله.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 4 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      ورط نفسك في حاجات أكبر من قدراتك!
                    </p>
                    <p className="text-red-400 font-semibold text-xs md:text-sm">
                      دي أحد أفضل وأسرع وأكثر الطرق كفاءة في دفعك وزيادة قدراتك بحيث توفي متطلبات الحاجة اللي ورطت نفسك فيها. هتزقك تخرج من منطقة الراحة اللي اتعودت عليها وممدد فيها دي.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 5 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      What moves improves, أو زي ما بيقولوا عندنا : الحركة بركة.
                    </p>
                    <p className="text-orange-400 font-semibold text-xs md:text-sm">
                      السكون والقاعدة والفراغ بيخليك فريسة سهلة للأفكار السلبية والأوجاع والمشاكل والشياطين بنوعيهم، الإنس والجن. اتحرك عشان تعرف تفلت منهم، والحركة هنا بكل معانيها.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 6 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      لازم تستوعب انك بتبدأ كل يوم بموارد محدودة وممكن تخلص منك عادي في نص اليوم.
                    </p>
                    <p className="text-yellow-400 font-semibold text-xs md:text-sm">
                      طاقتك، وقتك، تركيزك وانتباهك، كل دول موارد محدودة فحاول قدر الإمكان استهلاكهم في الحاجات المهمة أولاً. تأجيلك للحاجات المهمة لأخر اليوم قرار مش صح أوي.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 7 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-teal-400 font-semibold text-sm md:text-base leading-relaxed">
                      نظلُ نتدارس المعاني كتباً ولقاءات! حتي يقضي الله أن نتعلمها تجارباً وآلاماً!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 8 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      لن تجد أحداً على فراش الموت يندم أنه لم يشتغل بقدر كافي، ولكنه يندم على تقصيره في حق ربه وفي حق أهله وأسرته وفي حق نفسه أيضاً.
                    </p>
                    <p className="text-pink-400 font-semibold text-xs md:text-sm">
                      الشغل والعمل جزء مهم من الحياة ولكنه ليس كل الحياة. لا تنسى حق نفسك في ترفيهها من حين لآخر وحق أهلك في وقتك وصحبتك وحق ربك في طاعته.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 9 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-indigo-400 font-semibold text-sm md:text-base leading-relaxed">
                      أنت مش هتقدر تغير الناس اللي حواليك، لكن تقدر تغير الناس اللي حواليك!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote 10 */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-2">
                      سر مهم للانتاجية، العزلة الاختيارية والجهل عن عمد. لا تكن متاحاً طوال الوقت، أن تكون في عزلة اختيارية.
                    </p>
                    <p className="text-cyan-400 font-semibold text-xs md:text-sm">
                      أن تكون جاهلاً بالأحداث اليومية التي في الغالب لن يفرق معك معرفتها من عدم معرفتها. كل يوم هناك ترند جديد٫ أزمة٫ جريمة صادمة تحدث. فلماذا تهلك نفسك كل يوم مع تلك الأشياء؟
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            تابع القناة على المنصات الاجتماعية
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@DroosOnline4u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-red-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-red-600 transition-colors duration-300">
                    <Youtube className="w-5 h-5 md:w-6 md:h-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">يوتيوب</h3>
                  <p className="text-xs text-gray-400">9.24M مشترك</p>
                </CardContent>
              </Card>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/droosonline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-blue-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <Facebook className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">فيسبوك</h3>
                  <p className="text-xs text-gray-400">droosonline</p>
                </CardContent>
              </Card>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/abouzaid_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-pink-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-pink-600 transition-colors duration-300">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-pink-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">إنستجرام</h3>
                  <p className="text-xs text-gray-400">abouzaid_official</p>
                </CardContent>
              </Card>
            </a>

            {/* Twitter */}
            <a 
              href="https://twitter.com/droos_online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-sky-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-sky-600 transition-colors duration-300">
                    <Twitter className="w-5 h-5 md:w-6 md:h-6 text-sky-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">تويتر</h3>
                  <p className="text-xs text-gray-400">droos_online</p>
                </CardContent>
              </Card>
            </a>

            {/* Website */}
            <a 
              href="https://droosonline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-gray-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-gray-600 transition-colors duration-300">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">الموقع</h3>
                  <p className="text-xs text-gray-400">droosonline.com</p>
                </CardContent>
              </Card>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/droosonline4u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-blue-500">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-xs md:text-sm">تليجرام</h3>
                  <p className="text-xs text-gray-400">droosonline4u</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8 md:mb-12">
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center border-gray-600 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">ابدأ رحلة التعلم معنا</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                انضم إلى ملايين المتعلمين حول العالم واستفد من المحتوى التعليمي المجاني عالي الجودة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@DroosOnline4u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                    <Youtube className="w-4 h-4 mr-2" />
                    زيارة القناة
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a 
                  href="https://droosonline.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    className="border-2 border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white hover:border-gray-400 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto bg-transparent"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    زيارة الموقع الرسمي
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 py-6 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              تم التطوير بواسطة <span className="text-red-400 font-semibold">مجدي عاطف زهران</span> كعمل تطوعي لدعم المحتوى التعليمي العربي ❤️
            </p>
            <p className="text-xs mb-4">
              هذا الموقع غير رسمي ولا يمثل أحمد أبو زيد أو قناة دروس أونلاين بشكل مباشر
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs">
              <span>الموقع الرسمي: droosonline.com</span>
              <span className="hidden sm:inline">•</span>
              <span>القناة الرسمية: @DroosOnline4u</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}