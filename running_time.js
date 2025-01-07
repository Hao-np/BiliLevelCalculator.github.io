var blog_running_days = document.getElementById("blog_running_days");
var blog_running_hours = document.getElementById("blog_running_hours");
var blog_running_mins = document.getElementById("blog_running_mins");
var blog_running_secs = document.getElementById("blog_running_secs");

function refresh_blog_running_time() {
    var startTimestamp = new Date(2024, 12, 1, 0, 0, 0).getTime(); // 假设站点开始运行的时间为2024年3月24日
    var currentTime = new Date().getTime();
    var totalMilliseconds = currentTime - startTimestamp;

    var totalSeconds = Math.floor(totalMilliseconds / 1000);
    var totalMinutes = Math.floor(totalSeconds / 60);
    var totalHours = Math.floor(totalMinutes / 60);
    var totalDays = Math.floor(totalHours / 24);
    var remainingDays = totalDays % 365;
    var hours = Math.floor((totalMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((totalMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);

    blog_running_days.innerHTML = remainingDays;
    blog_running_hours.innerHTML = hours;
    blog_running_mins.innerHTML = minutes;
    blog_running_secs.innerHTML = seconds;
}
refresh_blog_running_time();
if (typeof bottomTimeIntervalHasSet == "undefined") {
    var bottomTimeIntervalHasSet = true;
    setInterval(refresh_blog_running_time, 500);
}