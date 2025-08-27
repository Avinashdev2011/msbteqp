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
    { scheme: "I", semester: "sem2", subject: "AMS", title: "22206 AMS 2018 Summer Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22224-2018-Summer-model-answer-paper.pdf" },

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

    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2024 Summer Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22207-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2023 Winter Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22207-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2023 Summer Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22207-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2022 Winter Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22207-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2022 Summer Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22207-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2022 Summer Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22207-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2019 Winter Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22207-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2019 Winter Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22207-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2019 Summer Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22207-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2019 Summer Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22207-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2018 Winter Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22207-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2018 Winter Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22207-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2018 Summer Engineering Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22207-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EDG", title: "22207 EDG 2018 Summer Engineering Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22207-2018-Summer-model-answer-paper.pdf" },
      
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2024 Summer Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22306-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2023 Winter Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22306-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2023 Summer Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22306-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2022 Summer Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22306-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2022 Summer Strength of Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22306-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2019 Winter Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22306-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2019 Winter Strength of Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22306-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2019 Summer Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22306-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2019 Summer Strength of Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22306-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2018 Winter Strength of Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22306-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "SOM", title: "22306 SOM 2018 Winter Strength of Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22306-2018-Winter-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2024 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22310-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2023 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22310-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2023 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22310-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2022 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22310-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22310-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Winter Basic Electrical and Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22310-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22310-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2018 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22310-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2018 Winter Basic Electrical and Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22310-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },

    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2024 Summer Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22337-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2023 Winter Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22337-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2022 Winter Thermal Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22337-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2022 Summer Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22337-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2022 Summer Thermal Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22337-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2019 Winter Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22337-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2019 Winter Thermal Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22337-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2019 Summer Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22337-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2019 Summer Thermal Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22337-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2018 Winter Thermal Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22337-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "TEG", title: "22337 TEG 2018 Winter Thermal Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22337-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2024 Summer Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22341-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2023 Winter Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22341-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2023 Summer Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22341-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2022 Summer Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22341-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2019 Winter Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22341-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2019 Winter Mechanical Working Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22341-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2019 Summer Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22341-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2019 Summer Mechanical Working Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22341-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2018 Winter Mechanical Working Drawing Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22341-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "PDR", title: "22341 MWM 2018 Winter Mechanical Working Drawing Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22341-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2024 Summer Fluid Mechanics and Machinery Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22445-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2024 Summer Fluid Mechanics and Machinery Model Answer Paper", link: "" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2023 Winter Fluid Mechanics and Machinery Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22445-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2023 Summer Fluid Mechanics and Machinery Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22445-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2022 Winter Fluid Mechanics and Machinery Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22445-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2022 Summer Fluid Mechanics and Machinery Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22445-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2022 Summer Fluid Mechanics and Machinery Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/abb.tar/22445-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2019 Winter Fluid Mechanics and Machinery Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22445-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2019 Winter Fluid Mechanics and Machinery Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22445-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FMM", title: "22445 FMM 2019 Summer Fluid Mechanics and Machinery Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22445-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2024 Summer Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22342-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2023 Winter Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/winter2023/22342-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2023 Summer Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/Summer2023%20bb/22342-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2022 Summer Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22342-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2019 Winter Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/aaa2pr/22342-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2019 Winter Engineering Metrology Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/New%20fldr2/22342-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2019 Summer Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/s19qph-2-413/22342-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2019 Summer Engineering Metrology Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22342-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2018 Winter Engineering Metrology Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/w18qp5/22342-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MAN", title: "22342 EME 2018 Winter Engineering Metrology Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/w18mo222324/22342-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2024 Summer Theory of Machines Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22438-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2023 Winter Theory of Machines Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/winter2023/22438-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2023 Summer Theory of Machines Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/Summer2023%20bb/22438-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2022 Summer Theory of Machines Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22438-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2022 Summer Theory of Machines Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/abb.tar/22438R-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2019 Winter Theory of Machines Question Paper", link: "https://www.msbte.engg-info.website/sites/default/files/aaa3/22438-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2019 Winter Theory of Machines Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/New%20fldr2/22438-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "TOM", title: "22438 TOM 2019 Summer Theory of Machines Model Answer Paper", link: "https://www.msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22438-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

    
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2024 Summer Mechanical Engineering Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22443-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2023 Winter Mechanical Engineering Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22443-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2023 Summer Mechanical Engineering Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22443-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2022 Summer Mechanical Engineering Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22443-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2022 Summer Mechanical Engineering Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/abb.tar/22443-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2019 Winter Mechanical Engineering Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22443-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2019 Winter Mechanical Engineering Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22443-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "MEM", title: "22443 MEM 2019 Summer Mechanical Engineering Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22443-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2024 Summer Manufacturing Processes Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22446-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2023 Winter Manufacturing Processes Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22446-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2023 Summer Manufacturing Processes Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22446-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2022 Summer Manufacturing Processes Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22446-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2022 Summer Manufacturing Processes Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/abb.tar/22446-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2019 Winter Manufacturing Processes Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa3/22446-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2019 Winter Manufacturing Processes Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22446-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "PPR", title: "22446 MPR 2019 Summer Manufacturing Processes Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22446-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    
]

const subjectFullForms = {
        "BMS": { fullName: "Basic Mathematics" },
        "ENG": { fullName: "Communication Skills (English)" },
        "BSC": { fullName: "Basic Science (Physics & Chemistry)" },
        "ICT": { fullName: "Fundamentals of ICT" },
        "YAM": { fullName: "Yoga and Meditation" },
        "EWP": { fullName: "Engineering Workshop Practices (Mechanical, Electrical and allied branches)" },
        "EGR": { fullName: "Engineering Graphics (Civil, Electrical, Mechanical and allied branches)" },
        "AMS": { fullName: "Applied Mathematics" },
        "ASC": { fullName: "Applied Science (Applied Physics & Applied Chemistry)" },
        "EDG": { fullName: "Engineering Drawing" },
        "EGM": { fullName: "Engineering Mechanics" },
        "MPR": { fullName: "Manufacturing Technology" },
        "PCO": { fullName: "Professional Communication" },
        "SFS": { fullName: "Social and Life Skills" },
        "SOM": { fullName: "Strength of Materials" },
        "FMM": { fullName: "Fluid Mechanics and Machinery" },
        "TEG": { fullName: "Thermal Engineering" },
        "PDR": { fullName: "Production Drawing" },
        "BEE": { fullName: "Basic Electrical and Electronics" },
        "EIC": { fullName: "Essence of Indian Constitution" },
        "CAD": { fullName: "Computer Aided Drafting" },
        "FPP": { fullName: "Fundamentals of Python Programming" },
        "EES": { fullName: "Environmental Education and Sustainability" },
        "TOM": { fullName: "Theory of Machines" },
        "MAM": { fullName: "Metrology and Measurement" },
        "MEM": { fullName: "Mechanical Engineering Materials" },
        "PPR": { fullName: "Production Processes" },
        "EDS": { fullName: "Entrepreneurship Development and Startups" },
        "BOM": { fullName: "Basics of Mechatronics" },
        "CNC": { fullName: "CNC Programming" }

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
        subjectTitle.textContent = `${subject} - ${subjectFullForms[subject].fullName || subject}`;
        
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
        option.textContent = `${subject} - ${subjectFullForms[subject].fullName || subject}`;
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