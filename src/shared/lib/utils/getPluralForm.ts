type PluralForms = {
  one: string;
  few: string;
  many: string;
};

/**
 * Функция для определения множественного числа слова в зависимости от количества
 * @param {Number} count - Количество
 * @param {PluralForms} forms - Формы слова
 * @returns {String}
 */
export function getPluralForm(count: number, forms: PluralForms) {
  if (count % 10 === 1 && count % 100 !== 11) {
    return forms.one;
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    return forms.few;
  }
  return forms.many;
}
