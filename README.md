# 캐릭터 프로필 페이지

dojinprofile.github.io 스타일을 참고한 캐릭터 소개 페이지입니다.

## 📁 폴더 구조

```
character-profile-page/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
├── README.md           # 사용 가이드
└── assets/             # 이미지 및 미디어 폴더 (직접 생성 필요)
    ├── thumbnail.jpg           # 히어로 섹션 메인 이미지 (원형)
    ├── profile-main.jpg        # 프로필 메인 이미지
    ├── appearance-body.jpg     # 외형 - 체격
    ├── appearance-face.jpg     # 외형 - 얼굴
    ├── appearance-scars.jpg    # 외형 - 흉터
    ├── appearance-style.jpg    # 외형 - 스타일
    ├── background-past.jpg     # 배경 - 과거
    ├── background-growth.jpg   # 배경 - 성장
    ├── background-present.jpg  # 배경 - 현재
    ├── trait-weapon.jpg        # 특이사항 - 무기
    ├── trait-preference.jpg    # 특이사항 - 취향
    ├── trait-talent.jpg        # 특이사항 - 재능
    ├── trait-calling.jpg       # 특이사항 - 호칭
    ├── personality-default.jpg # 성격 - 기본
    ├── personality-relationship.jpg # 성격 - 인간관계
    ├── personality-core.jpg    # 성격 - 핵심
    ├── personality-stress.jpg  # 성격 - 스트레스
    ├── speech-default.jpg      # 말투 - 기본
    ├── speech-command.jpg      # 말투 - 명령
    ├── speech-bored.jpg        # 말투 - 지루할 때
    ├── speech-interest.jpg     # 말투 - 흥미
    ├── speech-angry.jpg        # 말투 - 화날 때
    ├── relationship-stage1.jpg # 관계 1단계
    ├── relationship-stage2.jpg # 관계 2단계
    ├── relationship-stage3.jpg # 관계 3단계
    ├── scene-feeding.jpg       # 장면 - 사육
    ├── scene-threat.jpg        # 장면 - 위협
    ├── scene-obsession.jpg     # 장면 - 집착
    ├── first-meeting.jpg       # 첫 만남
    ├── bgm.mp3                  # 배경 음악 (선택)
    └── gallery/                # 갤러리 이미지 폴더
        ├── 01.jpg
        ├── 02.jpg
        └── ...
```

## 🚀 사용 방법

### 1. assets 폴더 생성
프로젝트 루트에 `assets` 폴더를 만들고, 위 구조에 맞게 이미지를 넣어주세요.

### 2. 콘텐츠 수정
`index.html`을 열어서 캐릭터 정보를 수정하세요:

- **캐릭터 이름**: `.hero-name` 과 프로필 테이블의 이름
- **캐릭터 설명**: 각 섹션의 텍스트
- **이미지 경로**: 각 `<img src="">` 태그의 경로
- **다운로드 링크**: `.download-btn`의 `href` 속성

### 3. 배경 음악 설정 (선택)
`assets/bgm.mp3` 파일을 추가하면 오른쪽 상단의 음악 버튼으로 재생할 수 있습니다.

### 4. GitHub Pages에 배포

#### 방법 1: 기존 레포지토리에 파일 업로드
1. https://github.com/gakumasu1717-cloud/gakumasu1717.github.io 에 접속
2. 기존 `index.html`을 백업하거나 삭제
3. 이 폴더의 파일들을 업로드
4. `assets` 폴더와 이미지도 함께 업로드

#### 방법 2: GitHub Desktop 사용
1. 레포지토리를 로컬에 클론
2. 파일들을 복사
3. 커밋 후 푸시

## 🎨 커스터마이징

### 색상 변경
`style.css`의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #b08968;      /* 메인 색상 */
    --primary-light: #d4a574;      /* 밝은 메인 색상 */
    --primary-dark: #8b6b4a;       /* 어두운 메인 색상 */
    --accent-color: #c9a87c;       /* 강조 색상 */
    --bg-dark: #0a0a0a;            /* 배경색 */
    --bg-card: #151515;            /* 카드 배경색 */
}
```

### 폰트 변경
`index.html`의 Google Fonts 링크와 `style.css`의 `font-family`를 수정하세요.

## 📱 반응형 지원
- 데스크톱 (1200px+)
- 태블릿 (768px - 1024px)
- 모바일 (480px 이하)

## ✨ 기능
- 스크롤 애니메이션
- 이미지 라이트박스 (클릭 시 확대)
- 갤러리 좌우 네비게이션
- 부드러운 스크롤 네비게이션
- 배경 음악 재생
- 맨 위로 가기 버튼
- 히어로 섹션 패럴랙스 효과

## 📄 라이선스
자유롭게 사용하세요!
