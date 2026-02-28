
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
        dataLiberacao: "2026-03-06T16:30:00",
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

function iniciarContador(idDaPista) {
    const config = configPistas[idDaPista];
    
    if (!config) {
        console.error("Pista não encontrada: " + idDaPista);
        return;
    }

    const targetDate = new Date(config.dataLiberacao).getTime();
    
    const timerText = document.getElementById("timer-text");
    const timerSpan = document.getElementById("timer");
    const nextBtn = document.getElementById("next-clue-btn");

    nextBtn.href = config.proximaPagina;

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(x);
    
            timerText.style.display = "none";
            nextBtn.style.display = "inline-block";
        } else {
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
            let timeString = "";
            if(days > 0) timeString += days + "d ";
            timeString += hours + "h " + minutes + "m " + seconds + "s";
            
            timerSpan.innerHTML = timeString;
        }
    }, 1000);
}