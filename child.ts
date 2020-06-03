import { delay } from 'https://deno.land/std/async/delay.ts';

console.log('hello');

export default async function() {
    console.log('hello workd');
    await delay(100);
}
