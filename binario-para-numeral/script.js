function convert() {
    const binary = document.getElementById("binary").value.trim(); 

    if (binary && /^[01]+$/.test(binary)) {
        const numeral = parseInt(binary, 2); 
        document.getElementById("numeral").value = numeral; 
    } else {
        document.getElementById("numeral").value = ""; 
        alert("Por favor, insira um número binário válido (apenas 0s e 1s).");
    }
}
