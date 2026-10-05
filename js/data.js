// แก้เนื้อหาทั้งหมดของหน้าแรกที่ไฟล์นี้ไฟล์เดียว
// (ภายหลังจะเพิ่มภาษาอังกฤษได้โดยทำ SITE_EN ที่หน้าตาเหมือนกัน)
window.SITE = {
  name: "อินทุอร ธีรางกูร",
  about: {
    heading: "เกี่ยวกับฉัน",
    tagline: "UX/UI · Front-end · Character & Game art",
    // รูปโปรไฟล์: สลับหลายภาพ ภาพแรก (รูปจริง) ค้างนานสุด ที่เหลือ (ภาพวาดตัวเอง) ค้างสั้นกว่า
    // image = path ภาพสี่เหลี่ยมจัตุรัส / hold = มิลลิวินาทีที่ภาพนั้นค้างอยู่ / ใส่กี่ภาพก็ได้
    avatar: {
      label: "เปลี่ยนรูปโปรไฟล์",
      auto: true,
      cycles: 2, // วนครบกี่รอบแล้วหยุดพักที่ภาพแรก (0 = วนไม่หยุด)
      slides: [
        { image: "", alt: "รูปถ่ายของอินทุอร", label: "รูปจริง", hold: 6000 },
        { image: "", alt: "ภาพวาดตัวเอง 1", label: "ภาพวาด 1", hold: 2000 },
        { image: "", alt: "ภาพวาดตัวเอง 2", label: "ภาพวาด 2", hold: 2000 },
        { image: "", alt: "ภาพวาดตัวเอง 3", label: "ภาพวาด 3", hold: 2000 },
        { image: "", alt: "ภาพวาดตัวเอง 4", label: "ภาพวาด 4", hold: 2000 },
      ],
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
  // หน้า Build (build.html): role/status ใส่เฉพาะที่ยืนยันแล้ว ช่องที่ว่างจะไม่แสดง
  // links: ใส่ { label, href } ได้หลายปุ่ม ช่องที่ href ว่างจะไม่แสดง (ใส่หลังเช็กแล้วว่าเปิดได้จริง)
  build: {
    title: "Build",
    intro: "UX/UI, front-end และงานฮาร์ดแวร์",
    groups: [
      {
        title: "ระหว่างเรียน",
        items: [
        {
          title: "Eye-Tracking UX Research (ทีสิส)",
          slug: "eye-tracking-research",
          desc: "โครงการวิจัยทีสิส ชื่อเต็ม Interactive Website Design: An Eye-Tracking Study on the Impact of Art Direction and Confirmation Bias on User Decision-Making ศึกษาด้วยเทคโนโลยี Eye-tracking และ Mouse-tracking ว่าการกำกับทิศทางศิลป์และอคติยืนยันส่งผลต่อการตัดสินใจของผู้ใช้อย่างไร บทบาท: ประสานงานและติดตามความคืบหน้าโครงการ, ออกแบบ UX/UI Mockup บน Figma 18 รูปแบบทดลอง, ช่วยเก็บแบบสำรวจผู้ใช้ 54 คน และร่วมเขียนเอกสารรายงาน (อยู่ระหว่างดำเนินการ)",
          figma: "",
          role: "ทีม 3 คน · UX/UI Mockup + ประสานงาน",
          status: "อยู่ระหว่างดำเนินการ",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Cardfight Vanguard Arena",
          slug: "cardfight-vanguard-arena",
          desc: "ต้นแบบแพลตฟอร์ม Social Media สำหรับผู้เล่นการ์ดเกม รับผิดชอบทั้งการออกแบบ UX/UI และการพัฒนา Front-end",
          figma: "",
          role: "ทีม 3 คน · UX/UI + Front-end",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Taobin Emotional Design",
          slug: "taobin-emotional-design",
          desc: "งานเรียนด้าน Emotional Design วิเคราะห์ interface ปัจจุบันของตู้เต่าบิน แล้วเสนอ interface ใหม่ที่เพิ่มการตรวจจับอุณหภูมิและสีหน้าเพื่อแนะนำเครื่องดื่มที่เหมาะสม การสั่งด้วยเสียง และมินิเกมระหว่างรอเครื่องดื่มเพื่อรับส่วนลดครั้งถัดไป พร้อมเปรียบเทียบการใช้งานของ interface เดิมกับใหม่ และสรุปผลจากการสัมภาษณ์ผู้ใช้ บทบาท: คิดฟีเจอร์และตรวจสอบความถูกต้อง ส่วนงานออกแบบ UI ทั้งหมดทำโดยเพื่อนร่วมทีม (เป็นงานเรียน ไม่ได้เกี่ยวข้องกับแบรนด์)",
          figma: "",
          role: "ทีม 2 คน · คิดฟีเจอร์ + ตรวจความถูกต้อง (UI โดยเพื่อน)",
          status: "งานเรียน",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Your Houng",
          slug: "your-houng",
          page: "build/your-houng.html",
          figmaRatio: "9 / 16", // สัดส่วนกรอบ Figma (กว้าง / สูง) ต้นแบบแอปมือถือใช้แนวตั้ง ต้นแบบเว็บใช้ "16 / 10"
          sections: [
            {
              title: "ที่มาของโจทย์",
              text: "ผู้ใหญ่ที่ต้องการสร้างหรือซื้อบ้านมักเจอปัญหาบ้านไม่ตรงกับความเชื่อและความสบายใจของตัวเอง การหาซินแสใช้เวลานาน และอาจต้องเปลี่ยนแปลนบ่อย แอปนี้จึงเป็นตัวกลางให้ดูแปลนบ้านหรือพื้นที่ในบ้านเรื่องความเป็นมงคลได้เอง โดยมีแนวคิดใช้ AI ช่วยวิเคราะห์",
            },
            {
              title: "กลุ่มเป้าหมาย",
              text: "วัยกลางคนอายุ 40–60 ปี ผู้ที่สนใจใช้ฮวงจุ้ยสำหรับสร้างหรือปรับแบบแปลนบ้าน",
            },
            {
              title: "ฟีเจอร์ของแอป",
              list: [
                "เลือกซินแสที่ใช้ศาสตร์ฮวงจุ้ยต่างกัน (เช่น ดาวเหิน บากัว แปดทิศ)",
                "ดูสีมงคลประจำวันและปฏิทินสีรายเดือน",
                "พูดคุยปรึกษากับซินแส",
                "จำลองแปลนบ้านสำหรับผู้ที่ไม่ต้องการอัปโหลดแปลนจริง",
                "ถ่ายภาพภายในบ้านผ่านแอป",
                "ยอมรับนโยบายความเป็นส่วนตัวและเข้าสู่ระบบก่อนใช้งาน",
              ],
            },
            {
              title: "ธีมและการออกแบบ",
              text: "แนวคิดการสื่อสารคือเสริมสิริมงคล สง่างาม (เลิศเลอ) ทันสมัย (Modern) และให้ผู้ใช้สบายใจ ชุดสีและโลโก้รูปหลังคาบ้านออกแบบให้ตรงกับแนวคิดนี้",
            },
            {
              title: "บทบาทของฉัน",
              text: "ออกแบบโลโก้และธีมสี และร่วมคิดฟีเจอร์ เป็นงานกลุ่ม",
            },
          ],
          palette: [
            { hex: "#373252", name: "ม่วงเข้ม" },
            { hex: "#FEC87E", name: "ทอง" },
            { hex: "#F0E4B3", name: "ครีม" },
            { hex: "#EC4C4C", name: "แดง" },
            { hex: "#FDFDFC", name: "ขาว" },
          ],
          desc: "แนวคิดแอปสำหรับดูฮวงจุ้ย กลุ่มเป้าหมายวัยกลางคนอายุ 40–60 ปี มีฟังก์ชันเลือกซินแส ดูสีมงคลประจำวัน คุยปรึกษากับซินแส และจำลองแปลนบ้าน ออกแบบเป็นต้นแบบ (prototype) ใน Figma พร้อมชุดสื่อโฆษณาจำลอง ยังไม่ได้เปิดตัวจริง บทบาท: ออกแบบโลโก้และธีมสี และร่วมคิดฟีเจอร์",
          figma: "https://www.figma.com/proto/wmPB18VFHlG7zpUxUr1mdk?node-id=3-135",
          role: "งานกลุ่ม · ออกแบบโลโก้และธีมสี + ร่วมคิดฟีเจอร์",
          status: "ต้นแบบ Figma",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "กับดักหนูอัจฉริยะ (Smart Mouse Trap)",
          slug: "smart-mouse-trap",
          desc: "ผลิตภัณฑ์ต้นแบบกับดักหนูอัจฉริยะ ริเริ่มไอเดียและร่วมออกแบบหน้าตาผลิตภัณฑ์ ทำงานร่วมกับทีมที่พัฒนาระบบด้วย ESP32 เซนเซอร์ตรวจแรงกด และเซอร์โวมอเตอร์ ช่วยสนับสนุนงานฮาร์ดแวร์จนทดสอบสำเร็จ 9 ใน 10 ครั้ง",
          figma: "",
          role: "ทีม 3 คน · ริเริ่มไอเดีย + ช่วยฝั่งฮาร์ดแวร์",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Elementaria Sanctitude",
          slug: "elementaria-sanctitude",
          desc: "ชิ้นงาน Interactive ขนาด 30×40 ซม. ได้แรงบันดาลใจจากการ์ดเกม แสงเปลี่ยน pattern ตามระยะที่คนเข้าใกล้ รับผิดชอบงานออกแบบและงานฝีมือทั้งหมด (ไม่รวมวงจร) ทำงานร่วมกับเพื่อนในทีมที่พัฒนาวงจรอิเล็กทรอนิกส์",
          figma: "",
          role: "ทีม 5 คน · ออกแบบและประกอบชิ้นงาน",
          image: "",
          imageAlt: "",
          links: [],
        },
        ],
      },
      {
        title: "ก่อนเข้ามหาวิทยาลัย",
        items: [
        {
          title: "7ess's Website",
          slug: "7ess-website",
          desc: "เว็บพอร์ตโฟลิโอส่วนตัวที่ออกแบบและพัฒนาเองด้วย Tailwind CSS (ทำก่อนเข้ามหาวิทยาลัย)",
          figma: "",
          role: "เว็บพอร์ตโฟลิโอส่วนตัว · Tailwind CSS",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Comuthor Website",
          slug: "comuthor-website",
          desc: "งานอาสาพัฒนา Front-end แบบ Responsive ให้กับเว็บไซต์ชุมชน Roleplay (ทำก่อนเข้ามหาวิทยาลัย)",
          figma: "",
          role: "งานอาสา · Front-end แบบ Responsive",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "BreadBird",
          slug: "breadbird",
          desc: "เกม Arcade สไตล์ Flappy Bird โปรเจกต์ส่วนตัว ภาพ asset ทั้งหมดวาดเอง (ทำก่อนเข้ามหาวิทยาลัย)",
          figma: "",
          role: "เกม Arcade สไตล์ Flappy Bird · โปรเจกต์ส่วนตัว",
          image: "",
          imageAlt: "",
          links: [],
        },
        ],
      },
    ],
  },
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
    back: "← หน้าแรก",
    detail: "ดูรายละเอียด",
    detailLess: "ย่อ",
    figmaOpen: "เปิดใน Figma",
    detailLink: "ดูรายละเอียด →",
    backBuild: "← Build",
    figmaTitle: "ต้นแบบ (Figma)",
    notFound: "ไม่พบผลงานนี้",
    figmaBlocked: "กรอบต้นแบบแสดงในหน้านี้ไม่ได้ กดปุ่ม “เปิดใน Figma” ด้านล่างเพื่อดูต้นแบบ",
  },
};