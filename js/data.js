// แก้เนื้อหาทั้งหมดของหน้าแรกที่ไฟล์นี้ไฟล์เดียว
// (ภายหลังจะเพิ่มภาษาอังกฤษได้โดยทำ SITE_EN ที่หน้าตาเหมือนกัน)
window.SITE = {
  name: "อินทุอร ธีรางกูร",
  about: {
    heading: "เกี่ยวกับฉัน",
    tagline: "UX/UI · Front-end · Character & Game art",
    // รูปโปรไฟล์พลิกได้: front = ตัวละคร / back = รูปถ่าย (ใส่ path ภาพสี่เหลี่ยมจัตุรัสที่ image)
    avatar: {
      front: { image: "", alt: "ตัวละครประจำตัว 7ess" },
      back: { image: "", alt: "รูปถ่ายของอินทุอร" },
      label: "พลิกรูปโปรไฟล์",
      auto: true, // พลิกเองอัตโนมัติ (ตั้งเป็น false ถ้าไม่มีรูปถ่ายด้านหลัง)
      interval: 4000, // มิลลิวินาทีต่อการพลิกหนึ่งครั้ง
    },
    bio: "เราเชื่อว่าภาพที่ดีกับหน้าจอที่ดีคือเรื่องเดียวกัน คือการทำให้คนเข้าใจและรู้สึกบางอย่างผ่านสิ่งที่เห็น ตอนนี้กำลังศึกษาว่าทิศทางศิลป์ส่งผลต่อการตัดสินใจของผู้ใช้อย่างไร",
    // เพิ่ม/ลบ/สลับลำดับแถวได้อิสระ  ใส่ more: true เพื่อซ่อนไว้ใต้ปุ่ม "ดูเพิ่มเติม"
    facts: [
      {
        label: "กำลังมองหา",
        value: "ฝึกงานด้าน UX/UI Design, Front-end และ Game & Art",
      },
      { label: "ช่วงฝึกงาน", value: "มกราคม – พฤษภาคม 2027" },
      {
        label: "การศึกษา",
        value:
          "ชั้นปีที่ 4 สาขาเทคโนโลยีมีเดีย (เอกดิจิทัล) คณะสถาปัตยกรรมศาสตร์และการออกแบบ มจธ. (KMUTT)",
      },
      {
        label: "เครื่องมือ",
        value:
          "Figma, HTML/CSS/JS, Tailwind CSS, Clip Studio Paint, Illustrator, Aseprite",
      },
      {
        label: "ความสนใจ",
        value: "Game art / Asset design, Board game design, UX/UI, Database",
        more: true,
      },
      {
        label: "ชื่ออื่น",
        value: "Indhuon Teerangkun · 7ess (นามปากกา) · มะเหมี่ยว (Mameow)",
        more: true,
      },
    ],
  },
  // ใส่ path ไฟล์เรซูเม่ (เช่น "files/resume.pdf") ปุ่มดาวน์โหลดจึงจะขึ้น
  resume: { label: "ดาวน์โหลดเรซูเม่", href: "" },
  cta: { label: "ส่งอีเมล", href: "mailto:Indhuon.teer@kmutt.ac.th" },
  paths: [
    {
      title: "Build",
      desc: "UX/UI, front-end และงานฮาร์ดแวร์",
      href: "build.html",
      // ผลงานตัวอย่างบนหน้าแรก ใส่ title / image (path ภาพ) / href  และ role (บรรทัดบทบาท) / status (ป้ายสถานะ) ถ้าไม่มีก็เว้นได้
      items: [
        {
          title: "Eye-Tracking UX Research (ทีสิส)",
          role: "ทีม 3 คน · UX/UI Mockup + ประสานงาน",
          status: "อยู่ระหว่างดำเนินการ",
          href: "build.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Cardfight Vanguard Arena",
          role: "ทีม 3 คน · UX/UI + Front-end",
          href: "build.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Comuthor Website",
          role: "งานอาสา · Front-end แบบ Responsive",
          href: "build.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Elementaria Sanctitude",
          role: "ทีม 5 คน · ออกแบบและประกอบชิ้นงาน",
          href: "build.html",
          image: "",
          imageAlt: "",
        },
      ],
    },
    {
      title: "Art",
      desc: "Character design และภาพประกอบ",
      href: "art.html",
      // role = ประเภทงาน · ปี / status = ที่มาของงาน (คอมมิชชัน / งานส่วนตัว / แฟนอาร์ต / วางขายแล้ว)
      items: [
        {
          title: "Character design",
          role: "ประเภทงาน · ปี",
          status: "ที่มาของงาน",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "ภาพประกอบ 1",
          role: "ประเภทงาน · ปี",
          status: "ที่มาของงาน",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "ภาพประกอบ 2",
          role: "ประเภทงาน · ปี",
          status: "ที่มาของงาน",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "สติกเกอร์ LINE",
          role: "ประเภทงาน · ปี",
          status: "ที่มาของงาน",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
      ],
    },
  ],
  // ลิงก์ที่ href เป็น "" จะไม่แสดง (GitHub ใส่หลังเก็บกวาดเสร็จ)
  links: [
    { label: "Twitter/X", href: "https://x.com/7ess_619" },
    { label: "ผลงานคอมมิชชั่น", href: "https://7esscms.carrd.co" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/indhuon-teerangkun-a2bb67330",
    },
    { label: "GitHub", href: "" },
  ],
  note: "กรุงเทพฯ",
  ui: {
    themeToLight: "โหมดสว่าง",
    themeToDark: "โหมดมืด",
    placeholder: "ยังไม่ใส่ภาพ",
    viewAll: "ดูทั้งหมด",
    more: "ดูเพิ่มเติม",
    less: "ดูน้อยลง",
    works: "ผลงาน",
  },
};