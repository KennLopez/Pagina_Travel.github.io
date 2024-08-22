// Define la función `toggleCard` que toma un elemento `card` como argumento
function toggleCard(card) {
    // Busca el elemento con la clase `card-inner` dentro del elemento `card`
    const inner = card.querySelector('.card-inner');
    // Alterna la clase `flipped` o reversa en el elemento `inner`
    // Si `flipped` está presente, se elimina; si no está presente, se añade
    inner.classList.toggle('flipped');
}