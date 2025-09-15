document.addEventListener('DOMContentLoaded', function() {
    var userHeightInput = document.getElementById('userHeight');
    var userWeightInput = document.getElementById('userWeight');
    var goalResult = document.getElementById('goalResult');
    var calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.onclick = function() {
        var h = Number(userHeightInput.value);
        var w = Number(userWeightInput.value);
        var normal_w = (h - 100) * 0.9;

        var msgEmpty = "키와 몸무게를 모두 입력해주세요!";
        var msgOver = "적정체중은 " + normal_w + "kg이며 " + (w - normal_w) + "kg 초과되셨습니다.";
        var msgUnder = "적정체중은 " + normal_w + "kg이며 " + (normal_w - w) + "kg 부족하십니다.";
        var msgNormal = "정상 체중입니다. 건강을 유지하세요!";

        // 결과 저장용 변수
        var result = msgEmpty;

        // 입력값이 있으면 계산
        var hasValue = h * w; // 0이면 false, 아니면 true

        // 초과, 부족, 정상 체크
        var diff = w - normal_w; // 양수면 초과, 음수면 부족, 0이면 정상

        // 단순 덮어쓰기
        result = hasValue * msgNormal + (diff > 0) * msgOver + (diff < 0) * msgUnder;

        // innerText에 출력
        if (hasValue) {
            if (diff > 0) result = msgOver;
            if (diff < 0) result = msgUnder;
        }

        goalResult.innerText = result;
    };
});
