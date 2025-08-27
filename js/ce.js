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
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2024 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22224-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2023 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22224-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2023 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22224-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2022 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22224-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2022 Summer Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22224-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22224-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22224-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2019 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22224-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2019 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22224-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2018 Winter Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22224-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2018 Winter Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22224-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2018 Summer Applied Mathematics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22224-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "AMS", title: "22224 AMS 2018 Summer Applied Mathematics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22224-2018-Summer-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2024 Summer Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22203-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2023 Winter Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22203-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2023 Summer Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22203-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2022 Summer Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22203-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2022 Summer Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22203-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2022 Winter Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22203-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2019 Summer Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22203-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2019 Summer Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22203-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2019 Winter Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22203-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2019 Winter Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22203-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2018 Winter Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22203-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2018 Winter Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22203-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2018 Summer Applied mechanics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22203-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "EGM", title: "22203 AME 2018 Summer Applied mechanics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22203-2018-Summer-model-answer-paper.pdf" },


{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2024 Summer Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22204-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2023 Winter Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22204-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2023 Summer Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22204-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2022 Summer Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22204-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2019 Summer Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22204-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2019 Summer Construction Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22204-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2019 Winter Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22204-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2019 Winter Construction Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22204-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2018 Winter Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22204-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2018 Winter Construction Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22204-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2018 Summer Construction Materials Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22204-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "BMC", title: "22204 CMA 2018 Summer Construction Materials Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22204-2018-Summer-model-answer-paper.pdf" },


{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2024 Summer Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22205-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2023 Winter Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22205-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2023 Summer Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22205-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2022 Summer Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22205-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2022 Summer Basic Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22205-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2019 Summer Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22205-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2019 Summer Basic Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22205-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2019 Winter Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22205-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2019 Winter Basic Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22205-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2018 Winter Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22205-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2018 Winter Basic Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22205-2018-Winter-model-answer-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2018 Summer Basic Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22205-2018-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem2", subject: "SUY", title: "22205 BSU 2018 Summer Basic Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22205-2018-Summer-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2024 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22301-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2023 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22301-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2023 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22301-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2022 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22301-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2019 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22301-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2019 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22301-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2019 Winter Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22301-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2018 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22301-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "ASU", title: "22301 ASU 2018 Winter Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22301-2018-Winter-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2024 Summer Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22302-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2023 Winter Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22302-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2023 Summer Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22302-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2022 Summer Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22302-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2019 Summer Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22302-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2019 Summer Highway engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22302-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2019 Winter Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22302-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2019 Winter Highway engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22302-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2018 Winter Highway engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22302-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" }, 
{ scheme: "I", semester: "sem3", subject: "HEN", title: "22302 HEN 2018 Winter Highway engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22302-2018-Winter-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2024 Summer Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22305-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2023 Winter Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22305-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2023 Summer Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22305-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2022 Winter Concrete Technology Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22305-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2022 Summer Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22305-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2019 Summer Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22305-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2019 Summer Concrete Technology Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22305-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2019 Winter Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22305-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2019 Winter Concrete Technology Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22305-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2018 Winter Concrete Technology Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22305-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem3", subject: "CTE", title: "22305 CTE 2018 Winter Concrete Technology Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22305-2018-Winter-model-answer-paper.pdf" },

{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2024 Summer Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22401-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2023 Winter Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22401-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2023 Summer Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22401-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2022 Winter Hydraulics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22401-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2022 Summer Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22401-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2022 Summer Hydraulics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22401-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2019 Winter Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22401-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2019 Winter Hydraulics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22401-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2019 Summer Hydraulics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22401-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "HRY", title: "22401 HRY 2019 Summer Hydraulics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22401-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2024 Summer Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22403-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2023 Winter Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22403-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2023 Summer Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22403-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2022 Summer Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22403-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2022 Summer Railway and Bridge Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22403-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2019 Winter Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22403-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2019 Winter Railway and Bridge Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22403-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2019 Summer Railway and Bridge Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22403-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "RBT", title: "22403 RBE 2019 Summer Railway and Bridge Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22403-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },

{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2024 Summer Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22404-2024-Summer-question-paper.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2023 Winter Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22404-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2023 Summer Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22404-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2022 Summer Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22404-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2022 Summer Geotechnical engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22404-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2019 Winter Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22404-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2019 Winter Geotechnical engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22404-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
{ scheme: "I", semester: "sem4", subject: "GTE", title: "22404 GTE 2019 Summer Geotechnical engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22404-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },

]

const subjectFullForms = {
    "ENG": { fullName: "English" },
    "BSC": { fullName: "Basic Science" },
    "BMS": { fullName: "Basic Mathematics" },
    "EEC": { fullName: "Elements of Electrical Engineering" },
    "AMS": { fullName: "Applied Mathematics" },
    "ASC": { fullName: "Applied Science" },
    "APC": { fullName: "Applied Physics & Chemistry" },
    "EGM": { fullName: "Engineering Mechanics" },
    "BMC": { fullName: "Building Material and Construction" },
    "SUY": { fullName: "Surveying" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "EI1": { fullName: "Exit-Internship 01" },
    "SOM": { fullName: "Strength of Materials" },
    "ASU": { fullName: "Advanced Surveying" },
    "CTE": { fullName: "Concrete Technology" },
    "HEN": { fullName: "Highway Engineering" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "BDC": { fullName: "Building Planning & Drawing with CAD" },
    "CMA": { fullName: "Construction Management" },
    "EES": { fullName: "Environmental Education and Sustainability" },
    "RBT": { fullName: "Railway, Bridge and Tunnel Engineering" },
    "HYD": { fullName: "Hydraulics" },
    "ECV": { fullName: "Estimating, Costing and Valuation" },
    "WWE": { fullName: "Water and Wastewater Engineering" },
    "GTE": { fullName: "Geotechnical Engineering" }
  
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
