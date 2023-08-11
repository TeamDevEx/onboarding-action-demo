horoscope = (month) => {
  switch (month) {
    case 'Jan':
      const jan = {
        zodiac: 'Taurus',
        horoscope: 'You are a cow',
      };
      return jan;

    case 'Feb':
      const feb = {
        zodiac: 'Pisces',
        horoscope: 'You are a fish',
      };
      return feb;

    case 'Mar':
      const mar = {
        zodiac: 'Gemini',
        horoscope: 'You are a twins',
      };
      return mar;

    case 'Apr':
      const apr = {
        zodiac: 'Cancer',
        horoscope: 'You are a crab',
      };
      return apr;

    case 'May':
      const may = {
        zodiac: 'Saguitaruis',
        horoscope: 'You are so wierd',
      };
      return may;

    default:
      return 'wrong entry';
  }
};

module.exports = horoscope;
