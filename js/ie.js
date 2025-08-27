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
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2023 Winter English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22101-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2023 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22101-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2022 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22101-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2022 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22101-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2019 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22101-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2019 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22101-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2019 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22101-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2018 Winter English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22101-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2018 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22101-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2018 Summer English Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22101-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2018 Summer English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22201/22101-2018-Summer-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem1", subject: "ENG", title: "22103 ENG 2017 Winter English Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/22101-Model-%20-Answer-Winter-%202017.pdf" },

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
    
    { scheme: "K", semester: "sem2", subject: "AMS", title: "312301 AMS 2024 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2024 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22210-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2023 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22210-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2023 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22210-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2022 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22210-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2022 Summer Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22210-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22210-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22210-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22210-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22210-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2018 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22210-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2018 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22210-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22210 AMS 2018 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22210-2018-Summer-question-paper.pdf" },

    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2024 Summer Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22215-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2023 Winter Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22215-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2023 Summer Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22215-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2022 Summer Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22215-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2019 Winter Elements of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22215-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2019 Summer Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22215-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2018 Winter Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22215-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2018 Winter Elements of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22215-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2018 Summer Elements of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22215-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EEE", title: "22215 EEE 2018 Summer Elements of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22215-2018-Summer-model-answer-paper.pdf" },
 
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2024 Summer Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22216-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2023 Winter Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22216-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2023 Summer Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22216-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2022 Summer Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22216-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2019 Winter Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22216-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2019 Winter Basic Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22216-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2019 Summer Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22216-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2018 Winter Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22216-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2018 Winter Basic Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22216-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2018 Summer Basic Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22216-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "BEL", title: "22216 BEL 2018 Summer Basic Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22216-2018-Summer-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2024 Summer Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22320-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2023 Winter Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22320-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2023 Summer Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22320-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2022 Summer Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22320-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2019 Winter Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22320-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2019 Winter Digital Techniques Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22320-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2019 Summer Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22320-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2019 Summer Digital Techniques Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22320-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2018 Winter Digital Techniques Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22320-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTE", title: "22320 DTE 2018 Winter Digital Techniques Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22320-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2024 Summer Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22330-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2023 Winter Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22330-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2023 Summer Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22330-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2022 Summer Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22330-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2019 Winter Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22330-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2019 Winter Electric Circuits and Networks Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22330-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2019 Summer Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22330-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2019 Summer Electric Circuits and Networks Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22330-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2018 Winter Electric Circuits and Networks Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22330-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "CKN", title: "22330 ECN 2018 Winter Electric Circuits and Networks Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22330-2018-Winter-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2024 Summer Digital Communication Systems Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22428-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2023 Winter Digital Communication Systems Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22428-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2023 Summer Digital Communication Systems Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22428-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2023 Summer Digital Communication Systems Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22428-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2022 Summer Digital Communication Systems Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22428-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2019 Winter Digital Communication Systems Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22428-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2019 Winter Digital Communication Systems Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22428-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCS", title: "22428 DCS 2019 Summer Digital Communication Systems Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22428-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2024 Summer Consumer Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22425-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2023 Winter Consumer Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22425-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2023 Summer Consumer Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22425-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2022 Winter Consumer Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22425-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2022 Summer Consumer Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22425-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2022 Summer Consumer Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22425-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2019 Winter Consumer Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22425-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2019 Winter Consumer Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22425-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "CEL", title: "22425 CEL 2019 Summer Consumer Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22425-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2024 Summer Microcontroller & Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22426-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2023 Winter Microcontroller & Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22426-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2023 Summer Microcontroller & Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22426-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2022 Summer Microcontroller & Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22426-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2022 Summer Microcontroller & Applications Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22426-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2019 Winter Microcontroller & Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22426-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2019 Winter Microcontroller & Applications Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22426-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAA", title: "22426 MAA 2019 Summer Microcontroller & Applications Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22426-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2024 Summer Basic Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22427-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2023 Winter Basic Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22427-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2023 Summer Basic Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22427-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2022 Summer Basic Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22427-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2022 Summer Basic Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22427-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2019 Winter Basic Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22427-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2019 Winter Basic Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22427-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "BPE", title: "22427 BPE 2019 Summer Basic Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22427-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
]

const subjectFullForms = {
    "BMS": { fullName: "Basic Mathematics" },
    "ENG": { fullName: "Communication Skills (English)" },
    "BSC": { fullName: "Basic Science" },
    "ICT": { fullName: "Fundamentals of ICT" },
    "YAM": { fullName: "Yoga and Meditation" },
    "EWP": { fullName: "Engineering Workshop Practice (Electronics Group)" },
    "EGP": { fullName: "Engineering Graphics (Electronics, Computer and Allied Branches)" },
    "AMS": { fullName: "Applied Mathematics" },
    "BEL": { fullName: "Basic Electronics" },
    "EEE": { fullName: "Elements of Electrical Engineering" },
    "EMC": { fullName: "Electronic Materials & Components" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "CPR": { fullName: "Programming in 'C' Language" },
    "DTE": { fullName: "Digital Techniques" },
    "ATE": { fullName: "Analog Electronics" },
    "CKN": { fullName: "Circuits & Networks" },
    "PEC": { fullName: "Principles of Electronic Communication" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "BPP": { fullName: "Basic Python Programming" },
    "EMI": { fullName: "Electronic Measurements & Instrumentation" },
    "EES": { fullName: "Environmental Education and Sustainability" },
    "DCS": { fullName: "Digital Communication Systems" },
    "CEL": { fullName: "Consumer Electronic Systems" },
    "MAA": { fullName: "Microcontroller & Applications" },
    "BPE": { fullName: "Basic Power Electronics" },
    "MEE": { fullName: "Electronic Equipment Maintenance & Simulation" }
    
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