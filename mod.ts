async function main() {
    const { default: child } = await import('./child.ts');
    await child();
    console.log('exit');
}

if (import.meta.main) {
    main();
}