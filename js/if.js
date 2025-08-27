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

    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2024 Summer Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22226-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2024 Winter Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22226-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2023 Winter Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22226-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2023 Summer Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22226-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2022 Winter Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22226-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2022 Summer Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22226-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2022 Summer Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22226-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2019 Winter Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22226-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2019 Winter Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22226-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2019 Summer Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22226-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2019 Summer Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22226-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2018 Winter Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22226-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2018 Winter Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22226-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2018 Summer Programming in 'C' Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22226-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem2", subject: "PIC", title: "22226 PIC 2018 Summer Programming in 'C' Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22226-2018-Summer-question-paper.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2024 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22310-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2023 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22310-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2023 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22310-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2022 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22310-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22310-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Winter Basic Electrical and Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22310-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2019 Summer Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22310-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2018 Winter Basic Electrical and Electronics Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22310-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "BEE", title: "22210 BEE 2018 Winter Basic Electrical and Electronics Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22310-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2024 Summer Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22317-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2023 Winter Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22317-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2023 Summer Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22317-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2022 Summer Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22317-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2019 Winter Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22317-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2019 Winter Data Structure Using C Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22317-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2019 Summer Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22317-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2019 Summer Data Structure Using C Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22317-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2018 Winter Data Structure Using C Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22317-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DSU", title: "22317 DSU 2018 Winter Data Structure Using C Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22317-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2024 Summer Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22316-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2023 Winter Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22316-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2023 Summer Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22316-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2022 Summer Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22316-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2019 Winter Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22316-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2019 Winter Object Oriented Programming Using C++ Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22316-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2019 Summer Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22316-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2019 Summer Object Oriented Programming Using C++ Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22316-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2018 Winter Object Oriented Programming Using C++ Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22316-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "OOP", title: "22316 OOP 2018 Winter Object Oriented Programming Using C++ Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22316-2018-Winter-model-answer-paper.pdf" },

    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2023 Winter Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22319-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2023 Summer Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22319-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2022 Winter Database Management System Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22319-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2022 Summer Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22319-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2019 Winter Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22319-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2019 Winter Database Management System Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22319-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2019 Summer Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22319-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2019 Summer Database Management System Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22319-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2018 Winter Database Management System Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22319-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DMS", title: "22319 DMS 2018 Winter Database Management System Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22319-2018-Winter-model-answer-paper.pdf" },

    
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2024 Summer Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22225-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2024 Summer Digital Techniques and Microprocessor Model Answer Paper", link: "" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2023 Winter Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22225-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2023 Summer Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22225-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2022 Summer Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22225-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2022 Summer Digital Techniques and Microprocessor Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22225-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2019 Winter Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22225-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2019 Winter Digital Techniques and Microprocessor Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22225-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2019 Summer Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22225-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2018 Winter Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22225-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2018 Winter Digital Techniques and Microprocessor Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22225-2018-Winter-model-answer-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2018 Summer Digital Techniques and Microprocessor Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22225-2018-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem3", subject: "DTM", title: "22225 DTM 2018 Summer Digital Techniques and Microprocessor Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22225-2018-Summer-model-answer-paper.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2024 Summer Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22412-2024-Summer-question-paper.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2023 Winter Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22412-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2023 Summer Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22412-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2022 Winter Java Programming Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22412-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2022 Summer Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22412-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2022 Summer Java Programming Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22412-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2019 Winter Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22412-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2019 Winter Java Programming Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22412-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2019 Summer Java Programming Question Paper", link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22412-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "JPR", title: "22412 JPR 2019 Summer Java Programming Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22412-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
    
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2023 Winter Data Communication and Computer Network Question Paper", link: "https://msbte.engg-info.website/sites/default/files/winter2023/22414-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2023 Summer Data Communication and Computer Network Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22414-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2022 Summer Data Communication and Computer Network Question Paper", link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22414-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2022 Summer Data Communication and Computer Network Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22414-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2019 Winter Data Communication and Computer Network Question Paper", link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22414-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2019 Winter Data Communication and Computer Network Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22414-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf" },
    { scheme: "I", semester: "sem4", subject: "DCN", title: "22414 DCN 2019 Summer Data Communication and Computer Network Model Answer Paper", link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22414-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf" },
];


const subjectFullForms = 
{
    "BMS": { fullName: "Basic Mathematics" },
    "ENG": { fullName: "Communication Skills (English)" },
    "BSC": { fullName: "Basic Science (Physics, Chemistry)" },
    "ICT": { fullName: "Fundamentals of ICT" },
    "WPC": { fullName: "Engineering Workshop Practice (Computer Group)" },
    "YAM": { fullName: "Yoga and Meditation" },
    "EGP": { fullName: "Engineering Graphics (Electronics, Computer and allied branches)" },
    "AMS": { fullName: "Applied Mathematics" },
    "BEE": { fullName: "Basic Electrical and Electronics Engineering" },
    "PIC": { fullName: "Programming in 'C'" },
    "BLP": { fullName: "Linux Basics" },
    "PCO": { fullName: "Professional Communication" },
    "SFS": { fullName: "Social and Life Skills" },
    "WPD": { fullName: "Web Page Designing" },
    "DSU": { fullName: "Data Structure using C" },
    "DMS": { fullName: "Database Management System" },
    "OOP": { fullName: "Object Oriented Programming using C++" },
    "DTM": { fullName: "Digital Techniques and Microprocessors" },
    "EIC": { fullName: "Essence of Indian Constitution" },
    "AMT": { fullName: "Applied Multimedia Techniques" },
    "EES": { fullName: "Environmental Education and Sustainability" },
    "JPR": { fullName: "Java Programming" },
    "DCN": { fullName: "Data Communication and Computer Network" },
    "INS": { fullName: "Information Security" },
    "PWP": { fullName: "Python Programming" },
    "IOT": { fullName: "Internet of Things" }
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

