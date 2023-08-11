const horoscope = require('./index');

describe('Horoscope', () => {
  it('Jan', () => {
    const jan = {
      zodiac: 'Taurus',
      horoscope: 'You are a cow',
    };
    expect(horoscope('Jan')).toEqual(jan);
  });

  it('Feb', () => {
    const feb = {
      zodiac: 'Pisces',
      horoscope: 'You are a fish',
    };
    expect(horoscope('Feb')).toEqual(feb);
  });

  it('Mar', () => {
    const mar = {
      zodiac: 'Gemini',
      horoscope: 'You are a twins',
    };
    expect(horoscope('Mar')).toEqual(mar);
  });

  it('Apr', () => {
    const apr = {
      zodiac: 'Cancer',
      horoscope: 'You are a crab',
    };
    expect(horoscope('Apr')).toEqual(apr);
  });

  it('May', () => {
    const may = {
      zodiac: 'Saguitaruis',
      horoscope: 'You are so wierd',
    };
    expect(horoscope('May')).toEqual(may);
  });

  it('wrong entry', () => {
    expect(horoscope('Decc')).toEqual('wrong entry');
  });
});
