document.getElementById('flower_Btn').addEventListener('click', function() {
    var year = document.getElementById('year').value;
    var month = parseInt(document.getElementById('month').value); // 숫자 변환
    var day = parseInt(document.getElementById('day').value); // 숫자 변환

    // 입력값 검사
    if (!year || !month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
        document.getElementById('result').innerHTML = "올바른 날짜를 입력해주세요!";
        return;
    }

    // 월별로 일수를 고려한 검사 (2월, 30일인 달 등)
    if ((month === 2 && day > 28) || // 2월은 최대 28일
        ([4, 6, 9, 11].includes(month) && day > 30)) { // 4, 6, 9, 11월은 30일까지
        document.getElementById('result').innerHTML = "올바른 날짜를 입력해주세요!";
        return;
    }

    // 탄생화와 꽃말 정보 가져오기
    var flowerMessage = getFlowerMessage(month);
    
    // 결과 출력
    document.getElementById('result').innerHTML = `${month}월의 탄생화는 <strong style="font-weight: bold; color: #FF6347; font-size: 1.3rem;">${flowerMessage.flower}</strong>이고, 꽃말은 <strong style="font-weight: bold; color: #4682B4; font-size: 1.3rem;">${flowerMessage.content}</strong>입니다.`;
});

// 탄생화와 꽃말을 배열로 저장
const birthday_flower = [
    { month: 1, flower: '수선화', content: '자기애, 자존심, 외로움' },
    { month: 2, flower: '제비꽃', content: '겸손, 양보' },
    { month: 3, flower: '수선화', content: '자기애, 자존심, 외로움' },
    { month: 4, flower: '스위트피', content: '추억, 즐거움' },
    { month: 5, flower: '은방울꽃', content: '희망, 섬세함' },
    { month: 6, flower: '백합', content: '순결' },
    { month: 7, flower: '미나리아재비', content: '아름다움, 인격' },
    { month: 8, flower: '글라디올러스', content: '비밀, 상상, 견고함' },
    { month: 9, flower: '물망초', content: '진실한 사랑' },
    { month: 10, flower: '금잔화', content: '실망, 비애' },
    { month: 11, flower: '국화', content: '성실, 진실' },
    { month: 12, flower: '포인세티아', content: '축하, 감사' }
];

// 월에 해당하는 탄생화와 꽃말 찾기
function getFlowerMessage(month) {
    // 배열을 순회하여 해당 월에 맞는 탄생화와 꽃말을 찾기
    for (let i = 0; i < birthday_flower.length; i++) {
        if (birthday_flower[i].month === month) {
            return birthday_flower[i]; // 해당 월에 맞는 flower 객체 반환
        }
    }
    // 해당 월에 맞는 값이 없으면 "알 수 없음" 반환
    return { flower: "알 수 없음", content: "알 수 없음" };
}
