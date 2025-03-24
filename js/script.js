function openNewPage(event, url, buttonId) {
    event.preventDefault(); // 기본 동작 방지

    // 클릭한 버튼의 위치 계산
    const button = document.getElementById(buttonId);
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2; // 버튼의 가운데 X 좌표
    const centerY = rect.top + rect.height / 2; // 버튼의 가운데 Y 좌표

    // 오버레이 위치 설정
    const overlay = document.getElementById('overlay');
    overlay.style.left = `${centerX}px`;
    overlay.style.top = `${centerY}px`;

    // 모든 버튼의 텍스트 숨기기
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('hide-text');
    });

    // 선택된 버튼의 텍스트만 보이게 하기
    button.classList.remove('hide-text');

    // 오버레이 활성화
    overlay.classList.add('active');

    // 1초 후에 새 페이지로 이동
    setTimeout(() => {
        window.location.href = url; // 현재 창에서 새 페이지로 이동
    }, 1000); // 애니메이션 시간과 동일하게 설정
}

// 뒤로가기 기능
function goBack(event) {
    event.preventDefault(); // 기본 동작 방지

    // 오버레이 비활성화
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');

    // 1초 후에 현재 창을 닫고 index.html 열기
    setTimeout(() => {
        window.open('index.html', '_self'); // 현재 창에서 index.html 열기
        window.close(); // 현재 창 닫기
    }, 1000); // 애니메이션 시간과 동일하게 설정
}
