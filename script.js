// ═══════════════════════════════════════════════════════════════════
//   캐릭터 프로필 페이지 - JavaScript
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    
    // ─────────────────────────────────────────────────────────────────────
    // 오디오 컨트롤
    // ─────────────────────────────────────────────────────────────────────
    const audioControl = document.getElementById('audioControl');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    if (audioControl && bgMusic) {
        audioControl.addEventListener('click', function() {
            if (isPlaying) {
                bgMusic.pause();
                audioControl.classList.remove('playing');
            } else {
                bgMusic.play().catch(e => console.log('Audio play failed:', e));
                audioControl.classList.add('playing');
            }
            isPlaying = !isPlaying;
        });
    }

    // ─────────────────────────────────────────────────────────────────────
    // 부드러운 스크롤 네비게이션
    // ─────────────────────────────────────────────────────────────────────
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─────────────────────────────────────────────────────────────────────
    // 네비게이션 활성 링크 표시
    // ─────────────────────────────────────────────────────────────────────
    const sections = document.querySelectorAll('.section');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ─────────────────────────────────────────────────────────────────────
    // 맨 위로 가기 버튼
    // ─────────────────────────────────────────────────────────────────────
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ─────────────────────────────────────────────────────────────────────
    // 라이트박스 (갤러리 이미지 확대)
    // ─────────────────────────────────────────────────────────────────────
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
    const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
    const lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;
    const galleryImages = [];

    // 갤러리 이미지 수집
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        if (img) {
            galleryImages.push({
                src: img.src,
                caption: caption ? caption.textContent : ''
            });
            
            item.addEventListener('click', function() {
                openLightbox(index);
            });
        }
    });

    function openLightbox(index) {
        if (!lightbox || galleryImages.length === 0) return;
        
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        if (!lightboxImage || !lightboxCaption) return;
        
        const current = galleryImages[currentIndex];
        lightboxImage.src = current.src;
        lightboxCaption.textContent = current.caption;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // 라이트박스 외부 클릭 시 닫기
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 키보드 네비게이션
    document.addEventListener('keydown', function(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // ─────────────────────────────────────────────────────────────────────
    // 스크롤 애니메이션 (Intersection Observer)
    // ─────────────────────────────────────────────────────────────────────
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소 선택
    const animateElements = document.querySelectorAll(
        '.appearance-item, .timeline-item, .trait-card, .personality-card, ' +
        '.speech-item, .stage, .scene-card, .gallery-item'
    );

    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ─────────────────────────────────────────────────────────────────────
    // 모든 이미지에 클릭 시 확대 기능 추가 (갤러리 외 이미지)
    // ─────────────────────────────────────────────────────────────────────
    const contentImages = document.querySelectorAll(
        '.profile-image, .appearance-image img, .timeline-image, ' +
        '.trait-image, .personality-image, .speech-image, .stage-image, ' +
        '.scene-image, .first-meeting-image'
    );

    contentImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            if (!lightbox || !lightboxImage || !lightboxCaption) return;
            
            lightboxImage.src = this.src;
            lightboxCaption.textContent = this.alt || '';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // 갤러리 네비게이션 버튼 숨기기
            if (lightboxPrev) lightboxPrev.style.display = 'none';
            if (lightboxNext) lightboxNext.style.display = 'none';
        });
    });

    // 갤러리 열 때 네비게이션 버튼 보이기
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            if (lightboxPrev) lightboxPrev.style.display = 'block';
            if (lightboxNext) lightboxNext.style.display = 'block';
        });
    });

    // ─────────────────────────────────────────────────────────────────────
    // 히어로 섹션 패럴랙스 효과
    // ─────────────────────────────────────────────────────────────────────
    const hero = document.getElementById('hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled < heroHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / heroHeight);
            }
        });
    }

    // ─────────────────────────────────────────────────────────────────────
    // 이미지 로딩 에러 처리
    // ─────────────────────────────────────────────────────────────────────
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        img.addEventListener('error', function() {
            // 이미지 로드 실패 시 플레이스홀더 표시
            this.src = 'data:image/svg+xml,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                    <rect fill="#1a1a1a" width="400" height="400"/>
                    <text fill="#666" font-family="Arial" font-size="16" text-anchor="middle" x="200" y="200">
                        이미지 준비 중
                    </text>
                </svg>
            `);
            this.style.background = '#1a1a1a';
        });
    });

    // ─────────────────────────────────────────────────────────────────────
    // 다운로드 버튼 클릭 이벤트
    // ─────────────────────────────────────────────────────────────────────
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // href가 "#"인 경우 기본 동작 방지
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('다운로드 링크를 설정해주세요.');
            }
        });
    }

    console.log('캐릭터 프로필 페이지가 로드되었습니다.');
});
