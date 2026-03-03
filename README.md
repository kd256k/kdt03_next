# KDT03 Next.js 포트폴리오 | KDT03 Next.js Portfolio

## 프로젝트 소개 | About

AI 데이터 분석 풀스택 웹 개발자 양성과정(2025 3기) Next.js 기반 포트폴리오 웹 애플리케이션입니다.
공공 API 연동, 인증 시스템, 다양한 UI 컴포넌트를 활용한 실습 프로젝트입니다.

A portfolio web application built with Next.js during the AI Data Analysis Full-Stack Web Developer Training Program (2025 Cohort 3). Features public API integration, authentication, and various UI components.

## 기술 스택 | Tech Stack

- **Framework**: Next.js (App Router), TypeScript
- **Styling**: Tailwind CSS 4, KRDS Navy 디자인 시스템
- **Auth**: Supabase (GitHub OAuth, Email/Password)
- **State**: Jotai (전역 상태 관리)
- **API**: 부산 공공데이터 포털 (축제, 맛집)

## 주요 기능 | Features

- **로그인**: GitHub OAuth 및 이메일/비밀번호 인증 (Supabase)
- **축제 정보**: 부산 축제 목록 조회 및 상세 정보 (구군별 필터링, 카카오 지도 연동)
- **맛집 정보**: 부산 맛집 목록 및 상세 페이지 (JSON 데이터, 무한 스크롤)
- **로또 번호 생성기**: 랜덤 번호 생성 UI
- **할일 목록**: localStorage 기반 Todo 앱

## 페이지 구성 | Pages

```
/                    → GitHub OAuth 로그인
/history             → 이메일/비밀번호 로그인
/lotto               → 로또 번호 생성
/festival            → 축제 목록 (Skeleton UI)
/festival/contents   → 축제 상세
/busanFood           → 부산맛집 (무한스크롤)
/restaurants         → 맛집 목록 (JSON)
/restaurants/[id]    → 맛집 상세
/todolist            → 할일목록
```

## 실행 방법 | Getting Started

```bash
git clone https://github.com/kd256k/kdt03_next.git
cd kdt03_next
npm install
npm run dev
```

http://localhost:3000 에서 확인

## 환경변수 | Environment Variables

`.env.local` 파일을 생성하고 아래 항목을 설정하세요.

```
NEXT_PUBLIC_API_KEY=<부산 공공데이터 API 키>
NEXT_PUBLIC_SUPABASE_URL=<Supabase 프로젝트 URL>
NEXT_PUBLIC_SUPABASE_KEY=<Supabase anon key>
```

## 색상 팔레트 | Color Palette (KRDS Navy)

| 용도 | 색상 코드 |
|------|-----------|
| Primary | #002046 |
| Secondary | #003675 |
| Hover | #2A5C96 |
| Border | #CDD7E6 |
| Header BG | #D3E1FB |
| Page BG | #EDF1F5 |
