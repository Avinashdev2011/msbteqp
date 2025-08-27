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
        
{ scheme: "K", semester: "sem2", subject: "AMS", title: "312301 AMS 2024 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2024 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22206-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2023 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22206-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2023 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22206-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2022 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22206-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2022 Summer Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22206-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22206-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22206-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22206-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22206-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2018 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22206-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2018 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22206-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2018 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22206-2018-Summer-question-paper.pdf" },

{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2024 Summer Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22203-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2023 Winter Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22203-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2023 Summer Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22203-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2022 Winter Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22203-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2022 Summer Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22203-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2022 Summer Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22203-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2019 Winter Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22203-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2019 Winter Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22203-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2019 Summer Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22203-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2019 Summer Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22203-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2018 Winter Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22203-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2018 Winter Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22203-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2018 Summer Applied Mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22203-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 EGM 2018 Summer Applied Mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22203-2018-Summer-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2024 Summer Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22231-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2023 Winter Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22231-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2023 Summer Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22231-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2022 Summer Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22231-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2022 Summer Fundamental of Chemical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22231-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2019 Winter Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22231-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2019 Summer Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22231-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2019 Summer Fundamental of Chemical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22231-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2018 Winter Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22231-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2018 Winter Fundamental of Chemical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22231-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2018 Summer Fundamental of Chemical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22231-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "FCEM", title: "22231 FCE 2018 Summer Fundamental of Chemical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22231-2018-Summer-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2024 Summer Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22311-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2023 Winter Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22311-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2023 Summer Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22311-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2022 Winter Utilities & Plant Maintenance Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22311-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2022 Summer Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22311-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2019 Winter Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22311-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2019 Winter Utilities & Plant Maintenance Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22311-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2019 Summer Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22311-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2019 Summer Utilities & Plant Maintenance Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22311-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2018 Winter Utilities & Plant Maintenance Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22311-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "UPM", title: "22311 PUT 2018 Winter Utilities & Plant Maintenance Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22311-2018-Winter-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2024 Summer Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22406-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2023 Winter Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22406-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2023 Summer Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22406-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2022 Summer Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22406-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2022 Summer Chemical Engineering Thermodynamics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22406-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2019 Winter Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22406-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2019 Winter Chemical Engineering Thermodynamics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22406-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2019 Summer Chemical Engineering Thermodynamics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22406-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "CET", title: "22406 CET 2019 Summer Chemical Engineering Thermodynamics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22406-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2024 Summer Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22409-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2023 Winter Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22409-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2023 Summer Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22409-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2022 Summer Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22409-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2022 Summer Industrial Fluid Flow Operation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22409-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2019 Winter Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22409-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2019 Winter Industrial Fluid Flow Operation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22409-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2019 Summer Industrial Fluid Flow Operation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22409-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "IFFO", title: "22409 FFO 2019 Summer Industrial Fluid Flow Operation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22409-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

]

const subjectFullForms = {
    "BMS": { fullName: "Basic Mathematics" },
    "ENG": { fullName: "Communication Skills (English)" },
    "BSC": { fullName: "Basic Science (Physics, Chemistry)" },
    "ICT": { fullName: "Fundamentals of ICT" },
    "YAM": { fullName: "Yoga and Meditation" },
    "EWP": { fullName: "Engineering Workshop Practices (Mechanical, Electrical and allied branches)" },
    "EGR": { fullName: "Engineering Graphics (Civil, Electrical, Mechanical and allied branches)" },
    "AMS": { fullName: "Applied Mathematics" },
    "EGM": { fullName: "Engineering Mechanics" },
    "FCEM": { fullName: "Fundamental of Chemical Engineering & Materials" },
    "SFO": { fullName: "Solid Fluid Operation" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "BEE": { fullName: "Basic Electrical and Electronics" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "CCE": { fullName: "Chemistry for Chemical Engineers" },
    "IAIC": { fullName: "Introduction to Analytical Instruments for Chemical Analysis" },
    "PCL": { fullName: "Process Calculations" },
    "CPT": { fullName: "Chemical Process Technology" },
    "PIC": { fullName: "Process Instrumentation & Control" },
    "UPM": { fullName: "Utilities & Plant Maintenance" },
    "CET": { fullName: "Chemical Engineering Thermodynamics" },
    "CRK": { fullName: "Chemical Reaction Kinetics" },
    "IFFO": { fullName: "Industrial Fluid Flow Operation" },
    "PCCI": { fullName: "Pollution Control in Chemical Industries" },
    "SCI": { fullName: "Safety in Chemical Industries" },
    "EI1": { fullName: "Exit-Internship01" }
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
