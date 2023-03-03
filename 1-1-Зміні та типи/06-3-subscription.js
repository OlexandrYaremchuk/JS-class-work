/*
 * Напиши скрипт перевірки підписки користувача при доступі до контенту
 * - Є три типи підписки: free, pro та vip.
 * - Отримати доступ можуть лише користувачі pro та vip
 */

const sub = 'pro';

// якщо користувач pro або користувач vip тоді є доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true
// false || true => true
// false || false => false

console.log('Є доступ до контенту? ', canAccessContent);
