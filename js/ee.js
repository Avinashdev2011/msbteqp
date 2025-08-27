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

    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2024 Summer Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22213-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2023 Winter Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22213-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2023 Summer Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22213-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2022 Summer Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22213-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2022 Summer Elements of Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22213-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2019 Winter Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22213-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2019 Winter Elements of Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22213-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2019 Summer Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22213-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2018 Winter Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22213-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2018 Winter Elements of Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22213-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2018 Summer Elements of Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22213-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "EOM", title: "22213 EOM 2018 Summer Elements of Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22213-2018-Summer-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2024 Summer Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22212-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2023 Winter Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22212-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2023 Summer Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22212-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2022 Summer Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22212-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2019 Winter Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22212-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2019 Winter Fundamental of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22212-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2019 Summer Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22212-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2018 Winter Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22212-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2018 Winter Fundamental of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22212-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2018 Summer Fundamental of Electrical Engineering Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22212-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "FEE", title: "22212 FEE 2018 Summer Fundamental of Electrical Engineering Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22212-2018-Summer-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2024 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22324-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2023 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22324-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2023 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22324-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2022 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22324-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2019 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22324-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2019 Winter Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22324-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2019 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22324-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2019 Summer Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22324-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2018 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22324-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "ECN", title: "22324 ECI 2018 Winter Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22324-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2024 Summer Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22325-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2023 Winter Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22325-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2023 Summer Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22325-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2022 Winter Electrical and Electronic Measurements Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22325-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2022 Summer Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22325-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2019 Winter Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22325-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2019 Summer Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22325-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2019 Summer Electrical and Electronic Measurements Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22325-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2018 Winter Electrical and Electronic Measurements Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22325-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "EEM", title: "22325 EEM 2018 Winter Electrical and Electronic Measurements Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22325-2018-Winter-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2024 Summer Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22326-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2023 Winter Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22326-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2023 Summer Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22326-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2022 Summer Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22326-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2019 Winter Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22326-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2019 Winter Fundamentals of Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22326-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2019 Summer Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22326-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2019 Summer Fundamentals of Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22326-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2018 Winter Fundamentals of Power Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22326-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "FPE", title: "22326 FPE 2018 Winter Fundamentals of Power Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22326-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2024 Summer Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22327-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2023 Winter Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22327-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2023 Summer Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22327-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2022 Summer Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22327-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2022 Summer Electrical Power Generation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22327-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2019 Winter Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22327-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2019 Winter Electrical Power Generation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22327-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2019 Summer Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22327-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2019 Summer Electrical Power Generation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22327-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2018 Winter Electrical Power Generation Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22327-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "GTD", title: "22327 EPG 2018 Winter Electrical Power Generation Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22327-2018-Winter-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2024 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22418-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2023 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22418-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2023 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22418-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2022 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22418-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2022 Summer Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22418-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2022 Summer Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22418-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2019 Winter Advance Surveying Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22418-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2019 Winter Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22418-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DMT", title: "22418 CNE 2019 Summer Advance Surveying Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22418-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2024 Summer Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22421-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2023 Winter Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22421-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2023 Summer Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22421-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2022 Summer Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22421-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2022 Summer Digital Electronics and Microcontroller Applications Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22421-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2019 Winter Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22421-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2019 Winter Digital Electronics and Microcontroller Applications Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22421-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DEM", title: "22421 DEM 2019 Summer Digital Electronics and Microcontroller Applications Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22421-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
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
    "EOE": { fullName: "Elements of Electronics" },
    "FEE": { fullName: "Fundamentals of Electrical Engineering" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "BME": { fullName: "Basic Mechanical Engineering" },
    "ECN": { fullName: "Electrical Circuits and Network" },
    "GTD": { fullName: "Electrical Power Generation, Transmission, and Distribution" },
    "EEM": { fullName: "Electrical and Electronic Measurement" },
    "FPE": { fullName: "Fundamentals of Power Electronics" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "EMW": { fullName: "Electrical Material and Wiring Practice" },
    "EES": { fullName: "Environmental Education and Sustainability" },
    "DMT": { fullName: "D.C. Machines and Transformers" },
    "UEE": { fullName: "Utilization of Electrical Energy" },
    "DEM": { fullName: "Digital Electronics and Microcontroller Applications" },
    "EEC": { fullName: "Electrical Estimating and Contracting" },
    "CDS": { fullName: "Computer Aided Drawing and Simulation" },
    "EOM":{ fullName: "Elements of Electronics"}
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
