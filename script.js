document.addEventListener('DOMContentLoaded', function() {
    const login = document.querySelector('mdui-chip[name="login"]');
    const watch = document.querySelector('mdui-chip[name="watch"]');
    const share = document.querySelector('mdui-chip[name="share"]');
    const coinInput = document.querySelector('#coin');
    const coinsSelect = document.querySelector('#coins');
    const experienceInput = document.querySelector('#experience');
    const targetLevelSelect = document.querySelector('#targetLevel');
    const resultButton = document.querySelector('#result');

    resultButton.addEventListener('click', function() {
        // 获取当前经验
        let experience = parseInt(experienceInput.value) || 0;
        // 获取目标等级所需经验
        let targetLevel = parseInt(targetLevelSelect.value) || 28800;
        // 获取每天投币数量
        let dailyCoins = parseInt(coinsSelect.value) || 0;
        // 获取当前硬币数
        let coin = parseInt(coinInput.value) || 0;

        // 计算每天获得的经验
        let dailyExperience = (login.selected ? 5 : 0) +
                              (watch.selected ? 5 : 0) +
                              (share.selected ? 5 : 0) +
                              (dailyCoins * 10);

        // 如果没有选择任何选项或输入任何值，则不进行计算
        if (dailyExperience === 0 && coin === 0) {
            alert("请至少选择一个选项或输入一个值！");
            return;
        }

        // 简化公式
        let experienceFromCoins = (coin / dailyCoins) * dailyExperience;
        let daysNeeded = (targetLevel - experience - experienceFromCoins) / dailyExperience;

        // 输出结果
        if (daysNeeded <= 0) {
            mdui.snackbar({
                message: "您太牛逼了，今天就能完成！",
                position: 'bottom',
                timeout: 3000
            });
        } else {
            mdui.snackbar({
                message: `您需要大约 ${Math.ceil(daysNeeded)} 天才能达到目标等级。`,
                position: 'bottom',
                timeout: 3000
            });
        }
    });
});