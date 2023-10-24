function porownaj(a, b) {
    return a === 20 || b === 20 || (a + b <= 20);
}

/* console.log(porownaj (5, 10)); */ /* TRUE */
/* console.log(porownaj (10, 10)); */ /* TRUE */
/* console.log(porownaj (10, 20)); */ /* TRUE */
console.log(porownaj (5, 25)); /* FALSE */