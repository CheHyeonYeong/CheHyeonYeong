import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
![header](https://capsule-render.vercel.app/api?type=waving&color=ff9945&fontColor=FFFFFF&height=300&section=header&text=🥕HyeonYeong's%20Hub🥕&fontSize=50)

# 안녕 CheHyeonYeong's repository👋

## Who is ME?
    
  > 안녕 world!

  안녕은 만났을 때와 헤어질 때 모두 사용할 수 있는 인삿말입니다.
  이제 사회의 첫 발을 딛으며 학생을 졸업하는 채현영이 사회에게 인사하고자 "안녕, world!"라는 인삿말을 붙였습니다.

  > “효율성을 위해 오늘도 달립니다.”
  
  호기심이 생기면 바로 도전하며 효율적인 업무 수행을 위해 늘 고민합니다.
  특히 프로젝트를 진행할 때 결과물의 품질과 시간 절약을 동시에 이끌어내고자 합니다.
  
  > 꾸준히 성장하는 사람이 되기 위해 다짐합니다.
  
  멈춤은 NO! 항상 나아가기 위해 빠르게 도전하고 실행하겠습니다.

<a href="https://www.gitanimals.org/en_US?utm_medium=image&utm_source=CheHyeonYeong&utm_content=farm">
<img
  src="https://render.gitanimals.org/farms/CheHyeonYeong"
  width="600"
  height="300"
/>
</a>


## 🔧 기술 스택

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white) 

## 📕 Latest Blog Posts

`;

let footer=`

<br>

## 💬 문의

지금까지 안녕을 말하던 채현영이었습니다.
혹시 커피챗이나 입사 제안을 하고 싶다면, 해당 연락처로 연락 부탁드립니다:

- 이메일: [chehyeonyeong@gmail.com](mailto:chehyeonyeong@gmail.com)
- GitHub: [CheHyeonYeong](https://github.com/CheHyeonYeong)
- LinkedIn: [채현영](https://www.linkedin.com/in/%ED%98%84%EC%98%81-%EC%B1%84-8b230b255/)
- 블로그: [CoHe](https://code-chy.tistory.com/)
  

![Footer](https://capsule-render.vercel.app/api?type=waving&color=ff9945&height=200&section=footer)

`

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://code-chy.tistory.com/rss'); // 본인의 블로그 주소
    
    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;
    
    text += footer;
    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        
    })
})();
