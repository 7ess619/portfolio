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
  cta: { label: "ส่งอีเมล", href: "mailto:indhuon.teer@gmail.com" },
  paths: [
    {
      title: "Build",
      desc: "UX/UI, front-end และงานฮาร์ดแวร์",
      href: "build.html",
      // ผลงานตัวอย่างบนหน้าแรก (เรียงใหม่ → เก่า) ใส่ title / image (path ภาพ) / href  และ role (บรรทัดบทบาท) / status (ป้ายสถานะ) ถ้าไม่มีก็เว้นได้
      items: [
        {
          title: "Eye-Tracking UX Research (ธีสิส)",
          role: "ทีม 3 คน · หัวหน้าโปรเจกต์ + UX/UI Mockup",
          status: "งานเรียน · อยู่ระหว่างดำเนินการ",
          href: "build/eye-tracking-research.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Cardfight Vanguard Arena",
          role: "ทีม 3 คน · UX/UI ร่วมกับเพื่อน + Front-end เป็นหลัก",
          status: "งานเรียน",
          href: "build/cardfight-vanguard-arena.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Elementaria Sanctitude",
          role: "ทีม 5 คน · ออกแบบและประกอบชิ้นงาน",
          status: "งานเรียน",
          href: "build/elementaria-sanctitude.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "Your Houng",
          role: "ทีม 7 คน · ออกแบบโลโก้และธีมสี + ร่วมคิดฟีเจอร์",
          status: "งานเรียน · ต้นแบบ Figma",
          href: "build/your-houng.html",
          image: "",
          imageAlt: "",
        },
      ],
    },
    {
      title: "Art",
      desc: "Character design และภาพประกอบ",
      href: "art.html",
      // งาน Art ที่ขึ้นหน้าแรก: เพิ่มได้เมื่อมีภาพจริง (ไม่ใส่ช่องแม่แบบ) ภาพย่อไว้ที่ img/art/
      items: [
        {
          title: "Personal Project",
          role: "Character design · OC 9 ตัว",
          status: "Fan character · NSR",
          href: "art/personal-project.html",
          image: "img/art/personal-project-thumb.webp",
          imageAlt: "ตัวละคร OC ของอินทุอร ได้แก่ Otty, Victoria และ Capi-Tune",
        },
        {
          title: "Punchy",
          role: "ตัวละครแมว · ภาพประกอบเล่าเรื่อง + สติกเกอร์ LINE",
          href: "art/punchy.html",
          image: "",
          imageAlt: "",
        },
        // ช่อง 3–4: ยังไม่มีภาพ จึงลิงก์ไปหน้า Art รวมไว้ก่อน (ไม่ลิงก์ไปหน้าที่ยังว่าง)
        // พอมีภาพแล้วใส่ image และเปลี่ยน href เป็น "art/drawing-hobby.html" / "art/general.html"
        {
          title: "Drawing Hobby",
          role: "ภาพวาดต่อเนื่องตั้งแต่ 2025",
          status: "แฟนอาร์ต · No Straight Roads",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
        {
          title: "General",
          role: "ภาพวาดทั่วไป",
          href: "art.html",
          image: "",
          imageAlt: "",
        },
      ],
    },
  ],
  // หน้า Build (build.html): เรียงใหม่ → เก่า / role/status ใส่เฉพาะที่ยืนยันแล้ว ช่องที่ว่างจะไม่แสดง
  // year = ปี · ปีการศึกษา (เต็ม แสดงในหน้างาน) / yearShort = ปีแบบสั้น แสดงบนการ์ด (ไม่ใส่ = ใช้ year)
  // page = มีหน้างานของตัวเอง (ไม่ใส่ = การ์ดไม่มีปุ่ม)
  // sections = { title, text } หรือ { title, list } / figma = ลิงก์ Figma เดียว
  // variants = ตัวเลือกสลับแบบทดลอง (dropdown) { label, figma, preview } ช่องที่ figma ว่างจะไม่แสดง
  //   ปลดล็อกแบบเพิ่มหลังเก็บข้อมูลธีสิสเสร็จ โดยเพิ่มรายการต่อท้ายตรงนี้
  // links: ใส่ { label, href } ได้หลายปุ่ม ช่องที่ href ว่างจะไม่แสดง (ใส่หลังเช็กแล้วว่าเปิดได้จริง)
  build: {
    title: "Build",
    intro: "UX/UI, front-end และงานฮาร์ดแวร์",
    groups: [
      {
        title: "ระหว่างเรียน",
        items: [
        {
          title: "Eye-Tracking UX Research (ธีสิส)",
          slug: "eye-tracking-research",
          page: "build/eye-tracking-research.html",
          year: "2026–ปัจจุบัน · ปีการศึกษาที่ 4",
          yearShort: "2026–ปัจจุบัน",
          desc: "โครงการวิจัยธีสิส ชื่อเต็ม Interactive Website Design: An Eye-Tracking Study on the Impact of Art Direction and Confirmation Bias on User Decision-Making ศึกษาว่าการปรับความโดดเด่นของปุ่ม เมนู ป้ายสถานะ และช่องค้นหาในหน้าระบบเรียน LEB2 ส่งผลต่อการมองและการตัดสินใจของผู้ใช้อย่างไร วัดด้วย Eye-tracking (Tobii Pro Spark) และ Mouse-tracking โดยออกแบบการทดลองกับนักศึกษา 30 คน",
          sections: [
            {
              title: "ที่มาของปัญหา",
              text: "ป้ายเขียว “Submitted” ในระบบ LEB2 สื่อได้ทั้ง “ส่งแล้ว” และ “เรียบร้อยแล้ว” ผู้ใช้จึงอาจด่วนสรุปว่างานเรียบร้อยโดยไม่ตรวจ (อคติยืนยัน) งานนี้ทดสอบว่าการคง layout เดิมไว้ แต่ปรับความหมายเชิงสีและระดับความโดดเด่นของ UI จะช่วยให้ผู้ใช้มองเห็นและตัดสินใจต่างไปหรือไม่",
            },
            {
              title: "ผลสำรวจเบื้องต้น (ผู้ใช้ 54 คน)",
              cols: true,
              list: [
                "83.3% กวาดสายตาไล่อ่านทีละกล่อง",
                "44.4% พลาดงานเพราะไม่มีจุดสังเกต",
                "64.8% ชอบไอคอนหรือสัญลักษณ์เตือนที่แยกเด่น",
              ],
            },
            {
              title: "การออกแบบการทดลอง",
              cols: true,
              text: "ปรับความโดดเด่นของ UI 4 องค์ประกอบ (เมนูนำทาง ป้ายสถานะ ปุ่มการกระทำ และช่องค้นหา) แล้วจับคู่ครั้งละสององค์ประกอบ ได้เป็น Mockup 18 รูปแบบบน Figma ทดลองกับนักศึกษา 30 คน แบ่งกลุ่มและสลับลำดับ (counterbalance) เพื่อลดอิทธิพลของลำดับการทดลอง เก็บข้อมูลด้วย Tobii Pro Spark และโปรแกรม Python ที่ซิงก์สายตากับเมาส์",
            },
            {
              title: "บทบาทของฉัน",
              cols: true,
              text: "ทำงานเป็นทีม 3 คน ส่วนการเขียนโปรแกรมเก็บข้อมูลและการวิเคราะห์ข้อมูลเป็นงานของเพื่อนร่วมทีม",
              list: [
                "หัวหน้าโปรเจกต์",
                "ค้นคว้าทฤษฎีและวางแนวทางการเก็บข้อมูล",
                "ตรวจทานและสรุปความครบถ้วนของงานแต่ละส่วนของทีมก่อนส่งต่อ",
                "ออกแบบ UX/UI Mockup 18 รูปแบบบน Figma",
                "ช่วยเก็บแบบสำรวจผู้ใช้ 54 คน",
                "ร่วมเขียนเอกสารรายงาน",
              ],
            },
            {
              title: "สถานะปัจจุบัน",
              text: "งานอยู่ระหว่างดำเนินการ ทีมกำลังปรับปรุงโปรแกรม Python สำหรับเก็บข้อมูลสายตาและการเคลื่อนเมาส์พร้อมกัน เพื่อให้ผู้เชี่ยวชาญตรวจสอบ ก่อนเริ่มเก็บข้อมูลจริงกับผู้เข้าร่วม ยังไม่มีผลการทดลอง",
            },
          ],
          figma: "",
          variantsTitle: "ลองดูแบบทดลอง (ตัวอย่าง 4 จาก 18 แบบ)",
          variantsNote: "ภาพจำลองที่ทีมออกแบบเองเพื่อการวิจัย ไม่ใช่ระบบจริงของมหาวิทยาลัย",
          variants: [
            { label: "แบบ A", figma: "https://www.figma.com/proto/qr6rOEsr0AGFYxn8Q3mEUq/LEB2-Cheap-copy?node-id=888-87148&starting-point-node-id=888%3A87148", preview: "" },
            { label: "แบบ B", figma: "https://www.figma.com/proto/qr6rOEsr0AGFYxn8Q3mEUq/LEB2-Cheap-copy?node-id=888-75596&starting-point-node-id=888%3A78436", preview: "" },
            { label: "แบบ C", figma: "https://www.figma.com/proto/qr6rOEsr0AGFYxn8Q3mEUq/LEB2-Cheap-copy?node-id=888-41059&starting-point-node-id=888%3A41059", preview: "" },
            { label: "แบบ D", figma: "https://www.figma.com/proto/qr6rOEsr0AGFYxn8Q3mEUq/LEB2-Cheap-copy?node-id=888-87139&starting-point-node-id=888%3A87139", preview: "" },
          ],
          role: "ทีม 3 คน · หัวหน้าโปรเจกต์ + UX/UI Mockup",
          status: "งานเรียน · อยู่ระหว่างดำเนินการ",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Cardfight Vanguard Arena",
          slug: "cardfight-vanguard-arena",
          page: "build/cardfight-vanguard-arena.html",
          year: "2025–2026 · ปีการศึกษาที่ 3",
          yearShort: "2025–2026",
          desc: "ต้นแบบแพลตฟอร์ม Social Media สำหรับผู้เล่นการ์ดเกม Cardfight Vanguard เป็นพื้นที่ถามตอบ หาคนเล่น และซื้อขายการ์ด บทบาท: ออกแบบ UX/UI บน Figma ร่วมกับเพื่อน และพัฒนา Front-end เป็นหลัก เว็บเขียนด้วย HTML/CSS/JS",
          sections: [
            {
              title: "แนวคิดโครงการ",
              text: "แพลตฟอร์ม social media สำหรับผู้เล่นแวนการ์ด มีทั้งถามตอบ หาคนเล่น และซื้อขายการ์ด",
            },
            {
              title: "ฟีเจอร์ที่ออกแบบ",
              list: [
                "สมัครสมาชิกและเข้าสู่ระบบ",
                "โปรไฟล์ผู้เล่น (อ้างอิงแนวคิดจาก Steam): สไตล์การเล่น format ที่เล่น เด็คที่เล่น ประวัติการเข้าแข่งขัน ช่องทางติดต่อ และ upvote/downvote บนหน้าโปรไฟล์",
                "หน้าโพสต์ (อ้างอิงแนวคิดจาก Reddit): โพสต์ประเภท QnA / Decklist / ฝากช่อง / ขายของ ที่โหวต คอมเมนต์ และแชร์ได้",
              ],
            },
            {
              title: "ฐานข้อมูล (งานของทีม)",
              text: "ทีมออกแบบฐานข้อมูล 3 ตารางหลัก คือ User, Post และ Interaction ผู้ใช้หนึ่งคนสร้างได้หลายโพสต์ และผู้ใช้หลายคนโต้ตอบกับโพสต์ได้หลายตัว (UPVOTE, DOWNVOTE, COMMENT) พร้อม ER diagram และ data dictionary",
            },
            {
              title: "บทบาทของฉัน",
              text: "ออกแบบ UX/UI บน Figma ร่วมกับเพื่อน และพัฒนา Front-end เป็นหลัก เว็บเขียนด้วย HTML/CSS/JS เครื่องมือที่ใช้: Figma, Canva, Visual Studio Code และ GitHub Desktop",
            },
          ],
          figma: "https://www.figma.com/proto/2GWVOdjVe4nVtVIFDa5CnR/VanguardFightArena?node-id=43-23&starting-point-node-id=43%3A23&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
          figmaRatio: "16 / 10",
          role: "ทีม 3 คน · UX/UI ร่วมกับเพื่อน + Front-end เป็นหลัก",
          status: "งานเรียน",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "กับดักหนูอัจฉริยะ (Smart Mouse Trap)",
          slug: "smart-mouse-trap",
          page: "build/smart-mouse-trap.html",
          year: "ปลาย 2025 · ปีการศึกษาที่ 3",
          yearShort: "2025",
          desc: "ผลิตภัณฑ์ต้นแบบกับดักหนูอัจฉริยะ ริเริ่มไอเดียและร่วมออกแบบหน้าตาผลิตภัณฑ์ ทำงานร่วมกับทีมที่พัฒนาระบบด้วย ESP32 เซนเซอร์ตรวจแรงกด และเซอร์โวมอเตอร์ ช่วยสนับสนุนงานฮาร์ดแวร์จนทดสอบสำเร็จ 9 ใน 10 ครั้ง",
          sections: [
            {
              title: "บทบาทของฉัน",
              text: "ริเริ่มไอเดีย วาดสเก็ตช์ออกแบบหน้าตาผลิตภัณฑ์ และช่วยสนับสนุนงานฮาร์ดแวร์ของทีม (ทีม 3 คน)",
            },
            {
              title: "ระบบของผลิตภัณฑ์",
              text: "ทีมพัฒนาระบบด้วย ESP32 เซนเซอร์ตรวจแรงกด และเซอร์โวมอเตอร์ ทดสอบสำเร็จ 9 ใน 10 ครั้ง",
            },
          ],
          figma: "",
          role: "ทีม 3 คน · ริเริ่มไอเดีย + ช่วยฝั่งฮาร์ดแวร์",
          status: "งานเรียน",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Elementaria Sanctitude",
          slug: "elementaria-sanctitude",
          page: "build/elementaria-sanctitude.html",
          year: "2025–2026 (จัดแสดง 2026) · ปีการศึกษาที่ 3",
          yearShort: "2025–2026",
          desc: "ชิ้นงาน Interactive ขนาด 30×40 ซม. เป็นโล่แสงไฟที่ pattern สีเปลี่ยนตามระยะที่คนเข้าใกล้ ได้แรงบันดาลใจจากการ์ดเกมใบหนึ่ง จัดแสดงในงาน Media Technology Project 2026 รับผิดชอบงานออกแบบและงานฝีมือทั้งหมด (ไม่รวมวงจร) ทำงานร่วมกับเพื่อนในทีมที่พัฒนาวงจรอิเล็กทรอนิกส์",
          sections: [
            {
              title: "เกี่ยวกับชิ้นงาน",
              text: "ชิ้นงานรูปทรงโล่ ขนาด 30×40 ซม. แสงด้านในเป็นไล่สีรุ้ง และ pattern สีเปลี่ยนไปตามระยะที่คนเข้าใกล้ จัดแสดงในงาน Media Technology Project 2026 (โครงงานปีที่ 3)",
            },
            {
              title: "บทบาทของฉัน",
              text: "ออกแบบและประกอบชิ้นงานทั้งหมด (ไม่รวมวงจรอิเล็กทรอนิกส์) ทำงานร่วมกับเพื่อนในทีม 5 คนที่พัฒนาวงจรให้แสงเปลี่ยน pattern ตามระยะ เครื่องมือที่ใช้: Canva และ Clip Studio Paint",
            },
          ],
          figma: "",
          role: "ทีม 5 คน · ออกแบบและประกอบชิ้นงาน",
          status: "งานเรียน",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Your Houng",
          slug: "your-houng",
          year: "2024 (เทอม 1) · ปีการศึกษาที่ 2",
          yearShort: "2024",
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
              text: "ออกแบบโลโก้และธีมสี และร่วมคิดฟีเจอร์ เป็นงานกลุ่ม 7 คน",
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
          role: "ทีม 7 คน · ออกแบบโลโก้และธีมสี + ร่วมคิดฟีเจอร์",
          status: "งานเรียน · ต้นแบบ Figma",
          image: "",
          imageAlt: "",
          links: [],
        },
        {
          title: "Taobin Emotional Design",
          slug: "taobin-emotional-design",
          page: "build/taobin-emotional-design.html",
          year: "2023 · ปีการศึกษาที่ 1",
          yearShort: "2023",
          desc: "งานเรียนวิชา MDT Interface ด้าน Emotional Design วิเคราะห์ interface ปัจจุบันของตู้เต่าบิน แล้วเสนอ interface ใหม่ที่ตรวจจับอุณหภูมิและสีหน้าเพื่อแนะนำเครื่องดื่มที่เหมาะสม สั่งด้วยเสียงได้ และมีมินิเกมระหว่างรอเครื่องดื่มเพื่อรับส่วนลดครั้งถัดไป พร้อมเปรียบเทียบการใช้งานของ interface เดิมกับใหม่ และสรุปผลจากการสัมภาษณ์ผู้ใช้ 4 คน บทบาท: คิดฟีเจอร์และตรวจสอบความถูกต้อง ส่วนงานออกแบบ UI ทั้งหมดทำโดยเพื่อนร่วมทีม (เป็นงานเรียน ไม่ได้เกี่ยวข้องกับแบรนด์)",
          sections: [
            {
              title: "interface เดิม",
              text: "ผู้ใช้แตะหน้าจอเลือกเมนู เลือกเย็น ระดับความหวาน topping ฝา หลอด จ่ายด้วย QR code แล้วรอราว 2 นาที ทุกขั้นตอนต้องกดเองทั้งหมด",
            },
            {
              title: "สิ่งที่เสนอเพิ่ม",
              list: [
                "ตรวจจับอุณหภูมิและสีหน้า เพื่อเสนอเครื่องดื่มที่เหมาะกับขณะนั้น (เช่น ผู้ใช้เพิ่งออกกำลังกาย แนะนำเครื่องดื่มเกลือแร่)",
                "เพิ่มไมค์และลำโพงให้พูดคุยโต้ตอบกับตู้ได้ สั่งด้วยเสียงได้",
                "มินิเกมระหว่างรอเครื่องดื่ม เล่นชนะรับส่วนลดครั้งถัดไป (ตู้ตรวจว่าไม่มีคนรอด้านหลังจึงชวนเล่น)",
              ],
            },
            {
              title: "กลุ่มผู้ใช้ (Personas)",
              list: [
                "คนออกกำลังกายเป็นประจำ",
                "พนักงานออฟฟิศที่รีบซื้อกาแฟ",
                "เด็กที่ชอบน้ำหวานและเบื่อรอ",
              ],
            },
            {
              title: "เปรียบเทียบ interface เดิมกับใหม่",
              text: "เปรียบเทียบตามหลัก Usability 6 ข้อ ได้แก่ Effective, Efficiency, Safe, Utility, Easy to Learn และ Easy to Remember ทีมระบุข้อเสียของแบบใหม่เองด้วย เช่น ผู้ใช้อาจไม่รู้ว่ามีไมค์ หรือสับสนที่อยู่ ๆ มีเกมมาให้เล่น",
            },
            {
              title: "การสัมภาษณ์ผู้ใช้",
              text: "สัมภาษณ์ผู้ใช้ 4 คน (อายุ 14–19 ปี) ถามเรื่องการแนะนำเครื่องดื่ม flow ของ interface ใหม่ การเล่นเกมเพื่อรับส่วนลด การสั่งด้วยเสียงเทียบกับกดจอ และธีมสีของหน้าจอ",
            },
            {
              title: "บทบาทของฉัน",
              text: "คิดฟีเจอร์ของ interface ใหม่ และตรวจสอบความถูกต้องของงาน (ทีม 2 คน) ส่วนงานออกแบบ UI ทั้งหมดทำโดยเพื่อนร่วมทีม ทีมใช้ Canva และ Figma เป็นงานเรียน ไม่เกี่ยวข้องกับแบรนด์เต่าบิน",
            },
          ],
          figma: "https://www.figma.com/proto/b1loLamNTvYeRHa1M44OMj/TaoBin-goesbrrrrrrrrr?node-id=1-2&starting-point-node-id=1%3A2",
          figmaRatio: "16 / 10",
          figmaNote: "ต้นแบบนี้นำเสนอไอเดียฟีเจอร์ใหม่ที่ทีมศึกษาและคิดขึ้น ฟีเจอร์คิดโดยฉัน ส่วนหน้าตา UI ออกแบบโดยเพื่อนร่วมทีม (งานเรียน ไม่เกี่ยวข้องกับแบรนด์เต่าบิน)",
          role: "ทีม 2 คน · คิดฟีเจอร์ + ตรวจความถูกต้อง (UI โดยเพื่อน)",
          status: "งานเรียน",
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
          desc: "เว็บพอร์ตโฟลิโอส่วนตัวที่ออกแบบและพัฒนาเองด้วย Tailwind CSS ใช้ธีมสีชุดพระอาทิตย์ลับขอบฟ้า (ทำก่อนเข้ามหาวิทยาลัย)",
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
        ],
      },
    ],
  },
  // หน้า Art (art.html + art/*.html): เรียงใหม่ → เก่า (ยกเว้นส่วนวิวัฒนาการที่เล่าตามเวลา)
  // รายการจะ "แสดง" ก็ต่อเมื่อมี image, gallery หรือ sections อย่างน้อยหนึ่งอย่าง (ไม่มีเนื้อหา = ไม่โชว์ ไม่มีหน้าว่าง)
  // ภาพทั้งหมดใส่ path แบบจากรากเว็บ เช่น "img/art/xxx.webp" (หน้าในโฟลเดอร์ art/ จะเติม ../ ให้เอง)
  // image + imageRatio ("กว้าง / สูง") = ภาพกว้างเต็มแถว / lightFrame: true = ภาพพื้นขาววางในกรอบสีอ่อน
  // gallery = [{ image, alt, caption }] / characters = [{ name, slug, page }] (page ว่าง = ยังไม่มีหน้า ไม่มีลิงก์)
  // process = { title, caption, image, still, alt } / extra = { title, note, items: [{ image, alt, character }] }
  art: {
    title: "Art",
    intro: "Character design และภาพประกอบ",
    groups: [
      {
        title: "ภาพรวมงานวาด",
        note: "ภาพรวมงานวาดแต่ละช่วง มีทั้งแฟนอาร์ตและตัวละครต้นฉบับของฉัน ตัวละครจากเกมหรือผลงานของผู้อื่นเป็นของเจ้าของต้นฉบับ",
        items: [
          // หน้า Art ไม่ใช้การ์ด: ทุกรายการวางเป็นภาพเต็มอยู่ตรงกลาง + caption (ข้อความเล็กใต้ภาพ) / maxWidth = ความกว้างสูงสุดของภาพ (ไม่ใส่ = 44rem ตามค่าเริ่มต้นใน style.css) ปรับตัวเลขให้ภาพเล็ก/ใหญ่ขึ้นได้
          {
            title: "2018–2023",
            slug: "overall-2018-2023",
            maxWidth: "44rem",
            image: "img/art/overall-2018-2023.webp",
            imageAlt: "ภาพรวมงานวาด 12 ภาพ ตั้งแต่ปี 2018 ถึง 2023 ครึ่งปีละ 1 ภาพ",
            caption: "ภาพรวมงานวาด 2018–2023 ครึ่งปีละ 1 ภาพ รวม 12 ภาพ เรียงเก่า → ใหม่ จากซ้ายไปขวา แถวบนไปแถวล่าง (ข้อความในภาพเป็นภาษาเกาหลี หมายถึง \"สรุปงานวาด 5 ปี\")",
          },
          // row = ภาพหลายภาพเรียงเป็นแถวเดียว (ความสูงเท่ากัน) ratio = กว้าง/สูงของภาพ ใช้แบ่งความกว้างให้ความสูงเท่ากัน
          // บนจอแคบ (≤600px) จะเรียงซ้อนลงมาเอง
          {
            title: "2023–2025",
            slug: "overall-2023-2025",
            maxWidth: "50rem",
            row: [
              {
                image: "img/art/overall-2023-year-end.webp",
                alt: "สรุปงานวาดปี 2023 รายเดือน ตั้งแต่มกราคมถึงพฤศจิกายน",
                ratio: 0.72,
              },
              {
                image: "img/art/overall-2025.webp",
                alt: "งานวาดปี 2025 จำนวน 12 ภาพ เรียงเป็นตาราง 4 คอลัมน์ 3 แถว",
                ratio: 1.44,
              },
            ],
            caption: "ซ้าย: สรุปงานวาดปี 2023 รายเดือน (มกราคม–พฤศจิกายน) · ขวา: งานวาดปี 2025 (ปีการศึกษาที่ 3) รวม 12 ภาพ โปรแกรมที่ใช้: Adobe Animate และ Clip Studio Paint",
          },
        ],
      },
      {
        title: "ภาพประกอบ",
        items: [
          {
            title: "Punchy",
            slug: "punchy",
            page: "art/punchy.html",
            role: "ตัวละครแมว · ภาพประกอบเล่าเรื่อง + สติกเกอร์ LINE",
            desc: "Punchy ตัวละครแมวของฉัน ปรากฏในภาพประกอบเล่าเรื่องงานเรียน (2024) และชุดสติกเกอร์ LINE ที่วางขายแล้ว",
            image: "",
            imageAlt: "",
            sections: [
              {
                title: "ภาพประกอบเล่าเรื่อง · Punchy: Coming Your Way (2024 · งานเรียน MAT102 · งานเดี่ยว)",
                text: "ภาพประกอบเล่าเรื่องการบำบัดด้วยสัตว์เลี้ยงสำหรับผู้ป่วยโรคซึมเศร้า ออกแบบตัวละครและเล่าเรื่องผ่านภาพ ตั้งแต่ขั้น Brief จนถึง Final Artwork เป็นการเล่าเรื่องผ่านภาพประกอบ ไม่ใช่การบำบัดทางการแพทย์ ใช้โปรแกรม Clip Studio Paint",
              },
              {
                title: "สติกเกอร์ LINE (วางขายแล้ว)",
                text: "ชุดสติกเกอร์ LINE ของ Punchy วางขายแล้ว",
              },
            ],
            links: [], // ใส่ลิงก์ร้านสติกเกอร์ LINE ที่เช็กแล้วว่าเปิดได้จริง
          },
          {
            title: "Drawing Hobby",
            slug: "drawing-hobby",
            page: "art/drawing-hobby.html",
            year: "2025–ปัจจุบัน",
            role: "ภาพวาดต่อเนื่อง",
            status: "แฟนอาร์ต · No Straight Roads",
            desc: "ภาพที่วาดต่อเนื่องตั้งแต่ปี 2025 จนถึงปัจจุบัน เป็นภาพ Victoria (ตัวละคร OC ของฉัน) คู่กับตัวละครที่มีอยู่แล้วในเกม No Straight Roads",
            notice: "แฟนอาร์ต: ตัวละครจากเกม No Straight Roads เป็นของเจ้าของต้นฉบับ ส่วน Victoria เป็นตัวละคร OC ของ อินทุอร ธีรางกูร",
            image: "",
            gallery: [], // ใส่ { image, alt, caption } เมื่อเลือกภาพแล้ว มีภาพเมื่อไหร่การ์ดนี้จะโผล่ที่หน้า Art เอง
            sections: [],
            links: [],
          },
        ],
      },
      {
        title: "Character design",
        items: [
          {
            title: "Personal Project",
            slug: "personal-project",
            page: "art/personal-project.html",
            role: "Character design · OC 9 ตัว",
            status: "Fan character · NSR",
            desc: "ตัวละคร OC (ตัวละครต้นฉบับของฉัน) 9 ตัว ที่ออกแบบเองให้อยู่ในโลกของเกม No Straight Roads (NSR) ตัวที่มีชุด breakdown (moodboard, concept, costume, references) จะเปิดดูได้ทีละตัวเมื่อทำเสร็จ",
            notice: "Fan character: ตัวละครที่ฉันออกแบบเองให้อยู่ในโลกของเกม No Straight Roads (NSR) โลกและเกมเป็นของเจ้าของต้นฉบับ ส่วนตัวละครและงานออกแบบในหน้านี้เป็นของ อินทุอร ธีรางกูร",
            image: "img/art/personal-project-lineup.webp",
            imageAlt: "ภาพรวมตัวละคร OC 9 ตัวยืนเรียงแถว",
            imageRatio: "2000 / 488",
            caption: "Personal Project · Fan character (NSR) — ตัวละคร OC 9 ตัวที่ฉันออกแบบเองให้อยู่ในโลกของเกม No Straight Roads โลกและเกมเป็นของเจ้าของต้นฉบับ",
            lightFrame: true,
            maxWidth: "56rem",
            charactersTitle: "ตัวละครใน lineup",
            characters: [
              { name: "ตัวแทนของฉัน", slug: "", page: "" }, // TODO: ใส่ชื่อตัวละครของเจ้าของเว็บ
              { name: "Austin", slug: "", page: "" },
              { name: "Otty the AI Arcade", slug: "otty-the-ai-arcade", page: "" },
              { name: "Victoria", slug: "victoria", page: "" },
              { name: "Capi-Tune", slug: "capi-tune", page: "" },
              { name: "Conie", slug: "", page: "" },
              { name: "Skye", slug: "", page: "" },
              { name: "Leopard", slug: "", page: "" },
              { name: "Rowan", slug: "", page: "" },
            ],
            process: {
              title: "ขั้นตอนการวาด lineup",
              caption: "ตั้งแต่ร่าง ตัดเส้น ซิลูเอตต์เงา ไปจนลงสีเสร็จ",
              image: "img/art/personal-project-process.webp",
              still: "img/art/personal-project-process-still.webp",
              alt: "ภาพเคลื่อนไหวแสดงขั้นตอนการวาด lineup ตัวละคร ตั้งแต่ร่างจนลงสีเสร็จ",
            },
            // ภาพเพิ่มเติม: ภาพที่ลองวาดตัวละครในสไตล์อื่น (ใส่ items เมื่อวาดเสร็จ ว่างอยู่ = ไม่แสดงส่วนนี้)
            extra: { title: "ภาพเพิ่มเติม", note: "ภาพที่ลองวาดตัวละครในสไตล์อื่น", items: [] },
            sections: [],
            links: [],
          },
        ],
      },
      {
        title: "General",
        items: [
          {
            title: "General",
            slug: "general",
            page: "art/general.html",
            role: "ภาพวาดทั่วไป",
            desc: "ภาพวาดทั่วไปที่ไม่ได้อยู่ในชุดตัวละครหรือภาพประกอบเรื่องด้านบน",
            image: "",
            gallery: [], // ใส่ { image, alt, caption } เมื่อเลือกภาพแล้ว (caption ควรบอกถ้าเป็นแฟนอาร์ต/ตัวละครต้นฉบับ) มีภาพเมื่อไหร่ส่วนนี้โผล่เอง
            sections: [],
            links: [],
          },
        ],
      },
      {
        title: "ภาพอื่นๆ / Motion",
        items: [
          {
            title: "Speed paint",
            slug: "speed-paint",
            role: "Concept art",
            status: "แฟนอาร์ต",
            image: "",
            imageAlt: "",
          },
          {
            title: "Doodle / PNGTuber assets",
            slug: "doodle-pngtuber",
            status: "งานเรียน",
            image: "",
            imageAlt: "",
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
    backArt: "← Art",
    viewAllImages: "ดูทั้งหมด →",
    jumpLabel: "ข้ามไปส่วนต่างๆ ของหน้า Art",
    charsTitle: "ตัวละคร",
    figmaTitle: "ต้นแบบ (Figma)",
    variantsTitle: "ลองดูแบบทดลอง",
    variantPick: "เลือกแบบทดลอง",
    notFound: "ไม่พบผลงานนี้",
    figmaBlocked: "กรอบต้นแบบแสดงในหน้านี้ไม่ได้ กดปุ่ม “เปิดใน Figma” ด้านล่างเพื่อดูต้นแบบ",
  },
};
