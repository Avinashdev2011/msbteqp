const menuIcon = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconContainer = document.getElementById("menu-icon-container");
const closeMenuContainer = document.getElementById("close-menu-container");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  setTimeout(() => {
    mobileMenu.classList.remove("translate-y-[-100%]");
  }, 10);
  menuIconContainer.classList.add("hidden");
  closeMenuContainer.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-y-[-100%]");
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 500);
  menuIconContainer.classList.remove("hidden");
  closeMenuContainer.classList.add("hidden");
});
 
const papers = [
    { scheme: "K", semester: "sem1", subject: "ENG", title: "311303 ENG 2023 Winter English Question Paper", link: "https://www.questionkaka.com/files/311303-Question-Paper-Winter-2023.pdf" },   
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2023 Winter English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22101-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2023 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22101-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2022 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22101-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2022 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22101-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2019 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22101-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2019 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22101-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2019 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22101-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2018 Winter English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22101-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2018 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22101-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2018 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22101-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2018 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22201/22101-2018-Summer-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22101 ENG 2017 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/22101-Model-%20-Answer-Winter-%202017.pdf" },

    { scheme: "K", semester: "sem1", subject: "BMS", title: "311302 BMS 2024 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/311302-2024-summer-question-Paper%7Bmsbte%20study%20resources%7D/311302-2024-summer-question-Paper%7Bmsbte%20study%20resources%7D.pdf" },
    { scheme: "K", semester: "sem1", subject: "BMS", title: "311302 BMS 2024 Summer Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/m1%20qp/311302-2024-Summer-msbte-model-answer-paper-full.pdf" },
    { scheme: "K", semester: "sem1", subject: "BMS", title: "311302 BMS 2023 Winter Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/311302-2023-winter-question-Paper%7Bmsbte%20study%20resources%7D.pdf_/311302-2023-winter-question-Paper%7Bmsbte%20study%20resources%7D.pdf" },
    { scheme: "K", semester: "sem1", subject: "BMS", title: "311302 BMS 2023 Winter Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/m1%20qp/311302-2023-Winter-msbte-model-answer-paper-full.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2024 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22103-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2023 Winter Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22103-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2023 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22103-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2022 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22103-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2022 Summer Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22103-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2019 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22103-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2019 Winter Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22103-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2019 Winter Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22103-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2018 Winter Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22103-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2018 Winter Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22103-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2018 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22103-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2018 Summer Basic Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22201/22103-2018-Summer-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "BMS", title: "22103 BMS 2024 Summer Basic Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22103-2024-Summer-question-paper.pdf" },
    

    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2023 Winter Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22243-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2023 Summer Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22243-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2019 Winter Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22243-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2019 Summer Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22243-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2018 Winter Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22243-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BTM", title: "22243 BOT 2018 Summer Basics of Textile Manufacture Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22243-2018-Summer-question-paper.pdf" },
    
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2024 Summer Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22241-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2023 Winter Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22241-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2023 Summer Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22241-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2022 Summer Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22241-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2019 Winter Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22241-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2019 Summer Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22241-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2018 Winter Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22241-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22241 OCH 2018 Summer Organic Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22241-2018-Summer-question-paper.pdf" },
    
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2024 Summer Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22242-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2023 Winter Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22242-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2023 Summer Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22242-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2022 Summer Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22242-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2019 Winter Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22242-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2019 Summer Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22242-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2018 Winter Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22242-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PAOC", title: "22242 PCH 2018 Summer Physical Chemistry Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22242-2018-Summer-question-paper.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2023 Winter Textile Testing Question Paper", link: "https://drive.google.com/file/d/1ImTtAwMXOF3amAajBXDmFNka1ebGRtHL/view?usp=sharing" },
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2023 Summer Textile Testing Question Paper", link: "https://drive.google.com/file/d/1x0Il1PY3xnigkNIwLjXh04QX2cHwVF_D/view?usp=sharing" },
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2022 Summer Textile Testing Question Paper", link: "https://drive.google.com/file/d/1Wra4EOr1GbFH73t3YprTsuVEkftBA_B5/view?usp=share_link" },
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2019 Winter Textile Testing Question Paper", link: "https://drive.google.com/file/d/1n6Y4oLEm8ZI4DQdRvHnaZS4ydAYH2lwS/view?usp=sharing" },
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2019 Summer Textile Testing Question Paper", link: "https://drive.google.com/file/d/1m7Xk9gHsYHBleAqY83kpC4X9iT8thNZC/view?usp=sharing" },
    { scheme: "I", semester: "sem3", subject: "TT", title: "22364 TTS 2018 Winter Textile Testing Question Paper", link: "https://drive.google.com/file/d/1Uv64NJi5cAU-s7k_oeGiEH-wModvVG7L/view?usp=sharing" },
        
    { scheme: "I", semester: "sem3", subject: "DNS", title: "22458 DNS 2023 Winter Dyeing of Natural Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22458-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DNS", title: "22458 DNS 2023 Summer Dyeing of Natural Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22458-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DNS", title: "22458 DNS 2019 Winter Dyeing of Natural Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22458-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },

    
    { scheme: "I", semester: "sem3", subject: "SFI", title: "22457 SFI 2023 Winter Synthetic Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22457-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SFI", title: "22457 SFI 2023 Summer Synthetic Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22457-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SFI", title: "22457 SFI 2019 Winter Synthetic Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22457-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "DSF", title: "22457 SFI 2023 Winter Dyeing of Synthetic Fibers Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22457-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DSF", title: "22457 SFI 2023 Summer Dyeing of Synthetic Fibers Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22457-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DSF", title: "22457 SFI 2019 Winter Dyeing of Synthetic Fibers Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22457-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },

    { scheme: "I", semester: "sem4", subject: "FNS", title: "22460 FNS 2023 Winter Finishing of Natural Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22460-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "FNS", title: "22460 FNS 2023 Summer Finishing of Natural Substrates Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22460-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },

    
    { scheme: "I", semester: "sem4", subject: "GPR", title: "22579 GPR 2024 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22579-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "GPR", title: "22579 GPR 2023 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22579-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "GPR", title: "22579 GPR 2023 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22579-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "GPR", title: "22579 GPR 2019 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22579-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: " PSF", title: "22576 PSF 2024 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22576-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: " PSF", title: "22576 PSF 2023 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22576-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: " PSF", title: "22576 PSF 2023 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22576-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: " PSF", title: "22576 PSF 2022 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22576-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: " PSF", title: "22576 PSF 2019 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22576-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
]

const subjectFullForms = {
    "BMS": { fullName: "Basic Mathematics" },
    "ENG": { fullName: "Communication Skills (English)" },
    "BSC": { fullName: "Basic Science (Physics, Chemistry)" },
    "ICT": { fullName: "Fundamentals of ICT" },
    "YAM": { fullName: "Yoga and Meditation" },
    "EGR": { fullName: "Engineering Graphics (Civil, Electrical, Mechanical, and allied branches)" },
    "WPT": { fullName: "Workshop Practices for Textile" },
    "BTM": { fullName: "Basics of Textile Manufacture" },
    "NFI": { fullName: "Natural Substrates" },
    "PAOC": { fullName: "Physical & Organic Chemistry" },
    "PTS": { fullName: "Pretreatments of Textile Substrates" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "EEM": { fullName: "Elements of Electronics, Electrical, & Mechanical" },
    "DNS": { fullName: "Dyeing of Natural Substrates" },
    "PNS": { fullName: "Printing of Natural Substrates" },
    "SFI": { fullName: "Synthetic Substrates" },
    "TT": { fullName: "Textile Testing" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "CAC": { fullName: "Chemistry of Aromatic Compounds" },
    "ICH": { fullName: "Industrial Chemistry" },
    "EES": { fullName: "Environmental Education and Sustainability" },
    "DSF": { fullName: "Dyeing of Synthetic Substrates" },
    "FNS": { fullName: "Finishing of Natural Substrates" }

};


function displayPapers(filteredPapers) {
    const papersContainer = document.getElementById('papersContainer');
    papersContainer.innerHTML = '';

    const groupedBySubject = {};

    filteredPapers.forEach(paper => {
        if (!groupedBySubject[paper.subject]) {
            groupedBySubject[paper.subject] = { schemeK: [], schemeI: [], schemeG: [] };
        }
        groupedBySubject[paper.subject][`scheme${paper.scheme}`].push(paper);
    });

    for (const subject in groupedBySubject) {
        const subjectSection = document.createElement('div');
        subjectSection.classList.add('mb-4', 'bg-[rgb(30,42,71)]', 'p-4', 'rounded-lg');

        const subjectTitleContainer = document.createElement('div');
        subjectTitleContainer.classList.add('flex', 'justify-between', 'items-center');

        const subjectTitle = document.createElement('h3');
        subjectTitle.classList.add('text-xl', 'font-bold', 'text-white');
        subjectTitle.textContent = `${subject} - ${subjectFullForms[subject]?.fullName || subject}`;
        
        subjectTitleContainer.appendChild(subjectTitle);
        subjectSection.appendChild(subjectTitleContainer);

        ['schemeK', 'schemeI', 'schemeG'].forEach(scheme => {
            if (groupedBySubject[subject][scheme].length > 0) {
                const schemeTitle = document.createElement('h4');
                schemeTitle.classList.add('text-lg', 'font-semibold', 'text-white', 'mb-2');
                schemeTitle.textContent = `${scheme === "schemeK" ? "Scheme K" : scheme === "schemeI" ? "Scheme I" : "Scheme G"}`;
                subjectSection.appendChild(schemeTitle);

                const paperList = document.createElement('ul');
                groupedBySubject[subject][scheme].forEach(paper => {
                    const paperItem = document.createElement('li');
                    paperItem.classList.add('p-2', 'text-sm', 'bg-[rgb(30,42,71)]', 'rounded-lg', 'shadow-sm', 'mb-0');
                    paperItem.innerHTML = `
                        <a href="${paper.link}" class="text-white hover:underline text-lg" target="_blank">
                            <i class="fas fa-file-pdf text-2xl mr-2 text-red-600 hover:text-black transition-colors duration-300"></i>
                            ${paper.title}
                        </a>
                    `;
                    paperItem.classList.add('p-0', 'text-sm', 'bg-[rgb(30,42,71)]', 'rounded-lg', 'shadow-sm', 'mb-0.5');
                    paperList.appendChild(paperItem);
                });

                subjectSection.appendChild(paperList);
            }
        });

        papersContainer.appendChild(subjectSection);
    }
}

function updateSubjectFilter() {
    const semesterFilter = document.getElementById("semesterFilter").value;
    const subjectFilter = document.getElementById("subjectFilter");

    subjectFilter.innerHTML = "<option value='all'>All Subjects</option>";

    const subjectsForSemester = new Set(
        papers.filter(paper => semesterFilter === "all" || paper.semester === semesterFilter)
        .map(paper => paper.subject)
    );

    subjectsForSemester.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = `${subject} - ${subjectFullForms[subject]?.fullName || subject}`;
        subjectFilter.appendChild(option);
    });

    filterContent();
}

function filterContent() {
    const semesterFilter = document.getElementById("semesterFilter").value;
    const subjectFilter = document.getElementById("subjectFilter").value;

    const filteredPapers = papers.filter(paper =>
        (semesterFilter === "all" || paper.semester === semesterFilter) &&
        (subjectFilter === "all" || paper.subject === subjectFilter)
    );

    displayPapers(filteredPapers);
}

displayPapers(papers);
updateSubjectFilter();
