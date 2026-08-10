"use client";

import Link from "next/link";
import { ArrowUpRight, Layers3, Palette, ScanFace, Share2, Sparkles } from "lucide-react";
import type { Language } from "@/components/i18n/LanguageProvider";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";

type AppCopy = {
  eyebrow: string;
  subtitle: string;
  intro: string[];
  featuresEyebrow: string;
  featuresTitle: string;
  features: Array<[string, string]>;
  availabilityEyebrow: string;
  availabilityTitle: string;
  availabilityText: string;
  noteEyebrow: string;
  noteText: string;
  operatedBy: string;
  supportBefore: string;
  supportLink: string;
  supportAfter: string;
};

const copy: Record<Language, AppCopy> = {
  en: {
    eyebrow: "A creative studio by WEINUOKELA",
    subtitle: "Design, Visualize, Try On and Share Your Dream Hijab",
    intro: [
      "Luverila Hijab Designer is a creative design application for hijab designers, fashion creators and anyone who wants to explore personalized hijab styles.",
      "Create your own hijab designs with digital drawing tools, colors, fabrics, patterns and decorative details. Transform your sketches into realistic AI-generated visuals, virtually try your designs on an authorized personal photo, and create beautiful images ready to save or share."
    ],
    featuresEyebrow: "Designed for imagination",
    featuresTitle: "From a first sketch to a look you can share.",
    features: [
      ["Create Your Design", "Draw freely, work with multiple layers, adjust colors and materials, and design front, side and back views."],
      ["Visualize with AI", "Turn your original hijab sketch into a realistic fashion image with fabric texture, folds and natural lighting."],
      ["Virtual Try-On", "Upload an authorized portrait and preview how your design may look when worn."],
      ["Save and Continue", "Save editable projects and return to your designs later."],
      ["Share Your Creation", "Create square, portrait and story-format images for sharing your work."]
    ],
    availabilityEyebrow: "Availability",
    availabilityTitle: "Made for iPhone and iPad.",
    availabilityText: "Designed for iPhone and iPad. Apple Pencil support is planned for compatible iPad devices.",
    noteEyebrow: "Please note",
    noteText: "AI-generated and virtual try-on images are visual concepts and may not exactly represent the appearance, fit, color or material of a finished physical product.",
    operatedBy: "Luverila Hijab Designer is developed and operated by",
    supportBefore: "For support, please visit our",
    supportLink: "App Support",
    supportAfter: "page"
  },
  zh: {
    eyebrow: "WEINUOKELA 创意工作室",
    subtitle: "设计、想象、试戴并分享你的专属头巾",
    intro: [
      "Luverila Hijab Designer 是一款面向头巾设计师、时尚创作者以及希望探索个性化头巾风格用户的创意设计应用。",
      "使用数字绘图工具、颜色、面料、图案和装饰细节创作自己的头巾设计，将草图转化为 AI 时尚视觉图，在获得授权的人像上进行虚拟试戴，并生成可保存或分享的精美图片。"
    ],
    featuresEyebrow: "为想象力而设计",
    featuresTitle: "从第一张草图到可以分享的完整造型。",
    features: [
      ["创作你的设计", "自由绘制，使用多图层，调整颜色和材质，并设计正面、侧面和背面视图。"],
      ["AI 视觉呈现", "将原创头巾草图转化为具有面料纹理、褶皱和自然光线的真实时装效果图。"],
      ["虚拟试戴", "上传获得授权的人像，预览设计佩戴后的效果。"],
      ["保存并继续", "保存可编辑项目，之后随时回来继续设计。"],
      ["分享你的创作", "生成方形、竖版和故事格式图片，方便分享作品。"]
    ],
    availabilityEyebrow: "支持设备",
    availabilityTitle: "为 iPhone 和 iPad 打造。",
    availabilityText: "目前面向 iPhone 和 iPad 设计，兼容设备的 Apple Pencil 支持正在规划中。",
    noteEyebrow: "请注意",
    noteText: "AI 生成和虚拟试戴图片仅为视觉概念，可能无法完全代表实体产品的外观、版型、颜色或材质。",
    operatedBy: "Luverila Hijab Designer 由以下公司开发和运营：",
    supportBefore: "如需支持，请访问",
    supportLink: "应用支持",
    supportAfter: "页面"
  },
  es: {
    eyebrow: "Un estudio creativo de WEINUOKELA",
    subtitle: "Disena, visualiza, pruebate y comparte tu hiyab ideal",
    intro: [
      "Luverila Hijab Designer es una aplicacion creativa para disenadores de hiyabs, creadores de moda y cualquier persona que quiera explorar estilos de hiyab personalizados.",
      "Crea tus propios disenos de hiyab con herramientas de dibujo digital, colores, tejidos, patrones y detalles decorativos. Convierte tus bocetos en imagenes realistas generadas por IA, prueba virtualmente tus disenos en una foto personal autorizada y crea imagenes listas para guardar o compartir."
    ],
    featuresEyebrow: "Disenado para imaginar",
    featuresTitle: "Del primer boceto a un look que puedes compartir.",
    features: [
      ["Crea tu diseno", "Dibuja libremente, trabaja con varias capas, ajusta colores y materiales, y disena vistas frontal, lateral y trasera."],
      ["Visualiza con IA", "Convierte tu boceto original de hiyab en una imagen de moda realista con textura, pliegues e iluminacion natural."],
      ["Prueba virtual", "Sube un retrato autorizado y descubre como puede verse tu diseno al llevarlo puesto."],
      ["Guarda y continua", "Guarda proyectos editables y vuelve a tus disenos mas tarde."],
      ["Comparte tu creacion", "Crea imagenes cuadradas, verticales y de historias para compartir tu trabajo."]
    ],
    availabilityEyebrow: "Disponibilidad",
    availabilityTitle: "Creada para iPhone y iPad.",
    availabilityText: "Disenada para iPhone y iPad. El soporte para Apple Pencil esta previsto para modelos de iPad compatibles.",
    noteEyebrow: "Ten en cuenta",
    noteText: "Las imagenes generadas por IA y de prueba virtual son conceptos visuales y pueden no representar exactamente el aspecto, ajuste, color o material de un producto fisico terminado.",
    operatedBy: "Luverila Hijab Designer esta desarrollada y operada por",
    supportBefore: "Para obtener ayuda, visita nuestra pagina de",
    supportLink: "Soporte de la app",
    supportAfter: ""
  },
  ar: {
    eyebrow: "استوديو إبداعي من WEINUOKELA",
    subtitle: "صممي وتخيلي وجربي وشاركي حجاب أحلامك",
    intro: [
      "Luverila Hijab Designer هو تطبيق تصميم إبداعي لمصممي الحجاب ومبدعي الأزياء ولكل من ترغب في استكشاف أنماط الحجاب الشخصية.",
      "صممي حجابك باستخدام أدوات الرسم الرقمية والألوان والأقمشة والنقوش والتفاصيل الزخرفية. حوّلي رسوماتك إلى صور أزياء واقعية بالذكاء الاصطناعي، وجربي تصميماتك افتراضيا على صورة شخصية مصرح بها، وأنشئي صورا جميلة جاهزة للحفظ أو المشاركة."
    ],
    featuresEyebrow: "مصمم للخيال",
    featuresTitle: "من الرسم الأول إلى إطلالة يمكنك مشاركتها.",
    features: [
      ["أنشئي تصميمك", "ارسمي بحرية، واستخدمي طبقات متعددة، وعدلي الألوان والخامات، وصممي المناظر الأمامية والجانبية والخلفية."],
      ["تصوريه بالذكاء الاصطناعي", "حوّلي رسم الحجاب الأصلي إلى صورة أزياء واقعية بتفاصيل القماش والثنيات والإضاءة الطبيعية."],
      ["تجربة افتراضية", "حمّلي صورة شخصية مصرحا بها وشاهدي كيف قد يبدو تصميمك عند ارتدائه."],
      ["احفظي وتابعي", "احفظي المشاريع القابلة للتعديل وعودي إلى تصميماتك لاحقا."],
      ["شاركي إبداعك", "أنشئي صورا مربعة وعمودية وبمقاس القصص لمشاركة عملك."]
    ],
    availabilityEyebrow: "التوفر",
    availabilityTitle: "مصمم لأجهزة iPhone وiPad.",
    availabilityText: "صمم التطبيق لأجهزة iPhone وiPad. من المخطط دعم Apple Pencil لأجهزة iPad المتوافقة.",
    noteEyebrow: "يرجى الملاحظة",
    noteText: "الصور الناتجة بالذكاء الاصطناعي وصور التجربة الافتراضية هي تصورات بصرية وقد لا تمثل بدقة المظهر أو المقاس أو اللون أو خامة المنتج الفعلي.",
    operatedBy: "تم تطوير وتشغيل Luverila Hijab Designer بواسطة",
    supportBefore: "للحصول على الدعم، يرجى زيارة صفحة",
    supportLink: "دعم التطبيق",
    supportAfter: ""
  }
};

const icons = [Palette, Sparkles, ScanFace, Layers3, Share2];

export function LocalizedAppDesigner() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="app-page">
      <section className="app-hero">
        <div className="shell app-hero-inner">
          <div className="app-hero-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>Luverila Hijab Designer</h1>
            <p className="app-hero-subtitle">{text.subtitle}</p>
            {text.intro.map((paragraph) => <p className="app-hero-intro" key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="app-hero-mark" aria-hidden="true"><span>LD</span><small>LUVERILA<br />HIJAB DESIGNER</small></div>
        </div>
      </section>
      <section className="section section-cream app-features" aria-labelledby="app-features-title">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">{text.featuresEyebrow}</p><h2 id="app-features-title">{text.featuresTitle}</h2></div>
          <div className="app-feature-grid">
            {text.features.map(([title, description], index) => {
              const Icon = icons[index];
              return <article className={`app-feature-card app-feature-card-${index + 1}`} key={title}><Icon size={24} strokeWidth={1.25} aria-hidden="true" /><p className="eyebrow">0{index + 1}</p><h3>{title}</h3><p>{description}</p></article>;
            })}
          </div>
        </div>
      </section>
      <section className="app-details"><div className="shell app-details-grid"><div><p className="eyebrow">{text.availabilityEyebrow}</p><h2>{text.availabilityTitle}</h2><p>{text.availabilityText}</p></div><div className="app-disclaimer"><p className="eyebrow">{text.noteEyebrow}</p><p>{text.noteText}</p></div></div></section>
      <section className="app-footer-note"><div className="shell"><p>{text.operatedBy} {siteConfig.legalName}.</p><p>{text.supportBefore} <Link href="/app-support">{text.supportLink}</Link> {text.supportAfter} <ArrowUpRight size={14} aria-hidden="true" />.</p></div></section>
    </div>
  );
}
