import type { Language } from "@/components/i18n/LanguageProvider";
import type { Product } from "./products";

type ProductTranslation = { subtitle: string; description: string; category: string; material?: string; colors?: string[] };

const translations: Record<string, Partial<Record<Language, ProductTranslation>>> = {
  aurora: {
    zh: { subtitle: "A 字蕾丝婚纱", description: "柔和立体的上身剪裁搭配手工蕾丝，在光线下呈现优雅而轻盈的轮廓。", category: "婚纱", material: "真丝缎、法国蕾丝", colors: ["象牙白", "珍珠白"] },
    es: { subtitle: "Vestido de encaje en línea A", description: "Una silueta luminosa con cuerpo suavemente esculpido y encaje acabado a mano que se mueve con elegancia.", category: "Vestido de novia", material: "Satén de seda, encaje francés", colors: ["Marfil", "Perla"] },
    ar: { subtitle: "فستان دانتيل بقصة A", description: "قصة مضيئة مع صدر منحوت بنعومة ودانتيل مشغول يدوياً يتحرك بأناقة هادئة.", category: "فستان زفاف", material: "ساتان حريري، دانتيل فرنسي", colors: ["عاجي", "لؤلؤي"] }
  },
  celeste: {
    zh: { subtitle: "珠饰婚纱配可拆式罩裙", description: "立体珠饰廓形搭配飘逸缎面罩裙，营造精致而富有戏剧感的入场效果。", category: "婚纱", material: "珠饰薄纱、公爵缎", colors: ["象牙白", "柔白"] },
    es: { subtitle: "Vestido bordado con sobrefalda", description: "Una silueta esculpida y bordada a mano, enmarcada por una amplia sobrefalda de satén.", category: "Vestido de novia", material: "Tul bordado, satén duquesa", colors: ["Marfil", "Blanco suave"] },
    ar: { subtitle: "فستان مطرز مع تنورة علوية", description: "قصة منحوتة مطرزة يدوياً تتكامل مع تنورة ساتان واسعة لإطلالة راقية ولافتة.", category: "فستان زفاف", material: "تول مطرز، ساتان دوقة", colors: ["عاجي", "أبيض ناعم"] }
  },
  serena: {
    zh: { subtitle: "轻柔薄纱蓬裙婚纱", description: "层叠轻盈薄纱、简洁领口与浪漫裙量相结合，打造令人难忘的出场。", category: "婚纱", material: "意大利薄纱、真丝欧根纱", colors: ["象牙白", "暖白"] },
    es: { subtitle: "Vestido de tul con falda amplia", description: "Capas de tul ligero enmarcan un escote limpio y un volumen romántico para una entrada inolvidable.", category: "Vestido de novia", material: "Tul italiano, organza de seda", colors: ["Marfil", "Blanco cálido"] },
    ar: { subtitle: "فستان زفاف بطبقات تول ناعمة", description: "طبقات من التول الخفيف تحيط بياقة نظيفة وحجم رومانسي ناعم لإطلالة لا تُنسى.", category: "فستان زفاف", material: "تول إيطالي، أورجانزا حريرية", colors: ["عاجي", "أبيض دافئ"] }
  },
  elise: {
    zh: { subtitle: "教堂式真丝头纱", description: "飘逸教堂式头纱以精致刺绣边缘收尾，带来从容而空灵的整体效果。", category: "头纱", material: "真丝薄纱、同色刺绣", colors: ["象牙白", "珍珠白"] },
    es: { subtitle: "Velo catedral de seda", description: "Un amplio velo catedral rematado con un delicado borde bordado para un acabado sereno y etéreo.", category: "Velo", material: "Tul de seda, bordado al tono", colors: ["Marfil", "Perla"] },
    ar: { subtitle: "طرحة كاتدرائية حريرية", description: "طرحة كاتدرائية طويلة بحافة مطرزة ناعمة تمنح الإطلالة هدوءاً ورقة حالمة.", category: "طرحة", material: "تول حريري، تطريز بلون مماثل", colors: ["عاجي", "لؤلؤي"] }
  },
  luna: {
    zh: { subtitle: "珠饰晚礼服", description: "深梅紫晚礼服搭配闪耀珠饰上身与流畅长裙，为优雅庆典而设计。", category: "晚礼服", material: "珠饰缎面、水晶钉珠", colors: ["深梅紫", "紫水晶"] },
    es: { subtitle: "Vestido de noche con adornos", description: "Vestido de noche color ciruela con cuerpo bordado luminoso y falda fluida para celebraciones elegantes.", category: "Vestido de noche", material: "Satén adornado, cristales", colors: ["Ciruela oscuro", "Amatista"] },
    ar: { subtitle: "فستان سهرة مرصع", description: "فستان سهرة بلون البرقوق العميق مع صدر مرصع وتنورة انسيابية للاحتفالات الأنيقة.", category: "فستان سهرة", material: "ساتان مزخرف، خرز كريستالي", colors: ["برقوق داكن", "جمشت"] }
  },
  amelie: {
    zh: { subtitle: "指尖长度蕾丝头纱", description: "精致指尖长度头纱饰以手工定位花卉蕾丝，在照片中自然捕捉光线。", category: "头纱", material: "法国蕾丝、柔软薄纱", colors: ["象牙白", "柔白"] },
    es: { subtitle: "Velo de encaje hasta la punta de los dedos", description: "Un delicado velo con encaje floral colocado a mano que capta la luz en cada fotografía.", category: "Velo", material: "Encaje francés, tul suave", colors: ["Marfil", "Blanco suave"] },
    ar: { subtitle: "طرحة دانتيل بطول أطراف الأصابع", description: "طرحة رقيقة بدانتيل زهري موضوع يدوياً يلتقط الضوء في كل صورة.", category: "طرحة", material: "دانتيل فرنسي، تول ناعم", colors: ["عاجي", "أبيض ناعم"] }
  },
  "soft-taupe-modal": {
    zh: { subtitle: "日常莫代尔头巾", description: "透气莫代尔面料带有柔和触感与自然垂坠，适合轻松打造日常造型。", category: "莫代尔", material: "莫代尔", colors: ["柔灰褐", "蘑菇色"] },
    es: { subtitle: "Pañuelo modal cotidiano", description: "Modal transpirable de tacto suave y caída relajada para un estilo diario natural.", category: "Modal", material: "Modal", colors: ["Topo suave", "Champiñón"] },
    ar: { subtitle: "وشاح مودال يومي", description: "وشاح مودال قابل للتنفس بملمس ناعم وانسدال مريح لتنسيق يومي سهل.", category: "مودال", material: "مودال", colors: ["تاوب ناعم", "فطري"] }
  },
  "ivory-chiffon": {
    zh: { subtitle: "轻盈雪纺头巾", description: "柔和半透的精致雪纺，适合优雅叠搭与正式场合造型。", category: "雪纺", material: "高级雪纺", colors: ["象牙白", "奶油色"] },
    es: { subtitle: "Pañuelo de gasa ligero", description: "Gasa suavemente translúcida con acabado refinado para capas elegantes y ocasiones especiales.", category: "Gasa", material: "Gasa premium", colors: ["Marfil", "Crema"] },
    ar: { subtitle: "وشاح شيفون خفيف", description: "شيفون شبه شفاف بلمسة راقية مناسب للتنسيقات الأنيقة والمناسبات.", category: "شيفون", material: "شيفون فاخر", colors: ["عاجي", "كريمي"] }
  },
  "midnight-jersey": {
    zh: { subtitle: "柔软弹力针织头巾", description: "柔软而有结构的针织面料，稳固贴合同时保持流畅精致的轮廓。", category: "针织", material: "粘胶针织", colors: ["午夜色", "炭灰色"] },
    es: { subtitle: "Jersey elástico suave", description: "Jersey de estructura suave que permanece en su sitio y conserva una silueta fluida y pulida.", category: "Jersey", material: "Jersey de viscosa", colors: ["Medianoche", "Carbón"] },
    ar: { subtitle: "جيرسي ناعم ومرن", description: "جيرسي ناعم البنية يثبت في مكانه مع الحفاظ على انسيابية وأناقة القصة.", category: "جيرسي", material: "جيرسي فيسكوز", colors: ["منتصف الليل", "فحمي"] }
  },
  "pearl-bridal-hijab": {
    zh: { subtitle: "真丝混纺新娘头巾", description: "具有光泽的真丝混纺头巾，垂坠从容优雅，适合新娘造型与特殊场合。", category: "新娘", material: "真丝混纺", colors: ["珍珠白", "香槟色"] },
    es: { subtitle: "Hiyab nupcial de mezcla de seda", description: "Una envoltura luminosa de mezcla de seda con caída serena para novias y ocasiones especiales.", category: "Novia", material: "Mezcla de seda", colors: ["Perla", "Champán"] },
    ar: { subtitle: "حجاب زفاف من مزيج الحرير", description: "حجاب لامع من مزيج الحرير بانسدال هادئ وأنيق لإطلالات الزفاف والمناسبات.", category: "زفاف", material: "مزيج حرير", colors: ["لؤلؤي", "شمبانيا"] }
  },
  "sand-modal": {
    zh: { subtitle: "暖调中性色莫代尔头巾", description: "温暖百搭的中性色，为精心搭配的衣橱增添柔和与从容。", category: "莫代尔", material: "莫代尔", colors: ["沙色", "暖米色"] },
    es: { subtitle: "Modal neutro cálido", description: "Un neutro cálido y versátil que aporta suavidad y naturalidad a un guardarropa cuidado.", category: "Modal", material: "Modal", colors: ["Arena", "Beige cálido"] },
    ar: { subtitle: "مودال بلون محايد دافئ", description: "لون محايد دافئ ومتعدد الاستخدامات يضيف النعومة والسهولة إلى خزانة مدروسة.", category: "مودال", material: "مودال", colors: ["رملي", "بيج دافئ"] }
  },
  "rosewood-chiffon": {
    zh: { subtitle: "柔和玫瑰木色雪纺", description: "轻盈雪纺呈现低饱和玫瑰木色，为日夜造型增添沉静层次。", category: "雪纺", material: "高级雪纺", colors: ["玫瑰木色", "灰粉色"] },
    es: { subtitle: "Gasa rosa apagado", description: "Un tono palo de rosa en gasa ligera que añade profundidad serena del día a la noche.", category: "Gasa", material: "Gasa premium", colors: ["Palo de rosa", "Rosa empolvado"] },
    ar: { subtitle: "شيفون وردي هادئ", description: "لون خشب الورد الهادئ في شيفون خفيف يضيف عمقاً ناعماً لإطلالات النهار والمساء.", category: "شيفون", material: "شيفون فاخر", colors: ["خشب الورد", "وردي غباري"] }
  },
  "stone-jersey": {
    zh: { subtitle: "日常针织头巾", description: "顺滑且有适度垂坠感的针织头巾，让日常优雅轻松自然。", category: "针织", material: "粘胶针织", colors: ["石色", "暖灰色"] },
    es: { subtitle: "Pañuelo jersey cotidiano", description: "Jersey liso y suavemente pesado que convierte la elegancia diaria en algo natural.", category: "Jersey", material: "Jersey de viscosa", colors: ["Piedra", "Gris cálido"] },
    ar: { subtitle: "وشاح جيرسي يومي", description: "جيرسي ناعم بوزن لطيف يجعل الأناقة اليومية سهلة وطبيعية.", category: "جيرسي", material: "جيرسي فيسكوز", colors: ["حجري", "رمادي دافئ"] }
  },
  "moonlight-chiffon": {
    zh: { subtitle: "晚间雪纺头巾", description: "冷调微光雪纺带有细腻动态感，适合晚间造型与温馨庆典。", category: "雪纺", material: "高级雪纺", colors: ["月光色", "银灰褐"] },
    es: { subtitle: "Pañuelo de gasa de noche", description: "Gasa luminosa de tono frío y movimiento sutil para looks de noche y celebraciones íntimas.", category: "Gasa", material: "Gasa premium", colors: ["Luz de luna", "Topo plateado"] },
    ar: { subtitle: "وشاح شيفون مسائي", description: "شيفون بارد ومضيء بحركة ناعمة لإطلالات المساء والاحتفالات الحميمة.", category: "شيفون", material: "شيفون فاخر", colors: ["ضوء القمر", "تاوب فضي"] }
  }
};

export function getLocalizedProduct(product: Product, language: Language): Product {
  if (language === "en") return product;
  const translated = translations[product.slug]?.[language];
  return translated ? { ...product, ...translated } : product;
}
