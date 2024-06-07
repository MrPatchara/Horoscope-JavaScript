function getHoroscope() {
    const month = document.getElementById('month').value.trim().toLowerCase();
    let sign = '';
    let fortunes = [];
    let imageUrl = '';

    switch(month) {
        case 'january':
            sign = 'Capricorn';
            imageUrl = 'Pic/1.png ';
            fortunes = [
                "Today is a good day to start something new.",
                "Your hard work will pay off soon.",
                "Expect a surprise gift from someone close."
            ];
            break;
        case 'february':
            sign = 'Aquarius';
            imageUrl = 'Pic/2.png';
            fortunes = [
                "A new opportunity is on the horizon.",
                "Take time to reflect on your goals.",
                "You will reconnect with an old friend."
            ];
            break;
        case 'march':
            sign = 'Pisces';
            imageUrl = 'Pic/3.png';
            fortunes = [
                "Creativity is your strong suit today.",
                "You will find peace in nature.",
                "Expect to be inspired by someone close."
            ];
            break;
        case 'april':
            sign = 'Aries';
            imageUrl = 'Pic/4.png';
            fortunes = [
                "Your energy levels are high today.",
                "Take a bold step forward in your career.",
                "An exciting adventure awaits you."
            ];
            break;
        case 'may':
            sign = 'Taurus';
            imageUrl = 'Pic/5.png';
            fortunes = [
                "Stability and comfort are coming your way.",
                "A financial opportunity will present itself.",
                "You will discover a hidden talent."
            ];
            break;
        case 'june':
            sign = 'Gemini';
            imageUrl =  'Pic/6.png';
            fortunes = [
                "Your social skills will be put to good use.",
                "A new hobby will bring you joy.",
                "You will receive good news from afar."
            ];
            break;
        case 'july':
            sign = 'Cancer';
            imageUrl = 'Pic/7.png';
            fortunes = [
                "Family ties will strengthen.",
                "A dream you've had will come true.",
                "Expect to feel very emotional today."
            ];
            break;
        case 'august':
            sign = 'Leo';
            imageUrl = 'Pic/8.png';
            fortunes = [
                "You will be in the spotlight today.",
                "A leadership opportunity will arise.",
                "Your confidence will inspire others."
            ];
            break;
        case 'september':
            sign = 'Virgo';
            imageUrl = 'Pic/9.png';
            fortunes = [
                "Your attention to detail will pay off.",
                "Someone will appreciate your hard work.",
                "A small act of kindness will be rewarding."
            ];
            break;
        case 'october':
            sign = 'Libra';
            imageUrl = 'Pic/10.png';
            fortunes = [
                "Balance and harmony are key today.",
                "A new relationship will blossom.",
                "You will make a fair and just decision."
            ];
            break;
        case 'november':
            sign = 'Scorpio';
            imageUrl = 'Pic/11.png';
            fortunes = [
                "Your passion will drive you forward.",
                "A mystery will be solved.",
                "You will experience a deep transformation."
            ];
            break;
        case 'december':
            sign = 'Sagittarius';
            imageUrl = 'Pic/12.png';
            fortunes = [
                "Adventure is calling your name.",
                "You will learn something new today.",
                "A spontaneous decision will bring joy."
            ];
            break;
        default:
            document.getElementById('result').innerText = "Please enter a valid month.";
            document.getElementById('result').classList.add('show');
            return;
    }

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('zodiac-image').src = imageUrl;
    document.getElementById('zodiac-image').alt = sign;
    document.getElementById('fortune-text').innerText = `Your sign is ${sign}. Your fortune: ${randomFortune}`;
    document.getElementById('result').classList.add('show');
}
