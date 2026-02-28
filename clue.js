// clues.js - Controle Centralizado das Pistas

// 1. Configuração das Pistas
// Formato da data: "YYYY-MM-DDTHH:mm:ss" (Ano-Mês-Dia T Hora:Minuto:Segundo)
// Nota: Aqui o mês é o número normal! Março = 03.
const configPistas = {
    "pista1": { 
        dataLiberacao: "2026-02-24T12:00:00",
        proximaPagina: "2E2723.html" 
    },
    "pista2": { 
        dataLiberacao: "2026-02-26T12:00:00", 
        proximaPagina: "3E8DS9.html" 
    },
    "pista3": { 
        dataLiberacao: "2026-02-28T09:10:00", 
        proximaPagina: "4EID92.html" 
    },
    "pista4": { 
        dataLiberacao: "2026-03-01T15:45:00",
        proximaPagina: "5ED98A.html" 
    },
    "pista5": { 
        dataLiberacao: "2026-03-03T08:21:00",
        proximaPagina: "6EDDSA.html" 
    },
    "pista6": { 
        dataLiberacao: "2026-03-04T19:30:00",
        proximaPagina: "7EIOSJD.html" 
    },
    "pista7": { 
        dataLiberacao: "2026-03-06T10:15:00",
        proximaPagina: "8E0D9S.html" 
    },
    "pista8": { 
        dataLiberacao: "2026-03-08T19:10:00",
        proximaPagina: "9ED09SA.html" 
    },
    "pista9": { 
        dataLiberacao: "2026-03-09T08:08:00",
        proximaPagina: "9WEDIKS.html" 
    },
    "pista10": { 
        dataLiberacao: "2026-03-10T08:30:00",
        proximaPagina: "final.html" 
    }
};

// 2. Função principal que roda o contador
function iniciarContador(idDaPista) {
    const config = configPistas[idDaPista];
    
    // Se a pista não existir no dicionário acima, não faz nada
    if (!config) {
        console.error("Pista não encontrada: " + idDaPista);
        return;
    }

    // Converte a string de data para o tempo matemático do JavaScript
    const targetDate = new Date(config.dataLiberacao).getTime();
    
    // Pega os elementos do HTML
    const timerText = document.getElementById("timer-text");
    const timerSpan = document.getElementById("timer");
    const nextBtn = document.getElementById("next-clue-btn");

    // Já injeta o link da próxima página no botão
    nextBtn.href = config.proximaPagina;

    // Inicia o relógio
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(x);
            // Esconde o relógio e mostra o botão
            timerText.style.display = "none";
            nextBtn.style.display = "inline-block";
        } else {
            // Calcula o tempo restante
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Monta o texto bonitinho
            let timeString = "";
            if(days > 0) timeString += days + "d ";
            timeString += hours + "h " + minutes + "m " + seconds + "s";
            
            timerSpan.innerHTML = timeString;
        }
    }, 1000);
}