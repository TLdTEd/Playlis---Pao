const playlistData = [
    {
        title: "1. Sanctuary - Joji",
        lyrics: "Inglés:\nNot anyone, you're the one\nMore than fun, you're the sanctuary\n'Cause what you want is what I want\nSincerity\n\nEspañol:\nNo cualquiera, eres tú.\nMás que diversión, eres el refugio.\nPorque lo que tú quieres es lo que yo quiero:\nSinceridad.",
        photo: "Nectar.png"
    },
    {
        title: "2. Baile inolvidable - Bad Bunny",
        lyrics: "Mientras uno esté vivo\nuno debe amar lo más que pueda.",
        photo: "DTMF.png"
    },
    {
        title: "3. White ferrari - Frank Ocean",
        lyrics: "Inglés:\nI care for you still, and I will forever\nThat was my part of the deal, honest\nWe got so familiar\n\nEspañol:\nTodavía me importas, y lo haré para siempre.\nEsa era mi parte del trato, de verdad\nNos volvimos tan cercanos.",
        photo: "blond.png"
    },
    {
        title: "4. El tesoro - El mató a un policía motorizado",
        lyrics: "Perdón si estoy de nuevo acá\nPensé que habías preguntado por mí\nMe gusta estar de nuevo acá\nAunque no hayas preguntado por mí\nVoy a quedarme un poco acá\nCuidarte siempre a vos en la derrota\nHasta el final, el final",
        photo: "Tesoro.png"
    },
    {
        title: "5. Quiéreme - Latin Mafia / Fred again..",
        lyrics: "Puede que no sepa bailar\nY aún así me quedo por ti\nY yo no me puedo acostar\nY aún así me acuesto en ti",
        photo: "9motnh50hours.png"
    },
    {
        title: "6. Te estoy correteando - Latin Mafia",
        lyrics: "Cuéntame, ¿qué ha sido de ti?\nExtráñame, te extraño a ti",
        photo: "9motnh50hours.png"
    },
    {
        title: "7. Godspeed - Frank Ocean",
        lyrics: "Inglés:\nWishing you godspeed, glory\nThere will be mountains you won't move\nStill, I'll always be there for you\nHow I do\nI let go of my claim on you\nIt's a free world\nYou'll look down on where you came from sometimes\nBut you'll have this place to call home, always\n\nEspañol:\nTe deseo buen camino y gloria.\nHabrá montañas que no podrás mover;\naun así, siempre estaré ahí para ti.\nEs lo que hago:\nrenuncio a cualquier derecho sobre ti.\nEs un mundo libre.\nA veces mirarás hacia atrás, hacia tus orígenes,\npero siempre tendrás este lugar al que llamar hogar.",
        photo: "blond.png"
    },
    {
        title: "8. Neo roneo - Rusowsky / Latin Mafia",
        lyrics: "Quererte hasta que duela\nTodo este corazón caliente, no me sirve la mente\nNunca me ha fallado, siempre ha sido pa' quererte",
        photo: "Neoroneo.png"
    },
    {
        title: "9. Otro atardecer - Bad Bunny / The Marías",
        lyrics: "Hay mucho de mí que te faltó conocer\nSi la vida me da de nuevo el placer\nVoy a volverte a besar como aquella ve' que el sol se escondió\nMientras la noche llegaba\nNo sé qué sucedió pero me perdí en tu mirada",
        photo: "Veranosinti.png"
    },
    {
        title: "10. BBY ROMEO - Rusowsky / Ralphie Choo",
        lyrics: "Y es que yo no sé lo que tiene\nPero mira cómo me tiene\nNo lo olvido nunca, nunca, nunca\n¿Esa niña qué es lo que tiene?\nPorque mira cómo me tiene\nNo lo olvido nunca, nunca, nunca",
        photo: "Daisy.png"
    },
    {
        title: "11. Si en tu mente estuve - Nsqk",
        lyrics: "Cuéntame siquiera si pensaste en lo mismo de siempre\nCuéntame siquiera si soñaste con un campo verde\nQue solo quiero saber\nSi todas las cosas que te prometiste\nYa están por llegar o cuántas ya cumpliste\nY si es que quieres verme",
        photo: "Roy.png"
    },
       {
        title: "12. Yo no soy celoso - Bad Bunny",
        lyrics: "Yo no soy celoso, ¿pero quién e' ese cabrón?\nDime quién e' ese cabrón\nTranquila, no soy psycho\nNo vo'a hacer un papelón, pero\nAuch, mi corazón",
        photo: "Veranosinti.png"
    },
    {
        title: "13. Vivo si me exiges - Latin Mafia",
        lyrics: "¿Qué he dejado en ti? Me pregunto qué habrá\nEs que tú me lo has dado todo",
        photo: "todoslosdiastodoeldia.png"
    },
    {
        title: "14. Continuo atardecer - Latin Mafia",
        lyrics: "Esa niña siempre luce bien\nAprendió a sentirse siempre como un diez\nNo le tiene miedo a lo que fue ayer\nYeah, y si le tiene miedo\nNo importa, tiene tiempo pa' entenderlo\nSus cicatrices se volvieron lienzos\nEn cada herida se dio un beso\nAhora el espejo la adora\nSiempre se ve mona",
        photo: "Continuoatardecer.png"
    },
    {
        title: "15. Chinita linda - Alvaro Diaz / Rawayana",
        lyrics: "Dime a ver, chinita linda\nEse tancito tuyo hace que no me rinda",
        photo: "Felicilandia.png"
    },
    {
        title: "16. Miau - Young Cister",
        lyrics: "Con esa mirá' que mata como pistola\nSi un hueón le grita, ella se pica a chora\nSigue siendo fina, maquillaje 'e Sephora\nA vece' fría como un freezer\nY cuando está caliente, por mensaje' me lo dice",
        photo: "miau.png"
    },
    {
        title: "17. Te lo prometo - Humbe",
        lyrics: "Quiero acordarme y regresar a ese lugar\nVolver a abrazarte hasta llorar\nY nunca más volver a soltarte\nY siempre aferrarme a nunca volver a olvidarte",
        photo: "escencia.png"
    },
    {
        title: "18. YOKO - Alvaro Diaz",
        lyrics: "Si tú me quisiste cuando ni yo me quería\nQue tú me quisiste cuando ni yo me quería",
        photo: "sayonara.png"
    },
    {
        title: "19. 2:12AM - Rauw Alejandro / Latin Mafia",
        lyrics: "Te vuelvo a tener, amémosno'\nUn mundo perfecto, inventémoslo y ven\nVen y bésame la boca",
        photo: "cosanuestra.png"
    },
    {
        title: "20. Patadas de ahogado - Latin Mafia / Humbe",
        lyrics: "Porque yo ya sabía a lo que iba\nQuerer comprarnos un terreno y construirnos la vida\nPorque contigo lo sabía\nQue tú y yo vamos por la milla\nY que siempre voy a querer saber si va bien todo en tu día\n¿Qué tal va tu día?\nEs lo que me importa, mi vida",
        photo: "patadasdeahogado.png"
    },
    {
        title: "21. Se fue la luz - Latin Mafia / Jesse Baez",
        lyrics: "Se fue la luz, se fue la luz\nY alcanzó a ver sus ojos en mi reflejo\nSe fue la luz, se fue la luz\nY me está cantando canciones en el pecho",
        photo: "sefuelaluz.png"
    },
    {
        title: "22. ESCENCIA - Humbe",
        lyrics: "Cuando me faltó, me diste razón\n¿Qué va a pasar el día que ya no te tenga?\nCuando el mundo ya no siga y se detenga\nCuando en la gloria solo piense en tu ausencia\nPorque perderte es vivir sin mi propia esencia",
        photo: "escencia.png"
    }
];
